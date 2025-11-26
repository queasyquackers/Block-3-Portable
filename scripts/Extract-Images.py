import os
import re
import fitz  # PyMuPDF
import json
from collections import Counter

# Configuration
PDF_DIR = "pdfs"
IMAGES_DIR = "images"
JS_DIR = "."  # Current directory where Test*.js files are located

def setup_directories():
    if not os.path.exists(IMAGES_DIR):
        os.makedirs(IMAGES_DIR)
        print(f"Created images directory: {IMAGES_DIR}")

def extract_pdf_data(pdf_path, test_name):
    """Extracts both images and text from the PDF."""
    doc = fitz.open(pdf_path)
    pdf_data = [] # List of dicts: {'image_path': ..., 'text': ...}
    
    print(f"Processing {pdf_path} ({len(doc)} pages)...")
    
    for i, page in enumerate(doc):
        # 1. Extract Text
        text = page.get_text().lower()
        
        # 2. Extract/Save Image
        pix = page.get_pixmap(matrix=fitz.Matrix(2, 2)) 
        image_filename = f"{test_name}_slide_{i+1}.jpg"
        image_path = os.path.join(IMAGES_DIR, image_filename)
        pix.save(image_path)
        
        pdf_data.append({
            'index': i,
            'image_path': f"images/{image_filename}",
            'text': text
        })
        
    return pdf_data

def get_best_match(query_text, pdf_data):
    """Finds the PDF page that best matches the query text."""
    if not query_text:
        return None
        
    query_tokens = set(re.findall(r'\w+', query_text.lower()))
    # Remove common stop words to improve matching
    stop_words = {'the', 'a', 'an', 'and', 'or', 'of', 'to', 'in', 'on', 'at', 'is', 'are', 'was', 'were', 'slide', 'titled', 'showing', 'details', 'discussing'}
    query_tokens = query_tokens - stop_words
    
    if not query_tokens:
        return None
        
    best_score = 0
    best_page = None
    
    for page in pdf_data:
        page_tokens = set(re.findall(r'\w+', page['text']))
        # Calculate overlap
        overlap = len(query_tokens.intersection(page_tokens))
        score = overlap / len(query_tokens) # Normalize by query length
        
        if score > best_score:
            best_score = score
            best_page = page
            
    # Threshold? Maybe return None if score is too low?
    # For now, just return best match if score > 0
    if best_score > 0:
        return best_page
    return None

def update_js_file(js_filename, pdf_data):
    js_path = os.path.join(JS_DIR, js_filename)
    if not os.path.exists(js_path):
        print(f"Warning: JS file {js_filename} not found. Skipping.")
        return

    print(f"Updating {js_filename}...")
    
    with open(js_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # We need to find each question object to get its description
    # Regex to find objects with "slideImageDescription"
    # This is tricky because we need to replace "slideImagePath" based on "slideImageDescription"
    
    # Strategy:
    # 1. Find all `slideImageDescription": "..."` blocks.
    # 2. Extract the description text.
    # 3. Find the best matching PDF page.
    # 4. Replace the *preceding* `slideImagePath": "..."` with the new path.
    
    # We assume standard JSON-like structure:
    # "slideImagePath": "...",
    # "slideImageDescription": "..."
    
    # Let's iterate through matches of the PAIR
    # Pattern: "slideImagePath":\s*"([^"]*)",\s*"slideImageDescription":\s*"([^"]*)"
    # Note: This assumes Path comes before Description and they are close.
    
    # Better Pattern: Find the whole object or just iterate descriptions?
    # If we iterate descriptions, we need to know where the corresponding Path is.
    
    # Let's try to replace based on the Description content.
    
    new_content = content
    
    # Find all descriptions
    # Group 1: Full match of Path line
    # Group 2: Old Path
    # Group 3: Full match of Description line
    # Group 4: Description Text
    
    # Regex to capture both lines. We assume they are adjacent or close.
    # We will search for `slideImagePath`... then `slideImageDescription`
    
    pattern = re.compile(r'("slideImagePath":\s*")([^"]*)(".*?"slideImageDescription":\s*")([^"]*)(")', re.DOTALL)
    
    def replacement_function(match):
        old_path = match.group(2)
        desc_text = match.group(4)
        
        # Find best match
        best_page = get_best_match(desc_text, pdf_data)
        
        if best_page:
            new_path = best_page['image_path']
            print(f"  Matched: '{desc_text[:30]}...' -> Page {best_page['index']+1}")
            return f'{match.group(1)}{new_path}{match.group(3)}{desc_text}{match.group(5)}'
        else:
            print(f"  No match found for: '{desc_text[:30]}...' (Keeping old path)")
            return match.group(0) # No change
            
    new_content = pattern.sub(replacement_function, content)
    
    with open(js_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
        
    print(f"Updated {js_filename} successfully.")

def get_variable_name(js_path):
    """Reads the JS file and extracts the variable name (e.g., window.L103)."""
    with open(js_path, 'r', encoding='utf-8') as f:
        content = f.read(500) # Read first 500 chars
    
    match = re.search(r'window\.(L\d+[a-zA-Z0-9]*)', content)
    if match:
        return match.group(1)
    return None

def main():
    setup_directories()
    
    if not os.path.exists(PDF_DIR):
        print(f"Error: Directory '{PDF_DIR}' not found. Please create it and add PDFs.")
        return

    # Get all Test*.js files
    js_files = [f for f in os.listdir(JS_DIR) if f.startswith("Test") and f.endswith(".js")]
    
    if not js_files:
        print("No Test*.js files found.")
        return

    print(f"Found {len(js_files)} Test files. Checking for matching PDFs...")
    
    for js_file in js_files:
        js_path = os.path.join(JS_DIR, js_file)
        var_name = get_variable_name(js_path)
        
        if not var_name:
            print(f"Skipping {js_file}: Could not find window.Lxxx variable.")
            continue
            
        # Try to find a matching PDF
        # 1. Exact match: L103.pdf
        pdf_filename = f"{var_name}.pdf"
        pdf_path = os.path.join(PDF_DIR, pdf_filename)
        
        # 2. Partial match
        if not os.path.exists(pdf_path):
            numbers = re.findall(r'\d+', var_name)
            found_pdf = None
            if numbers:
                search_num = numbers[0]
                for f in os.listdir(PDF_DIR):
                    if f.lower().endswith(".pdf") and search_num in f:
                        found_pdf = f
                        break
            
            if found_pdf:
                pdf_filename = found_pdf
                pdf_path = os.path.join(PDF_DIR, pdf_filename)
            else:
                print(f"Skipping {js_file}: No PDF found matching '{var_name}' in {PDF_DIR}.")
                continue
            
        print(f"\n--- Processing {js_file} (Linked to {pdf_filename}) ---")
        
        # 1. Extract Data (Images + Text)
        pdf_data = extract_pdf_data(pdf_path, var_name)
        
        # 2. Update JS File with Smart Matching
        update_js_file(js_file, pdf_data)

if __name__ == "__main__":
    main()

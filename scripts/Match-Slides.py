import os
import re
import sys
import fitz  # PyMuPDF
import json

# Configuration
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
BASE_DIR = os.path.dirname(SCRIPT_DIR)
PDF_DIR = os.path.join(BASE_DIR, 'pdfs')
JS_DIR = BASE_DIR

# Custom Mappings for filenames that don't perfectly match variable names
# var_name (window.X) -> pdf_filename
PDF_MANUAL_MAPPING = {
    "L109L110": "L109110.pdf",  # The specific case we are fixing
    "L107L108": "L107L108.pdf"
}

def extract_pdf_data(pdf_path):
    """Extracts text from the PDF."""
    if not os.path.exists(pdf_path):
        print(f"Error: PDF not found at {pdf_path}")
        return []

    doc = fitz.open(pdf_path)
    pdf_data = [] 
    
    print(f"Processing PDF: {os.path.basename(pdf_path)} ({len(doc)} pages)...")
    
    for i, page in enumerate(doc):
        text = page.get_text().lower()
        # Clean text slightly?
        text = re.sub(r'\s+', ' ', text)
        
        pdf_data.append({
            'page_num': i + 1, # 1-based index
            'text': text
        })
        
    return pdf_data

def get_best_match(query_text, pdf_data):
    """Finds the PDF page that best matches the query text."""
    if not query_text:
        return None
        
    # Improve Tokenization
    # 1. Lowercase
    # 2. Extract words
    query_tokens = set(re.findall(r'\w{4,}', query_text.lower())) # Only words > 3 chars
    
    # Stop words (common academic/medical filler)
    stop_words = {
        'this', 'that', 'slide', 'shows', 'image', 'titled', 'figure', 'diagram', 
        'about', 'discussing', 'relevant', 'points', 'correct', 'answer', 'because',
        'explanation', 'defines', 'states', 'lists', 'comparing', 'contrasts',
        'displays', 'equation', 'formula', 'concept', 'represented'
    }
    query_tokens = query_tokens - stop_words
    
    if len(query_tokens) < 3:
        # If query is too short after filtering, use all words > 2 chars
        query_tokens = set(re.findall(r'\w{3,}', query_text.lower())) - stop_words

    if not query_tokens:
        return None
        
    best_score = 0
    best_page = None
    
    for page in pdf_data:
        page_tokens = set(re.findall(r'\w+', page['text']))
        # Calculate overlap
        intersection = query_tokens.intersection(page_tokens)
        
        # Scoring: 
        # Weighted by length of matched words? (Longer words are more unique)
        # For now, simple count intersection
        score = len(intersection)
        
        # Normalize?
        # score = score / len(query_tokens) 
        
        if score > best_score:
            best_score = score
            best_page = page
            
    # Threshold
    if best_score >= 2: # At least 2 meaningful keyword matches
        # Normalize score for display
        return best_page, best_score, query_tokens
    return None, 0, query_tokens

def update_test_file(js_filename):
    js_path = os.path.join(JS_DIR, js_filename)
    if not os.path.exists(js_path):
        print(f"File {js_filename} not found.")
        return

    # 1. Identify Variable Name
    with open(js_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    match = re.search(r'window\.(L\d+[a-zA-Z0-9]*)', content)
    if not match:
        print(f"Could not find window.Lxxx variable in {js_filename}")
        return
    
    var_name = match.group(1)
    print(f"Global Variable: {var_name}")

    # 2. Find PDF
    pdf_filename = PDF_MANUAL_MAPPING.get(var_name)
    if not pdf_filename:
        # Auto-guess
        pdf_filename = f"{var_name}.pdf"
        if not os.path.exists(os.path.join(PDF_DIR, pdf_filename)):
            # Try removing extra chars?
            pass

    pdf_path = os.path.join(PDF_DIR, pdf_filename)
    if not os.path.exists(pdf_path):
        print(f"PDF {pdf_filename} not found in {PDF_DIR}")
        return

    # 3. Extract PDF Data
    pdf_pages = extract_pdf_data(pdf_path)
    if not pdf_pages:
        return

    # 4. Perform Replacements
    # Regex to find: "pdfPage": <num>, ... "slideImageDescription": "<text>"
    # We capture the whole block to replace validly
    
    # Pattern Logic:
    # Group 1: "pdfPage": 
    # Group 2: <existing_number>
    # Group 3: <stuff between> "slideImageDescription": "
    # Group 4: <description text>
    # Group 5: "
    
    pattern = re.compile(r'("pdfPage":\s*)(\d+)([\s\S]*?"slideImageDescription":\s*")([^"]*)(")', re.DOTALL)
    
    count_updated = 0
    count_total = 0

    def replacement(m):
        nonlocal count_updated, count_total
        count_total += 1
        
        prefix = m.group(1)
        old_page = int(m.group(2))
        middle = m.group(3)
        desc = m.group(4)
        suffix = m.group(5)
        
        # Find best page
        best_page, score, tokens = get_best_match(desc, pdf_pages)
        
        if best_page:
            new_page = best_page['page_num']
            if new_page != old_page:
                print(f"  [Q{count_total}] Update: Page {old_page} -> {new_page} (Score: {score})")
                # print(f"    Desc: {desc[:50]}...")
                # print(f"    Matched Keys: {list(tokens)[:5]}...")
                count_updated += 1
                return f'{prefix}{new_page}{middle}{desc}{suffix}'
            else:
                print(f"  [Q{count_total}] Verified: Page {old_page} is correct (Score: {score})")
        else:
            print(f"  [Q{count_total}] No match found for: '{desc[:30]}...' (Keeping {old_page})")
            
        return m.group(0)

    new_content = pattern.sub(replacement, content)
    
    if count_updated > 0:
        with open(js_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"\nSuccess! Updated {count_updated} questions in {js_filename}.")
    else:
        print("\nNo changes needed.")

if __name__ == "__main__":
    # If arg provided, use it, else default to Test7.js for this task
    target = "Test7.js"
    if len(sys.argv) > 1:
        target = sys.argv[1]
        
    update_test_file(target)

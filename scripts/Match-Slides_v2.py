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
    "L109L110": "L109110.pdf",
    "L107L108": "L107L108.pdf",
    "Test32": "L138.pdf",
    "L134": "L134.pdf",
    "L135": "L135.pdf",
    "L136": "L136.pdf",
    "L137": "L137.pdf",
    # Mappings for Week 15 (Tests 17-20)
    "L123": "L123.pdf", # Test 17
    "L124": "L124.pdf", # Test 18
    "L125": "L125.pdf", # Test 19
    "L126": "L126.pdf", # Test 20
    # Mappings for Tests 8-14 (Week 14)
    "L112": "L112.pdf", # Test 8
    "L113": "L113.pdf", # Test 9
    "L114": "L114.pdf", # Test 10
    "L115": "L115L116.pdf", # Test 11 (Partial)
    "L116": "L115L116.pdf", # Test 11 (Partial)
    "L117": "L117L118.pdf", # Test 12
    "L118": "L117L118.pdf", # Test 12
    "L119": "L119.pdf", # Test 13
    "L120": "L120.pdf", # Test 14
}

def extract_pdf_data(pdf_path):
    """Extracts text from the PDF."""
    if not os.path.exists(pdf_path):
        print(f"Error: PDF not found at {pdf_path}")
        return []

    doc = fitz.open(pdf_path)
    pdf_data = [] 
    
    print(f"Processing PDF: {os.path.basename(pdf_path)} ({len(doc)} pages)...")
    if len(doc) > 0:
        first_page_text = doc[0].get_text().lower()
        print(f"DEBUG: First page text sample: {first_page_text[:100]}...")
    
    for i, page in enumerate(doc):
        text = page.get_text().lower()
        text = re.sub(r'\s+', ' ', text)
        
        pdf_data.append({
            'page_num': i + 1,
            'text': text
        })
        
    return pdf_data

def get_best_match(query_text, pdf_data):
    """Finds the PDF page that best matches the query text."""
    if not query_text:
        return None, 0, set()
        
    # Tokenization
    query_tokens = set(re.findall(r'\w{4,}', query_text.lower()))
    
    stop_words = {
        'this', 'that', 'slide', 'shows', 'image', 'titled', 'figure', 'diagram', 
        'about', 'discussing', 'relevant', 'points', 'correct', 'answer', 'because',
        'explanation', 'defines', 'states', 'lists', 'comparing', 'contrasts',
        'displays', 'equation', 'formula', 'concept', 'represented', 'incorrect',
        'question', 'clinical', 'pearl', 'takeaway'
    }
    query_tokens = query_tokens - stop_words
    
    if len(query_tokens) < 3:
        query_tokens = set(re.findall(r'\w{3,}', query_text.lower())) - stop_words

    if not query_tokens:
        return None, 0, set()
        
    best_score = 0
    best_page = None
    
    for page in pdf_data:
        page_tokens = set(re.findall(r'\w+', page['text']))
        intersection = query_tokens.intersection(page_tokens)
        score = len(intersection)
        
        if score > best_score:
            best_score = score
            best_page = page
            
    if best_score >= 2:
        return best_page, best_score, query_tokens
    return None, 0, query_tokens

def update_test_file(js_filename):
    js_path = os.path.join(JS_DIR, js_filename)
    if not os.path.exists(js_path):
        print(f"File {js_filename} not found.")
        return

    print(f"\nScanning {js_filename}...")

    # 1. Identify Variable Name
    with open(js_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    match = re.search(r'window\.(\w+)', content)
    if not match:
        # Fallback for export const syntax if present (though we moved away from it)
        match = re.search(r'export const (\w+)', content)
        if not match:
            print(f"Could not find window.Lxxx variable in {js_filename}")
            return
    
    var_name = match.group(1)
    print(f"Global Variable: {var_name}")

    # 2. Find PDF
    pdf_filename = PDF_MANUAL_MAPPING.get(var_name)
    if not pdf_filename:
        # Heuristic: L123L124 -> Try L123L124.pdf
        pdf_filename = f"{var_name}.pdf"
        
    pdf_path = os.path.join(PDF_DIR, pdf_filename)
    
    # If variable is combined (e.g. L115L116) but mapping failed or file missing?
    # Test11 uses window.L115L116. PDF is L115L116.pdf.
    
    if not os.path.exists(pdf_path):
        # Maybe it's L123 but PDF is L123.pdf?
        # Try stripping window prefix if it exists? No var_name is L123.
        print(f"PDF {pdf_filename} not found in {PDF_DIR}")
        return

    # 3. Extract PDF Data
    pdf_pages = extract_pdf_data(pdf_path)
    if not pdf_pages:
        return

    # 4. Parse content roughly to find objects
    # We will split by "id": to find question blocks roughly
    # This is fragile but robust enough for a one-off batch script
    # Better: Use regex to find each object block and replace `pdfPage: \d+` inside it.
    
    # We need to iterate over the string, find object boundaries, extract Text/Pearl, Match, Replace.
    
    # We'll use a regex that matches the critical parts of a question object
    # We look for `category`, `questionText`, `clinicalPearl` AND `pdfPage`
    
    # We will build a customized regex for replacement. 
    # Because fields can be in any order, we need to capture the whole object or work with what we have.
    # Given the generated format is consistent:
    # ...
    # "category": "...",
    # "questionText": "...",
    # ...
    # "clinicalPearl": "...",
    # "pdfPage": 1,
    # ...
    
    # Regex Strategy:
    # Find match for `questionText`: "..." (Group 1)
    # ... possibly separate match ...
    # Find match for `clinicalPearl`: "..." (Group 2)
    # ... possibly separate match ...
    # Find match for `pdfPage`: \d+ (Group 3)
    
    # Since we need to replace ONLY the pdfPage number based on the OTHER groups, 
    # and they might be far apart, we can't do one single regex replace easily.
    
    # Plan B:
    # 1. Split content by `    {` (Object start)
    # 2. For each chunk (question), extract QText and Pearl.
    # 3. Find Best Page.
    # 4. Replace `pdfPage: \d+` with `pdfPage: {new_page}` in that chunk.
    # 5. Reassemble.
    
    # Regex split to separate top-level objects (indented by 2 spaces) from nested options (indented by 6 spaces)
    # We use a capture group to keep the delimiter
    chunks = re.split(r'(\n  \{)', content)
    
    print(f"DEBUG: Found {len(chunks)} segments (approx {len(chunks)//2} questions).")
    
    # re.split with capture group returns [preamble, delim, chunk, delim, chunk...]
    # We want to process the 'chunk' parts.
    
    final_parts = []
    
    # The first element is the preamble (window.L... = [)
    final_parts.append(chunks[0])
    
    count_updated = 0
    
    # Iterate over pairs (delim, chunk)
    for i in range(1, len(chunks), 2):
        delim = chunks[i]
        chunk = chunks[i+1] # The content of the object
        
        # Check if valid question
        if 'questionText' in chunk:
            # Extract Text
            q_text_match = re.search(r'questionText":\s*"([^"]+)"', chunk) or re.search(r'questionText:\s*"([^"]+)"', chunk)
            pearl_match = re.search(r'clinicalPearl":\s*"([^"]+)"', chunk) or re.search(r'clinicalPearl:\s*"([^"]+)"', chunk)
            desc_match = re.search(r'slideImageDescription":\s*"([^"]+)"', chunk) or re.search(r'slideImageDescription:\s*"([^"]+)"', chunk)
            
            q_text = q_text_match.group(1) if q_text_match else ""
            pearl = pearl_match.group(1) if pearl_match else ""
            desc = desc_match.group(1) if desc_match else ""
            
            # Build Query
            query = ""
            if desc and len(desc) > 20: 
                query = desc
            elif pearl:
                query = f"{pearl} {q_text[:100]}"
            else:
                query = q_text
                
            if 'pdfPage' in chunk:
                best_page, score, tokens = get_best_match(query, pdf_pages)
                
                # Debug first few
                if i < 10:
                     print(f"DEBUG Q{(i+1)//2}: Query Len: {len(query)} | Best Page: {best_page['page_num'] if best_page else 'None'} | Score: {score}")

                if best_page:
                    chunk, n = re.subn(r'(pdfPage"?: )(\d+)', f'\\g<1>{best_page["page_num"]}', chunk)
                    if n > 0:
                        count_updated += 1
            else:
                 # Insert case
                 best_page, score, tokens = get_best_match(query, pdf_pages)
                 page_num = best_page['page_num'] if best_page else 1
                 
                 if i < 10:
                     print(f"DEBUG Q{(i+1)//2} (Insert): Query Len: {len(query)} | Best Page: {page_num} | Score: {score}")
                 
                 # Insert before the closing brace of the object
                 # The chunk likely ends with something like `\n  },` or `  },`
                 # Regex to find the last closing brace
                 # We want to insert `    pdfPage: X,`
                 
                 # Look for closing brace `}` allowing for trailing comma and whitespace
                 match = re.search(r'(\s*\}\s*,?\s*)$', chunk)
                 if match:
                     suffix = match.group(1)
                     insertion = f",\n    pdfPage: {page_num}{suffix}"
                     # Replace the suffix with insertion
                     chunk = chunk[:match.start(1)] + insertion
                     count_updated += 1
        
        final_parts.append(delim)
        final_parts.append(chunk)

    final_content = ''.join(final_parts)
    
    if count_updated > 0:
        with open(js_path, 'w', encoding='utf-8') as f:
            f.write(final_content)
        print(f"Updated {count_updated} matches in {js_filename}")
    else:
        print("No updates made.")

if __name__ == "__main__":
    targets = [
        'Test8.js', 'Test9.js', 'Test10.js', 'Test11.js', 'Test12.js', 'Test13.js', 'Test14.js',
        'Test17.js', 'Test18.js', 'Test19.js', 'Test20.js'
    ]
    
    for t in targets:
        update_test_file(t)

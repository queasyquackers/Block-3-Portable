import fitz
import os

pdf_path = "pdfs/L103.pdf"

if not os.path.exists(pdf_path):
    print(f"File not found: {pdf_path}")
else:
    doc = fitz.open(pdf_path)
    print(f"Opened {pdf_path} with {len(doc)} pages.")
    
    for i in range(min(5, len(doc))): # Check first 5 pages
        page = doc[i]
        text = page.get_text()
        print(f"\n--- Page {i+1} ---")
        print(text[:200].replace('\n', ' ')) # Print first 200 chars

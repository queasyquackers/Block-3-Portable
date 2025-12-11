import fitz  # pymupdf
import sys
import os

def extract_text_from_pdf(pdf_path, output_path):
    """Extracts text from a PDF and saves it to a text file."""
    try:
        doc = fitz.open(pdf_path)
        text = ""
        for i, page in enumerate(doc):
            text += f"\n=== PAGE {i+1} ===\n"
            text += page.get_text()
        
        os.makedirs(os.path.dirname(output_path), exist_ok=True)
        
        with open(output_path, "w", encoding="utf-8") as f:
            f.write(text)
        print(f"Successfully extracted text to {output_path}")
    except Exception as e:
        print(f"Error extracting text from {pdf_path}: {e}")
        sys.exit(1)

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python extract_pdf_text.py <pdf_path> <output_path>")
        sys.exit(1)
    
    pdf_path = sys.argv[1]
    output_path = sys.argv[2]
    extract_text_from_pdf(pdf_path, output_path)

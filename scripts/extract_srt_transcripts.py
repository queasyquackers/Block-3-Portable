"""
Extract plain text from .srt subtitle files for L121-L126
"""
import re
import os

# Mapping of lectures to .srt files
SRT_FILES = {
    "L121": "Lecture #121_ OMM_ Lab 13 Prep LectureFaculty_ T. Flaum, D.O..srt",
    "L122": "Lecture #122_ DPR_ History and Physical Exam of the Gastroenterology II Faculty_ S. Rivera-Martinez, D.O..srt",
    "L123": "Lecture #123_ Pharmacology_ Beta-Lactam Antibiotics, Other Cell Wall Inhibitors, and Cell Membrane-Active Drugs; Presenter_ L.Goldstein.srt",
    "L124": "Lecture #124_ Pharmacology_ Aminoglycoside Antibiotics; Presenter_ L.Goldstein.srt",
    "L125": "Lecture #125_ Pharmacology_ Protein Synthesis Inhibitors; Presenter_ L.Goldstein.srt",
    "L126_part1": "Lecture #126_ Pharmacology_ Folate Synthesis Inhibitors and Fluoroquinolone Antibiotics Part 1; Presenter_ L.Goldstein.srt",
    "L126_part2": "Lecture #126_ Pharmacology_ Folate Synthesis Inhibitors and Fluroquinolone Antibiotics Part 2 _ Presenter L.Goldstein.srt"
}

base_path = r"c:\Users\quazi\Downloads\Block-3-Portable\transcripts"

def extract_text_from_srt(srt_path):
    """Extract plain text from .srt subtitle file"""
    with open(srt_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # SRT format:
    # 1
    # 00:00:00,000 --> 00:00:02,000
    # Subtitle text
    # 
    # Remove sequence numbers and timestamps, keep only text
    lines = content.split('\n')
    text_lines = []
    
    for line in lines:
        line = line.strip()
        # Skip empty lines
        if not line:
            continue
        # Skip sequence numbers (just digits)
        if line.isdigit():
            continue
        # Skip timestamps
        if '-->' in line:
            continue
        # Keep text
        text_lines.append(line)
    
    return ' '.join(text_lines)

def main():
    for lecture_id, srt_file in SRT_FILES.items():
        srt_path = os.path.join(base_path, srt_file)
        
        if not os.path.exists(srt_path):
            print(f"[!] {lecture_id}: File not found - {srt_file}")
            continue
        
        # Extract text
        text = extract_text_from_srt(srt_path)
        
        # Determine output filename
        if "_part" in lecture_id:
            # Don't create separate file for parts yet
            continue
        else:
            output_file = f"{lecture_id}.txt"
        
        output_path = os.path.join(base_path, output_file)
        
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(text)
        
        print(f"[OK] {lecture_id}: Extracted {len(text)} characters -> {output_file}")
    
    # Special handling for L126 - combine both parts
    l126_parts = []
    for part_id in ["L126_part1", "L126_part2"]:
        srt_file = SRT_FILES[part_id]
        srt_path = os.path.join(base_path, srt_file)
        if os.path.exists(srt_path):
            text = extract_text_from_srt(srt_path)
            l126_parts.append(text)
    
    if l126_parts:
        combined = '\n\n'.join(l126_parts)
        output_path = os.path.join(base_path, "L126.txt")
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(combined)
        print(f"[OK] L126: Combined both parts -> {len(combined)} characters -> L126.txt")
    
    print("\n[OK] All transcripts extracted!")

if __name__ == "__main__":
    main()


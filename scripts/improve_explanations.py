import json
import re
import os

# Map of common brief explanations to improved versions
EXPLANATION_IMPROVEMENTS = {
    # Common brief patterns
    "No.": "This is not the correct mechanism or association for this condition.",
    "Not the mechanism.": "This does not describe the primary mechanism involved.",
    "Not the primary.": "While this may play a role, it is not the primary cause or mechanism.",
    "Different mechanism.": "This describes a different pathological mechanism.",
    "Incorrect.": "This answer does not accurately describe the condition.",
    "Wrong.": "This is not the correct association.",
    "Not primary.": "This is not the primary pathological mechanism.",
    "Not required.": "This is not a necessary component of this process.",
    "Not the target.": "This is not the primary molecular target.",
    "Not applicable.": "This concept does not apply to this clinical scenario.",
    "Not relevant.": "This is not relevant to the described mechanism.",
    "Opposite.": "This describes the opposite effect or mechanism.",
    "Too low.": "This value is too low for the described scenario.",
    "Too high.": "This value is too high for the described scenario.",
    "Ineffective.": "This treatment would not be effective for this condition.",
    "Not effective.": "This intervention is not effective in this clinical scenario.",
    "Not first-line.": "This is not the first-line treatment for this condition.",
    "Secondary.": "This represents a secondary effect rather than the primary mechanism.",
    "Secondary damage.": "This represents secondary damage rather than the primary pathological process.",
    "Partial.": "This answer is only partially correct and misses key elements.",
    "Rare.": "This association is rare and not the typical presentation.",
    "Less common.": "While possible, this is less common than other causes.",
    "Minor.": "This plays only a minor role in the described process.",
    "Indirect.": "This is an indirect effect rather than the primary mechanism.",
    "Different entity.": "This describes a completely different pathological entity.",
    "Different disease.": "This is associated with a different disease process.",
    "Different process.": "This describes a different biological process.",
}

def improve_explanation(text, context_word=""):
    """
    Improve brief explanations by making them more descriptive.
    context_word helps make replacements more specific.
    """
    text = text.strip()
    
    # Direct replacements
    if text in EXPLANATION_IMPROVEMENTS:
        return EXPLANATION_IMPROVEMENTS[text]
    
    # Pattern-based improvements
    # "X only" -> "This describes only X but misses other critical components"
    if re.match(r'^[\w\s]+ only[.\s]*$', text, re.IGNORECASE):
        component = text.replace(' only', '').replace('.', '').strip()
        return f"This describes only {component} but misses other critical components of this process."
    
    # "X causes Y" (very brief) -> Keep if already a sentence
    if len(text.split()) <= 2 and not text.endswith('.'):
        # Very brief, needs expansion
        return text + " (not the primary mechanism in this scenario)."
    
    # If it's already a reasonable sentence (>5 words, ends with period), keep it
    if len(text.split()) >= 5 or '.' in text or ',' in text:
        return text
    
    # Otherwise, append clarification
    return text + " which is not the mechanism described in this question."

def process_test_file(filepath, question_range=None):
    """
    Process a test file and improve brief explanations.
    question_range: tuple (start_id, end_id) to only process specific questions
    """
    print(f"Processing {os.path.basename(filepath)}...")
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract variable name
    var_match = re.search(r'window\.(\w+)\s*=', content)
    if not var_match:
        print(f"  Could not find window variable in {filepath}")
        return
    
    # Parse the questions array using regex
    # Find each question object
    question_pattern = re.compile(
        r'{\s*"id":\s*(\d+),.*?"options":\s*\[(.*?)\]',
        re.DOTALL
    )
    
    fixed_count = 0
    new_content = content
    
    # Find all option explanation patterns
    expl_pattern = re.compile(r'"explanation":\s*"([^"]*)"')
    
    def replace_explanation(match):
        nonlocal fixed_count
        old_expl = match.group(1)
        
        # Check if needs improvement (brief explanation)
        if len(old_expl.split()) <= 3 or old_expl in EXPLANATION_IMPROVEMENTS:
            new_expl = improve_explanation(old_expl)
            if new_expl != old_expl:
                fixed_count += 1
                return f'"explanation": "{new_expl}"'
        
        return match.group(0)
    
    # Process each question
    for q_match in question_pattern.finditer(content):
        q_id = int(q_match.group(1))
        
        # Check if this question is in range
        if question_range and not (question_range[0] <= q_id <= question_range[1]):
            continue
        
        # Get the question block
        q_start = q_match.start()
        q_end = content.find('},', q_match.end()) + 1
        q_block = content[q_start:q_end]
        
        # Replace explanations in this block
        new_block = expl_pattern.sub(replace_explanation, q_block)
        
        if new_block != q_block:
            new_content = new_content.replace(q_block, new_block, 1)
    
    if fixed_count > 0:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"  [OK] Improved {fixed_count} explanations")
    else:
        print(f"  No brief explanations found")
    
    return fixed_count

# Main execution
BASE_DIR = r"c:\Users\quazi\Downloads\Block-3-Portable"

# Tests 21-27: Fix Q41-70
tests_21_27 = [
    ("Test21.js", (41, 70)),
    ("Test23.js", (41, 70)),  # Note: Test22 not mentioned
    ("Test24.js", (41, 70)),
    ("Test25.js", (41, 70)),
    ("Test26.js", (41, 70)),
    ("Test27.js", (41, 70)),
]

# Tests 28-32: Fix all questions
tests_28_32 = [
    ("Test28.js", None),
    ("Test29.js", None),
    ("Test30.js", None),
    ("Test31.js", None),
    ("Test32.js", None),
]

print("=" * 50)
print("IMPROVING WRONG ANSWER EXPLANATIONS")
print("=" * 50)

total_fixed = 0

print("\nProcessing Tests 21-27 (Q41-70)...")
for filename, q_range in tests_21_27:
    filepath = os.path.join(BASE_DIR, filename)
    if os.path.exists(filepath):
        count = process_test_file(filepath, q_range)
        if count:
            total_fixed += count

print("\nProcessing Tests 28-32 (All questions)...")
for filename, q_range in tests_28_32:
    filepath = os.path.join(BASE_DIR, filename)
    if os.path.exists(filepath):
        count = process_test_file(filepath, q_range)
        if count:
            total_fixed += count

print("\n" + "=" * 50)
print(f"COMPLETE: Improved {total_fixed} explanations across all tests")
print("=" * 50)

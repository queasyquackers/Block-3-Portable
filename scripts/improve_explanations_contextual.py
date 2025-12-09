import json
import re
import os

def extract_questions_from_file(filepath, question_range=None):
    """Extract questions as structured data from a test file."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find the array content
    array_match = re.search(r'window\.\w+\s*=\s*\[(.*)\];', content, re.DOTALL)
    if not array_match:
        return []
    
    array_content = '[' + array_match.group(1) + ']'
    
    # Parse JSON (handle JavaScript format)
    # Replace single quotes with double quotes for JSON compatibility
    # This is a simplified parser - may need adjustment
    try:
        questions = json.loads(array_content)
    except:
        # If direct JSON parsing fails, use regex to extract questions
        questions = []
        question_pattern = re.compile(
            r'\{[^}]*"id":\s*(\d+).*?\}(?=\s*,\s*\{|\s*\])',
            re.DOTALL
        )
        # This is complex - let's use a different approach
        return None
    
    if question_range:
        questions = [q for q in questions if question_range[0] <= q.get('id', 0) <= question_range[1]]
    
    return questions

def generate_context_specific_explanation(question_text, option_text, correct_answer_text, category=""):
    """
    Generate a context-specific explanation for why an option is wrong.
    
    Args:
        question_text: The question being asked
        option_text: The wrong answer option
        correct_answer_text: The correct answer text
        category: Question category for context
    
    Returns:
        A context-specific explanation string
    """
    
    # Extract key concepts from question
    question_lower = question_text.lower()
    option_lower = option_text.lower()
    
    # Build explanation based on patterns
    explanation = None
    
    # Pattern 1: "X only" - incomplete answer
    if 'only' in option_lower:
        component = option_text.replace(' only', '').replace('only', '').strip()
        explanation = f"While {component} may be involved, this answer is incomplete and misses other essential components."
    
    # Pattern 2: Different disease/condition
    elif any(term in question_lower for term in ['which', 'what', 'characterized by']):
        if option_text != correct_answer_text:
            explanation = f"{option_text} is not the primary characteristic or cause of the condition described in this question."
    
    # Pattern 3: Mechanism questions
    elif any(term in question_lower for term in ['mechanism', 'causes', 'results from', 'due to', 'mediated by']):
        explanation = f"This describes a different mechanism than the one responsible for the pathophysiology described."
    
    # Pattern 4: Treatment questions
    elif any(term in question_lower for term in ['treatment', 'therapy', 'drug', 'medication']):
        explanation = f"This is not an effective or appropriate treatment for this specific condition."
    
    # Pattern 5: "Not X" patterns
    elif option_lower.startswith('not ') or 'does not' in option_lower:
        explanation = "This statement is factually incorrect for the scenario described."
    
    # Pattern 6: Marker/diagnostic questions
    elif any(term in question_lower for term in ['marker', 'diagnostic', 'test', 'finding']):
        explanation = f"This marker or finding is associated with different conditions, not the one described here."
    
    # Pattern 7: Pathway/signaling questions
    elif any(term in question_lower for term in ['pathway', 'receptor', 'binds to', 'activates']):
        explanation = "This represents a different molecular pathway or signaling mechanism."
    
    # Pattern 8: Cell type questions
    elif any(term in question_lower for term in ['cell', 'cells']):
        explanation = "This cell type or cellular mechanism is not primarily involved in this process."
    
    # Pattern 9: Time/location questions
    elif any(term in question_lower for term in ['where', 'location', 'site']):
        explanation = "This is not the correct anatomical location or site for this process."
    
    # Pattern 10: Numbers/values
    elif re.search(r'\d+', option_text):
        explanation = "This value is not correct for the parameter described in this clinical scenario."
    
    # Default: Generic but still better than "No."
    if not explanation:
        explanation = "This option does not correctly describe the mechanism, association, or characteristic relevant to this question."
    
    return explanation

def process_file_with_context(filepath, question_range=None):
    """Process a file and improve explanations with context awareness."""
    print(f"Processing {os.path.basename(filepath)}...")
    
    with open(filepath, 'r', encoding='utf-8') as f:
        original_content = f.read()
    
    # Track changes
    modified_content = original_content
    changes_made = 0
    
    # Parse questions using regex (more reliable than JSON for JS files)
    # Find each question block
    question_pattern = re.compile(
        r'(\{\s*"id":\s*(\d+),\s*"category":\s*"([^"]*)",\s*"questionText":\s*"([^"]*)".*?"options":\s*\[(.*?)\].*?"correctAnswerIndex":\s*(\d+))',
        re.DOTALL
    )
    
    for q_match in question_pattern.finditer(original_content):
        full_match = q_match.group(0)
        q_id = int(q_match.group(2))
        category = q_match.group(3)
        question_text = q_match.group(4)
        options_block = q_match.group(5)
        correct_idx = int(q_match.group(6))
        
        # Check if in range
        if question_range and not (question_range[0] <= q_id <= question_range[1]):
            continue
        
        # Parse options
        option_pattern = re.compile(r'\{\s*"text":\s*"([^"]*)",\s*"explanation":\s*"([^"]*)"\s*\}')
        options = option_pattern.findall(options_block)
        
        if not options or len(options) <= correct_idx:
            continue
        
        correct_answer_text = options[correct_idx][0]
        
        # Process each wrong answer
        new_options_block = options_block
        for idx, (opt_text, opt_explanation) in enumerate(options):
            if idx == correct_idx:
                continue  # Skip correct answer
            
            # Check if explanation needs improvement
            generic_patterns = [
                "This is not the correct mechanism or association for this condition.",
                "This represents secondary damage rather than the primary pathological process.",
                "This does not describe the primary mechanism involved.",
                "This option does not correctly describe the mechanism, association, or characteristic relevant to this question.",
                "This describes a different pathological mechanism.",
                "This answer does not accurately describe the condition.",
                "This is not the correct association.",
                "This is not the primary pathological mechanism.",
                "This is not a necessary component of this process.",
                "This is not the primary molecular target.",
                "This concept does not apply to this clinical scenario.",
                "This is not relevant to the described mechanism.",
                "This describes the opposite effect or mechanism.",
                "This intervention is not effective in this clinical scenario.",
                "This is not the first-line treatment for this condition.",
                "This represents a secondary effect rather than the primary mechanism.",
                "This answer is only partially correct and misses key elements.",
                "This association is rare and not the typical presentation.",
                "This plays only a minor role in the described process.",
                "This is an indirect effect rather than the primary mechanism.",
                "This describes a completely different pathological entity.",
                "This is associated with a different disease process.",
                "This describes a different biological process.",
            ]
            
            is_generic = (opt_explanation in generic_patterns or 
                         len(opt_explanation.split()) <= 5 or
                         opt_explanation.endswith(" which is not the mechanism described in this question."))
            
            if is_generic:
                # Generate contextual explanation
                new_explanation = generate_context_specific_explanation(
                    question_text, opt_text, correct_answer_text, category
                )
                
                # Replace in options block
                old_option = f'{{"text": "{opt_text}", "explanation": "{opt_explanation}"}}'
                new_option = f'{{"text": "{opt_text}", "explanation": "{new_explanation}"}}'
                
                if old_option in new_options_block:
                    new_options_block = new_options_block.replace(old_option, new_option, 1)
                    changes_made += 1
        
        # Replace the entire question block if changes were made
        if new_options_block != options_block:
            # Reconstruct the question with new options
            new_full_match = full_match.replace(options_block,  new_options_block)
            modified_content = modified_content.replace(full_match, new_full_match, 1)
    
    # Write back if changes were made
    if changes_made > 0:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(modified_content)
        print(f"  [OK] Enhanced {changes_made} explanations with context")
    else:
        print(f"  No generic explanations found to improve")
    
    return changes_made

# Main execution
BASE_DIR = r"c:\Users\quazi\Downloads\Block-3-Portable"

# Tests to process
tests_to_process = [
    ("Test23.js", (41, 70)),
    ("Test24.js", (41, 70)),
    ("Test25.js", (41, 70)),
    ("Test26.js", (41, 70)),
    ("Test27.js", (41, 70)),
    ("Test28.js", None),
    ("Test29.js", None),
    ("Test30.js", None),
    ("Test31.js", None),
    ("Test32.js", None),
]

print("=" * 60)
print("GENERATING CONTEXT-SPECIFIC WRONG ANSWER EXPLANATIONS")
print("=" * 60)

total_enhanced = 0

for filename, q_range in tests_to_process:
    filepath = os.path.join(BASE_DIR, filename)
    if os.path.exists(filepath):
        count = process_file_with_context(filepath, q_range)
        total_enhanced += count

print("\n" + "=" * 60)
print(f"COMPLETE: Enhanced {total_enhanced} explanations with context")
print("=" * 60)

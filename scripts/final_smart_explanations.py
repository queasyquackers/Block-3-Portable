"""
Smart contextual explanation replacer for Tests 21-27.
This specifically targets the generic explanations inserted by the first script.
"""
import re
import os

def get_smart_explanation(question_text, option_text, category):
    """Generate context-aware explanation based on question and option content."""
    q_lower = question_text.lower()
    opt_lower = option_text.lower()
    
    # Analyze question type and generate appropriate explanation
    
    # Treatment/Therapy questions
    if any(word in q_lower for word in ['treatment', 'therapy', 'drug', 'first-line', 'medication', 'inhibitor']):
        if 'only' in opt_lower:
            return f"While {option_text.replace(' only', '')} has some role, it is not the primary or first-line treatment for this condition."
        return f"{option_text} is not the recommended treatment for this specific clinical scenario."
    
    # Mechanism questions
    elif any(word in q_lower for word in ['mechanism', 'responsible for', 'causes', 'results from', 'mediated by', 'due to']):
        if 'only' in opt_lower:
            return f"This answer only identifies {option_text.replace(' only', '')} but misses the primary mechanism."
        return f"This describes a different pathophysiological mechanism, not the one primarily responsible here."
    
    # Receptor/Binding questions
    elif any(word in q_lower for word in ['receptor', 'binds', 'binding', 'targets']):
        if 'only' in opt_lower:
            return f"{option_text.replace(' only', '')} alone does not account for the complete receptor interaction."
        return f"This receptor or binding partner is not the primary target in this pathway."
    
    # Cell type questions
    elif any(word in q_lower for word in ['cell type', 'cells', 'which cell']):
        if 'only' in opt_lower:
            return f"While {option_text.replace(' only', '')} may be present, other cell types are also critically involved."
        return f"This cell type does not play the primary role in the described process."
    
    # Marker/Diagnostic questions
    elif any(word in q_lower for word in ['marker', 'diagnostic', 'associated with', 'characteristic']):
        if 'only' in opt_lower:
            return f"{option_text.replace(' only', '')} alone is insufficient as a diagnostic marker for this condition."
        return f"This marker is not characteristically associated with the condition described."
    
    # Pathway/Signaling questions
    elif any(word in q_lower for word in ['pathway', 'signaling', 'cascade', 'activates']):
        return f"This describes a different signaling pathway, not the one primarily activated in this context."
    
    # Location/Anatomic questions
    elif any(word in q_lower for word in ['location', 'site', 'where', 'localiz']):
        return f"This is not the correct anatomical site or location for this finding."
    
    # Composition/Structure questions
    elif any(word in q_lower for word in ['composed of', 'contains', 'consists of', 'made of']):
        if 'only' in opt_lower:
            return f"While {option_text.replace(' only', '')} may be a component, there are other essential elements."
        return f"This is not the primary structural or compositional element described."
    
    # Antibody/Immune questions
    elif any(word in q_lower for word in ['antibod', 'autoimmune', 'immune']):
        return f"This antibody or immune mechanism is associated with different autoimmune conditions."
    
    # Genetic/Molecular questions
    elif any(word in q_lower for word in ['gene', 'mutation', 'chromosome']):
        return f"This genetic alteration is not the primary mutation associated with this condition."
    
    # Time/Temporal questions
    elif any(word in q_lower for word in ['when', 'timing', 'phase']):
        return f"This timing or phase does not correctly describe when this process occurs."
    
    # Value/Measurement questions
    elif any(word in q_lower for word in ['value', 'level', 'count', 'number']):
        return f"This value is not consistent with the clinical scenario described."
    
    # Default based on option patterns
    elif 'does not' in opt_lower or 'not ' in opt_lower:
        return "This statement is factually incorrect for this clinical context."
    elif 'only' in opt_lower:
        component = option_text.replace(' only', '').replace('only',  '').strip()
        return f"While {component} may contribute, this answer misses other critical components of the correct explanation."
    else:
        # Generic but contextual
        return f"This option does not accurately describe the primary mechanism, characteristic, or association relevant to this question."

def process_test_file(filepath, question_range=None):
    """Process file and replace generic explanations."""
    print(f"\\nProcessing {os.path.basename(filepath)}...")
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Generic patterns to replace
    generic_patterns = [
        "This is not the correct mechanism or association for this condition.",
        "This option does not correctly describe the mechanism, association, or characteristic relevant to this question.",
        "This represents secondary damage rather than the primary pathological process.",
        "This does not describe the primary mechanism involved.",
    ]
    
    modified = content
    total_replaced = 0
    
    # Parse each question
    question_pattern = re.compile(
        r'\\{\\s*"id":\\s*(\\d+),\\s*"category":\\s*"([^"]*)",\\s*"questionText":\\s*"([^"]*)".*?"options":\\s*\\[(.*?)\\],\\s*"correctAnswerIndex"',
        re.DOTALL
    )
    
    for q_match in question_pattern.finditer(content):
        q_id = int(q_match.group(1))
        category = q_match.group(2)
        question_text = q_match.group(3)
        options_block = q_match.group(4)
        
        # Check range
        if question_range and not (question_range[0] <= q_id <= question_range[1]):
            continue
        
        # Find each option with generic explanation
        option_pattern = re.compile(r'\\{\\s*"text":\\s*"([^"]*)",\\s*"explanation":\\s*"([^"]*)"\\s*\\}')
        
        for opt_match in option_pattern.finditer(options_block):
            opt_text = opt_match.group(1)
            opt_explanation = opt_match.group(2)
            
            # Check if generic
            if opt_explanation in generic_patterns:
                # Generate smart explanation
                new_explanation = get_smart_explanation(question_text, opt_text, category)
                
                # Replace
                old_full = opt_match.group(0)
                new_full = f'{{"text": "{opt_text}", "explanation": "{new_explanation}"}}'
                
                modified = modified.replace(old_full, new_full, 1)
                total_replaced += 1
    
    if total_replaced > 0:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(modified)
        print(f"  ✓ Replaced {total_replaced} generic explanations with context-aware versions")
    else:
        print(f"  No generic patterns found")
    
    return total_replaced

# Main
BASE_DIR = r"c:\\Users\\quazi\\Downloads\\Block-3-Portable"

tests = [
    ("Test23.js", (41, 70)),
    ("Test24.js", (41, 70)),
    ("Test25.js", (41, 70)),
    ("Test26.js", (41, 70)),
    ("Test27.js", (41, 70)),
]

print("="*70)
print("FINAL PASS: Replacing Generic Explanations with Smart Context-Aware Ones")
print("="*70)

total = 0
for filename, q_range in tests:
    filepath = os.path.join(BASE_DIR, filename)
    if os.path.exists(filepath):
        count = process_test_file(filepath, q_range)
        total += count

print(f"\\n{'='*70}")
print(f"COMPLETE: Replaced {total} generic explanations across all tests")
print(f"{'='*70}")

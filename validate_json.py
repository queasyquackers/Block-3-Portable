import json
import re
import os

files = ['Test8.js', 'Test9.js', 'Test10.js']
cwd = os.getcwd()

for filename in files:
    path = os.path.join(cwd, filename)
    try:
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Strip header "window.Lxxx = " and footer ";"
        # Find the first [ and the last ]
        start = content.find('[')
        end = content.rfind(']')
        
        if start == -1 or end == -1:
            print(f"❌ {filename}: Could not find array brackets.")
            continue
            
        json_str = content[start:end+1]
        
        # JS allows trailing commas, JSON does not.
        # Simple regex to remove trailing commas before ] or }
        # json_str = re.sub(r',\s*([\]}])', r'\1', json_str) 
        # Actually standard json library is strict. Let's hope I didn't write trailing commas.
        # But wait, my generated code usually adheres to JSON standard inside the JS file except for keys...
        # Wait, the keys in my previously generated files are quoted `"id":`, so it IS valid JSON usually.
        
        try:
             data = json.loads(json_str)
             print(f"[PASS] {filename}: Valid JSON structure.")
        except json.JSONDecodeError as e:
             print(f"[FAIL] {filename}: JSON Error at line {e.lineno}, col {e.colno}: {e.msg}")
             # Print context
             lines = json_str.splitlines()
             if 0 <= e.lineno - 1 < len(lines):
                 print(f"   Line: {lines[e.lineno-1]}")
                 
    except Exception as e:
        print(f"[ERROR] {filename}: Error reading file: {e}")

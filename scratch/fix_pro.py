import os
import re

def fix_pro_to_com(directory):
    for root, dirs, files in os.walk(directory):
        if 'node_modules' in root or '.git' in root or 'dist' in root:
            continue
            
        for file in files:
            if not file.endswith(('.tsx', '.ts', '.html', '.json', '.md', '.txt')):
                continue
                
            filepath = os.path.join(root, file)
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
            except Exception:
                continue
            
            original_content = content
            content = re.sub(r'monashwamcalculator\.pro', 'monashwamcalculator.com', content, flags=re.IGNORECASE)
            
            if content != original_content:
                print(f"Fixed (case insensitive): {filepath}")
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(content)

fix_pro_to_com('.')

import os
import re

def search_and_replace(directory, old_brand, new_brand, old_domain, new_domain):
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
            
            # Replace brand names
            content = content.replace(old_brand, new_brand)
            content = content.replace("MyCalculatorHub", "MonashWamCalculator")
            content = content.replace("mycalculatorhub", "monashwamcalculator")
            
            # Additional targeted replaces if needed
            content = content.replace("mycalculatorhub.pro", new_domain)
            
            if content != original_content:
                print(f"Updated: {filepath}")
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(content)

search_and_replace('.', 'My Calculator Hub', 'Monash Wam Calculator', 'monashwamcalculator.com', 'monashwamcalculator.com')

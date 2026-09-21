import os

files_to_fix = [
    'src/pages/LoveCalculator.tsx',
    'src/pages/DogAgeCalculator.tsx',
    'src/pages/IdealWeightCalculator.tsx',
    'src/pages/ZodiacSignCalculator.tsx',
    'src/pages/BirthstoneCalculator.tsx'
]

for file_path in files_to_fix:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Fix Seo import
    content = content.replace("import { Seo } from '../components/Seo';", "import Seo from '../components/Seo';")
    
    # Fix CalculatorSectionWithInlineAds import
    content = content.replace("import { CalculatorSectionWithInlineAds } from '../components/CalculatorSectionWithInlineAds';", "import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';")
    
    # Remove Header import
    content = content.replace("import { Header } from '../components/Header';\n", "")
    
    # Remove <Header /> component usage
    content = content.replace("<Header />\n", "")
    content = content.replace("      <Header />\n", "")

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

print("Fixed imports in all 5 files.")

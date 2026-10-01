import re

file_path = 'src/data/calculatorCatalog.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# I will comment out the objects in the array.
# Let's match each block like:
#        {
#          href: '/love-calculator',
#          title: 'Love Calculator',
#          description: 'Test your match percentage online with our fun love test algorithm.'
#        },

targets = [
    r"(\s*\{\s*href:\s*'/love-calculator'.*?\},)",
    r"(\s*\{\s*href:\s*'/zodiac-sign-calculator'.*?\},)",
    r"(\s*\{\s*href:\s*'/birthstone-calculator'.*?\},)",
    r"(\s*\{\s*href:\s*'/dog-age-calculator'.*?\},)",
    r"(\s*\{\s*href:\s*'/sharehouse-rent-splitter'.*?\},)"
]

for target in targets:
    content = re.sub(target, r"/* \1 */", content, flags=re.DOTALL)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Commented out low-value tools in calculatorCatalog.ts")

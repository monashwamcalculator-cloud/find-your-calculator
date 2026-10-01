import re

file_path = 'src/App.tsx'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Add AgeCalculatorBanner below main
content = content.replace(
    "      </main>\n      <Footer />",
    "      </main>\n      <AgeCalculatorBanner />\n      <Footer />"
)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed App.tsx successfully.")

import re

file_path = 'src/App.tsx'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add import
content = content.replace(
    "import TopSchoolsBanner from './components/TopSchoolsBanner';",
    "import TopSchoolsBanner from './components/TopSchoolsBanner';\nimport AgeCalculatorBanner from './components/AgeCalculatorBanner';"
)

# 2. Add AgeCalculatorBanner above Footer
content = content.replace(
    "        </main>\n        <Footer />",
    "        </main>\n        <AgeCalculatorBanner />\n        <Footer />"
)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Patched App.tsx successfully.")

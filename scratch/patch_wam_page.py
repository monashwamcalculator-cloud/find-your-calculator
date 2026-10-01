import re

file_path = 'src/pages/WAMCalculatorPage.tsx'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add imports
content = content.replace(
    "import WAMCalculator from '../components/WAMCalculator';",
    "import WAMCalculator from '../components/WAMCalculator';\nimport CalculatorSEOSection from '../components/CalculatorSEOSection';\nimport { RICH_SEO_DATA } from '../data/richSeoData';"
)

# 2. Replace FAQSection with CalculatorSEOSection
content = content.replace(
    '''        <div className="max-w-4xl mx-auto">
          <FAQSection items={faqs} title="Frequently Asked Questions" />
        </div>''',
    '''        <div className="max-w-4xl mx-auto">
          <CalculatorSEOSection seoData={RICH_SEO_DATA['/wam-calculator']} />
        </div>'''
)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Patched WAMCalculatorPage.tsx")

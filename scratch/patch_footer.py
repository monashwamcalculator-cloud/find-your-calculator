import re

file_path = 'src/components/Footer.tsx'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

new_link_html = '                <li><a href="https://www.agecalculatorlab.com/" target="_blank" rel="noopener noreferrer" className="footer-link">Age Calculator Lab &nearr;</a></li>\n                <FooterLink href="/calculators">Calculators hub</FooterLink>'

content = content.replace(
    '<FooterLink href="/calculators">Calculators hub</FooterLink>',
    new_link_html
)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Patched Footer.tsx successfully.")

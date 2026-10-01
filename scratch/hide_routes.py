import re

file_path = 'src/App.tsx'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Comment out imports
imports_to_comment = [
    "const LoveCalculator = lazy(() => import('./pages/LoveCalculator'));",
    "const DogAgeCalculator = lazy(() => import('./pages/DogAgeCalculator'));",
    "const ZodiacSignCalculator = lazy(() => import('./pages/ZodiacSignCalculator'));",
    "const BirthstoneCalculator = lazy(() => import('./pages/BirthstoneCalculator'));",
    "const SharehouseRentSplitter = lazy(() => import('./pages/SharehouseRentSplitter'));"
]

for imp in imports_to_comment:
    if imp in content:
        content = content.replace(imp, f"// {imp}")

# Comment out routes
routes_to_comment = [
    '<Route path="/love-calculator" element={<LoveCalculator />} />',
    '<Route path="/dog-age-calculator" element={<DogAgeCalculator />} />',
    '<Route path="/zodiac-sign-calculator" element={<ZodiacSignCalculator />} />',
    '<Route path="/birthstone-calculator" element={<BirthstoneCalculator />} />',
    '<Route path="/sharehouse-rent-splitter" element={<SharehouseRentSplitter />} />'
]

for route in routes_to_comment:
    if route in content:
        content = content.replace(route, f"{{/* {route} */}}")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Commented out routes in App.tsx")

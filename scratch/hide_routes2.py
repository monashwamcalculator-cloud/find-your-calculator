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
    "  if (path === '/love-calculator') return withSuspense(<LoveCalculator />);",
    "  if (path === '/dog-age-calculator') return withSuspense(<DogAgeCalculator />);",
    "  if (path === '/zodiac-sign-calculator') return withSuspense(<ZodiacSignCalculator />);",
    "  if (path === '/birthstone-calculator') return withSuspense(<BirthstoneCalculator />);",
    "  if (path === '/sharehouse-rent-splitter') return withSuspense(<SharehouseRentSplitter />);"
]

for route in routes_to_comment:
    if route in content:
        content = content.replace(route, f"// {route}")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Commented out routes in App.tsx")

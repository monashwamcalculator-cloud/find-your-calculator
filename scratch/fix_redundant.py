import re

file_path = 'src/pages/WAMtoGPA.tsx'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the redundant table section with a better SEO block
old_redundant_section_pattern = re.compile(r'<div className="mt-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">.*?</div>', re.DOTALL)

new_seo_block = """<div className="mt-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Why Australian Universities Use WAM Over GPA
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            In Australia, most major universities (such as Monash University, University of Melbourne, and UNSW) rely primarily on a Weighted Average Mark (WAM) rather than a GPA. A WAM is far more precise because it averages your exact percentage scores (e.g., 74%) rather than grouping them into broad GPA bands (e.g., 3.0).
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            However, when applying for international opportunities—such as studying abroad in the USA or Canada, or applying to global graduate programs—you will almost certainly be asked to provide your GPA on a 4.0 scale. This calculator bridges that gap by applying standard Australian conversion metrics to your WAM.
          </p>
          
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-6 mb-3">
            Understanding the 4.0 vs 7.0 GPA Scales
          </h3>
          <ul className="list-disc list-inside space-y-3 text-sm text-gray-600 dark:text-gray-400 mb-4">
            <li><strong>The 4.0 Scale:</strong> The global standard used predominantly in North America. A High Distinction (80%+) maps to a perfect 4.0, while a Distinction maps to a 3.0.</li>
            <li><strong>The 7.0 Scale:</strong> Used domestically by some Australian institutions (e.g., University of Queensland) and medical admissions boards (GEMSAS). A High Distinction maps to a 7.0, and a Distinction maps to a 6.0.</li>
          </ul>
        </div>"""

content = old_redundant_section_pattern.sub(new_seo_block, content, count=1)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Replaced redundant table section in WAMtoGPA.tsx successfully.")

import re

file_path = 'src/pages/WAMtoGPA.tsx'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Let's remove the dangling code
old_code = """          </ul>
        </div>
          <p className="text-xs text-gray-500 dark:text-gray-500 mt-4">
            Example: a WAM of 75 often maps near distinction-level performance. Enter 75 in the converter to see
            estimated 4.0 and 7.0 GPA values for your application.
          </p>
        </div>"""

new_code = """          </ul>
        </div>"""

content = content.replace(old_code, new_code)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed JSX syntax in WAMtoGPA.tsx successfully.")

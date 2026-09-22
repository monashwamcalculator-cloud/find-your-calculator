import re

file_path = 'src/data/calculatorGuideExpansionsPart2.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# We need to find the block for '/wam-to-gpa-calculator' and replace it.
# Let's use regex to find from `  '/wam-to-gpa-calculator': buildStandardCalculatorGuide({` 
# up to the next `  '/wam-to-cgpa-calculator':` or similar.

new_block = """  '/wam-to-gpa-calculator': buildStandardCalculatorGuide({
    whatItDoes: {
      paragraphs: [
        'The WAM to GPA Calculator is the definitive tool for university students looking to convert their Weighted Average Mark (WAM) into a standard Grade Point Average (GPA). In Australia, most universities use WAM as their primary grading metric (a percentage out of 100). However, many international universities, global employers, and scholarship boards evaluate candidates exclusively based on their GPA. Our free WAM to GPA converter seamlessly bridges this gap by mapping your exact WAM to both the standard 4.0 scale (widely used in the US and globally) and the 7.0 scale (used by several Australian institutions).',
        'This tool is highly sought after by students applying for international exchange programs, postgraduate studies (such as a Master\\'s or PhD), and highly competitive corporate graduate programs. Instead of guessing how your 75 WAM translates to an overseas university\\'s admission requirements, you can use this calculator to generate an immediate, accurate estimation based on standard Australian grading band conversions.'
      ],
    },
    howItWorks: {
      paragraphs: [
        'Unlike WAM, which is a continuous percentage, GPA relies on a "bucket" or "band" system. This means that any percentage mark within a certain range is assigned a fixed grade point value. For example, a High Distinction (HD) spans from 80% to 100%. Whether you score an 81 or a 99, your GPA for that specific subject will be exactly the same.',
        'Our WAM to GPA Calculator uses the most universally accepted conversion framework across Australian Group of Eight (Go8) universities to provide a highly accurate GPA estimate from your cumulative WAM.'
      ],
      table: {
        headers: ['WAM Percentage Range', 'Academic Letter Grade', '4.0 GPA Scale', '7.0 GPA Scale', 'Classification'],
        rows: [
          ['80% – 100%', 'High Distinction (HD)', '4.0', '7.0', 'Exceptional'],
          ['70% – 79%', 'Distinction (D)', '3.0', '6.0', 'Very Good'],
          ['60% – 69%', 'Credit (C)', '2.0', '5.0', 'Good'],
          ['50% – 59%', 'Pass (P)', '1.0', '4.0', 'Satisfactory'],
          ['0% – 49%', 'Fail (N)', '0.0', '0.0', 'Unsatisfactory'],
        ],
      },
      callouts: [
        {
          variant: 'info',
          title: 'Important Note on Precision',
          text: 'Because GPA converts unit-by-unit rather than averaging your total percentage, two students with an identical WAM of 76 could theoretically have slightly different official CGPAs (e.g., 3.1 vs 2.9) depending on how their marks are distributed across individual subjects. This WAM to GPA converter provides a very strong directional estimate, but for official transcript purposes, you should always calculate your unit-by-unit CGPA.',
        },
        {
          variant: 'warning',
          title: 'Different University Policies',
          text: 'Some universities (like the University of Queensland or Griffith University) natively use the 7.0 GPA scale and have specific calculations for Honours classification. Always check your specific university\\'s handbook if you require the figure for internal honours admission.',
        }
      ],
    },
    whenToUse: {
      paragraphs: [
        'Converting WAM to GPA is one of the most common administrative tasks for university students approaching graduation. You should bookmark and use this tool whenever you need to align your Australian academic record with international or corporate standards.'
      ],
      bullets: [
        'Applying for Study Abroad & Exchange Programs: US, Canadian, and European universities almost exclusively ask for a 4.0 GPA.',
        'Postgraduate & Master\\'s Applications: Medical schools (GAMSAT applications) and Law programs (Juris Doctor) heavily rely on GPA cutoffs.',
        'Corporate Graduate Programs: Global consulting firms and investment banks often use automated applicant tracking systems (ATS) that require you to input a GPA out of 4.0.',
        'Scholarships & Grants: Many merit-based scholarships require a "minimum GPA of 3.0", which directly translates to a Distinction (70+) WAM average.',
        'Resume & LinkedIn Optimization: Translating your WAM to a GPA makes your academic achievements instantly recognizable to international recruiters.'
      ],
    },
    steps: [
      'Locate your current cumulative WAM on your university portal (e.g., WES, Sydney Student, ISIS).',
      'Enter your exact WAM percentage into the WAM to GPA Calculator input field.',
      'Instantly view your equivalent GPA on the 4.0 scale (US/Global standard).',
      'Instantly view your equivalent GPA on the 7.0 scale (Australian alternative standard).',
      'Reference the grade band table to see where your WAM sits within the HD/D/C/P classifications.',
      'Include the appropriate scale when listing it on your resume (e.g., "GPA: 3.2 / 4.0").'
    ],
    examples: [
      {
        title: 'Scenario 1: Applying for a US Exchange Program',
        description:
          'Sarah has a WAM of 78 (Distinction average). She is applying for a semester abroad at UCLA. The application requires a GPA out of 4.0. Using the converter, she sees her 78 WAM falls comfortably in the Distinction band, giving her a highly competitive 3.0/4.0 GPA for her application.',
      },
      {
        title: 'Scenario 2: Medical School Application (GEMSAS)',
        description:
          'James has a WAM of 82 (High Distinction average) and is applying for a Doctor of Medicine. Australian medical schools use a 7.0 GPA scale. The calculator shows that his WAM maps to a 7.0 GPA, placing him in the highest possible academic tier for his application.',
      },
      {
        title: 'Scenario 3: Graduate Job at a Consulting Firm',
        description:
          'David has a WAM of 68 (Credit average). A Tier 1 consulting firm asks for his GPA on a 4.0 scale in their online portal. The calculator converts his 68 WAM to a 2.0 GPA. Because many firms require a 3.0 (Distinction) minimum, David knows he needs to focus his application on his extracurricular leadership and work experience to stand out.',
      }
    ],
  }),
  '/wam-to-cgpa-calculator':"""

# Using regex to replace the block
pattern = re.compile(r"  '/wam-to-gpa-calculator': buildStandardCalculatorGuide\(\{.*?\n  \}\),\n  '/wam-to-cgpa-calculator':", re.DOTALL)
new_content = pattern.sub(new_block, content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Replaced /wam-to-gpa-calculator guide content successfully.")

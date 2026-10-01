import { type CalculatorSEOData } from '../components/CalculatorSEOSection';

export const RICH_SEO_DATA: Record<string, CalculatorSEOData> = {
  '/wam-calculator': {
    title: 'How is Weighted Average Mark (WAM) Calculated?',
    intro: 'Your Weighted Average Mark (WAM) is the most critical metric for your university academic standing. Unlike a simple average, a WAM accounts for the credit point value of each unit. This means a heavy 12-credit point unit will impact your final WAM twice as much as a standard 6-credit point unit. Our WAM calculator handles these complex credit weightings automatically, alongside specific university rules like half-weighting for first-year subjects (Level 1 units). Understanding your WAM is essential for graduate program applications, scholarships, and academic progression.',
    formula: {
      math: 'WAM = ∑(Unit Mark × Credit Points) / ∑(Credit Points)',
      explanation: [
        'Multiply your final mark in each unit by the credit point value of that unit.',
        'Add all of these values together to get your total weighted marks (the numerator).',
        'Add all of your attempted credit points together to get your total credit points (the denominator).',
        'Divide your total weighted marks by your total credit points to find your exact WAM.'
      ]
    },
    example: {
      scenario: 'Sarah takes three units in her first semester. Unit A is 6 credits (she scores 85), Unit B is 6 credits (she scores 72), and Unit C is a double-weighted 12 credit project (she scores 90).',
      steps: [
        'Unit A: 85 × 6 = 510',
        'Unit B: 72 × 6 = 432',
        'Unit C: 90 × 12 = 1080',
        'Total weighted marks: 510 + 432 + 1080 = 2022',
        'Total credit points: 6 + 6 + 12 = 24',
        'Final Calculation: 2022 ÷ 24 = 84.25'
      ],
      result: '84.25 (High Distinction WAM)'
    },
    faqs: [
      {
        question: 'Do failed units count towards my WAM?',
        answer: 'Yes. If you fail a unit (e.g., score 45), that mark of 45 is still multiplied by the credit points and added to your total, and those credit points are added to your total attempted credits. This drags down your WAM significantly. Some universities allow you to retake units, but the fail mark often remains on your official transcript WAM.'
      },
      {
        question: 'What is first-year half weighting?',
        answer: 'Many Australian universities (like Monash) recognize that the transition to university is difficult. They apply a 0.5 multiplier to the credit points of Level 1 (first-year) units when calculating your course WAM. This means first-year units have half the impact on your final WAM compared to second or third-year units.'
      },
      {
        question: 'Is a 75 WAM good?',
        answer: 'Yes! A WAM of 75 places you in the Distinction (D) band. This is generally considered a very strong academic performance, making you competitive for most graduate roles, internships, and honours programs.'
      }
    ]
  },
  '/wam-to-gpa-calculator': {
    title: 'Converting WAM to GPA: A Comprehensive Guide',
    intro: 'While WAM (Weighted Average Mark) is the standard metric used in Australia, many international institutions, graduate medical schools (like GEMSAS), and multinational employers prefer a GPA (Grade Point Average). Converting between a 100-point WAM scale and a 4.0 or 7.0 GPA scale is not a direct 1-to-1 percentage match. Instead, universities map specific WAM percentage bands (e.g., 80-100) to specific GPA points (e.g., 7.0 or 4.0). Using our WAM to GPA calculator ensures you are mapping these bands correctly based on official university grading policies.',
    formula: {
      math: 'GPA = ∑(Grade Point × Credit Points) / ∑(Credit Points)',
      explanation: [
        'First, convert your percentage mark for each unit into a Grade Point (e.g., 80+ = 7.0, 70-79 = 6.0).',
        'Multiply that Grade Point by the unit\'s credit value.',
        'Sum all these weighted Grade Points together.',
        'Divide by the total number of credit points attempted.'
      ]
    },
    example: {
      scenario: 'John wants to find his GPA on a 7.0 scale. He has two 6-credit units. In Unit 1 he scored 82 (High Distinction = 7.0). In Unit 2 he scored 75 (Distinction = 6.0).',
      steps: [
        'Map Unit 1 mark (82) to GPA point: 7.0',
        'Map Unit 2 mark (75) to GPA point: 6.0',
        'Weight Unit 1: 7.0 × 6 credits = 42',
        'Weight Unit 2: 6.0 × 6 credits = 36',
        'Sum of weighted GPA points: 42 + 36 = 78',
        'Total credits: 12',
        'Final Calculation: 78 ÷ 12 = 6.5'
      ],
      result: '6.5 out of 7.0 GPA'
    },
    faqs: [
      {
        question: 'Why is my GPA lower than my WAM percentage?',
        answer: 'Because GPA uses a banded system. If you score a 70 or a 79, both might convert to a 6.0 GPA point on a 7.0 scale. A 79 WAM is almost an 80, but in GPA terms, it is treated identically to a 70. This banding often results in a GPA that feels "lower" than the raw WAM percentage.'
      },
      {
        question: 'What is a 4.0 scale vs a 7.0 scale?',
        answer: 'The 4.0 scale is heavily used in the United States and maps an A (80+) to 4.0. The 7.0 scale is common in Australia and maps a High Distinction (80+) to 7.0. Our calculator supports conversion to both.'
      },
      {
        question: 'Will GEMSAS use this exact conversion?',
        answer: 'GEMSAS (for Australian Medical Schools) has very specific and slightly different GPA conversion tables depending on the university you attended. While our tool provides an excellent standard estimate, you should always consult the official GEMSAS admissions guide for exact medical school calculations.'
      }
    ]
  },
  '/hecs-debt-calculator': {
    title: 'Understanding Your HECS-HELP Debt Repayments',
    intro: 'The Higher Education Loan Program (HECS-HELP) allows Australian students to defer their university fees. However, this debt isn\'t free money—it grows with inflation (indexation) every year on June 1st, and you are legally required to start repaying it once your income crosses the compulsory repayment threshold. Our HECS Debt Calculator helps you forecast how much of your salary will be deducted by the ATO for your student loan, allowing you to accurately budget your take-home pay and plan for early voluntary repayments if desired.',
    formula: {
      math: 'Annual Repayment = Repayment Income (RI) × Repayment Rate (%)',
      explanation: [
        'Calculate your Repayment Income (RI), which includes your taxable income plus any total net investment loss, reportable fringe benefits, and reportable super contributions.',
        'Check the ATO income thresholds for the current financial year to find your specific Repayment Rate percentage.',
        'Multiply your entire Repayment Income by this exact percentage.',
        'Note: Unlike tax brackets which are progressive, HECS is calculated on your entire income once you cross the threshold.'
      ]
    },
    example: {
      scenario: 'Emma has a Repayment Income of $85,000 for the 2023-2024 financial year. According to the ATO, the repayment rate for the $84,430 to $89,329 bracket is 5.0%.',
      steps: [
        'Identify Repayment Income: $85,000',
        'Find ATO Repayment Rate for this bracket: 5.0%',
        'Apply rate to entire income: $85,000 × 0.05',
        'Calculate annual deduction: $4,250',
        'Calculate monthly impact: $4,250 ÷ 12 = $354.16'
      ],
      result: '$4,250 per year ($354.16 deducted per month)'
    },
    faqs: [
      {
        question: 'When do I have to start paying back my HECS debt?',
        answer: 'You only start making compulsory repayments when your income exceeds the minimum repayment threshold set by the Australian Government. For the 2023-2024 income year, this threshold is $51,550.'
      },
      {
        question: 'Does my HECS debt accumulate interest?',
        answer: 'HECS-HELP debts do not accumulate traditional bank interest. However, they are subject to "indexation" on June 1st every year to maintain their real value against inflation. In years with high inflation, this indexation can add thousands of dollars to your total debt.'
      },
      {
        question: 'Should I pay off my HECS debt early?',
        answer: 'This depends on your financial goals. Because HECS indexation is usually lower than stock market returns or mortgage interest rates, many financial advisors recommend prioritizing other debts or investments first. However, if inflation is very high (as seen in recent years), voluntary repayments before June 1st can save you from steep indexation hikes.'
      }
    ]
  }
};

import { ArticleData } from './articles';

export const whatIsAGoodWamArticle: ArticleData = {
  slug: 'what-is-a-good-wam',
  keyword: 'what is a good wam',
  title: 'What is a Good WAM? A Guide for Australian University Students',
  description:
    'Wondering if your WAM is good enough for graduate jobs, honours, or medicine? Learn how WAM percentiles work and what constitutes a good WAM in Australia.',
  featuredImage: '/article-images/featured-what-is-a-good-wam.webp',
  featuredImageAlt: 'Students looking at a laptop and discussing their WAM and grades',
  publishedAt: '2026-09-21',
  updatedAt: '2026-09-21',
  sections: [
    {
      heading: 'Understanding WAM in Australia',
      paragraphs: [
        'A Weighted Average Mark (WAM) is the most critical metric used by many Australian universities to measure academic performance. Unlike a GPA which operates on a 4.0 or 7.0 scale and rounds your marks into broad buckets (like High Distinction, Distinction, Credit), a WAM takes your exact percentage mark for every unit and averages them based on their credit weighting.',
        'But once you have calculated your WAM, the immediate question is: What is a good WAM? The answer depends entirely on your faculty, your career goals, and the university you attend. A WAM of 70 might be considered incredibly high in engineering, but only average in arts.'
      ]
    },
    {
      heading: 'The Standard WAM Brackets',
      paragraphs: [
        'Before defining a "good" WAM, it is important to understand how marks are categorised in Australia. Most universities follow this standard grading scale:'
      ],
      blocks: [
        {
          type: 'table',
          headers: ['Grade', 'WAM Range', 'Description'],
          rows: [
            ['High Distinction (HD)', '80 - 100', 'Exceptional performance. Usually the top 2-5% of the cohort.'],
            ['Distinction (D)', '70 - 79', 'Very good performance. Demonstrates strong understanding.'],
            ['Credit (C)', '60 - 69', 'Good performance. Solid grasp of the core material.'],
            ['Pass (P)', '50 - 59', 'Satisfactory performance. Meets minimum requirements.'],
            ['Fail (N)', '0 - 49', 'Does not meet minimum requirements.']
          ]
        }
      ]
    },
    {
      heading: 'What is a Good WAM for Graduate Jobs?',
      paragraphs: [
        'For most corporate graduate programs, consulting firms, and banks in Australia (such as the Big 4, Macquarie, or Tier 1 consulting), a WAM of **65 to 70 (Credit to Distinction)** is often the minimum cutoff used by recruitment software to screen candidates.',
        'If your WAM is above 75, you are generally in a very safe position for almost any standard graduate job. However, remember that employers heavily weigh extracurricular activities, internships, and communication skills. A candidate with a 70 WAM and a strong internship is almost always preferred over a candidate with an 85 WAM and zero practical experience.'
      ]
    },
    {
      heading: 'What is a Good WAM for Honours and Masters?',
      paragraphs: [
        'If you are aiming to complete an Honours year or apply for a competitive Masters degree, the WAM requirements become stricter. Most faculties require a minimum WAM of 70 to be considered for Honours. However, because spots are limited, a "safe" WAM is usually closer to **75 or above**.',
        'For extremely competitive postgraduate degrees like the Doctor of Medicine (MD) or Juris Doctor (JD), a WAM in the high 80s (85+) is often required to be competitive for a Commonwealth Supported Place (CSP).'
      ]
    }
  ],
  faqs: [
    {
      question: 'Is a 70 WAM considered good?',
      answer: 'Yes, a 70 WAM is a Distinction average and is considered a very good score. It meets the cutoff for almost all graduate programs and most Honours degrees.'
    },
    {
      question: 'Is it hard to get an 80 WAM?',
      answer: 'Yes. An 80 WAM represents a High Distinction average. Typically, only the top 3-5% of students in a cohort maintain an 80+ WAM across their entire degree.'
    }
  ]
};

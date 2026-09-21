import { ArticleData } from './articles';

export const wamVsGpaArticle: ArticleData = {
  slug: 'wam-vs-gpa-difference',
  keyword: 'wam vs gpa',
  title: 'WAM vs GPA: What is the Difference in Australian Universities?',
  description:
    'Confused about WAM and GPA? Discover the mathematical differences between a Weighted Average Mark and a Grade Point Average, and why Australian employers prefer WAM.',
  featuredImage: '/article-images/featured-wam-vs-gpa.webp',
  featuredImageAlt: 'A comparison of WAM and GPA grading scales on a digital dashboard',
  publishedAt: '2026-09-21',
  updatedAt: '2026-09-21',
  sections: [
    {
      heading: 'The Core Difference Between WAM and GPA',
      paragraphs: [
        'When you receive your results at the end of a semester, you will often see two numbers: your WAM (Weighted Average Mark) and your GPA (Grade Point Average). While both measure your academic success, they calculate it in fundamentally different ways.',
        '**WAM** is an exact average of your percentage marks. **GPA** assigns a fixed point value (e.g., 4, 5, 6, 7) to a grade bracket (Pass, Credit, Distinction) and averages those points.'
      ]
    },
    {
      heading: 'How GPA is Calculated (The Bucket System)',
      paragraphs: [
        'Most Australian universities use a 7.0 GPA scale. Under this system, your percentage mark is grouped into a "bucket":'
      ],
      blocks: [
        {
          type: 'table',
          headers: ['Percentage', 'Grade', 'GPA Value'],
          rows: [
            ['80 - 100', 'High Distinction (HD)', '7.0'],
            ['70 - 79', 'Distinction (D)', '6.0'],
            ['60 - 69', 'Credit (C)', '5.0'],
            ['50 - 59', 'Pass (P)', '4.0'],
            ['0 - 49', 'Fail (N)', '0.0']
          ]
        }
      ]
    },
    {
      heading: 'The Problem with GPA',
      paragraphs: [
        'The main flaw with the GPA system is that it treats all marks within a bucket equally. A student who scores 70% gets a GPA value of 6.0. A student who scores 79% also gets a GPA value of 6.0.',
        'This means that two students with the exact same GPA could have drastically different underlying percentage marks. One student could have scraped by with low Distinctions, while the other narrowly missed out on High Distinctions.'
      ]
    },
    {
      heading: 'Why Employers Prefer WAM',
      paragraphs: [
        'Because GPA obscures your actual performance, most top-tier graduate employers in Australia prefer to look at your WAM. A WAM of 79 immediately tells an employer that you are performing at a near-High Distinction level, whereas a GPA of 6.0 could mean anything from 70 to 79.',
        'Additionally, WAM is mathematically fairer to students. If you work hard to push a 71 to a 78, your WAM goes up significantly. Under the GPA system, that effort is completely unrewarded because your GPA value remains a 6.0.'
      ]
    }
  ],
  faqs: [
    {
      question: 'Which is more important, WAM or GPA?',
      answer: 'In Australia, WAM is generally considered more important. Most major graduate programs, scholarships, and Honours admissions use WAM as their primary cutoff metric.'
    },
    {
      question: 'Can I convert my WAM to a GPA?',
      answer: 'Not accurately. Because GPA uses broad buckets, you cannot reverse-engineer a WAM from a GPA, and converting a WAM to a GPA is only an approximation. You must calculate them separately using your individual subject marks.'
    }
  ]
};

import Seo from '../components/Seo';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import WamToGpaToolCore from '../components/WamToGpaToolCore';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import { absoluteUrl, HERO_INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [wamToGpaHome, wamToGpaFinal] = PAGE_KEYWORD_LINKS['/wam-to-gpa-calculator'];

const wamToGpaFaqs = [
  {
    question: 'How does WAM to GPA conversion work at Uni?',
    answer:
      'Enter your WAM and this WAM to GPA calculator maps it to Uni grade bands (HD, D, C, P) on 4.0 and 7.0 scales. Use it for planning; confirm official GPA on your transcript when available.',
  },
  {
    question: 'Is WAM to GPA conversion exact?',
    answer:
      'It is an estimate, not an official conversion. Institutions may apply different mappings, faculty rules, or rounding logic, so you should treat the result as directional guidance.',
  },
  {
    question: 'Which GPA scale should I report?',
    answer:
      'Use the scale requested by your target institution or application. This page shows 4.0 and 7.0 outputs so you can compare both common formats quickly.',
  },
  {
    question: 'Why does my official GPA differ from this result?',
    answer:
      'Official systems may include policy-specific adjustments such as repeated unit handling, special grading categories, or institution-specific conversion methods.',
  },
  {
    question: 'Can I use this for international applications?',
    answer:
      'Yes, as a planning reference. For final submission, verify required conversion standards directly with the university, scholarship body, or credential evaluation service.',
  },
  {
    question: 'Does this tool support postgraduate pathways?',
    answer:
      'Yes. Students commonly use WAM to GPA estimates for postgraduate planning, eligibility checks, and benchmarking against minimum entry requirements.',
  },
  {
    question: 'How often should I recalculate?',
    answer:
      'Recalculate after each result release or at major semester checkpoints. Frequent updates help you track trend direction and adjust preparation strategy.',
  },
];

export default function WAMtoGPA() {
  return (
    <>
      <Seo
        title="WAM to GPA Calculator | Convert Australian WAM to 4.0 & 7.0 GPA (2026)"
        description="Free online WAM to GPA calculator for Australian university students. Instantly convert your Weighted Average Mark to a 4.0 or 7.0 GPA scale for graduate jobs, scholarships, and study abroad applications."
        canonicalPath="/wam-to-gpa-calculator"
        faqItems={wamToGpaFaqs}
      />

      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">WAM to GPA Calculator</h1>
        <p className="text-blue-100 max-w-2xl mx-auto text-lg leading-relaxed">
          The most accurate <strong>WAM to GPA converter</strong> for Australian university students. 
          Instantly convert your Weighted Average Mark (WAM) to the standard <strong>4.0 GPA scale</strong> for international applications, 
          or the <strong>7.0 GPA scale</strong> used by domestic institutions.
        </p>
        <p className="text-blue-200 max-w-xl mx-auto text-sm mt-5 bg-blue-800/30 py-2 px-4 rounded-full border border-blue-600/50">
          Need to calculate your overall WAM first? Use our{' '}
          <a href={absoluteUrl(wamToGpaHome.path)} className={HERO_INLINE_LINK_CLASS}>{wamToGpaHome.keyword}</a>
          , then return here. For exam targets, use the{' '}
          <a href={absoluteUrl(wamToGpaFinal.path)} className={HERO_INLINE_LINK_CLASS}>{wamToGpaFinal.keyword}</a>.
        </p>
      </section>

      <CalculatorSectionWithInlineAds path="/wam-to-gpa-calculator">
        <WamToGpaToolCore />

        <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">How to Use This WAM to GPA Converter</h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>Enter your overall WAM from 0 to 100.</li>
            <li>Read your estimated GPA on both 4.0 and 7.0 scales.</li>
            <li>Use the conversion table to compare nearby grade bands.</li>
            <li>Verify official outcomes with your university transcript or policy pages.</li>
          </ul>
        </div>

        <div className="mt-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
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
        </div>
      </CalculatorSectionWithInlineAds>

      <CalculatorPageGuide path="/wam-to-gpa-calculator" />
      <RelatedCalculators
        hrefs={['/gpa-to-wam-calculator', '/uni-gpa-calculator', '/uni-cgpa-calculator', '/wam-target-calculator', '/final-grade-calculator', '/']}
      />

      <PageFaq items={wamToGpaFaqs} />
    </>
  );
}

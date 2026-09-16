import { useState } from 'react';
import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import RelatedCalculators from '../components/RelatedCalculators';
import PageFaq from '../components/PageFaq';

export default function CgpaToPercentage() {
  const [cgpa, setCgpa] = useState<string>('');
  const [multiplier, setMultiplier] = useState<string>('9.5');

  const parsedCgpa = parseFloat(cgpa);
  const parsedMultiplier = parseFloat(multiplier);
  
  const percentage = (!isNaN(parsedCgpa) && !isNaN(parsedMultiplier)) 
    ? (parsedCgpa * parsedMultiplier).toFixed(2) 
    : null;

  const faqs = [
    {
      question: 'How to convert CGPA to Percentage?',
      answer: 'To convert your CGPA into a percentage, you simply need to multiply your CGPA by the grading scale multiplier. For CBSE and most Indian universities, the multiplier is 9.5. So the formula is: Percentage = CGPA × 9.5.'
    },
    {
      question: 'Why do we multiply by 9.5?',
      answer: 'The Board (like CBSE) sets 9.5 as the official conversion factor because the top grade (A1) spans the marks range of 91 to 100, which has an average of 95. Therefore, a perfect 10 CGPA multiplied by 9.5 gives 95%.'
    },
    {
      question: 'What is the percentage for a 9.2 CGPA?',
      answer: 'Using the standard CBSE formula (CGPA × 9.5), a 9.2 CGPA equals 87.4% (9.2 × 9.5 = 87.4).'
    },
    {
      question: 'Is the multiplier always 9.5?',
      answer: 'No. While CBSE uses 9.5, some specific universities (like Mumbai University or VTU) might use different conversion formulas, like (CGPA × 10) or (CGPA - 0.75) × 10. Always check your university transcript guidelines.'
    }
  ];

  return (
    <>
      <Seo 
        title="CGPA to Percentage Calculator | Convert CGPA Instantly" 
        description="Free CGPA to percentage calculator. Easily convert your CBSE or university CGPA to percentage using the 9.5 multiplier or custom formulas." 
        canonicalPath="/cgpa-to-percentage-calculator" 
      />
      
      <section className="bg-gradient-to-br from-teal-600 to-teal-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">CGPA to Percentage Calculator</h1>
        <p className="text-teal-100 max-w-xl mx-auto">Quickly convert your CGPA score into a percentage for resumes, college applications, and placements.</p>
      </section>

      <CalculatorSectionWithInlineAds path="/cgpa-to-percentage-calculator">
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 p-6 md:p-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Enter your CGPA
              </label>
              <input
                type="number"
                step="0.1"
                min="0"
                max="10"
                value={cgpa}
                onChange={(e) => setCgpa(e.target.value)}
                className="w-full px-4 py-3 text-lg border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 transition-all"
                placeholder="e.g. 8.5"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Multiplier (Default is 9.5 for CBSE)
              </label>
              <input
                type="number"
                step="0.1"
                min="1"
                max="100"
                value={multiplier}
                onChange={(e) => setMultiplier(e.target.value)}
                className="w-full px-4 py-3 text-lg border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 transition-all"
              />
            </div>

            <div className="bg-teal-50 dark:bg-teal-900/30 rounded-2xl p-6 text-center border border-teal-100 dark:border-teal-800 mt-8">
              <h3 className="text-teal-800 dark:text-teal-300 text-sm font-bold uppercase tracking-wider mb-2">Your Percentage</h3>
              <div className="text-5xl font-black text-teal-600 dark:text-teal-400">
                {percentage ? `${percentage}%` : '--- %'}
              </div>
              {percentage && (
                <p className="text-teal-700 dark:text-teal-500 text-sm mt-3 font-medium">
                  Formula used: {cgpa} × {multiplier} = {percentage}%
                </p>
              )}
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto mt-12 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Why convert CGPA to Percentage?</h2>
          <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 space-y-4">
            <p>
              While Cumulative Grade Point Average (CGPA) is a great way to measure academic performance without the stress of exact marks, many institutions, job applications, and scholarship programs still require your score in a percentage format.
            </p>
            <p>
              This free tool allows you to convert your 10-point scale CGPA directly into a percentage. By default, it uses the official CBSE multiplier of <strong>9.5</strong>. However, because different universities (like Mumbai University, AKTU, or VTU) might have slightly different formulas, you can easily edit the multiplier to match your specific university guidelines.
            </p>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6">Common Conversion Multipliers</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>CBSE Board:</strong> Multiply by 9.5</li>
              <li><strong>Mumbai University (Engineering):</strong> Percentage = 7.1 × CGPA + 11</li>
              <li><strong>VTU (Visvesvaraya Technological University):</strong> Percentage = (CGPA - 0.75) × 10</li>
              <li><strong>Standard 10-point scales:</strong> Multiply by 10 (or 9.5 depending on the region)</li>
            </ul>
          </div>
        </div>
      </CalculatorSectionWithInlineAds>

      <CalculatorPageGuide path="/cgpa-to-percentage-calculator" />
      <PageFaq items={faqs} />
      <RelatedCalculators maxItems={6} />
    </>
  );
}

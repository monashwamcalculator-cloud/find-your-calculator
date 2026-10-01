import { useState } from 'react';
import { ChevronDown, ChevronUp, Info, Calculator, FileText, HelpCircle } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CalculatorSEOData {
  title: string;
  intro: string;
  formula: {
    math: string;
    explanation: string[];
  };
  example: {
    scenario: string;
    steps: string[];
    result: string;
  };
  faqs: FAQItem[];
}

interface Props {
  seoData: CalculatorSEOData;
}

export default function CalculatorSEOSection({ seoData }: Props) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <div className="w-full max-w-4xl mx-auto mt-12 space-y-8 pb-12">
      {/* Intro Section */}
      <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 md:p-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
            <Info className="h-6 w-6 text-primary-600 dark:text-primary-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {seoData.title}
          </h2>
        </div>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
          {seoData.intro}
        </p>
      </section>

      {/* Formula Box */}
      {seoData.formula && (
        <section className="bg-blue-50 dark:bg-blue-900/10 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-800 p-6 md:p-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2 bg-blue-100 dark:bg-blue-800/40 rounded-lg">
              <Calculator className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Formula & Calculation Method
            </h3>
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-xl p-5 mb-5 shadow-inner text-center overflow-x-auto border border-blue-100 dark:border-gray-700">
            <code className="text-lg md:text-xl font-mono text-blue-700 dark:text-blue-400 font-semibold whitespace-nowrap">
              {seoData.formula.math}
            </code>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-800 dark:text-gray-200">How it works:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              {seoData.formula.explanation.map((step, idx) => (
                <li key={idx} className="leading-relaxed">{step}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Practical Example */}
      {seoData.example && (
        <section className="bg-emerald-50 dark:bg-emerald-900/10 rounded-2xl shadow-sm border border-emerald-100 dark:border-emerald-800 p-6 md:p-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2 bg-emerald-100 dark:bg-emerald-800/40 rounded-lg">
              <FileText className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Practical Example
            </h3>
          </div>
          
          <div className="mb-4">
            <p className="font-medium text-gray-800 dark:text-gray-200">Scenario:</p>
            <p className="text-gray-600 dark:text-gray-300">{seoData.example.scenario}</p>
          </div>

          <div className="mb-4">
            <p className="font-medium text-gray-800 dark:text-gray-200 mb-2">Step-by-step:</p>
            <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 p-4 rounded-xl border border-emerald-100 dark:border-gray-700">
              {seoData.example.steps.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
          </div>

          <div className="pt-4 mt-4 border-t border-emerald-200 dark:border-emerald-800/50">
            <p className="text-lg font-bold text-emerald-700 dark:text-emerald-400">
              Result: {seoData.example.result}
            </p>
          </div>
        </section>
      )}

      {/* FAQs */}
      {seoData.faqs && seoData.faqs.length > 0 && (
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
              <HelpCircle className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Frequently Asked Questions
            </h3>
          </div>
          
          <div className="space-y-3">
            {seoData.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx} 
                  className={`border rounded-xl transition-colors ${
                    isOpen 
                      ? 'border-purple-200 dark:border-purple-800 bg-purple-50/50 dark:bg-purple-900/10' 
                      : 'border-gray-200 dark:border-gray-700 hover:border-purple-200 dark:hover:border-gray-600'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded-xl"
                  >
                    <span className="font-semibold text-gray-900 dark:text-gray-100 pr-4">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400 dark:text-gray-500 flex-shrink-0" />
                    )}
                  </button>
                  
                  {isOpen && (
                    <div className="px-4 pb-4 text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base animate-in slide-in-from-top-2 fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}

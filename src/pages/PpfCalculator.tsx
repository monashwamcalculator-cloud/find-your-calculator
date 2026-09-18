import { useState, useMemo } from 'react';
import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import RelatedCalculators from '../components/RelatedCalculators';
import PageFaq from '../components/PageFaq';
import { PiggyBank, Calendar, Percent } from 'lucide-react';

export default function PpfCalculator() {
  const [yearlyInvestment, setYearlyInvestment] = useState<string>('150000');
  const [interestRate, setInterestRate] = useState<string>('7.1');
  const [duration, setDuration] = useState<string>('15'); // Minimum 15 years

  const results = useMemo(() => {
    const P = parseFloat(yearlyInvestment);
    const r = parseFloat(interestRate);
    const n = parseFloat(duration);

    if (isNaN(P) || isNaN(r) || isNaN(n) || P <= 0 || r < 0 || n < 15) {
      return null;
    }

    // PPF interest is calculated monthly but compounded annually.
    // For a generic PPF calculator, the standard formula used is:
    // F = P * [({(1+i)^n} - 1) / i] * (1+i)
    // where P is annual installment, i is interest rate in decimal, n is number of years
    
    const i = r / 100;
    
    // Formula for series of annual investments compounded annually
    let maturityValue = P * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
    
    const totalInvested = P * n;
    const totalInterest = maturityValue - totalInvested;

    return {
      investedAmount: Math.round(totalInvested),
      totalInterest: Math.round(totalInterest),
      maturityValue: Math.round(maturityValue)
    };
  }, [yearlyInvestment, interestRate, duration]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);
  };

  const faqs = [
    {
      question: 'What is PPF?',
      answer: 'Public Provident Fund (PPF) is a popular long-term investment scheme backed by the Government of India. It offers guaranteed returns and comes with EEE (Exempt-Exempt-Exempt) tax benefits.'
    },
    {
      question: 'What is the lock-in period for PPF?',
      answer: 'The standard lock-in period for a PPF account is 15 years. However, you can extend it in blocks of 5 years after maturity. Partial withdrawals are allowed under specific conditions after 7 years.'
    },
    {
      question: 'What is the maximum and minimum limit for PPF investment?',
      answer: 'The minimum investment required in a financial year is ₹500, and the maximum allowed investment is ₹1,50,000 to claim tax deductions under Section 80C.'
    },
    {
      question: 'Is the PPF interest rate fixed?',
      answer: 'No, the Ministry of Finance reviews and announces the PPF interest rate every quarter. The current prevailing rate is usually around 7.1%.'
    }
  ];

  return (
    <>
      <Seo 
        title="PPF Calculator | Public Provident Fund Returns" 
        description="Free online PPF Calculator to estimate your Public Provident Fund maturity value, total investment, and interest earned over 15 to 30 years." 
        canonicalPath="/ppf-calculator" 
      />
      
      <section className="bg-gradient-to-br from-red-600 to-red-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">PPF Calculator</h1>
        <p className="text-red-100 max-w-xl mx-auto">Calculate your Public Provident Fund maturity amount and interest earned over 15+ years.</p>
      </section>

      <CalculatorSectionWithInlineAds path="/ppf-calculator">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 p-6 md:p-8 space-y-6">
            <div>
              <label className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                <PiggyBank className="w-4 h-4 mr-1 text-red-600" />
                Yearly Investment (Max ₹1.5 Lakh)
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-4 text-gray-500 bg-gray-100 border border-r-0 border-gray-300 rounded-l-xl dark:bg-gray-700 dark:text-gray-400 dark:border-gray-600">
                  ₹
                </span>
                <input
                  type="number"
                  min="500"
                  max="150000"
                  value={yearlyInvestment}
                  onChange={(e) => setYearlyInvestment(e.target.value)}
                  className="w-full px-4 py-3 text-lg border border-gray-300 dark:border-gray-600 rounded-r-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 transition-all"
                  placeholder="150000"
                />
              </div>
            </div>

            <div>
              <label className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                <Percent className="w-4 h-4 mr-1 text-red-600" />
                Current Interest Rate (p.a)
              </label>
              <div className="flex">
                <input
                  type="number"
                  step="0.1"
                  min="1"
                  max="20"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  className="w-full px-4 py-3 text-lg border border-r-0 border-gray-300 dark:border-gray-600 rounded-l-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 transition-all"
                  placeholder="7.1"
                />
                <span className="inline-flex items-center px-4 text-gray-500 bg-gray-100 border border-gray-300 rounded-r-xl dark:bg-gray-700 dark:text-gray-400 dark:border-gray-600">
                  %
                </span>
              </div>
            </div>

            <div>
              <label className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                <Calendar className="w-4 h-4 mr-1 text-red-600" />
                Time Period (Min 15 Years)
              </label>
              <div className="flex">
                <input
                  type="number"
                  min="15"
                  max="50"
                  step="5"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full px-4 py-3 text-lg border border-r-0 border-gray-300 dark:border-gray-600 rounded-l-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 transition-all"
                  placeholder="15"
                />
                <span className="inline-flex items-center px-4 text-gray-500 bg-gray-100 border border-gray-300 rounded-r-xl dark:bg-gray-700 dark:text-gray-400 dark:border-gray-600">
                  Years
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-2">PPF accounts mature in 15 years and can be extended in blocks of 5 years (20, 25, 30, etc.)</p>
            </div>
            
            <input 
              type="range" 
              min="15" max="40" step="5"
              value={duration === '' ? '15' : duration} 
              onChange={(e) => setDuration(e.target.value)}
              className="w-full accent-red-600"
            />
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 p-6 md:p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b pb-4 dark:border-gray-700">Maturity Summary</h3>
            
            {results ? (
              <div className="space-y-6">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Total Invested Amount</span>
                  <span className="font-semibold text-gray-900 dark:text-white text-lg">{formatCurrency(results.investedAmount)}</span>
                </div>
                
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Total Interest Earned</span>
                  <span className="font-semibold text-green-600 dark:text-green-400 text-lg">+{formatCurrency(results.totalInterest)}</span>
                </div>
                
                <div className="pt-6 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-800 dark:text-gray-200 font-bold text-lg">Maturity Value</span>
                  </div>
                  <div className="text-4xl font-black text-red-600 dark:text-red-400">
                    {formatCurrency(results.maturityValue)}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-gray-500 dark:text-gray-400 text-center py-8">
                Please enter a minimum duration of 15 years.
              </div>
            )}
          </div>
          
        </div>
        
        <div className="max-w-4xl mx-auto mt-12 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Why invest in a PPF?</h2>
          <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 space-y-4">
            <p>
              The Public Provident Fund is one of the most secure and tax-efficient savings instruments in India. It guarantees your returns because it is backed by the Government of India. 
            </p>
            <p>
              <strong>Tax Benefits (EEE):</strong> PPF is one of the few investment vehicles that fall under the "Exempt-Exempt-Exempt" category. This means:
            </p>
            <ul className="list-disc pl-5">
              <li>Your annual contribution (up to ₹1.5 Lakh) is exempt from tax under Section 80C.</li>
              <li>The interest earned every year is completely tax-free.</li>
              <li>The maturity amount you receive at the end of 15 years is also completely tax-free.</li>
            </ul>
          </div>
        </div>
      </CalculatorSectionWithInlineAds>

      <CalculatorPageGuide path="/ppf-calculator" />
      <PageFaq items={faqs} />
      <RelatedCalculators maxItems={6} />
    </>
  );
}

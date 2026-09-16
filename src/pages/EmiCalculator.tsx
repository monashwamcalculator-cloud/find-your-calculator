import { useState, useMemo } from 'react';
import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import RelatedCalculators from '../components/RelatedCalculators';
import PageFaq from '../components/PageFaq';
import { Home, Percent, CalendarDays } from 'lucide-react';

export default function EmiCalculator() {
  const [loanAmount, setLoanAmount] = useState<string>('500000');
  const [interestRate, setInterestRate] = useState<string>('8.5');
  const [loanTenure, setLoanTenure] = useState<string>('5'); // in years

  const results = useMemo(() => {
    const P = parseFloat(loanAmount);
    const r = parseFloat(interestRate);
    const t = parseFloat(loanTenure);

    if (isNaN(P) || isNaN(r) || isNaN(t) || P <= 0 || r < 0 || t <= 0) {
      return null;
    }

    const R = r / 12 / 100; // monthly interest rate
    const N = t * 12; // tenure in months

    // EMI Formula = [P x R x (1+R)^N]/[(1+R)^N-1]
    let emi = 0;
    if (R === 0) {
      emi = P / N;
    } else {
      emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    }

    const totalAmount = emi * N;
    const totalInterest = totalAmount - P;

    return {
      emi: Math.round(emi),
      principal: Math.round(P),
      totalInterest: Math.round(totalInterest),
      totalPayment: Math.round(totalAmount)
    };
  }, [loanAmount, interestRate, loanTenure]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);
  };

  const faqs = [
    {
      question: 'What is EMI?',
      answer: 'Equated Monthly Installment (EMI) is a fixed payment amount made by a borrower to a lender at a specified date each calendar month. EMIs are used to pay off both interest and principal each month.'
    },
    {
      question: 'How is EMI calculated?',
      answer: 'The mathematical formula for calculating EMI is: EMI = [P x R x (1+R)^N]/[(1+R)^N-1], where P stands for the loan amount or principal, R is the interest rate per month, and N is the number of monthly installments.'
    },
    {
      question: 'Does a longer tenure mean lower interest?',
      answer: 'No. A longer loan tenure reduces your monthly EMI, but increases the total interest you pay over the life of the loan. A shorter tenure increases the monthly EMI but significantly reduces the total interest burden.'
    }
  ];

  return (
    <>
      <Seo 
        title="EMI Calculator | Personal, Home & Car Loan EMI" 
        description="Free EMI Calculator to calculate your monthly installment for home loans, car loans, and personal loans. Instantly check interest breakdown." 
        canonicalPath="/emi-calculator" 
      />
      
      <section className="bg-gradient-to-br from-indigo-600 to-indigo-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">EMI Calculator</h1>
        <p className="text-indigo-100 max-w-xl mx-auto">Calculate Equated Monthly Installments for Home, Car, or Personal loans effortlessly.</p>
      </section>

      <CalculatorSectionWithInlineAds path="/emi-calculator">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 p-6 md:p-8 space-y-6">
            <div>
              <label className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                <Home className="w-4 h-4 mr-1 text-indigo-600" />
                Loan Amount
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-4 text-gray-500 bg-gray-100 border border-r-0 border-gray-300 rounded-l-xl dark:bg-gray-700 dark:text-gray-400 dark:border-gray-600">
                  ₹
                </span>
                <input
                  type="number"
                  min="1000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  className="w-full px-4 py-3 text-lg border border-gray-300 dark:border-gray-600 rounded-r-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 transition-all"
                  placeholder="500000"
                />
              </div>
            </div>

            <div>
              <label className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                <Percent className="w-4 h-4 mr-1 text-indigo-600" />
                Interest Rate (p.a)
              </label>
              <div className="flex">
                <input
                  type="number"
                  step="0.1"
                  min="1"
                  max="50"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  className="w-full px-4 py-3 text-lg border border-r-0 border-gray-300 dark:border-gray-600 rounded-l-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 transition-all"
                  placeholder="8.5"
                />
                <span className="inline-flex items-center px-4 text-gray-500 bg-gray-100 border border-gray-300 rounded-r-xl dark:bg-gray-700 dark:text-gray-400 dark:border-gray-600">
                  %
                </span>
              </div>
            </div>

            <div>
              <label className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                <CalendarDays className="w-4 h-4 mr-1 text-indigo-600" />
                Loan Tenure (Years)
              </label>
              <div className="flex">
                <input
                  type="number"
                  min="1"
                  max="50"
                  value={loanTenure}
                  onChange={(e) => setLoanTenure(e.target.value)}
                  className="w-full px-4 py-3 text-lg border border-r-0 border-gray-300 dark:border-gray-600 rounded-l-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 transition-all"
                  placeholder="5"
                />
                <span className="inline-flex items-center px-4 text-gray-500 bg-gray-100 border border-gray-300 rounded-r-xl dark:bg-gray-700 dark:text-gray-400 dark:border-gray-600">
                  Years
                </span>
              </div>
            </div>
            
            <input 
              type="range" 
              min="1" max="30" 
              value={loanTenure === '' ? '0' : loanTenure} 
              onChange={(e) => setLoanTenure(e.target.value)}
              className="w-full accent-indigo-600"
            />
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 p-6 md:p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b pb-4 dark:border-gray-700">Repayment Summary</h3>
            
            {results ? (
              <div className="space-y-6">
                <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-2xl p-6 text-center border border-indigo-100 dark:border-indigo-800">
                  <h4 className="text-indigo-800 dark:text-indigo-300 text-sm font-bold uppercase tracking-wider mb-2">Monthly EMI</h4>
                  <div className="text-4xl font-black text-indigo-600 dark:text-indigo-400">
                    {formatCurrency(results.emi)}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Principal Amount</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{formatCurrency(results.principal)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Total Interest Payable</span>
                    <span className="font-semibold text-red-600 dark:text-red-400">{formatCurrency(results.totalInterest)}</span>
                  </div>
                  
                  <div className="pt-3 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
                    <span className="text-gray-800 dark:text-gray-200 font-bold">Total Payment</span>
                    <span className="font-bold text-indigo-600 dark:text-indigo-400">{formatCurrency(results.totalPayment)}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-gray-500 dark:text-gray-400 text-center py-8">
                Enter valid loan details to see your EMI breakdown.
              </div>
            )}
          </div>
          
        </div>
        
        <div className="max-w-4xl mx-auto mt-12 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Plan Your Loan Properly</h2>
          <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 space-y-4">
            <p>
              Before committing to a personal, home, or car loan, it is crucial to know your exact monthly commitment. The EMI Calculator helps you understand the breakdown between the principal amount and the interest charged.
            </p>
            <p>
              In the early years of a long-term loan (like a home loan), a large portion of your EMI goes towards paying the interest. By adjusting the loan tenure slider above, you can see how reducing your loan period can drastically cut down the total interest you end up paying to the bank.
            </p>
          </div>
        </div>
      </CalculatorSectionWithInlineAds>

      <CalculatorPageGuide path="/emi-calculator" />
      <PageFaq items={faqs} />
      <RelatedCalculators maxItems={6} />
    </>
  );
}

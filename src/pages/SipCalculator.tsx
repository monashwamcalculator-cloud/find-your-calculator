import { useState, useMemo } from 'react';
import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import RelatedCalculators from '../components/RelatedCalculators';
import PageFaq from '../components/PageFaq';
import { TrendingUp, DollarSign, Calendar } from 'lucide-react';

export default function SipCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState<string>('5000');
  const [expectedReturn, setExpectedReturn] = useState<string>('12');
  const [timePeriod, setTimePeriod] = useState<string>('10'); // in years

  const results = useMemo(() => {
    const P = parseFloat(monthlyInvestment);
    const r = parseFloat(expectedReturn);
    const t = parseFloat(timePeriod);

    if (isNaN(P) || isNaN(r) || isNaN(t) || P <= 0 || r < 0 || t <= 0) {
      return null;
    }

    const i = r / 100 / 12; // monthly rate of return
    const n = t * 12; // number of months

    // SIP Formula: M = P × ({[1 + i]^n – 1} / i) × (1 + i)
    let maturityValue = 0;
    if (i === 0) {
      maturityValue = P * n;
    } else {
      maturityValue = P * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
    }

    const totalInvested = P * n;
    const estimatedReturns = maturityValue - totalInvested;

    return {
      totalInvested: Math.round(totalInvested),
      estimatedReturns: Math.round(estimatedReturns),
      totalValue: Math.round(maturityValue)
    };
  }, [monthlyInvestment, expectedReturn, timePeriod]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);
  };

  const faqs = [
    {
      question: 'What is a SIP?',
      answer: 'A Systematic Investment Plan (SIP) allows you to invest a fixed amount regularly (e.g., monthly) in mutual funds. It helps average out market volatility and builds wealth through the power of compounding.'
    },
    {
      question: 'How does the SIP calculator work?',
      answer: 'This SIP calculator uses the compound interest formula to estimate the future value of your monthly investments based on a projected annual return rate over your chosen time period.'
    },
    {
      question: 'What is a realistic expected return for SIPs?',
      answer: 'Historically, equity mutual funds in growing economies (like India) have delivered around 10-14% long-term annual returns. However, market returns are not guaranteed and can fluctuate.'
    },
    {
      question: 'Is SIP better than Lumpsum investment?',
      answer: 'SIP is generally better for salaried individuals or beginners because it does not require timing the market. It uses Rupee Cost Averaging to buy more units when markets are low and fewer when markets are high.'
    }
  ];

  return (
    <>
      <Seo 
        title="SIP Calculator | Free Mutual Fund Return Calculator" 
        description="Calculate your mutual fund SIP returns online. Estimate your total wealth, invested amount, and projected returns over time using the power of compounding." 
        canonicalPath="/sip-calculator" 
      />
      
      <section className="bg-gradient-to-br from-green-600 to-green-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">SIP Calculator</h1>
        <p className="text-green-100 max-w-xl mx-auto">Estimate your future wealth and see the magic of compounding on your monthly investments.</p>
      </section>

      <CalculatorSectionWithInlineAds path="/sip-calculator">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 p-6 md:p-8 space-y-6">
            <div>
              <label className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                <DollarSign className="w-4 h-4 mr-1 text-green-600" />
                Monthly Investment Amount
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-4 text-gray-500 bg-gray-100 border border-r-0 border-gray-300 rounded-l-xl dark:bg-gray-700 dark:text-gray-400 dark:border-gray-600">
                  ₹
                </span>
                <input
                  type="number"
                  min="100"
                  value={monthlyInvestment}
                  onChange={(e) => setMonthlyInvestment(e.target.value)}
                  className="w-full px-4 py-3 text-lg border border-gray-300 dark:border-gray-600 rounded-r-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 transition-all"
                  placeholder="5000"
                />
              </div>
            </div>

            <div>
              <label className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                <TrendingUp className="w-4 h-4 mr-1 text-green-600" />
                Expected Return Rate (p.a)
              </label>
              <div className="flex">
                <input
                  type="number"
                  step="0.1"
                  min="1"
                  max="50"
                  value={expectedReturn}
                  onChange={(e) => setExpectedReturn(e.target.value)}
                  className="w-full px-4 py-3 text-lg border border-r-0 border-gray-300 dark:border-gray-600 rounded-l-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 transition-all"
                  placeholder="12"
                />
                <span className="inline-flex items-center px-4 text-gray-500 bg-gray-100 border border-gray-300 rounded-r-xl dark:bg-gray-700 dark:text-gray-400 dark:border-gray-600">
                  %
                </span>
              </div>
            </div>

            <div>
              <label className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                <Calendar className="w-4 h-4 mr-1 text-green-600" />
                Time Period (Years)
              </label>
              <div className="flex">
                <input
                  type="number"
                  min="1"
                  max="50"
                  value={timePeriod}
                  onChange={(e) => setTimePeriod(e.target.value)}
                  className="w-full px-4 py-3 text-lg border border-r-0 border-gray-300 dark:border-gray-600 rounded-l-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 transition-all"
                  placeholder="10"
                />
                <span className="inline-flex items-center px-4 text-gray-500 bg-gray-100 border border-gray-300 rounded-r-xl dark:bg-gray-700 dark:text-gray-400 dark:border-gray-600">
                  Years
                </span>
              </div>
            </div>
            
            <input 
              type="range" 
              min="1" max="40" 
              value={timePeriod === '' ? '0' : timePeriod} 
              onChange={(e) => setTimePeriod(e.target.value)}
              className="w-full accent-green-600"
            />
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 p-6 md:p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b pb-4 dark:border-gray-700">Investment Summary</h3>
            
            {results ? (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Invested Amount</span>
                  <span className="font-semibold text-gray-900 dark:text-white text-lg">{formatCurrency(results.totalInvested)}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Est. Returns</span>
                  <span className="font-semibold text-green-600 dark:text-green-400 text-lg">+{formatCurrency(results.estimatedReturns)}</span>
                </div>
                
                <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-800 dark:text-gray-200 font-bold text-lg">Total Value</span>
                  </div>
                  <div className="text-4xl font-black text-green-600 dark:text-green-400">
                    {formatCurrency(results.totalValue)}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-gray-500 dark:text-gray-400 text-center py-8">
                Enter valid numbers to see your SIP projection.
              </div>
            )}
          </div>
          
        </div>
        
        <div className="max-w-4xl mx-auto mt-12 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Magic of Compounding</h2>
          <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 space-y-4">
            <p>
              Albert Einstein reportedly called compound interest the "eighth wonder of the world". When you invest in a SIP, you don't just earn returns on your initial principal amount; you also earn returns on the returns generated over time.
            </p>
            <p>
              By starting early, even a small monthly investment can grow into a massive corpus over 15 to 20 years. Use this SIP Calculator to experiment with different monthly amounts and time horizons to plan your financial freedom, retirement, or major life goals.
            </p>
          </div>
        </div>
      </CalculatorSectionWithInlineAds>

      <CalculatorPageGuide path="/sip-calculator" />
      <PageFaq items={faqs} />
      <RelatedCalculators maxItems={6} />
    </>
  );
}

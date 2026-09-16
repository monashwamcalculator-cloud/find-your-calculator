import { useState, useMemo } from 'react';
import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import RelatedCalculators from '../components/RelatedCalculators';
import PageFaq from '../components/PageFaq';
import { IndianRupee, Percent, CheckCircle2 } from 'lucide-react';

export default function GstCalculator() {
  const [amount, setAmount] = useState<string>('10000');
  const [gstRate, setGstRate] = useState<string>('18');
  const [calcMode, setCalcMode] = useState<'add' | 'remove'>('add');

  const results = useMemo(() => {
    const P = parseFloat(amount);
    const R = parseFloat(gstRate);

    if (isNaN(P) || isNaN(R) || P <= 0 || R < 0) {
      return null;
    }

    let gstAmount = 0;
    let netAmount = 0;
    let totalAmount = 0;

    if (calcMode === 'add') {
      gstAmount = (P * R) / 100;
      netAmount = P;
      totalAmount = P + gstAmount;
    } else {
      gstAmount = P - (P * (100 / (100 + R)));
      netAmount = P - gstAmount;
      totalAmount = P;
    }

    return {
      netAmount: netAmount.toFixed(2),
      gstAmount: gstAmount.toFixed(2),
      totalAmount: totalAmount.toFixed(2),
      cgst: (gstAmount / 2).toFixed(2),
      sgst: (gstAmount / 2).toFixed(2)
    };
  }, [amount, gstRate, calcMode]);

  const faqs = [
    {
      question: 'What is GST?',
      answer: 'Goods and Services Tax (GST) is an indirect tax used in India on the supply of goods and services. It is a comprehensive, multistage, destination-based tax.'
    },
    {
      question: 'How to calculate GST?',
      answer: 'To Add GST: GST Amount = (Original Cost x GST Rate) / 100. Total Price = Original Cost + GST Amount. To Remove GST: GST Amount = Total Price - [Total Price x (100 / (100 + GST Rate))].'
    },
    {
      question: 'What are CGST, SGST, and IGST?',
      answer: 'CGST (Central GST) and SGST (State GST) are collected for intra-state sales. IGST (Integrated GST) is collected for inter-state sales. Usually, CGST and SGST are each exactly half of the total GST amount.'
    }
  ];

  return (
    <>
      <Seo 
        title="GST Calculator | Free Indian Goods & Services Tax Tool" 
        description="Easily calculate GST online. Add or remove GST from your product price, and view detailed CGST and SGST breakdowns instantly." 
        canonicalPath="/gst-calculator" 
      />
      
      <section className="bg-gradient-to-br from-orange-500 to-red-600 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">GST Calculator</h1>
        <p className="text-orange-100 max-w-xl mx-auto">Instantly Add or Remove GST from your pricing, with automatic CGST and SGST breakdowns.</p>
      </section>

      <CalculatorSectionWithInlineAds path="/gst-calculator">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 p-6 md:p-8 space-y-6">
            
            <div className="flex bg-gray-100 dark:bg-gray-700 rounded-xl p-1">
              <button 
                onClick={() => setCalcMode('add')}
                className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${calcMode === 'add' ? 'bg-white dark:bg-gray-800 shadow text-orange-600 dark:text-orange-400' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'}`}
              >
                Add GST (+ Tax)
              </button>
              <button 
                onClick={() => setCalcMode('remove')}
                className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${calcMode === 'remove' ? 'bg-white dark:bg-gray-800 shadow text-orange-600 dark:text-orange-400' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'}`}
              >
                Remove GST (- Tax)
              </button>
            </div>

            <div>
              <label className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                <IndianRupee className="w-4 h-4 mr-1 text-orange-500" />
                {calcMode === 'add' ? 'Net Amount (Before Tax)' : 'Total Amount (After Tax)'}
              </label>
              <input
                type="number"
                min="0"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-4 py-3 text-lg border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 transition-all"
                placeholder="10000"
              />
            </div>

            <div>
              <label className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                <Percent className="w-4 h-4 mr-1 text-orange-500" />
                GST Rate (%)
              </label>
              <div className="grid grid-cols-4 gap-2 mb-3">
                {['5', '12', '18', '28'].map(rate => (
                  <button 
                    key={rate}
                    onClick={() => setGstRate(rate)}
                    className={`py-2 rounded-lg text-sm font-bold border transition-all ${gstRate === rate ? 'bg-orange-100 border-orange-500 text-orange-700 dark:bg-orange-900/30 dark:border-orange-500 dark:text-orange-300' : 'border-gray-200 text-gray-600 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700'}`}
                  >
                    {rate}%
                  </button>
                ))}
              </div>
              <input
                type="number"
                step="0.1"
                min="0"
                value={gstRate}
                onChange={(e) => setGstRate(e.target.value)}
                className="w-full px-4 py-3 text-lg border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 transition-all"
                placeholder="Custom Rate"
              />
            </div>

          </div>

          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 p-6 md:p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b pb-4 dark:border-gray-700">Tax Breakdown</h3>
            
            {results ? (
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Net Amount (Without Tax)</span>
                  <span className="font-semibold text-gray-900 dark:text-white">₹{results.netAmount}</span>
                </div>
                
                <div className="flex justify-between items-center text-sm pt-2">
                  <span className="text-gray-600 dark:text-gray-400">CGST ({(parseFloat(gstRate)/2).toFixed(1)}%)</span>
                  <span className="font-semibold text-orange-600 dark:text-orange-400">₹{results.cgst}</span>
                </div>

                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600 dark:text-gray-400">SGST ({(parseFloat(gstRate)/2).toFixed(1)}%)</span>
                  <span className="font-semibold text-orange-600 dark:text-orange-400">₹{results.sgst}</span>
                </div>
                
                <div className="flex justify-between items-center pt-2">
                  <span className="text-gray-800 dark:text-gray-200 font-bold">Total GST Amount</span>
                  <span className="font-bold text-orange-600 dark:text-orange-400">₹{results.gstAmount}</span>
                </div>

                <div className="pt-4 border-t border-gray-100 dark:border-gray-700 text-center">
                  <span className="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-wider block mb-1">Final Total Amount</span>
                  <div className="text-4xl font-black text-gray-900 dark:text-white">
                    ₹{results.totalAmount}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-gray-500 dark:text-gray-400 text-center py-8">
                Enter valid numbers to see the tax breakdown.
              </div>
            )}
          </div>
          
        </div>
        
        <div className="max-w-4xl mx-auto mt-12 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How to calculate GST easily</h2>
          <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 space-y-4">
            <p>
              Calculating Goods and Services Tax manually can be tricky, especially when you need to reverse-calculate the base price from an already taxed total amount.
            </p>
            <p>
              <strong>Adding GST:</strong> If you have a product priced at ₹100 and want to add 18% GST, you multiply 100 by 18% to get ₹18. Your total becomes ₹118.
            </p>
            <p>
              <strong>Removing GST:</strong> If your product is priced at ₹118 and it <em>already includes</em> 18% GST, you can't just subtract 18%. The formula is: Total Amount - (Total Amount x [100 / (100 + GST Rate)]). This correctly gives you the original ₹100 base price.
            </p>
          </div>
        </div>
      </CalculatorSectionWithInlineAds>

      <CalculatorPageGuide path="/gst-calculator" />
      <PageFaq items={faqs} />
      <RelatedCalculators maxItems={6} />
    </>
  );
}

import React, { useState } from 'react';
import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import { Bone, Dog } from 'lucide-react';

export default function DogAgeCalculator() {
  const [humanYears, setHumanYears] = useState<string>('');
  const [size, setSize] = useState<'small' | 'medium' | 'large'>('medium');
  const [dogYears, setDogYears] = useState<number | null>(null);

  const calculateAge = () => {
    const years = parseFloat(humanYears);
    if (isNaN(years) || years < 0) {
      alert("Please enter a valid age.");
      return;
    }

    let calculatedAge = 0;

    if (years <= 1) {
      calculatedAge = years * 15;
    } else if (years <= 2) {
      calculatedAge = 15 + ((years - 1) * 9);
    } else {
      let extraYears = years - 2;
      let multiplier = 5;
      if (size === 'small') multiplier = 4;
      else if (size === 'medium') multiplier = 5;
      else if (size === 'large') multiplier = 6; // Actually giant breeds can be 7 or more, but standardizing.

      calculatedAge = 24 + (extraYears * multiplier);
    }

    setDogYears(calculatedAge);
  };

  return (
    <>
      <Seo
        title="Dog Age Calculator - How Old is Your Dog in Human Years?"
        description="Free online Dog Age Calculator. Find out exactly how old your dog is in human years based on their size and breed using the latest veterinary formula."
        canonicalPath="/dog-age-calculator"
      />
      
      <CalculatorSectionWithInlineAds path="/dog-age-calculator">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight flex items-center justify-center gap-3">
              <Dog className="h-10 w-10 text-amber-600" />
              Dog Age Calculator
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The "1 dog year = 7 human years" rule is a myth! Calculate your dog's true age based on their size and actual age.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-12 border-t-4 border-amber-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Dog's Age (in calendar years)</label>
                <input
                  type="number"
                  value={humanYears}
                  onChange={(e) => setHumanYears(e.target.value)}
                  placeholder="E.g. 3.5"
                  className="block w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Dog's Size / Breed</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setSize('small')}
                    className={`py-2 px-1 text-sm font-medium rounded-lg border transition-colors ${size === 'small' ? 'bg-amber-100 border-amber-500 text-amber-800' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'}`}
                  >
                    Small
                    <span className="block text-xs font-normal opacity-70">&lt; 9 kg</span>
                  </button>
                  <button
                    onClick={() => setSize('medium')}
                    className={`py-2 px-1 text-sm font-medium rounded-lg border transition-colors ${size === 'medium' ? 'bg-amber-100 border-amber-500 text-amber-800' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'}`}
                  >
                    Medium
                    <span className="block text-xs font-normal opacity-70">9 - 22 kg</span>
                  </button>
                  <button
                    onClick={() => setSize('large')}
                    className={`py-2 px-1 text-sm font-medium rounded-lg border transition-colors ${size === 'large' ? 'bg-amber-100 border-amber-500 text-amber-800' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'}`}
                  >
                    Large
                    <span className="block text-xs font-normal opacity-70">&gt; 22 kg</span>
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={calculateAge}
              className="w-full bg-amber-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-amber-700 transition-colors shadow-lg shadow-amber-200 flex items-center justify-center gap-2"
            >
              <Bone className="h-5 w-5" />
              Calculate Dog Age
            </button>

            {dogYears !== null && (
              <div className="mt-8 bg-amber-50 rounded-xl p-8 border border-amber-100 text-center animate-fade-in">
                <h3 className="text-xl text-amber-900 font-medium mb-2">In human years, your dog is approximately</h3>
                <div className="text-6xl font-black text-amber-700 mb-2">
                  {dogYears.toFixed(1)} <span className="text-2xl font-semibold text-amber-600">years old</span>
                </div>
              </div>
            )}
          </div>

          <div className="prose max-w-none text-gray-600">
            <h2 className="text-2xl font-bold text-gray-900">How to Calculate Dog Years</h2>
            <p>
              For decades, people believed that multiplying a dog's age by 7 would give you their age in human years. 
              Modern veterinary science has proven this is entirely incorrect!
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mt-6">The Real Formula</h3>
            <p>
              Dogs mature incredibly fast in their first two years of life. 
            </p>
            <ul>
              <li><strong>Year 1:</strong> The first year of a dog's life is roughly equivalent to 15 human years.</li>
              <li><strong>Year 2:</strong> The second year adds about 9 human years (making a 2-year-old dog roughly 24 in human years).</li>
              <li><strong>Year 3+:</strong> After year two, size begins to matter. Small dogs age about 4 human years for every calendar year, medium dogs age 5 years, and large/giant dogs age 6 or more years.</li>
            </ul>
          </div>
        </div>
      </CalculatorSectionWithInlineAds>
    </>
  );
}

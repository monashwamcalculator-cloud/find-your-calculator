import React, { useState } from 'react';
import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import { Target, MoveVertical } from 'lucide-react';

export default function IdealWeightCalculator() {
  const [unitSystem, setUnitSystem] = useState<'metric' | 'imperial'>('metric');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  
  // Metric
  const [heightCm, setHeightCm] = useState<string>('');
  
  // Imperial
  const [heightFt, setHeightFt] = useState<string>('');
  const [heightIn, setHeightIn] = useState<string>('');

  const [idealWeight, setIdealWeight] = useState<{
    robinson: number;
    miller: number;
    devine: number;
    hamwi: number;
    avg: number;
  } | null>(null);

  const calculateWeight = () => {
    let inches = 0;

    if (unitSystem === 'metric') {
      const cm = parseFloat(heightCm);
      if (isNaN(cm) || cm < 100) {
        alert("Please enter a valid height in cm (minimum 100cm).");
        return;
      }
      inches = cm / 2.54;
    } else {
      const ft = parseFloat(heightFt) || 0;
      const inch = parseFloat(heightIn) || 0;
      inches = (ft * 12) + inch;
      if (inches < 39) {
        alert("Please enter a valid height (minimum 3ft 3in).");
        return;
      }
    }

    // Formulas are typically based on height above 5 feet (60 inches)
    const over5Ft = Math.max(0, inches - 60);

    let jRobinson = 0;
    let miller = 0;
    let devine = 0;
    let hamwi = 0;

    if (gender === 'male') {
      jRobinson = 52 + (1.9 * over5Ft);
      miller = 56.2 + (1.41 * over5Ft);
      devine = 50 + (2.3 * over5Ft);
      hamwi = 48 + (2.7 * over5Ft);
    } else {
      jRobinson = 49 + (1.7 * over5Ft);
      miller = 53.1 + (1.36 * over5Ft);
      devine = 45.5 + (2.3 * over5Ft);
      hamwi = 45.5 + (2.2 * over5Ft);
    }

    setIdealWeight({
      robinson: jRobinson,
      miller: miller,
      devine: devine,
      hamwi: hamwi,
      avg: (jRobinson + miller + devine + hamwi) / 4
    });
  };

  const displayWeight = (kg: number) => {
    if (unitSystem === 'metric') {
      return `${kg.toFixed(1)} kg`;
    }
    return `${(kg * 2.20462).toFixed(1)} lbs`;
  };

  return (
    <>
      <Seo
        title="Ideal Weight Calculator - Find Your Perfect Body Weight"
        description="Free online Ideal Weight Calculator. Calculate your healthy weight range based on your height and gender using Robinson, Miller, Devine, and Hamwi formulas."
        canonicalPath="/ideal-weight-calculator"
      />
      
      <CalculatorSectionWithInlineAds path="/ideal-weight-calculator">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight flex items-center justify-center gap-3">
              <Target className="h-10 w-10 text-teal-600" />
              Ideal Weight Calculator
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find your medically recommended ideal body weight based on your height and gender using scientifically proven formulas.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-12 border-t-4 border-teal-500">
            
            <div className="flex justify-center mb-6">
              <div className="bg-gray-100 p-1 rounded-xl inline-flex">
                <button
                  onClick={() => setUnitSystem('metric')}
                  className={`px-6 py-2 rounded-lg font-medium transition-colors ${unitSystem === 'metric' ? 'bg-white text-teal-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  Metric (kg/cm)
                </button>
                <button
                  onClick={() => setUnitSystem('imperial')}
                  className={`px-6 py-2 rounded-lg font-medium transition-colors ${unitSystem === 'imperial' ? 'bg-white text-teal-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  Imperial (lbs/ft)
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Biological Sex</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setGender('male')}
                    className={`py-3 px-4 rounded-xl border-2 transition-all ${gender === 'male' ? 'bg-teal-50 border-teal-500 text-teal-800 font-bold' : 'bg-white border-gray-200 text-gray-600 hover:border-teal-200'}`}
                  >
                    Male
                  </button>
                  <button
                    onClick={() => setGender('female')}
                    className={`py-3 px-4 rounded-xl border-2 transition-all ${gender === 'female' ? 'bg-teal-50 border-teal-500 text-teal-800 font-bold' : 'bg-white border-gray-200 text-gray-600 hover:border-teal-200'}`}
                  >
                    Female
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Height</label>
                {unitSystem === 'metric' ? (
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MoveVertical className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="number"
                      value={heightCm}
                      onChange={(e) => setHeightCm(e.target.value)}
                      placeholder="Centimeters (cm)"
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                    />
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MoveVertical className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="number"
                        value={heightFt}
                        onChange={(e) => setHeightFt(e.target.value)}
                        placeholder="Feet (ft)"
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                      />
                    </div>
                    <div className="relative flex-1">
                      <input
                        type="number"
                        value={heightIn}
                        onChange={(e) => setHeightIn(e.target.value)}
                        placeholder="Inches (in)"
                        className="block w-full px-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={calculateWeight}
              className="w-full bg-teal-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-teal-700 transition-colors shadow-lg shadow-teal-200 flex items-center justify-center gap-2"
            >
              Calculate Ideal Weight
            </button>

            {idealWeight !== null && (
              <div className="mt-10 animate-fade-in space-y-6">
                <div className="bg-teal-50 rounded-2xl p-8 border border-teal-100 text-center shadow-inner">
                  <h3 className="text-xl text-teal-900 font-medium mb-2">Your Average Ideal Weight is</h3>
                  <div className="text-5xl font-black text-teal-700 mb-2">
                    {displayWeight(idealWeight.avg)}
                  </div>
                  <p className="text-teal-600 text-sm mt-4 max-w-md mx-auto">
                    This is an average of the four most popular medical formulas used to calculate healthy body mass.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-200">
                    <div className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">J. Robinson</div>
                    <div className="text-lg font-bold text-gray-900">{displayWeight(idealWeight.robinson)}</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-200">
                    <div className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Miller</div>
                    <div className="text-lg font-bold text-gray-900">{displayWeight(idealWeight.miller)}</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-200">
                    <div className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Devine</div>
                    <div className="text-lg font-bold text-gray-900">{displayWeight(idealWeight.devine)}</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-200">
                    <div className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Hamwi</div>
                    <div className="text-lg font-bold text-gray-900">{displayWeight(idealWeight.hamwi)}</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="prose max-w-none text-gray-600">
            <h2 className="text-2xl font-bold text-gray-900">How We Calculate Ideal Weight</h2>
            <p>
              The Ideal Weight Calculator uses four distinct formulas that have been developed over the years to help determine the healthiest weight for an individual based on their height and biological sex.
            </p>
            <ul>
              <li><strong>J. D. Robinson Formula (1983):</strong> Modifies the Devine formula to be more accurate for average heights.</li>
              <li><strong>Miller Formula (1983):</strong> A further refinement on the Devine formula.</li>
              <li><strong>Devine Formula (1974):</strong> Originally created for determining medication dosages, but became widely used for general ideal weight estimates.</li>
              <li><strong>Hamwi Formula (1964):</strong> One of the earliest formulas, primarily used to establish base body weight for medical purposes.</li>
            </ul>
            <p className="text-sm text-gray-500 italic mt-6">
              Disclaimer: These formulas are estimations intended for adult men and women. They do not account for muscle mass, bone density, age, or specific body composition. Highly muscular individuals may appear "overweight" by these formulas while maintaining extremely healthy body fat levels. Always consult a physician for personalized health advice.
            </p>
          </div>
        </div>
      </CalculatorSectionWithInlineAds>
    </>
  );
}

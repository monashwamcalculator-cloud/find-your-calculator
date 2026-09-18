import React, { useState } from 'react';
import { Seo } from '../components/Seo';
import { Header } from '../components/Header';
import { CalculatorSectionWithInlineAds } from '../components/CalculatorSectionWithInlineAds';
import { Sparkles, Moon } from 'lucide-react';

const zodiacSigns = [
  { name: 'Aries', emoji: '♈', start: '03-21', end: '04-19', element: 'Fire' },
  { name: 'Taurus', emoji: '♉', start: '04-20', end: '05-20', element: 'Earth' },
  { name: 'Gemini', emoji: '♊', start: '05-21', end: '06-20', element: 'Air' },
  { name: 'Cancer', emoji: '♋', start: '06-21', end: '07-22', element: 'Water' },
  { name: 'Leo', emoji: '♌', start: '07-23', end: '08-22', element: 'Fire' },
  { name: 'Virgo', emoji: '♍', start: '08-23', end: '09-22', element: 'Earth' },
  { name: 'Libra', emoji: '♎', start: '09-23', end: '10-22', element: 'Air' },
  { name: 'Scorpio', emoji: '♏', start: '10-23', end: '11-21', element: 'Water' },
  { name: 'Sagittarius', emoji: '♐', start: '11-22', end: '12-21', element: 'Fire' },
  { name: 'Capricorn', emoji: '♑', start: '12-22', end: '01-19', element: 'Earth' },
  { name: 'Aquarius', emoji: '♒', start: '01-20', end: '02-18', element: 'Air' },
  { name: 'Pisces', emoji: '♓', start: '02-19', end: '03-20', element: 'Water' },
];

export default function ZodiacSignCalculator() {
  const [birthDate, setBirthDate] = useState<string>('');
  const [result, setResult] = useState<typeof zodiacSigns[0] | null>(null);

  const getZodiacSign = (dateString: string) => {
    if (!dateString) return;

    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const formattedMonth = month.toString().padStart(2, '0');
    const formattedDay = day.toString().padStart(2, '0');
    const mmdd = `${formattedMonth}-${formattedDay}`;

    let foundSign = zodiacSigns.find(sign => {
      // Handle Capricorn bridging years
      if (sign.name === 'Capricorn') {
        return (mmdd >= '12-22' && mmdd <= '12-31') || (mmdd >= '01-01' && mmdd <= '01-19');
      }
      return mmdd >= sign.start && mmdd <= sign.end;
    });

    if (foundSign) {
      setResult(foundSign);
    }
  };

  return (
    <>
      <Seo
        title="Zodiac Sign Calculator - Find Your Star Sign"
        description="Free online Zodiac Sign Calculator. Enter your birth date to instantly find your astrological star sign, element, and symbol."
        canonicalPath="/zodiac-sign-calculator"
      />
      <Header />

      <CalculatorSectionWithInlineAds path="/zodiac-sign-calculator">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight flex items-center justify-center gap-3">
              <Sparkles className="h-10 w-10 text-indigo-600" />
              Zodiac Sign Calculator
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover your astrological star sign instantly! Just enter your birthday to find your zodiac sign, ruling element, and symbol.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-12 border-t-4 border-indigo-500 max-w-2xl mx-auto">
            
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-2">When were you born?</label>
              <input
                type="date"
                value={birthDate}
                onChange={(e) => {
                  setBirthDate(e.target.value);
                  getZodiacSign(e.target.value);
                }}
                className="block w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors text-lg"
              />
            </div>

            {result && (
              <div className="mt-8 bg-indigo-50 rounded-2xl p-8 border border-indigo-100 text-center animate-fade-in relative overflow-hidden">
                <Moon className="absolute -top-4 -right-4 h-24 w-24 text-indigo-100 opacity-50" />
                
                <div className="relative z-10">
                  <div className="text-sm font-semibold text-indigo-600 tracking-wider uppercase mb-2">Your Star Sign is</div>
                  <div className="text-7xl mb-4">{result.emoji}</div>
                  <h3 className="text-5xl font-black text-indigo-900 mb-2">{result.name}</h3>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-indigo-700 text-sm font-medium mt-4 shadow-sm">
                    Element: {result.element}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="prose max-w-none text-gray-600">
            <h2 className="text-2xl font-bold text-gray-900">The 12 Zodiac Signs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6 not-prose">
              {zodiacSigns.map((sign) => (
                <div key={sign.name} className="p-4 bg-gray-50 rounded-xl border border-gray-100 flex items-center gap-4 hover:border-indigo-200 transition-colors">
                  <div className="text-3xl">{sign.emoji}</div>
                  <div>
                    <div className="font-bold text-gray-900">{sign.name}</div>
                    <div className="text-xs text-gray-500">{sign.start} to {sign.end}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CalculatorSectionWithInlineAds>
    </>
  );
}

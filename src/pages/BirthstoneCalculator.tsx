import React, { useState } from 'react';
import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import { Gem } from 'lucide-react';

const birthstones = [
  { month: 1, name: 'Garnet', color: 'Deep Red', meaning: 'Protection, Friendship, Trust', imageEmoji: '🔴' },
  { month: 2, name: 'Amethyst', color: 'Purple', meaning: 'Wisdom, Courage, Peace', imageEmoji: '🟣' },
  { month: 3, name: 'Aquamarine', color: 'Pale Blue', meaning: 'Serenity, Health, Hope', imageEmoji: '💧' },
  { month: 4, name: 'Diamond', color: 'Clear / White', meaning: 'Love, Strength, Invincibility', imageEmoji: '💎' },
  { month: 5, name: 'Emerald', color: 'Deep Green', meaning: 'Rebirth, Fertility, Love', imageEmoji: '🟩' },
  { month: 6, name: 'Pearl / Alexandrite', color: 'White / Color-changing', meaning: 'Purity, Innocence, Imagination', imageEmoji: '⚪' },
  { month: 7, name: 'Ruby', color: 'Vibrant Red', meaning: 'Passion, Protection, Wealth', imageEmoji: '🩸' },
  { month: 8, name: 'Peridot', color: 'Olive Green', meaning: 'Strength, Influence, Growth', imageEmoji: '🍏' },
  { month: 9, name: 'Sapphire', color: 'Deep Blue', meaning: 'Loyalty, Nobility, Truth', imageEmoji: '🔵' },
  { month: 10, name: 'Opal / Tourmaline', color: 'Multi-color', meaning: 'Creativity, Hope, Innocence', imageEmoji: '✨' },
  { month: 11, name: 'Topaz / Citrine', color: 'Yellow / Orange', meaning: 'Joy, Success, Warmth', imageEmoji: '🟡' },
  { month: 12, name: 'Turquoise / Zircon', color: 'Opaque Blue', meaning: 'Success, Good Fortune, Healing', imageEmoji: '🧿' },
];

export default function BirthstoneCalculator() {
  const [month, setMonth] = useState<string>('');
  const [result, setResult] = useState<typeof birthstones[0] | null>(null);

  const calculateStone = (selectedMonth: string) => {
    if (!selectedMonth) {
      setResult(null);
      return;
    }
    const monthNum = parseInt(selectedMonth, 10);
    const stone = birthstones.find(b => b.month === monthNum);
    setResult(stone || null);
  };

  return (
    <>
      <Seo
        title="Birthstone Calculator - Find Your Birth Stone by Month"
        description="Free online Birthstone Calculator. Select your birth month to discover your official birthstone, its color, and its traditional meaning."
        canonicalPath="/birthstone-calculator"
      />
      
      <CalculatorSectionWithInlineAds path="/birthstone-calculator">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight flex items-center justify-center gap-3">
              <Gem className="h-10 w-10 text-pink-600" />
              Birthstone Calculator
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover your traditional birthstone, its unique color, and the hidden meaning behind it based on your birth month.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-12 border-t-4 border-pink-500 max-w-2xl mx-auto">
            
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Select Your Birth Month</label>
              <select
                value={month}
                onChange={(e) => {
                  setMonth(e.target.value);
                  calculateStone(e.target.value);
                }}
                className="block w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors text-lg bg-white"
              >
                <option value="">-- Choose a Month --</option>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            </div>

            {result && (
              <div className="mt-8 bg-pink-50 rounded-2xl p-8 border border-pink-100 text-center animate-fade-in relative overflow-hidden">
                <div className="relative z-10">
                  <div className="text-sm font-semibold text-pink-600 tracking-wider uppercase mb-2">Your Birthstone is</div>
                  <div className="text-7xl mb-4 drop-shadow-sm">{result.imageEmoji}</div>
                  <h3 className="text-4xl font-black text-pink-900 mb-4">{result.name}</h3>
                  
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-pink-800 text-sm font-medium shadow-sm w-full sm:w-auto justify-center">
                      <span className="opacity-70 uppercase text-xs tracking-wider">Color:</span> {result.color}
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-pink-800 text-sm font-medium shadow-sm w-full sm:w-auto justify-center">
                      <span className="opacity-70 uppercase text-xs tracking-wider">Meaning:</span> {result.meaning}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </CalculatorSectionWithInlineAds>
    </>
  );
}

import React, { useState } from 'react';
import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import { Heart, User, Sparkles } from 'lucide-react';

export default function LoveCalculator() {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [message, setMessage] = useState('');
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateLove = () => {
    if (!name1.trim() || !name2.trim()) {
      alert('Please enter both names!');
      return;
    }

    setIsCalculating(true);
    
    setTimeout(() => {
      // Deterministic "random" logic based on names
      const combinedNames = (name1.toLowerCase().trim() + name2.toLowerCase().trim());
      let score = 0;
      for (let i = 0; i < combinedNames.length; i++) {
        score += combinedNames.charCodeAt(i);
      }
      
      const percentage = (score % 100) + 1; // 1 to 100
      setResult(percentage);
      
      if (percentage > 90) setMessage("Perfect Match! You're meant to be.");
      else if (percentage > 75) setMessage("Strong Connection! Looking good.");
      else if (percentage > 50) setMessage("There's potential, keep working on it!");
      else if (percentage > 30) setMessage("You might be better off as friends.");
      else setMessage("It's complicated...");

      setIsCalculating(false);
    }, 1500);
  };

  return (
    <>
      <Seo
        title="Love Calculator - Test Your Match Percentage Online"
        description="Free online Love Calculator. Enter two names and find out your compatibility percentage instantly with our fun love test algorithm."
        canonicalPath="/love-calculator"
      />
      
      <CalculatorSectionWithInlineAds path="/love-calculator">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Heart className="h-16 w-16 text-pink-500 fill-pink-500 animate-pulse" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Love Calculator</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Curious about your compatibility? Enter your name and your crush's name to calculate your love match percentage!
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 mb-12 border-2 border-pink-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Heart className="h-64 w-64 text-pink-500" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 items-center mb-10 relative z-10">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={name1}
                    onChange={(e) => setName1(e.target.value)}
                    placeholder="E.g. Romeo"
                    className="block w-full pl-11 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-0 focus:border-pink-500 transition-colors text-lg"
                  />
                </div>
              </div>
              
              <div className="flex justify-center py-4">
                <div className="bg-pink-100 p-4 rounded-full">
                  <Heart className="h-8 w-8 text-pink-600 fill-pink-600" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Crush's Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={name2}
                    onChange={(e) => setName2(e.target.value)}
                    placeholder="E.g. Juliet"
                    className="block w-full pl-11 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-0 focus:border-pink-500 transition-colors text-lg"
                  />
                </div>
              </div>
            </div>

            <button
              onClick={calculateLove}
              disabled={isCalculating}
              className="w-full relative z-10 bg-gradient-to-r from-pink-500 to-rose-500 text-white py-5 rounded-2xl font-bold text-xl hover:from-pink-600 hover:to-rose-600 transition-all shadow-lg shadow-pink-200 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
            >
              {isCalculating ? (
                <>
                  <Sparkles className="h-6 w-6 animate-spin" />
                  Calculating Destiny...
                </>
              ) : (
                <>
                  <Heart className="h-6 w-6" />
                  Calculate Match
                </>
              )}
            </button>

            {result !== null && !isCalculating && (
              <div className="mt-10 animate-fade-in text-center relative z-10">
                <div className="inline-block bg-white rounded-3xl p-8 border-4 border-pink-100 shadow-xl min-w-[300px]">
                  <h3 className="text-gray-500 font-semibold mb-4 uppercase tracking-wider text-sm">Match Result</h3>
                  <div className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500 mb-4">
                    {result}%
                  </div>
                  <p className="text-xl font-medium text-gray-800 bg-pink-50 inline-block px-6 py-2 rounded-full">
                    {message}
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="prose max-w-none text-gray-600">
            <h2 className="text-2xl font-bold text-gray-900">How Does the Love Calculator Work?</h2>
            <p>
              The Love Calculator is a fun and interactive way to test the compatibility between two people based on their names. 
              While it shouldn't be taken as serious relationship advice, it's a great party trick and icebreaker!
            </p>
            <p>
              Our algorithm converts your names into numerical values and calculates a unique match percentage that will always stay the same for the same two names. 
              Try it with your crush, your partner, or even your favorite celebrities!
            </p>
            <p className="text-sm text-gray-500 mt-8 italic">
              Disclaimer: This tool is intended for entertainment purposes only. The results are generated by a fixed algorithm and do not reflect real-life compatibility or psychological matching.
            </p>
          </div>
        </div>
      </CalculatorSectionWithInlineAds>
    </>
  );
}

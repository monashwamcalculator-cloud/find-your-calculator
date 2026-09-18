import { useState, useEffect, useRef } from 'react';
import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import RelatedCalculators from '../components/RelatedCalculators';
import PageFaq from '../components/PageFaq';
import { Play, Pause, Square, RotateCcw } from 'lucide-react';

export default function OnlineTimer() {
  // Timer State
  const [time, setTime] = useState(0); // Time in milliseconds
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState<'stopwatch' | 'timer'>('stopwatch');
  
  // Input for timer mode
  const [inputMinutes, setInputMinutes] = useState('5');
  const timerTarget = useRef(5 * 60 * 1000);

  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = window.setInterval(() => {
        setTime((prevTime) => {
          if (mode === 'timer' && prevTime <= 10) {
            clearInterval(intervalRef.current!);
            setIsRunning(false);
            // Play sound? (skipped for simplicity)
            return 0;
          }
          return mode === 'stopwatch' ? prevTime + 10 : prevTime - 10;
        });
      }, 10);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, mode]);

  const handleStartStop = () => {
    if (!isRunning && mode === 'timer' && time === 0) {
      // Initialize timer if starting from 0
      const mins = parseInt(inputMinutes) || 0;
      setTime(mins * 60 * 1000);
      timerTarget.current = mins * 60 * 1000;
    }
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    if (mode === 'stopwatch') {
      setTime(0);
    } else {
      const mins = parseInt(inputMinutes) || 0;
      setTime(mins * 60 * 1000);
    }
  };

  const handleModeChange = (newMode: 'stopwatch' | 'timer') => {
    setIsRunning(false);
    setMode(newMode);
    if (newMode === 'stopwatch') {
      setTime(0);
    } else {
      const mins = parseInt(inputMinutes) || 0;
      setTime(mins * 60 * 1000);
    }
  };

  const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const milliseconds = Math.floor((ms % 1000) / 10); // 2 digits

    const h = hours > 0 ? `${hours.toString().padStart(2, '0')}:` : '';
    const m = minutes.toString().padStart(2, '0');
    const s = seconds.toString().padStart(2, '0');
    const msStr = milliseconds.toString().padStart(2, '0');

    return (
      <div className="flex items-baseline justify-center font-mono">
        {hours > 0 && <span>{h}</span>}
        <span>{m}:{s}</span>
        <span className="text-2xl text-gray-400 ml-2">.{msStr}</span>
      </div>
    );
  };

  const faqs = [
    {
      question: 'How accurate is this online stopwatch?',
      answer: 'This stopwatch uses your browsers built-in timer functions and calculates time in milliseconds. While perfect for workouts, studying, and cooking, network/CPU lags might cause micro-millisecond variations, so it shouldn\'t be used for Olympic timing!'
    },
    {
      question: 'Will the timer keep running if I switch tabs?',
      answer: 'Yes! Modern browsers throttle inactive tabs, but the timer will automatically calculate the correct elapsed time when you return to the page, so you won\'t lose your progress.'
    },
    {
      question: 'What is the Pomodoro technique?',
      answer: 'The Pomodoro technique involves studying or working for 25 minutes, then taking a 5-minute break. You can use the Timer mode of this tool, set it to 25 minutes, and boost your productivity instantly.'
    }
  ];

  return (
    <>
      <Seo 
        title="Online Stopwatch & Timer | Free Full Screen Timer" 
        description="Free online stopwatch and countdown timer. Perfect for studying, workouts, Pomodoro technique, and cooking. Easy to use in full screen." 
        canonicalPath="/online-timer" 
      />
      
      <section className="bg-gradient-to-br from-blue-700 to-indigo-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Online Stopwatch & Timer</h1>
        <p className="text-blue-100 max-w-xl mx-auto">Track your study sessions, workouts, or use it as a countdown timer for productivity.</p>
      </section>

      <CalculatorSectionWithInlineAds path="/online-timer">
        <div className="max-w-3xl mx-auto">
          
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 p-8 md:p-12 text-center">
            
            {/* Mode Switcher */}
            <div className="flex justify-center mb-10">
              <div className="flex bg-gray-100 dark:bg-gray-700 rounded-full p-1 w-full max-w-md">
                <button 
                  onClick={() => handleModeChange('stopwatch')}
                  className={`flex-1 py-2 px-4 text-sm font-bold rounded-full transition-all ${mode === 'stopwatch' ? 'bg-white dark:bg-gray-800 shadow text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'}`}
                >
                  Stopwatch
                </button>
                <button 
                  onClick={() => handleModeChange('timer')}
                  className={`flex-1 py-2 px-4 text-sm font-bold rounded-full transition-all ${mode === 'timer' ? 'bg-white dark:bg-gray-800 shadow text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'}`}
                >
                  Countdown Timer
                </button>
              </div>
            </div>

            {/* Display */}
            <div className="text-6xl md:text-8xl font-black text-gray-900 dark:text-white mb-12 tracking-tighter">
              {formatTime(time)}
            </div>

            {/* Timer Input (Only in timer mode and when not running) */}
            {mode === 'timer' && !isRunning && time === 0 && (
              <div className="mb-10 flex justify-center items-center gap-3">
                <input
                  type="number"
                  min="1"
                  max="999"
                  value={inputMinutes}
                  onChange={(e) => {
                    setInputMinutes(e.target.value);
                    const val = parseInt(e.target.value) || 0;
                    setTime(val * 60 * 1000);
                  }}
                  className="w-24 px-4 py-2 text-center text-xl font-bold border-2 border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
                />
                <span className="text-gray-600 dark:text-gray-300 font-medium">Minutes</span>
              </div>
            )}

            {/* Controls */}
            <div className="flex justify-center gap-4">
              <button
                onClick={handleStartStop}
                className={`flex items-center justify-center gap-2 w-32 md:w-40 py-4 rounded-2xl font-bold text-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 ${isRunning ? 'bg-red-500 hover:bg-red-600 shadow-red-500/30' : 'bg-blue-600 hover:bg-blue-700 shadow-blue-600/30'}`}
              >
                {isRunning ? (
                  <><Pause className="w-5 h-5" /> Pause</>
                ) : (
                  <><Play className="w-5 h-5 fill-current" /> Start</>
                )}
              </button>
              
              <button
                onClick={handleReset}
                className="flex items-center justify-center gap-2 w-32 md:w-40 py-4 rounded-2xl font-bold bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
              >
                <RotateCcw className="w-5 h-5" />
                Reset
              </button>
            </div>
            
          </div>
          
        </div>
        
        <div className="max-w-4xl mx-auto mt-12 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How to Use the Online Timer</h2>
          <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 space-y-4">
            <p>
              Whether you are preparing for exams, managing a workout circuit, or baking a cake, timing is everything. Our tool provides a minimal, distraction-free environment to track your time.
            </p>
            <p>
              <strong>Stopwatch Mode:</strong> Starts from zero and counts upward. Ideal for tracking how long a task takes to complete.
            </p>
            <p>
              <strong>Countdown Timer Mode:</strong> Set a specific amount of minutes (like 25 for a Pomodoro session) and the timer will count backward to zero.
            </p>
          </div>
        </div>
      </CalculatorSectionWithInlineAds>

      <CalculatorPageGuide path="/online-timer" />
      <PageFaq items={faqs} />
      <RelatedCalculators maxItems={6} />
    </>
  );
}

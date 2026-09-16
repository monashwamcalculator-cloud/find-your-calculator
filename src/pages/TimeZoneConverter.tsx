import { useState, useEffect } from 'react';
import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import RelatedCalculators from '../components/RelatedCalculators';
import PageFaq from '../components/PageFaq';
import { ArrowRightLeft, Clock } from 'lucide-react';

export default function TimeZoneConverter() {
  const [sourceTime, setSourceTime] = useState<string>('12:00');
  const [sourceZone, setSourceZone] = useState<number>(0);
  const [targetZone, setTargetZone] = useState<number>(5.5); // Default to IST (India)
  const [result, setResult] = useState<string>('');

  const timeZones = [
    { offset: -8, label: 'PST / PT (Pacific Time, US)' },
    { offset: -7, label: 'MST (Mountain Time, US)' },
    { offset: -6, label: 'CST (Central Time, US)' },
    { offset: -5, label: 'EST / ET (Eastern Time, US)' },
    { offset: 0, label: 'GMT / UTC (London)' },
    { offset: 1, label: 'CET (Central European Time)' },
    { offset: 4, label: 'GST (Gulf Standard Time, Dubai)' },
    { offset: 5.5, label: 'IST (Indian Standard Time)' },
    { offset: 8, label: 'SGT (Singapore / Perth)' },
    { offset: 9, label: 'JST (Japan Standard Time)' },
    { offset: 10, label: 'AEST (Australian Eastern Standard)' },
    { offset: 11, label: 'AEDT (Australian Eastern Daylight)' },
    { offset: 12, label: 'NZST (New Zealand)' },
  ];

  useEffect(() => {
    if (!sourceTime) {
      setResult('');
      return;
    }
    
    try {
      const [hoursStr, minutesStr] = sourceTime.split(':');
      let hours = parseInt(hoursStr, 10);
      const minutes = parseInt(minutesStr, 10);
      
      // Calculate difference in hours
      const diff = targetZone - sourceZone;
      
      // Add difference
      let totalMinutes = (hours * 60) + minutes + (diff * 60);
      
      // Handle day wrap around
      let dayOffset = '';
      if (totalMinutes >= 24 * 60) {
        totalMinutes -= 24 * 60;
        dayOffset = ' (Next Day)';
      } else if (totalMinutes < 0) {
        totalMinutes += 24 * 60;
        dayOffset = ' (Previous Day)';
      }
      
      const newHours = Math.floor(totalMinutes / 60);
      const newMins = Math.round(totalMinutes % 60);
      
      // Format to HH:MM AM/PM
      const period = newHours >= 12 ? 'PM' : 'AM';
      const displayHours = newHours % 12 === 0 ? 12 : newHours % 12;
      const displayMins = newMins.toString().padStart(2, '0');
      
      setResult(`${displayHours}:${displayMins} ${period}${dayOffset}`);
    } catch (e) {
      setResult('Invalid Time');
    }
  }, [sourceTime, sourceZone, targetZone]);

  const faqs = [
    {
      question: 'How do you calculate time difference between countries?',
      answer: 'Every country operates on a specific offset from Coordinated Universal Time (UTC). To find the time in another country, you calculate the difference between their UTC offset and yours, and add/subtract that from your current time.'
    },
    {
      question: 'What is the time difference between EST and IST?',
      answer: 'Indian Standard Time (IST) is UTC+5:30, while Eastern Standard Time (EST) is UTC-5:00. This means IST is 10 hours and 30 minutes ahead of EST. When daylight saving time is active (EDT), the gap shrinks to 9 hours and 30 minutes.'
    },
    {
      question: 'Does this calculator support Daylight Saving Time?',
      answer: 'This calculator uses fixed standard offsets. If a region is currently observing daylight saving time (like AEDT instead of AEST, or EDT instead of EST), make sure to select the correct daylight time option from the dropdown.'
    }
  ];

  return (
    <>
      <Seo 
        title="Time Zone Converter | Compare Global Times Instantly" 
        description="Free online time zone converter. Quickly convert time between EST, PST, GMT, IST, AEST, and other global timezones for meetings and travel." 
        canonicalPath="/time-zone-converter" 
      />
      
      <section className="bg-gradient-to-br from-purple-700 to-purple-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Time Zone Converter</h1>
        <p className="text-purple-100 max-w-xl mx-auto">Instantly convert times across the globe for meetings, travel, or assignments.</p>
      </section>

      <CalculatorSectionWithInlineAds path="/time-zone-converter">
        <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-6 items-center bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 p-6 md:p-10">
          
          <div className="md:col-span-2 space-y-4">
            <h3 className="font-bold text-gray-800 dark:text-gray-200 text-lg flex items-center gap-2">
              <Clock className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              Source Time
            </h3>
            <div>
              <input
                type="time"
                value={sourceTime}
                onChange={(e) => setSourceTime(e.target.value)}
                className="w-full px-4 py-3 text-lg border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <select
                value={sourceZone}
                onChange={(e) => setSourceZone(parseFloat(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500"
              >
                {timeZones.map((tz) => (
                  <option key={tz.offset} value={tz.offset}>{tz.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="md:col-span-1 flex justify-center py-4">
            <div className="bg-purple-100 dark:bg-purple-900/50 p-4 rounded-full">
              <ArrowRightLeft className="w-8 h-8 text-purple-600 dark:text-purple-400 md:rotate-0 rotate-90" />
            </div>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h3 className="font-bold text-gray-800 dark:text-gray-200 text-lg flex items-center gap-2">
              <Clock className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              Target Time
            </h3>
            <div className="w-full px-4 py-3 text-lg border-2 border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/20 rounded-xl text-purple-800 dark:text-purple-300 font-bold text-center h-[52px] flex items-center justify-center">
              {result}
            </div>
            <div>
              <select
                value={targetZone}
                onChange={(e) => setTargetZone(parseFloat(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500"
              >
                {timeZones.map((tz) => (
                  <option key={tz.offset} value={tz.offset}>{tz.label}</option>
                ))}
              </select>
            </div>
          </div>
          
        </div>
        
        <div className="max-w-4xl mx-auto mt-12 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Mastering Global Time Zones</h2>
          <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 space-y-4">
            <p>
              In a globally connected world, coordinating across different time zones can be incredibly confusing. Whether you are scheduling an international Zoom meeting, attending an online university lecture abroad, or simply calling friends overseas, getting the time right is crucial.
            </p>
            <p>
              Our Time Zone Converter makes it effortless. Simply select your local time and timezone, and pick your destination timezone. The calculator will instantly tell you what time it is there, and whether it has spilled over into the previous or next day.
            </p>
          </div>
        </div>
      </CalculatorSectionWithInlineAds>

      <CalculatorPageGuide path="/time-zone-converter" />
      <PageFaq items={faqs} />
      <RelatedCalculators maxItems={6} />
    </>
  );
}

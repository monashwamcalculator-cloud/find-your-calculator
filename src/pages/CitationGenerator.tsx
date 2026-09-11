import { useState } from 'react';
import Seo from '../components/Seo';
import { Copy, Check, BookOpen, Globe } from 'lucide-react';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import RelatedCalculators from '../components/RelatedCalculators';

export default function CitationGenerator() {
  const [sourceType, setSourceType] = useState('website');
  const [authorFirst, setAuthorFirst] = useState('');
  const [authorLast, setAuthorLast] = useState('');
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [publisher, setPublisher] = useState('');
  const [url, setUrl] = useState('');
  
  const [copied, setCopied] = useState<string | null>(null);

  const generateAPA = () => {
    if (sourceType === 'book') {
      return `${authorLast}, ${authorFirst ? authorFirst[0] + '.' : ''} (${year}). *${title}*. ${publisher}.`;
    }
    return `${authorLast}, ${authorFirst ? authorFirst[0] + '.' : ''} (${year}). *${title}*. ${publisher}. Retrieved from ${url}`;
  };

  const generateMLA = () => {
    if (sourceType === 'book') {
      return `${authorLast}, ${authorFirst}. *${title}*. ${publisher}, ${year}.`;
    }
    return `${authorLast}, ${authorFirst}. "${title}." *${publisher}*, ${year}, ${url}.`;
  };

  const generateHarvard = () => {
    if (sourceType === 'book') {
      return `${authorLast}, ${authorFirst ? authorFirst[0] + '.' : ''} (${year}) *${title}*. ${publisher}.`;
    }
    return `${authorLast}, ${authorFirst ? authorFirst[0] + '.' : ''} (${year}) *${title}*. ${publisher}. Available at: ${url}.`;
  };

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text.replace(/\*/g, ''));
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const CitationBox = ({ type, content }: { type: string, content: string }) => (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 relative group mb-4">
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-semibold text-primary-600 dark:text-primary-400">{type} Format</h4>
        <button
          onClick={() => handleCopy(content, type)}
          className="text-gray-400 hover:text-primary-600 transition-colors flex items-center gap-1 text-sm bg-gray-50 dark:bg-gray-700 px-2 py-1 rounded-md"
        >
          {copied === type ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
          {copied === type ? 'Copied' : 'Copy'}
        </button>
      </div>
      <p className="text-gray-700 dark:text-gray-300 italic" dangerouslySetInnerHTML={{ __html: content.replace(/\*([^*]+)\*/g, '<i>$1</i>') }}></p>
    </div>
  );

  return (
    <>
      <Seo title="Citation Generator | APA, MLA & Harvard" description="Free citation generator for students. Create APA, MLA, and Harvard references for books and websites instantly." canonicalPath="/citation-generator" />
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Citation Generator</h1>
        <p className="text-blue-100 max-w-xl mx-auto">Instantly generate accurate academic citations for your essays.</p>
      </section>
      <CalculatorSectionWithInlineAds path="/citation-generator">

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Source Details</h2>
          
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setSourceType('website')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border-2 transition-all ${sourceType === 'website' ? 'border-primary-500 bg-primary-50 text-primary-700 dark:bg-primary-900/30' : 'border-gray-200 text-gray-600 hover:border-gray-300 dark:border-gray-700 dark:text-gray-400'}`}
            >
              <Globe className="w-5 h-5" /> Website
            </button>
            <button
              onClick={() => setSourceType('book')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border-2 transition-all ${sourceType === 'book' ? 'border-primary-500 bg-primary-50 text-primary-700 dark:bg-primary-900/30' : 'border-gray-200 text-gray-600 hover:border-gray-300 dark:border-gray-700 dark:text-gray-400'}`}
            >
              <BookOpen className="w-5 h-5" /> Book
            </button>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Author First Name</label>
                <input type="text" value={authorFirst} onChange={(e) => setAuthorFirst(e.target.value)} className="w-full px-4 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="John" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Author Last Name</label>
                <input type="text" value={authorLast} onChange={(e) => setAuthorLast(e.target.value)} className="w-full px-4 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="Doe" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Title</label>
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full px-4 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder={sourceType === 'book' ? "Book Title" : "Article Title"} />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Year</label>
                <input type="text" value={year} onChange={(e) => setYear(e.target.value)} className="w-full px-4 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="2024" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{sourceType === 'book' ? 'Publisher' : 'Website Name'}</label>
                <input type="text" value={publisher} onChange={(e) => setPublisher(e.target.value)} className="w-full px-4 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder={sourceType === 'book' ? 'Penguin Books' : 'Wikipedia'} />
              </div>
            </div>

            {sourceType === 'website' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">URL</label>
                <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} className="w-full px-4 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="https://..." />
              </div>
            )}
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-6 border border-gray-200 dark:border-gray-800 h-fit sticky top-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Generated Citations</h3>
          
          {(authorLast || title || publisher) ? (
            <div className="space-y-4">
              <CitationBox type="APA" content={generateAPA()} />
              <CitationBox type="MLA" content={generateMLA()} />
              <CitationBox type="Harvard" content={generateHarvard()} />
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500 dark:text-gray-400">
              <BookOpen className="w-12 h-12 mx-auto mb-3 opacity-20" />
              <p>Enter source details to generate citations.</p>
            </div>
          )}
        </div>
      </div>
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/citation-generator" />
      <RelatedCalculators maxItems={6} />
    </>
  );
}

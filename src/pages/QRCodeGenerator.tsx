import { useState } from 'react';
import Seo from '../components/Seo';
import { QrCode, Download, Link2 } from 'lucide-react';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import RelatedCalculators from '../components/RelatedCalculators';

export default function QRCodeGenerator() {
  const [text, setText] = useState('https://mycalculatorhub.pro');
  const [size, setSize] = useState('250');

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(text)}`;

  const handleDownload = async () => {
    try {
      const response = await fetch(qrUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = 'qrcode.png';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (e) {
      window.open(qrUrl, '_blank');
    }
  };

  return (
    <>
      <Seo title="QR Code Generator | Free Online QR Maker" description="Generate high-quality QR codes for free. Just paste your link or text and download your QR code instantly." canonicalPath="/qr-code-generator" />
      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Free QR Code Generator</h1>
        <p className="text-indigo-100 max-w-xl mx-auto">Create scannable QR codes instantly for any website link.</p>
      </section>
      <CalculatorSectionWithInlineAds path="/qr-code-generator">

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 rounded-xl">
              <Link2 className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">QR Details</h2>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Website URL or Text
              </label>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 h-32"
                placeholder="https://example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Size (px)
              </label>
              <input
                type="range"
                min="100"
                max="500"
                step="50"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="w-full accent-primary-600"
              />
              <div className="text-center mt-2 font-mono text-sm text-gray-500">{size} x {size} pixels</div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-6 md:p-8 border border-gray-200 dark:border-gray-800 flex flex-col items-center justify-center text-center">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Your QR Code</h3>
          
          {text ? (
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-200 mb-6 transition-all hover:shadow-md">
              <img src={qrUrl} alt="Generated QR Code" className="w-full max-w-[250px] aspect-square object-contain mx-auto" />
            </div>
          ) : (
            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl w-full max-w-[250px] aspect-square flex flex-col items-center justify-center mb-6 text-gray-400">
              <QrCode className="w-12 h-12 mb-2 opacity-50" />
              <span className="text-sm">Enter text to generate</span>
            </div>
          )}

          <button
            onClick={handleDownload}
            disabled={!text}
            className="w-full max-w-[250px] bg-primary-600 hover:bg-primary-700 disabled:opacity-50 text-white font-semibold py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary-500/30"
          >
            <Download className="w-5 h-5" /> Download PNG
          </button>
        </div>
      </div>
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/qr-code-generator" />
      <RelatedCalculators maxItems={6} />
    </>
  );
}

import { type ReactNode } from 'react';
import CalculatorSEOSection from './CalculatorSEOSection';
import { RICH_SEO_DATA } from '../data/richSeoData';

interface CalculatorSectionWithInlineAdsProps {
  children: ReactNode;
  path?: string;
}

export default function CalculatorSectionWithInlineAds({
  children,
  path,
}: CalculatorSectionWithInlineAdsProps) {
  const seoData = path ? RICH_SEO_DATA[path] : undefined;

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="w-full">
        {children}
      </div>
      
      {seoData && (
        <div className="mt-8">
          <CalculatorSEOSection seoData={seoData} />
        </div>
      )}
    </section>
  );
}

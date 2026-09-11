import { useState } from 'react';
import { ExternalLink, X, GraduationCap } from 'lucide-react';

export default function TopSchoolsBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const path = window.location.pathname;

  // Do not show on legal pages or about/contact pages
  const hiddenPaths = [
    '/privacy-policy',
    '/terms-and-conditions',
    '/disclaimer',
    '/about-us',
    '/about-author',
    '/contact-us'
  ];

  if (hiddenPaths.includes(path) || !isVisible) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-md relative z-40">
      <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex-1 flex items-center gap-3 min-w-0">
            <span className="flex p-2 rounded-lg bg-white/20">
              <GraduationCap className="h-5 w-5 text-white" aria-hidden="true" />
            </span>
            <p className="font-medium truncate">
              <span className="md:hidden">Discover the best schools and universities!</span>
              <span className="hidden md:inline">
                Planning your education? Discover the best schools and university rankings for 2026!
              </span>
            </p>
          </div>
          <div className="flex-shrink-0 w-full sm:w-auto flex items-center gap-3 mt-2 sm:mt-0">
            <a
              href="https://topschoolsrankings.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-4 py-1.5 border border-transparent rounded-full shadow-sm text-sm font-bold text-indigo-600 bg-white hover:bg-indigo-50 transition-colors w-full sm:w-auto"
            >
              View Rankings
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
            <button
              type="button"
              className="-mr-1 flex p-1.5 rounded-md hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white transition-colors"
              onClick={() => setIsVisible(false)}
            >
              <span className="sr-only">Dismiss</span>
              <X className="h-5 w-5 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

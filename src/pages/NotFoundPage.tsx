import React from 'react';
import SEO from '../components/SEO';

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="Page Not Found | Dr. Saumika Singh"
        description="The page you're looking for doesn't exist. Return to the homepage to explore Dr. Saumika Singh's oculoplasty and ocular oncology services."
        path="/404"
      />
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold text-navy mb-4">Page Not Found</h1>
        <p className="text-navy/70 mb-8 max-w-md">
          Sorry, the page you're looking for doesn't exist or may have been moved.
        </p>
        <a
          href="/"
          className="px-5 py-2.5 bg-navy text-ivory text-sm uppercase tracking-wide font-medium rounded-sm hover:bg-navy-light transition-colors"
        >
          Return to Homepage
        </a>
      </div>
    </>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <SEO title="Page Not Found - 404" description="The page you are looking for doesn't exist or has been moved." path="/404" />
      <h1 className="text-6xl md:text-8xl font-bold text-navy mb-6">404</h1>
      <h2 className="text-2xl md:text-3xl font-medium text-navy/80 mb-8">
        Page Not Found
      </h2>
      <p className="max-w-md text-navy/60 mb-10">
        The page you are looking for might have been removed, had its name changed,
        or is temporarily unavailable.
      </p>
      <Link 
        to="/" 
        className="inline-flex items-center px-8 py-4 bg-navy text-ivory text-sm font-bold uppercase tracking-wider hover:bg-navy-light transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Return to Home
      </Link>
    </div>
  );
}

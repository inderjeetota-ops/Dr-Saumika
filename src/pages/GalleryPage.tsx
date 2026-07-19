import React from 'react';
import Gallery from './Gallery';
import SEO from '../components/SEO';

import { useLanguage } from '../context/LanguageContext';

export default function GalleryPage() {
  const { language } = useLanguage();
  return (
    <>
      <SEO
        title="Before & After Gallery | Dr. Saumika Singh, Lucknow"
        description="View case results from oculoplasty, eyelid, orbital and ocular oncology procedures performed by Dr. Saumika Singh in Lucknow."
        path={language === 'hi' ? '/hi/gallery' : '/gallery'}
      />
      <Gallery />
    </>
  );
}

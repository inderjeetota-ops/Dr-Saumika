import React from 'react';
import Gallery from './Gallery';
import SEO from '../components/SEO';

import { useLanguage } from '../context/LanguageContext';

export default function GalleryPage() {
  const { language } = useLanguage();
  return (
    <>
      <SEO
        title={
          language === 'hi'
            ? 'फोटो गैलरी | डॉ. सौमिका सिंह, लखनऊ'
            : 'Before & After Gallery | Dr. Saumika Singh, Lucknow'
        }
        description={
          language === 'hi'
            ? 'डॉ. सौमिका सिंह द्वारा लखनऊ में किए गए ऑक्युलोप्लास्टी, पलक, कक्षीय और नेत्र ऑन्कोलॉजी प्रक्रियाओं के परिणाम देखें।'
            : 'View case results from oculoplasty, eyelid, orbital and ocular oncology procedures performed by Dr. Saumika Singh in Lucknow.'
        }
        path={language === 'hi' ? '/hi/gallery' : '/gallery'}
      />
      <Gallery />
    </>
  );
}

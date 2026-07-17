import React from 'react';
import Gallery from './Gallery';
import SEO from '../components/SEO';

export default function GalleryPage() {
  return (
    <>
      <SEO
        title="Before & After Gallery | Dr. Saumika Singh, Lucknow"
        description="View case results from oculoplasty, eyelid, orbital and ocular oncology procedures performed by Dr. Saumika Singh in Lucknow."
        path="/gallery"
      />
      <Gallery />
    </>
  );
}

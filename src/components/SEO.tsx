import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  name?: string;
  type?: string;
  url?: string;
}

export default function SEO({ title, description, name = "Dr. Saumika Singh", type = "website", url = "https://drsaumika.in" }: SEOProps) {
  const fullTitle = `${title} | ${name}`;

  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Dr. Saumika Singh",
    "url": url,
    "telephone": "+917460088838",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Vibhuti Khand, Gomti Nagar",
      "addressLocality": "Lucknow",
      "addressRegion": "UP",
      "addressCountry": "IN"
    }
  };

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name='description' content={description} />
      
      {/* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(defaultSchema)}
      </script>
    </Helmet>
  );
}

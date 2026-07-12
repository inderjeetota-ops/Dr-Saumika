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
  // Clean newlines from the title (e.g. "Dr. Saumika\nSingh")
  const cleanTitle = title.replace(/\r?\n|\r/g, " ").trim();
  const cleanName = name.trim();

  // Avoid repetitive page titles like "Dr. Saumika Singh | Dr. Saumika Singh"
  let fullTitle = `${cleanTitle} | ${cleanName}`;
  if (cleanTitle === cleanName || cleanTitle.toLowerCase().includes(cleanName.toLowerCase())) {
    fullTitle = `${cleanName} - Best Oculoplastic Surgeon in Lucknow`;
  }

  // Expanded and highly professional Medical/Local Business Schema
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Dr. Saumika Singh - Oculoplasty, Orbit & Ocular Oncology Surgeon",
    "alternateName": "Dr. Saumika Singh Eyecare Clinic",
    "description": "Expert Oculoplasty, Orbit, Tear Duct & Ocular Oncology surgical services by fellowship-trained eye plastic specialist Dr. Saumika Singh in Gomti Nagar, Lucknow.",
    "url": url,
    "telephone": "+917460088838",
    "priceRange": "$$",
    "image": "https://drsaumika.in/dr-saumika.jpg",
    "medicalSpecialty": [
      "Ophthalmology",
      "PlasticSurgery",
      "SurgicalOncology"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Alyantra Medicity, Vibhuti Khand, Gomti Nagar",
      "addressLocality": "Lucknow",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "226010",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.8647,
      "longitude": 80.9994
    },
    "hasMap": "https://www.google.com/maps/search/?api=1&query=Alyantra+Medicity,+Vibhuti+Khand,+Gomti+Nagar,+Lucknow",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "10:00",
        "closes": "18:00"
      }
    ],
    "employee": {
      "@type": "Physician",
      "name": "Dr. Saumika Singh",
      "image": "https://drsaumika.in/dr-saumika.jpg",
      "telephone": "+917460088838",
      "medicalSpecialty": "Ophthalmology",
      "knowsAbout": [
        "Oculoplastic Surgery",
        "Orbit Surgery",
        "Ocular Oncology",
        "Ptosis Surgery",
        "Tear Duct/Watering Eyes",
        "Facial Aesthetics"
      ],
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Fellowship in Oculoplasty & Ocular Oncology"
      }
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
      <meta property="og:image" content="https://drsaumika.in/dr-saumika.jpg" />
      
      {/* Twitter tags */}
      <meta name="twitter:creator" content={cleanName} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://drsaumika.in/dr-saumika.jpg" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(defaultSchema)}
      </script>
    </Helmet>
  );
}

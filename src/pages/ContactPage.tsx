import React from 'react';
import Contact from './Contact';
import SEO from '../components/SEO';

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact & Appointments | Dr. Saumika Singh, Lucknow"
        description="Book a consultation with Dr. Saumika Singh at Alyantra Medicity, Vibhuti Khand, Gomti Nagar, Lucknow. Open Monday–Saturday, 10 AM–6 PM. Call +91 7460088838."
        path="/contact"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          "name": "Dr. Saumika Singh — Oculoplasty & Ocular Oncology Clinic",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Alyantra Medicity, Vibhuti Khand, Gomti Nagar",
            "addressLocality": "Lucknow",
            "addressRegion": "Uttar Pradesh",
            "addressCountry": "IN"
          },
          "telephone": "+91-7460088838",
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
            "opens": "10:00",
            "closes": "18:00"
          }
        }}
      />
      <Contact />
    </>
  );
}

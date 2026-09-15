import React from 'react';
import Contact from './Contact';
import SEO from '../components/SEO';

import { useLanguage } from '../context/LanguageContext';

export default function ContactPage() {
  const { language } = useLanguage();
  return (
    <>
      <SEO
        title="Contact & Appointments | Dr. Saumika Singh, Lucknow"
        description="Book a consultation with Dr. Saumika Singh at Alyantra Medicity, Gomti Nagar, Lucknow. Open Mon–Sat 10 AM–6 PM. Call +91 74600 88838 for appointments."
        path={language === 'hi' ? '/hi/contact' : '/contact'}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          "@id": "https://drsaumika.in/#clinic",
          "name": "Dr. Saumika Singh — Oculoplasty, Orbit & Ocular Oncology Clinic",
          "image": "https://drsaumika.in/dr-saumika.jpg",
          "url": "https://drsaumika.in/",
          "telephone": "+91-7460088838",
          "email": "contact@drsaumika.in",
          "medicalSpecialty": "https://schema.org/Surgical",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Alyantra Medicity Superspeciality Hospital, Plot No. TC-49, V-XIII, Vibhuti Khand, Gomti Nagar",
            "addressLocality": "Lucknow",
            "addressRegion": "Uttar Pradesh",
            "postalCode": "226010",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 26.863123,
            "longitude": 80.997682
          },
          "hasMap": "https://share.google/Giu91wM7buG8pRTa2",
          "sameAs": [
            "https://share.google/Giu91wM7buG8pRTa2"
          ],
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

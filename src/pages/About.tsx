import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

const SITE_URL = 'https://drsaumika.in';
const CONTACT_EMAIL = 'contact@drsaumika.in';
const CONTACT_PHONE_DISPLAY = '+91 74600 88838';
const CONTACT_PHONE_TEL = '+917460088838';

type L10n = { en: string; hi: string };

const CANONICAL_ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: 'Alyantra Medicity Superspeciality Hospital, Plot No. TC-49, V-XIII, Vibhuti Khand, Gomti Nagar',
  addressLocality: 'Lucknow',
  addressRegion: 'Uttar Pradesh',
  postalCode: '226010',
  addressCountry: 'IN',
};

const STR = {
  metaTitle: { en: 'About Dr. Saumika Singh', hi: 'डॉ. सौमिका सिंह के बारे में' },
  metaDescription: {
    en: 'Fellowship-trained oculoplasty, orbit & ocular oncology surgeon in Lucknow. MBBS, MS (Ophthalmology), FICO (UK), with fellowship training at Dr. Shroff\'s Charity Eye Hospital, New Delhi. Qualifications, experience and areas of expertise.',
    hi: 'लखनऊ में फेलोशिप-प्रशिक्षित ओकुलोप्लास्टी, ऑर्बिट एवं ओकुलर ऑन्कोलॉजी सर्जन। एमबीबीएस, एमएस (नेत्र विज्ञान), एफआईसीओ (यूके), डॉ. श्रॉफ चैरिटी आई हॉस्पिटल, नई दिल्ली में फेलोशिप प्रशिक्षण के साथ। योग्यताएँ, अनुभव एवं विशेषज्ञता के क्षेत्र।',
  },
  home: { en: 'Home', hi: 'होम' },
  heading: { en: 'About Dr. Saumika Singh', hi: 'डॉ. सौमिका सिंह के बारे में' },
  roleLine: {
    en: 'Consultant — Oculoplasty, Orbit & Ocular Oncology · MBBS, MS (Ophthalmology), FICO (UK)',
    hi: 'सलाहकार — ओकुलोप्लास्टी, ऑर्बिट एवं ओकुलर ऑन्कोलॉजी · एमबीबीएस, एमएस (नेत्र विज्ञान), एफआईसीओ (यूके)',
  },
  intro1: {
    en: 'Dr. Saumika Singh is a fellowship-trained Oculoplasty, Orbit and Ocular Oncology surgeon dedicated to the management of eyelid, lacrimal, orbital disorders and eye cancers. She completed her MBBS from Calcutta National Medical College, Kolkata, followed by an MS in Ophthalmology from the Regional Institute of Ophthalmology, Kolkata. She subsequently underwent advanced fellowship training in Oculoplasty, Orbit and Ocular Oncology at the prestigious Dr. Shroff\'s Charity Eye Hospital, New Delhi.',
    hi: 'डॉ. सौमिका सिंह एक फेलोशिप-प्रशिक्षित ओकुलोप्लास्टी, ऑर्बिट और ओकुलर ऑन्कोलॉजी सर्जन हैं जो पलकों, लैक्रिमल, ऑर्बिटल विकारों और आंखों के कैंसर के प्रबंधन के लिए समर्पित हैं। उन्होंने कलकत्ता नेशनल मेडिकल कॉलेज, कोलकाता से एमबीबीएस पूरा किया, इसके बाद क्षेत्रीय नेत्र विज्ञान संस्थान, कोलकाता से नेत्र विज्ञान में एमएस किया। इसके बाद उन्होंने प्रतिष्ठित डॉ. श्रॉफ चैरिटी आई हॉस्पिटल, नई दिल्ली में ओकुलोप्लास्टी, ऑर्बिट और ओकुलर ऑन्कोलॉजी में उन्नत फेलोशिप प्रशिक्षण प्राप्त किया।',
  },
  intro2: {
    en: 'She has trained and practised in tertiary ophthalmic centres and consultant-led subspecialty services, and currently leads a dedicated Oculoplasty, Orbit and Ocular Oncology practice in Lucknow at Alyantra Medicity Superspeciality Hospital.',
    hi: 'उन्होंने तृतीयक नेत्र-चिकित्सा केंद्रों एवं सलाहकार-आधारित उप-विशेषज्ञता सेवाओं में प्रशिक्षण एवं अभ्यास किया है, और वर्तमान में लखनऊ के अलयंत्रा मेडिसिटी सुपरस्पेशलिटी हॉस्पिटल में एक समर्पित ओकुलोप्लास्टी, ऑर्बिट एवं ओकुलर ऑन्कोलॉजी अभ्यास का नेतृत्व करती हैं।',
  },
  qualsHeading: { en: 'Qualifications & registration', hi: 'योग्यताएँ एवं पंजीकरण' },
  expHeading: { en: 'Professional experience', hi: 'व्यावसायिक अनुभव' },
  focusHeading: { en: 'Surgical experience & areas of focus', hi: 'सर्जिकल अनुभव एवं विशेषज्ञता के क्षेत्र' },
  researchHeading: { en: 'Research, teaching & presentations', hi: 'शोध, शिक्षण एवं प्रस्तुतियाँ' },
  researchBody: {
    en: 'Dr. Singh has published peer-reviewed research and case reports in national and international ophthalmology journals, contributed a chapter to a postgraduate paediatrics textbook, and presented at conferences including OPAI, APAO–AIOS and ISOO.',
    hi: 'डॉ. सिंह ने राष्ट्रीय एवं अंतर्राष्ट्रीय नेत्र-विज्ञान पत्रिकाओं में सहकर्मी-समीक्षित शोध एवं केस रिपोर्ट प्रकाशित की हैं, एक स्नातकोत्तर बाल-चिकित्सा पाठ्यपुस्तक में अध्याय का योगदान दिया है, और OPAI, APAO–AIOS एवं ISOO सहित सम्मेलनों में प्रस्तुतियाँ दी हैं।',
  },
  researchLink: { en: 'See selected publications', hi: 'चयनित प्रकाशन देखें' },
  practiceHeading: { en: 'Where to find Dr. Singh', hi: 'डॉ. सिंह से कहाँ मिलें' },
  addressLabel: { en: 'Clinic', hi: 'क्लिनिक' },
  addressValue: {
    en: 'Alyantra Medicity Superspeciality Hospital, Plot No. TC-49, V-XIII, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010',
    hi: 'अलयंत्रा मेडिसिटी सुपरस्पेशलिटी हॉस्पिटल, प्लॉट नंबर TC-49, V-XIII, विभूति खंड, गोमती नगर, लखनऊ, उत्तर प्रदेश 226010',
  },
  hoursLabel: { en: 'Consultation hours', hi: 'परामर्श समय' },
  hoursValue: {
    en: 'Monday – Saturday, 10:00 AM – 6:00 PM (by prior appointment)',
    hi: 'सोमवार – शनिवार, प्रातः 10:00 – सायं 6:00 (पूर्व अपॉइंटमेंट द्वारा)',
  },
  phoneLabel: { en: 'Phone', hi: 'फ़ोन' },
  emailLabel: { en: 'Email', hi: 'ईमेल' },
  bookCta: { en: 'Book a consultation', hi: 'परामर्श बुक करें' },
};

const qualifications: L10n[] = [
  { en: 'MBBS — Calcutta National Medical College, Kolkata (West Bengal University of Health Sciences), 2014', hi: 'एमबीबीएस — कलकत्ता नेशनल मेडिकल कॉलेज, कोलकाता (पश्चिम बंगाल स्वास्थ्य विज्ञान विश्वविद्यालय), 2014' },
  { en: 'MS, Ophthalmology — Regional Institute of Ophthalmology (RIO), Kolkata (West Bengal University of Health Sciences), 2020', hi: 'एमएस, नेत्र विज्ञान — क्षेत्रीय नेत्र विज्ञान संस्थान (RIO), कोलकाता (पश्चिम बंगाल स्वास्थ्य विज्ञान विश्वविद्यालय), 2020' },
  { en: 'FICO — International Council of Ophthalmology, UK, 2019', hi: 'एफआईसीओ — इंटरनेशनल काउंसिल ऑफ ऑप्थैल्मोलॉजी, यूके, 2019' },
  { en: 'Long-term Fellowship in Oculoplasty & Ocular Oncology — Dr. Shroff\'s Charity Eye Hospital (SCEH), New Delhi, 2022', hi: 'ओकुलोप्लास्टी एवं ओकुलर ऑन्कोलॉजी में दीर्घकालिक फेलोशिप — डॉ. श्रॉफ चैरिटी आई हॉस्पिटल (SCEH), नई दिल्ली, 2022' },
  { en: 'Registered with the Uttar Pradesh Medical Council — Reg. No. 137106', hi: 'उत्तर प्रदेश मेडिकल काउंसिल में पंजीकृत — पंजीकरण संख्या 137106' },
];

const experience: { org: L10n; period: L10n; detail: L10n }[] = [
  {
    org: { en: 'Consultant — Chandra Superspecialty Eye Hospital, Lucknow', hi: 'सलाहकार — चंद्रा सुपरस्पेशलिटी आई हॉस्पिटल, लखनऊ' },
    period: { en: 'Feb 2025 – May 2026', hi: 'फ़र॰ 2025 – मई 2026' },
    detail: {
      en: 'Dedicated subspecialty services in oculoplasty, orbit, socket and ocular oncology — managing eyelid, adnexal, lacrimal and ocular-surface disorders, and performing reconstructive, lacrimal and periocular oncologic procedures alongside functional and aesthetic treatments including botulinum toxin.',
      hi: 'ओकुलोप्लास्टी, ऑर्बिट, सॉकेट एवं ओकुलर ऑन्कोलॉजी में समर्पित उप-विशेषज्ञता सेवाएँ — पलक, एडनेक्सल, लैक्रिमल एवं ओकुलर-सतह विकारों का प्रबंधन, तथा पुनर्निर्माण, लैक्रिमल एवं पेरिओकुलर ऑन्कोलॉजिक प्रक्रियाओं के साथ बोटुलिनम टॉक्सिन सहित कार्यात्मक एवं सौंदर्य उपचार।',
    },
  },
  {
    org: { en: 'Consultant — Sadhuram Eye Hospital, Hyderabad', hi: 'सलाहकार — साधुराम आई हॉस्पिटल, हैदराबाद' },
    period: { en: 'Mar 2023 – Dec 2024', hi: 'मार्च 2023 – दिस॰ 2024' },
    detail: {
      en: 'Managed the full range of oculoplasty and ocular-oncology cases (lacrimal, eyelid, socket, orbit) and attended ocular trauma and emergencies, alongside a high surgical volume of cataract surgery (150+ phacoemulsification and 250+ SICS).',
      hi: 'ओकुलोप्लास्टी एवं ओकुलर-ऑन्कोलॉजी के सम्पूर्ण मामलों (लैक्रिमल, पलक, सॉकेट, ऑर्बिट) का प्रबंधन किया और नेत्र आघात एवं आपात स्थितियों में सेवा दी, साथ ही उच्च शल्य-मात्रा में मोतियाबिंद सर्जरी (150+ फेको एवं 250+ SICS)।',
    },
  },
  {
    org: { en: 'Senior Resident, Ophthalmology — Jalpaiguri District Hospital, West Bengal', hi: 'वरिष्ठ रेजिडेंट, नेत्र विज्ञान — जलपाईगुड़ी जिला अस्पताल, पश्चिम बंगाल' },
    period: { en: 'Aug 2020 – Oct 2020', hi: 'अग॰ 2020 – अक्तू॰ 2020' },
    detail: {
      en: 'Ran ophthalmology out-patient clinics and cataract surgery, attended emergencies including eyelid repair, and cared for patients during the COVID-19 period.',
      hi: 'नेत्र-विज्ञान बाह्य-रोगी क्लिनिक एवं मोतियाबिंद सर्जरी संचालित की, पलक-मरम्मत सहित आपात स्थितियों में सेवा दी, और कोविड-19 अवधि के दौरान रोगियों की देखभाल की।',
    },
  },
];

const focusAreas: { title: L10n; detail: L10n }[] = [
  { title: { en: 'Eyelid & ptosis surgery', hi: 'पलक एवं टॉसिस (झुकी पलक) सर्जरी' }, detail: { en: 'Ptosis correction (sling, levator resection), entropion and ectropion correction, and eyelid-tear repair.', hi: 'टॉसिस सुधार (स्लिंग, लीवेटर रिसेक्शन), एंट्रोपियन एवं एक्ट्रोपियन सुधार, तथा पलक-चीर मरम्मत।' } },
  { title: { en: 'Lacrimal (tear-drainage) surgery', hi: 'लैक्रिमल (आँसू-निकासी) सर्जरी' }, detail: { en: 'DCR (with and without intubation), DCT and canalicular repair for watering eyes and blocked tear ducts.', hi: 'पानी बहने एवं अवरुद्ध आँसू-नलिकाओं के लिए DCR (इंट्यूबेशन सहित/रहित), DCT एवं कैनालिक्युलर मरम्मत।' } },
  { title: { en: 'Orbital surgery', hi: 'ऑर्बिटल सर्जरी' }, detail: { en: 'Orbitotomies, orbital-fracture repair and orbital tumour surgery, plus management of proptosis and thyroid eye disease.', hi: 'ऑर्बिटोटॉमी, ऑर्बिटल-फ्रैक्चर मरम्मत एवं ऑर्बिटल ट्यूमर सर्जरी, साथ ही प्रॉप्टोसिस एवं थायरॉइड नेत्र रोग का प्रबंधन।' } },
  { title: { en: 'Socket & ocular oncology', hi: 'सॉकेट एवं ओकुलर ऑन्कोलॉजी' }, detail: { en: 'Evisceration and enucleation with implants, socket reconstruction (mucous-membrane and dermis-fat grafting), eyelid-tumour excision and reconstruction, and retinoblastoma care.', hi: 'इम्प्लांट के साथ इविसरेशन एवं एन्युक्लिएशन, सॉकेट पुनर्निर्माण (म्यूकस-मेम्ब्रेन एवं डर्मिस-फैट ग्राफ्टिंग), पलक-ट्यूमर उच्छेदन एवं पुनर्निर्माण, तथा रेटिनोब्लास्टोमा देखभाल।' } },
  { title: { en: 'Aesthetic & functional', hi: 'सौंदर्य एवं कार्यात्मक' }, detail: { en: 'Botulinum toxin (Botox) for blepharospasm and hemifacial spasm, and periocular aesthetic treatments.', hi: 'ब्लेफेरोस्पाज्म एवं हेमीफेशियल स्पाज्म के लिए बोटुलिनम टॉक्सिन (बोटॉक्स), तथा पेरिओकुलर सौंदर्य उपचार।' } },
  { title: { en: 'Comprehensive ophthalmology', hi: 'व्यापक नेत्र विज्ञान' }, detail: { en: 'A strong base in high-volume cataract surgery (SICS and phacoemulsification) and the management of ocular trauma.', hi: 'उच्च-मात्रा मोतियाबिंद सर्जरी (SICS एवं फेको) एवं नेत्र-आघात प्रबंधन में मजबूत आधार।' } },
];

export default function About() {
  const { language } = useLanguage();
  const prefix = language === 'hi' ? '/hi' : '';
  const L = (s: L10n) => (language === 'hi' ? s.hi : s.en);
  const basePath = `${prefix}/about`;

  const knowsAbout = [
    'Oculoplasty', 'Ocular Oncology', 'Orbital Surgery', 'Eyelid Surgery', 'Lacrimal Surgery',
    'Socket Reconstruction', 'Periocular Aesthetics', 'Retinoblastoma', 'Thyroid Eye Disease',
    'Ptosis Surgery', 'Ectropion Correction', 'Entropion Correction', 'Dacryocystorhinostomy', 'Botulinum Toxin Injection',
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfilePage',
        '@id': `${SITE_URL}${basePath}#profilepage`,
        url: `${SITE_URL}${basePath}`,
        name: `${L(STR.metaTitle)} | Dr. Saumika Singh`,
        inLanguage: language === 'hi' ? 'hi-IN' : 'en-IN',
        description: L(STR.metaDescription),
        mainEntity: { '@id': `${SITE_URL}/#physician` },
        breadcrumb: { '@id': `${SITE_URL}${basePath}#breadcrumb` },
      },
      {
        '@type': 'Physician',
        '@id': `${SITE_URL}/#physician`,
        name: 'Dr. Saumika Singh',
        image: `${SITE_URL}/dr-saumika.jpg`,
        url: `${SITE_URL}/`,
        medicalSpecialty: 'https://schema.org/Surgical',
        description: 'Oculoplasty, Orbit & Ocular Oncology Surgeon — MBBS, MS (Ophthalmology), FICO (UK)',
        telephone: '+91-7460088838',
        email: CONTACT_EMAIL,
        sameAs: ['https://share.google/Giu91wM7buG8pRTa2'],
        address: CANONICAL_ADDRESS,
        knowsAbout: knowsAbout,
        alumniOf: [
          { '@type': 'CollegeOrUniversity', name: 'Calcutta National Medical College, Kolkata' },
          { '@type': 'CollegeOrUniversity', name: 'Regional Institute of Ophthalmology, Kolkata (West Bengal University of Health Sciences)' },
          { '@type': 'MedicalOrganization', name: "Dr. Shroff's Charity Eye Hospital, New Delhi" },
        ],
        hasCredential: [
          {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'degree',
            educationalLevel: 'MBBS',
            name: 'Bachelor of Medicine, Bachelor of Surgery (MBBS)',
            recognizedBy: { '@type': 'CollegeOrUniversity', name: 'Calcutta National Medical College, Kolkata' },
          },
          {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'degree',
            educationalLevel: 'MS (Ophthalmology)',
            name: 'Master of Surgery in Ophthalmology (MS)',
            recognizedBy: { '@type': 'CollegeOrUniversity', name: 'Regional Institute of Ophthalmology, The West Bengal University of Health Sciences, Kolkata' },
          },
          {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'certification',
            name: 'Fellowship of the International Council of Ophthalmology (FICO)',
            recognizedBy: { '@type': 'Organization', name: 'International Council of Ophthalmology, UK' },
          },
          {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'license',
            name: 'Registered Medical Practitioner',
            identifier: '137106',
            recognizedBy: { '@type': 'GovernmentOrganization', name: 'Uttar Pradesh Medical Council' },
          },
        ],
        workLocation: {
          '@type': 'MedicalClinic',
          name: 'Alyantra Medicity Superspeciality Hospital',
          address: CANONICAL_ADDRESS,
          geo: { '@type': 'GeoCoordinates', latitude: 26.863123, longitude: 80.997682 },
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${SITE_URL}${basePath}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: L(STR.home), item: `${SITE_URL}${prefix || '/'}` },
          { '@type': 'ListItem', position: 2, name: L(STR.metaTitle), item: `${SITE_URL}${basePath}` },
        ],
      },
    ],
  };

  return (
    <>
      <SEO
        path={basePath}
        title={`${L(STR.metaTitle)} | Dr. Saumika Singh`}
        description={L(STR.metaDescription)}
        jsonLd={jsonLd}
      />
      <main className="mx-auto max-w-4xl px-4 py-12">
        <nav className="text-sm text-gray-500" aria-label="Breadcrumb">
          <Link to={`${prefix || '/'}`} className="hover:underline">
            {L(STR.home)}
          </Link>
          <span className="mx-2">›</span>
          <span className="text-gray-700">{L(STR.metaTitle)}</span>
        </nav>

        <header className="mt-4 flex flex-col gap-6 sm:flex-row sm:items-center">
          <div className="flex-shrink-0">
            <picture>
              <source srcSet="/dr-saumika.webp" type="image/webp" />
              <img
                src="/dr-saumika.jpg"
                alt="Dr. Saumika Singh, oculoplasty and ocular oncology surgeon"
                width="1194"
                height="1317"
                className="h-32 w-28 rounded-xl border border-[#C5A059]/40 object-cover shadow-sm sm:h-40 sm:w-32"
              />
            </picture>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#002147] md:text-4xl">{L(STR.heading)}</h1>
            <p className="mt-2 text-sm font-semibold text-[#C5A059]">{L(STR.roleLine)}</p>
          </div>
        </header>

        <div className="mt-8 space-y-4 leading-relaxed text-gray-700">
          <p>{L(STR.intro1)}</p>
          <p>{L(STR.intro2)}</p>
        </div>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-[#002147]">{L(STR.qualsHeading)}</h2>
          <ul className="mt-3 list-disc space-y-1 pl-6 text-gray-700">
            {qualifications.map((q, i) => (
              <li key={i}>{L(q)}</li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-[#002147]">{L(STR.expHeading)}</h2>
          <div className="mt-4 space-y-5">
            {experience.map((e, i) => (
              <div key={i} className="border-l-2 border-[#C5A059]/40 pl-4">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-semibold text-[#002147]">{L(e.org)}</h3>
                  <span className="whitespace-nowrap text-xs text-gray-500">{L(e.period)}</span>
                </div>
                <p className="mt-1 text-sm text-gray-700">{L(e.detail)}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-[#002147]">{L(STR.focusHeading)}</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {focusAreas.map((f, i) => (
              <div key={i} className="rounded-xl border border-[#C5A059]/20 bg-[#C5A059]/5 p-4">
                <h3 className="font-semibold text-[#002147]">{L(f.title)}</h3>
                <p className="mt-1 text-sm text-gray-700">{L(f.detail)}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-[#002147]">{L(STR.researchHeading)}</h2>
          <p className="mt-2 text-gray-700">{L(STR.researchBody)}</p>
          <Link to={`${prefix}/publications`} className="mt-2 inline-block text-[#C5A059] hover:underline">
            {L(STR.researchLink)} →
          </Link>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-[#002147]">{L(STR.practiceHeading)}</h2>
          <div className="mt-3 rounded-xl border border-[#002147]/10 p-5 text-gray-700">
            <p>
              <span className="font-semibold text-[#002147]">{L(STR.addressLabel)}: </span>
              {L(STR.addressValue)}
            </p>
            <p className="mt-2">
              <span className="font-semibold text-[#002147]">{L(STR.hoursLabel)}: </span>
              {L(STR.hoursValue)}
            </p>
            <p className="mt-2">
              <span className="font-semibold text-[#002147]">{L(STR.phoneLabel)}: </span>
              <a href={`tel:${CONTACT_PHONE_TEL}`} className="text-[#C5A059] hover:underline">
                {CONTACT_PHONE_DISPLAY}
              </a>
            </p>
            <p className="mt-2">
              <span className="font-semibold text-[#002147]">{L(STR.emailLabel)}: </span>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#C5A059] hover:underline">
                {CONTACT_EMAIL}
              </a>
            </p>
            <Link
              to={`${prefix}/contact`}
              className="mt-4 inline-block rounded-lg bg-[#002147] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#013163]"
            >
              {L(STR.bookCta)}
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

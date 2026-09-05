import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';
import { surgicalCases } from '../data/surgicalOutcomes';
import SurgicalCaseCard from '../components/SurgicalCaseCard';

const STR = {
  title: { en: 'Surgical Outcomes', hi: 'सर्जरी के परिणाम' },
  intro: {
    en: 'A selection of oculoplasty, orbit and ocular oncology cases managed by Dr Saumika Singh — shared with patient consent to illustrate real surgical journeys and outcomes.',
    hi: 'डॉ. सौमिका सिंह द्वारा प्रबंधित ऑकुलोप्लास्टी, ऑर्बिट एवं ऑक्युलर ऑन्कोलॉजी के कुछ चयनित मामले — वास्तविक शल्य-यात्रा और परिणामों को दर्शाने हेतु, रोगी की सहमति से साझा किए गए।',
  },
  consent: { en: 'Shared with patient consent.', hi: 'रोगी की सहमति से साझा किया गया।' },
};

export default function SurgicalOutcomes() {
  const { language } = useLanguage();
  const prefix = language === 'hi' ? '/hi' : '';
  const L = (s: { en: string; hi: string }) => (language === 'hi' ? s.hi : s.en);

  return (
    <>
      <SEO path={`${prefix}/surgical-outcomes`} title={`${L(STR.title)} | Dr Saumika Singh`} description={L(STR.intro)} />
      <main className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#002147]">{L(STR.title)}</h1>
        <p className="mt-3 max-w-3xl text-gray-700">{L(STR.intro)}</p>
        <p className="mt-1 text-sm italic text-gray-500">{L(STR.consent)}</p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {surgicalCases.map((c) => (
            <SurgicalCaseCard key={c.slug} c={c} />
          ))}
        </div>
      </main>
    </>
  );
}

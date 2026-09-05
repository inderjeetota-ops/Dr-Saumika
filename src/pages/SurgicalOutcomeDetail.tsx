import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';
import { getCaseBySlug } from '../data/surgicalOutcomes';

const SITE_URL = 'https://drsaumika.in';

export default function SurgicalOutcomeDetail() {
  const { slug } = useParams();
  const { language } = useLanguage();
  const prefix = language === 'hi' ? '/hi' : '';
  const L = (s?: { en: string; hi: string }) => (s ? (language === 'hi' ? s.hi : s.en) : '');
  const c = getCaseBySlug(slug);
  if (!c) return <Navigate to={`${prefix}/surgical-outcomes`} replace />;

  const basePath = `${prefix}/surgical-outcomes/${c.slug}`;
  const imgUrl = (file: string) => `/surgical-outcomes/${c.slug}/${file}`;
  const cols = c.stages.length >= 4 ? 'lg:grid-cols-4' : c.stages.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2';
  const T = {
    home: language === 'hi' ? 'होम' : 'Home',
    section: language === 'hi' ? 'सर्जरी के परिणाम' : 'Surgical Outcomes',
    related: language === 'hi' ? 'संबंधित सेवा' : 'Related service',
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    '@id': `${SITE_URL}${basePath}`,
    url: `${SITE_URL}${basePath}`,
    name: L(c.title),
    inLanguage: language === 'hi' ? 'hi-IN' : 'en-IN',
    description: L(c.metaDescription),
    about: [
      { '@type': 'MedicalCondition', name: L(c.title) },
      { '@type': 'MedicalProcedure', name: L(c.technique) },
    ],
    image: c.stages.map((s) => ({ '@type': 'ImageObject', contentUrl: `${SITE_URL}${imgUrl(s.image)}`, caption: L(s.caption) })),
    isPartOf: { '@type': 'CollectionPage', '@id': `${SITE_URL}${prefix}/surgical-outcomes` },
    author: { '@type': 'Physician', name: 'Dr Saumika Singh', url: SITE_URL },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: T.home, item: `${SITE_URL}${prefix || '/'}` },
        { '@type': 'ListItem', position: 2, name: T.section, item: `${SITE_URL}${prefix}/surgical-outcomes` },
        { '@type': 'ListItem', position: 3, name: L(c.title), item: `${SITE_URL}${basePath}` },
      ],
    },
  };

  return (
    <>
      <SEO path={basePath} title={`${L(c.title)} | Dr Saumika Singh`} description={L(c.metaDescription)}
        image={imgUrl(c.collageImage)} jsonLd={jsonLd} />

      <main className="mx-auto max-w-5xl px-4 py-10">
        <nav className="text-sm text-gray-500" aria-label="Breadcrumb">
          <Link to={`${prefix || '/'}`} className="hover:underline">{T.home}</Link>
          <span className="mx-2">›</span>
          <Link to={`${prefix}/surgical-outcomes`} className="hover:underline">{T.section}</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-700">{L(c.title)}</span>
        </nav>

        <h1 className="mt-4 text-2xl md:text-3xl font-bold text-[#002147]">{L(c.title)}</h1>
        <p className="mt-2 pb-4 font-medium italic text-[#C5A059] border-b border-[#C5A059]/40">{L(c.technique)}</p>

        <div className="mt-6 space-y-4 leading-relaxed text-gray-800">
          {L(c.narrative).split('\n\n').map((para, i) => <p key={i}>{para}</p>)}
        </div>

        <div className={`mt-10 grid grid-cols-1 sm:grid-cols-2 ${cols} gap-6`}>
          {c.stages.map((s, i) => (
            <figure key={i} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
              <figcaption className="bg-[#002147] px-3 py-2 text-center text-xs font-semibold uppercase tracking-wide text-white">
                {i + 1}. {L(s.label)}
              </figcaption>
              <img src={imgUrl(s.image)} width={s.width} height={s.height} alt={L(s.alt)} loading="lazy" className="h-auto w-full" />
              <div className="bg-[#eef1f8] px-3 py-3 text-sm text-gray-700">{L(s.caption)}</div>
            </figure>
          ))}
        </div>

        {c.takeaway && (
          <blockquote className="mt-10 border-l-4 border-[#002147] bg-[#f7f8fc] px-5 py-4 italic text-[#002147]">
            {L(c.takeaway)}
          </blockquote>
        )}

        <div className="mt-10">
          <Link to={`${prefix}/services/${c.relatedService}`} className="inline-flex items-center gap-2 font-medium text-[#002147] hover:text-[#C5A059]">
            {T.related}: {L(c.relatedServiceName)} →
          </Link>
        </div>
      </main>
    </>
  );
}

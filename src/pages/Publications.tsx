import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';
import { publications, isDoctorAuthor, type Publication } from '../data/publications';

const SITE_URL = 'https://drsaumika.in';

const STR = {
  metaTitle: { en: 'Medical Publications', hi: 'चिकित्सा प्रकाशन' },
  heading: { en: 'Medical Publications', hi: 'चिकित्सा प्रकाशन' },
  intro: {
    en: 'Peer-reviewed research and case reports authored by Dr Saumika Singh in national ophthalmology journals — spanning oculoplasty, orbit and ocular oncology.',
    hi: 'राष्ट्रीय नेत्र-विज्ञान पत्रिकाओं में डॉ. सौमिका सिंह द्वारा लिखित सहकर्मी-समीक्षित शोध एवं केस रिपोर्ट — ऑकुलोप्लास्टी, ऑर्बिट एवं ऑक्युलर ऑन्कोलॉजी विषयों पर।',
  },
  description: {
    en: 'Peer-reviewed publications and case reports by Dr Saumika Singh, oculoplasty and ocular oncology surgeon in Lucknow, in the Indian Journal of Ophthalmology and other journals.',
    hi: 'लखनऊ की ऑकुलोप्लास्टी एवं ऑक्युलर ऑन्कोलॉजी सर्जन डॉ. सौमिका सिंह द्वारा इंडियन जर्नल ऑफ ऑप्थैल्मोलॉजी एवं अन्य पत्रिकाओं में प्रकाशित सहकर्मी-समीक्षित शोध एवं केस रिपोर्ट।',
  },
  note: {
    en: 'Citations follow the standard (Vancouver) format. Links open the journal or PubMed record in a new tab.',
    hi: 'उद्धरण मानक (वैंकूवर) प्रारूप में दिए गए हैं। लिंक नई विंडो में संबंधित पत्रिका या PubMed रिकॉर्ड खोलते हैं।',
  },
  home: { en: 'Home', hi: 'होम' },
};

const pill =
  'inline-flex items-center rounded-full border border-[#C5A059]/50 bg-[#C5A059]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#8a6a28] transition-colors hover:bg-[#C5A059]/20';

function formatRef(p: Publication): string {
  let s = `${p.journalAbbrev}. ${p.year}`;
  if (p.volume) s += `;${p.volume}`;
  if (p.issue) s += `(${p.issue})`;
  if (p.pages) s += `:${p.pages}`;
  return `${s}.`;
}

export default function Publications() {
  const { language } = useLanguage();
  const prefix = language === 'hi' ? '/hi' : '';
  const L = (s: { en: string; hi: string }) => (language === 'hi' ? s.hi : s.en);
  const basePath = `${prefix}/publications`;

  const articles = publications.map((p) => {
    const identifier = [
      p.doi && { '@type': 'PropertyValue', propertyID: 'DOI', value: p.doi },
      p.pmid && { '@type': 'PropertyValue', propertyID: 'PMID', value: p.pmid },
      p.pmcid && { '@type': 'PropertyValue', propertyID: 'PMCID', value: p.pmcid },
    ].filter(Boolean);
    return {
      '@type': 'MedicalScholarlyArticle',
      headline: p.title,
      name: p.title,
      inLanguage: 'en',
      author: p.authors.map((a) =>
        isDoctorAuthor(a)
          ? { '@type': 'Person', name: 'Dr Saumika Singh', url: SITE_URL }
          : { '@type': 'Person', name: a }
      ),
      datePublished: String(p.year),
      isPartOf: {
        '@type': 'PublicationIssue',
        issueNumber: p.issue,
        isPartOf: {
          '@type': 'PublicationVolume',
          volumeNumber: p.volume,
          isPartOf: { '@type': 'Periodical', name: p.journal },
        },
      },
      pagination: p.pages,
      identifier,
      sameAs: p.url,
      url: p.url,
    };
  });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${SITE_URL}${basePath}`,
    url: `${SITE_URL}${basePath}`,
    name: `${L(STR.heading)} | Dr Saumika Singh`,
    inLanguage: language === 'hi' ? 'hi-IN' : 'en-IN',
    description: L(STR.description),
    keywords:
      'oculoplasty, ocular oncology, orbital surgery, ophthalmology research, Dr Saumika Singh, Lucknow',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: L(STR.home), item: `${SITE_URL}${prefix || '/'}` },
        { '@type': 'ListItem', position: 2, name: L(STR.metaTitle), item: `${SITE_URL}${basePath}` },
      ],
    },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: articles.length,
      itemListElement: articles.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item,
      })),
    },
  };

  return (
    <>
      <SEO
        path={basePath}
        title={`${L(STR.metaTitle)} | Dr Saumika Singh`}
        description={L(STR.description)}
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

        <h1 className="mt-4 text-3xl font-bold text-[#002147] md:text-4xl">{L(STR.heading)}</h1>
        <p className="mt-3 max-w-3xl text-gray-700">{L(STR.intro)}</p>
        <p className="mt-1 text-sm italic text-gray-500">{L(STR.note)}</p>

        <ol className="mt-10 space-y-6">
          {publications.map((p) => (
            <li
              key={p.slug}
              id={p.slug}
              className="scroll-mt-24 rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <span className="inline-flex h-fit shrink-0 items-center rounded-full bg-[#002147] px-3 py-1 text-sm font-bold text-white">
                  {p.year}
                </span>
                <div className="min-w-0">
                  <h2 className="text-lg font-semibold leading-snug text-[#002147]">
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#C5A059] hover:underline"
                    >
                      {p.title}
                    </a>
                  </h2>
                  <p className="mt-2 text-sm text-gray-700">
                    {p.authors.map((a, i) => (
                      <React.Fragment key={a}>
                        {i > 0 && ', '}
                        {isDoctorAuthor(a) ? (
                          <strong className="font-semibold text-[#002147]">{a}</strong>
                        ) : (
                          a
                        )}
                      </React.Fragment>
                    ))}
                  </p>
                  <p className="mt-1 text-sm italic text-gray-600">{formatRef(p)}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.doi && (
                      <a
                        className={pill}
                        href={`https://doi.org/${p.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        DOI
                      </a>
                    )}
                    {p.pmid && (
                      <a
                        className={pill}
                        href={`https://pubmed.ncbi.nlm.nih.gov/${p.pmid}/`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        PubMed
                      </a>
                    )}
                    {p.pmcid && (
                      <a
                        className={pill}
                        href={`https://www.ncbi.nlm.nih.gov/pmc/articles/${p.pmcid}/`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        PMC Full Text
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </main>
    </>
  );
}

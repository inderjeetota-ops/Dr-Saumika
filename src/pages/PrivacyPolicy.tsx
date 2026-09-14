import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

const SITE_URL = 'https://drsaumika.in';
const CONTACT_EMAIL = 'contact@drsaumika.in';
const CONTACT_PHONE = '+91 7460088838';
const LAST_UPDATED = '2026-09-14';

type L10n = { en: string; hi: string };

const STR = {
  metaTitle: { en: 'Privacy Policy', hi: 'गोपनीयता नीति' },
  heading: { en: 'Privacy Policy', hi: 'गोपनीयता नीति' },
  home: { en: 'Home', hi: 'होम' },
  updatedLabel: { en: 'Last updated', hi: 'अंतिम अद्यतन' },
  intro: {
    en: 'This Privacy Policy explains how the website of Dr Saumika Singh (drsaumika.in) collects, uses, and protects the personal information of people who visit the site or contact the practice through it. By using this website you agree to the practices described below.',
    hi: 'यह गोपनीयता नीति बताती है कि डॉ. सौमिका सिंह की वेबसाइट (drsaumika.in) उन लोगों की व्यक्तिगत जानकारी को कैसे एकत्र, उपयोग और सुरक्षित करती है जो साइट पर आते हैं या इसके माध्यम से क्लिनिक से संपर्क करते हैं। इस वेबसाइट का उपयोग करके आप नीचे वर्णित प्रथाओं से सहमत होते हैं।',
  },
  description: {
    en: 'How Dr Saumika Singh’s practice website collects, uses, and protects your personal information, including contact-form data and website analytics.',
    hi: 'डॉ. सौमिका सिंह की वेबसाइट आपकी व्यक्तिगत जानकारी — जिसमें संपर्क-फ़ॉर्म डेटा और वेबसाइट एनालिटिक्स शामिल हैं — को कैसे एकत्र, उपयोग और सुरक्षित करती है।',
  },
  contactHeading: { en: 'Contact us about privacy', hi: 'गोपनीयता के बारे में हमसे संपर्क करें' },
  contactBody: {
    en: 'If you have any questions about this policy, or wish to access, correct, or delete your personal data, please contact us:',
    hi: 'यदि इस नीति के बारे में आपका कोई प्रश्न है, या आप अपने व्यक्तिगत डेटा तक पहुँच, सुधार या उसे हटवाना चाहते हैं, तो कृपया हमसे संपर्क करें:',
  },
};

const sections: { h: L10n; p?: L10n[]; list?: L10n[] }[] = [
  {
    h: { en: 'Information we collect', hi: 'हम कौन-सी जानकारी एकत्र करते हैं' },
    p: [
      {
        en: 'Information you give us: when you use the contact form or reach out to us, we collect the name, phone number, and any message or details you choose to provide, so that we can respond to your enquiry.',
        hi: 'जो जानकारी आप हमें देते हैं: जब आप संपर्क फ़ॉर्म का उपयोग करते हैं या हमसे संपर्क करते हैं, तो हम आपका नाम, फ़ोन नंबर और आपके द्वारा दिया गया कोई भी संदेश या विवरण एकत्र करते हैं, ताकि हम आपकी पूछताछ का उत्तर दे सकें।',
      },
      {
        en: 'Information collected automatically: like most websites, we collect standard usage data such as the pages you visit, your approximate location, and the type of device and browser you use. This is gathered through analytics cookies (see “Cookies and analytics” below).',
        hi: 'स्वतः एकत्र की गई जानकारी: अधिकांश वेबसाइटों की तरह, हम सामान्य उपयोग डेटा एकत्र करते हैं जैसे कि आपके द्वारा देखे गए पृष्ठ, आपका अनुमानित स्थान, और आपके उपकरण एवं ब्राउज़र का प्रकार। यह एनालिटिक्स कुकीज़ के माध्यम से एकत्र किया जाता है (नीचे “कुकीज़ और एनालिटिक्स” देखें)।',
      },
    ],
  },
  {
    h: { en: 'How we use your information', hi: 'हम आपकी जानकारी का उपयोग कैसे करते हैं' },
    list: [
      { en: 'To respond to your enquiries and appointment requests.', hi: 'आपकी पूछताछ एवं अपॉइंटमेंट अनुरोधों का उत्तर देने के लिए।' },
      { en: 'To communicate with you about the query you have raised.', hi: 'आपके द्वारा उठाए गए प्रश्न के बारे में आपसे संवाद करने के लिए।' },
      { en: 'To understand how the website is used, so we can improve it.', hi: 'यह समझने के लिए कि वेबसाइट का उपयोग कैसे होता है, ताकि हम इसे बेहतर बना सकें।' },
    ],
    p: [
      { en: 'We do not sell, rent, or trade your personal information.', hi: 'हम आपकी व्यक्तिगत जानकारी को न बेचते हैं, न किराए पर देते हैं और न ही उसका व्यापार करते हैं।' },
    ],
  },
  {
    h: { en: 'Cookies and analytics', hi: 'कुकीज़ और एनालिटिक्स' },
    p: [
      {
        en: 'This website uses Google Analytics to measure how visitors use the site. Google Analytics sets cookies that collect information such as pages viewed and approximate location; this data is aggregated and used only to improve the website. You can block or delete cookies through your browser settings at any time.',
        hi: 'यह वेबसाइट यह मापने के लिए Google Analytics का उपयोग करती है कि आगंतुक साइट का उपयोग कैसे करते हैं। Google Analytics कुकीज़ सेट करता है जो देखे गए पृष्ठ और अनुमानित स्थान जैसी जानकारी एकत्र करती हैं; यह डेटा समग्र रूप में केवल वेबसाइट को बेहतर बनाने के लिए उपयोग किया जाता है। आप अपनी ब्राउज़र सेटिंग्स से किसी भी समय कुकीज़ को अवरुद्ध या हटा सकते हैं।',
      },
    ],
  },
  {
    h: { en: 'Third-party services', hi: 'तृतीय-पक्ष सेवाएँ' },
    p: [
      { en: 'We rely on a small number of trusted service providers to run this website. Each processes data under its own privacy policy:', hi: 'इस वेबसाइट को चलाने के लिए हम कुछ विश्वसनीय सेवा-प्रदाताओं पर निर्भर हैं। इनमें से प्रत्येक अपनी स्वयं की गोपनीयता नीति के तहत डेटा संसाधित करता है:' },
    ],
    list: [
      { en: 'Web3Forms — delivers the contact-form submissions to us by email.', hi: 'Web3Forms — संपर्क-फ़ॉर्म से भेजी गई जानकारी को ईमेल द्वारा हम तक पहुँचाता है।' },
      { en: 'Google Analytics (Google LLC) — website usage measurement.', hi: 'Google Analytics (Google LLC) — वेबसाइट उपयोग मापन।' },
      { en: 'Vercel — secure hosting of the website.', hi: 'Vercel — वेबसाइट की सुरक्षित होस्टिंग।' },
      { en: 'WhatsApp — only if you choose to contact us through the WhatsApp link.', hi: 'WhatsApp — केवल तभी जब आप WhatsApp लिंक के माध्यम से हमसे संपर्क करना चुनते हैं।' },
    ],
  },
  {
    h: { en: 'How we share information', hi: 'हम जानकारी कैसे साझा करते हैं' },
    p: [
      { en: 'We share personal information only with the service providers listed above, to the extent needed to operate the website and respond to you, or where we are required to do so by law. We never sell your data.', hi: 'हम व्यक्तिगत जानकारी केवल ऊपर सूचीबद्ध सेवा-प्रदाताओं के साथ साझा करते हैं, उतनी ही सीमा तक जितनी वेबसाइट चलाने और आपको उत्तर देने के लिए आवश्यक है, या जहाँ कानून द्वारा ऐसा करना अनिवार्य हो। हम आपका डेटा कभी नहीं बेचते।' },
    ],
  },
  {
    h: { en: 'How long we keep your information', hi: 'हम आपकी जानकारी कब तक रखते हैं' },
    p: [
      { en: 'We keep enquiry details only for as long as needed to respond to you and to maintain our own records of the consultation, after which the information is deleted.', hi: 'हम पूछताछ का विवरण केवल तब तक रखते हैं जब तक आपको उत्तर देने और परामर्श का अपना रिकॉर्ड बनाए रखने के लिए आवश्यक है; इसके बाद जानकारी हटा दी जाती है।' },
    ],
  },
  {
    h: { en: 'Your rights', hi: 'आपके अधिकार' },
    p: [
      { en: 'You may ask us to access, correct, or delete the personal information you have shared with us. To make a request, contact us using the details at the bottom of this page, and we will respond within a reasonable time.', hi: 'आप हमसे अपनी साझा की गई व्यक्तिगत जानकारी तक पहुँच, उसमें सुधार या उसे हटाने का अनुरोध कर सकते हैं। अनुरोध करने के लिए, इस पृष्ठ के नीचे दिए गए विवरण का उपयोग करके हमसे संपर्क करें, और हम उचित समय में उत्तर देंगे।' },
    ],
  },
  {
    h: { en: 'Please do not send medical details through this website', hi: 'कृपया इस वेबसाइट के माध्यम से चिकित्सा विवरण न भेजें' },
    p: [
      { en: 'The contact form is for general enquiries and appointment requests only. Please do not send sensitive medical information, reports, or images through the website. Bring these with you to your consultation, where they can be reviewed securely and confidentially.', hi: 'संपर्क फ़ॉर्म केवल सामान्य पूछताछ एवं अपॉइंटमेंट अनुरोधों के लिए है। कृपया संवेदनशील चिकित्सा जानकारी, रिपोर्ट या छवियाँ वेबसाइट के माध्यम से न भेजें। इन्हें अपने परामर्श के समय साथ लाएँ, जहाँ उनकी सुरक्षित एवं गोपनीय रूप से समीक्षा की जा सकती है।' },
    ],
  },
  {
    h: { en: 'Children’s privacy', hi: 'बच्चों की गोपनीयता' },
    p: [
      { en: 'This website is intended for adults seeking information about eye care. We do not knowingly collect personal information from children without the involvement of a parent or guardian.', hi: 'यह वेबसाइट नेत्र-देखभाल की जानकारी चाहने वाले वयस्कों के लिए है। हम माता-पिता या अभिभावक की भागीदारी के बिना बच्चों से जानबूझकर व्यक्तिगत जानकारी एकत्र नहीं करते।' },
    ],
  },
  {
    h: { en: 'Changes to this policy', hi: 'इस नीति में परिवर्तन' },
    p: [
      { en: 'We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised “Last updated” date above.', hi: 'हम समय-समय पर इस गोपनीयता नीति को अद्यतन कर सकते हैं। कोई भी परिवर्तन ऊपर दी गई संशोधित “अंतिम अद्यतन” तिथि के साथ इस पृष्ठ पर पोस्ट किया जाएगा।' },
    ],
  },
];

export default function PrivacyPolicy() {
  const { language } = useLanguage();
  const prefix = language === 'hi' ? '/hi' : '';
  const L = (s: L10n) => (language === 'hi' ? s.hi : s.en);
  const basePath = `${prefix}/privacy`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_URL}${basePath}`,
    url: `${SITE_URL}${basePath}`,
    name: `${L(STR.metaTitle)} | Dr Saumika Singh`,
    inLanguage: language === 'hi' ? 'hi-IN' : 'en-IN',
    description: L(STR.description),
    dateModified: LAST_UPDATED,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: L(STR.home), item: `${SITE_URL}${prefix || '/'}` },
        { '@type': 'ListItem', position: 2, name: L(STR.metaTitle), item: `${SITE_URL}${basePath}` },
      ],
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
        <p className="mt-2 text-sm text-gray-500">
          {L(STR.updatedLabel)}: {LAST_UPDATED}
        </p>
        <p className="mt-3 max-w-3xl text-gray-700">{L(STR.intro)}</p>

        <div className="mt-10 space-y-8">
          {sections.map((sec) => (
            <section key={sec.h.en}>
              <h2 className="text-xl font-semibold text-[#002147]">{L(sec.h)}</h2>
              {sec.p?.map((para, i) => (
                <p key={i} className="mt-2 text-gray-700">
                  {L(para)}
                </p>
              ))}
              {sec.list && (
                <ul className="mt-2 list-disc space-y-1 pl-6 text-gray-700">
                  {sec.list.map((item, i) => (
                    <li key={i}>{L(item)}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <section>
            <h2 className="text-xl font-semibold text-[#002147]">{L(STR.contactHeading)}</h2>
            <p className="mt-2 text-gray-700">{L(STR.contactBody)}</p>
            <ul className="mt-3 space-y-1 text-gray-700">
              <li>
                <span className="font-semibold text-[#002147]">{language === 'hi' ? 'ईमेल' : 'Email'}: </span>
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#C5A059] hover:underline">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <span className="font-semibold text-[#002147]">{language === 'hi' ? 'फ़ोन' : 'Phone'}: </span>
                <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="text-[#C5A059] hover:underline">
                  {CONTACT_PHONE}
                </a>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}

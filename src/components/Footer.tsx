import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowUp, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Footer() {
  const { t, language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scanText = language === 'en' ? 'Scan to Connect' : 'स्कैन करके संपर्क करें';
  const scanSubtext = language === 'en'
    ? 'Scan to save our contact details and navigate easily.'
    : 'संपर्क जानकारी और स्थान आसानी से सहेजने के लिए स्कैन करें।';

  const disclaimerLabel = language === 'en' ? 'Medical disclaimer: ' : 'चिकित्सा अस्वीकरण: ';
  const disclaimerText = language === 'en'
    ? 'The information on this website is for general educational purposes only and does not constitute medical advice, nor is it a substitute for consultation with a qualified doctor. Treatment and surgical outcomes vary from person to person; any results shown are specific to those individuals and are not a guarantee of similar results. Always consult a qualified physician about your own condition, and in a medical emergency contact your nearest hospital immediately.'
    : 'इस वेबसाइट की जानकारी केवल सामान्य शैक्षिक उद्देश्यों के लिए है। यह चिकित्सा सलाह नहीं है और न ही किसी योग्य चिकित्सक से परामर्श का विकल्प है। उपचार एवं शल्य चिकित्सा के परिणाम हर व्यक्ति में भिन्न होते हैं; दिखाए गए परिणाम संबंधित व्यक्तियों तक सीमित हैं और समान परिणाम की गारंटी नहीं हैं। अपनी स्थिति के बारे में हमेशा किसी योग्य चिकित्सक से परामर्श करें, और चिकित्सा आपात स्थिति में तुरंत अपने निकटतम अस्पताल से संपर्क करें।';

  const privacyPath = language === 'en' ? '/privacy' : '/hi/privacy';
  const aboutPath = language === 'en' ? '/about' : '/hi/about';

  return (
    <footer className="relative bg-gradient-to-b from-navy via-[#001d3d] to-[#000f24] text-ivory pt-20 pb-8 border-t border-gold/30 overflow-hidden">
      {/* Decorative Top Ambient Light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-light/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

          {/* Brand Info */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="h-5 w-5 text-gold animate-pulse" />
                <span className="text-xs font-semibold tracking-widest text-gold uppercase">
                  {language === 'en' ? 'Specialist Oculoplastic Care' : 'विशेषज्ञ ओकुलोप्लास्टी देखभाल'}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-wide leading-tight mb-4">
                {t('home.drName').replace('\n', ' ')}
              </h3>
              <p className="text-gold font-medium text-sm tracking-wide mb-4 max-w-sm">
                {t('home.subtitle')}
              </p>
              <p className="text-ivory-dark/70 text-sm leading-relaxed max-w-xl mb-6">
                {language === 'en'
                  ? 'Providing world-class microsurgical care for eyelid, lacrimal system, orbit, and ocular oncology conditions in Lucknow.'
                  : 'लखनऊ में पलक, आंसू नली प्रणाली, ऑर्बिट और ओकुलर ऑन्कोलॉजी स्थितियों के लिए विश्व स्तरीय माइक्रोसर्जिकल देखभाल प्रदान करना।'}
              </p>

            </div>
          </div>

          {/* QR Connection Widget */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-start w-full">
            <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-5 rounded-xl flex flex-col items-center text-center shadow-lg hover:border-gold/30 transition-all duration-300 group max-w-[240px]">
              <div className="bg-white p-2 rounded-lg shadow-inner group-hover:scale-[1.02] transition-transform duration-300">
                <img src="/qr-code.png" alt="Scan QR Code to contact Dr. Saumika Singh Clinic" loading="lazy" className="w-20 h-20 sm:w-24 sm:h-24 object-contain" />
              </div>
              <span className="text-xs font-bold text-gold mt-3 tracking-wider uppercase">{scanText}</span>
              <span className="text-[10px] text-ivory-dark/60 mt-1 max-w-[160px] leading-relaxed">{scanSubtext}</span>
            </div>
          </div>

        </div>

        {/* Footer Sub-bar with Medical Disclaimer, Copyright & Back to Top */}
        <div className="mt-16 pt-8 border-t border-white/10 space-y-6">
          {/* Medical / YMYL Disclaimer (site-wide) */}
          <p className="text-[11px] leading-relaxed text-ivory-dark/50 max-w-4xl mx-auto text-center">
            <span className="font-semibold text-ivory-dark/70">{disclaimerLabel}</span>
            {disclaimerText}
          </p>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-ivory-dark/50">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <p>&copy; {new Date().getFullYear()} {t('home.drName').replace('\n', ' ')}. All rights reserved.</p>
              <Link to={aboutPath} className="hover:text-gold transition-colors underline-offset-4 hover:underline">
                {language === 'en' ? 'About Dr. Singh' : 'डॉ. सिंह के बारे में'}
              </Link>
              <Link to={privacyPath} className="hover:text-gold transition-colors underline-offset-4 hover:underline">
                {language === 'en' ? 'Privacy Policy' : 'गोपनीयता नीति'}
              </Link>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 bg-white/5 hover:bg-gold hover:text-navy text-gold px-4 py-2 rounded-full border border-gold/20 hover:border-gold transition-all duration-300 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-gold cursor-pointer"
              aria-label="Scroll back to top"
            >
              <span>{language === 'en' ? 'Back to Top' : 'ऊपर जाएं'}</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

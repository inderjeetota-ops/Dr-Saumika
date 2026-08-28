import React, { useState } from 'react';
import { m, AnimatePresence } from 'motion/react';
import { X, Image as ImageIcon, Sparkles, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Gallery({ isEmbedded = false }: { isEmbedded?: boolean }) {
  const [isPhotoGalleryOpen, setIsPhotoGalleryOpen] = useState(false);
  const { language, t } = useLanguage();

  const gallerySections = language === 'hi' 
    ? ["टोसिस (Ptosis) सुधार", "कृत्रिम आंख पुनर्वास"]
    : ["Ptosis Correction", "Artificial Eye Rehabilitation"];

  // Localized static photo gallery data with names and descriptions (read-only)
  const photoGalleryImages = language === 'hi'
    ? [
        { src: "/photo-gallery-1.jpg", webpSrc: "/photo-gallery-1.webp", width: 1200, height: 900, name: "डर्मोलिपोमा",             alt: "डर्मोलिपोमा — क्लिनिकल फोटो, डॉ. सौमिका सिंह (ऑकुलोप्लास्टी और ऑकुलर ऑन्कोलॉजी), लखनऊ" },
        { src: "/photo-gallery-2.jpg", webpSrc: "/photo-gallery-2.webp", width: 1200, height: 900, name: "पैपिलोमा",               alt: "पैपिलोमा — क्लिनिकल फोटो, डॉ. सौमिका सिंह (ऑकुलोप्लास्टी और ऑकुलर ऑन्कोलॉजी), लखनऊ" },
        { src: "/photo-gallery-3.jpg", webpSrc: "/photo-gallery-3.webp", width: 1200, height: 900, name: "कोरिस्टोमा",             alt: "कोरिस्टोमा — क्लिनिकल फोटो, डॉ. सौमिका सिंह (ऑकुलोप्लास्टी और ऑकुलर ऑन्कोलॉजी), लखनऊ" },
        { src: "/photo-gallery-4.jpg", webpSrc: "/photo-gallery-4.webp", width: 1200, height: 900, name: "कंजंक्टाइवल सिस्ट",       alt: "कंजंक्टाइवल सिस्ट — क्लिनिकल फोटो, डॉ. सौमिका सिंह (ऑकुलोप्लास्टी और ऑकुलर ऑन्कोलॉजी), लखनऊ" },
        { src: "/photo-gallery-5.jpg", webpSrc: "/photo-gallery-5.webp", width: 1200, height: 900, name: "पलक कार्सिनोमा",          alt: "पलक कार्सिनोमा — क्लिनिकल फोटो, डॉ. सौमिका सिंह (ऑकुलोप्लास्टी और ऑकुलर ऑन्कोलॉजी), लखनऊ" },
        { src: "/photo-gallery-6.jpg", webpSrc: "/photo-gallery-6.webp", width: 1200, height: 900, name: "सेबोरेइक केराटोसिस",      alt: "सेबोरेइक केराटोसिस — क्लिनिकल फोटो, डॉ. सौमिका सिंह (ऑकुलोप्लास्टी और ऑकुलर ऑन्कोलॉजी), लखनऊ" },
        { src: "/photo-gallery-7.jpg", webpSrc: "/photo-gallery-7.webp", width: 1200, height: 900, name: "आवर्तक चालाज़ियन",        alt: "आवर्तक चालाज़ियन — क्लिनिकल फोटो, डॉ. सौमिका सिंह (ऑकुलोप्लास्टी और ऑकुलर ऑन्कोलॉजी), लखनऊ" },
        { src: "/photo-gallery-8.jpg", webpSrc: "/photo-gallery-8.webp", width: 1200, height: 900, name: "सिकाट्रिशियल एक्ट्रोपियन", alt: "सिकाट्रिशियल एक्ट्रोपियन — क्लिनिकल फोटो, डॉ. सौमिका सिंह (ऑकुलोप्लास्टी और ऑकुलर ऑन्कोलॉजी), लखनऊ" },
      ]
    : [
        { src: "/photo-gallery-1.jpg", webpSrc: "/photo-gallery-1.webp", width: 1200, height: 900, name: "Dermolipoma",           alt: "Dermolipoma — clinical photograph, Dr. Saumika Singh (oculoplasty & ocular oncology), Lucknow" },
        { src: "/photo-gallery-2.jpg", webpSrc: "/photo-gallery-2.webp", width: 1200, height: 900, name: "Papilloma",             alt: "Papilloma — clinical photograph, Dr. Saumika Singh (oculoplasty & ocular oncology), Lucknow" },
        { src: "/photo-gallery-3.jpg", webpSrc: "/photo-gallery-3.webp", width: 1200, height: 900, name: "Choristoma",            alt: "Choristoma — clinical photograph, Dr. Saumika Singh (oculoplasty & ocular oncology), Lucknow" },
        { src: "/photo-gallery-4.jpg", webpSrc: "/photo-gallery-4.webp", width: 1200, height: 900, name: "Conjunctival Cyst",     alt: "Conjunctival cyst — clinical photograph, Dr. Saumika Singh (oculoplasty & ocular oncology), Lucknow" },
        { src: "/photo-gallery-5.jpg", webpSrc: "/photo-gallery-5.webp", width: 1200, height: 900, name: "Eyelid Carcinoma",      alt: "Eyelid carcinoma — clinical photograph, Dr. Saumika Singh (oculoplasty & ocular oncology), Lucknow" },
        { src: "/photo-gallery-6.jpg", webpSrc: "/photo-gallery-6.webp", width: 1200, height: 900, name: "Seborrheic Keratosis",  alt: "Seborrheic keratosis — clinical photograph, Dr. Saumika Singh (oculoplasty & ocular oncology), Lucknow" },
        { src: "/photo-gallery-7.jpg", webpSrc: "/photo-gallery-7.webp", width: 1200, height: 900, name: "Recurrent Chalazion",   alt: "Recurrent chalazion — clinical photograph, Dr. Saumika Singh (oculoplasty & ocular oncology), Lucknow" },
        { src: "/photo-gallery-8.jpg", webpSrc: "/photo-gallery-8.webp", width: 1200, height: 900, name: "Cicatricial Ectropion", alt: "Cicatricial ectropion — clinical photograph, Dr. Saumika Singh (oculoplasty & ocular oncology), Lucknow" },
      ];

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-ivory via-white to-ivory relative overflow-hidden">
      {/* Subtle Background Accent Lighting */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-navy-light/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <m.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-semibold tracking-widest uppercase mb-4">
            <Sparkles className="h-3 w-3 animate-pulse" />
            <span>{language === 'hi' ? 'क्लीनिकल परिणाम' : 'Visual Evidence'}</span>
          </div>
          {isEmbedded ? (
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-4 tracking-tight">
              {t('gallery.title')}
            </h2>
          ) : (
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-4 tracking-tight">
              {t('gallery.title')}
            </h1>
          )}
          <p className="text-sm sm:text-base text-navy/70 max-w-2xl mx-auto leading-relaxed">
            {language === 'hi' 
              ? 'हमारे विशेषज्ञ ओकुलोप्लास्टी उपचारों और उत्कृष्ट माइक्रोसर्जिकल प्रक्रियाओं के वास्तविक परिणाम।'
              : 'Before and after visual evidence of our expert oculoplasty treatments and microscopic surgical care.'}
          </p>
          <div className="w-16 h-[3px] bg-gold mx-auto mt-6 rounded-full" />
        </m.div>

        {/* Comparison Sections */}
        <div className="space-y-24">
          {gallerySections.map((title, idx) => (
            <m.section 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="max-w-5xl mx-auto relative group"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center mb-10 flex items-center justify-center gap-3">
                <span className="w-8 h-[1px] bg-gold/50" />
                <span>{title}</span>
                <span className="w-8 h-[1px] bg-gold/50" />
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                {/* Before Image Card */}
                <div className="bg-white/90 backdrop-blur-md p-5 border border-gold/15 shadow-xl hover:shadow-2xl hover:border-gold/30 rounded-2xl transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-navy" />
                  <div className="aspect-[16/10] w-full bg-navy/5 flex items-center justify-center overflow-hidden rounded-xl relative">
                    {idx === 0 ? (
                      <picture className="contents">
                        <source srcSet="/ptosis-before.webp" type="image/webp" />
                        <img src="/ptosis-before.jpg" alt="Severe Ptosis (Drooping Upper Eyelid) before surgical correction by Dr. Saumika Singh" width="2587" height="1600" loading="lazy" className="w-full h-full object-cover object-center hover:scale-[1.03] transition-transform duration-500" />
                      </picture>
                    ) : idx === 1 ? (
                      <picture className="contents">
                        <source srcSet="/Artificial-Eye-Rehabilitation-before.webp" type="image/webp" />
                        <img src="/Artificial-Eye-Rehabilitation-before.jpg" alt="Anophthalmic socket volume loss before custom prosthesis fitting by Dr. Saumika Singh" width="3352" height="1977" loading="lazy" className="w-full h-full object-cover object-center hover:scale-[1.03] transition-transform duration-500" />
                      </picture>
                    ) : (
                      <span className="text-navy/40 font-bold uppercase tracking-widest text-center px-4">[Clinical Photo Here]</span>
                    )}
                    <span className="absolute top-3 left-3 bg-navy/90 text-white font-bold uppercase tracking-widest text-xs px-3.5 py-1.5 rounded-full shadow-md">
                      {language === 'hi' ? 'पहले' : 'Before'}
                    </span>
                  </div>

                </div>

                {/* After Image Card */}
                <div className="bg-white/90 backdrop-blur-md p-5 border border-gold/25 shadow-xl hover:shadow-2xl hover:border-gold/40 rounded-2xl transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold" />
                  <div className="aspect-[16/10] w-full bg-navy/5 flex items-center justify-center overflow-hidden rounded-xl relative">
                    {idx === 0 ? (
                      <picture className="contents">
                        <source srcSet="/ptosis-after.webp" type="image/webp" />
                        <img src="/ptosis-after.jpg" alt="Successful Ptosis Correction (Eyelid Surgery) showing restored eyelid height and natural symmetry by Dr. Saumika Singh" width="1435" height="839" loading="lazy" className="w-full h-full object-cover object-center hover:scale-[1.03] transition-transform duration-500" />
                      </picture>
                    ) : idx === 1 ? (
                      <picture className="contents">
                        <source srcSet="/Artificial-Eye-Rehabilitation-after.webp" type="image/webp" />
                        <img src="/Artificial-Eye-Rehabilitation-after.jpg" alt="Natural artificial eye prosthesis rehabilitation showing premium cosmetic matching by Dr. Saumika Singh" width="3027" height="1469" loading="lazy" className="w-full h-full object-cover object-center hover:scale-[1.03] transition-transform duration-500" />
                      </picture>
                    ) : (
                      <span className="text-navy/40 font-bold uppercase tracking-widest">[Clinical Photo Here]</span>
                    )}
                    <span className="absolute top-3 right-3 bg-gradient-to-r from-gold to-gold-light text-navy font-black uppercase tracking-widest text-xs px-4 py-1.5 rounded-full shadow-lg border border-gold/30">
                      {language === 'hi' ? 'बाद में' : 'After'}
                    </span>
                  </div>

                </div>
              </div>
            </m.section>
          ))}
        </div>

        {/* Luxury Banner with Note & Extended Gallery Trigger */}
        <div className="mt-24 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-navy via-[#001d3d] to-[#000f24] p-8 md:p-10 shadow-2xl rounded-2xl border border-gold/15 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Top Border Accent */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold via-gold-light to-gold" />
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-gold/5 rounded-full blur-2xl pointer-events-none" />

            <div className="flex-1 relative z-10">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <ImageIcon className="h-5 w-5 text-gold" />
                <span>{language === 'hi' ? 'अतिरिक्त फोटो गैलरी' : 'Extended Case Gallery'}</span>
              </h3>
              <p className="text-xs sm:text-sm text-ivory-dark/75 leading-relaxed max-w-xl italic font-light">
                {t('gallery.note')}
              </p>
            </div>

            <div className="flex-shrink-0 w-full md:w-auto relative z-10">
              <button 
                onClick={() => setIsPhotoGalleryOpen(true)}
                aria-expanded={isPhotoGalleryOpen}
                aria-controls="photo-gallery-modal"
                className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold text-navy font-bold uppercase tracking-widest text-xs rounded-xl transition-all duration-300 shadow-lg shadow-gold/10 hover:shadow-gold/25 transform active:scale-[0.98] cursor-pointer group"
              >
                <ImageIcon className="w-4 h-4" />
                <span>{t('gallery.photoGallery')}</span>
                <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Gallery Modal */}
      <AnimatePresence>
        {isPhotoGalleryOpen && (
          <m.div 
            id="photo-gallery-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy/95 backdrop-blur-sm"
          >
            <div className="w-full max-w-6xl max-h-[90vh] flex flex-col bg-ivory/95 backdrop-blur-xl shadow-2xl border border-white/20 overflow-hidden relative rounded-2xl">
              <div className="flex justify-between items-center p-6 border-b border-navy/10 bg-white/40">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-gold animate-pulse" />
                  <h2 id="modal-title" className="text-xl sm:text-2xl font-bold text-navy uppercase tracking-wider">Photo Gallery</h2>
                </div>
                <button 
                  onClick={() => setIsPhotoGalleryOpen(false)}
                  aria-label="Close photo gallery"
                  className="p-2 text-navy/60 hover:text-navy hover:bg-navy/5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2 cursor-pointer"
                >
                  <X className="w-6 h-6" aria-hidden="true" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-6 sm:p-8">
                <m.div 
                  initial="hidden"
                  animate="show"
                  variants={{
                    hidden: { opacity: 0 },
                    show: {
                      opacity: 1,
                      transition: { staggerChildren: 0.1 }
                    }
                  }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                  {photoGalleryImages.map((img, i) => (
                    <m.div 
                      key={i} 
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                      }}
                      className="flex flex-col bg-white border border-gold/15 p-5 shadow-lg rounded-2xl hover:shadow-xl transition-all duration-300 relative"
                    >
                      <div className="aspect-[4/3] bg-navy/5 border border-navy/5 flex items-center justify-center overflow-hidden group mb-4 relative rounded-xl shadow-inner">
                        {img.src ? (
                          <picture>
                            {img.webpSrc && <source srcSet={img.webpSrc} type="image/webp" />}
                            <img src={img.src} alt={img.alt} width={img.width} height={img.height} loading="lazy" className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" />
                          </picture>
                        ) : (
                          <div className="text-center p-4">
                            <ImageIcon className="w-8 h-8 text-navy/20 mx-auto mb-2" />
                            <span className="text-navy/40 text-sm font-medium uppercase tracking-widest">Add Photo Here</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="space-y-2 mt-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-gold bg-gold/10 px-2.5 py-1 rounded-md border border-gold/10">
                            {language === 'hi' ? 'क्लीनिकल केस' : 'Clinical Case'}
                          </span>
                        </div>
                        <h3 className="text-base font-bold text-navy tracking-tight mt-2">
                          {img.name}
                        </h3>
                      </div>
                    </m.div>
                  ))}
                </m.div>
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}


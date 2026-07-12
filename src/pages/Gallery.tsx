import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Image as ImageIcon, Sparkles, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

export default function Gallery() {
  const [isPhotoGalleryOpen, setIsPhotoGalleryOpen] = useState(false);
  const { language, t } = useLanguage();

  const gallerySections = language === 'hi' 
    ? ["टोसिस (Ptosis) सुधार", "कृत्रिम आंख पुनर्वास"]
    : ["Ptosis Correction", "Artificial Eye Rehabilitation"];

  // Localized static photo gallery data with names and descriptions (read-only)
  const photoGalleryImages = language === 'hi'
    ? [
        { src: "/photo gallery 1.jpg", alt: "Gallery Image 1", name: "केस 1: टोसिस सुधार (पलक का उठना)", desc: "ऑपरेशन से पहले और बाद का सटीक मूल्यांकन।" },
        { src: "/Photo gallery 2.jpg", alt: "Gallery Image 2", name: "केस 2: एक्ट्रोपियन सुधार (पलक का पलटना)", desc: "मरीज के उपचार में लगातार सुधार और प्रगति।" },
        { src: "/Photo gallery 3.jpg", alt: "Gallery Image 3", name: "केस 3: कस्टम कृत्रिम आँख (Prosthesis)", desc: "सफलतापूर्वक ओकुलोप्लास्टिक उपचार और सौंदर्य पुनर्वास।" },
        { src: "/Photo gallery 4.jpg", alt: "Gallery Image 4", name: "केस 4: ब्लेफेरोप्लास्टी (पलक की सर्जरी)", desc: "सर्जरी के बाद का उत्कृष्ट सौंदर्य परिणाम।" },
        { src: "/Photo gallery 5.jpg", alt: "Gallery Image 5", name: "केस 5: अश्रु प्रणाली और सॉकेट", desc: "पुनर्निर्माण सॉकेट पुनर्वास और सौंदर्य सुधार।" },
        { src: "/Photo gallery 6.jpg", alt: "Gallery Image 6", name: "केस 6: चेहरे का सौंदर्य संवर्धन", desc: "चेहरे की बनावट में प्राकृतिक और सुंदर सुधार।" },
      ]
    : [
        { src: "/photo gallery 1.jpg", alt: "Gallery Image 1", name: "Case 1: Ptosis Correction", desc: "Before and after evaluation." },
        { src: "/Photo gallery 2.jpg", alt: "Gallery Image 2", name: "Case 2: Ectropion Repair", desc: "Treatment progress of patient." },
        { src: "/Photo gallery 3.jpg", alt: "Gallery Image 3", name: "Case 3: Custom Prosthesis", desc: "Successful oculoplastic care." },
        { src: "/Photo gallery 4.jpg", alt: "Gallery Image 4", name: "Case 4: Blepharoplasty", desc: "Post-surgery aesthetic outcome." },
        { src: "/Photo gallery 5.jpg", alt: "Gallery Image 5", name: "Case 5: Lacrimal System", desc: "Reconstructive socket rehabilitation." },
        { src: "/Photo gallery 6.jpg", alt: "Gallery Image 6", name: "Case 6: Facial Aesthetics", desc: "Aesthetic enhancement result." },
      ];

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-ivory via-white to-ivory relative overflow-hidden">
      {/* Subtle Background Accent Lighting */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-navy-light/5 rounded-full blur-[120px] pointer-events-none" />

      <SEO title={t('gallery.title')} description={t('gallery.note')} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <motion.div 
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-4 tracking-tight">
            {t('gallery.title')}
          </h1>
          <p className="text-sm sm:text-base text-navy/70 max-w-2xl mx-auto leading-relaxed">
            {language === 'hi' 
              ? 'हमारे विशेषज्ञ ओकुलोप्लास्टी उपचारों और उत्कृष्ट माइक्रोसर्जिकल प्रक्रियाओं के वास्तविक परिणाम।'
              : 'Before and after visual evidence of our expert oculoplasty treatments and microscopic surgical care.'}
          </p>
          <div className="w-16 h-[3px] bg-gold mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Comparison Sections */}
        <div className="space-y-24">
          {gallerySections.map((title, idx) => (
            <motion.section 
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
                  <div className="aspect-[4/3] bg-navy/5 flex items-center justify-center overflow-hidden rounded-xl relative">
                    {idx === 0 ? (
                      <img src="/ptosis-before.jpg" alt="Ptosis Before" loading="lazy" className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-500" />
                    ) : idx === 1 ? (
                      <img src="/Artificial-Eye-Rehabilitation-before.jpg" alt="Artificial Eye Rehabilitation Before" loading="lazy" className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-500" />
                    ) : (
                      <span className="text-navy/40 font-bold uppercase tracking-widest text-center px-4">[Clinical Photo Here]</span>
                    )}
                    <span className="absolute top-3 left-3 bg-navy/90 text-white font-bold uppercase tracking-widest text-xs px-3.5 py-1.5 rounded-full shadow-md">
                      {language === 'hi' ? 'पहले' : 'Before'}
                    </span>
                  </div>
                  <div className="mt-4 flex justify-between items-center px-1">
                    <span className="text-xs font-bold text-navy/50 tracking-wider uppercase">
                      {idx === 0 ? (language === 'hi' ? 'गंभीर पलक का झुकना' : 'Severe Drooping Eyelid Condition') : (language === 'hi' ? 'खोई हुई चमक और असममिति' : 'Volume loss and aesthetic asymmetry')}
                    </span>
                  </div>
                </div>

                {/* After Image Card */}
                <div className="bg-white/90 backdrop-blur-md p-5 border border-gold/25 shadow-xl hover:shadow-2xl hover:border-gold/40 rounded-2xl transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold" />
                  <div className="aspect-[4/3] bg-navy/5 flex items-center justify-center overflow-hidden rounded-xl relative">
                    {idx === 0 ? (
                      <img src="/ptosis-after.jpg" alt="Ptosis After" loading="lazy" className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-500" />
                    ) : idx === 1 ? (
                      <img src="/Artificial-Eye-Rehabilitation-after.jpg" alt="Artificial Eye Rehabilitation After" loading="lazy" className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-500" />
                    ) : (
                      <span className="text-navy/40 font-bold uppercase tracking-widest">[Clinical Photo Here]</span>
                    )}
                    <span className="absolute top-3 right-3 bg-gradient-to-r from-gold to-gold-light text-navy font-black uppercase tracking-widest text-xs px-4 py-1.5 rounded-full shadow-lg border border-gold/30">
                      {language === 'hi' ? 'बाद में' : 'After'}
                    </span>
                  </div>
                  <div className="mt-4 flex justify-between items-center px-1">
                    <span className="text-xs font-bold text-gold tracking-wider uppercase">
                      {idx === 0 ? (language === 'hi' ? 'पूरी तरह से उठा हुआ और प्राकृतिक' : 'Restored eyelid height and natural symmetry') : (language === 'hi' ? 'कस्टम मैचिंग कृत्रिम आंख' : 'Custom matched premium cosmetic shell')}
                    </span>
                  </div>
                </div>
              </div>
            </motion.section>
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
          <motion.div 
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
                <motion.div 
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
                    <motion.div 
                      key={i} 
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                      }}
                      className="flex flex-col bg-white border border-gold/15 p-5 shadow-lg rounded-2xl hover:shadow-xl transition-all duration-300 relative"
                    >
                      <div className="aspect-[4/3] bg-navy/5 border border-navy/5 flex items-center justify-center overflow-hidden group mb-4 relative rounded-xl shadow-inner">
                        {img.src ? (
                          <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" />
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
                        <p className="text-sm text-navy/70 leading-relaxed font-light">
                          {img.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


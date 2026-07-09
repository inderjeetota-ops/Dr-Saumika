import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Image as ImageIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

export default function Gallery() {
  const [isPhotoGalleryOpen, setIsPhotoGalleryOpen] = useState(false);
  const { language, t } = useLanguage();

  const gallerySections = language === 'hi' 
    ? ["टोसिस (Ptosis) सुधार", "कृत्रिम आंख पुनर्वास"]
    : ["Ptosis Correction", "Artificial Eye Rehabilitation"];

  // Placeholders for the general photo gallery with names and descriptions
  const [photoGalleryImages, setPhotoGalleryImages] = useState([
    { src: "/photo gallery 1.jpg", alt: "Gallery Image 1", name: "Case 1: Ptosis Correction", desc: "Before and after evaluation." },
    { src: "/Photo gallery 2.jpg", alt: "Gallery Image 2", name: "Case 2: Ectropion Repair", desc: "Treatment progress of patient." },
    { src: "/Photo gallery 3.jpg", alt: "Gallery Image 3", name: "Case 3: Custom Prosthesis", desc: "Successful oculoplastic care." },
    { src: "/Photo gallery 4.jpg", alt: "Gallery Image 4", name: "Case 4: Blepharoplasty", desc: "Post-surgery aesthetic outcome." },
    { src: "/Photo gallery 5.jpg", alt: "Gallery Image 5", name: "Case 5: Lacrimal System", desc: "Reconstructive socket rehabilitation." },
    { src: "/Photo gallery 6.jpg", alt: "Gallery Image 6", name: "Case 6: Facial Aesthetics", desc: "Aesthetic enhancement result." },
  ]);

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-ivory">
      <SEO title={t('gallery.title')} description="View clinical before and after photos of oculoplasty treatments and procedures." />
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <p className="text-gold font-bold tracking-widest uppercase text-sm mb-4">
            Visual Proof
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">{t('gallery.title')}</h1>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </motion.div>

        <div className="space-y-24">
          {gallerySections.map((title, idx) => (
            <motion.section 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-5xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-navy text-center mb-10">{title}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Before Image Placeholder */}
                <div className="bg-navy/5 p-4 flex flex-col">
                  <div className="aspect-[3/2] sm:aspect-video bg-navy/10 flex items-center justify-center overflow-hidden">
                    {idx === 0 ? (
                      <img src="/ptosis-before.jpg" alt="Ptosis Before" className="w-full h-full object-cover" />
                    ) : idx === 1 ? (
                      <img src="/Artificial-Eye-Rehabilitation-before.jpg" alt="Artificial Eye Rehabilitation Before" className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-navy/40 font-bold uppercase tracking-widest text-center px-4">[Clinical Photo Here]</span>
                    )}
                  </div>
                  <div className="mt-4 flex justify-between items-center px-2">
                    <span className="text-navy font-bold uppercase tracking-wide">Before</span>
                  </div>
                </div>

                {/* After Image Placeholder */}
                <div className="bg-navy/5 p-4 flex flex-col">
                  <div className="aspect-[3/2] sm:aspect-video bg-navy/10 flex items-center justify-center overflow-hidden relative">
                    <span className="absolute inset-0 border-4 border-gold/50 pointer-events-none z-10"></span>
                    {idx === 0 ? (
                      <img src="/ptosis-after.jpg" alt="Ptosis After" className="w-full h-full object-cover" />
                    ) : idx === 1 ? (
                      <img src="/Artificial-Eye-Rehabilitation-after.jpg" alt="Artificial Eye Rehabilitation After" className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-navy/40 font-bold uppercase tracking-widest">[Clinical Photo Here]</span>
                    )}
                  </div>
                  <div className="mt-4 flex justify-between items-center px-2">
                    <span className="text-gold font-bold uppercase tracking-wide">After</span>
                  </div>
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        {/* Photo Gallery Button Section */}
        <div className="mt-16 flex justify-end max-w-5xl mx-auto">
          <button 
            onClick={() => setIsPhotoGalleryOpen(true)}
            className="flex items-center gap-2 px-6 py-3 bg-navy text-ivory font-bold uppercase tracking-wider hover:bg-gold hover:text-navy transition-colors"
          >
            <ImageIcon className="w-5 h-5" />
            {t('gallery.photoGallery')}
          </button>
        </div>
        
        <div className="mt-16 text-center py-4 px-8 bg-navy text-ivory">
           <p className="text-base text-ivory/80 italic font-light max-w-2xl mx-auto">
             {t('gallery.note')}
           </p>
        </div>
      </div>

      {/* Photo Gallery Modal */}
      <AnimatePresence>
        {isPhotoGalleryOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy/95 backdrop-blur-sm"
          >
            <div className="w-full max-w-6xl max-h-full flex flex-col bg-ivory shadow-2xl overflow-hidden relative">
              <div className="flex justify-between items-center p-6 border-b border-navy/10">
                <h2 className="text-2xl font-bold text-navy uppercase tracking-wider">Photo Gallery</h2>
                <button 
                  onClick={() => setIsPhotoGalleryOpen(false)}
                  className="p-2 text-navy/60 hover:text-navy hover:bg-navy/5 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {photoGalleryImages.map((img, i) => (
                    <div key={i} className="flex flex-col bg-white border border-navy/10 p-4 shadow-sm rounded-sm">
                      <div className="aspect-[4/3] bg-navy/5 border border-navy/5 flex items-center justify-center overflow-hidden group mb-4 relative rounded-sm">
                        {img.src ? (
                          <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        ) : (
                          <div className="text-center p-4">
                            <ImageIcon className="w-8 h-8 text-navy/20 mx-auto mb-2" />
                            <span className="text-navy/40 text-sm font-medium uppercase tracking-widest">Add Photo Here</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-navy/60 mb-1">
                            Photo Name
                          </label>
                          <input
                            type="text"
                            value={img.name}
                            onChange={(e) => {
                              const updated = [...photoGalleryImages];
                              updated[i].name = e.target.value;
                              setPhotoGalleryImages(updated);
                            }}
                            placeholder="Enter photo name..."
                            className="w-full px-3 py-2 text-sm bg-ivory border border-navy/10 text-navy focus:outline-none focus:border-gold transition-colors font-medium rounded-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-navy/60 mb-1">
                            Description
                          </label>
                          <textarea
                            value={img.desc}
                            onChange={(e) => {
                              const updated = [...photoGalleryImages];
                              updated[i].desc = e.target.value;
                              setPhotoGalleryImages(updated);
                            }}
                            placeholder="Enter photo description..."
                            rows={3}
                            className="w-full px-3 py-2 text-sm bg-ivory border border-navy/10 text-navy focus:outline-none focus:border-gold transition-colors resize-none rounded-sm leading-relaxed"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

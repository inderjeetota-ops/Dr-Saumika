import React from 'react';
import { motion } from 'motion/react';

const gallerySections = [
  "Ptosis Correction",
  "Eyelid Tumour Reconstruction",
  "Artificial Eye Rehabilitation",
  "Thyroid Eye Disease",
  "Socket Reconstruction"
];

export default function Gallery() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-ivory">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <p className="text-gold font-bold tracking-widest uppercase text-sm mb-4">
            Visual Proof
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">Clinical Gallery</h1>
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
                  <div className="aspect-[4/3] bg-navy/10 flex items-center justify-center overflow-hidden">
                    {idx === 0 ? (
                      <img src="/ptosis-before.jpg" alt="Ptosis Before" className="w-full h-full object-cover" />
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
                  <div className="aspect-[4/3] bg-navy/10 flex items-center justify-center overflow-hidden relative">
                    <span className="absolute inset-0 border-4 border-gold/50 pointer-events-none z-10"></span>
                    {idx === 0 ? (
                      <img src="/ptosis-after.jpg" alt="Ptosis After" className="w-full h-full object-cover" />
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
        
        <div className="mt-24 text-center p-8 bg-navy text-ivory">
           <p className="text-lg text-ivory-dark/80 italic font-light max-w-2xl mx-auto">
             Note: These images are shared with patient consent. Results may vary depending on individual clinical conditions.
           </p>
        </div>
      </div>
    </div>
  );
}

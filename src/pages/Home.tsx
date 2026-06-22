import React from 'react';
import { motion } from 'motion/react';
import { Check, Droplets, Eye, Shield, Sparkles, Activity, PlusCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

import Conditions from './Conditions';
import Gallery from './Gallery';
import Contact from './Contact';

export default function Home() {
  return (
    <div className="flex flex-col">
      <div id="home" className="w-full max-w-[1200px] mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
      {/* Hero Section */}
      <section className="bento-card lg:col-span-12 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-ivory-dark/30">
          {/* Subtle background overlay / texture could go here */}
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-navy to-transparent pointer-events-none"></div>
        </div>
        
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-gold font-bold tracking-widest uppercase text-sm mb-4">
              Specialist Eyecare
            </p>
            <div className="flex items-center gap-4 sm:gap-6 mb-4">
              <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-navy leading-tight">
                Dr. Saumika<br />Singh
              </h1>
              <div className="w-20 h-24 sm:w-24 sm:h-32 md:w-28 md:h-36 border-2 border-gold bg-gray-200 flex items-center justify-center flex-shrink-0">
                <img src="/dr-saumika.jpg" alt="Dr. Saumika Singh" className="w-full h-full object-cover" />
              </div>
            </div>
            <h2 className="text-xl sm:text-2xl text-navy-light font-medium mb-8">
              Oculoplasty, Orbit & Ocular Oncology Surgeon
            </h2>
            
            <div className="space-y-3 mb-10">
              {[
                'Eyelid Disorders',
                'Lacrimal Disorders',
                'Orbital Diseases',
                'Ocular Surface & Periocular Oncology',
                'Artificial Eye & Socket Rehabilitation',
                'Periocular Aesthetics'
              ].map((item, i) => (
                <div key={i} className="flex items-center text-navy/80 font-medium">
                  <Check className="h-5 w-5 text-gold mr-3 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="px-8 py-4 bg-navy text-ivory text-center font-bold uppercase tracking-wider hover:bg-navy-light transition-colors">
                Book Consultation
              </a>
              <a href="tel:+917460088838" className="px-8 py-4 border-2 border-navy text-navy text-center font-bold uppercase tracking-wider hover:bg-navy/5 transition-colors">
                Call Now
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center items-center text-center bg-white text-navy p-8 sm:p-10 lg:p-14 order-last lg:ml-auto max-w-xl lg:max-w-md w-full border border-gold/20 mt-8 lg:mt-0 mx-auto lg:mx-0 shadow-lg"
          >
            <Shield className="h-12 w-12 text-gold mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6 text-gold">Commitment to Excellence</h2>
            <p className="text-base lg:text-lg leading-relaxed text-navy-light font-light">
              Dr. Saumika Singh is a fellowship-trained Oculoplasty, Orbit & Ocular Oncology Surgeon with expertise in the management of eyelid disorders, lacrimal diseases, orbital pathology, ocular surface and periocular tumours, socket reconstruction, and periocular aesthetics.
            </p>
            <div className="mt-8 pt-8 border-t border-gold/20 inline-block w-full">
              <p className="text-base font-medium text-gold uppercase tracking-widest">
                Alyantra Medicity, Lucknow
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Oculoplasty? visual icons section */}
      <section className="bento-card lg:col-span-12 bg-ivory-dark flex flex-col justify-center overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Why Oculoplasty?</h2>
            <p className="text-navy-light text-lg max-w-2xl mx-auto">
              Specialized and delicate care for the structures surrounding the eye. If you experience these symptoms, an Oculoplasty expert provides the precise treatment required.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
            {[
              { icon: Eye, title: "Drooping Eyelids", desc: "Ptosis correction to restore visual field and appearance." },
              { icon: Droplets, title: "Watering Eyes", desc: "Advanced solutions for lacrimal duct blockages." },
              { icon: PlusCircle, title: "Artificial Eye", desc: "Custom socket reconstruction and prosthetic fitting." },
              { icon: Activity, title: "Thyroid Eye Disease", desc: "Comprehensive management of TED symptoms." },
              { icon: Shield, title: "Eyelid & Ocular Tumours", desc: "Expert oncology care with reconstructive surgery." },
              { icon: Sparkles, title: "Botox & Aesthetics", desc: "Safe, effective periocular aesthetic enhancements." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-6 border border-gold/10 hover:border-gold/40 transition-colors bg-white shadow-sm"
              >
                <item.icon className="h-10 w-10 text-gold mb-4 stroke-[1.5]" />
                <h3 className="text-xl font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-sm text-navy/70 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a href="#conditions" className="inline-flex items-center text-gold font-bold uppercase tracking-wider hover:text-navy transition-colors">
              View All Conditions Treated <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </section>
      </div>
      
      <div id="conditions">
        <Conditions />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

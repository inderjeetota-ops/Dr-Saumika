import React from 'react';
import { motion } from 'motion/react';
import { Check, Droplets, Eye, Shield, Sparkles, Activity, PlusCircle, ArrowRight, Star, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

import Gallery from './Gallery';
import Contact from './Contact';
import SEO from '../components/SEO';

export default function Home() {
  const { t, language } = useLanguage();

  return (
    <div className="flex flex-col">
      <SEO 
        title={t('home.drName')} 
        description={t('home.subtitle')} 
        url="https://drsaumika.in"
      />
      <div className="w-full max-w-[1240px] mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative">
      
      {/* Hero Section */}
      <section id="home" className="lg:col-span-12 bg-white/95 backdrop-blur-md border border-gold/15 shadow-xl hover:shadow-2xl rounded-3xl transition-all duration-500 relative overflow-hidden p-6 sm:p-10 lg:p-12 xl:p-14">
        {/* Premium Top Line Accent */}
        <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-gold via-gold-light to-gold" />
        
        {/* Subtle luxury ambient glows */}
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-navy-light/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 max-w-3xl flex flex-col justify-between h-full"
          >
            <div>
              {/* Premium Specialist Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-semibold tracking-widest uppercase mb-6">
                <Sparkles className="h-3 w-3 animate-pulse" />
                <span>{t('home.specialist')}</span>
              </div>

              {/* Title & Portrait Row */}
              <div className="flex flex-row items-center justify-between sm:justify-start gap-4 sm:gap-6 mb-2 sm:mb-6 w-full">
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-navy leading-tight tracking-tight whitespace-pre-line flex-1">
                  {t('home.drName')}
                </h1>
                
                {/* Luxury Portrait Frame */}
                <div className="relative p-1 rounded-2xl bg-gradient-to-br from-gold to-gold-light shadow-xl flex-shrink-0 group">
                  <div className="w-20 h-24 sm:w-28 sm:h-36 md:w-32 md:h-40 rounded-xl overflow-hidden bg-white">
                    <img src="/dr-saumika.jpg" alt="Dr. Saumika Singh - Oculoplastic Surgeon in Lucknow" className="w-full h-full object-cover transform group-hover:scale-[1.05] transition-transform duration-500" />
                  </div>
                  <div className="absolute inset-0 border border-white/20 rounded-2xl pointer-events-none" />
                </div>
              </div>

              <h2 className="text-lg sm:text-xl md:text-2xl text-navy-light font-medium mb-6 leading-relaxed">
                {language === 'en' ? (
                  <>
                    Oculoplasty, Orbit & <br className="sm:hidden" />Ocular Oncology Surgeon
                  </>
                ) : (
                  <>
                    ओकुलोप्लास्टी, ऑर्बिट और <br className="sm:hidden" />ओकुलर ऑन्कोलॉजी सर्जन
                  </>
                )}
              </h2>

              {/* Elegant Qualification Block */}
              <div className="mb-8 bg-gold/5 backdrop-blur-md p-5 rounded-2xl border border-gold/20 shadow-sm max-w-xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold via-gold-light to-gold" />
                <div className="absolute top-0 right-0 w-16 h-16 bg-gold/10 rounded-full blur-lg pointer-events-none" />
                
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="h-4 w-4 text-gold animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-widest text-gold">{language === 'hi' ? 'योग्यता और साख' : 'Credentials & Qualifications'}</span>
                </div>
                
                <div className="space-y-3 text-navy text-sm">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-br from-gold/25 to-gold/5 border border-gold/35 text-gold flex-shrink-0 mt-0.5 shadow-sm shadow-gold/5">
                      <Check className="h-2.5 w-2.5 stroke-[3]" />
                    </span>
                    <div>
                      <p className="font-bold text-navy">{language === 'hi' ? 'एमबीबीएस • एमएस (नेत्र रोग)' : 'MBBS • MS (Ophthalmology)'}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-br from-gold/25 to-gold/5 border border-gold/35 text-gold flex-shrink-0 mt-0.5 shadow-sm shadow-gold/5">
                      <Check className="h-2.5 w-2.5 stroke-[3]" />
                    </span>
                    <div>
                      <p className="font-bold text-navy">{language === 'hi' ? 'ओकुलोप्लास्टी और ओकुलर ऑन्कोलॉजी में फेलो' : 'Fellow in Oculoplasty & Ocular Oncology'}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Premium Condition Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 max-w-2xl">
                {[
                  t('home.eyelid'),
                  t('home.lacrimal'),
                  t('home.orbital'),
                  t('home.oncology'),
                  t('home.artificial'),
                  t('home.aesthetics')
                ].map((item, i) => (
                  <div key={i} className="flex items-center text-navy/85 text-[14px] font-semibold bg-gold/5 border border-gold/10 rounded-xl px-4 py-2.5 hover:bg-gold/10 hover:border-gold/20 transition-all duration-300">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gold/15 text-gold text-[10px] font-bold flex-shrink-0 mr-3">✓</span>
                    <span className="truncate">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Elegant Call to Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Link 
                to="/#contact" 
                className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold text-navy font-bold uppercase tracking-widest text-xs sm:text-sm rounded-xl transition-all duration-300 shadow-lg shadow-gold/10 hover:shadow-gold/25 transform active:scale-[0.98] cursor-pointer group text-center"
              >
                <span>{t('home.bookConsultation')}</span>
                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <a 
                href="tel:+917460088838" 
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white/95 border border-navy/10 hover:border-navy/20 text-navy font-bold uppercase tracking-widest text-xs sm:text-sm rounded-xl transition-all duration-300 hover:bg-navy/5 shadow-sm transform active:scale-[0.98] cursor-pointer text-center"
              >
                <span>{t('home.callNow')}</span>
              </a>
            </div>
          </motion.div>
          
          {/* Commitment Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-center items-center text-center bg-gradient-to-br from-navy via-[#001d3d] to-[#000f24] text-white p-8 sm:p-10 lg:p-12 order-last lg:ml-auto max-w-xl lg:max-w-md w-full border border-gold/15 rounded-3xl shadow-2xl relative overflow-hidden mt-8 lg:mt-0 mx-auto lg:mx-0"
          >
            {/* Elegant Design Accent Details */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold via-gold-light to-gold" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="p-3.5 rounded-xl bg-gold/10 border border-gold/25 text-gold mb-6">
              <Shield className="h-6 w-6 text-gold animate-pulse" />
            </div>
            
            <h2 className="text-2xl font-bold mb-4 text-gold tracking-tight">{t('home.commitmentTitle')}</h2>
            
            <p className="text-sm leading-relaxed text-ivory-dark/85 font-light mb-6">
              {t('home.commitmentDesc')}
            </p>
            
            <div className="w-12 h-[1.5px] bg-gold/30 mb-6" />
            
            <p className="text-xs font-semibold text-gold uppercase tracking-widest">
              {t('home.location')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Oculoplasty? visual icons section */}
      <section id="conditions" className="bento-card px-4 py-8 md:p-8 lg:col-span-12 bg-ivory-dark flex flex-col justify-center overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">{t('home.whyTitle')}</h2>
            <p className="text-navy-light text-lg max-w-2xl mx-auto">
              {t('home.whyDesc')}
            </p>
            <div className="w-24 h-0.5 bg-gold/40 mx-auto my-8" />
            <h3 className="text-2xl md:text-3xl font-bold text-gold mb-2">
              {t('home.conditionsTreated')}
            </h3>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
            className="grid grid-cols-2 md:grid-cols-4 gap-x-4 md:gap-x-8 gap-y-8 md:gap-y-12"
          >
            {[
              { icon: Eye, title: t('home.drooping'), desc: t('home.droopingDesc'), slug: 'eyelid-disorders-eyelid-surgery' },
              { icon: Droplets, title: t('home.watering'), desc: t('home.wateringDesc'), slug: 'watering-eyes-tear-drainage-disorders' },
              { icon: PlusCircle, title: t('home.artificialTitle'), desc: t('home.artificialDesc'), slug: 'orbital-disorders-orbital-surgery' },
              { icon: Activity, title: t('home.thyroid'), desc: t('home.thyroidDesc'), slug: 'eye-tumours-ocular-oncology' },
              { icon: Shield, title: t('home.tumours'), desc: t('home.tumoursDesc'), slug: 'socket-reconstruction-artificial-eye-rehabilitation' },
              { icon: Sparkles, title: t('home.botox'), desc: t('home.botoxDesc'), slug: 'eye-trauma-eyelid-orbital-reconstruction' },
              { icon: Star, title: t('home.botoxCosmetic'), desc: t('home.botoxCosmeticDesc'), slug: 'botox-eyelid-cosmetic-surgery-periocular-aesthetics' },
              { icon: Award, title: t('home.whyChoose'), desc: t('home.whyChooseDesc'), slug: 'why-choose-an-oculoplasty-ocular-oncology-specialist' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                }}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
                className="h-full"
              >
                <Link to={`/services/${item.slug}`} className="group flex flex-col items-center text-center px-3 py-5 sm:p-6 border border-gold/15 hover:border-gold/50 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 transition-all rounded-xl relative overflow-hidden bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-xl h-full pb-8">
                  {/* Decorative premium hover line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                  
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: i * 0.2 
                    }}
                  >
                    <item.icon className="h-12 w-12 text-gold mb-4 stroke-[1.2] group-hover:scale-110 transition-transform duration-300" />
                  </motion.div>
                  <h3 className="text-sm sm:text-lg md:text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors duration-300 leading-tight w-full break-normal px-1">{item.title}</h3>
                  {item.desc && (
                    <p className="text-sm text-navy/70 leading-relaxed mb-4">
                      {item.desc}
                    </p>
                  )}
                  
                  <div className="mt-auto pt-4 text-[10px] sm:text-xs font-bold text-gold/80 tracking-wider uppercase flex flex-wrap items-center justify-center gap-1.5 group-hover:text-gold transition-all duration-300 text-center w-full break-normal px-1">
                    <span>{t('home.clickToExplore')}</span>
                    <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1.5 transition-transform duration-300 flex-shrink-0" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>


        </div>
      </section>
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

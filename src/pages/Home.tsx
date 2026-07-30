import React from 'react';
import { motion } from 'motion/react';
import { Check, Droplets, Eye, Shield, Sparkles, Activity, PlusCircle, ArrowRight, Star, Award, Ribbon, Syringe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

import Gallery from './Gallery';
import Contact from './Contact';
import SEO from '../components/SEO';


const OrbitalIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M 2 12 Q 12 3 22 12 Q 12 21 2 12" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    <path d="M 2 12 L 8 12" />
    <path d="M 22 12 L 16 12" />
    <path d="M 10 8 Q 6 12 10 16" />
    <path d="M 14 8 Q 18 12 14 16" />
  </svg>
);



const SocketIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M 6.5 7.5 C 10 3.5 17 4.5 21 11.5" />
    <path d="M 4.5 9.5 L 7.5 6.5" strokeWidth="2.5" strokeLinecap="butt" />
    <path d="M 3 12.5 C 7 19.5 14 20.5 17.5 16.5" />
    <path d="M 16.5 17.5 L 19.5 14.5" strokeWidth="2.5" strokeLinecap="butt" />
    <path d="M 8.5 9 A 4.5 4.5 0 0 1 15.5 9" />
    <path d="M 8.5 15 A 4.5 4.5 0 0 0 15.5 15" />
    <path d="M 12 9.5 A 2.5 2.5 0 1 1 9.6 11.3 A 1.2 1.2 0 0 0 10.7 9.6 A 2.5 2.5 0 0 1 12 9.5 Z" fill="currentColor" stroke="none" />
  </svg>
);


const TraumaIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M 3 12 C 4.5 9 6.5 7.5 8.5 6.5" />
    <path d="M 5.5 5.5 L 7.5 4" strokeWidth="2" />
    <path d="M 11 5 C 15 4 18.5 6 21 12" />
    <path d="M 3 12 C 5.5 18 9.5 20 13.5 19" />
    <path d="M 16.5 20 L 18.5 18.5" strokeWidth="2" />
    <path d="M 15.5 17.5 C 17.5 16.5 19.5 14.5 21 12" />
    <path d="M 9.5 9 A 3.5 3.5 0 0 1 14.5 9" />
    <path d="M 9.5 15 A 3.5 3.5 0 0 0 14.5 15" />
    <path d="M 7.5 11 L 7.5 13" />
    <path d="M 16.5 11 L 16.5 13" />
    <circle cx="12" cy="12" r="2.5" fill="currentColor" stroke="none" />
  </svg>
);


const EyelidIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M 4 8 C 6 6 9 8 12 8 C 15 8 18 6 20 8" />
    <path d="M 4 10.5 C 8 13.5 16 13.5 20 10.5" />
    <path d="M 4.5 11 L 2 13" />
    <path d="M 6.5 12 L 4.5 15" />
    <path d="M 9.5 13 L 8 16.5" />
    <path d="M 12 13.5 L 12 17" />
    <path d="M 14.5 13 L 16 16.5" />
    <path d="M 17.5 12 L 19.5 15" />
    <path d="M 19.5 11 L 22 13" />
  </svg>
);

export default function Home() {
  const { t, language } = useLanguage();

  return (
    <div className="flex flex-col">
      <SEO
        title="Dr. Saumika Singh | Oculoplasty & Ocular Oncology, Lucknow"
        description="Dr. Saumika Singh, MBBS, MS (Ophth), FICO (UK) — oculoplasty, orbit & ocular oncology surgeon in Lucknow. Expert eyelid, tear duct and eye tumour care."
        path={language === 'hi' ? '/hi' : '/'}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Physician",
          "name": "Dr. Saumika Singh",
          "medicalSpecialty": "https://schema.org/Surgical",
          "description": "Oculoplasty, Orbit & Ocular Oncology Surgeon — MBBS, MS (Ophth), FICO (UK)",
          "image": "https://drsaumika.in/dr-saumika.jpg",
          "url": `https://drsaumika.in${language === 'hi' ? '/hi' : '/'}`,
          "sameAs": [
            "https://share.google/Giu91wM7buG8pRTa2"
          ],
          "telephone": "+91-7460088838",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Alyantra Medicity, Vibhuti Khand, Gomti Nagar",
            "addressLocality": "Lucknow",
            "addressRegion": "Uttar Pradesh",
            "addressCountry": "IN"
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
            "opens": "10:00",
            "closes": "18:00"
          }
        }}
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
            className="lg:col-span-12 max-w-4xl mx-auto flex flex-col justify-center text-left items-start h-full w-full"
          >
            <div className="w-full">
              {/* Premium Specialist Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-semibold tracking-widest uppercase mb-6">
                <Sparkles className="h-3 w-3 animate-pulse" />
                <span>{t('home.specialist')}</span>
              </div>

              {/* Title & Portrait Row */}
              <div className="flex flex-row items-center justify-between gap-4 sm:gap-6 mb-2 sm:mb-6 w-full">
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-navy leading-tight tracking-tight whitespace-pre-line text-left flex-1">
                  {t('home.drName')}
                </h1>
                
                {/* Luxury Portrait Frame */}
                <div className="relative p-1 rounded-2xl bg-gradient-to-br from-gold to-gold-light shadow-xl flex-shrink-0 group">
                  <div className="w-20 h-24 sm:w-28 sm:h-36 md:w-32 md:h-40 rounded-xl overflow-hidden bg-white">
                    <picture>
                      <source srcSet="/dr-saumika.webp" type="image/webp" />
                      <img src="/dr-saumika.jpg" alt="Dr. Saumika Singh, oculoplasty and ocular oncology surgeon" width="1194" height="1317" className="w-full h-full object-cover transform group-hover:scale-[1.05] transition-transform duration-500" />
                    </picture>
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

              {/* About Block */}
              <div className="mb-8 bg-gold/5 backdrop-blur-md p-5 sm:p-7 rounded-2xl border border-gold/20 shadow-sm max-w-2xl relative overflow-hidden group w-full">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold via-gold-light to-gold" />
                <div className="absolute top-0 right-0 w-16 h-16 bg-gold/10 rounded-full blur-lg pointer-events-none" />
                
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="h-4 w-4 text-gold animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-widest text-gold">{language === 'hi' ? 'डॉ. सौमिका सिंह के बारे में' : 'About Dr. Saumika Singh'}</span>
                </div>
                
                <div className="space-y-4 text-navy/80 text-sm leading-relaxed text-justify">
                  <p>
                    {language === 'hi' ? 'डॉ. सौमिका सिंह एक फेलोशिप-प्रशिक्षित ओकुलोप्लास्टी, ऑर्बिट और ओकुलर ऑन्कोलॉजी सर्जन हैं जो पलकों, लैक्रिमल, ऑर्बिटल विकारों और आंखों के कैंसर के प्रबंधन के लिए समर्पित हैं। उन्होंने कलकत्ता नेशनल मेडिकल कॉलेज, कोलकाता से एमबीबीएस पूरा किया, इसके बाद क्षेत्रीय नेत्र विज्ञान संस्थान, कोलकाता से नेत्र विज्ञान में एमएस किया। इसके बाद उन्होंने प्रतिष्ठित डॉ. श्रॉफ चैरिटी आई हॉस्पिटल, नई दिल्ली में ओकुलोप्लास्टी, ऑर्बिट और ओकुलर ऑन्कोलॉजी में उन्नत फेलोशिप प्रशिक्षण प्राप्त किया।' : 'Dr. Saumika Singh is a fellowship-trained Oculoplasty, Orbit and Ocular Oncology surgeon dedicated to the management of eyelid, lacrimal, orbital disorders and eye cancers. She completed her MBBS from Calcutta National Medical College, Kolkata, followed by an MS in Ophthalmology from the Regional Institute of Ophthalmology, Kolkata. She subsequently underwent advanced fellowship training in Oculoplasty, Orbit and Ocular Oncology at the prestigious Dr. Shroff\'s Charity Eye Hospital, New Delhi.'}
                  </p>
                  <p>
                    {language === 'hi' ? 'अपने पेशेवर करियर के दौरान, डॉ. सिंह ने हैदराबाद में एक तृतीयक नेत्र देखभाल केंद्र में एक सलाहकार के रूप में, चंद्रा सुपर स्पेशलिटी आई हॉस्पिटल, लखनऊ में एक सलाहकार के रूप में, और डॉ. अग्रवाल आई हॉस्पिटल, लखनऊ में एक विजिटिंग कंसल्टेंट ओकुलोप्लास्टी सर्जन के रूप में अपने काम के माध्यम से जटिल ओकुलोप्लास्टिक विकारों के निदान और सर्जिकल प्रबंधन में व्यापक अनुभव प्राप्त किया है। वह वर्तमान में लखनऊ में एक समर्पित स्वतंत्र ओकुलोप्लास्टी, ऑर्बिट और ओकुलर ऑन्कोलॉजी अभ्यास का नेतृत्व करती हैं।' : 'Over the course of her professional career, Dr. Singh has gained extensive experience in the diagnosis and surgical management of complex oculoplastic disorders through her work as a consultant at a tertiary eye care centre in Hyderabad, as a Consultant at Chandra Super Speciality Eye Hospital, Lucknow, and as a Visiting Consultant Oculoplasty Surgeon at Dr Agarwals Eye Hospital, Lucknow. She currently leads a dedicated independent Oculoplasty, Orbit and Ocular Oncology practice in Lucknow.'}
                  </p>
                </div>
              </div>
              
            </div>

            {/* Elegant Call to Actions */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-2 w-full">
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
              { icon: EyelidIcon, title: t('home.drooping'), desc: t('home.droopingDesc'), slug: 'eyelid-disorders-eyelid-surgery' },
              { icon: Droplets, title: t('home.watering'), desc: t('home.wateringDesc'), slug: 'watering-eyes-tear-drainage-disorders' },
              { icon: OrbitalIcon, title: t('home.artificialTitle'), desc: t('home.artificialDesc'), slug: 'orbital-disorders-orbital-surgery' },
              { icon: Ribbon, title: t('home.thyroid'), desc: t('home.thyroidDesc'), slug: 'eye-tumours-ocular-oncology' },
              { icon: SocketIcon, title: t('home.tumours'), desc: t('home.tumoursDesc'), slug: 'socket-reconstruction-artificial-eye-rehabilitation' },
              { icon: TraumaIcon, title: t('home.botox'), desc: t('home.botoxDesc'), slug: 'eye-trauma-eyelid-orbital-reconstruction' },
              { icon: Syringe, title: t('home.botoxCosmetic'), desc: t('home.botoxCosmeticDesc'), slug: 'botox-eyelid-cosmetic-surgery-periocular-aesthetics' },
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
                <Link to={`/services/${item.slug}`} aria-label={`Explore ${item.title}`} className="group flex flex-col items-center text-center px-3 py-5 sm:p-6 border border-gold/15 hover:border-gold/50 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 transition-all rounded-xl relative overflow-hidden bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-xl h-full pb-8">
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
                  <h3 className="text-sm sm:text-lg md:text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors duration-300 leading-tight w-full break-words hyphens-auto px-1">{item.title}</h3>
                  {item.desc && (
                    <p className="text-sm text-navy/70 leading-relaxed mb-4">
                      {item.desc}
                    </p>
                  )}
                  
                  <div className="mt-auto pt-4 text-[10px] sm:text-xs font-bold text-gold/80 tracking-wider uppercase flex flex-wrap items-center justify-center gap-1.5 group-hover:text-gold transition-all duration-300 text-center w-full break-words px-1">
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
        <Gallery isEmbedded={true} />
      </div>
      <div id="contact">
        <Contact isEmbedded={true} />
      </div>
    </div>
  );
}

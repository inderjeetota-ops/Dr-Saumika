import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact({ isEmbedded = false }: { isEmbedded?: boolean }) {
  const [phoneError, setPhoneError] = React.useState("");
  const { t, language } = useLanguage();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);
    const phoneValue = formData.get("phone") as string;
    
    // Remove spaces and hyphens
    const cleanPhone = phoneValue.replace(/[\s-]/g, '');
    
    // Regex for optional country code (+ or just numbers, max 3 digits) followed by exactly 10 digits
    const valid = /^(\+?\d{1,3})?\d{10}$/.test(cleanPhone);
    
    if (!valid) {
      e.preventDefault();
      setPhoneError(t('contact.phoneError'));
    } else {
      setPhoneError("");
    }
  };

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-ivory via-white to-ivory relative overflow-hidden">
      {/* Subtle Background Accent Lighting */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-navy-light/5 rounded-full blur-[120px] pointer-events-none" />
      
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
            <span>{language === 'en' ? 'Get In Touch' : 'संपर्क करें'}</span>
          </div>
          {isEmbedded ? (
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-4 tracking-tight">
              {t('contact.title')}
            </h2>
          ) : (
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-4 tracking-tight">
              {t('contact.title')}
            </h1>
          )}
          <p className="text-sm sm:text-base text-navy/70 max-w-2xl mx-auto leading-relaxed">
            {t('contact.desc')}
          </p>
          <div className="w-16 h-[3px] bg-gold mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-stretch">
          
          {/* Info Panels (Grid Span 5) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            {/* Primary Details Card */}
            <div className="bg-white/90 backdrop-blur-md p-6 sm:p-8 border border-gold/15 shadow-xl hover:shadow-2xl hover:border-gold/30 rounded-2xl transition-all duration-300 relative overflow-hidden group flex-1">
              {/* Premium Top Line Accent */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold via-gold-light to-gold" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full blur-xl pointer-events-none" />

              <h2 className="text-2xl font-bold text-navy mb-8 border-b border-gold/20 pb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-gold" />
                <span>{language === 'en' ? 'Clinic Details' : 'क्लिनिक विवरण'}</span>
              </h2>
              
              <div className="space-y-6 sm:space-y-8">
                {/* Address Row */}
                <div className="flex items-start group/row">
                  <div className="p-3 rounded-xl bg-gold/5 border border-gold/10 text-gold mr-4 group-hover/row:bg-gold/10 group-hover/row:border-gold/30 transition-all duration-300 flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy text-sm tracking-wider uppercase mb-1">{t('contact.addressTitle')}</h3>
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Alyantra+Medicity,+Vibhuti+Khand,+Gomti+Nagar,+Lucknow,+Uttar+Pradesh" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-navy/70 text-[15px] leading-relaxed hover:text-gold block transition-colors whitespace-pre-line"
                    >
                      {t('contact.address')}
                    </a>
                  </div>
                </div>

                {/* Hours Row */}
                <div className="flex items-start group/row">
                  <div className="p-3 rounded-xl bg-gold/5 border border-gold/10 text-gold mr-4 group-hover/row:bg-gold/10 group-hover/row:border-gold/30 transition-all duration-300 flex-shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy text-sm tracking-wider uppercase mb-1">{t('contact.hoursTitle')}</h3>
                    <p className="text-navy/70 text-[15px] leading-relaxed whitespace-pre-line">
                      {t('contact.hours')}
                    </p>
                  </div>
                </div>

                {/* Phone Row */}
                <div className="flex items-start group/row">
                  <div className="p-3 rounded-xl bg-gold/5 border border-gold/10 text-gold mr-4 group-hover/row:bg-gold/10 group-hover/row:border-gold/30 transition-all duration-300 flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy text-sm tracking-wider uppercase mb-1">{t('contact.phoneTitle')}</h3>
                    <a 
                      href="tel:+917460088838" 
                      className="text-navy/70 text-[15px] hover:text-gold block transition-colors font-medium"
                    >
                      {t('contact.phone')}
                    </a>
                  </div>
                </div>

                {/* Email Row */}
                <div className="flex items-start group/row">
                  <div className="p-3 rounded-xl bg-gold/5 border border-gold/10 text-gold mr-4 group-hover/row:bg-gold/10 group-hover/row:border-gold/30 transition-all duration-300 flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy text-sm tracking-wider uppercase mb-1">{t('contact.emailTitle')}</h3>
                    <a 
                      href="mailto:contact@drsaumika.in" 
                      className="text-navy/70 text-[15px] hover:text-gold block transition-colors font-medium"
                    >
                      {t('contact.email')}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons Grid */}
            <div className="grid grid-cols-2 gap-4">
              <a 
                href="https://wa.me/917460088838" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col sm:flex-row items-center gap-3 p-5 bg-[#25D366]/5 hover:bg-[#25D366]/10 border border-[#25D366]/20 hover:border-[#25D366]/40 rounded-xl transition-all duration-300 group justify-center text-center sm:text-left shadow-sm"
              >
                <div className="p-2.5 rounded-lg bg-[#25D366]/10 text-[#25D366] group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="h-6 w-6 fill-current" />
                </div>
                <div>
                  <span className="font-bold text-navy text-sm block">WhatsApp</span>
                  <span className="text-[10px] text-navy/50 font-medium block uppercase tracking-wider">{language === 'en' ? 'Quick Chat' : 'तुरंत चैट करें'}</span>
                </div>
              </a>
              
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Alyantra+Medicity,+Vibhuti+Khand,+Gomti+Nagar,+Lucknow,+Uttar+Pradesh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col sm:flex-row items-center gap-3 p-5 bg-navy/5 hover:bg-navy/10 border border-navy/10 hover:border-navy/20 rounded-xl transition-all duration-300 group justify-center text-center sm:text-left shadow-sm"
              >
                <div className="p-2.5 rounded-lg bg-navy/10 text-navy group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <span className="font-bold text-navy text-sm block">{language === 'en' ? 'Directions' : 'रास्ता देखें'}</span>
                  <span className="text-[10px] text-navy/50 font-medium block uppercase tracking-wider">{language === 'en' ? 'View Map' : 'नक्शा देखें'}</span>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Luxury Dark Form Panel (Grid Span 7) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 bg-gradient-to-br from-navy via-[#001d3d] to-[#000f24] p-8 md:p-10 shadow-2xl rounded-2xl relative overflow-hidden border border-[#001d3d]/50 flex flex-col justify-between"
          >
            {/* Ambient gold glow in form corner */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-gold via-gold-light to-gold" />

            <div>
              <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">
                {t('contact.reqAppt')}
              </h2>
              <p className="text-xs text-gold font-medium uppercase tracking-wider mb-8">
                {language === 'en' ? 'Direct Consultation Request' : 'सीधे परामर्श अनुरोध'}
              </p>

              <form className="space-y-6" action="https://api.web3forms.com/submit" method="POST" onSubmit={handleSubmit}>
                <input type="hidden" name="access_key" value="5318569a-ea1c-494f-a43b-bd4d8cc2d639" />
                <input type="hidden" name="subject" value="New Appointment Request - Dr. Saumika" />
                <input type="hidden" name="from_name" value="Website Contact Form" />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="contact_name" className="block text-xs font-semibold text-gold-light uppercase tracking-widest mb-2">
                      {t('contact.formName')}
                    </label>
                    <input 
                      id="contact_name"
                      type="text" 
                      name="name"
                      required
                      className="w-full bg-white/[0.04] border border-white/10 hover:border-white/20 focus:border-gold focus:ring-1 focus:ring-gold px-4 py-3.5 text-white placeholder-white/35 rounded-xl transition-all duration-300 text-sm focus:outline-none"
                      placeholder={t('contact.formNamePlaceholder')}
                    />
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label htmlFor="contact_phone" className="block text-xs font-semibold text-gold-light uppercase tracking-widest mb-2">
                      {t('contact.formPhone')}
                    </label>
                    <input 
                      id="contact_phone"
                      type="tel" 
                      name="phone"
                      required
                      className={`w-full bg-white/[0.04] border ${phoneError ? 'border-red-500' : 'border-white/10 hover:border-white/20'} focus:border-gold focus:ring-1 focus:ring-gold px-4 py-3.5 text-white placeholder-white/35 rounded-xl transition-all duration-300 text-sm focus:outline-none`}
                      placeholder="+91"
                    />
                    {phoneError && (
                      <p className="text-red-400 text-xs mt-2 font-medium">{phoneError}</p>
                    )}
                  </div>
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="contact_message" className="block text-xs font-semibold text-gold-light uppercase tracking-widest mb-2">
                    {t('contact.formMessage')}
                  </label>
                  <textarea 
                    id="contact_message"
                    name="message"
                    rows={4}
                    className="w-full bg-white/[0.04] border border-white/10 hover:border-white/20 focus:border-gold focus:ring-1 focus:ring-gold px-4 py-3.5 text-white placeholder-white/35 rounded-xl transition-all duration-300 text-sm focus:outline-none resize-none"
                    placeholder={t('contact.formMessagePlaceholder')}
                  ></textarea>
                </div>

                {/* Honeypot Spam Protection */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                {/* Premium Golden Submit Button */}
                <button 
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold text-navy font-bold uppercase tracking-widest text-sm rounded-xl transition-all duration-300 shadow-lg shadow-gold/10 hover:shadow-gold/25 transform active:scale-[0.98] cursor-pointer group mt-4"
                >
                  <span>{t('contact.formSubmit')}</span>
                  <Send className="h-4 w-4 transform group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

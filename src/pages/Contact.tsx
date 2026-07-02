import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, MessageCircle, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const [phoneError, setPhoneError] = React.useState("");
  const { t } = useLanguage();

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
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-ivory">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-bold tracking-widest uppercase text-sm mb-4">
            Get In Touch
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">{t('contact.title')}</h1>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-stretch">
          
          {/* Contact Details & Actions */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-white p-8 border border-navy/10 shadow-sm">
              <h2 className="text-2xl font-bold text-navy mb-8 border-b border-gold/20 pb-4">Clinic Details</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-gold mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-navy text-lg">{t('contact.addressTitle')}</h3>
                    <p className="text-navy/70 mt-1 whitespace-pre-line">{t('contact.address')}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-gold mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-navy text-lg">{t('contact.phoneTitle')}</h3>
                    <a href="tel:+917460088838" className="text-navy/70 mt-1 hover:text-gold block transition-colors">{t('contact.phone')}</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-gold mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-navy text-lg">{t('contact.emailTitle')}</h3>
                    <a href="mailto:contact@drsaumika.in" className="text-navy/70 mt-1 hover:text-gold block transition-colors">{t('contact.email')}</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              <a 
                href="https://wa.me/917460088838" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-6 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 transition-colors group"
              >
                <MessageCircle className="h-8 w-8 text-[#25D366] mb-3 group-hover:scale-110 transition-transform" />
                <span className="font-bold text-navy text-sm uppercase tracking-wider text-center">WhatsApp</span>
              </a>
              <a 
                href="https://maps.google.com/?q=Alyantra+Medicity+Lucknow" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-6 bg-navy/5 hover:bg-navy/10 border border-navy/20 transition-colors group"
              >
                <MapPin className="h-8 w-8 text-navy mb-3 group-hover:scale-110 transition-transform" />
                <span className="font-bold text-navy text-sm uppercase tracking-wider text-center">Directions</span>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-3 bg-navy p-8 md:p-10 h-full flex flex-col"
          >
            <h2 className="text-2xl font-bold text-gold mb-8">{t('contact.reqAppt')}</h2>
            <form className="flex-1 flex flex-col space-y-6" action="https://api.web3forms.com/submit" method="POST" onSubmit={handleSubmit}>
              <input type="hidden" name="access_key" value="5318569a-ea1c-494f-a43b-bd4d8cc2d639" />
              <input type="hidden" name="subject" value="New Appointment Request - Dr. Saumika" />
              <input type="hidden" name="from_name" value="Website Contact Form" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-ivory/80 uppercase tracking-wider mb-2">{t('contact.formName')}</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    className="w-full bg-ivory/5 border border-ivory/20 px-4 py-3 text-ivory focus:outline-none focus:border-gold transition-colors"
                    placeholder={t('contact.formNamePlaceholder')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ivory/80 uppercase tracking-wider mb-2">{t('contact.formPhone')}</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    className={`w-full bg-ivory/5 border ${phoneError ? 'border-red-500' : 'border-ivory/20'} px-4 py-3 text-ivory focus:outline-none focus:border-gold transition-colors`}
                    placeholder="+91"
                  />
                  {phoneError && (
                    <p className="text-red-400 text-sm mt-2">{phoneError}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-ivory/80 uppercase tracking-wider mb-2">{t('contact.formMessage')}</label>
                <textarea 
                  name="message"
                  rows={4}
                  className="w-full bg-ivory/5 border border-ivory/20 px-4 py-3 text-ivory focus:outline-none focus:border-gold transition-colors"
                  placeholder={t('contact.formMessagePlaceholder')}
                ></textarea>
              </div>

              {/* Honeypot Spam Protection */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              <button 
                type="submit"
                className="mt-auto w-full flex items-center justify-center px-8 py-4 bg-gold text-navy font-bold uppercase tracking-wider hover:bg-gold-light transition-colors"
              >
                <span>{t('contact.formSubmit')}</span>
                <Send className="ml-3 h-5 w-5" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-navy text-ivory pt-16 pb-8 border-t-4 border-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          
          <div>
            <h3 className="text-xl font-bold text-gold tracking-wide mb-6">
              {t('home.drName').replace('\n', ' ')}
            </h3>
            <p className="text-ivory-dark/80 max-w-sm">
              {t('home.subtitle')}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gold mb-6 uppercase tracking-wider">
              {t('footer.quickLinks')}
            </h3>
            <div className="flex flex-row gap-4 sm:gap-6 justify-between items-start">
              <ul className="space-y-4 text-base sm:text-lg">
                <li><Link to="/#conditions" className="hover:text-gold transition-colors block">{t('nav.conditions')}</Link></li>
                <li><Link to="/#gallery" className="hover:text-gold transition-colors block">{t('nav.gallery')}</Link></li>
                <li><Link to="/#contact" className="hover:text-gold transition-colors block">{t('nav.contact')}</Link></li>
              </ul>
              <div className="bg-white p-2 rounded-lg flex-shrink-0">
                <img src="/qr-code.png" alt="QR Code" className="w-20 h-20 lg:w-24 lg:h-24" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gold mb-6 uppercase tracking-wider">
              {t('footer.contactInfo')}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gold mr-3 flex-shrink-0 mt-1" />
                <a href="https://www.google.com/maps/search/?api=1&query=Alyantra+Medicity,+Vibhuti+Khand,+Gomti+Nagar,+Lucknow,+Uttar+Pradesh" target="_blank" rel="noopener noreferrer" className="text-ivory-dark/90 whitespace-pre-line hover:text-gold transition-colors">
                  {t('contact.address')}
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gold mr-3 flex-shrink-0" />
                <a href="tel:+917460088838" className="hover:text-gold transition-colors">
                  {t('contact.phone')}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gold mr-3 flex-shrink-0" />
                <a href="mailto:contact@drsaumika.in" className="hover:text-gold transition-colors">
                  {t('contact.email')}
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center text-sm text-ivory-dark/60">
          <p>&copy; {new Date().getFullYear()} {t('home.drName').replace('\n', ' ')}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

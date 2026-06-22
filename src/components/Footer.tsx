import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-navy text-ivory pt-16 pb-8 border-t-4 border-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div>
            <h3 className="text-xl font-bold text-gold tracking-wide mb-6">
              Dr. Saumika Singh
            </h3>
            <p className="text-ivory-dark/80 max-w-sm">
              Oculoplasty, Orbit & Ocular Oncology Surgeon. Specialized care tailored for facial and ocular aesthetics and reconstruction.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gold mb-6 uppercase tracking-wider">
              Quick Links
            </h3>
            <div className="flex justify-between items-start">
              <ul className="space-y-4 text-lg whitespace-nowrap">
                <li><a href="/#conditions" className="hover:text-gold transition-colors block">Conditions Treated</a></li>
                <li><a href="/#gallery" className="hover:text-gold transition-colors block">Gallery</a></li>
                <li><a href="/#contact" className="hover:text-gold transition-colors block">Contact Us</a></li>
              </ul>
              <div className="bg-white p-2 rounded-lg flex-shrink-0">
                <img src="/qr-code.png" alt="QR Code" className="w-24 h-24" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gold mb-6 uppercase tracking-wider">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gold mr-3 flex-shrink-0 mt-1" />
                <span className="text-ivory-dark/90">
                  Associated with Alyantra Medicity,<br />
                  Lucknow
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gold mr-3 flex-shrink-0" />
                <a href="tel:+917460088838" className="hover:text-gold transition-colors">
                  +91 7460088838
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gold mr-3 flex-shrink-0" />
                <a href="mailto:contact@drsaumika.in" className="hover:text-gold transition-colors">
                  contact@drsaumika.in
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center text-sm text-ivory-dark/60">
          <p>&copy; {new Date().getFullYear()} Dr. Saumika Singh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, MessageCircle, Send } from 'lucide-react';

export default function Contact() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">Contact & Appointments</h1>
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
                    <h3 className="font-bold text-navy text-lg">Location</h3>
                    <p className="text-navy/70 mt-1">Associated with Alyantra Medicity,<br />Lucknow</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-gold mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-navy text-lg">Phone</h3>
                    <a href="tel:+917460088838" className="text-navy/70 mt-1 hover:text-gold block transition-colors">+91 7460088838</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-gold mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-navy text-lg">Email</h3>
                    <a href="mailto:contact@drsaumika.in" className="text-navy/70 mt-1 hover:text-gold block transition-colors">contact@drsaumika.in</a>
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
            <h2 className="text-2xl font-bold text-gold mb-8">Request an Appointment</h2>
            <form className="flex-1 flex flex-col space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-ivory/80 uppercase tracking-wider mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-ivory/5 border border-ivory/20 px-4 py-3 text-ivory focus:outline-none focus:border-gold transition-colors"
                    placeholder="Sachin Kumar"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ivory/80 uppercase tracking-wider mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full bg-ivory/5 border border-ivory/20 px-4 py-3 text-ivory focus:outline-none focus:border-gold transition-colors"
                    placeholder="+91"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-ivory/80 uppercase tracking-wider mb-2">Message (Optional)</label>
                <textarea 
                  rows={4}
                  className="w-full bg-ivory/5 border border-ivory/20 px-4 py-3 text-ivory focus:outline-none focus:border-gold transition-colors"
                  placeholder="Tell us briefly about your condition..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="mt-auto w-full flex items-center justify-center px-8 py-4 bg-gold text-navy font-bold uppercase tracking-wider hover:bg-gold-light transition-colors"
              >
                <span>Submit Request</span>
                <Send className="ml-3 h-5 w-5" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

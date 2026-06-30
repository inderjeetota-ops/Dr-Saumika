import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { AnimatePresence, motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: t('nav.home'), path: '#home' },
    { name: t('nav.conditions'), path: '#conditions' },
    { name: t('nav.gallery'), path: '#gallery' },
    { name: t('nav.contact'), path: '#contact' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
      }
    );

    navLinks.forEach((link) => {
      const element = document.querySelector(link.path);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    const id = path.replace('#', '');
    const element = document.getElementById(id);
    
    // If element exists (we are on home page), scroll manually
    if (element) {
      e.preventDefault();
      setIsOpen(false);
      
      // Allow menu to close before scrolling
      setTimeout(() => {
        const offsetPosition = element.offsetTop - 80; // Account for navbar height
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
        window.history.pushState(null, '', `/${path}`);
      }, 150);
    } else {
      // Allow natural navigation and close menu
      setIsOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gold/20 bg-ivory/90 backdrop-blur-md">
      {/* Top Bar for Language */}
      <div className="bg-navy py-1.5 border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end">
          <div className="flex bg-ivory/10 rounded-sm p-0.5">
            <button
              onClick={() => setLanguage('en')}
              className={cn(
                "px-3 py-1 text-xs font-bold transition-colors rounded-sm",
                language === 'en' ? "bg-ivory text-navy" : "text-ivory/70 hover:text-ivory"
              )}
            >
              English
            </button>
            <button
              onClick={() => setLanguage('hi')}
              className={cn(
                "px-3 py-1 text-xs font-bold transition-colors rounded-sm",
                language === 'hi' ? "bg-ivory text-navy" : "text-ivory/70 hover:text-ivory"
              )}
            >
              हिंदी
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center mr-4">
            <Link to="/" className="text-xl lg:text-2xl font-bold text-[#002246] tracking-tight whitespace-nowrap">
              Dr. Saumika<span className="text-[#012b4e]"> Singh</span>
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-4 lg:space-x-8 items-center justify-end">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={`/${link.path}`}
                onClick={(e) => handleLinkClick(e, link.path)}
                className={cn(
                  "text-xs lg:text-sm uppercase tracking-wide font-medium transition-colors whitespace-nowrap hover:text-gold",
                  activeSection === link.path
                    ? "text-gold border-b-2 border-gold pb-1"
                    : "text-navy"
                )}
              >
                {link.name}
              </a>
            ))}

            <a 
              href="/#contact" 
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="px-4 py-2 lg:px-5 lg:py-2.5 bg-navy text-ivory text-xs lg:text-sm uppercase tracking-wide font-medium whitespace-nowrap hover:bg-navy-light transition-colors"
            >
              {t('nav.bookNow')}
            </a>
          </div>

          {/* Mobile Nav Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-navy hover:text-gold focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gold/20 bg-ivory"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.path}
                  href={`/${link.path}`}
                  onClick={(e) => handleLinkClick(e, link.path)}
                  className={cn(
                    "block px-3 py-3 rounded-md text-base font-medium transition-colors",
                    activeSection === link.path
                      ? "text-gold bg-gold/5"
                      : "text-navy hover:text-gold hover:bg-gold/5"
                  )}
                >
                  {link.name}
                </a>
              ))}
              <div className="mt-4 px-3">
                <a
                  href="/#contact"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  className="block w-full text-center px-5 py-3 bg-navy text-ivory font-medium uppercase tracking-wide hover:bg-navy-light transition-colors"
                >
                  {t('nav.bookNow')}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

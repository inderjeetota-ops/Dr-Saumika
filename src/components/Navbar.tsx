import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { cn } from '../lib/utils';
import { AnimatePresence, motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navLinks = [
    { name: t('nav.home'), path: '#home' },
    { name: t('nav.conditions'), path: '#conditions' },
    { name: t('nav.gallery'), path: '#gallery' },
    { name: t('nav.contact'), path: '#contact' },
  ];

  // Robust function to calculate and update active section
  const updateActiveSectionOnScroll = () => {
    if (location.pathname !== '/') return;

    // 1. Bottom of page extreme check
    const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
    if (isAtBottom) {
      setActiveSection('#contact');
      return;
    }

    // 2. Top of page extreme check
    if (window.scrollY < 50) {
      setActiveSection('#home');
      return;
    }

    // 3. Middle sections check
    const sections = ['home', 'conditions', 'gallery', 'contact'];
    let currentSection = '#home';
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        // If the section top is above or near the active viewport trigger point (120px from top)
        if (rect.top <= 120) {
          currentSection = `#${id}`;
        }
      }
    }
    setActiveSection(currentSection);
  };

  // Synchronize active section state on initial load or path/hash updates
  useEffect(() => {
    if (location.pathname === '/') {
      setActiveSection(location.hash || '#home');
    }
  }, [location.pathname, location.hash]);

  // Handle manual scrolls with our high-precision spy
  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingRef.current) return;
      updateActiveSectionOnScroll();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run initial check
    updateActiveSectionOnScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setIsOpen(false);
    setActiveSection(path);
    
    isScrollingRef.current = true;
    
    if (location.pathname !== '/') {
      // If we are not on the home page, navigate to home with the hash
      navigate(`/${path}`);
    } else {
      // If on home page, scroll to element
      const id = path.replace('#', '');
      const element = document.getElementById(id);
      
      if (element) {
        const offsetPosition = Math.max(0, element.getBoundingClientRect().top + window.scrollY - 80);
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
        
        // Update URL without full page reload, using React Router
        navigate(`/${path}`, { replace: true });
        
        // Timeout to re-enable scroll spy and ensure the correct item is selected at the destination
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = setTimeout(() => {
          isScrollingRef.current = false;
          updateActiveSectionOnScroll();
        }, 800);
      } else {
        isScrollingRef.current = false;
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gold/10 bg-ivory/80 backdrop-blur-lg shadow-sm">
      {/* Top Bar for Language */}
      <div className="bg-navy py-2 border-b border-gold/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end">
          <div className="flex items-center space-x-3">
            <div className="flex items-center text-ivory/60 space-x-1.5">
              <Globe className="w-3.5 h-3.5 text-gold/80" />
              <span className="text-[10px] uppercase tracking-wider font-bold text-ivory/75">Language:</span>
            </div>
            <div className="relative flex bg-white/5 border border-white/10 rounded-full p-0.5 shadow-inner">
              <button
                onClick={() => setLanguage('en')}
                aria-label="Switch language to English"
                className={cn(
                  "relative z-10 px-3.5 py-1 text-xs font-bold transition-colors duration-300 rounded-full focus:outline-none",
                  language === 'en' ? "text-navy font-extrabold" : "text-ivory/70 hover:text-ivory"
                )}
              >
                {language === 'en' && (
                  <motion.span
                    layoutId="active-language-indicator"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 bg-ivory rounded-full -z-10 shadow-sm"
                  />
                )}
                <span className="relative z-10">English</span>
              </button>
              <button
                onClick={() => setLanguage('hi')}
                aria-label="Switch language to Hindi"
                className={cn(
                  "relative z-10 px-3.5 py-1 text-xs font-bold transition-colors duration-300 rounded-full focus:outline-none",
                  language === 'hi' ? "text-navy font-extrabold" : "text-ivory/70 hover:text-ivory"
                )}
              >
                {language === 'hi' && (
                  <motion.span
                    layoutId="active-language-indicator"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 bg-ivory rounded-full -z-10 shadow-sm"
                  />
                )}
                <span className="relative z-10">हिंदी</span>
              </button>
            </div>
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
                  "text-xs lg:text-sm uppercase tracking-wide font-medium transition-colors whitespace-nowrap hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-ivory rounded-sm",
                  activeSection === link.path && location.pathname === '/'
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
              className="px-4 py-2 lg:px-5 lg:py-2.5 bg-navy text-ivory text-xs lg:text-sm uppercase tracking-wide font-medium whitespace-nowrap hover:bg-navy-light transition-colors focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2 focus:ring-offset-ivory rounded-sm"
            >
              {t('nav.bookNow')}
            </a>
          </div>

          {/* Mobile Nav Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="text-navy hover:text-gold focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gold/20 bg-ivory/95 backdrop-blur-lg shadow-inner"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.path}
                  href={`/${link.path}`}
                  onClick={(e) => handleLinkClick(e, link.path)}
                  className={cn(
                    "block px-3 py-3 rounded-md text-base font-medium transition-colors",
                    activeSection === link.path && location.pathname === '/'
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

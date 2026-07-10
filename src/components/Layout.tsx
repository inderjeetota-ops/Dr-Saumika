import React, { useLayoutEffect, useRef } from 'react';
import { Outlet, useLocation, useNavigationType } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { AnimatePresence, motion } from 'motion/react';

function PageScrollManager() {
  const location = useLocation();
  const navType = useNavigationType();
  const prevPathnameRef = useRef(location.pathname);
  const prevHashRef = useRef(location.hash);
  const isFirstRenderRef = useRef(true);

  useLayoutEffect(() => {
    const { pathname, hash, state } = location;
    const isFirstRender = isFirstRenderRef.current;
    isFirstRenderRef.current = false;

    // If navigation is a 'POP' (e.g. browser back button), let browser handle scroll restoration
    if (navType === 'POP') {
      prevPathnameRef.current = pathname;
      prevHashRef.current = hash;
      return;
    }

    const isSamePage = prevPathnameRef.current === pathname;
    const isHashChanging = prevHashRef.current !== hash;
    const fromNavbar = (state as any)?.fromNavbar;

    prevPathnameRef.current = pathname;
    prevHashRef.current = hash;

    // If it's a same-page hash change and it came from navbar, navbar already handles smooth scrolling
    if (isSamePage && isHashChanging && fromNavbar) {
      return;
    }

    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      const behavior = isFirstRender ? 'auto' : (isSamePage ? 'smooth' : 'auto');
      
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - 80; // Account for navbar height
        window.scrollTo({
          top: offsetPosition,
          behavior
        });
      } else {
        // Fallback with a slight delay if element is not immediately available
        requestAnimationFrame(() => {
          const delayedElement = document.getElementById(id);
          if (delayedElement) {
            const elementPosition = delayedElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - 80;
            window.scrollTo({
              top: offsetPosition,
              behavior
            });
          }
        });
      }
    } else {
      // For different-page transitions or clicking back to a page without a hash, scroll to top
      if (!isSamePage) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'auto'
        });
      } else if (isHashChanging) {
        // Same-page, hash cleared
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: isFirstRender ? 'auto' : 'smooth'
        });
      }
    }
  }, [location, navType]);

  return null;
}

export function Layout() {
  const location = useLocation();
  
  return (
    <div className="min-h-screen flex flex-col bg-ivory text-navy font-sans">
      <Navbar />
      <main className="flex-grow relative">
        <PageScrollManager />
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="h-full"
        >
          <Outlet />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

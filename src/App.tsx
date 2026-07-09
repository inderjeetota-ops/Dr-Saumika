/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useLayoutEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigationType } from 'react-router-dom';
import { Layout } from './components/Layout';
import { LanguageProvider } from './context/LanguageContext';

const Home = lazy(() => import('./pages/Home'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const NotFound = lazy(() => import('./pages/NotFound'));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-ivory">
      <div className="w-12 h-12 border-4 border-navy/10 border-t-gold rounded-full animate-spin"></div>
    </div>
  );
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navType = useNavigationType();

  useLayoutEffect(() => {
    // If navigation is a 'POP' (e.g. browser back button), let browser handle scroll restoration
    if (navType === 'POP') {
      return;
    }

    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - 80; // Account for navbar height
        window.scrollTo({
          top: offsetPosition,
          behavior: 'instant'
        });
      } else {
        // Fallback with a slight delay if element is not immediately available
        requestAnimationFrame(() => {
          const delayedElement = document.getElementById(id);
          if (delayedElement) {
            const elementPosition = delayedElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - 80;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'instant'
            });
          }
        });
      }
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={
              <Suspense fallback={<PageLoader />}>
                <Home />
              </Suspense>
            } />
            <Route path="gallery" element={
              <Suspense fallback={<PageLoader />}>
                <Gallery />
              </Suspense>
            } />
            <Route path="contact" element={
              <Suspense fallback={<PageLoader />}>
                <Contact />
              </Suspense>
            } />
            <Route path="services/:id" element={
              <Suspense fallback={<PageLoader />}>
                <ServiceDetail />
              </Suspense>
            } />
            <Route path="*" element={
              <Suspense fallback={<PageLoader />}>
                <NotFound />
              </Suspense>
            } />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

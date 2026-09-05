/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LazyMotion, domAnimation } from 'motion/react';
import { Layout } from './components/Layout';
import { LanguageProvider } from './context/LanguageContext';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home'; // eager — primary landing page, keep it instant

// Lazy routes: each becomes its own chunk, downloaded only when the route is visited.
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const SurgicalOutcomes = lazy(() => import('./pages/SurgicalOutcomes'));
const SurgicalOutcomeDetail = lazy(() => import('./pages/SurgicalOutcomeDetail'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <LazyMotion features={domAnimation} strict>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="conditions" element={<Navigate to="/#conditions" replace />} />
              <Route path="gallery" element={<GalleryPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="services/:id" element={<ServiceDetail />} />
              <Route path="surgical-outcomes" element={<SurgicalOutcomes />} />
              <Route path="surgical-outcomes/:slug" element={<SurgicalOutcomeDetail />} />

              <Route path="hi" element={<Home />} />
              <Route path="hi/gallery" element={<GalleryPage />} />
              <Route path="hi/contact" element={<ContactPage />} />
              <Route path="hi/services/:id" element={<ServiceDetail />} />
              <Route path="hi/surgical-outcomes" element={<SurgicalOutcomes />} />
              <Route path="hi/surgical-outcomes/:slug" element={<SurgicalOutcomeDetail />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </LazyMotion>
      </LanguageProvider>
    </BrowserRouter>
  );
}

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';

const serviceKeys: Record<string, { titleKey: string; descKey: string; features: string[] }> = {
  'drooping-eyelids': {
    titleKey: 'home.drooping',
    descKey: 'home.droopingDesc',
    features: ['pt.f1', 'pt.f2', 'pt.f3']
  },
  'watering-eyes': {
    titleKey: 'home.watering',
    descKey: 'home.wateringDesc',
    features: ['we.f1', 'we.f2', 'we.f3']
  },
  'artificial-eye': {
    titleKey: 'home.artificialTitle',
    descKey: 'home.artificialDesc',
    features: ['ae.f1', 'ae.f2', 'ae.f3']
  },
  'thyroid-eye-disease': {
    titleKey: 'home.thyroid',
    descKey: 'home.thyroidDesc',
    features: ['te.f1', 'te.f2', 'te.f3']
  },
  'tumours': {
    titleKey: 'home.tumours',
    descKey: 'home.tumoursDesc',
    features: ['tu.f1', 'tu.f2', 'tu.f3']
  },
  'botox-aesthetics': {
    titleKey: 'home.botox',
    descKey: 'home.botoxDesc',
    features: ['ba.f1', 'ba.f2', 'ba.f3']
  }
};

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();

  const service = id ? serviceKeys[id] : null;

  if (!service) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-8">
        <SEO title="Service Not Found" description="The requested service could not be found." />
        <h2 className="text-3xl font-bold text-navy mb-4">Service Not Found</h2>
        <Link to="/" className="text-gold font-bold hover:text-navy transition-colors">
          &larr; Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <SEO 
        title={t(service.titleKey)} 
        description={t(service.descKey)} 
      />
      <div className="w-full max-w-[1200px] mx-auto p-4 md:p-8">
        <Link to="/" className="inline-flex items-center text-navy/60 hover:text-gold transition-colors mb-8 font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t('nav.home')}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bento-card bg-white p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
          
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-navy mb-6">
              {t(service.titleKey)}
            </h1>
            <p className="text-lg md:text-xl text-navy-light mb-10 leading-relaxed">
              {t(service.descKey)}
            </p>

            <div className="bg-ivory-dark/30 border border-gold/20 p-6 md:p-8 rounded-sm mb-10">
              <h3 className="text-xl font-bold text-navy mb-6">Treatment & Care Overview</h3>
              <ul className="space-y-4">
                {service.features.map((featureKey, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-navy/80">{t(featureKey) || 'Detailed care and comprehensive evaluation.'}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link 
              to="/#contact" 
              className="inline-block px-8 py-4 bg-navy text-ivory text-center font-bold uppercase tracking-wider hover:bg-navy-light transition-colors"
            >
              {t('home.bookConsultation')}
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

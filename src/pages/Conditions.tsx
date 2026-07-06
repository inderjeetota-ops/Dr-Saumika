import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

const conditionsList = {
  en: [
    {
      category: "Eyelid Disorders",
      items: [
        "Drooping eyelids (Ptosis)",
        "Eyelid swelling or lumps",
        "Recurrent stye/chalazion",
        "Eyelid cysts and skin growths",
        "In-turning or out-turning eyelids",
        "Loose or sagging eyelids",
        "Eyelid injuries and trauma"
      ]
    },
    {
      category: "Watering Problems",
      items: [
        "Constant watering from the eyes",
        "Blocked tear duct (Nasolacrimal duct obstruction)",
        "Recurrent infections near the inner corner of the eye (Dacryocystitis)"
      ]
    },
    {
      category: "Eye Socket (Orbit) Problems",
      items: [
        "Bulging or protruding eyes",
        "Thyroid eye disease",
        "Orbital tumours or orbital swelling",
        "Eye displacement or sunken eye",
        "Orbital fractures"
      ]
    },
    {
      category: "Ocular Surface & Eye Tumours",
      items: [
        "White, pink or pigmented growths on the eye surface",
        "Conjunctival papilloma",
        "Conjunctival nevus (eye mole)",
        "Ocular surface tumours",
        "Eyelid tumours or suspicious pigmented lesions"
      ]
    },
    {
      category: "Eye Removal & Artificial Eye Rehabilitation",
      items: [
        "Shrunken, blind or disfigured eye",
        "Eye loss due to trauma, infection or tumour",
        "Artificial eye (prosthesis) fitting",
        "Socket reconstruction and rehabilitation"
      ]
    },
    {
      category: "Cosmetic & Reconstructive Procedures",
      items: [
        "Eyelid reconstruction after trauma or tumour removal",
        "Scar revision around the eyes",
        "Correction of eyelid deformities"
      ]
    }
  ],
  hi: [
    {
      category: "पलकों के रोग (Eyelid Disorders)",
      items: [
        "झुकी हुई पलकें (Ptosis)",
        "पलक में सूजन या गांठ",
        "बार-बार होने वाली गुहेरी (Stye/Chalazion)",
        "पलकों के अल्सर और त्वचा पर वृद्धि",
        "अंदर या बाहर मुड़ी हुई पलकें",
        "ढीली या लटकती पलकें",
        "पलकों की चोट और आघात"
      ]
    },
    {
      category: "आंखों से पानी आना (Watering Problems)",
      items: [
        "आंखों से लगातार पानी आना",
        "अवरुद्ध आंसू नलिका (Nasolacrimal duct obstruction)",
        "आंख के भीतरी कोने के पास बार-बार संक्रमण (Dacryocystitis)"
      ]
    },
    {
      category: "नेत्र गुहा (Orbit) की समस्याएं",
      items: [
        "उभरी हुई या बाहर निकली हुई आंखें",
        "थायरॉइड नेत्र रोग",
        "ऑर्बिटल ट्यूमर या ऑर्बिटल सूजन",
        "आंख का विस्थापन या धंसी हुई आंख",
        "ऑर्बिटल फ्रैक्चर"
      ]
    },
    {
      category: "ओकुलर सरफेस और आई ट्यूमर",
      items: [
        "आंख की सतह पर सफेद, गुलाबी या रंगद्रव्य युक्त वृद्धि",
        "कंजंक्टाइवल पेपिलोमा (Conjunctival papilloma)",
        "कंजंक्टाइवल नेवस (नेत्र तिल)",
        "ओकुलर सतह के ट्यूमर",
        "पलक के ट्यूमर या संदिग्ध घाव"
      ]
    },
    {
      category: "आंख निकालना और कृत्रिम आंख पुनर्वास",
      items: [
        "सिकुड़ी, अंधी या विकृत आंख",
        "आघात, संक्रमण या ट्यूमर के कारण आंख खोना",
        "कृत्रिम आंख (प्रोस्थेसिस) फिटिंग",
        "सॉकेट पुनर्निर्माण और पुनर्वास"
      ]
    },
    {
      category: "कॉस्मेटिक और पुनर्निर्माण प्रक्रियाएं",
      items: [
        "आघात या ट्यूमर हटाने के बाद पलक का पुनर्निर्माण",
        "आंखों के आसपास के निशान में सुधार",
        "पलकों की विकृति का सुधार"
      ]
    }
  ]
};

export default function Conditions() {
  const { language, t } = useLanguage();
  const list = conditionsList[language];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-ivory">
      <SEO title={t('cond.title')} description="Explore the various conditions treated by our oculoplasty specialists." />
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-bold tracking-widest uppercase text-sm mb-4">
            Expertise
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">{t('cond.title')}</h1>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {list.map((section, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 border border-navy/5 shadow-sm hover:shadow-md transition-shadow"
            >
              <h2 className="text-2xl font-bold text-navy mb-6 border-b border-gold/30 pb-4">
                {section.category}
              </h2>
              <ul className="space-y-4">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-gold mr-3 mt-[2px] text-xl leading-none">&bull;</span>
                    <span className="text-navy/80 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { motion } from 'motion/react';

const conditionsList = [
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
];

export default function Conditions() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-ivory">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-bold tracking-widest uppercase text-sm mb-4">
            Expertise
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">Conditions Treated</h1>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {conditionsList.map((section, idx) => (
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

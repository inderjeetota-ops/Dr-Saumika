import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import type { SurgicalCase } from '../data/surgicalOutcomes';

export default function SurgicalCaseCard({ c }: { c: SurgicalCase; key?: React.Key }) {
  const { language, t } = useLanguage();
  const prefix = language === 'hi' ? '/hi' : '';
  const L = (s: { en: string; hi: string }) => (language === 'hi' ? s.hi : s.en);
  const cover = c.stages[0];
  return (
    <Link
      to={`${prefix}/surgical-outcomes/${c.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#C5A059] h-full relative"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#C5A059] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 z-10" />
      <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
        <img
          src={`/surgical-outcomes/${c.slug}/${cover.image}`}
          width={cover.width}
          height={cover.height}
          alt={L(cover.alt)}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 bg-[#002147]/90 backdrop-blur-sm text-white font-bold uppercase tracking-widest text-[10px] px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5 border border-white/20 group-hover:bg-[#C5A059] transition-colors duration-300 z-10 opacity-90 hover:opacity-100">
          <span>{language === 'hi' ? 'विस्तार से देखें' : 'Click to Explore'}</span>
          <ArrowRight className="h-3 w-3 transform group-hover:translate-x-0.5 transition-transform duration-300" />
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex flex-wrap gap-2">
          {c.tags.map((tag) => (
            <span key={tag.en} className="rounded-full bg-[#eef1f8] px-2.5 py-0.5 text-xs font-medium text-[#002147]">{L(tag)}</span>
          ))}
        </div>
        <h3 className="mt-3 text-lg font-semibold text-[#002147] group-hover:text-[#C5A059] transition-colors duration-300">{L(c.title)}</h3>
        <p className="mt-1 text-sm italic text-gray-600">{L(c.technique)}</p>
      </div>
    </Link>
  );
}

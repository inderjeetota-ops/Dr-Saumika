import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import type { SurgicalCase } from '../data/surgicalOutcomes';

export default function SurgicalCaseCard({ c }: { c: SurgicalCase }) {
  const { language } = useLanguage();
  const prefix = language === 'hi' ? '/hi' : '';
  const L = (s: { en: string; hi: string }) => (language === 'hi' ? s.hi : s.en);
  const cover = c.stages[0];
  return (
    <Link
      to={`${prefix}/surgical-outcomes/${c.slug}`}
      className="group block overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
    >
      <div className="aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={`/surgical-outcomes/${c.slug}/${cover.image}`}
          width={cover.width}
          height={cover.height}
          alt={L(cover.alt)}
          loading="lazy"
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <div className="flex flex-wrap gap-2">
          {c.tags.map((tag) => (
            <span key={tag.en} className="rounded-full bg-[#eef1f8] px-2.5 py-0.5 text-xs font-medium text-[#002147]">{L(tag)}</span>
          ))}
        </div>
        <h3 className="mt-3 text-lg font-semibold text-[#002147]">{L(c.title)}</h3>
        <p className="mt-1 text-sm italic text-gray-600">{L(c.technique)}</p>
      </div>
    </Link>
  );
}

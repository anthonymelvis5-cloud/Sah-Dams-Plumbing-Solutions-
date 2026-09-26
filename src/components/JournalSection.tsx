import React from 'react';
import { JOURNAL_ARTICLES } from '../data/realEstateData';
import { JournalArticle } from '../types/realEstate';
import { ArrowUpRight, Clock, Calendar } from 'lucide-react';

interface JournalSectionProps {
  onSelectArticle: (article: JournalArticle) => void;
}

export const JournalSection: React.FC<JournalSectionProps> = ({ onSelectArticle }) => {
  return (
    <section id="journal" className="py-28 bg-[#0b0c0e] border-b border-[#1f242d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#c5a880]" />
              <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-[#c5a880]">
                Market Insights & Perspectives
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-[#f9f7f4] tracking-tight">
              The Aurevia Journal
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#a39784] font-light leading-relaxed">
            Thought leadership covering international residential architecture, prime market valuation, and sovereign asset preservation.
          </p>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {JOURNAL_ARTICLES.map((article) => (
            <article
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="group bg-[#111318] border border-[#222731] hover:border-[#c5a880]/50 transition-all duration-300 flex flex-col justify-between cursor-pointer shadow-lg"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#181b22] border-b border-[#20252e]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#f4efe8] bg-[#0b0c0e]/85 backdrop-blur-md px-3 py-1 border border-[#333a46]/60">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-7">
                  <div className="flex items-center gap-3 text-[11px] font-mono text-[#a39784] mb-3">
                    <span>{article.date}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif font-normal text-[#f4efe8] group-hover:text-[#dfc6a3] transition-colors mb-3 leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-[#8f8576] font-light leading-relaxed line-clamp-3 mb-6">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Read Article Trigger */}
              <div className="px-7 pb-7 pt-4 border-t border-[#1d222a] flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.18em] font-semibold text-[#c5a880] group-hover:text-[#dfc6a3] transition-colors flex items-center gap-1.5">
                  <span>Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
                <span className="text-[10px] text-[#786f62] font-mono">Editorial</span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

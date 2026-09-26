import React from 'react';
import { JournalArticle } from '../types/realEstate';
import { X, Clock, Calendar, Share2, BookOpen } from 'lucide-react';

interface JournalArticleModalProps {
  article: JournalArticle | null;
  onClose: () => void;
}

export const JournalArticleModal: React.FC<JournalArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#07080a]/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#101216] border border-[#2a2f3a] text-[#f4efe8] max-w-3xl w-full my-auto shadow-2xl relative max-h-[92vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#20252e] bg-[#0b0c0e]/95 shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-[0.24em] font-mono text-[#c5a880]">
              Aurevia Journal
            </span>
            <span className="text-[#333a46]">·</span>
            <span className="text-xs text-[#a39784]">{article.category}</span>
          </div>

          <button
            onClick={onClose}
            className="text-[#a39784] hover:text-[#f4efe8] p-1.5 transition-colors cursor-pointer"
            aria-label="Close Article"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Article Body */}
        <div className="overflow-y-auto flex-1 p-6 sm:p-10 space-y-8">
          
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-xs font-mono text-[#a39784]">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#c5a880]" />
                {article.date}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#c5a880]" />
                {article.readTime}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#f9f7f4] font-normal leading-tight">
              {article.title}
            </h2>

            <div className="pt-2 flex items-center gap-3 text-xs text-[#c4b9a8]">
              <span className="font-serif italic text-base text-[#dfc6a3]">{article.author.name}</span>
              <span>—</span>
              <span className="text-[#8f8576] uppercase tracking-wider text-[10px]">{article.author.role}</span>
            </div>
          </div>

          <div className="aspect-[16/9] overflow-hidden border border-[#222731]">
            <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
          </div>

          <div className="text-sm sm:text-base text-[#dfc6a3] font-serif italic leading-relaxed border-l-2 border-[#c5a880] pl-4">
            {article.excerpt}
          </div>

          <div className="space-y-5 text-sm text-[#d4c9b8] leading-relaxed font-light">
            {article.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="pt-8 border-t border-[#20252e] flex items-center justify-between">
            <span className="text-xs text-[#8f8576] font-mono">
              Published by Aurevia Estates Global Research Desk
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2 text-xs uppercase tracking-[0.16em] font-semibold text-[#0b0c0e] bg-[#c5a880] hover:bg-[#dfc6a3] transition-colors"
            >
              Done Reading
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { ArrowRight, Phone, ShieldCheck, Clock, Check } from 'lucide-react';
import { COMPANY_INFO } from '../data/plumbingData';

interface CtaSectionProps {
  onOpenQuote: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenQuote }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white relative overflow-hidden">
      {/* Decorative radial lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Editorial Eyebrow */}
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400 mb-4">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
          <span>No Obligation · Upfront Flat Estimates</span>
        </div>

        {/* Main Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 max-w-4xl mx-auto [text-wrap:balance]">
          Need a Plumber You Can Count On?
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
          Whether you’re dealing with an urgent leak in the middle of the night or planning a complete bathroom upgrade, our master plumbers deliver long-lasting, code-certified solutions.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={onOpenQuote}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base shadow-xl shadow-blue-600/30 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 active:translate-y-0 cursor-pointer"
          >
            <span>Request a Free Quote</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <a
            href={`tel:${COMPANY_INFO.phoneClean}`}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-base border border-white/20 transition-all flex items-center justify-center gap-2.5 backdrop-blur-sm"
          >
            <Phone className="w-4 h-4 text-sky-400" />
            <span>Call (555) 724-3267</span>
          </a>
        </div>

        {/* Reassurance points */}
        <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs sm:text-sm text-slate-400">
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-emerald-400" />
            Zero Hidden Diagnostic Fees
          </span>
          <span aria-hidden="true" className="text-slate-700 hidden sm:inline">·</span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-sky-400" />
            2-Year Complete Workmanship Warranty
          </span>
          <span aria-hidden="true" className="text-slate-700 hidden sm:inline">·</span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-amber-400" />
            Same-Day Scheduling Available
          </span>
        </div>

      </div>
    </section>
  );
};

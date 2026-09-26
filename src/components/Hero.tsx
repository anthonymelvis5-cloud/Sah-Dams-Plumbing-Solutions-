import React from 'react';
import { ArrowRight, ShieldCheck, Clock, CheckCircle2, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/plumbingData';

interface HeroProps {
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-white via-slate-50 to-slate-100/70 border-b border-slate-200">
      {/* Background blueprint decorative pattern */}
      <div className="absolute inset-0 blueprint-grid opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Trust Kicker - Zero-Pill text discipline */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-700 tracking-wide uppercase mb-3">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-blue-600" />
              <span>Licensed Master Plumbers</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Metroville & Surrounding Valleys</span>
            </div>

            {/* Headline with text-wrap: balance */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-6 [text-wrap:balance]">
              Reliable Plumbing. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-blue-800">
                Done Right.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
              From sudden midnight pipe emergencies to precision whole-home repiping and luxury bathroom installations, Sah Dams Plumbing Solutions provides trusted, code-compliant plumbing for homes and businesses.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={onOpenQuote}
                className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 active:translate-y-0"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <a
                href="#services"
                className="px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-semibold text-base border border-slate-300 shadow-sm hover:border-slate-400 transition-all duration-200 text-center"
              >
                Our Services
              </a>

              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="sm:hidden flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 text-white font-semibold text-sm"
              >
                <Phone className="w-4 h-4 text-sky-400" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
            </div>

            {/* Adjacency Trust Proof Bar (Clean text with separators) */}
            <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs sm:text-sm text-slate-600 font-medium">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                <span>State Lic #{COMPANY_INFO.license.replace('State Master Plumber Lic #', '')}</span>
              </div>
              <span aria-hidden="true" className="text-slate-300 hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>24/7 Rapid Emergency Dispatch</span>
              </div>
              <span aria-hidden="true" className="text-slate-300 hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Upfront Flat-Rate Pricing</span>
              </div>
            </div>

          </div>

          {/* Right Visual Carrier (5 cols on lg) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 group">
              {/* Image asset with fallback container */}
              <div className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] overflow-hidden bg-slate-800 relative">
                <img
                  src="/src/assets/images/hero_plumbing_service_1790386208617.jpg"
                  alt="Professional master plumber inspecting modern fixtures with precision tools"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                
                {/* Subtle scrim overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Floating On-Site Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-lg flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 shrink-0">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Response Status</p>
                      <p className="text-sm font-bold text-slate-900">Trucks In Field · Active Dispatch</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-500">Average ETA</p>
                    <p className="text-sm font-extrabold text-blue-700 font-mono tabular-nums">&lt; 35 Mins</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Corner Decorative Accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl pointer-events-none -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-sky-400/15 rounded-full blur-2xl pointer-events-none -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
};

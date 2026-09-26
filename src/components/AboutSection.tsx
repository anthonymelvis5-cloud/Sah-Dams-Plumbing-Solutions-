import React from 'react';
import { ShieldCheck, Award, Clock, Users, ArrowRight } from 'lucide-react';
import { STATS, COMPANY_INFO } from '../data/plumbingData';

interface AboutSectionProps {
  onOpenQuote: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenQuote }) => {
  return (
    <section id="about" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Story + Credentials */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Story */}
          <div className="lg:col-span-7">
            <p className="text-xs sm:text-sm font-bold tracking-wider uppercase text-blue-700 mb-2">
              About Sah Dams Plumbing Solutions
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6 [text-wrap:balance]">
              Built on Precision Craftsmanship & Uncompromising Integrity
            </h2>
            
            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
              <p>
                Founded over a decade ago in Metroville, <span className="font-semibold text-slate-900">Sah Dams Plumbing Solutions</span> began with a single promise: to provide homeowners and businesses with transparent, master-level plumbing services devoid of inflated fees or hurried shortcuts.
              </p>
              <p>
                Whether diagnosing an elusive acoustic slab leak, repiping a vintage residential property with oxygen-barrier PEX-A, or executing high-volume commercial backflow installations, our crew consists strictly of state-licensed technicians. We treat every job site like a surgical suite, employing protective runners, wearing shoe covers, and conducting full pressure tests before clearing a site.
              </p>
              <p className="text-sm font-medium text-slate-700 bg-white p-4 rounded-xl border border-slate-200">
                “Plumbing isn't just about turning wrenches. It's about protecting property value, public sanitation, and giving families peace of mind when they turn on their taps.”
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenQuote}
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md transition-all flex items-center gap-2"
              >
                <span>Work With Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-semibold text-sm border border-slate-300 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right Column: Master Plumber Standard Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-bl-full pointer-events-none" />
              
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-blue-700 mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                The Sah Dams Standard
              </h3>
              <p className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-6">
                Certified Code Compliance Guarantee
              </p>

              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Master Plumber Oversight</span>
                    <span>Every project blueprint and installation is inspected to surpass local municipal plumbing standards.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Punctual & Prepared</span>
                    <span>Technicians arrive on schedule with fully stocked mobile units containing OEM replacement parts.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Clean Jobsite Protocol</span>
                    <span>We leave every bathroom, basement, and kitchen cleaner than we found it. No debris left behind.</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>{COMPANY_INFO.license}</span>
                <span>Bonded to $2M</span>
              </div>
            </div>
          </div>

        </div>

        {/* Quantified Rigor Statistics Bar (Tabular Numerals) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm text-center flex flex-col justify-center items-center"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-mono tabular-nums mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-sky-600">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base font-bold text-slate-800 mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

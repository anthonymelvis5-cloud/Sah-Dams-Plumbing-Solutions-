import React from 'react';
import { COMPANY_DETAILS } from '../data/realEstateData';
import { ArrowUpRight, Award, Shield, Compass } from 'lucide-react';

interface AboutSectionProps {
  onOpenConsultation: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="about" className="py-28 bg-[#0b0c0e] relative border-b border-[#1f242d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          
          {/* Left Text Narrative (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[1px] bg-[#c5a880]" />
              <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-[#c5a880]">
                Private Client Advisory
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-[#f9f7f4] tracking-tight leading-[1.15] [text-wrap:balance]">
              Where Exceptional Properties Meet Exceptional Service.
            </h2>

            <p className="text-sm sm:text-base text-[#d4c9b8] font-light leading-relaxed">
              Founded on the belief that acquiring prime real estate is an art of absolute discernment, Aurevia Estates represents high-net-worth individuals, family offices, and sovereign wealth entities across the globe.
            </p>

            <p className="text-xs sm:text-sm text-[#8f8576] font-light leading-relaxed">
              We specialize in connecting our clients with distinctive residential properties, private island sanctuaries, and premier commercial real estate opportunities. Every advisory relationship is anchored in complete confidentiality, institutional due diligence, and privileged access to off-market inventory unavailable through conventional channels.
            </p>

            <div className="pt-4 flex items-center gap-6">
              <button
                onClick={onOpenConsultation}
                className="px-7 py-3.5 text-xs uppercase tracking-[0.18em] font-semibold text-[#0b0c0e] bg-gradient-to-r from-[#dfc6a3] via-[#c5a880] to-[#bfa073] hover:from-[#f5ebd9] hover:to-[#dfc6a3] transition-all flex items-center gap-2 cursor-pointer shadow-md"
              >
                <span>The Aurevia Heritage</span>
                <ArrowUpRight className="w-4 h-4 text-[#0b0c0e]" />
              </button>

              <div className="flex flex-col">
                <span className="font-serif italic text-base text-[#f4efe8]">Julian Sterling</span>
                <span className="text-[10px] uppercase tracking-wider text-[#a39784]">Managing Partner, Advisory</span>
              </div>
            </div>
          </div>

          {/* Right Architecture Imagery (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative border border-[#2a303b] overflow-hidden shadow-2xl bg-[#121418]">
              <div className="aspect-[4/3] sm:aspect-[16/11] overflow-hidden">
                <img
                  src="/src/assets/images/about_luxury_arch_1790395325634.jpg"
                  alt="Sculptural Roman travertine luxury architectural villa"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-1000 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Floating Architectural Badge */}
              <div className="absolute bottom-5 right-5 bg-[#0b0c0e]/90 backdrop-blur-md p-4 border border-[#282e38] max-w-xs hidden sm:block">
                <span className="text-[9px] uppercase tracking-[0.24em] font-mono text-[#c5a880] block mb-1">
                  Global Portfolio Standard
                </span>
                <p className="text-xs text-[#d4c9b8] font-light">
                  Direct partnership with top European & American architectural masters.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Quantified Statistics Strip (Required stats) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-12 border-t border-[#1f242d]">
          {COMPANY_DETAILS.stats.map((stat, i) => (
            <div
              key={i}
              className="p-6 bg-[#111317] border border-[#222731] flex flex-col justify-center"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#dfc6a3] font-light mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium uppercase tracking-[0.14em] text-[#f4efe8] mb-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-[#786f62] font-light">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

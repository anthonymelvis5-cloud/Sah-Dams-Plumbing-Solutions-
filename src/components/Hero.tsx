import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onExploreProperties: () => void;
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProperties, onOpenConsultation }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0b0c0e]">
      
      {/* Cinematic Full-bleed Background Image with Multi-layer Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_luxury_estate_1790395311346.jpg"
          alt="Architectural luxury modern estate at twilight"
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[12000ms]"
          loading="eager"
        />
        {/* Layered luxury editorial gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-[#0b0c0e]/50 to-[#0b0c0e]/70" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0b0c0e]/30 to-[#0b0c0e]/85" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16 flex flex-col items-center">
        
        {/* Pre-title Brand Tagline */}
        <div className="inline-flex items-center gap-3 mb-6">
          <span className="w-8 h-[1px] bg-[#c5a880]/80" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.32em] font-medium text-[#dfc6a3]">
            International Prime Residences
          </span>
          <span className="w-8 h-[1px] bg-[#c5a880]/80" />
        </div>

        {/* Major Headline with Serif Typography */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light text-[#f9f7f4] tracking-tight leading-[1.08] mb-8 [text-wrap:balance]">
          Exceptional Properties. <br className="hidden sm:inline" />
          <span className="italic font-normal text-[#dfc6a3] font-serif">
            Extraordinary Living.
          </span>
        </h1>

        {/* Supporting Copy */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-[#d4c9b8] font-light leading-relaxed mb-12 [text-wrap:balance]">
          Discover distinctive homes and investment opportunities in the world’s most desirable locations. Curated for the few who value architectural distinction and absolute discretion.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
          <button
            onClick={onExploreProperties}
            className="w-full sm:w-auto px-9 py-4 text-xs font-semibold uppercase tracking-[0.2em] bg-gradient-to-r from-[#dfc6a3] via-[#c5a880] to-[#bfa073] hover:from-[#f5ebd9] hover:to-[#dfc6a3] text-[#0b0c0e] shadow-xl shadow-[#0b0c0e]/50 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:translate-y-0"
          >
            <span>Explore Properties</span>
            <ArrowUpRight className="w-4 h-4 text-[#0b0c0e]" />
          </button>

          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto px-9 py-4 text-xs font-semibold uppercase tracking-[0.2em] border border-[#dfc6a3]/40 hover:border-[#dfc6a3] text-[#f4efe8] hover:bg-[#dfc6a3]/10 backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Schedule a Consultation</span>
          </button>
        </div>

        {/* Curated Market Indicators */}
        <div className="mt-16 pt-8 border-t border-[#333a46]/50 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs uppercase tracking-[0.22em] text-[#a39784]">
          <span className="hover:text-[#dfc6a3] transition-colors">Mayfair & Kensington</span>
          <span className="text-[#c5a880]/40">·</span>
          <span className="hover:text-[#dfc6a3] transition-colors">Venetian Islands</span>
          <span className="text-[#c5a880]/40">·</span>
          <span className="hover:text-[#dfc6a3] transition-colors">Central Park South</span>
          <span className="text-[#c5a880]/40">·</span>
          <span className="hover:text-[#dfc6a3] transition-colors">Monte Carlo</span>
        </div>

      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none">
        <span className="text-[10px] uppercase tracking-[0.26em] text-[#a39784] font-light">
          Scroll to Discover
        </span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-[#c5a880] to-transparent animate-bounce" />
      </div>

    </section>
  );
};

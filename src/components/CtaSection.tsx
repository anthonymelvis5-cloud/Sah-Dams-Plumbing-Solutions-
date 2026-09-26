import React from 'react';
import { ArrowUpRight, Phone, ShieldCheck } from 'lucide-react';

interface CtaSectionProps {
  onSpeakWithAdvisor: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onSpeakWithAdvisor }) => {
  return (
    <section className="py-32 bg-[#090a0d] relative overflow-hidden border-b border-[#1f242d]">
      {/* Background cinematic imagery with heavy moody scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/signature_penthouse_1790395338261.jpg"
          alt="Cinematic luxury penthouse interior background"
          className="w-full h-full object-cover object-center opacity-25 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090a0d] via-[#090a0d]/80 to-[#090a0d]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Subtle Pre-title */}
        <div className="inline-flex items-center gap-3 mb-4">
          <span className="w-8 h-[1px] bg-[#c5a880]" />
          <span className="text-[11px] uppercase tracking-[0.32em] font-medium text-[#c5a880]">
            The Journey Begins
          </span>
          <span className="w-8 h-[1px] bg-[#c5a880]" />
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light text-[#f9f7f4] tracking-tight mb-6 [text-wrap:balance]">
          Your Next Address Starts Here.
        </h2>

        {/* Supporting text */}
        <p className="max-w-2xl text-base sm:text-xl text-[#d4c9b8] font-light leading-relaxed mb-12 [text-wrap:balance]">
          Let our team help you discover a property worthy of your next chapter.
        </p>

        {/* Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
          <button
            onClick={onSpeakWithAdvisor}
            className="w-full sm:w-auto px-10 py-4 text-xs uppercase tracking-[0.2em] font-semibold text-[#0b0c0e] bg-gradient-to-r from-[#dfc6a3] via-[#c5a880] to-[#bfa073] hover:from-[#f5ebd9] hover:to-[#dfc6a3] transition-all duration-300 shadow-xl shadow-[#0b0c0e]/80 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
          >
            <span>Speak With an Advisor</span>
            <ArrowUpRight className="w-4 h-4 text-[#0b0c0e]" />
          </button>

          <a
            href="tel:+442079460982"
            className="w-full sm:w-auto px-8 py-4 text-xs uppercase tracking-[0.2em] font-semibold text-[#f4efe8] border border-[#3a414e] hover:border-[#c5a880] hover:text-[#c5a880] transition-colors flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#c5a880]" />
            <span>Direct Global Desk</span>
          </a>
        </div>

        {/* Trust Badges */}
        <div className="mt-14 pt-8 border-t border-[#222731] flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-[11px] uppercase tracking-[0.2em] text-[#8f8576]">
          <span>Strict Non-Disclosure Guarantee</span>
          <span className="text-[#c5a880]/40">·</span>
          <span>Sovereign & Family Office Protocol</span>
          <span className="text-[#c5a880]/40">·</span>
          <span>Bespoke Asset Structuring</span>
        </div>

      </div>
    </section>
  );
};

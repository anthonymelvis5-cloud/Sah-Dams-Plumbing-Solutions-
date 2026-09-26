import React from 'react';
import { PROCESS_STEPS } from '../data/realEstateData';
import { ArrowUpRight } from 'lucide-react';

interface ClientExperienceProps {
  onStartProcess: () => void;
}

export const ClientExperience: React.FC<ClientExperienceProps> = ({ onStartProcess }) => {
  return (
    <section className="py-28 bg-[#0b0c0e] border-b border-[#1f242d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#c5a880]" />
            <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-[#c5a880]">
              The Advisory Journey
            </span>
            <span className="w-6 h-[1px] bg-[#c5a880]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-[#f9f7f4] tracking-tight mb-6">
            The Aurevia Client Experience
          </h2>
          <p className="text-sm sm:text-base text-[#a39784] font-light leading-relaxed">
            A methodical, discreet protocol tailored for sovereign and private clients acquiring or disposing of trophy residential assets.
          </p>
        </div>

        {/* Horizontal Timeline on Desktop / Stacked on Mobile */}
        <div className="relative">
          {/* Subtle connecting horizontal line on desktop */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-[#c5a880]/30 to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.number}
                className="bg-[#111318] border border-[#222731] hover:border-[#c5a880]/50 p-8 flex flex-col justify-between transition-all duration-300 group shadow-md"
              >
                <div>
                  {/* Step Number Dot & Indicator */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 bg-[#0b0c0e] border border-[#2d3340] group-hover:border-[#c5a880] flex items-center justify-center font-mono text-sm font-bold text-[#c5a880] transition-colors">
                      {step.number}
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#a39784]">
                      Phase 0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl font-serif text-[#f9f7f4] group-hover:text-[#dfc6a3] transition-colors mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs uppercase tracking-wider font-semibold text-[#c5a880] mb-4">
                    {step.tagline}
                  </p>

                  <p className="text-xs text-[#8f8576] font-light leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1d222b] text-[10px] uppercase tracking-[0.16em] font-mono text-[#a39784]">
                  Full Discretion Assured
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA trigger */}
        <div className="mt-16 text-center">
          <button
            onClick={onStartProcess}
            className="px-8 py-4 text-xs uppercase tracking-[0.2em] font-semibold text-[#0b0c0e] bg-gradient-to-r from-[#dfc6a3] via-[#c5a880] to-[#bfa073] hover:from-[#f5ebd9] hover:to-[#dfc6a3] transition-all inline-flex items-center gap-2 cursor-pointer shadow-lg"
          >
            <span>Initiate Your Acquisition Search</span>
            <ArrowUpRight className="w-4 h-4 text-[#0b0c0e]" />
          </button>
        </div>

      </div>
    </section>
  );
};

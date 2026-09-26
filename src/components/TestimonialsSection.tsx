import React from 'react';
import { TESTIMONIALS } from '../data/realEstateData';
import { Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-28 bg-[#0e1014] border-b border-[#1f242d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#c5a880]" />
            <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-[#c5a880]">
              Client Perspectives
            </span>
            <span className="w-6 h-[1px] bg-[#c5a880]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-[#f9f7f4] tracking-tight">
            Endorsements of Trust
          </h2>
        </div>

        {/* 3 Columns Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-[#121418] border border-[#222731] p-8 sm:p-10 flex flex-col justify-between relative shadow-lg"
            >
              <div>
                <Quote className="w-8 h-8 text-[#c5a880]/30 mb-6" />
                <p className="text-sm sm:text-base text-[#d4c9b8] font-serif font-light italic leading-relaxed mb-8">
                  “{item.quote}”
                </p>
              </div>

              <div className="pt-6 border-t border-[#1e222a]">
                <h4 className="text-sm font-serif font-normal text-[#f9f7f4] mb-1">
                  {item.clientName}
                </h4>
                <div className="flex items-center gap-2 text-xs text-[#a39784] font-mono">
                  <span>{item.location}</span>
                  <span>·</span>
                  <span className="text-[#c5a880]">{item.propertyAcquired}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quiet disclaimer note */}
        <p className="text-center text-[10px] uppercase tracking-[0.24em] text-[#786f62] mt-12 font-mono">
          Fictional client testimonials created for brand demonstration purposes
        </p>

      </div>
    </section>
  );
};

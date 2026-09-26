import React from 'react';
import { DESTINATIONS } from '../data/realEstateData';
import { Destination } from '../types/realEstate';
import { ArrowUpRight, MapPin } from 'lucide-react';

interface DestinationsSectionProps {
  onSelectDestination: (destName: string) => void;
}

export const DestinationsSection: React.FC<DestinationsSectionProps> = ({ onSelectDestination }) => {
  return (
    <section className="py-28 bg-[#0e1014] border-b border-[#1f242d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#c5a880]" />
              <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-[#c5a880]">
                Prime Enclaves
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-[#f9f7f4] tracking-tight">
              Explore Destinations
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#a39784] font-light leading-relaxed">
            Our established international offices maintain direct intelligence across the world’s most coveted residential zip codes.
          </p>
        </div>

        {/* 6 Destinations Grid (3x2 layout with architectural photography) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              onClick={() => onSelectDestination(dest.name)}
              className="group relative aspect-[4/3] overflow-hidden border border-[#222731] hover:border-[#c5a880]/60 transition-all duration-500 cursor-pointer shadow-lg"
            >
              {/* Destination Image */}
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Multi-layer luxury scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-[#0b0c0e]/30 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />

              {/* Destination Info Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                
                {/* Top: Property Count Tag */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#c5a880] bg-[#0b0c0e]/80 backdrop-blur-md px-3 py-1 border border-[#262c37]">
                    {dest.propertyCount} Exclusive Properties
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#0b0c0e]/60 border border-white/20 group-hover:border-[#c5a880] flex items-center justify-center text-white group-hover:text-[#c5a880] transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom: Destination Details */}
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-[#a39784] tracking-wider uppercase font-medium mb-1">
                    <MapPin className="w-3.5 h-3.5 text-[#c5a880]" />
                    <span>{dest.country}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif text-[#f9f7f4] group-hover:text-[#dfc6a3] transition-colors mb-2">
                    {dest.name}
                  </h3>

                  <p className="text-xs text-[#d4c9b8]/80 line-clamp-2 leading-relaxed font-light mb-3">
                    {dest.description}
                  </p>

                  <div className="pt-2 border-t border-[#333a46]/50 flex items-center justify-between text-[11px] font-mono text-[#a39784]">
                    <span>Average Benchmark</span>
                    <span className="text-[#dfc6a3] font-semibold">{dest.averagePrice}</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

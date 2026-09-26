import React from 'react';
import { Property } from '../types/realEstate';
import { Bed, Bath, Maximize2, MapPin, ArrowUpRight, Sparkles } from 'lucide-react';

interface FeaturedPropertiesProps {
  properties: Property[];
  onSelectProperty: (property: Property) => void;
  onOpenConsultation: () => void;
}

export const FeaturedProperties: React.FC<FeaturedPropertiesProps> = ({
  properties,
  onSelectProperty,
  onOpenConsultation,
}) => {
  return (
    <section id="properties" className="py-28 bg-[#0b0c0e] relative border-b border-[#1f232b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Editorial Presence */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#c5a880]" />
              <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-[#c5a880]">
                Curated Global Portfolio
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-[#f9f7f4] tracking-tight">
              Featured Properties
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#a39784] font-light leading-relaxed">
            A handpicked selection of exceptional architectural estates, waterfront compounds, and trophy penthouses currently represented by Aurevia Estates.
          </p>
        </div>

        {/* 6 Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {properties.map((property) => (
            <article
              key={property.id}
              onClick={() => onSelectProperty(property)}
              className="group bg-[#121418] border border-[#222731] hover:border-[#c5a880]/50 transition-all duration-500 flex flex-col justify-between cursor-pointer overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#c5a880]/5"
            >
              {/* Image Frame with Aspect 16:11 & Zoom effect */}
              <div className="relative aspect-[16/11] overflow-hidden bg-[#181b22]">
                <img
                  src={property.heroImage}
                  alt={property.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121418] via-transparent to-transparent opacity-80" />

                {/* Top Badge: Property Type / Signature */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#f4efe8] bg-[#0b0c0e]/85 backdrop-blur-md px-3 py-1.5 border border-[#333a46]/60">
                    {property.type}
                  </span>
                  {property.isSignature && (
                    <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#0b0c0e] bg-[#c5a880] px-2.5 py-1.5 flex items-center gap-1 font-mono">
                      <Sparkles className="w-2.5 h-2.5" />
                      <span>Signature</span>
                    </span>
                  )}
                </div>

                {/* Price Display */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div className="text-xl sm:text-2xl font-serif text-[#f9f7f4] tracking-tight font-medium">
                    {property.formattedPrice}
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#c5a880] font-mono">
                    For {property.status}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                <div>
                  {/* Location with Icon */}
                  <div className="flex items-center gap-1.5 text-xs text-[#a39784] font-medium tracking-wider uppercase mb-2">
                    <MapPin className="w-3.5 h-3.5 text-[#c5a880] shrink-0" />
                    <span>{property.location}</span>
                  </div>

                  {/* Property Name */}
                  <h3 className="text-xl sm:text-2xl font-serif font-normal text-[#f4efe8] group-hover:text-[#dfc6a3] transition-colors mb-3 leading-snug">
                    {property.name}
                  </h3>

                  {/* Tagline/Summary */}
                  <p className="text-xs text-[#8f8576] line-clamp-2 leading-relaxed mb-6 font-light">
                    {property.tagline}
                  </p>
                </div>

                {/* Specifications Bar (Bed, Bath, Sq Ft) */}
                <div className="pt-4 border-t border-[#20252e]">
                  <div className="grid grid-cols-3 gap-2 py-2 text-xs text-[#c4b9a8] mb-5 font-light">
                    <div className="flex items-center gap-1.5">
                      <Bed className="w-3.5 h-3.5 text-[#c5a880] shrink-0" />
                      <span>{property.bedrooms} Beds</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Bath className="w-3.5 h-3.5 text-[#c5a880] shrink-0" />
                      <span>{property.bathrooms} Baths</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5 text-[#c5a880] shrink-0" />
                      <span>{property.sqft.toLocaleString()} sq ft</span>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProperty(property);
                    }}
                    className="w-full py-3 px-4 text-[11px] uppercase tracking-[0.2em] font-semibold text-[#f4efe8] group-hover:text-[#0b0c0e] bg-[#1a1e24] group-hover:bg-[#c5a880] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>View Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>

            </article>
          ))}
        </div>

        {/* Global Portfolio Note & Private Access Prompt */}
        <div className="mt-16 p-8 border border-[#252b36] bg-[#0e1014] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-serif text-[#f9f7f4] mb-1">
              Seeking Off-Market Private Listings?
            </h4>
            <p className="text-xs sm:text-sm text-[#a39784] font-light max-w-xl">
              Over 40% of our ultra-prime estates trade confidentially without public publication. Inquire privately to review our discreet off-market portfolio.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="px-6 py-3 text-xs uppercase tracking-[0.18em] font-semibold text-[#0b0c0e] bg-[#c5a880] hover:bg-[#dfc6a3] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Access Private Inventory
          </button>
        </div>

      </div>
    </section>
  );
};

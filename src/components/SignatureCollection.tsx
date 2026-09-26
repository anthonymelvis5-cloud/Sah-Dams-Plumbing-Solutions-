import React from 'react';
import { Property } from '../types/realEstate';
import { ArrowUpRight, Bed, Bath, Maximize2, MapPin } from 'lucide-react';

interface SignatureCollectionProps {
  properties: Property[];
  onSelectProperty: (property: Property) => void;
  onOpenConsultation: (topic?: string) => void;
}

export const SignatureCollection: React.FC<SignatureCollectionProps> = ({
  properties,
  onSelectProperty,
  onOpenConsultation,
}) => {
  const signatureItems = properties.filter((p) => p.isSignature);

  return (
    <section className="py-32 bg-[#08090b] relative overflow-hidden border-b border-[#1b1f27]">
      {/* Background subtle luxury grid */}
      <div className="absolute inset-0 luxury-grid pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="w-10 h-[1px] bg-[#c5a880]" />
            <span className="text-[11px] uppercase tracking-[0.34em] font-medium text-[#c5a880]">
              Exclusive Representation
            </span>
            <span className="w-10 h-[1px] bg-[#c5a880]" />
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light text-[#f9f7f4] tracking-tight mb-6">
            The Aurevia Signature Collection
          </h2>
          <p className="text-sm sm:text-base text-[#a39784] font-light leading-relaxed">
            Reserved for residences of paramount architectural pedigree and global distinction. Trophy estates representing the pinnacle of residential design, discretion, and prime location.
          </p>
        </div>

        {/* 3 Oversized Editorial Showcase Cards */}
        <div className="space-y-24">
          {signatureItems.map((property, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={property.id}
                onClick={() => onSelectProperty(property)}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center group cursor-pointer ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                
                {/* Oversized Cinematic Image (7 cols) */}
                <div
                  className={`lg:col-span-7 relative overflow-hidden border border-[#262c37] group-hover:border-[#c5a880]/60 transition-all duration-700 ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#101216]">
                    <img
                      src={property.heroImage}
                      alt={property.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08090b]/80 via-transparent to-transparent pointer-events-none" />

                    {/* Signature Label Chip */}
                    <div className="absolute top-5 left-5">
                      <span className="text-[10px] uppercase tracking-[0.24em] font-bold text-[#0b0c0e] bg-gradient-to-r from-[#dfc6a3] to-[#c5a880] px-3.5 py-1.5 shadow-xl font-mono">
                        {property.signatureLabel || 'SIGNATURE PROPERTY'}
                      </span>
                    </div>

                    {/* Price on hover overlay */}
                    <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                      <div className="bg-[#08090b]/85 backdrop-blur-md px-4 py-2 border border-[#2b313d]">
                        <span className="text-xl sm:text-2xl font-serif text-[#f9f7f4] font-medium">
                          {property.formattedPrice}
                        </span>
                      </div>
                      <span className="text-xs uppercase tracking-[0.2em] text-[#dfc6a3] font-mono hidden sm:inline">
                        Explore Dossier →
                      </span>
                    </div>
                  </div>
                </div>

                {/* Editorial Typography & Narrative (5 cols) */}
                <div
                  className={`lg:col-span-5 flex flex-col justify-center ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  {/* Location & Index */}
                  <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-[#a39784] mb-3">
                    <span className="font-mono text-[#c5a880]">0{index + 1}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#c5a880]" />
                      {property.location}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl sm:text-4xl font-serif text-[#f9f7f4] group-hover:text-[#dfc6a3] transition-colors mb-4 leading-tight">
                    {property.name}
                  </h3>

                  {/* Tagline / Subtitle */}
                  <p className="text-sm sm:text-base text-[#c4b9a8] font-light leading-relaxed mb-6 italic font-serif">
                    “{property.tagline}”
                  </p>

                  <p className="text-xs text-[#8f8576] font-light leading-relaxed mb-8 line-clamp-3">
                    {property.description}
                  </p>

                  {/* Architectural Specs */}
                  <div className="flex items-center gap-6 py-4 border-y border-[#20252e] mb-8 text-xs text-[#a39784]">
                    <div className="flex items-center gap-2">
                      <Bed className="w-4 h-4 text-[#c5a880]" />
                      <span className="text-[#f4efe8]">{property.bedrooms} Bedrooms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath className="w-4 h-4 text-[#c5a880]" />
                      <span className="text-[#f4efe8]">{property.bathrooms} Bathrooms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Maximize2 className="w-4 h-4 text-[#c5a880]" />
                      <span className="text-[#f4efe8]">{property.sqft.toLocaleString()} sq ft</span>
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="flex items-center gap-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProperty(property);
                      }}
                      className="px-6 py-3 text-xs uppercase tracking-[0.2em] font-semibold text-[#0b0c0e] bg-[#c5a880] hover:bg-[#dfc6a3] transition-colors flex items-center gap-2"
                    >
                      <span>View Dossier</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#0b0c0e]" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenConsultation(`Inquiry for ${property.name}`);
                      }}
                      className="text-xs uppercase tracking-[0.18em] text-[#a39784] hover:text-[#f4efe8] transition-colors py-2 px-3 border-b border-transparent hover:border-[#c5a880]"
                    >
                      Private Inquiry
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

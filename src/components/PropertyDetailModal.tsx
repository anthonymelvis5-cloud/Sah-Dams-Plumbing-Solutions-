import React, { useState } from 'react';
import { Property } from '../types/realEstate';
import { 
  X, 
  MapPin, 
  Bed, 
  Bath, 
  Maximize2, 
  Calendar, 
  Compass, 
  Check, 
  Phone, 
  Mail, 
  CalendarCheck, 
  ChevronLeft, 
  ChevronRight,
  ShieldCheck,
  Share2
} from 'lucide-react';

interface PropertyDetailModalProps {
  property: Property | null;
  onClose: () => void;
  onRequestViewing: (property: Property) => void;
  onContactAgent: (property: Property) => void;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({
  property,
  onClose,
  onRequestViewing,
  onContactAgent,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);

  if (!property) return null;

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % property.gallery.length);
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + property.gallery.length) % property.gallery.length);
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#07080a]/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#101216] border border-[#2a2f3a] text-[#f4efe8] max-w-5xl w-full my-auto shadow-2xl relative max-h-[92vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#20252e] bg-[#0b0c0e]/95 shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-[0.24em] font-mono text-[#c5a880]">
              Aurevia Private Dossier
            </span>
            <span className="text-[#333a46]">·</span>
            <span className="text-xs text-[#a39784] font-mono">Ref #{property.id.toUpperCase()}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="text-xs text-[#a39784] hover:text-[#f4efe8] flex items-center gap-1.5 px-3 py-1 border border-[#252b36] transition-colors"
              title="Share Link"
            >
              <Share2 className="w-3.5 h-3.5 text-[#c5a880]" />
              <span className="hidden sm:inline">{copiedLink ? 'Copied' : 'Share'}</span>
            </button>
            <button
              onClick={onClose}
              className="text-[#a39784] hover:text-[#f4efe8] p-1.5 transition-colors cursor-pointer"
              aria-label="Close Dossier"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto flex-1 p-6 sm:p-8 space-y-10">
          
          {/* Main Gallery Showcase */}
          <div className="space-y-3">
            <div className="relative aspect-[16/9] sm:aspect-[21/9] bg-[#0b0c0e] overflow-hidden border border-[#20252e]">
              <img
                src={property.gallery[activeImageIndex] || property.heroImage}
                alt={`${property.name} view ${activeImageIndex + 1}`}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              
              {/* Image Navigation Arrows */}
              {property.gallery.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#0b0c0e]/80 hover:bg-[#c5a880] text-white hover:text-[#0b0c0e] flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Previous Image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#0b0c0e]/80 hover:bg-[#c5a880] text-white hover:text-[#0b0c0e] flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Next Image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Image counter */}
              <div className="absolute bottom-3 right-3 bg-[#0b0c0e]/85 backdrop-blur-sm px-3 py-1 text-[11px] font-mono text-[#dfc6a3] border border-[#2a2f38]">
                0{activeImageIndex + 1} / 0{property.gallery.length}
              </div>
            </div>

            {/* Thumbnail Strip */}
            {property.gallery.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-1 no-scrollbar">
                {property.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-24 h-16 sm:w-28 sm:h-18 shrink-0 overflow-hidden border transition-all cursor-pointer ${
                      activeImageIndex === idx
                        ? 'border-[#c5a880] opacity-100 ring-1 ring-[#c5a880]'
                        : 'border-[#222730] opacity-50 hover:opacity-80'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Title, Location & Price Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#20252e]">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#a39784] mb-2 font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>{property.location}</span>
                <span>·</span>
                <span className="text-[#c5a880]">{property.type}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#f9f7f4] font-normal leading-tight">
                {property.name}
              </h2>
            </div>

            <div className="text-left md:text-right">
              <span className="text-[10px] uppercase tracking-[0.24em] text-[#a39784] block font-mono">
                Offered For {property.status}
              </span>
              <div className="text-3xl sm:text-4xl font-serif text-[#dfc6a3] font-medium tracking-tight">
                {property.formattedPrice}
              </div>
            </div>
          </div>

          {/* Quick Specifications Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 p-5 bg-[#0b0c0e] border border-[#20252e] text-xs">
            <div className="space-y-1">
              <span className="text-[#a39784] uppercase tracking-wider block text-[10px]">Bedrooms</span>
              <div className="flex items-center gap-1.5 text-sm font-semibold text-[#f4efe8]">
                <Bed className="w-4 h-4 text-[#c5a880]" />
                <span>{property.bedrooms} En-Suite</span>
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-[#a39784] uppercase tracking-wider block text-[10px]">Bathrooms</span>
              <div className="flex items-center gap-1.5 text-sm font-semibold text-[#f4efe8]">
                <Bath className="w-4 h-4 text-[#c5a880]" />
                <span>{property.bathrooms} Full Baths</span>
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-[#a39784] uppercase tracking-wider block text-[10px]">Internal Area</span>
              <div className="flex items-center gap-1.5 text-sm font-semibold text-[#f4efe8]">
                <Maximize2 className="w-4 h-4 text-[#c5a880]" />
                <span>{property.sqft.toLocaleString()} sq ft</span>
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-[#a39784] uppercase tracking-wider block text-[10px]">Year Built</span>
              <div className="flex items-center gap-1.5 text-sm font-semibold text-[#f4efe8]">
                <Calendar className="w-4 h-4 text-[#c5a880]" />
                <span>{property.yearBuilt}</span>
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-[#a39784] uppercase tracking-wider block text-[10px]">Architecture</span>
              <div className="flex items-center gap-1.5 text-sm font-semibold text-[#f4efe8]">
                <Compass className="w-4 h-4 text-[#c5a880]" />
                <span>{property.architecturalStyle}</span>
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-[#a39784] uppercase tracking-wider block text-[10px]">Security</span>
              <div className="flex items-center gap-1.5 text-sm font-semibold text-[#f4efe8]">
                <ShieldCheck className="w-4 h-4 text-[#c5a880]" />
                <span>Private & Gated</span>
              </div>
            </div>
          </div>

          {/* Editorial Overview & Features */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Description */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-xl font-serif text-[#f9f7f4]">
                The Residence
              </h3>
              <p className="text-sm text-[#d4c9b8] leading-relaxed font-light">
                {property.description}
              </p>
              
              <div className="pt-4">
                <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#c5a880] mb-3">
                  Location & Locale Intelligence
                </h4>
                <p className="text-xs text-[#a39784] leading-relaxed">
                  {property.neighborhoodInfo}
                </p>
              </div>
            </div>

            {/* Features & Amenities */}
            <div className="lg:col-span-5 space-y-6 bg-[#0b0c0e] p-6 border border-[#20252e]">
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#dfc6a3] mb-3">
                  Bespoke Architectural Highlights
                </h4>
                <ul className="space-y-2.5">
                  {property.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#c4b9a8] font-light">
                      <Check className="w-3.5 h-3.5 text-[#c5a880] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#1c2027]">
                <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#dfc6a3] mb-3">
                  Estate Amenities
                </h4>
                <div className="flex flex-wrap gap-2">
                  {property.amenities.map((amenity, i) => (
                    <span
                      key={i}
                      className="text-[11px] text-[#dfc6a3] bg-[#161a22] px-3 py-1 border border-[#262c37]"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Action CTAs: Request Viewing & Contact Agent */}
          <div className="p-6 bg-[#161920] border border-[#2b313d] flex flex-col sm:flex-row items-center justify-between gap-5">
            <div>
              <h4 className="text-lg font-serif text-[#f9f7f4] mb-1">
                Arrange a Confidential Walkthrough
              </h4>
              <p className="text-xs text-[#a39784]">
                Private physical tours or encrypted virtual walkthroughs arranged on 24-hour notice.
              </p>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => onRequestViewing(property)}
                className="flex-1 sm:flex-initial px-6 py-3.5 text-xs uppercase tracking-[0.18em] font-semibold text-[#0b0c0e] bg-gradient-to-r from-[#dfc6a3] via-[#c5a880] to-[#bfa073] hover:from-[#f5ebd9] hover:to-[#dfc6a3] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <CalendarCheck className="w-4 h-4 text-[#0b0c0e]" />
                <span>Request Private Viewing</span>
              </button>

              <button
                onClick={() => onContactAgent(property)}
                className="flex-1 sm:flex-initial px-6 py-3.5 text-xs uppercase tracking-[0.18em] font-semibold text-[#f4efe8] border border-[#3a414e] hover:border-[#c5a880] hover:text-[#c5a880] transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Agent</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

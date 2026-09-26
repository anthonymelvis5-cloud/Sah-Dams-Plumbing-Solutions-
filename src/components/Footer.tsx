import React from 'react';
import { COMPANY_DETAILS, PROPERTIES } from '../data/realEstateData';
import { Globe, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: (topic?: string) => void;
  onFilterStatus?: (status: 'Buy' | 'Rent') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation, onFilterStatus }) => {
  return (
    <footer className="bg-[#07080a] text-[#a39784] border-t border-[#1a1e26]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-[#1c2027]">
          
          {/* Brand Col (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border border-[#c5a880]/60 flex items-center justify-center rotate-45">
                <span className="-rotate-45 font-brand text-xs font-semibold text-[#c5a880] tracking-widest">
                  A
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-brand text-lg font-bold tracking-[0.24em] text-[#f4efe8] uppercase leading-none">
                  Aurevia
                </span>
                <span className="text-[9px] tracking-[0.3em] uppercase text-[#a39784] font-medium mt-1">
                  Estates · Private Client
                </span>
              </div>
            </div>

            <p className="text-xs text-[#8f8576] font-light leading-relaxed max-w-sm">
              International luxury real estate advisory specializing in the acquisition, sale, and curation of prime residential properties and architectural masterpieces in the world’s most desirable locations.
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-[#c5a880]">
              <span>London</span>
              <span>·</span>
              <span>New York</span>
              <span>·</span>
              <span>Monaco</span>
              <span>·</span>
              <span>Dubai</span>
            </div>
          </div>

          {/* Properties Col */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#f4efe8] mb-5">
              Properties
            </h4>
            <ul className="space-y-3 text-xs font-light">
              <li>
                <a href="#properties" onClick={() => onFilterStatus?.('Buy')} className="hover:text-[#dfc6a3] transition-colors">
                  Properties for Sale
                </a>
              </li>
              <li>
                <a href="#properties" onClick={() => onFilterStatus?.('Rent')} className="hover:text-[#dfc6a3] transition-colors">
                  Luxury Prime Rentals
                </a>
              </li>
              <li>
                <a href="#properties" className="hover:text-[#dfc6a3] transition-colors">
                  Signature Collection
                </a>
              </li>
              <li>
                <button
                  onClick={() => onOpenConsultation('Off-Market Inquiries')}
                  className="hover:text-[#dfc6a3] transition-colors text-left"
                >
                  Off-Market Estates
                </button>
              </li>
              <li>
                <a href="#properties" className="hover:text-[#dfc6a3] transition-colors">
                  Waterfront Villas
                </a>
              </li>
            </ul>
          </div>

          {/* Services Col */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#f4efe8] mb-5">
              Services
            </h4>
            <ul className="space-y-3 text-xs font-light">
              <li>
                <button onClick={() => onOpenConsultation('Acquisition Advisory')} className="hover:text-[#dfc6a3] transition-colors text-left">
                  Acquisition Advisory
                </button>
              </li>
              <li>
                <button onClick={() => onOpenConsultation('Selling a Property')} className="hover:text-[#dfc6a3] transition-colors text-left">
                  Strategic Representation
                </button>
              </li>
              <li>
                <button onClick={() => onOpenConsultation('Private Client Services')} className="hover:text-[#dfc6a3] transition-colors text-left">
                  Private Client Office
                </button>
              </li>
              <li>
                <button onClick={() => onOpenConsultation('Property Investment')} className="hover:text-[#dfc6a3] transition-colors text-left">
                  Investment Guidance
                </button>
              </li>
              <li>
                <a href="#journal" className="hover:text-[#dfc6a3] transition-colors">
                  Market Intelligence
                </a>
              </li>
            </ul>
          </div>

          {/* Company & Contact Col */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#f4efe8] mb-5">
              Company
            </h4>
            <ul className="space-y-3 text-xs font-light">
              <li>
                <a href="#about" className="hover:text-[#dfc6a3] transition-colors">
                  About Aurevia
                </a>
              </li>
              <li>
                <a href="#journal" className="hover:text-[#dfc6a3] transition-colors">
                  The Journal
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#dfc6a3] transition-colors">
                  Global Desks
                </a>
              </li>
              <li>
                <button onClick={() => onOpenConsultation('Press & Editorial')} className="hover:text-[#dfc6a3] transition-colors text-left">
                  Press & Media
                </button>
              </li>
              <li>
                <button onClick={() => onOpenConsultation('Careers')} className="hover:text-[#dfc6a3] transition-colors text-left">
                  Advisory Careers
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#786f62] font-mono">
          <p>
            © {new Date().getFullYear()} Aurevia Estates Ltd. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="hover:text-[#a39784] transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span>·</span>
            <span className="hover:text-[#a39784] transition-colors cursor-pointer">
              Terms of Advisory
            </span>
            <span>·</span>
            <span className="hover:text-[#a39784] transition-colors cursor-pointer">
              Anti-Money Laundering (AML) Compliance
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

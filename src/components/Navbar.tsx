import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, Globe } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/realEstateData';

interface NavbarProps {
  onOpenConsultation: (topic?: string) => void;
  onFilterStatus?: (status: 'Buy' | 'Rent') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation, onFilterStatus }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Properties', href: '#properties' },
    { name: 'Buy', href: '#properties', action: () => onFilterStatus?.('Buy') },
    { name: 'Rent', href: '#properties', action: () => onFilterStatus?.('Rent') },
    { name: 'Sell With Us', href: '#services', action: () => onOpenConsultation('Selling a Property') },
    { name: 'About', href: '#about' },
    { name: 'Journal', href: '#journal' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0c0e]/92 backdrop-blur-md border-b border-[#252a32] py-4 shadow-2xl'
          : 'bg-gradient-to-b from-[#0b0c0e]/80 via-[#0b0c0e]/40 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Monogram */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-9 h-9 border border-[#c5a880]/60 flex items-center justify-center rotate-45 group-hover:border-[#c5a880] transition-colors duration-300">
              <span className="-rotate-45 font-brand text-xs font-semibold text-[#c5a880] tracking-widest">
                A
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-brand text-lg sm:text-xl font-bold tracking-[0.22em] text-[#f4efe8] uppercase leading-none">
                Aurevia
              </span>
              <span className="text-[9px] tracking-[0.3em] uppercase text-[#a39784] font-medium mt-1">
                Estates · Private Client
              </span>
            </div>
          </a>

          {/* Center Navigation Links */}
          <nav className="hidden xl:flex items-center gap-8 text-[13px] tracking-[0.14em] uppercase font-medium text-[#c4b9a8]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (link.action) {
                    link.action();
                  }
                }}
                className="hover:text-[#f4efe8] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[1px] after:bg-[#c5a880] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden md:flex items-center gap-5">
            <div className="hidden lg:flex items-center gap-2 text-xs text-[#a39784] tracking-wider uppercase font-mono">
              <Globe className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>LDN · NYC · MC</span>
            </div>

            <button
              onClick={() => onOpenConsultation('Private Client Advisory')}
              className="relative px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#0b0c0e] bg-gradient-to-r from-[#dfc6a3] via-[#c5a880] to-[#bfa073] hover:from-[#f5ebd9] hover:to-[#c5a880] transition-all duration-300 shadow-md shadow-[#c5a880]/15 hover:shadow-lg hover:shadow-[#c5a880]/25 flex items-center gap-1.5 active:scale-95 cursor-pointer"
            >
              <span>Schedule Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 xl:hidden">
            <button
              onClick={() => onOpenConsultation('Private Client Advisory')}
              className="md:hidden px-3 py-1.5 text-[10px] uppercase tracking-wider font-semibold bg-[#c5a880] text-[#0b0c0e]"
            >
              Consult
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#f4efe8] hover:text-[#c5a880] transition-colors focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0e1014]/98 backdrop-blur-xl border-t border-[#22262d] px-6 py-8 shadow-2xl transition-all">
          <div className="flex flex-col space-y-4 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (link.action) link.action();
                }}
                className="text-base uppercase tracking-[0.18em] font-medium text-[#d8cebf] hover:text-[#c5a880] py-2 border-b border-[#1a1e24] transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation('Private Client Advisory');
                }}
                className="w-full py-3 text-xs uppercase tracking-[0.2em] font-semibold bg-[#c5a880] text-[#0b0c0e]"
              >
                Schedule Private Consultation
              </button>
              <div className="flex items-center justify-center gap-2 text-xs text-[#a39784] font-mono pt-2">
                <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>+44 (0)20 7946 0982 · Global Desk</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

import React from 'react';
import { Shield, Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/plumbingData';

interface FooterProps {
  onOpenQuote: (service?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Col (2 cols on lg) */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-sky-600 flex items-center justify-center text-white">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white block leading-none">
                  Sah Dams
                </span>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-sky-400">
                  Plumbing Solutions
                </span>
              </div>
            </div>
            
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              Metroville’s premier licensed plumbing contractor providing master-grade residential repiping, commercial installations, leak detection, and 24/7 rapid emergency dispatch.
            </p>

            <div className="space-y-2 text-xs text-slate-400 font-mono">
              <p>{COMPANY_INFO.license}</p>
              <p>{COMPANY_INFO.bondedInsured}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">All Services</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Sah Dams</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">Project Portfolio</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">Verified Reviews</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Direct Contact</a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onOpenQuote(s.title)}
                    className="hover:text-sky-400 transition-colors text-left cursor-pointer"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Dispatch Column */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-white mb-4">
              24/7 Dispatch
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 mt-1 shrink-0" />
                <div>
                  <a href={`tel:${COMPANY_INFO.phoneClean}`} className="font-bold text-white hover:text-sky-300 font-mono">
                    {COMPANY_INFO.phone}
                  </a>
                  <p className="text-xs text-slate-400">Emergency Call Line</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 mt-1 shrink-0" />
                <div>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-slate-300 hover:text-white text-xs font-mono">
                    {COMPANY_INFO.email}
                  </a>
                  <p className="text-xs text-slate-400">Quotes & Inquiries</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 mt-1 shrink-0" />
                <p className="text-xs text-slate-400">
                  {COMPANY_INFO.address}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Quiet Legal and Disclaimer Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Sah Dams Plumbing Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span>Residential & Commercial Plumbing</span>
            <span>·</span>
            <span>Zero-Shortcuts Guarantee</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

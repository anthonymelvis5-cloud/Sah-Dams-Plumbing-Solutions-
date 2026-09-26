import React, { useState } from 'react';
import { 
  AlertTriangle, 
  Search, 
  Droplets, 
  Flame, 
  Wrench, 
  ShieldCheck, 
  ArrowRight, 
  Check, 
  Clock, 
  ShieldAlert
} from 'lucide-react';
import { SERVICES } from '../data/plumbingData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedModalService, setSelectedModalService] = useState<ServiceItem | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Services' },
    { id: 'emergency', label: 'Emergency 24/7' },
    { id: 'residential', label: 'Residential' },
    { id: 'water-systems', label: 'Water Heaters' },
    { id: 'commercial', label: 'Commercial Repiping' },
  ];

  const filteredServices = activeFilter === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeFilter);

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'AlertTriangle':
        return <AlertTriangle className="w-6 h-6 text-amber-600" />;
      case 'Search':
        return <Search className="w-6 h-6 text-blue-600" />;
      case 'Droplets':
        return <Droplets className="w-6 h-6 text-sky-600" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-orange-600" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-indigo-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      default:
        return <Wrench className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs sm:text-sm font-bold tracking-wider uppercase text-blue-700 mb-2">
            Comprehensive Plumbing Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Master-Grade Solutions for Every Pipeline
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            From critical late-night restorations to complex multi-fixture architectural plumbing, our licensed technicians arrive equipped with commercial-grade tools to diagnose, repair, and certify your systems.
          </p>
        </div>

        {/* Interactive Filter Controls (Functional button segmented control) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid (Clean Cards with Asymmetric Hierarchy) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service, index) => {
            const isEmergency = service.id === 'emergency-plumbing';
            return (
              <div
                key={service.id}
                className={`relative flex flex-col justify-between rounded-2xl p-6 sm:p-8 transition-all duration-300 bg-white border ${
                  isEmergency
                    ? 'border-blue-400/80 shadow-md shadow-blue-500/10 hover:border-blue-600'
                    : 'border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md'
                }`}
              >
                <div>
                  {/* Top Bar of Card */}
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center shrink-0">
                      {getServiceIcon(service.iconName)}
                    </div>
                    {/* Natural editorial index */}
                    <span className="text-xs font-mono text-slate-400 font-semibold">
                      0{index + 1}.
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Checklist bullets */}
                  <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-slate-700">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Footer Info & Action */}
                <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1 font-medium">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {service.estimatedTime}
                    </span>
                    <span className="text-slate-400">{service.warranty}</span>
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <button
                      onClick={() => onSelectService(service.title)}
                      className="flex-1 py-2.5 px-3 rounded-lg bg-slate-900 hover:bg-blue-600 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Request This Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => setSelectedModalService(service)}
                      className="py-2.5 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-xs transition-colors cursor-pointer"
                      title="View Details"
                    >
                      Specs
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Emergency Assistance Notice Strip */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-blue-900 via-slate-900 to-blue-950 text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-sky-400 shrink-0">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">
                Facing an Active Water or Sewer Emergency?
              </h4>
              <p className="text-sm text-slate-300">
                Turn off your main shutoff valve immediately. Our 24/7 master technician on-call is ready to dispatch.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href="tel:5557243267"
              className="w-full md:w-auto px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm shadow-md transition-all text-center whitespace-nowrap"
            >
              Call (555) 724-3267
            </a>
          </div>
        </div>

      </div>

      {/* Service Spec Details Modal */}
      {selectedModalService && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-150"
          onClick={() => setSelectedModalService(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
              <h3 className="text-xl font-bold text-slate-900">
                {selectedModalService.title} Specification
              </h3>
              <button
                onClick={() => setSelectedModalService(null)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-md"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              {selectedModalService.description}
            </p>

            <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-3">
              Included Standards & Work Scope
            </h4>
            <ul className="space-y-2 mb-6">
              {selectedModalService.details.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-slate-800">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-slate-50 p-4 rounded-xl mb-6 space-y-2 text-xs text-slate-600">
              <div className="flex justify-between">
                <span className="font-semibold text-slate-700">Estimated Duration:</span>
                <span>{selectedModalService.estimatedTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-slate-700">Trade Warranty:</span>
                <span className="text-blue-700 font-medium">{selectedModalService.warranty}</span>
              </div>
            </div>

            <button
              onClick={() => {
                onSelectService(selectedModalService.title);
                setSelectedModalService(null);
              }}
              className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-colors"
            >
              Request Quote for {selectedModalService.title}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

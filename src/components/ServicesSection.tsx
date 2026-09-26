import React from 'react';
import { KeyRound, TrendingUp, Building2, Landmark, ArrowUpRight } from 'lucide-react';

interface ServicesSectionProps {
  onOpenConsultation: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenConsultation }) => {
  const services = [
    {
      id: 'buy',
      title: 'Buy a Property',
      label: 'Acquisition Advisory',
      description: 'Personalized property searches and expert guidance for buyers. We represent your interests through discreet sourcing, technical valuations, and tough-minded negotiation.',
      icon: KeyRound,
      highlights: ['Off-market sourcing', 'Confidential representation', 'Legal & structural due diligence'],
    },
    {
      id: 'sell',
      title: 'Sell Your Property',
      label: 'Strategic Representation',
      description: 'Strategic marketing and professional representation for property owners. We craft museum-grade architectural monographs, private previews, and target qualified global buyers.',
      icon: Landmark,
      highlights: ['Cinematic visual curation', 'International buyer roadshows', 'Zero public listing option'],
    },
    {
      id: 'rent',
      title: 'Luxury Rentals',
      label: 'Seasonal & Long-Term',
      description: 'Premium rental properties for clients seeking exceptional temporary residences. Curated villas, ski chalets, and urban penthouses with full concierge capabilities.',
      icon: Building2,
      highlights: ['Turnkey luxury residences', 'Flexible tenancy agreements', 'Private staff arrangement'],
    },
    {
      id: 'investment',
      title: 'Property Investment',
      label: 'Portfolio Growth',
      description: 'Investment opportunities and market guidance for property investors. Identifying capital appreciation corridors, prime conversion assets, and yield optimization.',
      icon: TrendingUp,
      highlights: ['Cross-border structuring', 'Prime rental yield analytics', 'Exit horizon modeling'],
    },
  ];

  return (
    <section id="services" className="py-28 bg-[#0b0c0e] border-b border-[#1f242d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#c5a880]" />
              <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-[#c5a880]">
                Comprehensive Representation
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-[#f9f7f4] tracking-tight">
              Bespoke Real Estate Services
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#a39784] font-light leading-relaxed">
            From single trophy acquisitions to sovereign multi-jurisdiction real estate portfolios, our partners provide seamless institutional-grade guidance.
          </p>
        </div>

        {/* 4 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                onClick={() => onOpenConsultation(service.title)}
                className="bg-[#111419] border border-[#222731] hover:border-[#c5a880]/60 p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 group cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-[#c5a880]/5 relative overflow-hidden"
              >
                {/* Decorative accent hover glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#c5a880]/5 blur-2xl group-hover:bg-[#c5a880]/10 transition-colors pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 border border-[#2c3340] group-hover:border-[#c5a880] flex items-center justify-center text-[#c5a880] transition-colors">
                      <Icon className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.24em] font-mono text-[#a39784]">
                      {service.label}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif text-[#f9f7f4] group-hover:text-[#dfc6a3] transition-colors mb-3">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#8f8576] font-light leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-8">
                    {service.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#c4b9a8] font-light">
                        <span className="w-1.5 h-1.5 bg-[#c5a880]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-[#1d222b] flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.18em] font-semibold text-[#c5a880] group-hover:text-[#dfc6a3] transition-colors flex items-center gap-1.5">
                    <span>Engage Advisory</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-[#a39784] font-mono">
                    Confidential
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

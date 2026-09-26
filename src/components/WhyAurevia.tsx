import React from 'react';
import { Layers, LineChart, ShieldCheck, Globe2 } from 'lucide-react';

export const WhyAurevia: React.FC = () => {
  const pillars = [
    {
      title: 'Curated Properties',
      description: 'We do not aggregate mass listings. Every residence in our collection undergoes rigorous architectural assessment, physical inspection, and verification of title integrity.',
      icon: Layers,
      spec: '1 in 20 Acceptance Rate',
    },
    {
      title: 'Expert Market Knowledge',
      description: 'Our senior partners provide analytical depth on cross-border tax implications, micro-neighborhood valuation trends, planning covenants, and historical price resilience.',
      icon: LineChart,
      spec: 'Quarterly Prime Indices',
    },
    {
      title: 'Private Client Service',
      description: 'Discretion is our foundational tenet. We structure confidential acquisitions via designated corporate vehicles, NDAs, and secure private escrow without public exposure.',
      icon: ShieldCheck,
      spec: '100% Confidential Protocol',
    },
    {
      title: 'Global Network',
      description: 'Direct institutional presence in London, New York, Monaco, and Dubai allows our clients seamless cross-border representation and access to off-market inventory worldwide.',
      icon: Globe2,
      spec: '18 Prime Capitals',
    },
  ];

  return (
    <section className="py-24 bg-[#0e1014] border-b border-[#1f242d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#c5a880]" />
            <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-[#c5a880]">
              The Aurevia Advantage
            </span>
            <span className="w-6 h-[1px] bg-[#c5a880]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-[#f9f7f4] tracking-tight">
            Why Discerning Clients Choose Aurevia
          </h2>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className="bg-[#12151a] border border-[#222731] hover:border-[#c5a880]/50 p-8 flex flex-col justify-between transition-all duration-300 group shadow-md"
              >
                <div>
                  <div className="w-12 h-12 border border-[#2f3542] group-hover:border-[#c5a880] flex items-center justify-center text-[#c5a880] mb-6 transition-colors">
                    <Icon className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  
                  <span className="text-[10px] uppercase tracking-[0.24em] font-mono text-[#a39784] block mb-2">
                    Standard 0{i + 1}
                  </span>

                  <h3 className="text-xl font-serif text-[#f4efe8] group-hover:text-[#dfc6a3] transition-colors mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-[#8f8576] font-light leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1d222b] text-[10px] uppercase tracking-[0.18em] font-mono text-[#c5a880]">
                  {pillar.spec}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

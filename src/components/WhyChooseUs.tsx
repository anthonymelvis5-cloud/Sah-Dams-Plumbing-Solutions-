import React from 'react';
import { Award, Clock, FileText, ShieldCheck, CheckCircle2, PhoneCall } from 'lucide-react';
import { WHY_CHOOSE_US, COMPANY_INFO } from '../data/plumbingData';

interface WhyChooseUsProps {
  onOpenQuote: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenQuote }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-6 h-6 text-blue-600" />;
      case 'Clock':
        return <Clock className="w-6 h-6 text-sky-600" />;
      case 'FileText':
        return <FileText className="w-6 h-6 text-indigo-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6 text-teal-600" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-bold tracking-wider uppercase text-blue-700 mb-2">
            Why Property Owners Trust Sah Dams
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 [text-wrap:balance]">
            Plumbing Service Built on Standards, Not Shortcuts
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            We know finding a dependable contractor can be stressful. We distinguish ourselves through absolute transparent pricing, certified technical excellence, and respectful service.
          </p>
        </div>

        {/* 5 Pillars Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {WHY_CHOOSE_US.map((item, idx) => {
            const isFeatured = idx === 0 || idx === 2;
            return (
              <div
                key={idx}
                className={`rounded-2xl p-7 transition-all duration-200 border ${
                  isFeatured 
                    ? 'bg-slate-50/80 border-blue-200/80 shadow-sm hover:shadow-md' 
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-xs mb-5">
                  {getIcon(item.icon)}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-blue-700">0{idx + 1}.</span>
                  <h3 className="text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}

          {/* 6th Card: Direct Connect Action */}
          <div className="rounded-2xl p-7 bg-gradient-to-br from-blue-700 to-sky-800 text-white flex flex-col justify-between shadow-md">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white mb-5 border border-white/20">
                <PhoneCall className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">
                Speak With a Plumber Now
              </h3>
              <p className="text-sm text-sky-100 leading-relaxed mb-6">
                Have questions regarding water pressure, permits, or backflow testing? Our team is standing by to answer.
              </p>
            </div>
            
            <div className="flex flex-col gap-2">
              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="w-full py-2.5 px-4 rounded-lg bg-white text-blue-900 font-bold text-xs text-center shadow-sm hover:bg-sky-50 transition-colors"
              >
                Call {COMPANY_INFO.phone}
              </a>
              <button
                onClick={onOpenQuote}
                className="w-full py-2.5 px-4 rounded-lg bg-blue-800/80 hover:bg-blue-800 text-white font-semibold text-xs text-center border border-white/20 transition-colors cursor-pointer"
              >
                Request Quote Online
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

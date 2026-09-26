import React, { useState } from 'react';
import { Calculator, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { SERVICES } from '../data/plumbingData';

interface CostEstimatorProps {
  onApplyEstimate: (service: string, estimatedRange: string) => void;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({ onApplyEstimate }) => {
  const [selectedService, setSelectedService] = useState('leak-detection');
  const [propertyType, setPropertyType] = useState('residential');
  const [urgency, setUrgency] = useState('standard');

  const pricingMatrix: Record<string, { base: [number, number]; desc: string; time: string }> = {
    'emergency-plumbing': { base: [180, 450], desc: 'Immediate isolation, leak stoppage & urgent pipe clamp/repair', time: '< 45 min arrival' },
    'leak-detection': { base: [220, 480], desc: 'Non-invasive acoustic & thermal imaging diagnostic scan', time: '1 - 2 hours' },
    'drain-cleaning': { base: [160, 390], desc: 'Motorized auger or hydro-jetting with camera inspection', time: '1 - 2 hours' },
    'water-heaters': { base: [350, 1800], desc: 'Flush maintenance, valve repair, or complete tankless replacement', time: 'Same-day option' },
    'pipe-installation': { base: [400, 2400], desc: 'Localized copper section repair to multi-branch PEX upgrades', time: '1 - 2 days' },
    'bathroom-kitchen': { base: [250, 850], desc: 'Designer fixture installation, valve rough-in, or disposal install', time: '2 - 4 hours' },
  };

  const getCalculatedPrice = () => {
    const config = pricingMatrix[selectedService] || pricingMatrix['leak-detection'];
    let [low, high] = config.base;

    // Property multiplier
    if (propertyType === 'commercial') {
      low = Math.round(low * 1.35);
      high = Math.round(high * 1.45);
    }

    // Urgency multiplier
    if (urgency === 'emergency') {
      low = Math.round(low + 85);
      high = Math.round(high + 120);
    }

    return {
      low,
      high,
      desc: config.desc,
      time: config.time,
    };
  };

  const currentQuote = getCalculatedPrice();
  const currentServiceObj = SERVICES.find(s => s.id === selectedService);

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 rounded-3xl p-6 sm:p-10 lg:p-12 text-white shadow-2xl relative overflow-hidden">
          {/* Subtle blueprint pattern background */}
          <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Configuration Column (7 cols) */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400 mb-2">
                <Calculator className="w-4 h-4" />
                <span>Interactive Transparency Tool</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-4 text-white">
                Instant Estimate Calculator
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                We believe in straightforward numbers with zero bait-and-switch. Configure your job parameters below to review our typical upfront price ranges.
              </p>

              {/* Service Selection */}
              <div className="mb-6">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  1. Select Plumbing Service
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {SERVICES.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSelectedService(s.id)}
                      className={`p-2.5 rounded-lg text-xs font-semibold text-left transition-all cursor-pointer ${
                        selectedService === s.id
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 border border-slate-700'
                      }`}
                    >
                      {s.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Property & Urgency Selectors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    2. Property Classification
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setPropertyType('residential')}
                      className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        propertyType === 'residential'
                          ? 'bg-sky-500 text-slate-950 font-bold'
                          : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 border border-slate-700'
                      }`}
                    >
                      Residential
                    </button>
                    <button
                      type="button"
                      onClick={() => setPropertyType('commercial')}
                      className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        propertyType === 'commercial'
                          ? 'bg-sky-500 text-slate-950 font-bold'
                          : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 border border-slate-700'
                      }`}
                    >
                      Commercial
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    3. Required Response Urgency
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setUrgency('standard')}
                      className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        urgency === 'standard'
                          ? 'bg-sky-500 text-slate-950 font-bold'
                          : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 border border-slate-700'
                      }`}
                    >
                      Standard
                    </button>
                    <button
                      type="button"
                      onClick={() => setUrgency('emergency')}
                      className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        urgency === 'emergency'
                          ? 'bg-sky-500 text-slate-950 font-bold'
                          : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 border border-slate-700'
                      }`}
                    >
                      Immediate 24/7
                    </button>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Output Card (5 cols) */}
            <div className="lg:col-span-5 bg-white text-slate-900 rounded-2xl p-6 sm:p-8 shadow-xl border border-white/20">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                  Estimated Range
                </span>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Flat-Rate Model
                </span>
              </div>

              {/* Price Display */}
              <div className="mb-4">
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono tabular-nums tracking-tight">
                  ${currentQuote.low} – ${currentQuote.high}
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  *Standard scope benchmark based on {propertyType} rates.
                </p>
              </div>

              {/* Scope details */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-xs text-slate-600 mb-6 space-y-2">
                <div className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Service:</strong> {currentServiceObj?.title}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Scope:</strong> {currentQuote.desc}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Expected Timing:</strong> {currentQuote.time}</span>
                </div>
              </div>

              {/* Guarantee bullet */}
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-900 mb-6">
                <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Firm written quote provided on site before work commences</span>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => {
                  const serviceName = currentServiceObj?.title || 'Plumbing Service';
                  const estStr = `$${currentQuote.low} - $${currentQuote.high}`;
                  onApplyEstimate(serviceName, estStr);
                }}
                className="w-full py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Lock In This Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

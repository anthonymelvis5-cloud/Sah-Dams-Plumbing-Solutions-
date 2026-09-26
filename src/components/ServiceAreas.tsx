import React, { useState } from 'react';
import { MapPin, CheckCircle, Search, Clock, ArrowRight } from 'lucide-react';
import { SERVICE_AREAS } from '../data/plumbingData';

interface ServiceAreasProps {
  onOpenQuote: (serviceTitle?: string) => void;
}

export const ServiceAreas: React.FC<ServiceAreasProps> = ({ onOpenQuote }) => {
  const [zipInput, setZipInput] = useState('');
  const [zipStatus, setZipStatus] = useState<{ checked: boolean; covered: boolean; areaName?: string; eta?: string } | null>(null);

  const handleCheckZip = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanZip = zipInput.trim();
    if (!cleanZip) return;

    const matchedArea = SERVICE_AREAS.find((area) => 
      area.zipCodes.includes(cleanZip)
    );

    if (matchedArea) {
      setZipStatus({
        checked: true,
        covered: true,
        areaName: matchedArea.name,
        eta: matchedArea.avgResponse
      });
    } else {
      // If it starts with 972 or common nearby zip
      if (cleanZip.startsWith('972') || cleanZip.length === 5) {
        setZipStatus({
          checked: true,
          covered: true,
          areaName: 'Extended Greater Metroville Area',
          eta: '45 - 60 mins'
        });
      } else {
        setZipStatus({
          checked: true,
          covered: false
        });
      }
    }
  };

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs sm:text-sm font-bold tracking-wider uppercase text-blue-700 mb-2">
            Coverage & Dispatch Zones
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Serving Metroville & Surrounding Communities
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Our strategically dispersed fleet of mobile service units guarantees rapid dispatch across all major residential sectors and commercial districts.
          </p>
        </div>

        {/* Interactive Zip Code Checker */}
        <div className="max-w-xl mx-auto mb-14 bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-md">
          <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
            <Search className="w-4 h-4 text-blue-600" />
            <span>Check Immediate Service Availability</span>
          </h3>
          <p className="text-xs text-slate-500 mb-4">
            Enter your 5-digit zip code (e.g., 97201, 97210, 97225) to check response ETA:
          </p>

          <form onSubmit={handleCheckZip} className="flex gap-2 mb-3">
            <input
              type="text"
              maxLength={5}
              placeholder="e.g. 97205"
              value={zipInput}
              onChange={(e) => setZipInput(e.target.value.replace(/\D/g, ''))}
              className="flex-1 px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-colors shrink-0 cursor-pointer"
            >
              Check Area
            </button>
          </form>

          {zipStatus && zipStatus.checked && (
            <div className={`mt-3 p-3.5 rounded-xl text-xs flex items-start gap-2.5 transition-all ${
              zipStatus.covered 
                ? 'bg-emerald-50 border border-emerald-200 text-emerald-900' 
                : 'bg-amber-50 border border-amber-200 text-amber-900'
            }`}>
              {zipStatus.covered ? (
                <>
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-bold">
                      Coverage Confirmed for {zipStatus.areaName}!
                    </p>
                    <p className="text-emerald-700 mt-0.5">
                      Typical technician dispatch time: <strong>{zipStatus.eta}</strong>.
                    </p>
                    <button
                      onClick={() => onOpenQuote()}
                      className="mt-2 text-xs font-bold text-emerald-800 underline inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>Book Service for this Area</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </>
              ) : (
                <div className="flex-1">
                  <p className="font-bold">Extended Territory</p>
                  <p className="text-amber-800 mt-0.5">
                    Zip code {zipInput} is outside standard rapid response, but we may provide scheduled service. Call us at (555) 724-3267.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Service Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_AREAS.map((area) => (
            <div
              key={area.id}
              className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 transition-colors shadow-xs"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <h4 className="font-bold text-slate-900 text-base">
                    {area.name}
                  </h4>
                </div>
                <span className="flex items-center gap-1 text-xs font-mono font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                  <Clock className="w-3 h-3" />
                  {area.avgResponse}
                </span>
              </div>

              <p className="text-xs text-slate-600 mb-4">
                {area.coverageType}
              </p>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>Zips: {area.zipCodes.join(', ')}</span>
                <span className="text-blue-600 font-semibold cursor-pointer hover:underline" onClick={() => onOpenQuote()}>
                  Schedule →
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

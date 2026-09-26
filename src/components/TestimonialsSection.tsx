import React from 'react';
import { Star, ShieldCheck, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/plumbingData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-bold tracking-wider uppercase text-blue-700 mb-2">
            Verified Customer Reviews
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Trusted by Homeowners & Property Managers
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Read first-hand accounts from real residential and commercial clients who depend on Sah Dams Plumbing Solutions.
          </p>

          {/* Aggregate Rating Banner */}
          <div className="mt-6 inline-flex items-center gap-3 bg-slate-50 border border-slate-200/80 px-4 py-2 rounded-xl">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs font-bold text-slate-800">
              4.9 out of 5.0 Rating
            </span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="text-xs text-slate-500">
              Over 280+ Verified Area Reviews
            </span>
          </div>
        </div>

        {/* Testimonials Cards (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50/70 rounded-2xl p-7 border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow relative"
            >
              <div>
                {/* Header of review */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400 font-mono">
                    {item.date}
                  </span>
                </div>

                {/* Service Tag */}
                <p className="text-xs font-semibold text-blue-700 mb-3 uppercase tracking-wide">
                  {item.serviceType}
                </p>

                {/* Quote */}
                <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">
                  “{item.quote}”
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {item.author}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {item.location}
                  </p>
                </div>
                {item.verified && (
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/80">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

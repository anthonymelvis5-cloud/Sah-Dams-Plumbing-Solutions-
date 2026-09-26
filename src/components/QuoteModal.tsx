import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Phone, AlertCircle } from 'lucide-react';
import { SERVICES, COMPANY_INFO } from '../data/plumbingData';
import { QuoteFormData } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
  prefilledEstimate?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
  prefilledEstimate,
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    email: '',
    phone: '',
    serviceNeeded: preselectedService || SERVICES[0].title,
    propertyType: 'Residential',
    urgency: 'Same-Day Service',
    message: prefilledEstimate ? `Estimated range calculated: ${prefilledEstimate}. Need formal walkthrough.` : '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketNo, setTicketNo] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, serviceNeeded: preselectedService }));
    }
    if (prefilledEstimate) {
      setFormData((prev) => ({
        ...prev,
        message: `Estimated budget calculated via instant tool: ${prefilledEstimate}. Please confirm availability.`,
      }));
    }
  }, [preselectedService, prefilledEstimate]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Name is required.';
    if (!formData.phone.trim() || formData.phone.length < 7) errs.phone = 'Valid phone number is required.';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email is required.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const ticket = `SDP-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setTicketNo(ticket);
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={handleClose}
    >
      <div
        className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[95vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-6 text-center animate-in fade-in duration-200">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-5">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Free Quote Request Received!
            </h3>
            <p className="text-sm font-mono text-blue-700 font-bold mb-4">
              Ticket Reference #{ticketNo}
            </p>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              Our dispatch team has queued your inquiry for <strong>{formData.serviceNeeded}</strong>. A master plumbing technician will contact you shortly at <strong>{formData.phone}</strong>.
            </p>
            <div className="bg-slate-50 p-4 rounded-xl text-xs text-slate-600 mb-6">
              <p>For urgent emergencies right now, call directly: <a href="tel:5557243267" className="font-bold text-blue-600">{COMPANY_INFO.phone}</a></p>
            </div>
            <button
              onClick={handleClose}
              className="px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs uppercase font-bold tracking-wider text-blue-700">
                Direct Service Dispatch
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Request a Free Quote
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Zero obligations. Upfront flat-rate pricing confirmed prior to any work.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.name && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="(555) 724-3267"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.email && (
                  <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.email}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Required Service
                  </label>
                  <select
                    value={formData.serviceNeeded}
                    onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="General Inspection / Other">General Inspection / Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Urgency
                  </label>
                  <select
                    value={formData.urgency}
                    onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option value="Emergency (Within 45m)">Emergency (&lt; 45 mins)</option>
                    <option value="Same-Day Service">Same-Day Service</option>
                    <option value="Within 48 Hours">Within 48 Hours</option>
                    <option value="Flexible Schedule">Flexible Schedule</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Brief Project Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us what is leaking, fixture type, or service location..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Quote Request</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-2">
                <span>Or speak with dispatch directly:</span>
                <a href={`tel:${COMPANY_INFO.phoneClean}`} className="font-bold text-blue-700 hover:underline flex items-center gap-1">
                  <Phone className="w-3 h-3" />
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, CheckCircle2, Send, AlertCircle } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/plumbingData';
import { QuoteFormData } from '../types';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService = '' }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    email: '',
    phone: '',
    serviceNeeded: initialService || SERVICES[0].title,
    propertyType: 'Residential Single-Family',
    urgency: 'Same-Day Service',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketNumber, setTicketNumber] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Please provide a valid email address.';
    if (!formData.phone.trim() || formData.phone.length < 7) errs.phone = 'Please provide a contact phone number.';
    if (!formData.message.trim()) errs.message = 'Please provide a brief description of the issue or project.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Generate realistic simulated service dispatch ticket
    const randomTicket = `SDP-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setTicketNumber(randomTicket);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs sm:text-sm font-bold tracking-wider uppercase text-blue-700 mb-2">
            Direct Dispatch & Consultation
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Contact Sah Dams Plumbing Solutions
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Request your free comprehensive estimate or inquire about upcoming residential or commercial projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-lg">
            {submitted ? (
              <div className="py-8 text-center animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Quote Request Confirmed!
                </h3>
                <p className="text-sm font-mono text-blue-700 font-bold mb-4">
                  Reference Ticket #{ticketNumber}
                </p>
                <p className="text-slate-600 text-sm max-w-md mx-auto mb-6 leading-relaxed">
                  Thank you, <span className="font-semibold text-slate-800">{formData.name}</span>. A master dispatch coordinator has received your request for <strong>{formData.serviceNeeded}</strong> and will call you at <strong>{formData.phone}</strong> within 15 minutes.
                </p>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 max-w-sm mx-auto text-xs text-slate-500 mb-6">
                  <p>Urgency Level: <strong className="text-slate-800">{formData.urgency}</strong></p>
                  <p>Confirmation email sent to: <strong className="text-slate-800">{formData.email}</strong></p>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      serviceNeeded: SERVICES[0].title,
                      propertyType: 'Residential Single-Family',
                      urgency: 'Same-Day Service',
                      message: '',
                    });
                  }}
                  className="px-6 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Johnathan Miller"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                        errors.name ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="(555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                        errors.phone ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                        errors.email ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Service Needed *
                    </label>
                    <select
                      value={formData.serviceNeeded}
                      onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="General Inspection / Other">General Inspection / Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Property Type
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    >
                      <option value="Residential Single-Family">Residential Single-Family</option>
                      <option value="Townhome / Condo">Townhome / Condo</option>
                      <option value="Commercial Facility">Commercial Facility</option>
                      <option value="Industrial / Multi-Tenant">Industrial / Multi-Tenant</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Preferred Timeline / Urgency
                    </label>
                    <select
                      value={formData.urgency}
                      onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    >
                      <option value="Urgent 24/7 Emergency (Within 45m)">Urgent 24/7 Emergency (&lt;45m)</option>
                      <option value="Same-Day Service">Same-Day Service</option>
                      <option value="Within 48 Hours">Within 48 Hours</option>
                      <option value="Planning / In Advance">Planning / In Advance</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Project / Problem Details *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Please describe the plumbing issue, fixtures, location in building, or project scope..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                      errors.message ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Free Quote Request</span>
                </button>

                <p className="text-center text-xs text-slate-400">
                  Your information is kept strictly confidential. We never share customer data.
                </p>
              </form>
            )}
          </div>

          {/* Right Column: Fictional Business Contact Information (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="bg-slate-900 text-white rounded-2xl p-8 shadow-xl border border-slate-800">
              <h3 className="text-xl font-bold mb-1 text-white">
                Sah Dams Headquarters
              </h3>
              <p className="text-xs uppercase font-mono tracking-wider text-sky-400 mb-6">
                Official Business & Dispatch Details
              </p>

              <div className="space-y-6 text-sm">
                
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-sky-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase text-slate-400 font-semibold">Customer Dispatch & Hotline</span>
                    <a
                      href={`tel:${COMPANY_INFO.phoneClean}`}
                      className="text-lg font-bold text-white hover:text-sky-300 transition-colors font-mono"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                    <span className="block text-xs text-emerald-400 font-medium mt-0.5">24/7/365 Emergency Dispatch</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-sky-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase text-slate-400 font-semibold">Service & Estimating Email</span>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-white hover:text-sky-300 transition-colors font-mono text-sm"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-sky-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase text-slate-400 font-semibold">Central Operations Center</span>
                    <p className="text-slate-300 leading-relaxed">
                      {COMPANY_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-sky-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase text-slate-400 font-semibold">Regular Service Hours</span>
                    <p className="text-slate-300">
                      {COMPANY_INFO.hours}
                    </p>
                    <p className="text-xs text-sky-400 font-semibold mt-1">
                      Emergency Units: Active 24 Hours Every Day
                    </p>
                  </div>
                </div>

                {/* License & Certification */}
                <div className="flex items-start gap-4 pt-4 border-t border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-sky-400 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase text-slate-400 font-semibold">Licensing & Credentials</span>
                    <p className="text-xs font-mono text-slate-300">
                      {COMPANY_INFO.license}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {COMPANY_INFO.bondedInsured}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Map or Dispatch Visual Card */}
            <div className="mt-6 bg-blue-50 rounded-2xl p-6 border border-blue-200/80">
              <h4 className="text-sm font-bold text-blue-900 mb-1">
                Same-Day Guarantee
              </h4>
              <p className="text-xs text-blue-800 leading-relaxed">
                Calls placed before 2:00 PM for standard non-emergency appointments are guaranteed a same-day diagnostic visit within our primary zones.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

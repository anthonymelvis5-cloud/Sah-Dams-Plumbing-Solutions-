import React, { useState } from 'react';
import { COMPANY_DETAILS } from '../data/realEstateData';
import { Send, CheckCircle2, Phone, Mail, MapPin, Globe, Shield, Clock, AlertCircle } from 'lucide-react';

interface ContactSectionProps {
  initialInterest?: string;
  initialLocation?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialInterest = 'Buying',
  initialLocation = '',
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    interest: initialInterest,
    preferredLocation: initialLocation || 'London',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name.';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Please provide a valid email address.';
    if (!formData.phone.trim()) errs.phone = 'Please provide a contact telephone number.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const ref = `AUR-${Math.floor(10000 + Math.random() * 90000)}`;
    setReferenceId(ref);
    setSubmitted(true);
  };

  const locations = ['London', 'New York', 'Miami', 'Dubai', 'Monaco', 'Los Angeles', 'Other Prime Capital'];
  const interests = ['Buying', 'Selling', 'Renting', 'Investing'];

  return (
    <section id="contact" className="py-28 bg-[#0b0c0e] relative border-b border-[#1f242d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#c5a880]" />
            <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-[#c5a880]">
              Private Communication
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-[#f9f7f4] tracking-tight mb-4">
            Connect With Aurevia Estates
          </h2>
          <p className="text-xs sm:text-sm text-[#a39784] font-light leading-relaxed">
            Our private client partners manage all communications under strict confidentiality protocols.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#111419] border border-[#232832] p-8 sm:p-12 shadow-2xl">
            {submitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 border border-[#c5a880] flex items-center justify-center text-[#c5a880] mx-auto">
                  <CheckCircle2 className="w-8 h-8 stroke-[1.5]" />
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-[0.26em] font-mono text-[#c5a880]">
                    Inquiry Confirmed · Ref #{referenceId}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#f9f7f4]">
                    Thank You, {formData.fullName}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#a39784] max-w-md mx-auto leading-relaxed font-light">
                  A senior private client partner specializing in <strong>{formData.preferredLocation}</strong> will review your parameters and reach out confidentially within 4 business hours.
                </p>

                <div className="p-4 bg-[#0b0c0e] border border-[#1f242d] max-w-sm mx-auto text-xs text-[#8f8576] font-mono">
                  <span>Interest: {formData.interest}</span>
                  <span className="mx-2">·</span>
                  <span>Contact: {formData.email}</span>
                </div>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: '',
                      email: '',
                      phone: '',
                      interest: 'Buying',
                      preferredLocation: 'London',
                      message: '',
                    });
                  }}
                  className="px-6 py-2.5 text-xs uppercase tracking-[0.16em] font-semibold text-[#0b0c0e] bg-[#c5a880] hover:bg-[#dfc6a3] transition-colors cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Full Name */}
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-semibold text-[#a39784] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Eleanor Vance"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`w-full bg-[#0b0c0e] text-[#f4efe8] border px-4 py-3 text-xs tracking-wider focus:outline-none transition-colors ${
                      errors.fullName ? 'border-red-400' : 'border-[#282e38] focus:border-[#c5a880]'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] font-semibold text-[#a39784] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="client@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full bg-[#0b0c0e] text-[#f4efe8] border px-4 py-3 text-xs tracking-wider focus:outline-none transition-colors ${
                        errors.email ? 'border-red-400' : 'border-[#282e38] focus:border-[#c5a880]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] font-semibold text-[#a39784] mb-2">
                      Telephone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      placeholder="+44 20 0000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full bg-[#0b0c0e] text-[#f4efe8] border px-4 py-3 text-xs tracking-wider focus:outline-none transition-colors ${
                        errors.phone ? 'border-red-400' : 'border-[#282e38] focus:border-[#c5a880]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Interest: Buying / Selling / Renting / Investing */}
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-semibold text-[#a39784] mb-2">
                    I am interested in:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {interests.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setFormData({ ...formData, interest: item })}
                        className={`py-2.5 px-3 text-xs uppercase tracking-wider font-medium border transition-all cursor-pointer ${
                          formData.interest === item
                            ? 'bg-[#c5a880] text-[#0b0c0e] border-[#c5a880] font-bold'
                            : 'bg-[#0b0c0e] text-[#a39784] border-[#222730] hover:text-[#f4efe8]'
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Preferred Location */}
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-semibold text-[#a39784] mb-2">
                    Preferred Location
                  </label>
                  <select
                    value={formData.preferredLocation}
                    onChange={(e) => setFormData({ ...formData, preferredLocation: e.target.value })}
                    className="w-full bg-[#0b0c0e] text-[#f4efe8] border border-[#282e38] px-4 py-3 text-xs tracking-wider focus:outline-none focus:border-[#c5a880]"
                  >
                    {locations.map((loc) => (
                      <option key={loc} value={loc} className="bg-[#121418] text-[#f4efe8]">
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-semibold text-[#a39784] mb-2">
                    Specific Parameters / Requirements (Optional)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about desired architectural style, square footage, security needs, or transaction timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#0b0c0e] text-[#f4efe8] border border-[#282e38] px-4 py-3 text-xs tracking-wider focus:outline-none focus:border-[#c5a880]"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-4 text-xs uppercase tracking-[0.2em] font-semibold text-[#0b0c0e] bg-gradient-to-r from-[#dfc6a3] via-[#c5a880] to-[#bfa073] hover:from-[#f5ebd9] hover:to-[#dfc6a3] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-95"
                >
                  <Send className="w-3.5 h-3.5 text-[#0b0c0e]" />
                  <span>Transmit Private Inquiry</span>
                </button>

                <p className="text-center text-[10px] uppercase tracking-[0.16em] text-[#786f62] font-mono">
                  Guaranteed confidential processing · Non-disclosure protected
                </p>
              </form>
            )}
          </div>

          {/* Fictional Global Offices Contact Information (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <span className="text-[10px] uppercase tracking-[0.28em] font-mono text-[#c5a880] block">
                Global Headquarters & Desks
              </span>

              {COMPANY_DETAILS.offices.map((office, idx) => (
                <div key={idx} className="p-6 bg-[#111317] border border-[#20252e] space-y-3">
                  <div className="flex items-center justify-between border-b border-[#1c2028] pb-2">
                    <h4 className="text-lg font-serif text-[#f9f7f4]">
                      {office.city} Office
                    </h4>
                    <span className="text-[9px] uppercase tracking-[0.2em] font-mono text-[#c5a880]">
                      Active Desk
                    </span>
                  </div>

                  <div className="space-y-2 text-xs text-[#a39784] font-light">
                    <p className="flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#c5a880] shrink-0 mt-0.5" />
                      <span>{office.address}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#c5a880] shrink-0" />
                      <a href={`tel:${office.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-[#f4efe8] transition-colors font-mono">
                        {office.phone}
                      </a>
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-[#c5a880] shrink-0" />
                      <a href={`mailto:${office.email}`} className="hover:text-[#f4efe8] transition-colors font-mono">
                        {office.email}
                      </a>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Private Hours Note */}
            <div className="p-5 bg-[#0e1014] border border-[#232832] text-xs text-[#8f8576] space-y-1">
              <div className="flex items-center gap-2 text-[#dfc6a3] font-mono text-[11px] mb-1">
                <Clock className="w-3.5 h-3.5" />
                <span>24/7 International Desk for Sovereign Clients</span>
              </div>
              <p className="font-light">
                Secure encrypted channels available via Signal, WhatsApp, and private courier upon request.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { X, Send, CheckCircle2, Calendar, Phone, ShieldCheck, Clock, AlertCircle } from 'lucide-react';
import { Property } from '../types/realEstate';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
  selectedProperty?: Property | null;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialTopic = 'Private Client Advisory',
  selectedProperty,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    viewingType: 'In-Person Private Tour',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  if (!isOpen) return null;

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Full name is required.';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email address is required.';
    if (!formData.phone.trim()) errs.phone = 'Phone number is required.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setTicketId(`AUR-CAL-${Math.floor(1000 + Math.random() * 9000)}`);
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#07080a]/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
      onClick={handleClose}
    >
      <div
        className="bg-[#101216] border border-[#2a2f3a] text-[#f4efe8] max-w-xl w-full my-auto shadow-2xl relative max-h-[92vh] overflow-y-auto p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 text-[#a39784] hover:text-[#f4efe8] p-1.5 transition-colors cursor-pointer"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-5 animate-in fade-in">
            <div className="w-16 h-16 border border-[#c5a880] flex items-center justify-center text-[#c5a880] mx-auto">
              <CheckCircle2 className="w-8 h-8 stroke-[1.5]" />
            </div>

            <span className="text-[10px] uppercase tracking-[0.24em] font-mono text-[#c5a880] block">
              Schedule Reserved · Ref #{ticketId}
            </span>

            <h3 className="text-2xl font-serif text-[#f9f7f4]">
              Consultation Scheduled
            </h3>

            <p className="text-xs sm:text-sm text-[#a39784] font-light leading-relaxed max-w-md mx-auto">
              Thank you, {formData.name}. Our private client concierge will contact you at <strong>{formData.phone}</strong> to confirm security protocols, chauffeur coordination, and exact calendar timing.
            </p>

            {selectedProperty && (
              <div className="p-3 bg-[#0b0c0e] border border-[#1f242d] text-xs text-[#dfc6a3] font-mono max-w-sm mx-auto">
                Requested Residence: {selectedProperty.name}
              </div>
            )}

            <button
              onClick={handleClose}
              className="px-6 py-2.5 text-xs uppercase tracking-[0.16em] font-semibold text-[#0b0c0e] bg-[#c5a880] hover:bg-[#dfc6a3] transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[10px] uppercase tracking-[0.26em] font-mono text-[#c5a880] block mb-1">
                Aurevia Private Advisory
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#f9f7f4]">
                {selectedProperty ? `Viewing: ${selectedProperty.name}` : initialTopic}
              </h3>
              <p className="text-xs text-[#a39784] mt-1 font-light">
                Please indicate your preferred appointment details. All consultations are bound by complete non-disclosure.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] font-semibold text-[#a39784] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#0b0c0e] text-[#f4efe8] border border-[#282e38] px-3.5 py-2.5 text-xs tracking-wider focus:outline-none focus:border-[#c5a880]"
                />
                {errors.name && (
                  <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.name}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-semibold text-[#a39784] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#0b0c0e] text-[#f4efe8] border border-[#282e38] px-3.5 py-2.5 text-xs tracking-wider focus:outline-none focus:border-[#c5a880]"
                  />
                  {errors.email && (
                    <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-semibold text-[#a39784] mb-1">
                    Telephone *
                  </label>
                  <input
                    type="tel"
                    placeholder="+44 20 ..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#0b0c0e] text-[#f4efe8] border border-[#282e38] px-3.5 py-2.5 text-xs tracking-wider focus:outline-none focus:border-[#c5a880]"
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-semibold text-[#a39784] mb-1">
                    Preferred Date & Time
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Next Tuesday afternoon"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full bg-[#0b0c0e] text-[#f4efe8] border border-[#282e38] px-3.5 py-2.5 text-xs tracking-wider focus:outline-none focus:border-[#c5a880]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-semibold text-[#a39784] mb-1">
                    Consultation Format
                  </label>
                  <select
                    value={formData.viewingType}
                    onChange={(e) => setFormData({ ...formData, viewingType: e.target.value })}
                    className="w-full bg-[#0b0c0e] text-[#f4efe8] border border-[#282e38] px-3.5 py-2.5 text-xs tracking-wider focus:outline-none focus:border-[#c5a880]"
                  >
                    <option value="In-Person Private Tour">In-Person Private Tour</option>
                    <option value="Mayfair / NYC Office Meeting">Mayfair / NYC Office Meeting</option>
                    <option value="Encrypted Virtual Dossier Walkthrough">Encrypted Virtual Walkthrough</option>
                    <option value="Private Representative / Family Office Desk">Representative / Family Office Desk</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] font-semibold text-[#a39784] mb-1">
                  Confidential Brief / Notes (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Security preferences, representative details, or specific architectural questions..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#0b0c0e] text-[#f4efe8] border border-[#282e38] px-3.5 py-2 text-xs tracking-wider focus:outline-none focus:border-[#c5a880]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 text-xs uppercase tracking-[0.2em] font-semibold text-[#0b0c0e] bg-gradient-to-r from-[#dfc6a3] via-[#c5a880] to-[#bfa073] hover:from-[#f5ebd9] hover:to-[#dfc6a3] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-95"
              >
                <Send className="w-3.5 h-3.5 text-[#0b0c0e]" />
                <span>Confirm Consultation Request</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

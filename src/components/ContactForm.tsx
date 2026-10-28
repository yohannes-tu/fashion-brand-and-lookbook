import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { validateInquiryForm, InquiryFormData } from '../utils/filterSort';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    email: '',
    inquiryType: 'Editorial commission',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedData, setSubmittedData] = useState<InquiryFormData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const inquiryTypes = [
    'Editorial commission',
    'Fashion collaboration',
    'Styling request',
    'Press inquiry',
    'General inquiry',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateInquiryForm(formData);

    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate reliable feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
    }, 600);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      name: '',
      email: '',
      inquiryType: 'Editorial commission',
      subject: '',
      message: '',
    });
  };

  return (
    <section id="contact-section" className="py-24 bg-[#08090B] border-t border-neutral-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D6FF3F] block">
            COMMISSIONS & DIALOGUE
          </span>
          <h2 className="text-3xl sm:text-5xl font-syne font-bold text-[#F2F0EA] tracking-tight">
            LET'S CREATE SOMETHING UNEXPECTED.
          </h2>
          <p className="text-sm font-light text-neutral-400 leading-relaxed">
            For editorial commissions, creative collaborations, styling inquiries, and selected projects, get in touch with our atelier.
          </p>
        </div>

        <div className="bg-neutral-950/90 border border-neutral-800 rounded-sm p-6 sm:p-10 shadow-2xl">
          {submittedData ? (
            <div className="text-center py-8 space-y-6">
              <div className="w-12 h-12 rounded-full bg-[#D6FF3F]/10 border border-[#D6FF3F] flex items-center justify-center mx-auto text-[#D6FF3F]">
                <CheckCircle2 className="w-6 h-6" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-syne font-bold text-[#F2F0EA]">
                  Inquiry Received by Atelier Nøir
                </h3>
                <p className="text-sm text-neutral-400 font-light max-w-lg mx-auto">
                  Thank you, <strong className="text-white">{submittedData.name}</strong>. Your inquiry regarding{' '}
                  <span className="text-[#D6FF3F]">"{submittedData.subject}"</span> has been logged into our atelier review queue.
                </p>
              </div>

              <div className="p-4 bg-neutral-900/60 border border-neutral-800 rounded-sm max-w-md mx-auto text-left text-xs font-mono text-neutral-300 space-y-1.5">
                <div className="text-[10px] uppercase text-neutral-500 font-bold">Inquiry Summary:</div>
                <div>Category: <span className="text-white">{submittedData.inquiryType}</span></div>
                <div>Contact: <span className="text-white">{submittedData.email}</span></div>
                <div className="text-[11px] text-neutral-500 italic pt-1">
                  * Note: In this interactive live portfolio prototype, your submission has verified validation logic and simulates atelier dispatch.
                </div>
              </div>

              <button
                onClick={handleReset}
                className="px-6 py-2.5 text-xs font-mono uppercase tracking-widest text-[#08090B] bg-[#D6FF3F] hover:bg-white font-bold rounded-sm transition-colors cursor-pointer"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="inquiry-name" className="block text-xs font-mono uppercase tracking-wider text-neutral-400">
                    Your Name *
                  </label>
                  <input
                    id="inquiry-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Helena Vance"
                    className="w-full px-4 py-3 bg-neutral-900/80 border border-neutral-800 rounded-sm text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#D6FF3F]"
                  />
                  {errors.name && (
                    <p className="text-xs text-rose-400 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="inquiry-email" className="block text-xs font-mono uppercase tracking-wider text-neutral-400">
                    Email Address *
                  </label>
                  <input
                    id="inquiry-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. contact@studio.com"
                    className="w-full px-4 py-3 bg-neutral-900/80 border border-neutral-800 rounded-sm text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#D6FF3F]"
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-400 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Inquiry Type */}
                <div className="space-y-2">
                  <label htmlFor="inquiry-type" className="block text-xs font-mono uppercase tracking-wider text-neutral-400">
                    Inquiry Classification *
                  </label>
                  <select
                    id="inquiry-type"
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-4 py-3 bg-neutral-900/80 border border-neutral-800 rounded-sm text-sm text-white focus:outline-none focus:border-[#D6FF3F]"
                  >
                    {inquiryTypes.map((type) => (
                      <option key={type} value={type} className="bg-neutral-950 text-white">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label htmlFor="inquiry-subject" className="block text-xs font-mono uppercase tracking-wider text-neutral-400">
                    Project Subject *
                  </label>
                  <input
                    id="inquiry-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Autumn 2026 Editorial Commission"
                    className="w-full px-4 py-3 bg-neutral-900/80 border border-neutral-800 rounded-sm text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#D6FF3F]"
                  />
                  {errors.subject && (
                    <p className="text-xs text-rose-400 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="inquiry-message" className="block text-xs font-mono uppercase tracking-wider text-neutral-400">
                  Project Details / Message (Min 15 chars) *
                </label>
                <textarea
                  id="inquiry-message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline the scope, dates, concept, or styling inquiry..."
                  className="w-full px-4 py-3 bg-neutral-900/80 border border-neutral-800 rounded-sm text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#D6FF3F]"
                />
                {errors.message && (
                  <p className="text-xs text-rose-400 flex items-center gap-1 font-mono">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-neutral-800">
                <div className="text-xs font-mono text-neutral-500">
                  Direct Atelier: <span className="text-neutral-300">contact@ateliernoir.paris</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 text-xs font-mono uppercase tracking-widest text-[#08090B] bg-[#D6FF3F] hover:bg-white transition-colors font-bold rounded-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <span>{isSubmitting ? 'Transmitting...' : 'Dispatch Inquiry'}</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

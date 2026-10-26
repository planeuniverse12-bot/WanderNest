import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  ShieldCheck,
  Calendar,
  Sparkles,
  Users
} from 'lucide-react';
import { CopyPlaceholderConfig } from '../data/copyData';

interface ContactUsSectionProps {
  config: CopyPlaceholderConfig;
  preselectedPackage?: string;
}

export const ContactUsSection: React.FC<ContactUsSectionProps> = ({
  config,
  preselectedPackage,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    contactValue: '',
    travelMonth: 'December - January (Peak Season)',
    travelersCount: '2 Adults (Honeymoon / Couple)',
    vacationStyle: preselectedPackage || 'Romantic Honeymoon & Couples Retreat',
    hotelCategory: 'Luxury 5-Star Beach Resort',
    specialWishes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsAppDirect = () => {
    const cleanPhone = config.whatsapp.replace(/[^\d]/g, '');
    const text = `Hello ${config.agencyName}! I would like to request a custom Andaman itinerary for ${formData.travelersCount}. Style: ${formData.vacationStyle}. Preferred month: ${formData.travelMonth}. Please share quotes!`;
    window.open(`https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Direct Island Concierge Desk
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Let’s Plan Your Island Escape. We Are Ready When You Are.
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Have questions about ferry timings, best seasons to visit, or need a customized quote within your budget? Speak directly to our local Andaman travel specialists. No robots, no generic call centers—just real islanders ready to craft your perfect getaway.
          </p>
        </div>

        {/* Contact Layout: Info Cards + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Island Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md space-y-6">
              <h3 className="text-xl font-bold text-slate-900 font-display">
                Get in Touch Directly
              </h3>

              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block">
                      Direct Island Phone
                    </span>
                    <a
                      href={`tel:${config.phone.replace(/\s+/g, '')}`}
                      className="text-base font-bold text-slate-900 hover:text-emerald-700"
                    >
                      {config.phone}
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">Instant call assistance & advice</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-teal-50/50 border border-teal-100">
                  <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-teal-800 block">
                      WhatsApp Quick Desk
                    </span>
                    <button
                      onClick={handleWhatsAppDirect}
                      className="text-base font-bold text-slate-900 hover:text-teal-700 text-left"
                    >
                      {config.whatsapp}
                    </button>
                    <p className="text-xs text-slate-500 mt-0.5">Quickest replies for itineraries & quotes</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-cyan-50/50 border border-cyan-100">
                  <div className="w-10 h-10 rounded-xl bg-cyan-600 text-white flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-800 block">
                      Official Email
                    </span>
                    <a
                      href={`mailto:${config.email}`}
                      className="text-sm font-bold text-slate-900 hover:text-cyan-700 break-all"
                    >
                      {config.email}
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">Custom proposals within 2 business hours</p>
                  </div>
                </div>

                {/* Physical Office Address */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
                      Physical Island Office
                    </span>
                    <p className="text-xs font-medium text-slate-800 leading-relaxed mt-0.5">
                      {config.address}
                    </p>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 text-white flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
                      Island Working Hours
                    </span>
                    <p className="text-xs font-medium text-slate-800 mt-0.5">
                      {config.workingHours}
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: High-Converting Custom Itinerary Request Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xl relative">
              
              {/* Form Headline */}
              <div className="mb-6 space-y-3 border-b border-slate-100 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                    Online Booking & Custom Itinerary Request
                  </h3>
                  <a
                    href="tel:+919474592930"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Desk: +91 94745 92930</span>
                  </a>
                </div>
                <p className="text-sm text-slate-600">
                  Select your package options below or send your request directly to our Andaman online booking desk at <strong>+91 94745 92930</strong> for instant confirmation within 15 minutes.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 font-display">
                    Thank You, Island Traveler!
                  </h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Your online booking inquiry has been prepared for {config.agencyName}'s direct reservations desk at <strong className="text-emerald-800">+91 94745 92930</strong>.
                  </p>
                  <div className="pt-4 flex flex-wrap justify-center gap-3">
                    <button
                      onClick={handleWhatsAppDirect}
                      className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-md transition-all flex items-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Confirm on WhatsApp (+91 94745 92930)</span>
                    </button>
                    <a
                      href="tel:+919474592930"
                      className="px-5 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-2"
                    >
                      <Phone className="w-4 h-4 text-emerald-400" />
                      <span>Call +91 94745 92930</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold transition-all"
                    >
                      Submit Another
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul & Neha Sharma"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        WhatsApp Number / Email *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. +91 94745 92930 or email"
                        value={formData.contactValue}
                        onChange={(e) => setFormData({ ...formData, contactValue: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Approx Travel Month / Dates
                      </label>
                      <select
                        value={formData.travelMonth}
                        onChange={(e) => setFormData({ ...formData, travelMonth: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white text-sm"
                      >
                        <option>October - November (Pleasant & Clear)</option>
                        <option>December - January (Peak Holiday Season)</option>
                        <option>February - April (Warm Breeze & Calm Waters)</option>
                        <option>May - September (Monsoon Lush & Budget)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Travelers Count
                      </label>
                      <select
                        value={formData.travelersCount}
                        onChange={(e) => setFormData({ ...formData, travelersCount: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white text-sm"
                      >
                        <option>2 Adults (Honeymoon / Couple)</option>
                        <option>3 to 5 (Family with Kids/Parents)</option>
                        <option>6 to 10 (Large Family / Friends Group)</option>
                        <option>Solo Traveler / Nature Enthusiast</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Vacation Style
                      </label>
                      <select
                        value={formData.vacationStyle}
                        onChange={(e) => setFormData({ ...formData, vacationStyle: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white text-sm"
                      >
                        <option>Romantic Honeymoon & Couples Retreat</option>
                        <option>Family Island Adventure & Coral Safari</option>
                        <option>Island Heritage, Baratang Caves & Nature Explorer</option>
                        <option>Custom Relaxed Multi-Island Explorer</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Preferred Resort Category
                      </label>
                      <select
                        value={formData.hotelCategory}
                        onChange={(e) => setFormData({ ...formData, hotelCategory: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white text-sm"
                      >
                        <option>Luxury 5-Star Beachfront Resort / Private Villa</option>
                        <option>Premium 4-Star Beach Resort</option>
                        <option>Charming Boutique Beach Cottages (Budget-friendly)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Special Wishes or Questions
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Want surprise candlelit beach dinner at Havelock, Baratang caves boat safari, and ground floor rooms for parents..."
                      value={formData.specialWishes}
                      onChange={(e) => setFormData({ ...formData, specialWishes: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-700 hover:to-teal-800 text-white font-bold text-base shadow-lg shadow-emerald-700/25 transition-all flex items-center justify-center gap-2"
                    >
                      {submitting ? (
                        <span>Designing Your Custom Plan...</span>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Send My Custom Itinerary Request</span>
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-center text-slate-600 mt-2 font-medium">
                      🔒 100% Free & No Obligation • We respect your privacy • Reply guaranteed within 2 hours.
                    </p>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

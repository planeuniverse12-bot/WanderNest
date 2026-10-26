import React from 'react';
import { 
  X, 
  Clock, 
  Check, 
  Calendar, 
  ShieldCheck, 
  ArrowRight,
  Phone
} from 'lucide-react';
import { PackageItem, CopyPlaceholderConfig } from '../data/copyData';

interface PackageModalProps {
  pkg: PackageItem | null;
  config: CopyPlaceholderConfig;
  onClose: () => void;
  onBookNow: (pkg: PackageItem) => void;
}

export const PackageModal: React.FC<PackageModalProps> = ({
  pkg,
  config,
  onClose,
  onBookNow,
}) => {
  if (!pkg) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-package-title"
      >
        {/* Header Image & Close Button */}
        <div className="relative h-64 sm:h-72 shrink-0">
          <img
            src={pkg.imageUrl}
            alt={pkg.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
          
          <button
            onClick={onClose}
            aria-label="Close Package Details Modal"
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white flex items-center justify-center backdrop-blur-xs transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600 text-xs font-bold uppercase tracking-wider">
              {pkg.badge}
            </span>
            <h2 id="modal-package-title" className="text-3xl font-extrabold font-display">
              {pkg.name}
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-200">
              <span className="flex items-center gap-1 font-semibold">
                <Clock className="w-4 h-4 text-emerald-300" /> {pkg.duration}
              </span>
              <span className="text-emerald-300 font-semibold bg-emerald-950/70 px-2.5 py-1 rounded-md">
                Target: {pkg.targetAudience}
              </span>
            </div>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          
          {/* Overview */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-800">
              Trip Overview & Emotional Hook
            </h3>
            <p className="text-base text-slate-700 leading-relaxed">
              {pkg.fullDescription}
            </p>
          </div>

          {/* Highlights & Inclusions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
            <div className="bg-emerald-50/50 p-5 rounded-2xl border border-emerald-100">
              <h4 className="text-sm font-bold text-emerald-900 mb-3 flex items-center gap-2">
                <SparkleIcon className="w-4 h-4 text-emerald-600" />
                Curated Experience Highlights
              </h4>
              <ul className="space-y-2 text-xs text-slate-700 font-medium">
                {pkg.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                All Inclusions (Zero Hidden Charges)
              </h4>
              <ul className="space-y-2 text-xs text-slate-700 font-medium">
                {pkg.inclusions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Day-by-Day Itinerary Teaser */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h4 className="text-base font-bold text-slate-900 font-display">
              Day-by-Day Island Itinerary Plan
            </h4>
            <div className="space-y-3">
              {pkg.dayHighlights.map((day) => (
                <div key={day.day} className="flex gap-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200/60 items-start">
                  <span className="shrink-0 px-2.5 py-1 bg-emerald-600 text-white font-bold text-xs rounded-lg">
                    {day.day}
                  </span>
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-slate-900">{day.title}</h5>
                    <p className="text-xs text-slate-600 mt-0.5">{day.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer with Actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div>
            <span className="text-xs text-slate-500 block">Starting Package Price</span>
            <span className="text-2xl font-extrabold text-slate-900">{pkg.priceStarting}</span>
            <span className="text-[11px] text-emerald-800 font-medium block">
              Online Booking Desk: +91 94745 92930
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
            <a
              href="tel:+919474592930"
              className="px-4 py-3 rounded-xl border border-slate-300 hover:border-emerald-400 bg-white text-slate-800 text-xs font-bold flex items-center gap-1.5 transition-all"
              title="Call booking desk +919474592930"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>Call Desk</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onBookNow(pkg);
              }}
              className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>Book Online (Desk: +91 94745 92930)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

function SparkleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" />
    </svg>
  );
}

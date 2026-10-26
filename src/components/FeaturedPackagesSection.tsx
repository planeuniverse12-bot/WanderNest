import React from 'react';
import { 
  Heart, 
  Users, 
  Landmark, 
  Clock, 
  Check, 
  ArrowRight, 
  Sparkles,
  Calendar
} from 'lucide-react';
import { PackageItem, MASTER_PACKAGES } from '../data/copyData';

interface FeaturedPackagesSectionProps {
  onSelectPackage: (pkg: PackageItem) => void;
  onBookPackage: (pkg: PackageItem) => void;
  onGetCustomQuote: () => void;
  filterAudience: 'All' | 'Couples' | 'Families' | 'Nature';
}

export const FeaturedPackagesSection: React.FC<FeaturedPackagesSectionProps> = ({
  onSelectPackage,
  onBookPackage,
  onGetCustomQuote,
  filterAudience,
}) => {
  // Filter packages based on selected audience if specified
  const filteredPackages = MASTER_PACKAGES.filter((pkg) => {
    if (filterAudience === 'All') return true;
    if (filterAudience === 'Couples') return pkg.targetAudience === 'Couples & Honeymooners';
    if (filterAudience === 'Families') return pkg.targetAudience === 'Families & Multi-Gen';
    if (filterAudience === 'Nature') return pkg.targetAudience === 'Nature & Heritage';
    return true;
  });

  return (
    <section id="packages" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Curated Signature Journeys
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Handcrafted Andaman Tour Packages
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Each package is thoughtfully engineered by local island specialists with guaranteed private catamaran bookings, premier beach resorts, and zero hassle.
          </p>
        </div>

        {/* 3 Featured Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => {
            const isHoneymoon = pkg.id === 'travel-andaman-with-joy';
            const isFamily = pkg.id === 'family-island-explorer';
            const isNature = pkg.id === 'island-heritage-nature-explorer';

            return (
              <div
                key={pkg.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Package Image & Badges */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={pkg.imageUrl}
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white shadow-md ${
                      isHoneymoon ? 'bg-rose-600' : isFamily ? 'bg-emerald-600' : 'bg-amber-600'
                    }`}>
                      {isHoneymoon && <Heart className="w-3.5 h-3.5" />}
                      {isFamily && <Users className="w-3.5 h-3.5" />}
                      {isNature && <Landmark className="w-3.5 h-3.5" />}
                      {pkg.badge}
                    </span>
                  </div>

                  {/* Duration Tag */}
                  <div className="absolute bottom-4 left-4 flex items-center text-white text-xs">
                    <span className="flex items-center gap-1 font-semibold bg-slate-950/70 backdrop-blur-xs px-2.5 py-1 rounded-md">
                      <Clock className="w-3.5 h-3.5 text-emerald-300" />
                      {pkg.duration}
                    </span>
                  </div>
                </div>

                {/* Package Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors font-display">
                        {pkg.name}
                      </h3>
                      <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wide mt-0.5">
                        {pkg.heroHeadline}
                      </p>
                    </div>

                    {/* Short enticing snippet (as requested in prompt) */}
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {pkg.shortSnippet}
                    </p>

                    {/* Highlights bullet points */}
                    <div className="pt-2">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                        Package Highlights
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {pkg.highlights.slice(0, 3).map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Pricing & CTAs */}
                  <div className="pt-4 border-t border-slate-100 space-y-3">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-[11px] text-slate-500 block">Starting From</span>
                        <span className="text-xl font-extrabold text-slate-900 block">
                          {pkg.priceStarting}
                        </span>
                        <span className="text-[10px] text-slate-500 font-medium">
                          Dedicated guide & vehicle included
                        </span>
                      </div>
                      <span className="text-[11px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-1 rounded-md shrink-0">
                        Ferries Included
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <button
                        onClick={() => onSelectPackage(pkg)}
                        className="py-2.5 px-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-semibold text-center transition-all"
                      >
                        View Itinerary
                      </button>
                      <button
                        onClick={() => onBookPackage(pkg)}
                        className={`py-2.5 px-3 rounded-xl text-white text-xs font-bold text-center shadow-xs transition-all flex items-center justify-center gap-1.5 ${
                          isHoneymoon
                            ? 'bg-rose-600 hover:bg-rose-700'
                            : isFamily
                            ? 'bg-emerald-600 hover:bg-emerald-700'
                            : 'bg-cyan-600 hover:bg-cyan-700'
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                        <span>Book Online</span>
                      </button>
                    </div>

                    <div className="text-[10px] text-center text-slate-500 pt-0.5">
                      Online Booking Desk: <strong className="text-emerald-800">+91 94745 92930</strong>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Custom Itinerary Banner */}
        <div className="mt-16 bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-400/30">
                <Sparkles className="w-3.5 h-3.5" /> Have Specific Travel Dates or Island Wishlists?
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display">
                Need a Custom Itinerary Handcrafted for Your Budget?
              </h3>
              <p className="text-sm text-slate-200 max-w-xl">
                Tell us your group size, travel style, and desired nights. Our local island trip designers will craft an itemized, non-binding quote in under 2 hours.
              </p>
            </div>

            <button
              onClick={onGetCustomQuote}
              className="shrink-0 bg-white hover:bg-emerald-50 text-emerald-950 font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all text-sm flex items-center gap-2"
            >
              <span>Get a Free Custom Quote</span>
              <ArrowRight className="w-4 h-4 text-emerald-700" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { 
  Heart, 
  Users, 
  Compass, 
  Palmtree, 
  CheckCircle2, 
  ArrowRight, 
  Ship, 
  MapPin, 
  Sparkles,
  Phone
} from 'lucide-react';
import { CopyPlaceholderConfig } from '../data/copyData';

interface HeroSectionProps {
  config: CopyPlaceholderConfig;
  selectedAudience: 'All' | 'Couples' | 'Families' | 'Nature';
  setSelectedAudience: (audience: 'All' | 'Couples' | 'Families' | 'Nature') => void;
  onBookEscape: () => void;
  onGetQuote: () => void;
  onOpenBookingModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  config,
  selectedAudience,
  setSelectedAudience,
  onBookEscape,
  onGetQuote,
  onOpenBookingModal,
}) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-20 lg:pt-14 lg:pb-28 bg-gradient-to-b from-emerald-50/60 via-teal-50/30 to-white">
      {/* Background Decorative Tropical Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-emerald-200/40 via-teal-200/30 to-cyan-200/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-10 -right-20 w-80 h-80 bg-teal-200/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Destination Ribbon */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-xs border border-emerald-200/80 shadow-xs px-3.5 py-1.5 rounded-full text-xs font-semibold text-emerald-950">
            <MapPin className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-emerald-800 font-bold">Port Blair • Havelock • Neil Island</span>
          </div>

          <div className="inline-flex items-center gap-1.5 bg-teal-100/80 text-teal-900 border border-teal-200/60 px-3 py-1 rounded-full text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Handcrafted Andaman Experiences</span>
          </div>
        </div>

        {/* Hero Copy (Primary Copywriting Output) */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          {/* Main Hero Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] font-display">
            Escape to Untamed Azure: Where Crystal Waters Meet Carefree Island Living.
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal">
            Sink your bare feet into powdery white sands, bask along mirror-clear turquoise shores, and leave every ferry ticket, resort stay, and itinerary detail to {config.agencyName}’s seasoned local insiders. Your dream island getaway begins effortlessly right here.
          </p>

          {/* Interactive Audience Filter to see copy personalized */}
          <div className="pt-2">
            <p className="text-xs uppercase tracking-wider font-bold text-slate-600 mb-2.5">
              Select Your Travel Style to Personalize:
            </p>
            <div className="inline-flex flex-wrap items-center justify-center p-1.5 bg-white/90 border border-slate-200 rounded-2xl shadow-xs gap-1.5">
              <button
                onClick={() => setSelectedAudience('All')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedAudience === 'All'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <Compass className="w-3.5 h-3.5" />
                All Travelers
              </button>
              <button
                onClick={() => setSelectedAudience('Couples')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedAudience === 'Couples'
                    ? 'bg-rose-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-rose-700 hover:bg-rose-50'
                }`}
              >
                <Heart className="w-3.5 h-3.5" />
                Couples & Honeymoon
              </button>
              <button
                onClick={() => setSelectedAudience('Families')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedAudience === 'Families'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-emerald-700 hover:bg-emerald-50'
                }`}
              >
                <Users className="w-3.5 h-3.5" />
                Family Explorer
              </button>
              <button
                onClick={() => setSelectedAudience('Nature')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedAudience === 'Nature'
                    ? 'bg-teal-700 text-white shadow-xs'
                    : 'text-slate-600 hover:text-teal-700 hover:bg-teal-50'
                }`}
              >
                <Palmtree className="w-3.5 h-3.5" />
                Nature & Heritage
              </button>
            </div>
          </div>

          {/* Dynamic Audience Copy Spotlight */}
          {selectedAudience !== 'All' && (
            <div className="bg-white/95 border border-emerald-200/80 rounded-2xl p-4 max-w-2xl mx-auto shadow-sm text-left animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0 mt-0.5">
                  {selectedAudience === 'Couples' && <Heart className="w-5 h-5 text-rose-600" />}
                  {selectedAudience === 'Families' && <Users className="w-5 h-5 text-emerald-700" />}
                  {selectedAudience === 'Nature' && <Palmtree className="w-5 h-5 text-teal-700" />}
                </div>
                <div className="text-sm">
                  <div className="font-bold text-slate-900 mb-0.5">
                    {selectedAudience === 'Couples' && 'Honeymoon & Romantic Sanctuary'}
                    {selectedAudience === 'Families' && 'Gentle, Multi-Gen Family Pacing'}
                    {selectedAudience === 'Nature' && 'Island Heritage, Mangrove Creeks & Caves'}
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm">
                    {selectedAudience === 'Couples' && 'Indulge in private beachfront candlelight dinners on Havelock sands, Asia’s finest sunset at Radhanagar Beach, and romantic catamaran cruises tailored for intimate unhurried moments.'}
                    {selectedAudience === 'Families' && 'Zero-rush schedules, interconnecting beachfront family suites, shallow lagoon beaches at Elephant & Bharatpur, and rich historical exploration at Ross Island and Cellular Jail.'}
                    {selectedAudience === 'Nature' && 'Explore ancient Baratang mangrove boat safaris, natural limestone caves, colonial heritage ruins of Ross Island, and Chidiya Tapu’s panoramic coastal sunset cliffs.'}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
            <button
              onClick={onOpenBookingModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-700 hover:to-teal-800 shadow-lg shadow-emerald-700/25 hover:shadow-xl transition-all group"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-300 animate-pulse"></span>
              <span>Book Online Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onGetQuote}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-bold text-slate-800 bg-white hover:bg-slate-50 border-2 border-slate-200 hover:border-emerald-300 shadow-sm transition-all"
            >
              <span>Get Free Custom Quote</span>
            </button>
          </div>

          {/* Quick Direct Desk Link */}
          <div className="pt-1 text-center">
            <a
              href="tel:+919474592930"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 px-3 py-1 rounded-full transition-colors"
            >
              <Phone className="w-3 h-3 text-emerald-600" />
              <span>Direct Booking Line: <strong>+91 94745 92930</strong> (Instant Island Desk)</span>
            </a>
          </div>

          {/* Micro-guarantee copy below CTA */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500 font-medium pt-1">
            <span className="flex items-center gap-1.5 text-emerald-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Guaranteed Private Catamaran Seats
            </span>
            <span className="flex items-center gap-1.5 text-emerald-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Free Custom Quote in 2 Hours
            </span>
            <span className="flex items-center gap-1.5 text-emerald-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 100% On-Ground Island Support
            </span>
          </div>

        </div>

        {/* Hero Visual Showcase Cards (Port Blair, Havelock, Neil) */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group relative rounded-3xl overflow-hidden shadow-lg border border-white/60 bg-white">
            <div className="h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=800&q=80"
                alt="Radhanagar Beach sunset in Havelock Island"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950/70 backdrop-blur-xs px-2.5 py-1 rounded-md border border-emerald-400/30">
                Couples & Romance
              </span>
              <h3 className="text-xl font-bold mt-2 text-white font-display">Havelock Island (Swaraj Dweep)</h3>
              <p className="text-xs text-slate-200 mt-1 line-clamp-2">
                Asia’s crowning Radhanagar sunset, private candlelight beach dinners, and tranquil starlit shores.
              </p>
            </div>
          </div>

          <div className="group relative rounded-3xl overflow-hidden shadow-lg border border-white/60 bg-white">
            <div className="h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
                alt="Elephant Beach shallow lagoon family tours"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
              <span className="text-[11px] font-bold uppercase tracking-wider text-teal-300 bg-teal-950/70 backdrop-blur-xs px-2.5 py-1 rounded-md border border-teal-400/30">
                Family & Multi-Gen
              </span>
              <h3 className="text-xl font-bold mt-2 text-white font-display">Elephant Beach & Ross Island</h3>
              <p className="text-xs text-slate-200 mt-1 line-clamp-2">
                Safe shallow waters, semi-submarine glass bottom boat tours, and friendly roaming deer.
              </p>
            </div>
          </div>

          <div className="group relative rounded-3xl overflow-hidden shadow-lg border border-white/60 bg-white">
            <div className="h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
                alt="Tropical mangrove safari and limestone caves in Andaman"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
              <span className="text-[11px] font-bold uppercase tracking-wider text-teal-300 bg-teal-950/70 backdrop-blur-xs px-2.5 py-1 rounded-md border border-teal-400/30">
                Nature & Heritage
              </span>
              <h3 className="text-xl font-bold mt-2 text-white font-display">Baratang Caves & Mangrove Safaris</h3>
              <p className="text-xs text-slate-200 mt-1 line-clamp-2">
                Ancient limestone caves, mangrove creek boat safaris, Chidiya Tapu sunsets, and colonial heritage.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { 
  Palmtree, 
  Heart, 
  ShieldCheck, 
  Users, 
  Leaf, 
  Sparkles
} from 'lucide-react';
import { CopyPlaceholderConfig } from '../data/copyData';

interface AboutUsSectionProps {
  config: CopyPlaceholderConfig;
  onContactClick: () => void;
}

export const AboutUsSection: React.FC<AboutUsSectionProps> = ({
  config,
  onContactClick,
}) => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white via-emerald-50/25 to-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Two-Column Company Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual & Trust Badges */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80"
                alt="Pristine white sand beach of Andaman Islands"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase tracking-wider font-bold text-emerald-300">
                  Rooted In The Andaman Islands
                </span>
                <h4 className="text-xl font-bold font-display mt-1">
                  Locally Owned, Island Run
                </h4>
                <p className="text-xs text-slate-200 mt-1">
                  Headquartered in Port Blair with active coordinators across Havelock & Neil Island.
                </p>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="bg-white p-4 rounded-2xl border border-emerald-100 shadow-xs">
                <div className="text-2xl font-extrabold text-emerald-700 font-display">12+</div>
                <div className="text-[11px] font-semibold text-slate-500 uppercase mt-0.5">Years On Island</div>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-emerald-100 shadow-xs">
                <div className="text-2xl font-extrabold text-teal-700 font-display">1,400+</div>
                <div className="text-[11px] font-semibold text-slate-500 uppercase mt-0.5">Trips Perfected</div>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-emerald-100 shadow-xs">
                <div className="text-2xl font-extrabold text-cyan-700 font-display">100%</div>
                <div className="text-[11px] font-semibold text-slate-500 uppercase mt-0.5">Ferry Assurance</div>
              </div>
            </div>
          </div>

          {/* Right Column: Company Story & Mission */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5 text-emerald-600" />
              Our Story & Heritage
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
              Born from Island Salt, Guided by Unwavering Hospitality.
            </h2>

            {/* Complete Company Story Copy */}
            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              <p>
                Our story began not in an office boardroom, but on the quiet shores of Havelock Island at dawn, watching traditional wooden fishing catamarans glide over mirror-calm coral reefs. For years, we watched travelers arrive in the Andamans eager for paradise—only to be overwhelmed by complicated government permits, confusing inter-island ferry schedules, rigid cookie-cutter tour buses, and missed connections.
              </p>
              <p>
                We knew the Andaman & Nicobar Islands deserved better. And more importantly, travelers deserved better.
              </p>
              <p>
                <strong className="text-slate-900 font-semibold">{config.agencyName}</strong> was founded with one clear, passionate conviction: to share the raw, authentic wonder of our island homeland with the warmth, care, and meticulous perfection of a private host. We grew up exploring every secret tide pool in Neil Island, trekking through Baratang's ancient mangrove canopies, and discovering hidden viewpoints across the archipelago.
              </p>
              <p>
                Today, that intimate local knowledge powers every journey we craft. We have transformed island travel from a confusing logistical puzzle into an art form—combining luxury comforts, handpicked resort partnerships, and guaranteed private catamaran connections with authentic island soul. When you travel with us, you aren't just visiting the Andamans; you are welcomed as family into our home.
              </p>
            </div>

            {/* Our Mission Statement Callout Box */}
            <div className="mt-8 p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-emerald-900 to-teal-900 text-white shadow-xl relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/30 border border-emerald-400/40 flex items-center justify-center text-emerald-300 shrink-0 mt-1">
                  <Leaf className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                    Our Mission Statement
                  </div>
                  <blockquote className="text-sm sm:text-base italic font-serif leading-relaxed text-slate-100">
                    "To open the enchanting landscapes, tranquil shores, and lush sanctuaries of the Andaman Islands through sustainable, eco-conscious travel—delivering deeply personalized, flawless journeys that delight our guests while fiercely preserving our fragile natural ecosystems and rich indigenous heritage for generations to come."
                  </blockquote>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

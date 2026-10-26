import React, { useState } from 'react';
import { 
  Palmtree, 
  Sun, 
  MapPin, 
  Compass, 
  Waves, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { CopyPlaceholderConfig, ISLAND_GUIDE } from '../data/copyData';

interface IntroductionSectionProps {
  config: CopyPlaceholderConfig;
  onExplorePackages: () => void;
}

export const IntroductionSection: React.FC<IntroductionSectionProps> = ({ 
  config, 
  onExplorePackages 
}) => {
  const [selectedIslandIndex, setSelectedIslandIndex] = useState(1); // Havelock default

  return (
    <section className="py-20 bg-gradient-to-b from-white via-emerald-50/20 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Two-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column: Primary Copywriting */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider">
              <Sun className="w-3.5 h-3.5 text-teal-600" />
              Welcome to the Magic of Andaman
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-display">
              Welcome to the Andaman Archipelago: A World Apart, Wonderfully Close.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              <p>
                Imagine an island sanctuary where the soundtrack of life fades into the gentle hush of the Bay of Bengal, where century-old rain trees canopy sugar-white coastlines, and where the water is so crystalline you can see schools of vibrant angelfish gliding through peaceful coastal shallows.
              </p>
              <p>
                At <strong className="text-slate-900 font-semibold">{config.agencyName}</strong>, we don't just book hotels and ferry rides—we unlock the living soul of the Andaman & Nicobar Islands. We understand that a tropical holiday isn't just a trip; it's the honeymoon you've dreamed of for months, the cherished family reunion where grandparents and toddlers smile together on a shaded boat, or the long-awaited escape into pristine island nature and heritage.
              </p>
              <p>
                With deep island roots, private catamaran partnerships, and an obsessive dedication to your comfort, we turn complex inter-island logistics into seamless moments of wonder. Breathe in the salty breeze; paradise is waiting for you.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onExplorePackages}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md transition-all group"
              >
                <span>View Featured Island Packages</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Direct Chauffeurs & Private Catamarans Ready</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Tropical Mosaic */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              <img
                src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=900&q=80"
                alt="Turquoise Andaman ocean with tranquil sandy shores"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/40">
                <div className="flex items-center justify-between text-xs text-emerald-800 font-bold mb-1">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    Pristine Natural Sanctuary
                  </span>
                  <span className="text-slate-500 font-normal">572 Islands</span>
                </div>
                <p className="text-xs text-slate-700 leading-snug">
                  Over 86% forested canopy, zero industrial pollution, and home to world-renowned coral banks.
                </p>
              </div>
            </div>

            {/* Floating Island Badge */}
            <div className="hidden sm:flex absolute -top-4 -right-4 bg-white shadow-xl rounded-2xl p-3 border border-emerald-100 items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center">
                <Palmtree className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-slate-900">Radhanagar Beach</div>
                <div className="text-[11px] text-emerald-700 font-medium">Asia's #1 Rated Beach</div>
              </div>
            </div>
          </div>

        </div>

        {/* Interactive Island Quick-Explorer Tabs */}
        <div className="mt-16 pt-12 border-t border-slate-200/80">
          <div className="text-center max-w-xl mx-auto mb-6">
            <span className="text-xs uppercase tracking-wider font-bold text-emerald-700">Explore The Islands</span>
            <h3 className="text-2xl font-bold text-slate-900 mt-1 font-display">Which Island Beckons You?</h3>
          </div>

          {/* Island Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            {ISLAND_GUIDE.map((island, idx) => (
              <button
                key={island.name}
                onClick={() => setSelectedIslandIndex(idx)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedIslandIndex === idx
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-emerald-300'
                }`}
              >
                {island.name}
              </button>
            ))}
          </div>

          {/* Active Island Info Box */}
          {ISLAND_GUIDE[selectedIslandIndex] && (
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-emerald-100 shadow-sm max-w-4xl mx-auto">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
                <div>
                  <h4 className="text-xl font-bold text-slate-900 font-display">
                    {ISLAND_GUIDE[selectedIslandIndex].name}
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-700 font-medium">
                    {ISLAND_GUIDE[selectedIslandIndex].title}
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold self-start sm:self-auto">
                  <span>Recommended: {ISLAND_GUIDE[selectedIslandIndex].stayDuration}</span>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mt-4">
                {ISLAND_GUIDE[selectedIslandIndex].desc}
              </p>

              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between flex-wrap gap-2 text-xs">
                <span className="text-slate-500">
                  <strong className="text-slate-700">Best for:</strong> {ISLAND_GUIDE[selectedIslandIndex].bestFor}
                </span>
                <span className="text-emerald-700 font-semibold cursor-pointer hover:underline" onClick={onExplorePackages}>
                  View trips covering this island &rarr;
                </span>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

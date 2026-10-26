import React from 'react';
import { 
  MapPin, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  Check, 
  Layers, 
  Anchor 
} from 'lucide-react';
import { CopyPlaceholderConfig } from '../data/copyData';

interface ValuePropsSectionProps {
  config: CopyPlaceholderConfig;
}

export const ValuePropsSection: React.FC<ValuePropsSectionProps> = ({ config }) => {
  return (
    <section className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200/60">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            The {config.agencyName} Difference
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Why Discerning Travelers Choose {config.agencyName}
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Three unbreakable promises engineered for seamless, magical tropical vacations with zero island stress.
          </p>
        </div>

        {/* 3 Core Value Propositions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Proposition 1 */}
          <div className="relative bg-gradient-to-b from-emerald-50/50 to-white p-8 rounded-3xl border border-emerald-100 shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mb-6 shadow-md shadow-emerald-700/20 group-hover:scale-105 transition-transform">
              <MapPin className="w-7 h-7" />
            </div>

            <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1">
              Promise 01
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">
              True Island Insiders (Zero Middlemen)
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              We are born, raised, and rooted in the Andaman Islands. From secret sunset coves away from crowds to hidden rainforest trails and guaranteed seats on high-speed private catamarans, you get authentic local access that generic mainland travel portals simply cannot offer.
            </p>

            <ul className="space-y-2.5 text-xs text-slate-700 font-medium pt-4 border-t border-emerald-100/80">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Direct contracts with Makruzz & Nautika cruises</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Hidden beaches & uncrowded photo spots</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Fresh seafood spots cherished by island locals</span>
              </li>
            </ul>
          </div>

          {/* Proposition 2 */}
          <div className="relative bg-gradient-to-b from-teal-50/50 to-white p-8 rounded-3xl border border-teal-100 shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-14 h-14 rounded-2xl bg-teal-600 text-white flex items-center justify-center mb-6 shadow-md shadow-teal-700/20 group-hover:scale-105 transition-transform">
              <Layers className="w-7 h-7" />
            </div>

            <div className="text-xs font-bold uppercase tracking-wider text-teal-700 mb-1">
              Promise 02
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">
              Tailor-Made For Your Travel Rhythm
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Whether you crave barefoot honeymoon seclusion, stress-free multi-generation family pacing with kid-safe lagoons, or immersive nature and heritage explorations, we handcraft every single day around your preferences, energy, and budget.
            </p>

            <ul className="space-y-2.5 text-xs text-slate-700 font-medium pt-4 border-t border-teal-100/80">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Zero rigid tour bus schedules</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Hand-matched resort styles and room views</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Flexible pacing tailored for toddlers to seniors</span>
              </li>
            </ul>
          </div>

          {/* Proposition 3 */}
          <div className="relative bg-gradient-to-b from-cyan-50/50 to-white p-8 rounded-3xl border border-cyan-100 shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-14 h-14 rounded-2xl bg-cyan-600 text-white flex items-center justify-center mb-6 shadow-md shadow-cyan-700/20 group-hover:scale-105 transition-transform">
              <Clock className="w-7 h-7" />
            </div>

            <div className="text-xs font-bold uppercase tracking-wider text-cyan-700 mb-1">
              Promise 03
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">
              24/7 On-Island Concierge & Safety Net
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              From the moment your flight lands at Port Blair to your final departure wave, our dedicated on-ground team is by your side. Flight delays, weather changes, or spontaneous itinerary tweaks? We handle everything instantly in real time so you never lose a minute of relaxation.
            </p>

            <ul className="space-y-2.5 text-xs text-slate-700 font-medium pt-4 border-t border-cyan-100/80">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-cyan-600 shrink-0" />
                <span>Personal WhatsApp trip manager on standby</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-cyan-600 shrink-0" />
                <span>Priority baggage handling at jetty harbors</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-cyan-600 shrink-0" />
                <span>Instant alternate ferry routing in stormy weather</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

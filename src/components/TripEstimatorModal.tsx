import React, { useState } from 'react';
import { 
  X, 
  Calculator, 
  Sparkles, 
  MapPin, 
  Calendar, 
  Users, 
  Hotel, 
  LifeBuoy, 
  Check, 
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { CopyPlaceholderConfig } from '../data/copyData';
import { 
  calculateTripEstimate, 
  buildWhatsAppInquiryUrl, 
  TripCalculationParams 
} from '../utils/tripCalculator';

interface TripEstimatorModalProps {
  config: CopyPlaceholderConfig;
  isOpen: boolean;
  onClose: () => void;
  onSelectEstimatedPlan: (packageName: string) => void;
}

export const TripEstimatorModal: React.FC<TripEstimatorModalProps> = ({
  config,
  isOpen,
  onClose,
  onSelectEstimatedPlan,
}) => {
  const [params, setParams] = useState<TripCalculationParams>({
    travelers: 2,
    durationNights: 5,
    hotelCategory: 'luxury',
    travelerType: 'couples',
    selectedIslands: ['Port Blair', 'Havelock (Swaraj Dweep)', 'Neil Island (Shaheed Dweep)'],
    selectedActivities: ['dinner', 'baratang'],
  });

  if (!isOpen) return null;

  const estimate = calculateTripEstimate(params);

  const toggleIsland = (island: string) => {
    if (params.selectedIslands.includes(island)) {
      if (params.selectedIslands.length > 1) {
        setParams({ ...params, selectedIslands: params.selectedIslands.filter(i => i !== island) });
      }
    } else {
      setParams({ ...params, selectedIslands: [...params.selectedIslands, island] });
    }
  };

  const toggleActivity = (activityKey: string) => {
    if (params.selectedActivities.includes(activityKey)) {
      setParams({ ...params, selectedActivities: params.selectedActivities.filter(a => a !== activityKey) });
    } else {
      setParams({ ...params, selectedActivities: [...params.selectedActivities, activityKey] });
    }
  };

  const handleWhatsAppQuote = () => {
    const url = buildWhatsAppInquiryUrl(config.whatsapp, params, estimate, config.agencyName);
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-estimator-title"
      >
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-emerald-900 to-teal-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h2 id="modal-estimator-title" className="text-xl font-bold font-display">
                Instant Andaman Vacation Estimator
              </h2>
              <p className="text-xs text-slate-300">
                Transparent budget calculator based on live private catamaran and resort tariffs
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Vacation Estimator Modal"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-sm">
          
          {/* Row 1: Traveler Type & Count */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Travel Style
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'couples', label: 'Couples' },
                  { id: 'family', label: 'Family' },
                  { id: 'nature', label: 'Nature & Culture' },
                ].map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setParams({ ...params, travelerType: type.id as any })}
                    className={`py-2 px-2 rounded-xl text-xs font-semibold text-center border transition-all ${
                      params.travelerType === type.id
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Number of Guests: {params.travelers} {params.travelers === 1 ? 'Person' : 'People'}
              </label>
              <input
                type="range"
                min={1}
                max={12}
                value={params.travelers}
                onChange={(e) => setParams({ ...params, travelers: parseInt(e.target.value) || 1 })}
                className="w-full accent-emerald-600 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>Solo (1)</span>
                <span>Couple (2)</span>
                <span>Family (4)</span>
                <span>Group (8+)</span>
              </div>
            </div>
          </div>

          {/* Row 2: Duration (Nights) & Hotel Tier */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Trip Duration: {params.durationNights} Nights / {params.durationNights + 1} Days
              </label>
              <input
                type="range"
                min={3}
                max={10}
                value={params.durationNights}
                onChange={(e) => setParams({ ...params, durationNights: parseInt(e.target.value) || 3 })}
                className="w-full accent-emerald-600 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>Quick (3N)</span>
                <span>Popular (5N)</span>
                <span>Extended (7N+)</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Resort Preference
              </label>
              <select
                value={params.hotelCategory}
                onChange={(e) => setParams({ ...params, hotelCategory: e.target.value as any })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-medium bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="luxury">Luxury 5-Star Beach Villa (Oceanfront)</option>
                <option value="premium">Premium 4-Star Beach Resort</option>
                <option value="boutique">Cozy Boutique Island Cottages</option>
              </select>
            </div>
          </div>

          {/* Islands Selector */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Select Islands to Include
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                'Port Blair',
                'Havelock (Swaraj Dweep)',
                'Neil Island (Shaheed Dweep)',
                'Baratang & Caves',
              ].map((island) => {
                const isSelected = params.selectedIslands.includes(island);
                return (
                  <button
                    key={island}
                    type="button"
                    onClick={() => toggleIsland(island)}
                    className={`p-2.5 rounded-xl text-xs font-medium text-left border flex items-center justify-between transition-all ${
                      isSelected
                        ? 'bg-emerald-50 text-emerald-900 border-emerald-300 font-semibold'
                        : 'bg-white text-slate-600 border-slate-200'
                    }`}
                  >
                    <span className="line-clamp-1">{island}</span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Optional Excursions (Extra) */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Optional Island Excursions & Add-Ons (Optional Extra)
              </label>
              <span className="text-[11px] font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md border border-teal-200">
                Custom additions • Pay only for what you choose
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                { key: 'baratang', label: 'Baratang Mangrove Safari & Limestone Caves', extra: '+₹2,500/person' },
                { key: 'chidiyaTapu', label: 'Chidiya Tapu Sunset & Coastal Nature Trail', extra: '+₹1,500/person' },
                { key: 'dinner', label: 'Private Beach Candlelight Dinner', extra: '+₹4,500/setup' },
                { key: 'rossGuide', label: 'Ross Island & Historical Heritage Guide', extra: '+₹1,200/group' },
              ].map((act) => {
                const isSelected = params.selectedActivities.includes(act.key);
                return (
                  <button
                    key={act.key}
                    type="button"
                    onClick={() => toggleActivity(act.key)}
                    className={`p-2.5 rounded-xl text-xs text-left border flex items-center justify-between transition-all ${
                      isSelected
                        ? 'bg-teal-50 text-teal-900 border-teal-300 font-semibold'
                        : 'bg-white text-slate-600 border-slate-200'
                    }`}
                  >
                    <div>
                      <span className="block">{act.label}</span>
                      <span className="text-[10px] text-teal-700 font-normal">{act.extra} (Optional Extra)</span>
                    </div>
                    {isSelected && <Check className="w-3.5 h-3.5 text-teal-600 shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Real-time Calculation Summary Box */}
          <div className="bg-gradient-to-br from-emerald-50 via-teal-50/50 to-white p-5 rounded-2xl border border-emerald-200 shadow-xs space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-emerald-100">
              <div>
                <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block">
                  Recommended Package
                </span>
                <span className="text-base font-extrabold text-slate-900 font-display">
                  {estimate.recommendedPackageName}
                </span>
                <span className="text-[11px] text-slate-500 block mt-0.5">
                  Base Package (Stay + Ferries): ₹{estimate.basePackageTotal.toLocaleString('en-IN')}
                  {estimate.activitiesTotal > 0 && (
                    <span className="text-teal-700 font-semibold"> + ₹{estimate.activitiesTotal.toLocaleString('en-IN')} (Optional Excursions Extra)</span>
                  )}
                </span>
              </div>
              <div className="text-right sm:text-right">
                <span className="text-[11px] text-slate-500 block">Total Estimated Cost</span>
                <span className="text-2xl font-black text-emerald-900 font-display">
                  ₹{estimate.totalEstimate.toLocaleString('en-IN')}
                </span>
                <span className="text-[11px] text-slate-500 block font-medium">
                  Approx. ₹{estimate.basePerPerson.toLocaleString('en-IN')} per person
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-600">
              *Base price includes resort stays, high-speed private catamaran tickets (Makruzz/Nautika), private A/C chauffeur vehicle, harbor transfers, and permits. Excursions and experiences are optional add-ons based on traveler preferences.
            </p>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <button
            onClick={() => {
              onClose();
              onSelectEstimatedPlan(estimate.recommendedPackageName);
            }}
            className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 underline"
          >
            Apply this setup to Contact Form &rarr;
          </button>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={handleWhatsAppQuote}
              className="flex-1 sm:flex-none px-5 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Get WhatsApp Draft Quote</span>
            </button>
            <button
              onClick={onClose}
              className="px-5 py-3 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-semibold"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

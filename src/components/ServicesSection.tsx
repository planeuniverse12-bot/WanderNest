import React from 'react';
import { 
  Compass, 
  Ship, 
  Landmark, 
  Hotel, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  PlusCircle,
  HelpCircle
} from 'lucide-react';
import { MASTER_SERVICES, CopyPlaceholderConfig } from '../data/copyData';

interface ServicesSectionProps {
  config: CopyPlaceholderConfig;
  onEnquireService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  config,
  onEnquireService,
}) => {
  const iconMap: Record<string, React.ReactNode> = {
    Compass: <Compass className="w-7 h-7" />,
    Ship: <Ship className="w-7 h-7" />,
    Landmark: <Landmark className="w-7 h-7" />,
    Hotel: <Hotel className="w-7 h-7" />,
  };

  return (
    <section id="services" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-bold uppercase tracking-wider border border-teal-200/60">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
            Core Island Offerings
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Tailored Island Logistics. Flawless Execution. Zero Stress.
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            From securing high-demand private catamarans to arranging guided heritage tours and luxury beach resort stays, explore {config.agencyName}’s four pillars of travel excellence.
          </p>
        </div>

        {/* 4 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {MASTER_SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="bg-slate-50/70 hover:bg-white rounded-3xl p-8 border border-slate-200/80 hover:border-emerald-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                {/* Service Header & Icon */}
                <div className="flex items-start justify-between gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white flex items-center justify-center shadow-md shadow-emerald-700/20 group-hover:scale-105 transition-transform">
                    {iconMap[service.iconName] || <Compass className="w-7 h-7" />}
                  </div>

                  <span className="text-xs font-bold text-slate-400 bg-white px-3 py-1 rounded-full border border-slate-200">
                    Service 0{index + 1}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 font-display">
                    {service.name}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wide mt-1">
                    {service.tagline}
                  </p>
                </div>

                {/* Main Service Description Copy */}
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features Checklist */}
                <div className="pt-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                    Key Advantages
                  </span>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Popular Add-ons */}
                <div className="pt-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                    Popular Upgrades
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {service.popularAddons.map((addon, aIdx) => (
                      <span
                        key={aIdx}
                        className="inline-flex items-center gap-1 text-[11px] bg-white border border-slate-200 px-2.5 py-1 rounded-lg text-slate-600 font-medium"
                      >
                        <PlusCircle className="w-3 h-3 text-teal-600" />
                        {addon}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Service Action Button */}
              <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between">
                <span className="text-xs text-slate-500 flex items-center gap-1">
                  <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
                  Instant Booking & Confirmation
                </span>
                <button
                  onClick={() => onEnquireService(service.name)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-4 py-2 rounded-xl transition-colors"
                >
                  <span>Enquire Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

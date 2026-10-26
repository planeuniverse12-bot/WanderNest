import React from 'react';
import { 
  Palmtree, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Heart, 
  Leaf, 
  Clock, 
  ArrowUp
} from 'lucide-react';
import { CopyPlaceholderConfig } from '../data/copyData';

interface FooterProps {
  config: CopyPlaceholderConfig;
  onNavigateSection: (sectionId: string) => void;
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  config,
  onNavigateSection,
  onOpenQuoteModal,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-md">
                <Palmtree className="w-6 h-6" />
              </div>
              <span className="text-2xl font-black tracking-tight text-white font-display">
                {config.agencyName}
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Your premier Andaman & Nicobar tour and travel specialists. We turn complex island logistics, private catamaran sailings, and beachfront resort bookings into effortless tropical paradise escapes.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => onNavigateSection('home')} 
                  className="hover:text-emerald-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateSection('packages')} 
                  className="hover:text-emerald-400 transition-colors"
                >
                  Featured Packages
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateSection('services')} 
                  className="hover:text-emerald-400 transition-colors"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateSection('about')} 
                  className="hover:text-emerald-400 transition-colors"
                >
                  About Us & Story
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateSection('contact')} 
                  className="hover:text-emerald-400 transition-colors"
                >
                  Contact & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Featured Island Destinies */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Island Hotspots
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>Havelock Island (Radhanagar & Elephant Beach)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>Neil Island (Bharatpur & Natural Coral Bridge)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>Port Blair (Cellular Jail & Ross Island)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>Baratang (Mangrove Creeks & Limestone Caves)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>Chidiya Tapu Sunset & Jolly Buoy Marine Park</span>
              </li>
            </ul>
          </div>

          {/* Island Coordinates */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <a href={`tel:${config.phone.replace(/\s+/g, '')}`} className="hover:text-white">
                  {config.phone}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <a href={`mailto:${config.email}`} className="hover:text-white break-all">
                  {config.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{config.address}</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{config.workingHours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Eco-Conservation Pledge */}
        <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-800/40 text-xs flex flex-col sm:flex-row items-center justify-between gap-3 text-emerald-200">
          <div className="flex items-center gap-2">
            <Leaf className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              <strong>Our Eco-Conscious Tourism Pledge:</strong> 1% of tour proceeds support coral reef restoration and sea turtle nesting conservation across the Andaman Archipelago.
            </span>
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-slate-300 hover:text-white shrink-0 font-medium"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {config.agencyName}. All Rights Reserved. Crafted for unforgettable island vacations.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
            <span>•</span>
            <span>Ferry Cancellation Guidelines</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

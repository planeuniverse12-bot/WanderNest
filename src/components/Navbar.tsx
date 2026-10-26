import React, { useState } from 'react';
import { 
  Compass, 
  FileText, 
  Phone, 
  Sparkles, 
  Menu, 
  X, 
  Palmtree, 
  ShieldCheck 
} from 'lucide-react';
import { CopyPlaceholderConfig } from '../data/copyData';

interface NavbarProps {
  config: CopyPlaceholderConfig;
  activeTab: 'website' | 'markdown';
  setActiveTab: (tab: 'website' | 'markdown') => void;
  onOpenQuoteModal: () => void;
  onOpenBookingModal: () => void;
  activeSection: string;
  onNavigateSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  config,
  activeTab,
  setActiveTab,
  onOpenQuoteModal,
  onOpenBookingModal,
  activeSection,
  onNavigateSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'packages', label: 'Featured Packages' },
    { id: 'services', label: 'Our Services' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleLinkClick = (id: string) => {
    setActiveTab('website');
    onNavigateSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-emerald-100/60 shadow-xs">
      {/* Top Utility Announcement Bar */}
      <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-emerald-500/30 text-emerald-200 px-2.5 py-0.5 rounded-full text-[11px] font-semibold border border-emerald-400/30">
              <Sparkles className="w-3 h-3 text-emerald-300" /> Andaman Season Booking Open
            </span>
            <span className="hidden sm:inline text-slate-200">
              Guaranteed Private Catamaran Tickets (Makruzz & Nautika) • Direct Booking Desk
            </span>
          </div>

          <div className="flex items-center gap-3 text-slate-200 text-xs">
            <span className="hidden md:inline text-emerald-300 text-[11px] font-medium">
              Call / WhatsApp:
            </span>
            <a 
              href="tel:+919474592930" 
              className="flex items-center gap-1.5 font-bold text-white bg-white/10 hover:bg-emerald-600/40 px-2.5 py-0.5 rounded-md transition-colors"
              title="Call Andaman booking desk +919474592930"
            >
              <Phone className="w-3 h-3 text-emerald-300" />
              <span>+91 94745 92930</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Agency Name */}
          <div 
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 flex items-center justify-center text-white shadow-md shadow-emerald-700/20 group-hover:scale-105 transition-transform">
              <Palmtree className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-extrabold tracking-tight text-slate-900 font-display">
                  {config.agencyName}
                </span>
                <span className="text-[10px] tracking-wider uppercase font-bold px-1.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 border border-emerald-200">
                  Andaman
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">Island Tour & Travel Specialists</p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 text-sm font-medium text-slate-700">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`px-3.5 py-2 rounded-lg transition-all duration-200 ${
                  activeTab === 'website' && activeSection === link.id
                    ? 'text-emerald-700 font-semibold bg-emerald-50'
                    : 'hover:text-emerald-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Mode Switcher & CTA */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* View Mode Toggle: Website vs Copywriter Delivery */}
            <div className="bg-slate-100 p-1 rounded-xl flex items-center border border-slate-200">
              <button
                onClick={() => setActiveTab('website')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'website'
                    ? 'bg-white text-emerald-800 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="View live website design"
              >
                <Compass className="w-3.5 h-3.5 text-emerald-600" />
                Live Site
              </button>
              <button
                onClick={() => setActiveTab('markdown')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'markdown'
                    ? 'bg-white text-emerald-800 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="View raw markdown copy & copywriter notes"
              >
                <FileText className="w-3.5 h-3.5 text-teal-600" />
                Master Copy (.md)
              </button>
            </div>

            {/* Instant Custom Quote CTA */}
            <button
              onClick={onOpenQuoteModal}
              className="hidden md:inline-flex text-slate-700 hover:text-emerald-800 bg-slate-100 hover:bg-slate-200 px-3.5 py-2 rounded-xl text-xs font-semibold border border-slate-200 transition-all"
            >
              Custom Quote
            </button>

            {/* Primary Online Booking CTA to +919474592930 */}
            <button
              onClick={onOpenBookingModal}
              className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-700 hover:to-teal-800 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-md shadow-emerald-700/25 hover:shadow-lg transition-all flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse"></span>
              <span>Book Online</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenBookingModal}
              className="bg-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-xs"
            >
              Book Online
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">View Mode</span>
            <div className="flex bg-slate-100 p-1 rounded-lg">
              <button
                onClick={() => { setActiveTab('website'); setMobileMenuOpen(false); }}
                className={`px-3 py-1 rounded text-xs font-medium ${activeTab === 'website' ? 'bg-white text-emerald-800 shadow-xs' : 'text-slate-600'}`}
              >
                Live Preview
              </button>
              <button
                onClick={() => { setActiveTab('markdown'); setMobileMenuOpen(false); }}
                className={`px-3 py-1 rounded text-xs font-medium ${activeTab === 'markdown' ? 'bg-white text-emerald-800 shadow-xs' : 'text-slate-600'}`}
              >
                Markdown Copy
              </button>
            </div>
          </div>

          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="text-left py-2 px-3 text-base font-medium rounded-lg text-slate-800 hover:bg-emerald-50 hover:text-emerald-700"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => { onOpenBookingModal(); setMobileMenuOpen(false); }}
              className="w-full text-center bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-3 rounded-xl font-bold text-sm shadow-md flex items-center justify-center gap-2"
            >
              <span>Book Online (Desk: +91 94745 92930)</span>
            </button>
            <button
              onClick={() => { onOpenQuoteModal(); setMobileMenuOpen(false); }}
              className="w-full text-center bg-slate-100 hover:bg-slate-200 text-slate-800 py-2.5 rounded-xl font-semibold text-xs border border-slate-300"
            >
              Get Free Custom Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

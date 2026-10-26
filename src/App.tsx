/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ValuePropsSection } from './components/ValuePropsSection';
import { IntroductionSection } from './components/IntroductionSection';
import { FeaturedPackagesSection } from './components/FeaturedPackagesSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutUsSection } from './components/AboutUsSection';
import { ContactUsSection } from './components/ContactUsSection';
import { PackageModal } from './components/PackageModal';
import { TripEstimatorModal } from './components/TripEstimatorModal';
import { OnlineBookingModal } from './components/OnlineBookingModal';
import { BookingFloatingBar } from './components/BookingFloatingBar';
import { MarkdownDeliveryView } from './components/MarkdownDeliveryView';
import { Footer } from './components/Footer';
import { 
  DEFAULT_PLACEHOLDERS, 
  CopyPlaceholderConfig, 
  PackageItem 
} from './data/copyData';

export default function App() {
  const [config, setConfig] = useState<CopyPlaceholderConfig>(DEFAULT_PLACEHOLDERS);
  const [activeTab, setActiveTab] = useState<'website' | 'markdown'>('website');
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedAudience, setSelectedAudience] = useState<'All' | 'Couples' | 'Families' | 'Nature'>('All');
  
  // Modals state
  const [activePackageModal, setActivePackageModal] = useState<PackageItem | null>(null);
  const [estimatorOpen, setEstimatorOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedPackageForBooking, setSelectedPackageForBooking] = useState('Travel Andaman With Joy');
  const [preselectedPackageForForm, setPreselectedPackageForForm] = useState<string>('');

  const scrollToSection = (sectionId: string) => {
    setActiveTab('website');
    setActiveSection(sectionId);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 50);
  };

  const handleOpenBookingModal = (packageName?: string) => {
    if (packageName) {
      setSelectedPackageForBooking(packageName);
    }
    setBookingModalOpen(true);
  };

  const handleBookPackage = (pkg: PackageItem) => {
    handleOpenBookingModal(pkg.name);
  };

  const handleEnquireService = (serviceName: string) => {
    handleOpenBookingModal(`Service: ${serviceName}`);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      {/* Navigation */}
      <Navbar
        config={config}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenQuoteModal={() => setEstimatorOpen(true)}
        onOpenBookingModal={() => handleOpenBookingModal()}
        activeSection={activeSection}
        onNavigateSection={scrollToSection}
      />

      {/* Main Body: Either Live Agency Website or Markdown Copywriter Delivery */}
      <main className="flex-1">
        {activeTab === 'website' ? (
          <div>
            {/* 1. HOME PAGE: Hero with Headline, Subheadline, CTAs & Audience Switch */}
            <div id="home">
              <HeroSection
                config={config}
                selectedAudience={selectedAudience}
                setSelectedAudience={setSelectedAudience}
                onBookEscape={() => handleOpenBookingModal()}
                onOpenBookingModal={() => handleOpenBookingModal()}
                onGetQuote={() => setEstimatorOpen(true)}
              />
            </div>

            {/* 1. HOME PAGE: Value Proposition (3 Bullet Points) */}
            <ValuePropsSection config={config} />

            {/* 1. HOME PAGE: Introduction Section (Magic of Andaman) */}
            <IntroductionSection
              config={config}
              onExplorePackages={() => scrollToSection('packages')}
            />

            {/* 1. HOME PAGE: Featured Packages Section (3 Signature Packages) */}
            <FeaturedPackagesSection
              filterAudience={selectedAudience}
              onSelectPackage={(pkg) => setActivePackageModal(pkg)}
              onBookPackage={handleBookPackage}
              onGetCustomQuote={() => setEstimatorOpen(true)}
            />

            {/* 3. OUR SERVICES PAGE: 4 Core Offerings */}
            <ServicesSection
              config={config}
              onEnquireService={handleEnquireService}
            />

            {/* 2. ABOUT US PAGE: Company Story & Mission Statement */}
            <AboutUsSection
              config={config}
              onContactClick={() => scrollToSection('contact')}
            />

            {/* 4. CONTACT US PAGE: Action-oriented copy & Form */}
            <ContactUsSection
              config={config}
              preselectedPackage={preselectedPackageForForm}
            />
          </div>
        ) : (
          <MarkdownDeliveryView
            config={config}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        config={config}
        onNavigateSection={scrollToSection}
        onOpenQuoteModal={() => setEstimatorOpen(true)}
      />

      {/* Package Detail Modal */}
      <PackageModal
        pkg={activePackageModal}
        config={config}
        onClose={() => setActivePackageModal(null)}
        onBookNow={handleBookPackage}
      />

      {/* Instant Online Booking Modal (Routes to +919474592930) */}
      <OnlineBookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        config={config}
        initialPackageName={selectedPackageForBooking}
      />

      {/* Instant Trip Estimator Modal */}
      <TripEstimatorModal
        config={config}
        isOpen={estimatorOpen}
        onClose={() => setEstimatorOpen(false)}
        onSelectEstimatedPlan={(planName) => {
          handleOpenBookingModal(planName);
        }}
      />

      {/* Floating Online Booking Action Bar */}
      <BookingFloatingBar
        onOpenBookingModal={() => handleOpenBookingModal()}
      />
    </div>
  );
}

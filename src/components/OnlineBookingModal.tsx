import React, { useState, useEffect } from 'react';
import { 
  X, 
  Check, 
  Calendar, 
  Users, 
  Hotel, 
  Phone, 
  MessageSquare, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  ArrowRight,
  Ship,
  CheckCircle2,
  Tag
} from 'lucide-react';
import { CopyPlaceholderConfig, MASTER_PACKAGES } from '../data/copyData';
import { 
  BOOKING_PHONE_FORMATTED, 
  BOOKING_PHONE_NUMBER,
  generateOnlineBookingWhatsAppUrl, 
  getBookingCallUrl,
  OnlineBookingData 
} from '../utils/bookingHelper';

interface OnlineBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: CopyPlaceholderConfig;
  initialPackageName?: string;
}

export const OnlineBookingModal: React.FC<OnlineBookingModalProps> = ({
  isOpen,
  onClose,
  config,
  initialPackageName,
}) => {
  const [selectedPackage, setSelectedPackage] = useState(
    initialPackageName || 'Travel Andaman With Joy'
  );
  const [travelDate, setTravelDate] = useState('');
  const [travelMonth, setTravelMonth] = useState('Upcoming Andaman Season (Best Weather)');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [hotelCategory, setHotelCategory] = useState('Luxury 5-Star Beachfront Resort / Private Villa');
  const [guestName, setGuestName] = useState('');
  const [guestContact, setGuestContact] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  useEffect(() => {
    if (initialPackageName) {
      setSelectedPackage(initialPackageName);
    }
  }, [initialPackageName]);

  if (!isOpen) return null;

  // Compute estimate based on package selection
  const getPackagePricePerPerson = (name: string): number => {
    if (name.includes('Joy') || name.includes('Honeymoon')) return 34999;
    if (name.includes('Family')) return 38500;
    if (name.includes('Heritage') || name.includes('Nature')) return 29500;
    if (name.includes('Ferry')) return 5000;
    if (name.includes('Resort')) return 14000;
    return 32000;
  };

  const pricePerPerson = getPackagePricePerPerson(selectedPackage);
  const estimatedTotalPrice = (pricePerPerson * adults) + (children > 0 ? Math.round(pricePerPerson * 0.5 * children) : 0);
  const formattedEstimate = `₹${estimatedTotalPrice.toLocaleString('en-IN')}`;

  const currentBookingData: OnlineBookingData = {
    packageName: selectedPackage,
    travelDate: travelDate ? `${travelDate} (${travelMonth})` : travelMonth,
    adultsCount: adults,
    childrenCount: children,
    hotelPreference: hotelCategory,
    fullName: guestName || 'Island Traveler',
    contactNumber: guestContact || 'Connecting via WhatsApp',
    specialRequests: specialRequests,
    estimatedPrice: `${formattedEstimate} (₹${pricePerPerson.toLocaleString('en-IN')}/person)`
  };

  const handleBookViaWhatsApp = () => {
    const url = generateOnlineBookingWhatsAppUrl(currentBookingData, config.agencyName);
    window.open(url, '_blank');
  };

  const handleDirectCall = () => {
    window.location.href = getBookingCallUrl();
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingConfirmed(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[92vh]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="online-booking-modal-title"
      >
        {/* Header Bar */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-950 text-white flex items-center justify-between shrink-0">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Instant Online Booking Portal</span>
            </div>
            <h2 id="online-booking-modal-title" className="text-xl sm:text-2xl font-extrabold font-display">
              Book Your Andaman Tour Online
            </h2>
            <p className="text-xs text-slate-300 flex items-center gap-1.5">
              <span>Direct routing & instant confirmation to booking desk:</span>
              <span className="font-bold text-white bg-white/10 px-2 py-0.5 rounded text-emerald-200">
                {BOOKING_PHONE_FORMATTED}
              </span>
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Online Booking Modal"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-sm bg-slate-50/50">
          
          {bookingConfirmed ? (
            <div className="bg-white rounded-3xl p-8 border border-emerald-200 shadow-sm text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Online Booking Transmitted
                </span>
                <h3 className="text-2xl font-bold text-slate-900 font-display">
                  Thank You, {guestName || 'Valued Traveler'}!
                </h3>
                <p className="text-sm text-slate-600 max-w-lg mx-auto">
                  Your online booking for <strong className="text-slate-900">{selectedPackage}</strong> has been routed to our direct island reservations line at <strong className="text-emerald-800">{BOOKING_PHONE_FORMATTED}</strong>.
                </p>
              </div>

              {/* Booking Summary Box */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 max-w-lg mx-auto text-left text-xs space-y-2">
                <div className="flex justify-between py-1 border-b border-slate-200/80">
                  <span className="text-slate-500">Selected Package:</span>
                  <span className="font-bold text-slate-800">{selectedPackage}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/80">
                  <span className="text-slate-500">Travel Timing:</span>
                  <span className="font-semibold text-slate-800">{travelDate || travelMonth}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/80">
                  <span className="text-slate-500">Party Size:</span>
                  <span className="font-semibold text-slate-800">{adults} Adults{children > 0 ? `, ${children} Children` : ''}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/80">
                  <span className="text-slate-500">Resort Category:</span>
                  <span className="font-semibold text-slate-800">{hotelCategory}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/80">
                  <span className="text-slate-500">Estimated Total:</span>
                  <span className="font-extrabold text-emerald-700 text-sm">{formattedEstimate}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Booking Desk Number:</span>
                  <span className="font-bold text-emerald-800">{BOOKING_PHONE_FORMATTED}</span>
                </div>
              </div>

              {/* Direct Instant Confirmation Buttons to +919474592930 */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleBookViaWhatsApp}
                  className="w-full sm:w-auto px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Open WhatsApp Booking Desk (+91 94745 92930)</span>
                </button>
                <button
                  type="button"
                  onClick={handleDirectCall}
                  className="w-full sm:w-auto px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Call Booking Desk ({BOOKING_PHONE_FORMATTED})</span>
                </button>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setBookingConfirmed(false)}
                  className="text-xs text-slate-500 hover:text-slate-700 underline"
                >
                  Modify Booking Options
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmitBooking} className="space-y-6">
              
              {/* Option 1: Select Package / Service */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                    <Tag className="w-4 h-4 text-emerald-600" />
                    1. Select Booking Package / Service
                  </label>
                  <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    Direct Booking on {BOOKING_PHONE_FORMATTED}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    {
                      name: 'Travel Andaman With Joy',
                      tag: '5N / 6D • Honeymoon Best Seller',
                      price: '₹34,999/person',
                      color: 'border-rose-300 hover:border-rose-500'
                    },
                    {
                      name: 'Family Island Explorer',
                      tag: '6N / 7D • Families & Multi-Gen',
                      price: '₹38,500/person',
                      color: 'border-emerald-300 hover:border-emerald-500'
                    },
                    {
                      name: 'Island Heritage & Nature Explorer',
                      tag: '5N / 6D • Baratang Caves & Nature',
                      price: '₹29,500/person',
                      color: 'border-amber-300 hover:border-amber-500'
                    },
                  ].map((pkg) => {
                    const isSelected = selectedPackage === pkg.name;
                    return (
                      <button
                        key={pkg.name}
                        type="button"
                        onClick={() => setSelectedPackage(pkg.name)}
                        className={`p-3.5 rounded-2xl text-left border-2 transition-all flex flex-col justify-between ${
                          isSelected
                            ? 'border-emerald-600 bg-emerald-50/70 shadow-xs ring-2 ring-emerald-500/20'
                            : 'border-slate-200 bg-white hover:border-slate-300'
                        }`}
                      >
                        <div className="space-y-1">
                          <div className="flex items-start justify-between gap-1">
                            <span className="font-bold text-slate-900 text-xs sm:text-sm leading-tight">
                              {pkg.name}
                            </span>
                            {isSelected && (
                              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            )}
                          </div>
                          <p className="text-[11px] text-slate-500 font-medium">{pkg.tag}</p>
                        </div>
                        <div className="mt-2 pt-2 border-t border-slate-200/60 flex items-center justify-between">
                          <span className="text-[11px] text-slate-500 font-medium">Starting</span>
                          <span className="text-xs font-extrabold text-slate-900">{pkg.price}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Additional Quick Services Options */}
                <div className="pt-2 flex flex-wrap gap-2 text-xs">
                  <span className="text-slate-500 self-center text-[11px] font-semibold">Or Book Services:</span>
                  {[
                    'Custom Tailored Tour Itinerary',
                    'Ferry & Catamaran Booking Only (Makruzz/Nautika)',
                    'Resort & Beach Villa Reservations'
                  ].map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => setSelectedPackage(service)}
                      className={`px-3 py-1.5 rounded-xl border text-[11px] font-semibold transition-all ${
                        selectedPackage === service
                          ? 'bg-slate-900 text-white border-slate-900'
                          : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 2: Dates, Guests & Hotel Tier */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-4">
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-emerald-600" />
                  2. Travel Dates & Guest Details
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Approx. Travel Date / Target Month
                    </label>
                    <div className="space-y-2">
                      <input
                        type="date"
                        value={travelDate}
                        onChange={(e) => setTravelDate(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                      <select
                        value={travelMonth}
                        onChange={(e) => setTravelMonth(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs bg-slate-50 text-slate-700"
                      >
                        <option>Andaman Season Booking Open (Peak Weather)</option>
                        <option>November - December (Festive & Sparkling Waters)</option>
                        <option>January - February (Calm Ocean & Snorkeling)</option>
                        <option>March - May (Sunny Beach Days & Warm Tides)</option>
                        <option>Monsoon Season (Lush Greenery & Quiet Shores)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Guests (Adults & Children)
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <span className="text-[11px] text-slate-500 block mb-1">Adults (12+ yrs)</span>
                        <div className="flex items-center border border-slate-300 rounded-xl bg-white overflow-hidden">
                          <button
                            type="button"
                            onClick={() => setAdults(Math.max(1, adults - 1))}
                            className="px-3 py-2 text-slate-600 hover:bg-slate-100 font-bold"
                          >
                            -
                          </button>
                          <span className="flex-1 text-center font-bold text-xs">{adults}</span>
                          <button
                            type="button"
                            onClick={() => setAdults(adults + 1)}
                            className="px-3 py-2 text-slate-600 hover:bg-slate-100 font-bold"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div>
                        <span className="text-[11px] text-slate-500 block mb-1">Children (under 12)</span>
                        <div className="flex items-center border border-slate-300 rounded-xl bg-white overflow-hidden">
                          <button
                            type="button"
                            onClick={() => setChildren(Math.max(0, children - 1))}
                            className="px-3 py-2 text-slate-600 hover:bg-slate-100 font-bold"
                          >
                            -
                          </button>
                          <span className="flex-1 text-center font-bold text-xs">{children}</span>
                          <button
                            type="button"
                            onClick={() => setChildren(children + 1)}
                            className="px-3 py-2 text-slate-600 hover:bg-slate-100 font-bold"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Resort / Accommodation Preference
                  </label>
                  <select
                    value={hotelCategory}
                    onChange={(e) => setHotelCategory(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-medium bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option>Luxury 5-Star Beachfront Resort / Private Pool Villa</option>
                    <option>Premium 4-Star Beach Resort (Ocean View)</option>
                    <option>Charming Boutique Beach Cottages (Budget Friendly)</option>
                    <option>I have already booked my hotels (Ferries & Sightseeing Only)</option>
                  </select>
                </div>
              </div>

              {/* Option 3: Guest Contact Information */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-4">
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-emerald-600" />
                  3. Your Contact Details (For Booking Transmittal)
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Mobile / WhatsApp Number *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={guestContact}
                      onChange={(e) => setGuestContact(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Special Wishes or Specific Island Requests (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Honeymoon candlelight beach dinner, Baratang caves boat trip, senior citizen vehicle support"
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    className="w-full px-4 py-2 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              {/* Price Calculation & Real-time Booking Guarantee */}
              <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-white p-5 rounded-2xl border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1 text-center sm:text-left">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                    Transparent Online Estimate
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-slate-900 font-display">
                      {formattedEstimate}
                    </span>
                    <span className="text-xs text-slate-600 font-medium">
                      (Approx. ₹{pricePerPerson.toLocaleString('en-IN')} / adult)
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Includes resort stays, private catamarans, chauffeur vehicle, and 24/7 on-ground island concierge.
                  </p>
                </div>

                <div className="text-right text-xs text-emerald-900 font-semibold space-y-1">
                  <div className="flex items-center gap-1.5 text-emerald-700">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Direct Desk: {BOOKING_PHONE_FORMATTED}</span>
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Instant reply within 15 minutes
                  </div>
                </div>
              </div>

              {/* Submit details trigger within form */}
              <div className="pt-1">
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl border border-emerald-300 hover:bg-emerald-50 text-emerald-800 font-semibold text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <span>Review & Lock In Online Reservation Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </form>
          )}

        </div>

        {/* Sticky Action Footer Routing to +919474592930 */}
        {!bookingConfirmed && (
          <div className="shrink-0 p-4 sm:p-5 bg-white border-t border-slate-200 shadow-lg space-y-2.5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Primary WhatsApp Booking Button directly to +919474592930 */}
              <button
                type="button"
                onClick={handleBookViaWhatsApp}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-700 hover:to-teal-800 text-white font-bold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2.5 transition-all group"
              >
                <MessageSquare className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <span className="block leading-tight font-extrabold">Book Online via WhatsApp</span>
                  <span className="text-[10px] text-emerald-100 font-normal">Goes directly to {BOOKING_PHONE_FORMATTED}</span>
                </div>
              </button>

              {/* Secondary Direct Call Button directly to +919474592930 */}
              <button
                type="button"
                onClick={handleDirectCall}
                className="w-full py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-sm flex items-center justify-center gap-2.5 transition-all group"
              >
                <Phone className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <span className="block leading-tight font-extrabold">Call to Book Online</span>
                  <span className="text-[10px] text-slate-300 font-normal">Dial {BOOKING_PHONE_FORMATTED}</span>
                </div>
              </button>
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-500 pt-0.5">
              <span>Estimated: <strong className="text-emerald-800 font-bold">{formattedEstimate}</strong> ({adults} Guests)</span>
              <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" /> Transmits to {BOOKING_PHONE_FORMATTED}
              </span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

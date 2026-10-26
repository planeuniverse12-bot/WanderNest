import React from 'react';
import { MessageSquare, Phone, CalendarCheck } from 'lucide-react';
import { BOOKING_PHONE_FORMATTED, BOOKING_PHONE_NUMBER, getBookingCallUrl } from '../utils/bookingHelper';

interface BookingFloatingBarProps {
  onOpenBookingModal: (packageName?: string) => void;
}

export const BookingFloatingBar: React.FC<BookingFloatingBarProps> = ({
  onOpenBookingModal,
}) => {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2 sm:gap-3">
      {/* Quick Call Button to +919474592930 */}
      <a
        href={getBookingCallUrl()}
        className="hidden sm:flex items-center gap-2 bg-white text-slate-800 hover:text-emerald-700 px-4 py-3 rounded-full border border-slate-200 shadow-xl text-xs font-bold transition-all hover:scale-105"
        title={`Call Andaman Booking Desk on ${BOOKING_PHONE_FORMATTED}`}
      >
        <Phone className="w-4 h-4 text-emerald-600" />
        <span>{BOOKING_PHONE_FORMATTED}</span>
      </a>

      {/* Main Floating Online Booking Trigger */}
      <button
        onClick={() => onOpenBookingModal()}
        className="flex items-center gap-2.5 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white px-5 py-3.5 rounded-full shadow-2xl hover:shadow-emerald-900/40 text-xs sm:text-sm font-extrabold tracking-wide transition-all hover:scale-105 active:scale-95 border-2 border-emerald-300/40"
      >
        <CalendarCheck className="w-4 h-4 text-emerald-200" />
        <span>Book Online</span>
        <span className="hidden md:inline bg-emerald-800/80 px-2 py-0.5 rounded-full text-[11px] font-medium text-emerald-200 border border-emerald-400/30">
          +91 94745 92930
        </span>
      </button>
    </div>
  );
};

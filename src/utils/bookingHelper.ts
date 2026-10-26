/**
 * Utility helpers for Online Booking options routing to +919474592930
 */

export const BOOKING_PHONE_NUMBER = '+919474592930';
export const BOOKING_PHONE_FORMATTED = '+91 94745 92930';
export const BOOKING_PHONE_CLEAN = '919474592930';

export interface OnlineBookingData {
  packageName: string;
  travelDate: string;
  adultsCount: number;
  childrenCount: number;
  hotelPreference: string;
  fullName: string;
  contactNumber: string;
  specialRequests?: string;
  estimatedPrice?: string;
}

export function formatBookingWhatsAppMessage(data: OnlineBookingData, agencyName: string = 'WanderNest'): string {
  const lines = [
    `🏝️ *ONLINE BOOKING REQUEST - ${agencyName.toUpperCase()}*`,
    `----------------------------------------`,
    `📦 *Package / Service:* ${data.packageName}`,
    `📅 *Travel Date / Month:* ${data.travelDate || 'Flexible / Upcoming Season'}`,
    `👥 *Guests:* ${data.adultsCount} Adult(s)${data.childrenCount > 0 ? `, ${data.childrenCount} Child(ren)` : ''}`,
    `🏨 *Resort Category:* ${data.hotelPreference}`,
    data.estimatedPrice ? `💰 *Estimated Price:* ${data.estimatedPrice}` : null,
    `----------------------------------------`,
    `👤 *Guest Name:* ${data.fullName || 'Traveler'}`,
    `📞 *Guest Contact:* ${data.contactNumber || 'Provided via WhatsApp'}`,
    data.specialRequests ? `📝 *Special Requests:* ${data.specialRequests}` : null,
    `----------------------------------------`,
    `Please confirm package availability, private catamaran (Makruzz/Nautika) seats, and send payment/booking confirmation details. Thank you!`
  ].filter(Boolean) as string[];

  return lines.join('\n');
}

export function generateOnlineBookingWhatsAppUrl(data: OnlineBookingData, agencyName: string = 'WanderNest'): string {
  const text = formatBookingWhatsAppMessage(data, agencyName);
  return `https://wa.me/${BOOKING_PHONE_CLEAN}?text=${encodeURIComponent(text)}`;
}

export function getBookingCallUrl(): string {
  return `tel:${BOOKING_PHONE_NUMBER}`;
}

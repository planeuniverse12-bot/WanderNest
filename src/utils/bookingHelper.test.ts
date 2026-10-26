import test from 'node:test';
import assert from 'node:assert/strict';
import { 
  BOOKING_PHONE_NUMBER, 
  BOOKING_PHONE_CLEAN, 
  BOOKING_PHONE_FORMATTED,
  formatBookingWhatsAppMessage, 
  generateOnlineBookingWhatsAppUrl, 
  getBookingCallUrl,
  OnlineBookingData
} from './bookingHelper';

test('booking phone numbers are configured for +919474592930', () => {
  assert.equal(BOOKING_PHONE_NUMBER, '+919474592930');
  assert.equal(BOOKING_PHONE_CLEAN, '919474592930');
  assert.equal(BOOKING_PHONE_FORMATTED, '+91 94745 92930');
  assert.equal(getBookingCallUrl(), 'tel:+919474592930');
});

test('formatBookingWhatsAppMessage generates complete online booking text', () => {
  const data: OnlineBookingData = {
    packageName: 'Travel Andaman With Joy',
    travelDate: '2026-12-15',
    adultsCount: 2,
    childrenCount: 0,
    hotelPreference: 'Luxury 5-Star Beach Resort',
    fullName: 'Rahul & Neha Sharma',
    contactNumber: '+91 98765 43210',
    specialRequests: 'Candlelight dinner at Havelock Beach',
    estimatedPrice: '₹69,998'
  };

  const message = formatBookingWhatsAppMessage(data, 'WanderNest');

  assert.ok(message.includes('ONLINE BOOKING REQUEST - WANDERNEST'));
  assert.ok(message.includes('Travel Andaman With Joy'));
  assert.ok(message.includes('2026-12-15'));
  assert.ok(message.includes('2 Adult(s)'));
  assert.ok(message.includes('Luxury 5-Star Beach Resort'));
  assert.ok(message.includes('Rahul & Neha Sharma'));
  assert.ok(message.includes('Candlelight dinner at Havelock Beach'));
  assert.ok(message.includes('₹69,998'));
  assert.ok(message.includes('private catamaran'));
});

test('generateOnlineBookingWhatsAppUrl points to https://wa.me/919474592930 with encoded text', () => {
  const data: OnlineBookingData = {
    packageName: 'Family Island Explorer',
    travelDate: 'January 2027',
    adultsCount: 4,
    childrenCount: 1,
    hotelPreference: 'Premium 4-Star Beach Resort',
    fullName: 'Amit Roy',
    contactNumber: '+91 91234 56789'
  };

  const url = generateOnlineBookingWhatsAppUrl(data, 'WanderNest');
  assert.ok(url.startsWith('https://wa.me/919474592930?text='));
  assert.ok(url.includes(encodeURIComponent('Family Island Explorer')));
  assert.ok(url.includes(encodeURIComponent('4 Adult(s), 1 Child(ren)')));
});

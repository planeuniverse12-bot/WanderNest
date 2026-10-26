import test from 'node:test';
import assert from 'node:assert/strict';
import { replacePlaceholders, generateMasterMarkdownCopy, getCopyMetrics } from './copyEngine';
import { calculateTripEstimate } from './tripCalculator';
import { DEFAULT_PLACEHOLDERS } from '../data/copyData';

test('replacePlaceholders substitutes agency name and contact info correctly', () => {
  const template = 'Welcome to [Agency Name]! Call us at [Phone Number] or email [Email Address].';
  const customConfig = {
    ...DEFAULT_PLACEHOLDERS,
    agencyName: 'CoralCove Holidays',
    phone: '+91 99999 11111',
    email: 'info@coralcove.com'
  };

  const replaced = replacePlaceholders(template, customConfig);
  assert.equal(replaced, 'Welcome to CoralCove Holidays! Call us at +91 99999 11111 or email info@coralcove.com.');
});

test('replacePlaceholders keeps raw brackets when keepBrackets is true', () => {
  const template = 'Welcome to [Agency Name]! Call [Phone Number].';
  const preserved = replacePlaceholders(template, DEFAULT_PLACEHOLDERS, true);
  assert.equal(preserved, template);
});

test('generateMasterMarkdownCopy contains all 4 requested core pages and key packages', () => {
  const markdown = generateMasterMarkdownCopy(DEFAULT_PLACEHOLDERS, false);

  // Check Page 1: HOME PAGE
  assert.ok(markdown.includes('1. HOME PAGE'), 'Must include Home Page');
  assert.ok(markdown.includes('Escape to Untamed Azure'), 'Must include hero headline');
  assert.ok(markdown.includes('True Island Insiders'), 'Must include value prop 1');
  assert.ok(markdown.includes('Tailor-Made For Your Travel Rhythm'), 'Must include value prop 2');
  assert.ok(markdown.includes('24/7 On-Island Concierge & Safety Net'), 'Must include value prop 3');
  assert.ok(markdown.includes('Travel Andaman With Joy'), 'Must include Package 1');
  assert.ok(markdown.includes('Family Island Explorer'), 'Must include Package 2');
  assert.ok(markdown.includes('Island Heritage & Nature Explorer'), 'Must include Package 3');
  assert.ok(markdown.includes('Book Your Escape'), 'Must include primary CTA');
  assert.ok(markdown.includes('Get a Free Custom Quote'), 'Must include secondary CTA');

  // Check Page 2: ABOUT US PAGE
  assert.ok(markdown.includes('2. ABOUT US PAGE'), 'Must include About Us');
  assert.ok(markdown.includes('Born from Island Salt, Guided by Unwavering Hospitality'), 'Must include company story');
  assert.ok(markdown.includes('Our Mission Statement'), 'Must include mission');

  // Check Page 3: OUR SERVICES PAGE
  assert.ok(markdown.includes('3. OUR SERVICES PAGE'), 'Must include Our Services');
  assert.ok(markdown.includes('1. Custom Tour Packages'), 'Must include Custom Tour Packages');
  assert.ok(markdown.includes('2. Ferry & Cruise Bookings'), 'Must include Ferry Bookings');
  assert.ok(markdown.includes('3. Island Sightseeing & Heritage Excursions'), 'Must include Island Sightseeing & Heritage Excursions');
  assert.ok(markdown.includes('4. Hotel & Resort Reservations'), 'Must include Hotel Reservations');

  // Check Page 4: CONTACT US PAGE
  assert.ok(markdown.includes('4. CONTACT US PAGE'), 'Must include Contact Us');
  assert.ok(markdown.includes('Request Your Free Custom Itinerary & Instant Quote'), 'Must include form headline');
  assert.ok(markdown.includes(DEFAULT_PLACEHOLDERS.phone), 'Must include phone');
  assert.ok(markdown.includes(DEFAULT_PLACEHOLDERS.email), 'Must include email');

  // Strict verification: Zero scuba or water activities
  assert.equal(markdown.toLowerCase().includes('scuba'), false, 'Should have no scuba mentions');
  assert.equal(markdown.toLowerCase().includes('water sports'), false, 'Should have no water sports mentions');
});

test('generateMasterMarkdownCopy preserves placeholders when keepPlaceholders is true', () => {
  const rawMarkdown = generateMasterMarkdownCopy(DEFAULT_PLACEHOLDERS, true);
  assert.ok(rawMarkdown.includes('[Agency Name]'), 'Must retain [Agency Name]');
  assert.ok(rawMarkdown.includes('[Phone Number]'), 'Must retain [Phone Number]');
  assert.ok(rawMarkdown.includes('[Email Address]'), 'Must retain [Email Address]');
  assert.ok(rawMarkdown.includes('[Physical Address]'), 'Must retain [Physical Address]');
});

test('getCopyMetrics computes words and character counts accurately', () => {
  const sample = 'WanderNest Andaman Travel Agency provides pristine island tours.';
  const metrics = getCopyMetrics(sample);
  assert.equal(metrics.words, 8);
  assert.ok(metrics.chars > 0);
  assert.equal(metrics.readTimeMinutes, 1);
});

test('calculateTripEstimate provides reasonable calculation for honeymoon couple', () => {
  const estimate = calculateTripEstimate({
    travelers: 2,
    durationNights: 5,
    hotelCategory: 'luxury',
    travelerType: 'couples',
    selectedIslands: ['Port Blair', 'Havelock', 'Neil'],
    selectedActivities: ['dinner', 'baratang']
  });

  assert.equal(estimate.recommendedPackageId, 'travel-andaman-with-joy');
  assert.ok(estimate.totalEstimate > 0);
  assert.ok(estimate.basePerPerson > 20000);
});

test('markdown does not contain govt operator registration or traveler trust score', () => {
  const markdown = generateMasterMarkdownCopy(DEFAULT_PLACEHOLDERS, false);
  assert.equal(markdown.includes('Tour Operator Registration: Licensed & Certified'), false);
  assert.equal(markdown.includes('Traveler Trust Score:'), false);
});

test('default placeholders match user requested coordinates: Coming Soon!, SOON, hellowandernesttravels@gmail.com', () => {
  assert.equal(DEFAULT_PLACEHOLDERS.address, 'Coming Soon!');
  assert.equal(DEFAULT_PLACEHOLDERS.workingHours, 'SOON');
  assert.equal(DEFAULT_PLACEHOLDERS.email, 'hellowandernesttravels@gmail.com');
  assert.equal(DEFAULT_PLACEHOLDERS.phone, '+91 94745 92930');
});

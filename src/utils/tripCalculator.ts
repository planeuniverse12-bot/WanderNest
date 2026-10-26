export interface TripCalculationParams {
  travelers: number;
  durationNights: number;
  hotelCategory: 'luxury' | 'premium' | 'boutique';
  travelerType: 'couples' | 'family' | 'nature' | 'general';
  selectedIslands: string[];
  selectedActivities: string[];
}

export interface TripEstimateResult {
  basePerPerson: number;
  totalEstimate: number;
  basePackageTotal: number;
  activitiesTotal: number;
  activitiesPerPerson: number;
  recommendedPackageId: string;
  recommendedPackageName: string;
  includedIslandsText: string;
  estimatedCruiseCost: number;
  summaryNote: string;
}

export function calculateTripEstimate(params: TripCalculationParams): TripEstimateResult {
  const { travelers, durationNights, hotelCategory, travelerType, selectedIslands, selectedActivities } = params;

  // Base per night per person rates in INR
  const hotelNightRates: Record<string, number> = {
    luxury: 5500,
    premium: 3500,
    boutique: 2200,
  };

  const nightRate = hotelNightRates[hotelCategory] || 3500;
  let basePackagePerPerson = nightRate * durationNights;

  // Add inter-island ferry catamaran estimate (approx 2400 per sector per person)
  const interIslandSectors = Math.max(0, selectedIslands.length - 1);
  const cruiseCostPerPerson = interIslandSectors * 2400;
  basePackagePerPerson += cruiseCostPerPerson;

  // Optional Excursion & Add-on costs
  const activityRates: Record<string, number> = {
    baratang: 2500, // Baratang Mangrove & Limestone Caves Safari
    chidiyaTapu: 1500, // Chidiya Tapu Sunset & Coastal Nature Trail
    dinner: 4500, // Private Beachside Candlelight Dinner
    rossGuide: 1200, // Ross Island & Historical Guide
  };

  let activitiesPerPerson = 0;
  for (const act of selectedActivities) {
    if (activityRates[act]) {
      activitiesPerPerson += activityRates[act];
    }
  }

  // Slight group discount for 4+ travelers on base package
  if (travelers >= 4) {
    basePackagePerPerson = Math.round(basePackagePerPerson * 0.92);
  }

  const basePerPerson = basePackagePerPerson + activitiesPerPerson;
  const basePackageTotal = basePackagePerPerson * travelers;
  const activitiesTotal = activitiesPerPerson * travelers;
  const totalEstimate = basePerPerson * travelers;

  // Determine recommended package
  let recommendedPackageId = 'family-island-explorer';
  let recommendedPackageName = 'Family Island Explorer';
  if (travelerType === 'couples') {
    recommendedPackageId = 'travel-andaman-with-joy';
    recommendedPackageName = 'Travel Andaman With Joy';
  } else if (travelerType === 'nature' || selectedActivities.includes('baratang')) {
    recommendedPackageId = 'island-heritage-nature-explorer';
    recommendedPackageName = 'Island Heritage & Nature Explorer';
  }

  return {
    basePerPerson,
    totalEstimate,
    basePackageTotal,
    activitiesTotal,
    activitiesPerPerson,
    recommendedPackageId,
    recommendedPackageName,
    includedIslandsText: selectedIslands.join(', ') || 'Port Blair & Havelock',
    estimatedCruiseCost: cruiseCostPerPerson * travelers,
    summaryNote: `${durationNights}N/${durationNights + 1}D custom route covering ${selectedIslands.length} islands for ${travelers} guest(s).`
  };
}

export function buildWhatsAppInquiryUrl(
  phone: string,
  params: TripCalculationParams,
  estimate: TripEstimateResult,
  agencyName: string
): string {
  const cleanPhone = phone.replace(/[^\d]/g, '');
  const message = `Hello ${agencyName}! I am planning an Andaman trip for ${params.travelers} traveler(s) for ${params.durationNights} nights.
Selected route: ${estimate.includedIslandsText}
Travel style: ${params.travelerType.toUpperCase()}
Estimated package: ${estimate.recommendedPackageName}
Could you please share a detailed day-by-day customized itinerary and best quotes? Thank you!`;

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

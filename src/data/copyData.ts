export interface PackageItem {
  id: string;
  name: string;
  badge: string;
  targetAudience: 'Couples & Honeymooners' | 'Families & Multi-Gen' | 'Nature & Heritage' | 'All';
  duration: string;
  priceStarting: string;
  rating: number;
  reviewsCount: number;
  imageUrl: string;
  heroHeadline: string;
  shortSnippet: string;
  fullDescription: string;
  highlights: string[];
  inclusions: string[];
  dayHighlights: { day: string; title: string; desc: string }[];
}

export interface ServiceItem {
  id: string;
  name: string;
  iconName: string;
  tagline: string;
  description: string;
  features: string[];
  popularAddons: string[];
}

export interface CopyPlaceholderConfig {
  agencyName: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  workingHours: string;
  regNumber: string;
  trustScore: string;
}

export const DEFAULT_PLACEHOLDERS: CopyPlaceholderConfig = {
  agencyName: 'WanderNest',
  phone: '+91 94745 92930',
  whatsapp: '+91 94745 92930',
  email: 'hellowandernesttravels@gmail.com',
  address: 'Coming Soon!',
  workingHours: 'SOON',
  regNumber: 'ANI-TOUR-2024-8891',
  trustScore: '4.9/5 from 1,420+ Travelers'
};

export const MASTER_PACKAGES: PackageItem[] = [
  {
    id: 'travel-andaman-with-joy',
    name: 'Travel Andaman With Joy',
    badge: 'Couples & Honeymoon Best Seller',
    targetAudience: 'Couples & Honeymooners',
    duration: '5 Nights / 6 Days',
    priceStarting: '₹34,999 / person',
    rating: 4.95,
    reviewsCount: 480,
    imageUrl: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1000&q=80',
    heroHeadline: 'Whispering Palms, Private Sunsets & Timeless Romance',
    shortSnippet: 'Crafted for lovers seeking pure island bliss. From sunset walks on Radhanagar Beach to secluded beachside candlelight dinners in Havelock, let every moment celebrate your love.',
    fullDescription: 'Surrender to the rhythm of turquoise tides and tropical romance. "Travel Andaman With Joy" is our signature honeymoon and romantic retreat designed to give couples intimacy, effortless luxury, and unforgettable island memories without the stress of logistics.',
    highlights: [
      'Private sunset setup with candlelight beach dinner in Havelock',
      'Radhanagar Beach (Asia’s most scenic beach) sunset experience',
      'Premium private catamaran transfers (Makruzz/Nautika Royal Class)',
      'Couples photo walk along tranquil Kalapathar Beach coral shores',
      'Exclusive complimentary bottle of wine & honeymoon floral cake'
    ],
    inclusions: [
      '5 Nights Luxury Beach Resort Stay with ocean-facing balcony',
      'Daily curated gourmet breakfast & special beach dinner',
      'All inter-island private catamaran tickets pre-secured',
      'Private air-conditioned chauffeur-driven vehicle throughout',
      '24/7 on-ground island concierge & personal trip host'
    ],
    dayHighlights: [
      { day: 'Day 1', title: 'Arrival in Port Blair & Cellular Jail Memorial', desc: 'Warm traditional island greeting, private check-in, and an evocative evening sound & light show.' },
      { day: 'Day 2', title: 'Luxury Cruise to Havelock (Swaraj Dweep)', desc: 'Glide across azure ocean waters on Nautika cruise; unwind at private resort cabanas.' },
      { day: 'Day 3', title: 'Radhanagar Sunset & Candlelight Beach Dining', desc: 'Bask in golden hour reflections on powder-soft sands, followed by a chef-crafted dinner under starlight.' },
      { day: 'Day 4', title: 'Neil Island (Shaheed Dweep) Hidden Coves', desc: 'Explore natural rock formations (Howrah Bridge) and Laxmanpur Beach sunset tranquility.' },
      { day: 'Day 5', title: 'Return to Port Blair & Souvenir Hunt', desc: 'Savor authentic seafood delicacies and explore local pearl, seashell, and coconut craft bazaars.' },
      { day: 'Day 6', title: 'Farewell With Golden Island Memories', desc: 'Private airport transfer with personalized Andaman keepsake memory gift.' }
    ]
  },
  {
    id: 'family-island-explorer',
    name: 'Family Island Explorer',
    badge: 'Family & Multi-Gen Favorite',
    targetAudience: 'Families & Multi-Gen',
    duration: '6 Nights / 7 Days',
    priceStarting: '₹38,500 / person',
    rating: 4.92,
    reviewsCount: 520,
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
    heroHeadline: 'Safe, Seamless Island Wonder for Every Generation',
    shortSnippet: 'Relaxed travel schedules, kid-safe shallow lagoon beaches, glass-bottom coral safaris, and comfortable beachfront family villas where three generations make lifelong memories.',
    fullDescription: 'Traveling with kids or grandparents requires meticulous planning, easy pacing, and zero logistical stress. Our "Family Island Explorer" delivers generous leisure mornings, spacious family villas, and interactive nature experiences that captivate both children and seniors.',
    highlights: [
      'Semi-submarine & Glass-bottom boat safari at Elephant Beach (No swimming needed)',
      'Ross Island (Netaji Subhash Chandra Bose Island) deer and peacock sanctuary walk',
      'Gentle tidal pool explorations at Bharatpur Beach with kid safety hosts',
      'Spacious inter-connecting beach resort suites with family swimming pools',
      'Dedicated child & senior-friendly vehicles with dedicated luggage handlers'
    ],
    inclusions: [
      '6 Nights 4-Star beachfront family resort accommodation',
      'Full buffet breakfasts & kid-friendly meal options',
      'Pre-booked premium ferry seats with priority boarding assistance',
      'Dedicated driver-guide for entire tour with medical kit onboard',
      'All island entry permits, environmental cess, and heritage tickets'
    ],
    dayHighlights: [
      { day: 'Day 1', title: 'Port Blair Welcome & Corbyn’s Cove Beach', desc: 'Effortless airport pickup, relaxed beachfront stroll, and coconut water refreshment.' },
      { day: 'Day 2', title: 'Historic Ross Island & Coral Safari', desc: 'Encounter friendly spotted deer under century-old banyan roots and learn colonial history.' },
      { day: 'Day 3', title: 'Catamaran to Havelock & Elephant Beach Boat', desc: 'High-speed catamaran cruise; safe glass-bottom boat glimpse into thriving coral ecosystems.' },
      { day: 'Day 4', title: 'Leisure Day at Radhanagar Beach', desc: 'Gentle waves perfect for kids wading; shaded tropical pine tree canopies for elders.' },
      { day: 'Day 5', title: 'Neil Island Agricultural Paradise', desc: 'Visit organic fruit farms, quiet white sand bays, and watch local fishermen cast nets.' },
      { day: 'Day 6', title: 'Port Blair Harbor Cruise & Sagarika Emporium', desc: 'Scenic sunset harbor cruise and authentic government-certified handicraft shopping.' },
      { day: 'Day 7', title: 'Heartfelt Goodbyes & Safe Departure', desc: 'Private transfer to Veer Savarkar International Airport.' }
    ]
  },
  {
    id: 'island-heritage-nature-explorer',
    name: 'Island Heritage & Nature Explorer',
    badge: 'Nature & Heritage Favorite',
    targetAudience: 'Nature & Heritage',
    duration: '5 Nights / 6 Days',
    priceStarting: '₹29,500 / person',
    rating: 4.95,
    reviewsCount: 390,
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80',
    heroHeadline: 'Ancient Mangrove Creeks, Limestone Caves & Sunset Points',
    shortSnippet: 'Designed for culture, history, and nature enthusiasts. Journey through Baratang’s ancient limestone caves, mangrove boat safaris, historic Ross Island, and Chidiya Tapu’s panoramic coastal sunsets.',
    fullDescription: 'Uncover the rich tapestry of the Andaman archipelago beyond the sand. "Island Heritage & Nature Explorer" takes you deep into century-old banyan canopies, colonial ruins, tranquil mangrove channels, and scenic sunset cliffs without any rushing.',
    highlights: [
      'Baratang Island mangrove boat safari & ancient limestone caves exploration',
      'Cellular Jail National Memorial & evocative evening Light and Sound experience',
      'Chidiya Tapu (Bird Island) coastal rainforest trail & sunset cliff viewpoint',
      'Ross Island heritage walk with century-old banyan roots and colonial ruins',
      'Neil Island natural limestone rock bridge & tropical agriculture farm tour'
    ],
    inclusions: [
      '5 Nights Premium Eco-Resort or Boutique Beach Cottages',
      'All inter-island private catamaran tickets (Makruzz / Nautika)',
      'Private air-conditioned chauffeur-driven vehicle throughout',
      'Dedicated heritage guide and all forest permit entries',
      'Daily artisan breakfasts and scenic harbor boat passes'
    ],
    dayHighlights: [
      { day: 'Day 1', title: 'Port Blair & Cellular Jail Memorial', desc: 'Private airport greeting, historical cellular jail visit, and moving evening light and sound show.' },
      { day: 'Day 2', title: 'Baratang Mangrove Safari & Caves', desc: 'Cruise through dense tropical mangrove creeks and trek to stunning natural limestone formations.' },
      { day: 'Day 3', title: 'Luxury Cruise to Havelock (Swaraj Dweep)', desc: 'Scenic catamaran cruise across the bay; relax at resort cabanas and visit Kalapathar Beach.' },
      { day: 'Day 4', title: 'Radhanagar Sunset & Nature Walk', desc: 'Bask in golden hour reflections on Asia’s cleanest beach under shaded coastal forest canopies.' },
      { day: 'Day 5', title: 'Neil Island Natural Rock Bridge', desc: 'Explore dramatic geological formations at Howrah Bridge and relax on quiet Laxmanpur sands.' },
      { day: 'Day 6', title: 'Chidiya Tapu Sunset & Departure Send-off', desc: 'Panoramic coastal viewpoint drive and private transfer to airport with keepsake memories.' }
    ]
  }
];

export const MASTER_SERVICES: ServiceItem[] = [
  {
    id: 'custom-tour-packages',
    name: 'Custom Tour Packages',
    iconName: 'Compass',
    tagline: 'Handcrafted Itineraries Tailored to Your Rhythm and Desires',
    description: 'No cookie-cutter trips. Whether you dream of a private beachfront honeymoon, a leisurely multi-generation family retreat, or an immersive nature and heritage journey, our local specialists engineer an itinerary around your exact dates, travel pace, and budget.',
    features: [
      'Customized day-by-day pacing with zero rush',
      'Expert recommendations on seasonal weather & scenic spots',
      'Honeymoon, family, corporate, and relaxed island travel specialties',
      'Dedicated local travel designer assigned to your trip'
    ],
    popularAddons: ['Surprise romantic beach candle setups', 'Private barbecue on secluded sands', 'Extended island hops to Diglipur & Baratang']
  },
  {
    id: 'ferry-cruise-bookings',
    name: 'Ferry & Cruise Bookings',
    iconName: 'Ship',
    tagline: 'Guaranteed Seats on Premium Private Catamarans',
    description: 'Island hopping in the Andamans hinges on inter-island ferry logistics. We secure verified seats on premier private catamarans like Nautika, Makruzz, and Green Ocean well in advance, avoiding long queues, sold-out sailings, and weather-disrupted schedules.',
    features: [
      'Instant confirmed tickets on Makruzz, Nautika, and Green Ocean',
      'Priority boarding and baggage handling coordination',
      'Real-time weather tracking and immediate alternate vessel routing',
      'Deluxe, Premium, and Royal Class seating options'
    ],
    popularAddons: ['Port Blair to Havelock early morning sailings', 'Havelock to Neil afternoon transfers', 'VIP lounge check-in assistance']
  },
  {
    id: 'island-sightseeing-excursions',
    name: 'Island Sightseeing & Heritage Excursions',
    iconName: 'Landmark',
    tagline: 'Guided Heritage Walks, Mangrove Safaris & Scenic Sunset Drives',
    description: 'Immerse yourself in Andaman’s fascinating history and untouched biodiversity. From the poignant galleries of Cellular Jail and the colonial relics of Ross Island to dense Baratang mangrove creek boat rides and Chidiya Tapu sunset viewpoints, our experienced local guides bring each story to life.',
    features: [
      'Expert local heritage guides with deep historical knowledge',
      'Private air-conditioned vehicles for comfortable sightseeing',
      'All forest, monument, and sound-and-light show permits pre-arranged',
      'Carefully timed excursions to avoid crowd congestion'
    ],
    popularAddons: ['Baratang limestone cave private safari', 'Ross Island evening light & sound passes', 'Chidiya Tapu coastal forest trail']
  },
  {
    id: 'hotel-resort-reservations',
    name: 'Hotel & Resort Reservations',
    iconName: 'Hotel',
    tagline: 'Handpicked Beachfront Villas, Luxury Stays & Eco Cottages',
    description: 'We personally inspect every resort in Port Blair, Havelock, and Neil Island. From private plunge pool villas on white sand shores to cozy eco-cottages nestled beneath coconut palms, enjoy negotiated local rates and guaranteed ocean-view rooms.',
    features: [
      'Inspected beachfront properties with direct sand access',
      'Exclusive rate parity and value-added complimentary upgrades',
      'Early check-in and late checkout priority privileges',
      'Options ranging from boutique budget gems to 5-star luxury resorts'
    ],
    popularAddons: ['Beachfront pool villas in Havelock', 'Family interconnecting suites', 'Private sunset balcony rooms in Neil']
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Aakash & Priyadarshini Mehta',
    location: 'Mumbai, India',
    tripType: 'Honeymoon (Travel Andaman With Joy)',
    quote: 'WanderNest turned our honeymoon into pure poetry. From our Makruzz cruise tickets being handed to us seamlessly to the surprise sunset candle setup at Radhanagar, we didn’t lift a finger. Truly unmatched local warmth!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 2,
    name: 'Dr. Sameer Bannerjee & Family',
    location: 'Kolkata, India',
    tripType: 'Family Vacation (Family Island Explorer)',
    quote: 'Traveling with my 72-year-old mother and two young kids was something I was anxious about. WanderNest’s vehicle pacing, wheelchair support at the jetty, and glass-bottom boat tour made it our best family trip ever.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 3,
    name: 'Rohan Deshmukh & Dive Crew',
    location: 'Bengaluru, India',
    tripType: 'Adventure Group (Adventure & Scuba Thrills)',
    quote: 'Dixon’s Pinnacle dive was unbelievable! The visibility was 25+ meters and our PADI master knew exactly when the currents were optimal. Bioluminescence kayaking at Havelock felt like floating in outer space.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  }
];

export const ISLAND_GUIDE = [
  {
    name: 'Port Blair',
    title: 'The Gateway of History & Emerald Bays',
    desc: 'The vibrant capital island. Experience the poignant Cellular Jail memorial, heritage Ross Island, and Corbyn’s Cove coastal drive.',
    bestFor: 'History, arrival hub, museums, light & sound show',
    stayDuration: '1 to 2 Nights'
  },
  {
    name: 'Havelock (Swaraj Dweep)',
    title: 'Crown Jewel of Turquoise Waters',
    desc: 'Home to the globally celebrated Radhanagar Beach (Asia’s best beach), vibrant coral reefs at Elephant Beach, and luxury beach villas.',
    bestFor: 'Honeymoons, romantic beach sunsets, luxury resorts, coastal relaxation',
    stayDuration: '2 to 3 Nights'
  },
  {
    name: 'Neil Island (Shaheed Dweep)',
    title: 'The Serene Organic Island of Calm',
    desc: 'Gentle rural charm, dramatic natural limestone rock bridges (Howrah Bridge), shallow white sand shores, and peaceful coastline.',
    bestFor: 'Peaceful relaxation, cycle rides, natural rock bridge, coastal sunsets',
    stayDuration: '1 to 2 Nights'
  },
  {
    name: 'Baratang & Diglipur',
    title: 'Wild Mangroves & Pristine North Andaman',
    desc: 'Ancient mangrove creek boat rides, limestone caves, mud volcanoes, and Ross & Smith twin sandbar islands connected by crystal sea.',
    bestFor: 'Offbeat adventure, eco-treks, nature lovers',
    stayDuration: 'Day trip or 2 Nights'
  }
];

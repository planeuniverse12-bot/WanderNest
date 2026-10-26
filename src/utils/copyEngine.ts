import { CopyPlaceholderConfig, DEFAULT_PLACEHOLDERS } from '../data/copyData';

export interface PageCopySection {
  pageId: 'home' | 'about' | 'services' | 'contact';
  pageTitle: string;
  subTitle: string;
  croRationale: string;
}

export function replacePlaceholders(
  template: string,
  config: CopyPlaceholderConfig = DEFAULT_PLACEHOLDERS,
  keepBrackets: boolean = false
): string {
  if (keepBrackets) {
    return template;
  }

  let result = template;
  result = result.replace(/\[Agency Name\]/g, config.agencyName);
  result = result.replace(/\[Phone Number\]/g, config.phone);
  result = result.replace(/\[WhatsApp Number\]/g, config.whatsapp);
  result = result.replace(/\[Email Address\]/g, config.email);
  result = result.replace(/\[Email\]/g, config.email);
  result = result.replace(/\[Physical Address\]/g, config.address);
  result = result.replace(/\[Working Hours\]/g, config.workingHours);
  result = result.replace(/\[Registration Number\]/g, config.regNumber);
  result = result.replace(/\[Trust Score\]/g, config.trustScore);
  return result;
}

/**
 * Returns the pristine, professional Markdown document containing the complete copy
 * exactly structured as requested for Home, About Us, Our Services, and Contact Us.
 */
export function generateMasterMarkdownCopy(
  config: CopyPlaceholderConfig = DEFAULT_PLACEHOLDERS,
  keepPlaceholders: boolean = false
): string {
  const agency = keepPlaceholders ? '[Agency Name]' : config.agencyName;
  const phone = keepPlaceholders ? '[Phone Number]' : config.phone;
  const email = keepPlaceholders ? '[Email Address]' : config.email;
  const address = keepPlaceholders ? '[Physical Address]' : config.address;
  const whatsapp = keepPlaceholders ? '[WhatsApp Number]' : config.whatsapp;
  const hours = keepPlaceholders ? '[Working Hours]' : config.workingHours;

  return `# Complete Website Copy for ${agency}
*Specialized Tour & Travel Agency for the Andaman & Nicobar Islands*
*Target Audiences: Couples & Honeymooners, Families & Multi-Gen Travelers, Nature & Heritage Explorers*
*Tone: Welcoming, Professional, Inspiring, Deeply Knowledgeable*

---

## 1. HOME PAGE

### Hero Section
**Catchy Hero Headline:**
> **Escape to Untamed Azure: Where Crystal Waters Meet Carefree Island Living.**

**Catchy Hero Subheadline:**
> Sink your bare feet into powdery white sands, bask along mirror-clear turquoise shores, and leave every ferry ticket, resort stay, and itinerary detail to Andaman’s seasoned local insiders. Your dream island getaway begins effortlessly right here.

**Primary CTA Button:**
\`[ Book Your Escape ]\`

**Secondary CTA Button / Micro-copy:**
\`[ Get a Free Custom Quote ]\`
*(No hidden fees. Instant response within 2 hours. Personalized to your travel rhythm.)*

---

### Value Proposition: Why Choose ${agency}
*Three unbreakable promises engineered for stress-free tropical vacations:*

- **True Island Insiders (Zero Middlemen):** We are born, raised, and rooted in the Andaman Islands. From secret sunset coves away from crowds to hidden rainforest trails and guaranteed seats on high-speed private catamarans, you get authentic local access that generic mainland travel portals simply cannot offer.
- **Tailor-Made For Your Travel Rhythm:** Whether you crave barefoot honeymoon seclusion, stress-free multi-generation family pacing with kid-safe lagoons, or immersive nature and heritage explorations, we handcraft every single day around your preferences, energy, and budget.
- **24/7 On-Island Concierge & Safety Net:** From the moment your flight lands at Port Blair to your final departure wave, our dedicated on-ground team is by your side. Flight delays, weather changes, or spontaneous itinerary tweaks? We handle everything instantly in real time so you never lose a minute of relaxation.

---

### Introduction Section: Welcome to Paradise
**Section Headline:**
> **Welcome to the Andaman Archipelago: A World Apart, Wonderfully Close.**

**Introduction Body Copy:**
Imagine an island sanctuary where the soundtrack of life fades into the gentle hush of the Bay of Bengal, where century-old rain trees canopy sugar-white coastlines, and where the water is so crystalline you can see schools of vibrant angelfish gliding through peaceful coastal shallows.

At **${agency}**, we don't just book hotels and ferry rides—we unlock the living soul of the Andaman & Nicobar Islands. We understand that a tropical holiday isn't just a trip; it's the honeymoon you've dreamed of for months, the cherished family reunion where grandparents and toddlers smile together on a shaded boat, or the long-awaited escape into pristine island nature and heritage. 

With deep island roots, private catamaran partnerships, and an obsessive dedication to your comfort, we turn complex inter-island logistics into seamless moments of wonder. Breathe in the salty breeze; paradise is waiting for you.

---

### Featured Packages Section

#### Package 1: "Travel Andaman With Joy"
- **Target Audience:** Couples & Honeymooners seeking romance, luxury, and serenity.
- **Tagline:** Whispering Palms, Private Sunsets & Timeless Romance.
- **Package Teaser Copy:**
  Surrender to the sweet rhythm of romance. "Travel Andaman With Joy" is crafted exclusively for couples who yearn for unhurried intimacy and cinematic beauty. Stroll hand-in-hand along the golden crescent of Radhanagar Beach during twilight, sip champagne during a private beachfront candlelight dinner under Havelock’s star-dusted sky, and cruise across azure straits on luxury private catamarans. We take care of every intimate detail so you can focus solely on each other.
- **Key Inclusions:** 5-star beachfront pool villa stays, private sunset dinner on Havelock sands, couples photoshoot at Kalapathar Beach, premium Makruzz/Nautika cruise tickets, and dedicated private chauffeur throughout.
- **CTA:** \`[ Book This Romantic Escape ]\` | \`[ View Full 6-Day Itinerary ]\`

#### Package 2: "Family Island Explorer"
- **Target Audience:** Families with kids, teens, and senior citizens seeking relaxation and safety.
- **Tagline:** Safe, Seamless Island Wonder for Every Generation.
- **Package Teaser Copy:**
  Family vacations should bring joy, not logistical headaches. Our "Family Island Explorer" is thoughtfully paced with relaxed late mornings, spacious family villas, and carefully chosen activities that delight both energetic children and relaxed grandparents. Watch your children's eyes light up on semi-submarine coral safaris at Elephant Beach, stroll through friendly spotted deer herds at historic Ross Island, and relax on gentle, shallow-lagoon beaches where swimming is effortless and safe.
- **Key Inclusions:** Interconnecting family beachfront suites, glass-bottom coral safaris (no swimming required), historical Cellular Jail Light & Sound memorial, child & senior-assistive ferry transfers, and 24/7 on-call family support host.
- **CTA:** \`[ Plan Your Family Getaway ]\` | \`[ Customize For Your Family ]\`

#### Package 3: "Island Heritage & Nature Explorer"
- **Target Audience:** Culture enthusiasts, bird watchers, couples, and nature lovers.
- **Tagline:** Ancient Rainforests, Mangrove Safaris & Historic Island Heritage.
- **Package Teaser Copy:**
  Discover the breathtaking soul and stories of the Andaman archipelago beyond the beach towel. "Island Heritage & Nature Explorer" takes you deep into the heart of Andaman's untamed natural wonders and moving history. Glide through dense mangrove canopies on a private boat safari to Baratang's million-year-old limestone caves, walk through the colonial ruins and spotted deer sanctuaries of Ross Island, experience the evocative Cellular Jail Light & Sound chronicle, and catch golden sunsets from Chidiya Tapu's biological park cliffs.
- **Key Inclusions:** 5 Nights Premium Eco-Resort or Heritage Stays, private boat safari to Baratang Limestone Caves, express inter-island catamaran passes, Ross Island & North Bay excursion, Cellular Jail sound & light tickets, Chidiya Tapu sunset tour, and dedicated AC private vehicle.
- **CTA:** \`[ Explore Nature Itinerary ]\` | \`[ Customize This Journey ]\`

---

## 2. ABOUT US PAGE

### Company Story
**Headline:**
> **Born from Island Salt, Guided by Unwavering Hospitality.**

**Body Copy:**
Our story began not in an office boardroom, but on the quiet shores of Havelock Island at dawn, watching traditional wooden fishing catamarans glide over mirror-calm coral reefs. For years, we watched travelers arrive in the Andamans eager for paradise—only to be overwhelmed by complicated government permits, confusing inter-island ferry schedules, rigid cookie-cutter tour buses, and missed connections.

We knew the Andaman & Nicobar Islands deserved better. And more importantly, travelers deserved better.

**${agency}** was founded with one clear, passionate conviction: to share the raw, authentic wonder of our island homeland with the warmth, care, and meticulous perfection of a private host. We grew up exploring every secret tide pool in Neil Island, trekking through Baratang's ancient mangrove canopies, and discovering hidden viewpoints across the archipelago. 

Today, that intimate local knowledge powers every journey we craft. We have transformed island travel from a confusing logistical puzzle into an art form—combining luxury comforts, handpicked resort partnerships, and guaranteed private catamaran connections with authentic island soul. When you travel with us, you aren't just visiting the Andamans; you are welcomed as family into our home.

---

### Our Mission Statement
> **"To open the enchanting landscapes, tranquil shores, and lush sanctuaries of the Andaman Islands through sustainable, eco-conscious travel—delivering deeply personalized, flawless journeys that delight our guests while fiercely preserving our fragile natural ecosystems and rich indigenous heritage for generations to come."**

---

## 3. OUR SERVICES PAGE

**Page Headline:**
> **Tailored Island Logistics. Flawless Execution. Zero Stress.**

**Page Subheadline:**
> From securing impossible-to-get cruise tickets to curating private sunset dinners on untouched beaches, explore our four pillars of Andaman travel excellence.

### 1. Custom Tour Packages
*Handcrafted Itineraries Tailored to Your Rhythm, Style, and Budget.*
Whether you want a 4-day whirlwind romantic getaway or a 10-day immersive multi-island odyssey, we design your journey from a blank canvas. We take the time to understand your physical comfort levels, food preferences, and bucket-list wishes—ensuring your days flow naturally with ample time to stroll, sip coconuts, and watch the sun melt into the ocean without feeling rushed.

### 2. Ferry & Cruise Bookings
*Guaranteed Seats on Premium High-Speed Private Catamarans.*
Inter-island ferry transfers between Port Blair, Havelock (Swaraj Dweep), and Neil Island (Shaheed Dweep) sell out weeks in advance. We secure confirmed tickets across premier private cruise liners—including Nautika, Makruzz, and Green Ocean—with priority check-in and luggage coordination. If unpredictable tropical weather prompts vessel schedule changes, our on-ground team rebooks and reroutes your connections instantly, saving your vacation.

### 3. Island Sightseeing & Heritage Excursions
*Baratang Mangrove Safaris, Historic Colonial Sanctuaries & Sunset Viewpoints.*
Immerse yourself safely in the rich living tapestry of the islands. We curate guided heritage journeys to the Cellular Jail National Memorial, boat expeditions across Baratang's tidal mangrove creeks to ancient limestone formations, and wildlife walks through Chidiya Tapu's coastal birding trails. Every tour is led by knowledgeable, licensed local guides with private AC ground transportation and reserved entry permits.

### 4. Hotel & Resort Reservations
*Personally Inspected Beachfront Luxury, Cozy Eco-Cottages & Private Villas.*
Photos online can be deceiving, but our local team inspects every room, bed, and beach access path in person. Through longstanding local partnerships, we guarantee the best available ocean-view rooms, complimentary room upgrades where possible, and negotiable local packages at the finest beachfront resorts in Havelock, eco-lodges in Neil, and heritage properties in Port Blair.

---

## 4. CONTACT US PAGE

### Main Headline & Invitation
**Headline:**
> **Let’s Plan Your Island Escape. We Are Ready When You Are.**

**Subheadline:**
> Have questions about ferry timings, best seasons to visit, or need a customized quote within your budget? Speak directly to our local Andaman travel specialists. No robots, no generic call centers—just real islanders ready to craft your perfect getaway.

---

### Direct Contact Details
- **Phone:** ${phone} *(Instant call assistance)*
- **WhatsApp Direct:** ${whatsapp} *(Quickest replies for itineraries & quotes)*
- **Email:** ${email}
- **Physical Island Office:** ${address}
- **Island Operating Hours:** ${hours}

---

### Contact Form Header & Conversion Copy
**Form Header:**
> **Request Your Free Custom Itinerary & Instant Quote**

**Form Supporting Copy:**
*Tell us a little about your dream vacation. We will reply within 2 hours with a bespoke day-by-day plan, transparent itemized pricing, and local island advice tailored just for you.*

**Form Fields:**
1. Full Name
2. Email Address & WhatsApp Phone Number
3. Target Travel Dates / Month
4. Number of Travelers (Adults, Children, Seniors)
5. Vacation Style:
   - [ ] Romantic Honeymoon & Couples Retreat
   - [ ] Family Island Adventure
   - [ ] Island Heritage & Nature Exploration
   - [ ] Custom / Corporate / Multi-Island Explorer
6. Preferred Hotel Category (Luxury 5-Star Beach Resort / Boutique 4-Star / Eco Beach Cottage)
7. Special Requests / Bucket-List Wishes (e.g., Candlelight beach dinner, Baratang cave safari, Airport assistance)

**Submit Button Text:**
\`[ Send My Custom Itinerary Request ]\`

**Trust Microcopy:**
*🔒 Your information is 100% private. Zero spam. We never share your data.*
`;
}

/**
 * Calculates quick stats on the copy
 */
export function getCopyMetrics(text: string) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const chars = text.length;
  const readTimeMinutes = Math.max(1, Math.ceil(words / 200));
  return { words, chars, readTimeMinutes };
}

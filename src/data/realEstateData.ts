import { Property, Destination, JournalArticle, Testimonial } from '../types/realEstate';

export const COMPANY_DETAILS = {
  name: 'Aurevia Estates',
  tagline: 'Exceptional Properties. Extraordinary Living.',
  headline: 'Exceptional Properties. Extraordinary Living.',
  subheadline: "Discover distinctive homes and investment opportunities in the world's most desirable locations.",
  description: 'Aurevia Estates is an international luxury real estate advisory specializing in the acquisition, sale, and curation of premier architectural estates, waterfront villas, and prime urban residences for discerning private clients worldwide.',
  stats: [
    { value: '12+', label: 'Years of Experience', sub: 'In private client advisory' },
    { value: '850+', label: 'Properties Sold', sub: 'Across prime global enclaves' },
    { value: '$2.4B+', label: 'Property Value', sub: 'Cumulative closed volume' },
    { value: '18', label: 'Global Markets', sub: 'Offices in key financial hubs' },
  ],
  offices: [
    {
      city: 'London',
      address: '28 Berkeley Square, Mayfair, London W1J 6EN',
      phone: '+44 (0)20 7946 0982',
      email: 'london@aureviaestates.com',
    },
    {
      city: 'New York',
      address: '767 Fifth Avenue, 42nd Floor, New York, NY 10153',
      phone: '+1 (212) 555-0194',
      email: 'newyork@aureviaestates.com',
    },
    {
      city: 'Monaco',
      address: '15 Boulevard d’Italie, 98000 Monte Carlo, Monaco',
      phone: '+377 93 25 04 11',
      email: 'monaco@aureviaestates.com',
    },
  ],
};

export const PROPERTIES: Property[] = [
  {
    id: 'kensington-residence',
    name: 'The Kensington Residence',
    location: 'London, United Kingdom',
    city: 'London',
    country: 'United Kingdom',
    price: 3850000,
    formattedPrice: '$3,850,000',
    status: 'Buy',
    type: 'Townhouse',
    bedrooms: 5,
    bathrooms: 4,
    sqft: 4200,
    yearBuilt: 2021,
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
      '/src/assets/images/journal_luxury_art_1790395352428.jpg',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85'
    ],
    tagline: 'Refined Victorian elegance reimagined with contemporary European bespoke finishes.',
    description: 'Set within an exclusive tree-lined enclave in Royal Borough of Kensington, this stately residence balances classic architectural proportion with minimalist contemporary interiors. Features soaring 3.4-meter ceilings, herringbone European oak flooring, bespoke Poliform kitchen cabinetry, and an enclosed landscaped private garden with sunken lightwell.',
    features: [
      'Private walled mews garden',
      'Handcrafted Poliform Italian kitchen with Gaggenau suites',
      'Subterranean climate-controlled wine tasting cellar',
      'Primary retreat with dual dressing rooms and Calacatta marble bath',
      'Lutron Homeworks smart architectural lighting & sound integration',
      'Dedicated staff quarters with private secondary entrance'
    ],
    amenities: [
      'Wine Cellar',
      'Private Mews Garden',
      'Integrated Smart Home',
      'Radiant Floor Heating',
      'Secure Underground Parking',
      '24hr Concierge Service'
    ],
    neighborhoodInfo: 'Moments from Kensington Palace Gardens, world-class Michelin dining on Kensington High Street, and premier international academies.',
    architecturalStyle: 'Contemporary Classical',
    isSignature: false
  },
  {
    id: 'ocean-crest-villa',
    name: 'Ocean Crest Villa',
    location: 'Miami, Florida',
    city: 'Miami',
    country: 'USA',
    price: 5200000,
    formattedPrice: '$5,200,000',
    status: 'Buy',
    type: 'Waterfront Villa',
    bedrooms: 6,
    bathrooms: 5,
    sqft: 5100,
    yearBuilt: 2023,
    heroImage: '/src/assets/images/ocean_crest_villa_1790395390168.jpg',
    gallery: [
      '/src/assets/images/ocean_crest_villa_1790395390168.jpg',
      '/src/assets/images/signature_penthouse_1790395338261.jpg',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85'
    ],
    tagline: 'Direct deepwater frontage with private 90-foot superyacht slip and panoramic Biscayne views.',
    description: 'A masterpiece of tropical modernism on Venetian Islands, Ocean Crest Villa presents expansive seamless indoor-outdoor living. Frameless floor-to-ceiling glass reveals a 60-foot zero-edge saltwater lap pool, an outdoor teak summer kitchen, and direct Atlantic waterway access. Finished with honed Pietra di Cardosa stone and custom warm teak millwork.',
    features: [
      '90-foot deep-water dock capable of accommodating megayachts',
      '60-foot heated zero-edge saltwater reflection pool',
      'Rooftop stargazing terrace with 360-degree ocean & skyline vistas',
      'Floor-to-ceiling hurricane-impact acoustic glazing',
      'Chef show kitchen complemented by discreet catering scullery',
      'Motorized louvered loggia with integrated misting system'
    ],
    amenities: [
      'Private Yacht Dock',
      'Zero-Edge Pool',
      'Rooftop Lounge',
      'Outdoor Summer Kitchen',
      'Gated Entry & Security',
      'Spa & Sauna'
    ],
    neighborhoodInfo: 'Prime Venetian Islands waterfront with rapid access to Miami Beach private clubs, Design District boutiques, and downtown art venues.',
    architecturalStyle: 'Tropical Modernism',
    isSignature: true,
    signatureLabel: 'SIGNATURE PROPERTY'
  },
  {
    id: 'manhattan-penthouse',
    name: 'The Manhattan Penthouse',
    location: 'New York, USA',
    city: 'New York',
    country: 'USA',
    price: 8750000,
    formattedPrice: '$8,750,000',
    status: 'Buy',
    type: 'Penthouse',
    bedrooms: 4,
    bathrooms: 4,
    sqft: 3900,
    yearBuilt: 2022,
    heroImage: '/src/assets/images/signature_penthouse_1790395338261.jpg',
    gallery: [
      '/src/assets/images/signature_penthouse_1790395338261.jpg',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=85',
      '/src/assets/images/journal_luxury_art_1790395352428.jpg'
    ],
    tagline: 'Skyline grandeur floating above Central Park with wrapped panoramic terrace.',
    description: 'Occupying the entire 68th floor of an iconic limestone and glass residential tower, this trophy penthouse commands uninterrupted north-to-south panoramas encompassing Central Park and the Manhattan skyline. Key features include a bronze private elevator foyer, 14-foot slab heights, custom bronze-framed fireplaces, and curated art gallery corridors.',
    features: [
      'Full floorplate with keyed high-speed private elevator access',
      '1,200 sq ft wrap-around heated outdoor loggia overlooking the reservoir',
      'Custom Molteni&C kitchen with bookmatched Statuario marble slabs',
      'Primary wing featuring dual spa baths with carved marble soaking tubs',
      'Acoustically isolated private cinema & screening suite',
      'Full building services including sommelier and chauffeured house car'
    ],
    amenities: [
      'Private Keyed Elevator',
      'Wrap-Around Terrace',
      'Sommelier Wine Vault',
      'Cinema Room',
      '24/7 Doorman & Valet',
      'Private Health Club & Pool'
    ],
    neighborhoodInfo: 'Situated on the Upper East Side near Museum Mile, Madison Avenue flagship couture salons, and premier private institutions.',
    architecturalStyle: 'Modernist High-Rise',
    isSignature: true,
    signatureLabel: 'FEATURED RESIDENCE'
  },
  {
    id: 'palm-horizon-estate',
    name: 'Palm Horizon Estate',
    location: 'Dubai, UAE',
    city: 'Dubai',
    country: 'UAE',
    price: 6400000,
    formattedPrice: '$6,400,000',
    status: 'Buy',
    type: 'Modern Estate',
    bedrooms: 7,
    bathrooms: 6,
    sqft: 6800,
    yearBuilt: 2024,
    heroImage: '/src/assets/images/hero_luxury_estate_1790395311346.jpg',
    gallery: [
      '/src/assets/images/hero_luxury_estate_1790395311346.jpg',
      '/src/assets/images/about_luxury_arch_1790395325634.jpg',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=85'
    ],
    tagline: 'Private beachfront sanctuary on Palm Jumeirah with Arabian Gulf horizon vistas.',
    description: 'An architectural feat situated along the coveted fronds of Palm Jumeirah. The residence seamlessly integrates travertine stone, water channels, and double-height architectural glazing. Outside, step directly onto powdery private sands or unwind beside the infinity pool while taking in the sunset over Dubai Marina.',
    features: [
      'Direct private beach access with exclusive shoreline rights',
      'Indoor-outdoor wellness pavilion with Turkish hammam and ice bath',
      'Subterranean gallery showroom accommodating up to six supercars',
      'Cascading water walls and courtyard cooling microclimates',
      'Smart biometric access controls and perimeter laser security',
      'Staff annex with dual service kitchens and dedicated quarters'
    ],
    amenities: [
      'Private Beach',
      'Infinity Pool',
      'Hammam & Wellness Spa',
      '6-Car Gallery Garage',
      'Smart Biometrics',
      'Private Chef Quarters'
    ],
    neighborhoodInfo: 'Exclusive Palm Jumeirah private gated frond, 15 minutes to Dubai International Financial Centre and premier helipads.',
    architecturalStyle: 'Sculptural Contemporary',
    isSignature: true,
    signatureLabel: 'PRIVATE ESTATE'
  },
  {
    id: 'the-riviera-house',
    name: 'The Riviera House',
    location: 'Monaco',
    city: 'Monaco',
    country: 'Monaco',
    price: 12500000,
    formattedPrice: '$12,500,000',
    status: 'Buy',
    type: 'Villa',
    bedrooms: 5,
    bathrooms: 5,
    sqft: 5400,
    yearBuilt: 2020,
    heroImage: 'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1600&q=85',
      '/src/assets/images/about_luxury_arch_1790395325634.jpg',
      '/src/assets/images/signature_penthouse_1790395338261.jpg',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85'
    ],
    tagline: 'Perched high above the Mediterranean with rare freehold grounds and helicopter terrace.',
    description: 'A peerless cliffside estate offering panoramic views extending from Cap Martin to Saint-Jean-Cap-Ferrat. Engineered with cantilevered structural stone decks, private funicular elevator to secluded coves, and temperature-controlled botanical greenhouse. Complete privacy within one of the principality’s most discreet enclaves.',
    features: [
      'Unobstructed 220-degree Mediterranean coastline panorama',
      'Private funicular elevator connecting all residential terraces',
      'Wine cellar carved into natural limestone bedrock',
      'Reinforced rooftop suitable for private executive helicopter arrivals',
      'Staff suite with dedicated commercial staging kitchen',
      'Heated horizon pool with sunken conversation fire pit'
    ],
    amenities: [
      'Panoramic Ocean Views',
      'Cliffside Funicular',
      'Horizon Pool & Fire Pit',
      'Natural Rock Wine Cellar',
      'Helipad Access',
      'Discreet Security Enclosure'
    ],
    neighborhoodInfo: 'Discreet enclave on the heights of the Principality, moments from Casino de Monte-Carlo, yacht club marina, and heliport.',
    architecturalStyle: 'Mediterranean Modernist',
    isSignature: false
  },
  {
    id: 'highland-modern-residence',
    name: 'Highland Modern Residence',
    location: 'Los Angeles, USA',
    city: 'Los Angeles',
    country: 'USA',
    price: 4950000,
    formattedPrice: '$4,950,000',
    status: 'Buy',
    type: 'Architectural Modern',
    bedrooms: 5,
    bathrooms: 4,
    sqft: 4600,
    yearBuilt: 2023,
    heroImage: '/src/assets/images/highland_residence_1790395403391.jpg',
    gallery: [
      '/src/assets/images/highland_residence_1790395403391.jpg',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
      '/src/assets/images/journal_luxury_art_1790395352428.jpg',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85'
    ],
    tagline: 'Iconic Bird Streets promontory with sweeping jetliner views across the Los Angeles basin.',
    description: 'Designed by renowned architectural masters, this residence floats effortlessly above Sunset Strip. Massive automated Fleetwood pocket doors vanish into stone walls, merging the great room with a cantilevered zero-edge pool overlooking the glittering Pacific horizon. Warm cedar accents complement board-formed concrete and terrazzo.',
    features: [
      'Uncompromised jetliner city-to-ocean sightlines from every room',
      'Motorized pocketing glass walls opening 40 feet of living space',
      'Floating primary bedroom cantilevered over the Hollywood hillside',
      'Commercial-grade outdoor screening theater with surround audio',
      'Curated wine display room holding up to 600 select vintages',
      'Subterranean recording/wellness studio with soundproof isolation'
    ],
    amenities: [
      'Jetliner City Views',
      'Cantilevered Infinity Pool',
      'Outdoor Cinema Lounge',
      '600-Bottle Wine Display',
      'Soundproof Studio',
      'Smart Biophilic Landscaping'
    ],
    neighborhoodInfo: 'Perched in the celebrated Bird Streets above Sunset Strip, minutes from Beverly Hills luxury enclaves and West Hollywood clubs.',
    architecturalStyle: 'California Modernist',
    isSignature: false
  }
];

export const DESTINATIONS: Destination[] = [
  {
    id: 'london',
    name: 'London',
    country: 'United Kingdom',
    propertyCount: 34,
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1000&q=85',
    description: 'Historic Mayfair townhouses, Belgravia garden squares, and Kensington palatial residences.',
    averagePrice: '£4.2M'
  },
  {
    id: 'new-york',
    name: 'New York',
    country: 'United States',
    propertyCount: 48,
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1000&q=85',
    description: 'Iconic Central Park penthouses, Tribeca lofts, and historic Greenwich Village mansions.',
    averagePrice: '$6.8M'
  },
  {
    id: 'miami',
    name: 'Miami',
    country: 'United States',
    propertyCount: 29,
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=85',
    description: 'Venetian Islands waterfront estates, Star Island sanctuaries, and Biscayne Bay architecture.',
    averagePrice: '$5.5M'
  },
  {
    id: 'dubai',
    name: 'Dubai',
    country: 'United Arab Emirates',
    propertyCount: 42,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=85',
    description: 'Palm Jumeirah beach villas, Emirates Hills golf estates, and Downtown sky penthouses.',
    averagePrice: '$4.9M'
  },
  {
    id: 'los-angeles',
    name: 'Los Angeles',
    country: 'United States',
    propertyCount: 31,
    image: 'https://images.unsplash.com/photo-1580655653885-65763b2597d0?auto=format&fit=crop&w=1000&q=85',
    description: 'Bel-Air private promontories, Bird Streets architectural gems, and Malibu oceanfront retreats.',
    averagePrice: '$7.1M'
  },
  {
    id: 'monaco',
    name: 'Monaco',
    country: 'Monaco',
    propertyCount: 16,
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1000&q=85',
    description: 'Monte Carlo sea-view penthouses, Larvotto seaside residences, and rare coastal villas.',
    averagePrice: '€14.5M'
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'journal-1',
    title: "Inside the World's Most Desirable Residential Markets",
    category: 'Market Intelligence',
    date: 'Autumn 2026',
    readTime: '6 min read',
    image: '/src/assets/images/about_luxury_arch_1790395325634.jpg',
    excerpt: 'An analysis of prime capital flows, tax optimization zones, and the enduring resilience of trophy residential real estate across London, New York, and Monaco.',
    content: [
      'In an era characterized by dynamic global financial shifts, the quest for ultra-prime residential property remains the paramount anchor for intergenerational wealth preservation.',
      'From the royal garden squares of London’s Belgravia to the sun-bathed waterfront enclaves of Miami’s Venetian Islands, demand for one-of-a-kind trophy residences has decoupled from broader macroeconomic cycles.',
      'Private families and sovereign investors are increasingly prioritizing architectural uniqueness, turnkey sustainability, and verifiable security covenants. Today’s premier buyers do not merely acquire square footage—they acquire legacy assets with generational liquidity.'
    ],
    author: {
      name: 'Julian Sterling',
      role: 'Head of Global Research'
    }
  },
  {
    id: 'journal-2',
    title: 'The Art of Modern Luxury Living',
    category: 'Architecture & Design',
    date: 'Summer 2026',
    readTime: '5 min read',
    image: '/src/assets/images/journal_luxury_art_1790395352428.jpg',
    excerpt: 'How leading contemporary architects are combining warm raw stone, biophilic lightwells, and invisible acoustics to craft serene sanctuaries for high-profile owners.',
    content: [
      'Luxury in residential architecture has fundamentally evolved from ornate ostentation to profound spatial quietude.',
      'The modern collector’s home is engineered around light: morning eastern illumination filtered through hand-cut Roman travertine, floor-to-ceiling glass expanses that frame living artwork, and materials that mature gracefully over decades.',
      'Integration of invisible automation—where climate, air filtration, and acoustic dampening operate without visible switches—enables owners to inhabit spaces that restore equilibrium after high-tempo global engagements.'
    ],
    author: {
      name: 'Claire de Montmirail',
      role: 'Director of Architectural Curation'
    }
  },
  {
    id: 'journal-3',
    title: 'What to Consider When Investing in Prime Real Estate',
    category: 'Advisory & Strategy',
    date: 'Spring 2026',
    readTime: '8 min read',
    image: '/src/assets/images/signature_penthouse_1790395338261.jpg',
    excerpt: 'Essential frameworks for high-net-worth acquisitions: evaluating prime location premiums, municipal zoning longevity, and asset structuring.',
    content: [
      'Acquiring prime property across international jurisdictions demands an understanding that transcends price per square foot metrics.',
      'Savvy investors scrutinize municipal planning covenants, future skyline protection rights, and sovereign tax frameworks before committing capital.',
      'Aurevia’s private advisory team structures bespoke acquisition paths that safeguard confidentiality while guaranteeing clean title, frictionless escrow, and strategic long-term value preservation.'
    ],
    author: {
      name: 'Sebastian Vance',
      role: 'Senior Private Client Partner'
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'Aurevia’s discretion and bespoke market access were exemplary. Within two weeks of retaining them, we were quietly introduced to an off-market Kensington townhouse that surpassed all our expectations.',
    clientName: 'Lord & Lady H. Montgomery',
    location: 'London & Geneva',
    propertyAcquired: 'The Kensington Residence',
    year: '2026'
  },
  {
    id: 'test-2',
    quote: 'Selling a waterfront estate in Miami requires reaching a genuine international tier of buyers. Aurevia orchestrated a private global preview that generated multiple competing offers with zero public intrusion.',
    clientName: 'Alejandro de la Vega',
    location: 'Miami & Madrid',
    propertyAcquired: 'Venetian Island Waterfront',
    year: '2025'
  },
  {
    id: 'test-3',
    quote: 'As an international family office managing cross-border residential allocations, having an advisor with deep presence in New York and Monaco is invaluable. Aurevia is the gold standard.',
    clientName: 'H.E. Tariq Al-Mansoor',
    location: 'Dubai & New York',
    propertyAcquired: 'Central Park South Penthouse',
    year: '2026'
  }
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discover',
    tagline: 'Tell us what you are looking for',
    description: 'We initiate our advisory with an in-depth private consultation to understand your architectural preferences, lifestyle requirements, portfolio goals, and jurisdictional criteria.'
  },
  {
    number: '02',
    title: 'Curate',
    tagline: 'We identify properties that match',
    description: 'Leveraging our private international network, we present a confidential dossier of published and off-market residences that strictly align with your exacting parameters.'
  },
  {
    number: '03',
    title: 'Experience',
    tagline: 'Arrange private viewings & tours',
    description: 'We coordinate white-glove, private viewings, chauffeured arrivals, and comprehensive neighborhood walkthroughs at your convenience and with utmost discretion.'
  },
  {
    number: '04',
    title: 'Acquire',
    tagline: 'We guide you through the purchase',
    description: 'Our senior partners lead price negotiation, due diligence, legal structuring, and closing escrow, ensuring a seamless, confidential, and protected transaction.'
  }
];

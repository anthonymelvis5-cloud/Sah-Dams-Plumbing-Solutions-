import { ServiceItem, ProjectItem, TestimonialItem, ServiceAreaItem } from '../types';

export const COMPANY_INFO = {
  name: 'Sah Dams Plumbing Solutions',
  tagline: 'Reliable Plumbing. Done Right.',
  phone: '(555) 724-3267',
  phoneClean: '5557243267',
  email: 'service@sahdamsplumbing.com',
  address: '1420 Clearwater Blvd, Suite 210, Metroville, MV 97201',
  license: 'State Master Plumber Lic #PLMB-84920',
  bondedInsured: 'Fully Bonded & Insured to $2,000,000',
  hours: 'Mon - Sat: 7:00 AM - 7:00 PM',
  emergency: '24/7/365 Rapid Emergency Dispatch',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'emergency-plumbing',
    title: 'Emergency Plumbing',
    category: 'emergency',
    description: 'Immediate 24/7 dispatch for burst pipes, active flooding, major sewer backups, and urgent system failures.',
    details: [
      'Rapid arrival with fully equipped mobile units',
      'Instant main supply isolation & leak capping',
      'Water damage mitigation & moisture assessment',
      'Permanent structural repairs with zero shortcuts'
    ],
    estimatedTime: 'Within 45 mins arrival',
    warranty: '2-Year Workmanship Guarantee',
    iconName: 'AlertTriangle'
  },
  {
    id: 'leak-detection',
    title: 'Leak Detection & Repair',
    category: 'residential',
    description: 'Pinpoint underground slab leaks, hidden wall seepages, and pressure drops using acoustic and thermal non-destructive technology.',
    details: [
      'Ultrasonic acoustic frequency locators',
      'Infrared thermal scanning without drywall demolition',
      'Accurate localized pipe repairs',
      'Full water pressure calibration and testing'
    ],
    estimatedTime: '1 - 3 hours typical diagnostic',
    warranty: 'Lifetime Leak-Free Seal Guarantee',
    iconName: 'Search'
  },
  {
    id: 'drain-cleaning',
    title: 'Drain Cleaning',
    category: 'residential',
    description: 'High-pressure commercial hydro-jetting and motorized augers clearing recurring grease, root intrusions, and stubborn clogs.',
    details: [
      'High-definition color sewer camera inspection',
      '4,000 PSI hydro-jetting line scouring',
      'Tree root mastication and safe extraction',
      'Eco-friendly enzymatic bio-clearing treatment'
    ],
    estimatedTime: '1 - 2 hours service time',
    warranty: '1-Year Clear Drain Guarantee',
    iconName: 'Droplets'
  },
  {
    id: 'water-heaters',
    title: 'Water Heater Services',
    category: 'water-systems',
    description: 'Comprehensive installation, repair, and annual tune-ups for high-efficiency tankless and conventional storage systems.',
    details: [
      'Gas & electric tankless conversion specialists',
      'Sediment flush & magnesium anode replacement',
      'Thermostat & pilot assembly calibration',
      'Same-day emergency heater replacements'
    ],
    estimatedTime: '2 - 4 hours installation',
    warranty: 'Up to 10-Year Manufacturer Warranty + 2-Yr Labor',
    iconName: 'Flame'
  },
  {
    id: 'pipe-installation',
    title: 'Pipe Installation & Repair',
    category: 'commercial',
    description: 'Whole-house repiping and commercial distribution lines using premium grade-L copper and certified oxygen-barrier PEX-A.',
    details: [
      'Corroded galvanized pipe replacement',
      'Expansion PEX-A flexible waterline upgrades',
      'Commercial manifold design & pressure balancing',
      'Minimal wall intrusion with clean drywall restoration'
    ],
    estimatedTime: '1 - 3 days for whole-home repipe',
    warranty: '25-Year Material & 5-Year Labor Guarantee',
    iconName: 'Wrench'
  },
  {
    id: 'bathroom-kitchen',
    title: 'Bathroom & Kitchen Plumbing',
    category: 'residential',
    description: 'Master plumbing rough-ins and architectural fixture installations for luxury renovations, sinks, disposals, and showers.',
    details: [
      'Luxury freestanding tub & thermostatic valve installs',
      'Under-mount sink plumbing & heavy-duty disposals',
      'Low-flow commercial water closets & bidets',
      'Dishwasher, ice-maker, and reverse osmosis hookups'
    ],
    estimatedTime: 'Varies by renovation scope',
    warranty: '2-Year Complete Installation Warranty',
    iconName: 'ShieldCheck'
  }
];

export const STATS = [
  { value: '10+', label: 'Years Experience', subtext: 'Established master plumbers' },
  { value: '1,500+', label: 'Jobs Completed', subtext: 'Residential & commercial' },
  { value: '24/7', label: 'Emergency Support', subtext: 'Average 35-min arrival' },
  { value: '98%', label: 'Customer Satisfaction', subtext: 'Verified client reviews' }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Licensed & Experienced Professionals',
    description: 'Every job is handled by state-certified master technicians who undergo continual technical and local building code training.',
    icon: 'Award'
  },
  {
    title: 'Fast Response Times',
    description: 'Strategically positioned service vans across all districts guarantee an average arrival time under 45 minutes for urgent situations.',
    icon: 'Clock'
  },
  {
    title: 'Transparent Flat-Rate Pricing',
    description: 'Upfront written quotes with zero hidden travel fees, surprise hourly overages, or mysterious add-on charges after completion.',
    icon: 'FileText'
  },
  {
    title: 'Quality Workmanship Guaranteed',
    description: 'We adhere to the highest trade specifications, using top-tier copper and PEX components backed by written multi-year warranties.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Customer-Focused Service',
    description: 'We treat your property with surgical care, using protective shoe boot covers, floor runners, and leaving job sites spotless.',
    icon: 'CheckCircle2'
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Master Suite Luxury Bathroom Renovation',
    category: 'bathroom',
    location: 'Westside Marina Residences',
    image: '/src/assets/images/project_luxury_bathroom_1790386220140.jpg',
    scope: 'Complete rough-in and finish plumbing for dual undermount sinks, thermostatic rain shower system, and freestanding soaking tub.',
    completionTime: '4 Days',
    outcome: 'Flawless water pressure balance and zero water hammer across all dual shower heads.',
    specs: ['Matte Black Hansgrohe Valves', 'PEX-A Homeline System', 'Acoustic Sound-Dampening Waste Lines']
  },
  {
    id: 'proj-2',
    title: 'Commercial Copper Manifold & Backflow Overhaul',
    category: 'piping',
    location: 'Clearwater Commercial Center',
    image: '/src/assets/images/project_copper_pipes_1790386231229.jpg',
    scope: 'Replaced failing galvanized distribution header with Type-L copper manifold, dual RPZ backflow preventers, and pressure gauges.',
    completionTime: '2 Days (Zero Business Interruption)',
    outcome: 'Stabilized building-wide line pressure to 65 PSI with certified municipal backflow compliance.',
    specs: ['Lead-Free Apollo Ball Valves', 'Type-L Rigid Copper', 'Dual 2-Inch RPZ Backflows']
  },
  {
    id: 'proj-3',
    title: 'Dual High-Efficiency Tankless Water Heater',
    category: 'water-heaters',
    location: 'Pinecrest Executive Estates',
    image: '/src/assets/images/project_tankless_heater_1790386242886.jpg',
    scope: 'Decommissioned two 75-gallon power-vent tanks and installed dual cascaded 199k BTU condensing tankless units with smart recirculation.',
    completionTime: '1 Day',
    outcome: 'Unlimited simultaneous hot water for 6 bathrooms and a 38% reduction in monthly natural gas consumption.',
    specs: ['98% AFUE Condensing Technology', 'Concentric Polypropylene Venting', 'Integrated Smart Recirculation Pump']
  },
  {
    id: 'proj-4',
    title: 'Precision Whole-Home Repipe & Valve Modernization',
    category: 'piping',
    location: 'Riverbank Ridge Historic Home',
    image: '/src/assets/images/project_copper_pipes_1790386231229.jpg',
    scope: 'Replaced deteriorated 1950s galvanized plumbing with expandable PEX-A barrier pipe and modern quarter-turn brass shutoff valves.',
    completionTime: '3 Days',
    outcome: 'Eliminated discolored rust water, restored strong shower pressure, and lowered insurance risk premiums.',
    specs: ['Uponor ProPEX System', 'Quarter-Turn Ball Stops', 'Hammer Arrestor Safeguards']
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    author: 'Marcus Vance',
    location: 'North Valley Resident',
    serviceType: 'Emergency Main Pipe Repair',
    quote: 'When our main supply line ruptured at 11 PM on a Sunday, Sah Dams had a master plumber at our door in 32 minutes. He isolated the break, replaced the split section with copper, and left the utility room bone dry. Absolute lifesavers.',
    rating: 5,
    date: 'February 2026',
    verified: true
  },
  {
    id: 'test-2',
    author: 'Elena Rostova',
    location: 'Westside District Homeowner',
    serviceType: 'Bathroom Fixtures & Tankless Install',
    quote: 'We hired Sah Dams for our full master bath remodel and tankless heater conversion. Their piping routing, clean soldering, and fixture alignment were absolute perfection. The flat-rate quote they gave was the exact number on the final invoice.',
    rating: 5,
    date: 'January 2026',
    verified: true
  },
  {
    id: 'test-3',
    author: 'David Chen',
    location: 'Facility Manager, Metro Plaza',
    serviceType: 'Commercial Drain & Backflow Recertification',
    quote: 'Sah Dams manages all commercial plumbing for our multi-tenant facility. Their scheduled hydro-jetting and annual backflow testing are executed seamlessly without disrupting our tenants. Responsive, professional, and trustworthy.',
    rating: 5,
    date: 'March 2026',
    verified: true
  }
];

export const SERVICE_AREAS: ServiceAreaItem[] = [
  {
    id: 'area-1',
    name: 'Metroville Central',
    avgResponse: '20 - 35 mins',
    zipCodes: ['97201', '97204', '97205', '97209'],
    coverageType: 'Full Emergency & Residential / Commercial'
  },
  {
    id: 'area-2',
    name: 'North Valley Heights',
    avgResponse: '25 - 40 mins',
    zipCodes: ['97210', '97211', '97212', '97217'],
    coverageType: 'Full Residential & Multi-Family'
  },
  {
    id: 'area-3',
    name: 'Westside Marina & District',
    avgResponse: '30 - 45 mins',
    zipCodes: ['97221', '97225', '97229', '97239'],
    coverageType: 'Luxury Renovations & Emergency Repair'
  },
  {
    id: 'area-4',
    name: 'Riverbank Ridge',
    avgResponse: '25 - 40 mins',
    zipCodes: ['97202', '97206', '97214', '97215'],
    coverageType: 'Historic Home Repiping & Sump Pumps'
  },
  {
    id: 'area-5',
    name: 'Southpark Crest',
    avgResponse: '30 - 45 mins',
    zipCodes: ['97219', '97223', '97224', '97232'],
    coverageType: 'Residential & Light Commercial'
  },
  {
    id: 'area-6',
    name: 'Pinecrest Hills & Eastgate',
    avgResponse: '35 - 50 mins',
    zipCodes: ['97230', '97233', '97236', '97266'],
    coverageType: 'Tankless Upgrades & Water Treatment'
  }
];

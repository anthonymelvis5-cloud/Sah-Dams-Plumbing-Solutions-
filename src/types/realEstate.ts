export type PropertyStatus = 'Buy' | 'Rent';

export type PropertyType = 
  | 'Villa'
  | 'Penthouse'
  | 'Townhouse'
  | 'Modern Estate'
  | 'Waterfront Villa'
  | 'Architectural Modern';

export interface Property {
  id: string;
  name: string;
  location: string;
  city: 'London' | 'Miami' | 'New York' | 'Dubai' | 'Monaco' | 'Los Angeles';
  country: string;
  price: number;
  formattedPrice: string;
  status: PropertyStatus;
  type: PropertyType;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  yearBuilt: number;
  heroImage: string;
  gallery: string[];
  tagline: string;
  description: string;
  features: string[];
  amenities: string[];
  neighborhoodInfo: string;
  architecturalStyle: string;
  isSignature?: boolean;
  signatureLabel?: 'FEATURED RESIDENCE' | 'PRIVATE ESTATE' | 'SIGNATURE PROPERTY';
}

export interface Destination {
  id: string;
  name: string;
  country: string;
  propertyCount: number;
  image: string;
  description: string;
  averagePrice: string;
}

export interface JournalArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string[];
  author: {
    name: string;
    role: string;
  };
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  location: string;
  propertyAcquired: string;
  year: string;
}

export interface FilterState {
  location: string;
  propertyType: string;
  status: 'All' | 'Buy' | 'Rent';
  priceRange: string;
  bedrooms: string;
}

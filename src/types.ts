export interface ServiceItem {
  id: string;
  title: string;
  category: 'emergency' | 'residential' | 'commercial' | 'water-systems';
  description: string;
  details: string[];
  estimatedTime: string;
  warranty: string;
  iconName: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'all' | 'bathroom' | 'piping' | 'water-heaters';
  location: string;
  image: string;
  scope: string;
  completionTime: string;
  outcome: string;
  specs: string[];
}

export interface TestimonialItem {
  id: string;
  author: string;
  location: string;
  serviceType: string;
  quote: string;
  rating: number;
  date: string;
  verified: boolean;
}

export interface ServiceAreaItem {
  id: string;
  name: string;
  avgResponse: string;
  zipCodes: string[];
  coverageType: string;
}

export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  serviceNeeded: string;
  propertyType: string;
  urgency: string;
  message: string;
}

import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PropertySearch } from './components/PropertySearch';
import { FeaturedProperties } from './components/FeaturedProperties';
import { PropertyDetailModal } from './components/PropertyDetailModal';
import { SignatureCollection } from './components/SignatureCollection';
import { AboutSection } from './components/AboutSection';
import { WhyAurevia } from './components/WhyAurevia';
import { ServicesSection } from './components/ServicesSection';
import { DestinationsSection } from './components/DestinationsSection';
import { ClientExperience } from './components/ClientExperience';
import { TestimonialsSection } from './components/TestimonialsSection';
import { JournalSection } from './components/JournalSection';
import { JournalArticleModal } from './components/JournalArticleModal';
import { CtaSection } from './components/CtaSection';
import { ContactSection } from './components/ContactSection';
import { ConsultationModal } from './components/ConsultationModal';
import { Footer } from './components/Footer';
import { PROPERTIES } from './data/realEstateData';
import { Property, FilterState, JournalArticle } from './types/realEstate';

export default function App() {
  // State for interactive modals
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [consultationTopic, setConsultationTopic] = useState('Private Client Advisory');
  const [consultationTargetProperty, setConsultationTargetProperty] = useState<Property | null>(null);

  // Filter state for property search
  const [filter, setFilter] = useState<FilterState>({
    location: '',
    propertyType: '',
    status: 'All',
    priceRange: '',
    bedrooms: '',
  });

  // Filter computation
  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((item) => {
      // 1. Location filter
      if (filter.location && !item.location.toLowerCase().includes(filter.location.toLowerCase()) && item.city !== filter.location) {
        return false;
      }
      // 2. Type filter
      if (filter.propertyType && item.type !== filter.propertyType) {
        return false;
      }
      // 3. Status filter
      if (filter.status !== 'All' && item.status !== filter.status) {
        return false;
      }
      // 4. Price range filter
      if (filter.priceRange) {
        if (filter.priceRange === 'Under $5,000,000' && item.price >= 5000000) return false;
        if (filter.priceRange === '$5,000,000 - $8,000,000' && (item.price < 5000000 || item.price > 8000000)) return false;
        if (filter.priceRange === '$8,000,000+' && item.price <= 8000000) return false;
      }
      // 5. Bedrooms filter
      if (filter.bedrooms) {
        const requiredBeds = parseInt(filter.bedrooms, 10);
        if (!isNaN(requiredBeds) && item.bedrooms < requiredBeds) return false;
      }
      return true;
    });
  }, [filter]);

  const handleResetFilter = () => {
    setFilter({
      location: '',
      propertyType: '',
      status: 'All',
      priceRange: '',
      bedrooms: '',
    });
  };

  const handleOpenConsultation = (topic = 'Private Client Advisory', property: Property | null = null) => {
    setConsultationTopic(topic);
    setConsultationTargetProperty(property);
    setConsultationModalOpen(true);
  };

  const handleSelectDestination = (destName: string) => {
    setFilter((prev) => ({
      ...prev,
      location: destName,
    }));
    const el = document.getElementById('properties');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFilterStatus = (status: 'Buy' | 'Rent') => {
    setFilter((prev) => ({
      ...prev,
      status: status,
    }));
    const el = document.getElementById('properties');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreProperties = () => {
    const el = document.getElementById('properties');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0c0e] text-[#f4efe8] flex flex-col font-sans selection:bg-[#c5a880] selection:text-[#0b0c0e]">
      
      {/* 1. Sticky Navigation */}
      <Navbar
        onOpenConsultation={(topic) => handleOpenConsultation(topic)}
        onFilterStatus={handleFilterStatus}
      />

      <main className="flex-1">
        {/* 2. Full-Screen Cinematic Hero Section */}
        <Hero
          onExploreProperties={handleExploreProperties}
          onOpenConsultation={() => handleOpenConsultation('Private Client Consultation')}
        />

        {/* 3. Integrated Sophisticated Property Search */}
        <PropertySearch
          filter={filter}
          onFilterChange={setFilter}
          onResetFilter={handleResetFilter}
          resultsCount={filteredProperties.length}
        />

        {/* 4. Featured Properties Section (6 luxury properties) */}
        <FeaturedProperties
          properties={filteredProperties}
          onSelectProperty={(property) => setSelectedProperty(property)}
          onOpenConsultation={() => handleOpenConsultation('Off-Market Inventory Inquiry')}
        />

        {/* 5. The Aurevia Signature Collection */}
        <SignatureCollection
          properties={PROPERTIES}
          onSelectProperty={(property) => setSelectedProperty(property)}
          onOpenConsultation={(topic) => handleOpenConsultation(topic)}
        />

        {/* 6. About Section */}
        <AboutSection
          onOpenConsultation={() => handleOpenConsultation('About Aurevia Advisory')}
        />

        {/* 7. Why Aurevia */}
        <WhyAurevia />

        {/* 8. Bespoke Services Section */}
        <ServicesSection
          onOpenConsultation={(serviceTitle) => handleOpenConsultation(`Engagement: ${serviceTitle}`)}
        />

        {/* 9. Explore Destinations / Neighborhoods */}
        <DestinationsSection
          onSelectDestination={handleSelectDestination}
        />

        {/* 10. Client Experience (Timeline Process) */}
        <ClientExperience
          onStartProcess={() => handleOpenConsultation('Acquisition Advisory Onboarding')}
        />

        {/* 11. Testimonials */}
        <TestimonialsSection />

        {/* 12. The Aurevia Journal (Editorial) */}
        <JournalSection
          onSelectArticle={(article) => setSelectedArticle(article)}
        />

        {/* 13. Cinematic Call to Action */}
        <CtaSection
          onSpeakWithAdvisor={() => handleOpenConsultation('Direct Partner Advisory')}
        />

        {/* 14. Contact Section */}
        <ContactSection
          initialInterest="Buying"
          initialLocation={filter.location || 'London'}
        />
      </main>

      {/* 15. Footer */}
      <Footer
        onOpenConsultation={(topic) => handleOpenConsultation(topic)}
        onFilterStatus={handleFilterStatus}
      />

      {/* Property Detail Experience Modal */}
      <PropertyDetailModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        onRequestViewing={(prop) => {
          setSelectedProperty(null);
          handleOpenConsultation(`Private Viewing for ${prop.name}`, prop);
        }}
        onContactAgent={(prop) => {
          setSelectedProperty(null);
          handleOpenConsultation(`Agent Inquiry for ${prop.name}`, prop);
        }}
      />

      {/* Journal Article Reader Modal */}
      <JournalArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      {/* Private Consultation & Viewing Scheduler Modal */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        initialTopic={consultationTopic}
        selectedProperty={consultationTargetProperty}
      />

    </div>
  );
}

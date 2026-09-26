import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CostEstimator } from './components/CostEstimator';
import { ProjectsGallery } from './components/ProjectsGallery';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ServiceAreas } from './components/ServiceAreas';
import { CtaSection } from './components/CtaSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { Phone } from 'lucide-react';
import { COMPANY_INFO } from './data/plumbingData';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [prefilledEstimate, setPrefilledEstimate] = useState<string | undefined>(undefined);

  const handleOpenQuote = (service?: string) => {
    setSelectedService(service);
    setPrefilledEstimate(undefined);
    setQuoteModalOpen(true);
  };

  const handleApplyEstimate = (service: string, estimateRange: string) => {
    setSelectedService(service);
    setPrefilledEstimate(estimateRange);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      
      {/* 1. Navigation */}
      <Navbar onOpenQuote={handleOpenQuote} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onOpenQuote={() => handleOpenQuote()} />

        {/* 3. Services Section */}
        <ServicesSection onSelectService={handleOpenQuote} />

        {/* Interactive Feature: Instant Cost & Estimate Tool */}
        <CostEstimator onApplyEstimate={handleApplyEstimate} />

        {/* 4. About Section */}
        <AboutSection onOpenQuote={() => handleOpenQuote()} />

        {/* 5. Why Choose Us Section */}
        <WhyChooseUs onOpenQuote={() => handleOpenQuote()} />

        {/* 6. Projects Section */}
        <ProjectsGallery onOpenQuote={handleOpenQuote} />

        {/* 7. Testimonials Section */}
        <TestimonialsSection />

        {/* 8. Service Areas Section */}
        <ServiceAreas onOpenQuote={handleOpenQuote} />

        {/* 9. Call-To-Action Section */}
        <CtaSection onOpenQuote={() => handleOpenQuote()} />

        {/* 10. Contact Section */}
        <ContactSection initialService={selectedService} />
      </main>

      {/* Footer */}
      <Footer onOpenQuote={handleOpenQuote} />

      {/* Free Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        preselectedService={selectedService}
        prefilledEstimate={prefilledEstimate}
      />

      {/* Mobile Floating Quick Action (Compliant with 15% mobile sticky cap) */}
      <div className="fixed bottom-3 right-3 sm:hidden z-40">
        <a
          href={`tel:${COMPANY_INFO.phoneClean}`}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-4 rounded-full shadow-lg shadow-blue-600/40 text-xs active:scale-95 transition-transform"
          aria-label="Call Dispatch"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call 24/7</span>
        </a>
      </div>

    </div>
  );
}

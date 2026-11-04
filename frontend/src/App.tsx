import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Breadcrumbs } from './components/Breadcrumbs';
import { BookingModal } from './components/BookingModal';
import { LeadModal } from './components/LeadModal';
import { StripeModal } from './components/StripeModal';
import { CookieConsent } from './components/CookieConsent';
import { AiTaxAssistant } from './components/AiTaxAssistant';
import { trackPageView } from './services/analytics';
import { ResourceDownloadItem } from './services/api';

// Pages
import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { AccountingBookkeeping } from './pages/services/AccountingBookkeeping';
import { Taxation } from './pages/services/Taxation';
import { ConsultingTechnology } from './pages/services/ConsultingTechnology';
import { CloudAccounting } from './pages/services/CloudAccounting';
import { Partners } from './pages/Partners';
import { AboutXero } from './pages/partners/AboutXero';
import { QuickBooksOnline } from './pages/partners/QuickBooksOnline';
import { ResourcesHub } from './pages/ResourcesHub';
import { BusinessGuidesPage } from './pages/resources/BusinessGuidesPage';
import { CalculatorsPage } from './pages/resources/CalculatorsPage';
import { SevenStepsPage } from './pages/resources/SevenStepsPage';
import { DownloadsPage } from './pages/resources/DownloadsPage';
import { BlogList } from './pages/resources/BlogList';
import { BlogPost } from './pages/resources/BlogPost';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { Contact } from './pages/Contact';
import { BookConsultationPage } from './pages/BookConsultationPage';
import { ClientArea } from './pages/ClientArea';
import { Onboarding } from './pages/Onboarding';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Terms } from './pages/Terms';
import { NotFound } from './pages/NotFound';
import { AdminDashboard } from './pages/admin/AdminDashboard';

// Additional Services & Case Studies
import { Payroll } from './pages/services/Payroll';
import { CaseStudiesPage } from './pages/resources/CaseStudiesPage';
import { ReferralProgramPage } from './pages/partners/ReferralProgramPage';
import { PricingPage } from './pages/PricingPage';

export const App: React.FC = () => {
  const location = useLocation();

  // Modals state
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingContext, setBookingContext] = useState('General');
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const [activeResource, setActiveResource] = useState<ResourceDownloadItem | null>(null);
  const [stripeModalOpen, setStripeModalOpen] = useState(false);

  // Track page views on route transition
  useEffect(() => {
    window.scrollTo(0, 0);
    trackPageView(location.pathname);
  }, [location.pathname]);

  const openBookingModal = (context: string = 'General Consultation') => {
    setBookingContext(context);
    setBookingModalOpen(true);
  };

  const openLeadModal = (resource: ResourceDownloadItem) => {
    setActiveResource(resource);
    setLeadModalOpen(true);
  };

  const openStripeModal = () => {
    setStripeModalOpen(true);
  };

  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {!isAdminRoute && <Header onBookConsultation={openBookingModal} />}
      {!isAdminRoute && <Breadcrumbs />}

      <main id="main-content" style={{ flex: 1 }}>
        <Routes>
          {/* Core Public Pages */}
          <Route 
            path="/" 
            element={
              <Home 
                onBookConsultation={openBookingModal}
                onOpenLeadModal={openLeadModal}
                onOpenStripeModal={openStripeModal}
              />
            } 
          />
          <Route path="/about-us" element={<AboutUs onBookConsultation={openBookingModal} />} />
          <Route path="/about" element={<Navigate to="/about-us" replace />} />
          <Route path="/pricing" element={<PricingPage onBookConsultation={openBookingModal} />} />
          <Route path="/quote-builder" element={<PricingPage onBookConsultation={openBookingModal} />} />

          {/* Service Landing Pages */}
          <Route path="/services" element={<Navigate to="/services/accounting-bookkeeping" replace />} />
          <Route path="/services/accounting-bookkeeping" element={<AccountingBookkeeping onBookConsultation={openBookingModal} />} />
          <Route path="/services/taxation" element={<Taxation onBookConsultation={openBookingModal} />} />
          <Route path="/services/consulting-technology" element={<ConsultingTechnology onBookConsultation={openBookingModal} />} />
          <Route path="/services/cloud-accounting" element={<CloudAccounting onBookConsultation={openBookingModal} />} />
          <Route path="/services/payroll" element={<Payroll onBookConsultation={openBookingModal} />} />
          <Route path="/payroll" element={<Payroll onBookConsultation={openBookingModal} />} />

          {/* Canonical root URLs matching live cpapnl.com structure */}
          <Route path="/accounting-bookkeeping" element={<Navigate to="/services/accounting-bookkeeping" replace />} />
          <Route path="/taxation" element={<Navigate to="/services/taxation" replace />} />
          <Route path="/consulting-technology" element={<Navigate to="/services/consulting-technology" replace />} />

          {/* Partners & Cloud Technology Dropdown Pages */}
          <Route path="/partners" element={<Partners onBookConsultation={openBookingModal} />} />
          <Route path="/partners/referral-program" element={<ReferralProgramPage onBookConsultation={openBookingModal} />} />
          <Route path="/referrals" element={<ReferralProgramPage onBookConsultation={openBookingModal} />} />
          <Route path="/cloud-accounting" element={<CloudAccounting onBookConsultation={openBookingModal} />} />
          <Route path="/xero" element={<AboutXero />} />
          <Route path="/xero-resources" element={<Navigate to="/xero" replace />} />
          <Route path="/quickbooks-online" element={<QuickBooksOnline />} />
          <Route path="/quickbooks-resources" element={<Navigate to="/quickbooks-online" replace />} />

          {/* Resource Center & Sub-tools (Matching live cpapnl.com URLs exactly) */}
          <Route path="/blog" element={<BlogList />} />
          <Route path="/business-guides" element={<BusinessGuidesPage />} />
          <Route path="/calculators" element={<CalculatorsPage onBookConsultation={openBookingModal} />} />
          <Route path="/business-and-accounting-glossary" element={<Navigate to="/resources" replace />} />
          <Route path="/resources" element={<ResourcesHub onOpenLeadModal={openLeadModal} />} />
          <Route path="/resources/business-plan-diagnostic" element={<Navigate to="/resources" replace />} />
          <Route path="/resources/calculators" element={<CalculatorsPage onBookConsultation={openBookingModal} />} />
          <Route path="/resources/tax-deadlines" element={<Navigate to="/resources" replace />} />
          <Route path="/tax-deadlines" element={<Navigate to="/resources" replace />} />
          <Route path="/resources/case-studies" element={<CaseStudiesPage onBookConsultation={openBookingModal} />} />
          <Route path="/case-studies" element={<CaseStudiesPage onBookConsultation={openBookingModal} />} />
          <Route path="/resources/7-steps-to-growing-your-business" element={<SevenStepsPage onBookConsultation={openBookingModal} onOpenLeadModal={openLeadModal} />} />
          <Route path="/resources/glossary" element={<Navigate to="/resources" replace />} />
          <Route path="/resources/downloads" element={<DownloadsPage onOpenLeadModal={openLeadModal} />} />
          <Route path="/resources/blog" element={<BlogList />} />
          <Route path="/resources/blog/:slug" element={<BlogPost onBookConsultation={openBookingModal} />} />

          {/* Social Proof & Conversion */}
          <Route path="/testimonials" element={<TestimonialsPage onBookConsultation={openBookingModal} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-consultation" element={<Navigate to="/contact" replace />} />
          <Route path="/client-area" element={<ClientArea onBookConsultation={openBookingModal} />} />
          <Route path="/onboarding" element={<Onboarding onBookConsultation={openBookingModal} />} />

          {/* Legal Pages */}
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />

          {/* Admin CMS */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/login" element={<AdminDashboard />} />

          {/* Legacy 301 URL Migration Aliases */}
          <Route path="/contact-us" element={<Navigate to="/contact" replace />} />

          {/* 404 Catch-All */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {!isAdminRoute && <Footer />}

      {/* Global Modals */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        serviceContext={bookingContext}
      />

      <LeadModal
        isOpen={leadModalOpen}
        onClose={() => setLeadModalOpen(false)}
        resource={activeResource}
      />

      <StripeModal
        isOpen={stripeModalOpen}
        onClose={() => setStripeModalOpen(false)}
      />

      <CookieConsent />

      {!isAdminRoute && <AiTaxAssistant onBookConsultation={openBookingModal} />}
    </div>
  );
};

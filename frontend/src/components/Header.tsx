import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, ChevronDown, Menu, X, ExternalLink, Calendar, ShieldCheck, UserCheck, ArrowRight } from 'lucide-react';
import { Logo } from '../assets/brand/Logo';
import { trackEvent } from '../services/analytics';

interface HeaderProps {
  onBookConsultation: (context?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onBookConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [partnersOpen, setPartnersOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [clientAreaOpen, setClientAreaOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
    setPartnersOpen(false);
    setResourcesOpen(false);
    setClientAreaOpen(false);
  }, [location.pathname]);

  const handlePhoneClick = (phone: string) => {
    trackEvent('click_to_call', { phone_number: phone });
  };

  const handlePortalClick = (portalName: string) => {
    trackEvent('portal_login_click', { portal: portalName });
  };

  const isLinkActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 900, width: '100%', boxShadow: isScrolled ? '0 4px 16px rgba(15, 23, 42, 0.08)' : 'none', transition: 'box-shadow 0.2s ease' }}>
      {/* 1. Authentic Top Utility Bar (Classic Royal Blue as seen in original cpapnl.com) */}
      <div 
        style={{ 
          backgroundColor: '#163B6B', 
          color: '#FFFFFF', 
          fontSize: '12.5px', 
          padding: '0.45rem 0',
          borderBottom: '1px solid rgba(255, 255, 255, 0.15)'
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.6rem' }}>
          {/* Left: Contact direct lines */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Phone size={13} color="#FCD34D" />
              <span style={{ color: 'rgba(255,255,255,0.85)' }}>Mark Puri:</span>
              <a 
                href="tel:416-801-6746" 
                onClick={() => handlePhoneClick('416-801-6746')} 
                style={{ color: '#FFFFFF', fontWeight: 700 }}
              >
                +1 416 801 6746
              </a>
            </div>
            <div className="hide-on-mobile" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ color: 'rgba(255,255,255,0.85)' }}>Helen Loggia:</span>
              <a 
                href="tel:416-805-1427" 
                onClick={() => handlePhoneClick('416-805-1427')} 
                style={{ color: '#FFFFFF', fontWeight: 700 }}
              >
                +1 416 805 1427
              </a>
            </div>
            <div className="hide-on-tablet" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Mail size={13} color="#FCD34D" />
              <a 
                href="mailto:support@cpapnl.com" 
                onClick={() => trackEvent('click_to_email', { email: 'support@cpapnl.com' })} 
                style={{ color: 'rgba(255,255,255,0.9)' }}
              >
                support@cpapnl.com
              </a>
            </div>
          </div>

          {/* Right: Phone highlight & Client Area dropdown (Exact match to screenshot) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <span className="hide-on-mobile" style={{ color: '#FCD34D', fontWeight: 700, fontSize: '11.5px', letterSpacing: '0.04em' }}>
              CPA ONTARIO &bull; CANADA
            </span>

            {/* Client Area Dropdown */}
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setClientAreaOpen(!clientAreaOpen)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: clientAreaOpen ? '#FCD34D' : '#FFFFFF',
                  fontWeight: 700,
                  fontSize: '12.5px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  cursor: 'pointer',
                  padding: '0.2rem 0.6rem',
                  borderRadius: 'var(--radius-xs)',
                  backgroundColor: clientAreaOpen ? 'rgba(255,255,255,0.15)' : 'transparent',
                  transition: 'all 0.15s ease'
                }}
                aria-expanded={clientAreaOpen}
                aria-haspopup="true"
              >
                <UserCheck size={13} color="#FCD34D" />
                <span>Client Area</span>
                <ChevronDown size={13} style={{ transform: clientAreaOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }} />
              </button>

              {/* Clean White Dropdown for Client Portals */}
              {clientAreaOpen && (
                <div
                  style={{
                    position: 'absolute',
                    right: 0,
                    top: '100%',
                    marginTop: '0.4rem',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-sm)',
                    boxShadow: 'var(--shadow-xl)',
                    width: '240px',
                    padding: '0.5rem',
                    zIndex: 1000
                  }}
                >
                  <div style={{ padding: '0.4rem 0.75rem', fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, letterSpacing: '0.05em' }}>
                    External Accounting Portals
                  </div>
                  <a
                    href="https://login.xero.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handlePortalClick('xero')}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.65rem 0.75rem',
                      color: 'var(--navy-900)',
                      fontSize: '13.5px',
                      fontWeight: 600,
                      borderRadius: 'var(--radius-xs)',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--surface-subtle)')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                  >
                    <span>Xero Client Login</span>
                    <ExternalLink size={13} color="#0D9488" />
                  </a>
                  <a
                    href="https://accounts.intuit.com/app/sign-in?app_group=QBO"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handlePortalClick('quickbooks')}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.65rem 0.75rem',
                      color: 'var(--navy-900)',
                      fontSize: '13.5px',
                      fontWeight: 600,
                      borderRadius: 'var(--radius-xs)',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--surface-subtle)')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                  >
                    <span>QuickBooks Online Login</span>
                    <ExternalLink size={13} color="#0D9488" />
                  </a>
                  <div style={{ height: '1px', backgroundColor: 'var(--border-light)', margin: '0.4rem 0' }} />
                  <Link
                    to="/client-area"
                    style={{
                      display: 'block',
                      padding: '0.5rem 0.75rem',
                      color: 'var(--gold-600)',
                      fontSize: '12px',
                      fontWeight: 700,
                      textAlign: 'center'
                    }}
                  >
                    Portal Access Guide &rarr;
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar (Crisp Pure White background with authentic PnL branding) */}
      <nav
        style={{
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid var(--border-light)',
          padding: isScrolled ? '0.65rem 0' : '0.9rem 0',
          transition: 'padding 0.2s ease',
        }}
        aria-label="Main Navigation"
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo on Left */}
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <Logo variant="light" height={isScrolled ? 54 : 64} />
          </Link>

          {/* Desktop Navigation Links in clean uppercase, with gold active state */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(1rem, 1.8vw, 2.2rem)', whiteSpace: 'nowrap' }} className="nav-desktop">
            <Link 
              to="/" 
              style={{ 
                color: isLinkActive('/') && location.pathname === '/' ? '#D97706' : '#1E293B', 
                fontWeight: 700, 
                fontSize: '13.5px',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                display: 'inline-flex',
                alignItems: 'center',
                lineHeight: 1,
                padding: '0.5rem 0',
                transition: 'color 0.15s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#D97706')}
              onMouseLeave={(e) => (e.currentTarget.style.color = (isLinkActive('/') && location.pathname === '/') ? '#D97706' : '#1E293B')}
            >
              Home
            </Link>

            <Link 
              to="/about-us" 
              style={{ 
                color: isLinkActive('/about-us') ? '#D97706' : '#1E293B', 
                fontWeight: 700, 
                fontSize: '13.5px',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                display: 'inline-flex',
                alignItems: 'center',
                lineHeight: 1,
                padding: '0.5rem 0',
                transition: 'color 0.15s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#D97706')}
              onMouseLeave={(e) => (e.currentTarget.style.color = isLinkActive('/about-us') ? '#D97706' : '#1E293B')}
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            {/* Services Dropdown - Exact match to screenshot */}
            <div
              style={{ position: 'relative', display: 'inline-block' }}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                id="services-nav-btn"
                onClick={() => setServicesOpen((prev) => !prev)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: (isLinkActive('/services') || servicesOpen) ? '#FCAC14' : '#1E293B',
                  fontWeight: 700,
                  fontSize: '13.5px',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  cursor: 'pointer',
                  padding: '0.5rem 0',
                  whiteSpace: 'nowrap',
                  lineHeight: 1,
                  transition: 'color 0.15s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#FCAC14')}
                onMouseLeave={(e) => (e.currentTarget.style.color = (isLinkActive('/services') || servicesOpen) ? '#FCAC14' : '#1E293B')}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                <span>Services</span>
                <ChevronDown size={14} style={{ transform: servicesOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }} />
              </button>

              {servicesOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    paddingTop: '7px',
                    zIndex: 9999
                  }}
                >
                  <div
                    style={{
                      position: 'relative',
                      backgroundColor: '#FCAC14',
                      borderRadius: '3px',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                      minWidth: '250px',
                      padding: '0.35rem 0',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    {/* Upward Triangle Arrow pointing to SERVICES */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '-7px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 0,
                        height: 0,
                        borderLeft: '7px solid transparent',
                        borderRight: '7px solid transparent',
                        borderBottom: '7px solid #FCAC14'
                      }}
                    />

                    <Link
                      to="/services/accounting-bookkeeping"
                      onClick={() => setServicesOpen(false)}
                      style={{
                        padding: '0.85rem 1.25rem',
                        color: '#FFFFFF',
                        fontSize: '13px',
                        fontWeight: 700,
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        textDecoration: 'none',
                        display: 'block',
                        transition: 'background-color 0.15s ease',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.18)'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#E09910')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      ACCOUNTING/BOOKKEEPING
                    </Link>

                    <Link
                      to="/services/taxation"
                      onClick={() => setServicesOpen(false)}
                      style={{
                        padding: '0.85rem 1.25rem',
                        color: '#FFFFFF',
                        fontSize: '13px',
                        fontWeight: 700,
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        textDecoration: 'none',
                        display: 'block',
                        transition: 'background-color 0.15s ease',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.18)'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#E09910')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      TAXATION
                    </Link>

                    <Link
                      to="/services/consulting-technology"
                      onClick={() => setServicesOpen(false)}
                      style={{
                        padding: '0.85rem 1.25rem',
                        color: '#FFFFFF',
                        fontSize: '13px',
                        fontWeight: 700,
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        textDecoration: 'none',
                        display: 'block',
                        transition: 'background-color 0.15s ease',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.18)'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#E09910')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      CONSULTING/TECHNOLOGY
                    </Link>

                    <Link
                      to="/services/payroll"
                      onClick={() => setServicesOpen(false)}
                      style={{
                        padding: '0.85rem 1.25rem',
                        color: '#FFFFFF',
                        fontSize: '13px',
                        fontWeight: 700,
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        textDecoration: 'none',
                        display: 'block',
                        transition: 'background-color 0.15s ease'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#E09910')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      PAYROLL SERVICES
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Partners Dropdown - Exact match to live cpapnl screenshot */}
            <div
              style={{ position: 'relative', display: 'inline-block' }}
              onMouseEnter={() => setPartnersOpen(true)}
              onMouseLeave={() => setPartnersOpen(false)}
            >
              <button
                id="partners-nav-btn"
                onClick={() => setPartnersOpen((prev) => !prev)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: (isLinkActive('/partners') || isLinkActive('/cloud-accounting') || isLinkActive('/xero') || isLinkActive('/quickbooks') || partnersOpen) ? '#FCAC14' : '#1E293B',
                  fontWeight: 700,
                  fontSize: '13.5px',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  cursor: 'pointer',
                  padding: '0.5rem 0',
                  whiteSpace: 'nowrap',
                  lineHeight: 1,
                  transition: 'color 0.15s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#FCAC14')}
                onMouseLeave={(e) => (e.currentTarget.style.color = (isLinkActive('/partners') || isLinkActive('/cloud-accounting') || isLinkActive('/xero') || isLinkActive('/quickbooks') || partnersOpen) ? '#FCAC14' : '#1E293B')}
                aria-expanded={partnersOpen}
                aria-haspopup="true"
              >
                <span>Partners</span>
                <ChevronDown size={14} style={{ transform: partnersOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }} />
              </button>

              {partnersOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    paddingTop: '7px',
                    zIndex: 9999
                  }}
                >
                  <div
                    style={{
                      position: 'relative',
                      backgroundColor: '#FCAC14',
                      borderRadius: '3px',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                      minWidth: '240px',
                      padding: '0.35rem 0',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    {/* Upward Triangle Arrow pointing to PARTNERS */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '-7px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 0,
                        height: 0,
                        borderLeft: '7px solid transparent',
                        borderRight: '7px solid transparent',
                        borderBottom: '7px solid #FCAC14'
                      }}
                    />

                    <Link
                      to="/cloud-accounting"
                      onClick={() => setPartnersOpen(false)}
                      style={{
                        padding: '0.85rem 1.25rem',
                        color: '#FFFFFF',
                        fontSize: '13px',
                        fontWeight: 700,
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        textDecoration: 'none',
                        display: 'block',
                        transition: 'background-color 0.15s ease',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.18)'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#E09910')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      CLOUD ACCOUNTING
                    </Link>

                    <Link
                      to="/xero"
                      onClick={() => setPartnersOpen(false)}
                      style={{
                        padding: '0.85rem 1.25rem',
                        color: '#FFFFFF',
                        fontSize: '13px',
                        fontWeight: 700,
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        textDecoration: 'none',
                        display: 'block',
                        transition: 'background-color 0.15s ease',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.18)'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#E09910')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      ABOUT XERO
                    </Link>

                    <Link
                      to="/quickbooks-online"
                      onClick={() => setPartnersOpen(false)}
                      style={{
                        padding: '0.85rem 1.25rem',
                        color: '#FFFFFF',
                        fontSize: '13px',
                        fontWeight: 700,
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        textDecoration: 'none',
                        display: 'block',
                        transition: 'background-color 0.15s ease',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.18)'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#E09910')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      QUICKBOOKS ONLINE
                    </Link>

                    <Link
                      to="/partners/referral-program"
                      onClick={() => setPartnersOpen(false)}
                      style={{
                        padding: '0.85rem 1.25rem',
                        color: '#FFFFFF',
                        fontSize: '13px',
                        fontWeight: 700,
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        textDecoration: 'none',
                        display: 'block',
                        transition: 'background-color 0.15s ease'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#E09910')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      REFERRAL PARTNERS
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Resources Dropdown - Exact match to live cpapnl screenshot */}
            <div
              style={{ position: 'relative', display: 'inline-block' }}
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
            >
              <button
                id="resources-nav-btn"
                onClick={() => setResourcesOpen((prev) => !prev)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: (isLinkActive('/resources') || isLinkActive('/blog') || isLinkActive('/business-guides') || isLinkActive('/calculators') || resourcesOpen) ? '#FCAC14' : '#1E293B',
                  fontWeight: 700,
                  fontSize: '13.5px',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  cursor: 'pointer',
                  padding: '0.5rem 0',
                  whiteSpace: 'nowrap',
                  lineHeight: 1,
                  transition: 'color 0.15s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#FCAC14')}
                onMouseLeave={(e) => (e.currentTarget.style.color = (isLinkActive('/resources') || isLinkActive('/blog') || isLinkActive('/business-guides') || isLinkActive('/calculators') || resourcesOpen) ? '#FCAC14' : '#1E293B')}
                aria-expanded={resourcesOpen}
                aria-haspopup="true"
              >
                <span>Resources</span>
                <ChevronDown size={14} style={{ transform: resourcesOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }} />
              </button>

              {resourcesOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    paddingTop: '7px',
                    zIndex: 9999
                  }}
                >
                  <div
                    style={{
                      position: 'relative',
                      backgroundColor: '#FCAC14',
                      borderRadius: '3px',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                      minWidth: '290px',
                      padding: '0.35rem 0',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    {/* Upward Triangle Arrow pointing to RESOURCES */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '-7px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 0,
                        height: 0,
                        borderLeft: '7px solid transparent',
                        borderRight: '7px solid transparent',
                        borderBottom: '7px solid #FCAC14'
                      }}
                    />

                    <Link
                      to="/blog"
                      onClick={() => setResourcesOpen(false)}
                      style={{
                        padding: '0.85rem 1.25rem',
                        color: '#FFFFFF',
                        fontSize: '13px',
                        fontWeight: 700,
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        textDecoration: 'none',
                        display: 'block',
                        transition: 'background-color 0.15s ease',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.18)'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#E09910')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      BLOG
                    </Link>

                    <Link
                      to="/business-guides"
                      onClick={() => setResourcesOpen(false)}
                      style={{
                        padding: '0.85rem 1.25rem',
                        color: '#FFFFFF',
                        fontSize: '13px',
                        fontWeight: 700,
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        textDecoration: 'none',
                        display: 'block',
                        transition: 'background-color 0.15s ease',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.18)'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#E09910')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      BUSINESS GUIDES
                    </Link>

                    <Link
                      to="/resources"
                      onClick={() => setResourcesOpen(false)}
                      style={{
                        padding: '0.85rem 1.25rem',
                        color: '#FFFFFF',
                        fontSize: '13px',
                        fontWeight: 700,
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        textDecoration: 'none',
                        display: 'block',
                        transition: 'background-color 0.15s ease',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.18)'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#E09910')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      FREE CHECKLIST &amp; TEMPLATE DOWNLOADS
                    </Link>

                    <Link
                      to="/calculators"
                      onClick={() => setResourcesOpen(false)}
                      style={{
                        padding: '0.85rem 1.25rem',
                        color: '#FFFFFF',
                        fontSize: '13px',
                        fontWeight: 700,
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        textDecoration: 'none',
                        display: 'block',
                        transition: 'background-color 0.15s ease',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.18)'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#E09910')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      CALCULATORS
                    </Link>

                    <Link
                      to="/resources/7-steps-to-growing-your-business"
                      onClick={() => setResourcesOpen(false)}
                      style={{
                        padding: '0.85rem 1.25rem',
                        color: '#FFFFFF',
                        fontSize: '13px',
                        fontWeight: 700,
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        textDecoration: 'none',
                        display: 'block',
                        transition: 'background-color 0.15s ease',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.18)'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#E09910')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      7 STEPS TO GROWING YOUR BUSINESS
                    </Link>

                    <Link
                      to="/case-studies"
                      onClick={() => setResourcesOpen(false)}
                      style={{
                        padding: '0.85rem 1.25rem',
                        color: '#FFFFFF',
                        fontSize: '13px',
                        fontWeight: 700,
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        textDecoration: 'none',
                        display: 'block',
                        transition: 'background-color 0.15s ease'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#E09910')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      CLIENT CASE STUDIES
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Pricing Link */}
            <Link 
              to="/pricing" 
              style={{ 
                color: isLinkActive('/pricing') ? '#D97706' : '#1E293B', 
                fontWeight: 700, 
                fontSize: '13.5px',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                display: 'inline-flex',
                alignItems: 'center',
                lineHeight: 1,
                padding: '0.5rem 0',
                transition: 'color 0.15s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#D97706')}
              onMouseLeave={(e) => (e.currentTarget.style.color = isLinkActive('/pricing') ? '#D97706' : '#1E293B')}
            >
              Pricing
            </Link>

            {/* Contact Link - Highlighted in warm amber gold when active matching original site! */}
            <Link 
              to="/contact" 
              style={{ 
                color: isLinkActive('/contact') ? '#D97706' : '#1E293B', 
                fontWeight: 700, 
                fontSize: '13.5px',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                display: 'inline-flex',
                alignItems: 'center',
                lineHeight: 1,
                padding: '0.5rem 0',
                transition: 'color 0.15s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#D97706')}
              onMouseLeave={(e) => (e.currentTarget.style.color = isLinkActive('/contact') ? '#D97706' : '#1E293B')}
            >
              Contact
            </Link>
          </div>

          {/* Action Buttons on Right - Single Clean Client Onboarding Button */}
          <div style={{ alignItems: 'center', gap: '0.75rem', flexShrink: 0 }} className="nav-actions">
            <Link 
              to="/onboarding" 
              className="btn btn-secondary btn-sm" 
              style={{ 
                padding: '0.55rem 1.15rem',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.02em',
                whiteSpace: 'nowrap',
                borderColor: '#CBD5E1'
              }}
            >
              <span>Client Onboarding</span>
            </Link>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'flex',
              background: 'none',
              border: 'none',
              color: 'var(--navy-800)',
              cursor: 'pointer',
              padding: '0.5rem'
            }}
            className="mobile-hamburger"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Clean, Light Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderTop: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-lg)',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              maxHeight: '85vh',
              overflowY: 'auto'
            }}
          >
            <Link to="/" style={{ color: 'var(--navy-900)', fontWeight: 700, fontSize: '15px' }}>HOME</Link>
            <Link to="/about-us" style={{ color: 'var(--navy-900)', fontWeight: 700, fontSize: '15px' }}>ABOUT US</Link>
            
            <div style={{ borderLeft: '3px solid #FCAC14', paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, letterSpacing: '0.05em' }}>Services</div>
              <Link to="/services/accounting-bookkeeping" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--navy-900)', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase' }}>ACCOUNTING/BOOKKEEPING</Link>
              <Link to="/services/taxation" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--navy-900)', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase' }}>TAXATION</Link>
              <Link to="/services/consulting-technology" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--navy-900)', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase' }}>CONSULTING/TECHNOLOGY</Link>
              <Link to="/services/payroll" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--navy-900)', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase' }}>PAYROLL SERVICES</Link>
            </div>

            <div style={{ borderLeft: '3px solid #FCAC14', paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, letterSpacing: '0.05em' }}>Partners &amp; Cloud Apps</div>
              <Link to="/cloud-accounting" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--navy-900)', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase' }}>CLOUD ACCOUNTING</Link>
              <Link to="/xero" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--navy-900)', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase' }}>ABOUT XERO</Link>
              <Link to="/quickbooks-online" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--navy-900)', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase' }}>QUICKBOOKS ONLINE</Link>
              <Link to="/partners/referral-program" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--navy-900)', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase' }}>REFERRAL PARTNERS</Link>
            </div>

            <div style={{ borderLeft: '3px solid #FCAC14', paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, letterSpacing: '0.05em' }}>Resources</div>
              <Link to="/blog" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--navy-900)', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase' }}>BLOG</Link>
              <Link to="/business-guides" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--navy-900)', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase' }}>BUSINESS GUIDES</Link>
              <Link to="/case-studies" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--navy-900)', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase' }}>CLIENT CASE STUDIES</Link>
              <Link to="/resources" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--navy-900)', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase' }}>FREE CHECKLIST &amp; TEMPLATE DOWNLOADS</Link>
              <Link to="/calculators" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--navy-900)', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase' }}>CALCULATORS</Link>
              <Link to="/resources/7-steps-to-growing-your-business" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--navy-900)', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase' }}>7 STEPS TO GROWING YOUR BUSINESS</Link>
            </div>

            <Link to="/pricing" onClick={() => setMobileMenuOpen(false)} style={{ color: isLinkActive('/pricing') ? '#D97706' : 'var(--navy-900)', fontWeight: 700, fontSize: '15px' }}>PRICING</Link>
            <Link to="/contact" style={{ color: '#D97706', fontWeight: 700, fontSize: '15px' }}>CONTACT</Link>
            <Link to="/client-area" style={{ color: 'var(--navy-800)', fontWeight: 700, fontSize: '15px' }}>CLIENT AREA (XERO &amp; QBO)</Link>

            <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-light)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ padding: '0.75rem', backgroundColor: 'var(--surface-subtle)', borderRadius: 'var(--radius-sm)' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--navy-900)', marginBottom: '0.35rem' }}>Direct Partner Lines:</div>
                <div style={{ fontSize: '13px', display: 'flex', justifyContent: 'space-between' }}>
                  <span>Mark Puri:</span>
                  <a href="tel:416-801-6746" style={{ fontWeight: 700, color: 'var(--navy-800)' }}>416-801-6746</a>
                </div>
                <div style={{ fontSize: '13px', display: 'flex', justifyContent: 'space-between', marginTop: '0.25rem' }}>
                  <span>Helen Loggia:</span>
                  <a href="tel:416-805-1427" style={{ fontWeight: 700, color: 'var(--navy-800)' }}>416-805-1427</a>
                </div>
              </div>

              <Link to="/onboarding" onClick={() => setMobileMenuOpen(false)} className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                Client Onboarding &amp; File Upload
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Responsive Breakpoints CSS */}
      <style>{`
        @media (min-width: 992px) {
          .nav-desktop { display: flex !important; }
          .nav-actions { display: flex !important; }
          .mobile-hamburger { display: none !important; }
        }
        @media (max-width: 991px) {
          .nav-desktop { display: none !important; }
          .nav-actions { display: none !important; }
          .mobile-hamburger { display: flex !important; }
        }
        @media (max-width: 680px) {
          .hide-on-mobile { display: none !important; }
        }
        @media (max-width: 820px) {
          .hide-on-tablet { display: none !important; }
        }
      `}</style>
    </header>
  );
};

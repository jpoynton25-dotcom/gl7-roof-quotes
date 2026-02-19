import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import CONFIG from '../config';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const BASE_URL = 'https://gl7roofquotes.co.uk';

const villageLinks = [
  { name: 'Lechlade', slug: 'lechlade-roof-repairs' },
  { name: 'Fairford', slug: 'fairford-roof-repairs' },
  { name: 'Kempsford', slug: 'kempsford-roof-repairs' },
  { name: 'Southrop', slug: 'southrop-roof-repairs' },
  { name: 'Eastleach', slug: 'eastleach-roof-repairs' },
  { name: 'Down Ampney', slug: 'down-ampney-roof-repairs' },
  { name: 'Quenington', slug: 'quenington-roof-repairs' },
  { name: 'Hatherop', slug: 'hatherop-roof-repairs' },
  { name: 'Coln St Aldwyns', slug: 'coln-st-aldwyns-roof-repairs' },
  { name: 'Meysey Hampton', slug: 'meysey-hampton-roof-repairs' },
];

export default function Layout({ children, title, description }: LayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showSticky, setShowSticky] = useState(false);
  const location = useLocation();

  // Task 10: Delay sticky CTA until user scrolls past hero (400px)
  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pageTitle = title
    ? `${title} | ${CONFIG.platformName}`
    : `${CONFIG.platformName} — ${CONFIG.tagline}`;

  const pageDesc = description || CONFIG.tagline;

  // Canonical derived automatically from current route — strips trailing slash
  const canonicalPath = location.pathname.replace(/\/$/, '') || '/';
  const canonicalUrl = `${BASE_URL}${canonicalPath === '/' ? '' : canonicalPath}`;

  return (
    <div className="page">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content={CONFIG.platformName} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDesc} />
      </Helmet>

      <header className="header">
        <div className="container header-inner">
          <Link to="/" className="logo">
            <span>{CONFIG.primaryPostcode}</span> Roof Quotes
          </Link>

          <nav className="nav">
            <Link to="/how-it-works">How it works</Link>
            <Link to="/areas">Areas</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/roof-leak-help">Emergency Leak Help</Link>
          </nav>

          <div className="header-actions">
            <a href="tel:" className="btn btn-outline btn-sm" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginRight: '0.5rem' }} title="Call for urgent leaks">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span className="call-text">Call for urgent leaks</span>
            </a>
            <Link to="/request" className="btn btn-primary btn-sm">Get Help Now</Link>
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileOpen ? (
                  <path d="M6 6l12 12M6 18L18 6" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <nav className={`mobile-nav ${mobileOpen ? 'open' : ''}`}>
          <Link to="/how-it-works" onClick={() => setMobileOpen(false)}>How it works</Link>
          <Link to="/areas" onClick={() => setMobileOpen(false)}>Areas</Link>
          <Link to="/faq" onClick={() => setMobileOpen(false)}>FAQ</Link>
          <Link to="/roof-leak-help" onClick={() => setMobileOpen(false)}>Emergency Leak Help</Link>
          <a href="tel:" onClick={() => setMobileOpen(false)} style={{ color: 'var(--primary)', fontWeight: 600 }}>
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ marginRight: '0.5rem', verticalAlign: 'middle' }}>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            Call for urgent leaks
          </a>
          <Link to="/request" onClick={() => setMobileOpen(false)} style={{ fontWeight: 600, color: 'var(--primary)' }}>Get Help Now</Link>
        </nav>
      </header>

      <main className="main">
        {children}
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <span className="footer-brand">
                <span>{CONFIG.primaryPostcode}</span> Roof Quotes
              </span>
              <p>{CONFIG.tagline}</p>
              {CONFIG.email && (
                <p style={{ marginTop: '1rem' }}>
                  <a href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a>
                </p>
              )}
            </div>

            <div>
              <h4>Quick links</h4>
              <ul className="footer-links">
                <li><Link to="/how-it-works">How it works</Link></li>
                <li><Link to="/areas">Areas</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/request">Start request</Link></li>
              </ul>
            </div>

            <div>
              <h4>Legal</h4>
              <ul className="footer-links">
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms of Service</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4>GL7 Villages</h4>
              <ul className="footer-links">
                {villageLinks.map(v => (
                  <li key={v.slug}>
                    <Link to={`/${v.slug}`}>Roof Repairs — {v.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} {CONFIG.platformName}. All rights reserved.</p>
            <p className="footer-legal">
              GL7 Roof Quotes is a local roofing request platform serving Lechlade (GL7) and surrounding areas.
            </p>
          </div>
        </div>
      </footer>

      {location.pathname !== '/request' && location.pathname !== '/thank-you' && showSticky && (
        <div className="mobile-sticky">
          <Link to="/request" className="btn btn-primary">Request a Roofer</Link>
        </div>
      )}
    </div>
  );
}

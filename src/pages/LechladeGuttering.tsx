import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const BASE_URL = 'https://gl7roofquotes.co.uk';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Lechlade', item: `${BASE_URL}/lechlade-roof-repairs` },
    { '@type': 'ListItem', position: 3, name: 'Guttering Services', item: `${BASE_URL}/lechlade-guttering` },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Guttering Services in Lechlade',
  description: 'Gutter repairs, cleaning, replacement and fascia services for Lechlade homeowners. Local GL7 roofing professionals.',
  areaServed: { '@type': 'City', name: 'Lechlade' },
  serviceType: 'Guttering',
};

export default function LechladeGuttering() {
  return (
    <Layout title="Guttering Services in Lechlade | Gutter Repairs GL7" description="Gutter problems in Lechlade? Gutter repairs, cleaning, replacement and fascia services. Local GL7 roofing professionals. No shared leads.">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', marginBottom: '0.75rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <Link to="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Home</Link>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
              <Link to="/lechlade-roof-repairs" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Lechlade</Link>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
              <span style={{ color: 'rgba(255,255,255,0.7)' }}>Guttering</span>
            </div>
            <h1>Guttering Services in <span>Lechlade (GL7)</span></h1>
            <p className="hero-sub">Gutters overflowing? Fascia damaged? Submit your request and get matched with a local GL7 professional for gutter repairs and replacement.</p>
            <div className="hero-trust">
              <span><span className="check">✓</span> Gutter cleaning</span>
              <span><span className="check">✓</span> Fascia repairs</span>
              <span><span className="check">✓</span> No shared leads</span>
              <span><span className="check">✓</span> GL7 local focus</span>
            </div>
            <div className="hero-cta">
              <Link to="/request" className="btn btn-primary btn-lg">Request Gutter Service</Link>
              <Link to="/lechlade-roof-repairs" className="btn btn-outline btn-lg">All Lechlade Services</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content">
            <h2>Gutter Specialists in Lechlade</h2>
            <p>Effective guttering is essential for protecting your Lechlade property from water damage. Lechlade's riverside location means homes here can experience significant rainfall, and faulty gutters can lead to serious problems including damp penetration, fascia rot, and even foundation issues.</p>
            
            <h3>Common guttering problems in Lechlade</h3>
            <ul>
              <li><strong>Blocked gutters</strong> — Leaves, moss and debris build up, especially on properties near trees around the Thames valley</li>
              <li><strong>Sagging gutters</strong> — Bracket failure causes gutters to hold water rather than drain properly</li>
              <li><strong>Leaking joints</strong> — Seals between gutter sections deteriorate over time</li>
              <li><strong>Fascia board rot</strong> — Overflowing gutters cause timber fascias to decay</li>
              <li><strong>Downpipe blockages</strong> — Debris jams downpipes, causing water to back up</li>
              <li><strong>Poor gradient</strong> — Gutters installed without proper fall don't drain effectively</li>
            </ul>

            <h2>Signs Your Gutters Need Attention</h2>
            <ul>
              <li>Water overflowing from gutters during rain</li>
              <li>Visible plants or moss growing in gutters</li>
              <li>Water marks or staining on external walls</li>
              <li>Damp patches inside near eaves level</li>
              <li>Gutters pulling away from the fascia</li>
              <li>Puddles forming near the foundation after rain</li>
            </ul>

            <h2>Guttering Services Available</h2>
            <p>Local GL7 professionals can help with:</p>
            <ul>
              <li>Gutter cleaning and clearance</li>
              <li>Gutter repairs and resealing</li>
              <li>Full gutter replacement</li>
              <li>Fascia and soffit repairs</li>
              <li>Downpipe repairs and replacement</li>
              <li>Gutter guard installation</li>
            </ul>

            <div style={{ background: 'var(--bg-alt)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.5rem', margin: '2rem 0' }}>
              <h3 style={{ marginTop: 0 }}>Protect Your Property</h3>
              <p style={{ marginBottom: '1rem' }}>Don't wait for damp problems to develop. A well-maintained gutter system protects your entire home.</p>
              <Link to="/request" className="btn btn-primary">Request Gutter Service</Link>
            </div>

            <h2>Why Choose GL7 Roof Quotes</h2>
            <p>We connect Lechlade homeowners with professionals experienced in guttering work on GL7 properties. Your details go to one professional who knows the area.</p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <h2>Get Your Gutters Fixed</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Submit your guttering request and a local Lechlade-area professional will contact you.
            </p>
            <Link to="/request" className="btn btn-primary btn-lg">Request Gutter Service in Lechlade</Link>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container cta-section">
          <h2>Start Your Guttering Request</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)' }}>Your details are never posted publicly.</p>
          <div className="cta-buttons">
            <Link to="/request" className="btn btn-primary btn-lg">Get Help Now</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
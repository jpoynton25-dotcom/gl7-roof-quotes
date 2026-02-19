import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const BASE_URL = 'https://gl7roofquotes.co.uk';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Lechlade', item: `${BASE_URL}/lechlade-roof-repairs` },
    { '@type': 'ListItem', position: 3, name: 'Flat Roof Repairs', item: `${BASE_URL}/lechlade-flat-roof` },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Flat Roof Repairs in Lechlade',
  description: 'Flat roof repairs, felt replacement, EPDM and fibreglass flat roofing for Lechlade homeowners. Local GL7 roofing professionals.',
  areaServed: { '@type': 'City', name: 'Lechlade' },
  serviceType: 'Flat Roof Repair',
};

export default function LechladeFlatRoof() {
  return (
    <Layout title="Flat Roof Repairs in Lechlade | Flat Roofing GL7" description="Flat roof leaking in Lechlade? Flat roof repairs, felt replacement, EPDM and fibreglass roofing. Local GL7 professionals. No shared leads.">
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
              <span style={{ color: 'rgba(255,255,255,0.7)' }}>Flat Roof</span>
            </div>
            <h1>Flat Roof Repairs in <span>Lechlade (GL7)</span></h1>
            <p className="hero-sub">Flat roof leaking? Blistering felt? Submit your request and get matched with a local GL7 professional for flat roof repairs and replacement.</p>
            <div className="hero-trust">
              <span><span className="check">✓</span> EPDM roofing</span>
              <span><span className="check">✓</span> Fibreglass</span>
              <span><span className="check">✓</span> No shared leads</span>
              <span><span className="check">✓</span> GL7 local focus</span>
            </div>
            <div className="hero-cta">
              <Link to="/request" className="btn btn-primary btn-lg">Request Flat Roof Repair</Link>
              <Link to="/lechlade-roof-repairs" className="btn btn-outline btn-lg">All Lechlade Services</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content">
            <h2>Flat Roof Specialists in Lechlade</h2>
            <p>Many Lechlade properties have flat roofs on garages, extensions, and dormer windows. These surfaces face unique challenges — without the natural drainage of pitched roofs, flat roofs are vulnerable to standing water, UV damage, and membrane deterioration.</p>
            
            <h3>Common flat roof problems in Lechlade</h3>
            <ul>
              <li><strong>Felt blistering</strong> — Heat from the sun causes bitumen felt to blister and eventually split</li>
              <li><strong>Standing water</strong> — Poor drainage leads to ponding, accelerating membrane breakdown</li>
              <li><strong>Joint failures</strong> — Seams between felt sections can peel apart over time</li>
              <li><strong>Edge deterioration</strong> — Fascia edges and upstands are vulnerable to water ingress</li>
              <li><strong>Impact damage</strong> — Falling branches or foot traffic can puncture flat roof membranes</li>
            </ul>

            <h2>Signs Your Flat Roof Needs Attention</h2>
            <ul>
              <li>Visible blisters or bubbles on the roof surface</li>
              <li>Water ponding that doesn't drain after 48 hours</li>
              <li>Damp patches on the ceiling below</li>
              <li>Visible cracks or splits in the felt</li>
              <li>Moss or algae growth indicating moisture retention</li>
              <li>Sagging or uneven sections</li>
            </ul>

            <h2>Flat Roof Options</h2>
            <p>Local GL7 professionals can advise on:</p>
            <ul>
              <li><strong>EPDM rubber</strong> — Durable, single-ply membrane with excellent weather resistance</li>
              <li><strong>Fibreglass (GRP)</strong> — Seamless, long-lasting finish ideal for complex shapes</li>
              <li><strong>Felt overlay</strong> — Cost-effective option for sound existing substrates</li>
              <li><strong>TPO membrane</strong> — Modern, environmentally friendly option</li>
            </ul>

            <div style={{ background: 'var(--bg-alt)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.5rem', margin: '2rem 0' }}>
              <h3 style={{ marginTop: 0 }}>Modern Flat Roofing</h3>
              <p style={{ marginBottom: '1rem' }}>Today's flat roofing materials are far more durable than traditional felt. Ask about EPDM or fibreglass options for a longer-lasting solution.</p>
              <Link to="/request" className="btn btn-primary">Request Flat Roof Service</Link>
            </div>

            <h2>Why Choose GL7 Roof Quotes</h2>
            <p>We connect Lechlade homeowners with professionals experienced in flat roofing work. Your request goes to one professional who understands GL7 properties.</p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <h2>Get Your Flat Roof Fixed</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Submit your flat roof request and a local Lechlade-area professional will contact you.
            </p>
            <Link to="/request" className="btn btn-primary btn-lg">Request Flat Roof Repair in Lechlade</Link>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container cta-section">
          <h2>Start Your Flat Roof Request</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)' }}>Your details are never posted publicly.</p>
          <div className="cta-buttons">
            <Link to="/request" className="btn btn-primary btn-lg">Get Help Now</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
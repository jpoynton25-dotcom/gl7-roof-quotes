import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const BASE_URL = 'https://gl7roofquotes.co.uk';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Lechlade', item: `${BASE_URL}/lechlade-roof-repairs` },
    { '@type': 'ListItem', position: 3, name: 'Roof Tiling & Slating', item: `${BASE_URL}/lechlade-roof-tiling` },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Roof Tiling & Slating in Lechlade',
  description: 'Roof tile replacement, slate repairs and re-tiling services for Lechlade homeowners. Local GL7 roofing professionals.',
  areaServed: { '@type': 'City', name: 'Lechlade' },
  serviceType: 'Roof Tiling',
};

export default function LechladeRoofTiling() {
  return (
    <Layout title="Roof Tiling & Slating in Lechlade | Tile Repairs GL7" description="Roof tile or slate problems in Lechlade? Tile replacement, slate repairs and re-tiling services. Local GL7 professionals. No shared leads.">
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
              <span style={{ color: 'rgba(255,255,255,0.7)' }}>Roof Tiling</span>
            </div>
            <h1>Roof Tiling & Slating in <span>Lechlade (GL7)</span></h1>
            <p className="hero-sub">Missing or cracked tiles? Slate damage? Submit your request and get matched with a local GL7 professional for tile and slate repairs.</p>
            <div className="hero-trust">
              <span><span className="check">✓</span> Tile replacement</span>
              <span><span className="check">✓</span> Slate repairs</span>
              <span><span className="check">✓</span> No shared leads</span>
              <span><span className="check">✓</span> GL7 local focus</span>
            </div>
            <div className="hero-cta">
              <Link to="/request" className="btn btn-primary btn-lg">Request Tile Repair</Link>
              <Link to="/lechlade-roof-repairs" className="btn btn-outline btn-lg">All Lechlade Services</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content">
            <h2>Roof Tile & Slate Specialists in Lechlade</h2>
            <p>Lechlade's diverse housing stock includes everything from period Cotswold stone cottages with traditional stone slate roofs to modern homes with concrete interlocking tiles. Each requires different expertise and materials for proper repair and maintenance.</p>
            
            <h3>Common tiling problems in Lechlade</h3>
            <ul>
              <li><strong>Cracked or broken tiles</strong> — Frost damage, impact, or age can cause tiles to crack and fail</li>
              <li><strong>Slipped tiles</strong> — Nails corrode or fixings fail, allowing tiles to slide down</li>
              <li><strong>Missing tiles</strong> — High winds can dislodge poorly secured tiles</li>
              <li><strong>Delaminating slates</strong> — Natural slate can split and delaminate over time</li>
              <li><strong>Ridge tile failure</strong> — Mortar bedding degrades, allowing ridge tiles to become loose</li>
              <li><strong>Hip tile damage</strong> — Angular hip tiles are vulnerable to impact and weather</li>
            </ul>

            <h2>Tile Types in Lechlade Properties</h2>
            <p>Local properties feature various roof covering types:</p>
            <ul>
              <li><strong>Stone slate</strong> — Traditional Cotswold limestone slates on period properties</li>
              <li><strong>Clay tiles</strong> — Plain clay tiles on older homes and some newer developments</li>
              <li><strong>Concrete tiles</strong> — Modern interlocking tiles on post-1960s properties</li>
              <li><strong>Welsh slate</strong> — Premium natural slate on higher-specification roofs</li>
              <li><strong>Artificial slate</strong> — Fibre cement or resin-based slate alternatives</li>
            </ul>

            <h2>Signs Your Tiles Need Attention</h2>
            <ul>
              <li>Visible gaps or missing tiles from ground level</li>
              <li>Tiles that appear to be sliding or out of alignment</li>
              <li>Debris from broken tiles in gutters or on the ground</li>
              <li>Water ingress or damp patches inside</li>
              <li>Daylight visible through the roof from inside the loft</li>
              <li>Ridge tiles that appear loose or uneven</li>
            </ul>

            <div style={{ background: 'var(--bg-alt)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.5rem', margin: '2rem 0' }}>
              <h3 style={{ marginTop: 0 }}>Matching Existing Tiles</h3>
              <p style={{ marginBottom: '1rem' }}>Local professionals can source tiles to match your existing roof. Whether you need Cotswold stone slates, traditional clay tiles, or modern concrete replacements, they understand local requirements.</p>
              <Link to="/request" className="btn btn-primary">Request Tile Service</Link>
            </div>

            <h2>Why Choose GL7 Roof Quotes for Tiling Work</h2>
            <p>We connect Lechlade homeowners with professionals experienced in working with all tile and slate types found on GL7 properties. Your request goes to one professional who can match materials and provide appropriate repairs.</p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <h2>Get Your Roof Tiles Fixed</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Submit your tile repair request and a local Lechlade-area professional will contact you.
            </p>
            <Link to="/request" className="btn btn-primary btn-lg">Request Tile Repair in Lechlade</Link>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container cta-section">
          <h2>Start Your Tile Repair Request</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)' }}>Your details are never posted publicly.</p>
          <div className="cta-buttons">
            <Link to="/request" className="btn btn-primary btn-lg">Get Help Now</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
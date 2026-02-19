import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const BASE_URL = 'https://gl7roofquotes.co.uk';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Lechlade', item: `${BASE_URL}/lechlade-roof-repairs` },
    { '@type': 'ListItem', position: 3, name: 'Chimney Repairs', item: `${BASE_URL}/lechlade-chimney-repairs` },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Chimney Repairs in Lechlade',
  description: 'Chimney stack repairs, lead flashing, repointing and chimney pot services for Lechlade homeowners. Local GL7 roofing professionals.',
  areaServed: { '@type': 'City', name: 'Lechlade' },
  serviceType: 'Chimney Repair',
};

export default function LechladeChimneyRepairs() {
  return (
    <Layout title="Chimney Repairs in Lechlade | Chimney Flashing GL7" description="Chimney leaking in Lechlade? Chimney stack repairs, lead flashing, repointing and pot replacement. Local GL7 roofing professionals. No shared leads.">
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
              <span style={{ color: 'rgba(255,255,255,0.7)' }}>Chimney Repairs</span>
            </div>
            <h1>Chimney Repairs in <span>Lechlade (GL7)</span></h1>
            <p className="hero-sub">Chimney leaking? Flashing failed? Submit your request and get matched with a local GL7 roofing professional experienced in chimney repairs.</p>
            <div className="hero-trust">
              <span><span className="check">✓</span> Lead flashing</span>
              <span><span className="check">✓</span> Repointing</span>
              <span><span className="check">✓</span> No shared leads</span>
              <span><span className="check">✓</span> GL7 local focus</span>
            </div>
            <div className="hero-cta">
              <Link to="/request" className="btn btn-primary btn-lg">Request Chimney Repair</Link>
              <Link to="/lechlade-roof-repairs" className="btn btn-outline btn-lg">All Lechlade Services</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content">
            <h2>Chimney Specialists in Lechlade</h2>
            <p>Many Lechlade homes, particularly the period properties around the town centre, feature original chimney stacks that are decades — sometimes centuries — old. These traditional brick or stone chimneys require regular maintenance to prevent water ingress and structural deterioration.</p>
            
            <h3>Common chimney problems in Lechlade</h3>
            <ul>
              <li><strong>Lead flashing failure</strong> — The junction between chimney stack and roof is vulnerable. Old lead can crack, lift, or corrode, allowing water to seep into the property</li>
              <li><strong>Mortar decay</strong> — Pointing between bricks or stones on chimney stacks weathers over time, especially given Lechlade's riverside climate</li>
              <li><strong>Chimney pot damage</strong> — Cracked or displaced chimney pots can let in rain and become unstable in high winds</li>
              <li><strong>Flaunching deterioration</strong> — The cement haunching around chimney pots can crack and crumble with age</li>
              <li><strong>Stack instability</strong> — Older chimney stacks can become loose or lean, particularly if mortar has failed</li>
            </ul>

            <h2>Signs Your Chimney Needs Attention</h2>
            <ul>
              <li>Damp patches on walls near the chimney breast</li>
              <li>Water marks on the ceiling around the chimney stack</li>
              <li>Visible cracks in the chimney stack mortar</li>
              <li>Loose or missing flashing visible from ground level</li>
              <li>Debris from the chimney on the roof or in gutters</li>
              <li>White staining (efflorescence) on the chimney exterior</li>
            </ul>

            <h2>Chimney Repair Services</h2>
            <p>Local GL7 roofing professionals can help with:</p>
            <ul>
              <li>Lead flashing replacement and repairs</li>
              <li>Chimney stack repointing</li>
              <li>Chimney pot replacement and securing</li>
              <li>Flaunching renewal</li>
              <li>Chimney capping and ventilation</li>
              <li>Partial or complete stack rebuilding</li>
            </ul>

            <div style={{ background: 'var(--bg-alt)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.5rem', margin: '2rem 0' }}>
              <h3 style={{ marginTop: 0 }}>Period Property Specialists</h3>
              <p style={{ marginBottom: '1rem' }}>Lechlade has many Cotswold stone and period properties with traditional chimney construction. Local professionals understand these heritage requirements.</p>
              <Link to="/request" className="btn btn-primary">Request Chimney Repair</Link>
            </div>

            <h2>Why Choose GL7 Roof Quotes</h2>
            <p>We connect Lechlade homeowners with roofing professionals experienced in chimney work on GL7 properties. Your request goes to one professional — not multiple contractors competing for your business.</p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <h2>Get Your Chimney Repaired</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Submit your chimney repair request and a local Lechlade-area professional will contact you.
            </p>
            <Link to="/request" className="btn btn-primary btn-lg">Request Chimney Repair in Lechlade</Link>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container cta-section">
          <h2>Start Your Chimney Repair Request</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)' }}>Your details are never posted publicly.</p>
          <div className="cta-buttons">
            <Link to="/request" className="btn btn-primary btn-lg">Get Help Now</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
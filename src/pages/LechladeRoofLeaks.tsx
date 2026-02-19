import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const BASE_URL = 'https://gl7roofquotes.co.uk';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Lechlade', item: `${BASE_URL}/lechlade-roof-repairs` },
    { '@type': 'ListItem', position: 3, name: 'Roof Leak Repairs', item: `${BASE_URL}/lechlade-roof-leaks` },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Roof Leak Repairs in Lechlade',
  description: 'Professional roof leak detection and repair services for homeowners in Lechlade, GL7. Fast response for emergency roof leaks, water ingress, and damp penetration.',
  areaServed: { '@type': 'City', name: 'Lechlade' },
  serviceType: 'Roof Leak Repair',
};

export default function LechladeRoofLeaks() {
  return (
    <Layout title="Roof Leak Repairs in Lechlade | Emergency Roofing GL7" description="Roof leaking in Lechlade? Fast detection and repair for roof leaks, water stains, and damp patches. Local GL7 roofing professionals. No shared leads.">
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
              <span style={{ color: 'rgba(255,255,255,0.7)' }}>Roof Leaks</span>
            </div>
            <h1>Roof Leak Repairs in <span>Lechlade (GL7)</span></h1>
            <p className="hero-sub">Water coming through your ceiling? Active roof leak in Lechlade? Submit your request and get matched with a local GL7 roofing professional.</p>
            <div className="hero-trust">
              <span><span className="check">✓</span> Emergency response</span>
              <span><span className="check">✓</span> Leak detection</span>
              <span><span className="check">✓</span> No shared leads</span>
              <span><span className="check">✓</span> GL7 local focus</span>
            </div>
            <div className="hero-cta">
              <Link to="/request" className="btn btn-primary btn-lg">Request Leak Repair</Link>
              <Link to="/roof-leak-help" className="btn btn-outline btn-lg">Emergency Help</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content">
            <h2>Roof Leak Specialists in Lechlade</h2>
            <p>Lechlade's position on the River Thames means homeowners often face roofing challenges related to persistent damp, mist, and seasonal frost. When water starts coming through your ceiling, time is critical — even a small leak can cause significant damage to plaster, electrics, and structural timbers if left untreated.</p>
            
            <h3>Common causes of roof leaks in Lechlade</h3>
            <ul>
              <li><strong>Cracked or slipped tiles</strong> — High winds along the Thames valley can displace roof coverings, creating entry points for rainwater</li>
              <li><strong>Chimney flashing failure</strong> — Many Lechlade period properties have original chimney stacks where lead flashing has deteriorated</li>
              <li><strong>Valley gutter problems</strong> — Hidden valleys between roof pitches are common leak sources on Lechlade's older homes</li>
              <li><strong>Ridge tile failure</strong> — Mortar bedding on ridge tiles can crack and wash out, allowing water ingress at the highest point</li>
              <li><strong>Flat roof deterioration</strong> — Garage and extension flat roofs often develop blisters and splits that leak during heavy rain</li>
            </ul>

            <h2>Signs You May Have a Roof Leak</h2>
            <p>Not all roof leaks are immediately obvious. Watch for these warning signs:</p>
            <ul>
              <li>Water stains or brown patches on ceilings</li>
              <li>Damp patches on walls near chimney breasts</li>
              <li>Musty smells in loft spaces</li>
              <li>Visible daylight through the roof boards</li>
              <li>Dripping sounds during or after rain</li>
              <li>Mould growth on upper floor walls</li>
            </ul>

            <h2>What to Do If Your Roof Is Leaking</h2>
            <p>If you notice an active leak in your Lechlade property:</p>
            <ol>
              <li>Move furniture and valuables away from the affected area</li>
              <li>Place buckets or containers to catch dripping water</li>
              <li>If water is near electrics, turn off power at the consumer unit</li>
              <li>Do not attempt to climb on the roof yourself</li>
              <li>Submit a roof repair request through GL7 Roof Quotes</li>
            </ol>

            <div style={{ background: 'var(--bg-alt)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.5rem', margin: '2rem 0' }}>
              <h3 style={{ marginTop: 0 }}>Need Emergency Leak Help?</h3>
              <p style={{ marginBottom: '1rem' }}>If your roof is actively leaking right now, don't wait. Submit your request and a local GL7 roofing professional will be in touch.</p>
              <Link to="/request" className="btn btn-primary">Submit Emergency Request</Link>
            </div>

            <h2>Why Choose GL7 Roof Quotes for Leak Repairs</h2>
            <p>We connect Lechlade homeowners with experienced roofing professionals who understand the specific challenges of GL7 properties. Whether you live in a period Cotswold stone cottage near the Market Square or a modern home in a newer development, we can match your leak repair request with a suitable local professional.</p>
            <ul>
              <li>No shared leads — your details go to one professional</li>
              <li>Local GL7 focus — not a national call centre</li>
              <li>No obligation to proceed with any quote</li>
              <li>Your details never posted publicly</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <h2>Get Your Roof Leak Fixed</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Submit your roof leak repair request and a local Lechlade-area professional will contact you.
            </p>
            <Link to="/request" className="btn btn-primary btn-lg">Request Leak Repair in Lechlade</Link>
            <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Also serving: <Link to="/fairford-roof-repairs">Fairford</Link>, <Link to="/kempsford-roof-repairs">Kempsford</Link>, <Link to="/southrop-roof-repairs">Southrop</Link>
            </p>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container cta-section">
          <h2>Start Your Roof Leak Repair Request</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)' }}>Your details are never posted publicly.</p>
          <div className="cta-buttons">
            <Link to="/request" className="btn btn-primary btn-lg">Get Help Now</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
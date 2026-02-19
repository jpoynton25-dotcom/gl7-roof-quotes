import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const BASE_URL = 'https://gl7roofquotes.co.uk';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Lechlade', item: `${BASE_URL}/lechlade-roof-repairs` },
    { '@type': 'ListItem', position: 3, name: 'Storm Damage Repairs', item: `${BASE_URL}/lechlade-storm-damage` },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Storm Damage Roof Repairs in Lechlade',
  description: 'Emergency storm damage repairs for Lechlade homeowners. Wind damage, fallen tiles, emergency tarping. Local GL7 roofing professionals.',
  areaServed: { '@type': 'City', name: 'Lechlade' },
  serviceType: 'Storm Damage Repair',
};

export default function LechladeStormDamage() {
  return (
    <Layout title="Storm Damage Roof Repairs in Lechlade | Emergency GL7" description="Storm damaged your roof in Lechlade? Emergency repairs for wind damage, fallen tiles, and storm-related roof issues. Local GL7 professionals. Fast response.">
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
              <span style={{ color: 'rgba(255,255,255,0.7)' }}>Storm Damage</span>
            </div>
            <h1>Storm Damage Repairs in <span>Lechlade (GL7)</span></h1>
            <p className="hero-sub">Storm damaged your roof? Missing tiles? Submit your request and get matched with a local GL7 professional for emergency storm damage repairs.</p>
            <div className="hero-trust">
              <span><span className="check">✓</span> Emergency response</span>
              <span><span className="check">✓</span> Tarping service</span>
              <span><span className="check">✓</span> No shared leads</span>
              <span><span className="check">✓</span> GL7 local focus</span>
            </div>
            <div className="hero-cta">
              <Link to="/request" className="btn btn-primary btn-lg">Request Storm Repair</Link>
              <Link to="/roof-leak-help" className="btn btn-outline btn-lg">Emergency Help</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content">
            <h2>Storm Damage Specialists in Lechlade</h2>
            <p>Lechlade's position in the Thames valley exposes properties to strong winds tracking along the river corridor. Storms can cause significant roof damage — from displaced tiles to fallen branches and structural damage. Quick action after storm damage is essential to prevent further water ingress and deterioration.</p>
            
            <h3>Common storm damage in Lechlade</h3>
            <ul>
              <li><strong>Displaced or missing tiles</strong> — High winds can lift and remove roof tiles, exposing the underlying structure</li>
              <li><strong>Ridge tile failure</strong> — Ridge tiles are particularly vulnerable to wind uplift during storms</li>
              <li><strong>Chimney damage</strong> — Tall chimney stacks can be damaged or destabilised by high winds</li>
              <li><strong>Fallen trees and branches</strong> — Overhanging trees can cause impact damage during storms</li>
              <li><strong>Flashing damage</strong> — Wind can lift or tear lead flashing around chimneys and valleys</li>
              <li><strong>Gutter damage</strong> — Heavy rain combined with debris can damage or detach gutters</li>
            </ul>

            <h2>What to Do After Storm Damage</h2>
            <ol>
              <li><strong>Stay safe</strong> — Don't climb on the roof. Keep away from any downed power lines</li>
              <li><strong>Document the damage</strong> — Take photos from ground level if safe to do so</li>
              <li><strong>Contain water ingress</strong> — Use buckets for active leaks, move valuables away</li>
              <li><strong>Submit a repair request</strong> — The sooner you act, the less secondary damage occurs</li>
              <li><strong>Check your insurance</strong> — Storm damage is typically covered by buildings insurance</li>
            </ol>

            <div style={{ background: '#fef3c7', border: '1px solid #f59e0b', borderRadius: 'var(--radius)', padding: '1.5rem', margin: '2rem 0' }}>
              <h3 style={{ marginTop: 0, color: '#92400e' }}>⚠️ Safety Warning</h3>
              <p style={{ marginBottom: 0, color: '#92400e' }}>Never attempt to climb on your roof after storm damage. Surfaces may be slippery, and structural damage may not be visible from ground level. Always use a professional.</p>
            </div>

            <h2>Storm Damage Services</h2>
            <p>Local GL7 professionals can help with:</p>
            <ul>
              <li>Emergency tarping and temporary weatherproofing</li>
              <li>Tile replacement and securing</li>
              <li>Ridge tile re-bedding and replacement</li>
              <li>Chimney stack repairs</li>
              <li>Lead flashing repairs</li>
              <li>Full damage assessment and insurance reports</li>
            </ul>

            <h2>Why Choose GL7 Roof Quotes for Storm Damage</h2>
            <p>Storm damage requires prompt attention. We connect Lechlade homeowners with local professionals who can respond quickly. Your request goes to one professional — no waiting for multiple contractors to call.</p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <h2>Get Storm Damage Repaired</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Submit your storm damage request and a local Lechlade-area professional will contact you.
            </p>
            <Link to="/request" className="btn btn-primary btn-lg">Request Storm Repair in Lechlade</Link>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container cta-section">
          <h2>Start Your Storm Damage Request</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)' }}>Your details are never posted publicly.</p>
          <div className="cta-buttons">
            <Link to="/request" className="btn btn-primary btn-lg">Get Help Now</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
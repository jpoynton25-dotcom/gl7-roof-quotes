import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';

const BASE_URL = 'https://gl7roofquotes.co.uk';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE_URL}/services` },
  ],
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Emergency Roof Leak Repair in GL7', url: `${BASE_URL}/services/emergency-roof-leak-gl7` },
    { '@type': 'ListItem', position: 2, name: 'Roof Repairs in GL7', url: `${BASE_URL}/services/roof-repairs-gl7` },
    { '@type': 'ListItem', position: 3, name: 'Storm Damage Repairs in GL7', url: `${BASE_URL}/services/storm-damage-gl7` },
    { '@type': 'ListItem', position: 4, name: 'Roof Replacement in GL7', url: `${BASE_URL}/services/roof-replacement-gl7` },
    { '@type': 'ListItem', position: 5, name: 'Lead Flashing Repair in GL7', url: `${BASE_URL}/services/lead-flashing-repair-gl7` },
    { '@type': 'ListItem', position: 6, name: 'Chimney Repairs in GL7', url: `${BASE_URL}/services/chimney-repairs-gl7` },
    { '@type': 'ListItem', position: 7, name: 'Flat Roof Repair in GL7', url: `${BASE_URL}/services/flat-roof-repair-gl7` },
  ],
};

export default function ServicesHub() {
  return (
    <Layout title="Roofing Services Across GL7 | GL7 Roof Quotes" description="Professional roofing services across GL7. Emergency repairs, roof replacements, lead flashing, chimney repairs, and flat roof services. Fast response, local professionals.">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', marginBottom: '0.75rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <Link to="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Home</Link>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
              <span style={{ color: 'rgba(255,255,255,0.7)' }}>Services</span>
            </div>
            <h1>Roofing Services Across <span>GL7</span></h1>
            <p className="hero-sub">Professional roofing services for Lechlade, Fairford and surrounding GL7 villages. Fast response, local professionals, no shared leads.</p>
            <div className="hero-trust">
              <span><span className="check">✓</span> Fast response</span>
              <span><span className="check">✓</span> Emergency tarping</span>
              <span><span className="check">✓</span> Same-day available</span>
              <span><span className="check">✓</span> GL7 coverage</span>
              <span><span className="check">✓</span> No shared leads — direct local response</span>
            </div>
            <div className="hero-cta">
              <Link to="/request" className="btn btn-primary btn-lg">Start Request</Link>
              <a href="tel:+447990101321" className="btn btn-outline btn-lg">Call for urgent leaks</a>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', marginTop: '1rem' }}>
              We aim to respond within 2 working hours (Mon–Sat, 8am–6pm).
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content">
            <h2>Emergency & Repairs (High Intent)</h2>
            <p>Need urgent help? These services handle active leaks, storm damage, and immediate roof issues.</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', margin: '2rem 0' }}>
              <div style={{ background: 'var(--bg-alt)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.5rem' }}>
                <h3 style={{ margin: '0 0 0.5rem', color: '#92400e' }}>Emergency Roof Leak</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Active water ingress? Fast response for emergency tarping and repairs.</p>
                <Link to="/services/emergency-roof-leak-gl7" className="btn btn-primary">Get Emergency Help</Link>
              </div>
              
              <div style={{ background: 'var(--bg-alt)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.5rem' }}>
                <h3 style={{ margin: '0 0 0.5rem', color: '#92400e' }}>Roof Repairs</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Missing tiles, damaged flashing, or general roof issues.</p>
                <Link to="/services/roof-repairs-gl7" className="btn btn-primary">Request Repairs</Link>
              </div>
              
              <div style={{ background: 'var(--bg-alt)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.5rem' }}>
                <h3 style={{ margin: '0 0 0.5rem', color: '#92400e' }}>Storm Damage</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>High winds, fallen branches, or storm-related roof damage.</p>
                <Link to="/services/storm-damage-gl7" className="btn btn-primary">Storm Damage Help</Link>
              </div>
            </div>

            <h2 style={{ marginTop: '3rem' }}>High-Value Jobs</h2>
            <p>Planning a major roof project? These services cover full replacements and specialized repairs.</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', margin: '2rem 0' }}>
              <div style={{ background: 'var(--bg-alt)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.5rem' }}>
                <h3 style={{ margin: '0 0 0.5rem', color: '#92400e' }}>Roof Replacement</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Full roof replacement with modern materials and warranties.</p>
                <Link to="/services/roof-replacement-gl7" className="btn btn-primary">Get Replacement Quote</Link>
              </div>
              
              <div style={{ background: 'var(--bg-alt)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.5rem' }}>
                <h3 style={{ margin: '0 0 0.5rem', color: '#92400e' }}>Lead Flashing Repair</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Lead flashing replacement and valley repairs.</p>
                <Link to="/services/lead-flashing-repair-gl7" className="btn btn-primary">Fix Flashing</Link>
              </div>
              
              <div style={{ background: 'var(--bg-alt)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.5rem' }}>
                <h3 style={{ margin: '0 0 0.5rem', color: '#92400e' }}>Chimney Repairs</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Chimney stack repairs, repointing, and flashing issues.</p>
                <Link to="/services/chimney-repairs-gl7" className="btn btn-primary">Chimney Help</Link>
              </div>
              
              <div style={{ background: 'var(--bg-alt)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.5rem' }}>
                <h3 style={{ margin: '0 0 0.5rem', color: '#92400e' }}>Flat Roof Repair</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Flat roof membrane repairs, replacements, and maintenance.</p>
                <Link to="/services/flat-roof-repair-gl7" className="btn btn-primary">Flat Roof Help</Link>
              </div>
            </div>

            <h2 style={{ marginTop: '3rem' }}>How It Works</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', margin: '2rem 0' }}>
              <div style={{ background: 'var(--bg-alt)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.5rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '1rem' }}>1</div>
                <h4 style={{ margin: '0 0 0.5rem' }}>Submit Request</h4>
                <p style={{ color: 'var(--text-muted)', margin: 0 }}>Describe your roof issue in under 60 seconds</p>
              </div>
              
              <div style={{ background: 'var(--bg-alt)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.5rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '1rem' }}>2</div>
                <h4 style={{ margin: '0 0 0.5rem' }}>Review & Match</h4>
                <p style={{ color: 'var(--text-muted)', margin: 0 }}>We review your request and connect you with a local professional</p>
              </div>
              
              <div style={{ background: 'var(--bg-alt)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.5rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '1rem' }}>3</div>
                <h4 style={{ margin: '0 0 0.5rem' }}>Get Quote</h4>
                <p style={{ color: 'var(--text-muted)', margin: 0 }}>Receive a clear quote and timeline for your project</p>
              </div>
              
              <div style={{ background: 'var(--bg-alt)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.5rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '1rem' }}>4</div>
                <h4 style={{ margin: '0 0 0.5rem' }}>Start Work</h4>
                <p style={{ color: 'var(--text-muted)', margin: 0 }}>Begin your roof project with a trusted local professional</p>
              </div>
            </div>

            <div style={{ background: 'var(--primary)', color: '#fff', borderRadius: 'var(--radius)', padding: '1.5rem', textAlign: 'center', margin: '3rem 0' }}>
              <h3 style={{ margin: '0 0 0.5rem', color: '#fff' }}>Ready to start your roof project?</h3>
              <p style={{ margin: '0 0 1rem', opacity: 0.9 }}>Submit your request and a local GL7 professional will contact you within 2 working hours.</p>
              <Link to="/request" className="btn" style={{ background: '#fff', color: 'var(--primary)', fontWeight: 700 }}>
                Start Your Request
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container cta-section">
          <h2>Get Started Today</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)' }}>Professional roofing services across GL7.</p>
          <div className="cta-buttons">
            <Link to="/request" className="btn btn-primary btn-lg">Start Request</Link>
            <a href="tel:+447990101321" className="btn btn-outline btn-lg">Call for urgent leaks</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
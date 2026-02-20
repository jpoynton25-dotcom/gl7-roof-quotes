import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import CONFIG from '../../config';

const BASE_URL = 'https://gl7roofquotes.co.uk';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE_URL}/services` },
    { '@type': 'ListItem', position: 3, name: 'Storm Damage Repairs', item: `${BASE_URL}/services/storm-damage-gl7` },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'Storm Damage Roof Repairs in GL7',
  'description': 'Professional storm damage roof repairs across GL7. Emergency tarping, tile replacement, and structural assessments for Lechlade, Fairford and surrounding villages.',
  'provider': {
    '@type': 'LocalBusiness',
    'name': CONFIG.platformName,
    'areaServed': CONFIG.areas.map(a => ({ '@type': 'City', 'name': a })),
  },
  'serviceType': 'Roofing',
  'url': `${BASE_URL}/services/storm-damage-gl7`,
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': 'How quickly can you respond to storm damage?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'We aim to respond within 2 working hours during business hours (Mon–Sat, 8am–6pm). For urgent safety concerns, call us directly.',
      },
    },
    {
      '@type': 'Question',
      'name': 'Do you provide emergency tarping?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Yes, we provide emergency tarping to prevent further water damage while you arrange permanent repairs.',
      },
    },
    {
      '@type': 'Question',
      'name': 'What areas do you cover?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'We serve Lechlade, Fairford, Kempsford, Southrop, Eastleach, Down Ampney, Quenington, Hatherop, Coln St Aldwyns, Meysey Hampton and surrounding GL7 villages.',
      },
    },
  ],
};

export default function StormDamageGL7() {
  return (
    <Layout title="Storm Damage Roof Repairs in GL7 | Emergency Roofing" description="Storm damaged your roof in GL7? Emergency tarping, tile replacement, and structural assessments. Fast response for Lechlade, Fairford and surrounding villages.">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', marginBottom: '0.75rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <Link to="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Home</Link>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
              <Link to="/services" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Services</Link>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
              <span style={{ color: 'rgba(255,255,255,0.7)' }}>Storm Damage</span>
            </div>
            <h1>Storm Damage Roof Repairs in <span>GL7</span></h1>
            <p className="hero-sub">Fast response for storm-damaged roofs across Lechlade, Fairford and surrounding GL7 villages. Emergency tarping, tile replacement, and structural assessments.</p>
            <div className="hero-trust">
              <span><span className="check">✓</span> Emergency response</span>
              <span><span className="check">✓</span> Same-day tarping</span>
              <span><span className="check">✓</span> Tile replacement</span>
              <span><span className="check">✓</span> Structural assessment</span>
              <span><span className="check">✓</span> GL7 coverage</span>
            </div>
            <div className="hero-cta">
              <Link to="/request" className="btn btn-primary btn-lg">Get Storm Damage Help</Link>
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
            <h2>Storm Damage Services</h2>
            <p>Storms can cause significant damage to your roof. Our team provides fast, professional repairs to restore your roof's integrity and protect your home.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', margin: '2rem 0' }}>
              <div style={{ background: 'var(--bg-alt)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.5rem' }}>
                <h3 style={{ margin: '0 0 0.5rem', color: '#92400e' }}>Emergency Tarping</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Quick tarp installation to prevent water damage while you arrange permanent repairs.</p>
                <ul style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                  <li>Same-day service available</li>
                  <li>Secure installation</li>
                  <li>Weather-resistant materials</li>
                </ul>
                <Link to="/request" className="btn btn-primary">Request Tarping</Link>
              </div>

              <div style={{ background: 'var(--bg-alt)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.5rem' }}>
                <h3 style={{ margin: '0 0 0.5rem', color: '#92400e' }}>Tile Replacement</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Replacement of missing, broken, or displaced roof tiles.</p>
                <ul style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                  <li>Matching tile sourcing</li>
                  <li>Professional installation</li>
                  <li>Weatherproof sealing</li>
                </ul>
                <Link to="/request" className="btn btn-primary">Request Tile Repair</Link>
              </div>

              <div style={{ background: 'var(--bg-alt)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.5rem' }}>
                <h3 style={{ margin: '0 0 0.5rem', color: '#92400e' }}>Structural Assessment</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Professional assessment of storm damage to roof structure.</p>
                <ul style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                  <li>Comprehensive inspection</li>
                  <li>Detailed damage report</li>
                  <li>Repair recommendations</li>
                </ul>
                <Link to="/request" className="btn btn-primary">Request Assessment</Link>
              </div>
            </div>

            <h2 style={{ marginTop: '3rem' }}>Common Storm Damage</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', margin: '2rem 0' }}>
              <div style={{ background: 'var(--bg-alt)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.5rem' }}>
                <h4 style={{ margin: '0 0 0.5rem', color: '#92400e' }}>Missing Tiles</h4>
                <p style={{ color: 'var(--text-muted)', margin: 0 }}>High winds can dislodge or break roof tiles, leaving your roof exposed.</p>
              </div>
              <div style={{ background: 'var(--bg-alt)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.5rem' }}>
                <h4 style={{ margin: '0 0 0.5rem', color: '#92400e' }}>Water Damage</h4>
                <p style={{ color: 'var(--text-muted)', margin: 0 }}>Leaks can cause damage to ceilings, walls, and insulation.</p>
              </div>
              <div style={{ background: 'var(--bg-alt)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.5rem' }}>
                <h4 style={{ margin: '0 0 0.5rem', color: '#92400e' }}>Structural Damage</h4>
                <p style={{ color: 'var(--text-muted)', margin: 0 }}>Severe storms can damage roof timbers and supporting structures.</p>
              </div>
              <div style={{ background: 'var(--bg-alt)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.5rem' }}>
                <h4 style={{ margin: '0 0 0.5rem', color: '#92400e' }}>Gutter Damage</h4>
                <p style={{ color: 'var(--text-muted)', margin: 0 }}>Storm debris can damage gutters and downspouts.</p>
              </div>
            </div>

            <h2 style={{ marginTop: '3rem' }}>What to Do After Storm Damage</h2>
            <ol style={{ color: 'var(--text-muted)', margin: '1rem 0 2rem 2rem' }}>
              <li><strong>Ensure Safety:</strong> Stay away from damaged areas and avoid walking on the roof.</li>
              <li><strong>Document Damage:</strong> Take photos of the damage for insurance purposes.</li>
              <li><strong>Prevent Further Damage:</strong> If safe, cover damaged areas with tarps.</li>
              <li><strong>Contact Us:</strong> Submit a request or call for immediate assistance.</li>
              <li><strong>Contact Your Insurer:</strong> Report the damage to your insurance company.</li>
            </ol>

            <div style={{ background: 'var(--primary)', color: '#fff', borderRadius: 'var(--radius)', padding: '1.5rem', textAlign: 'center', margin: '3rem 0' }}>
              <h3 style={{ margin: '0 0 0.5rem', color: '#fff' }}>Need Storm Damage Help?</h3>
              <p style={{ margin: '0 0 1rem', opacity: 0.9 }}>Submit your request and we'll respond within 2 working hours.</p>
              <Link to="/request" className="btn" style={{ background: '#fff', color: 'var(--primary)', fontWeight: 700 }}>
                Get Storm Damage Help
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container cta-section">
          <h2>Storm Damage Assistance</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)' }}>Fast response for storm-damaged roofs across GL7.</p>
          <div className="cta-buttons">
            <Link to="/request" className="btn btn-primary btn-lg">Get Help Now</Link>
            <a href="tel:+447990101321" className="btn btn-outline btn-lg">Call for urgent leaks</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
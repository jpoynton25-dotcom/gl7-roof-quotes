import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import CONFIG from '../config';

const villages = [
  {
    name: 'Lechlade',
    postcode: 'GL7 3',
    slug: 'lechlade-roof-repairs',
    summary: 'The main GL7 market town on the Thames. Stone properties, riverside exposure, chimney and valley issues common.',
  },
  {
    name: 'Fairford',
    postcode: 'GL7 4',
    slug: 'fairford-roof-repairs',
    summary: 'Historic market town near RAF Fairford. Exposed position, Victorian and Cotswold stone properties, chimney and slate issues.',
  },
  {
    name: 'Kempsford',
    postcode: 'GL7 4',
    slug: 'kempsford-roof-repairs',
    summary: 'Small riverside village between Lechlade and Fairford. Mix of stone cottages and post-war housing. Flat roof and ridge tile issues.',
  },
  {
    name: 'Southrop',
    postcode: 'GL7 3',
    slug: 'southrop-roof-repairs',
    summary: 'Quiet Leach valley hamlet. Traditional Cotswold stone cottages. Chimney, valley and verge mortar issues most common.',
  },
  {
    name: 'Eastleach',
    postcode: 'GL7 3',
    slug: 'eastleach-roof-repairs',
    summary: 'Remote twin parish village. Historic stone properties and barn conversions. Specialist traditional roofing knowledge required.',
  },
  {
    name: 'Down Ampney',
    postcode: 'GL7 5',
    slug: 'down-ampney-roof-repairs',
    summary: 'Flat, exposed village near Wiltshire border. Mix of stone cottages and post-war estate housing. Wind exposure significant.',
  },
  {
    name: 'Quenington',
    postcode: 'GL7 5',
    slug: 'quenington-roof-repairs',
    summary: 'Small Coln valley village with medieval heritage. Stone properties with typical chimney, valley and slate issues.',
  },
  {
    name: 'Hatherop',
    postcode: 'GL7 3',
    slug: 'hatherop-roof-repairs',
    summary: 'Estate village in the Coln valley. Well-maintained stone cottages with natural slate and period roofing details.',
  },
  {
    name: 'Coln St Aldwyns',
    postcode: 'GL7 5',
    slug: 'coln-st-aldwyns-roof-repairs',
    summary: 'One of the Cotswolds\' most beautiful villages. Almost entirely historic stone construction. Conservation-aware roofing important.',
  },
  {
    name: 'Meysey Hampton',
    postcode: 'GL7 5',
    slug: 'meysey-hampton-roof-repairs',
    summary: 'Crossroads village on the GL7 southern fringe. Exposed ridge position. Mixed property ages, ridge and verge mortar issues.',
  },
];

// Testimonials for this page
const testimonials = [
  { text: "Quick response and clear advice. Leak stopped the same day.", name: "S.H.", area: "Lechlade" },
  { text: "No chasing around. One call back and the inspection was booked.", name: "M.T.", area: "Fairford" },
];

const BASE_URL = 'https://gl7roofquotes.co.uk';

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'GL7 Village Roof Repair Pages',
  description: 'Roof repair request pages for villages in the GL7 postcode area, Gloucestershire.',
  numberOfItems: villages.length,
  itemListElement: villages.map((v, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: `Roof Repairs in ${v.name} (${v.postcode})`,
    url: `${BASE_URL}/${v.slug}`,
    description: v.summary,
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Areas', item: `${BASE_URL}/areas` },
  ],
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'GL7 Villages We Cover | GL7 Roof Quotes',
  description: 'Roof repair request service covering Lechlade, Fairford, Kempsford, Southrop, Eastleach, Down Ampney, Quenington, Hatherop, Coln St Aldwyns and Meysey Hampton.',
  url: `${BASE_URL}/areas`,
  isPartOf: { '@type': 'WebSite', url: BASE_URL, name: 'GL7 Roof Quotes' },
};

export default function Areas() {
  return (
    <Layout
      title="GL7 Villages We Cover"
      description="Roof repair request service covering Lechlade, Fairford, Kempsford, Southrop, Eastleach, Down Ampney, Quenington, Hatherop, Coln St Aldwyns and Meysey Hampton."
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      {/* CONVERSION HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Roof Repairs Across <span>GL7 Villages</span></h1>
            <p className="hero-sub">Fast local roofing help in Lechlade, Fairford, Kempsford and surrounding villages.</p>
            
            <div className="hero-trust">
              <span><span className="check">✓</span> No shared leads</span>
              <span><span className="check">✓</span> No obligation</span>
              <span><span className="check">✓</span> Local GL7 roofers</span>
              <span><span className="check">✓</span> Your details stay private</span>
            </div>

            <div className="hero-cta">
              <Link to="/request" className="btn btn-primary btn-lg">Request a Roofer in GL7</Link>
              <a href={`tel:${CONFIG.phoneE164}`} className="btn btn-outline btn-lg">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ marginRight: '0.5rem' }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Call for urgent leaks
              </a>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', marginTop: '1rem' }}>
              We aim to contact you within 2 working hours.
            </p>
          </div>
        </div>
      </section>

      {/* TRUST LAYER */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="text-center mb-4">Local homeowners trust this service</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
              {testimonials.map((t, i) => (
                <div key={i} style={{
                  background: 'var(--bg-alt)', border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)', padding: '1.5rem'
                }}>
                  <p style={{ margin: '0 0 1rem', fontStyle: 'italic' }}>"{t.text}"</p>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}>— {t.name}, {t.area}</p>
                </div>
              ))}
            </div>

            <div style={{ background: 'var(--bg-alt)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.5rem', textAlign: 'center' }}>
              <p style={{ margin: 0, fontSize: '1.05rem' }}>
                <strong>Unlike national lead sites, your request is not sent to multiple roofers.</strong>
              </p>
              <p style={{ margin: '0.5rem 0 0', color: 'var(--text-muted)' }}>
                We review locally and match you with one suitable professional who covers your village.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VILLAGE LIST */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="text-center mb-4">Villages We Cover in GL7</h2>
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Every village in our GL7 cluster is treated as a priority. Click your village to see local roofing considerations.
          </p>
          
          <div className="grid grid-2" style={{ maxWidth: '900px', margin: '0 auto' }}>
            {villages.map(v => (
              <div key={v.slug} className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <h3 style={{ margin: 0 }}>{v.name}</h3>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', background: 'var(--bg)', padding: '0.2rem 0.5rem', borderRadius: '4px', border: '1px solid var(--border)' }}>{v.postcode}</span>
                </div>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.95rem' }}>{v.summary}</p>
                <Link to={`/${v.slug}`} className="btn btn-primary btn-sm">
                  Request a Roofer in {v.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSE AGAIN */}
      <section className="section section-dark">
        <div className="container cta-section">
          <h2>Roof leaking in a GL7 village?</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '0.5rem' }}>
            Describe the issue and a local roofer will contact you directly.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
            We aim to contact you within 2 working hours.
          </p>
          <div className="cta-buttons">
            <Link to="/request" className="btn btn-primary btn-lg">Request a Roofer in GL7</Link>
            <a href={`tel:${CONFIG.phoneE164}`} className="btn btn-outline btn-lg" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.9)' }}>
              Call for urgent leaks
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
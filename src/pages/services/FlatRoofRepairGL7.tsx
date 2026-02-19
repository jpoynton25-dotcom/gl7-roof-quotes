import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';

const BASE_URL = 'https://gl7roofquotes.co.uk';

const faqs = [
  { q: "How long does a flat roof last?", a: "Traditional felt: 10-15 years. EPDM rubber: 25-30+ years. GRP fibreglass: 25-35 years. Material quality and installation quality significantly affect lifespan." },
  { q: "Can a flat roof be repaired or does it need replacing?", a: "Small, isolated problems can often be repaired. Multiple issues, widespread blistering, or age-related failure typically indicate replacement is more cost-effective." },
  { q: "What is the best flat roof material?", a: "EPDM rubber and GRP fibreglass are considered the best modern options. Both outperform traditional felt significantly in durability and lifespan." },
  { q: "Why do flat roofs fail?", a: "Common causes include UV damage, standing water, poor installation, lack of maintenance, and thermal movement causing splits and cracks." },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE_URL}/services` },
    { '@type': 'ListItem', position: 3, name: 'Flat Roof Repairs', item: `${BASE_URL}/services/flat-roof-repair-gl7` },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Flat Roof Repairs in GL7',
  description: 'Flat roof repairs and replacement across GL7. Garage roofs, extensions, porches. EPDM, felt, GRP fibreglass for Lechlade and surrounding villages.',
  areaServed: [{ '@type': 'City', name: 'Lechlade' }, { '@type': 'City', name: 'Fairford' }],
  serviceType: 'Flat Roof Repair',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function FlatRoofRepairGL7() {
  return (
    <Layout title="Flat Roof Repairs GL7 | Garage Roof Lechlade & Fairford" description="Flat roof repairs and replacement across GL7. Garage roofs, extensions, porches. EPDM, felt, GRP options. Lechlade, Fairford and surrounding villages.">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', marginBottom: '0.75rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <Link to="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Home</Link>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
              <span style={{ color: 'rgba(255,255,255,0.5)' }}>Services</span>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
              <span style={{ color: 'rgba(255,255,255,0.7)' }}>Flat Roof</span>
            </div>
            <h1>Flat Roof Repairs & Replacement in <span>GL7</span></h1>
            <p className="hero-sub">Garage roof leaking? Extension flat roof failing? Submit a request and we'll match you with a local GL7 flat roof specialist.</p>
            <div className="hero-trust">
              <span><span className="check">✓</span> EPDM rubber</span>
              <span><span className="check">✓</span> GRP fibreglass</span>
              <span><span className="check">✓</span> Felt roofs</span>
              <span><span className="check">✓</span> GL7 coverage</span>
            </div>
            <div className="hero-cta">
              <Link to="/request" className="btn btn-primary btn-lg">Request Flat Roof Quote</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content">
            <h2>Signs Your Flat Roof Needs Attention</h2>
            <p>You may need flat roof repairs if you notice:</p>
            <ul>
              <li>Water ponding that doesn't drain after 48 hours</li>
              <li>Visible blisters or bubbles on the roof surface</li>
              <li>Damp patches on the ceiling below</li>
              <li>Visible cracks or splits in the membrane</li>
              <li>Moss or algae growth indicating moisture retention</li>
              <li>Sagging or uneven sections</li>
              <li>Water dripping during or after rain</li>
              <li>UV damage — faded, brittle, or cracked surface</li>
            </ul>

            <div style={{ background: 'var(--primary)', color: '#fff', borderRadius: 'var(--radius)', padding: '1.5rem', textAlign: 'center', margin: '2rem 0' }}>
              <h3 style={{ margin: '0 0 0.5rem', color: '#fff' }}>Need flat roof repairs?</h3>
              <p style={{ margin: '0 0 1rem', opacity: 0.9 }}>Submit a request and a local GL7 professional will contact you.</p>
              <Link to="/request" className="btn" style={{ background: '#fff', color: 'var(--primary)', fontWeight: 700 }}>
                Request Flat Roof Quote
              </Link>
            </div>

            <h2>Flat Roof Services Across GL7</h2>
            <p>Many properties across Lechlade, Fairford, and surrounding villages have flat roof areas — typically garages, extensions, porches, and dormer windows. These surfaces present unique challenges compared to pitched roofs.</p>
            <p>Without natural drainage, flat roofs are vulnerable to standing water, UV degradation, and thermal movement. Modern materials have significantly improved flat roof reliability, but proper installation remains essential.</p>

            <h2>Flat Roof Materials Compared</h2>
            <p><strong>Felt (Bitumen)</strong> — Traditional material, 10-15 year lifespan. Most affordable option but least durable. Prone to blistering and UV damage.</p>
            <p><strong>EPDM Rubber</strong> — Single-ply membrane, 25-30+ year lifespan. Excellent durability and weather resistance. Seamless installation on most roofs. Good value for longevity.</p>
            <p><strong>GRP Fibreglass</strong> — Seamless finish, 25-35 year lifespan. Excellent for complex shapes. Very strong but requires skilled installation. Slightly more expensive than EPDM.</p>
            <p><strong>TPO</strong> — Modern single-ply membrane, environmentally friendly. Similar lifespan to EPDM. Growing in popularity.</p>

            <h2>Typical Flat Roof Costs in GL7</h2>
            <ul>
              <li><strong>Patch repair</strong> — £200–£500 depending on size and access</li>
              <li><strong>Garage roof replacement (single)</strong> — £800–£1,500</li>
              <li><strong>Garage roof replacement (double)</strong> — £1,200–£2,200</li>
              <li><strong>Small extension roof</strong> — £1,500–£3,000</li>
              <li><strong>Larger extension roof</strong> — £3,000–£5,000+</li>
            </ul>
            <p><em>Note: Costs vary significantly based on material choice, access, and current substrate condition.</em></p>

            <h2>Repair vs Replacement Decision</h2>
            <p>A professional can advise on whether repair or replacement is more appropriate. Consider replacement if:</p>
            <ul>
              <li>The roof is approaching or past its expected lifespan</li>
              <li>There are multiple leaks in different areas</li>
              <li>Previous repairs have been unsuccessful</li>
              <li>The felt is extensively blistered or degraded</li>
              <li>There are signs of structural damage beneath</li>
            </ul>

            <h2>Areas Covered</h2>
            <p>We connect homeowners with flat roof specialists across the GL7 postcode area, including Lechlade, Fairford, Kempsford, Southrop, Eastleach, Down Ampney, Quenington, Hatherop, Coln St Aldwyns, and Meysey Hampton.</p>

            <h2>Related Services</h2>
            <ul>
              <li><Link to="/services/roof-repairs-gl7">General Roof Repairs</Link> — For pitched roof issues</li>
              <li><Link to="/services/emergency-roof-leak-gl7">Emergency Roof Leaks</Link> — For urgent flat roof leaks</li>
              <li><Link to="/services/roof-replacement-gl7">Roof Replacement</Link> — For full roof replacement</li>
            </ul>

            <h2>Frequently Asked Questions</h2>
            {faqs.map((faq, i) => (
              <div key={i} style={{ marginBottom: '1rem' }}>
                <h4 style={{ marginBottom: '0.25rem' }}>{faq.q}</h4>
                <p style={{ color: 'var(--text-muted)', marginTop: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <h2>Request Flat Roof Repairs</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Submit your details and a local GL7 professional will contact you.
            </p>
            <Link to="/request" className="btn btn-primary btn-lg">Request Flat Roof Quote</Link>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container cta-section">
          <h2>Get Your Flat Roof Repaired</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)' }}>Professional flat roof solutions.</p>
          <div className="cta-buttons">
            <Link to="/request" className="btn btn-primary btn-lg">Get Help Now</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
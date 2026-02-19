import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';

const BASE_URL = 'https://gl7roofquotes.co.uk';

const faqs = [
  { q: "How long does lead flashing last?", a: "Properly installed lead flashing can last 50+ years. However, poor installation, thermal movement, or physical damage can reduce this significantly." },
  { q: "Can flashing be repaired or does it need replacement?", a: "Small cracks or gaps can sometimes be sealed temporarily, but proper lead work usually requires replacement sections for a permanent repair. Sealants are not a long-term solution." },
  { q: "Why is lead used for flashing?", a: "Lead is durable, malleable, and resistant to corrosion. It's been used for centuries and remains the material of choice for most UK roofing applications." },
  { q: "Do I need scaffolding for flashing repairs?", a: "For chimney flashing and most valley work, yes — proper access is essential for safety and quality work. Some edge flashings may be accessible from ladders with proper precautions." },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE_URL}/services` },
    { '@type': 'ListItem', position: 3, name: 'Lead Flashing Repairs', item: `${BASE_URL}/services/lead-flashing-repair-gl7` },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Lead Flashing Repairs in GL7',
  description: 'Lead flashing and lead valley repairs across GL7. Chimney flashing, valley gutters, and abutment flashings. Lechlade, Fairford and surrounding villages.',
  areaServed: [{ '@type': 'City', name: 'Lechlade' }, { '@type': 'City', name: 'Fairford' }],
  serviceType: 'Lead Flashing Repair',
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

export default function LeadFlashingRepairGL7() {
  return (
    <Layout title="Lead Flashing Repairs GL7 | Chimney Flashing Lechlade" description="Lead flashing repairs across GL7. Chimney flashing, valley repairs, and lead work for Lechlade, Fairford and surrounding villages. Local professionals.">
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
              <span style={{ color: 'rgba(255,255,255,0.7)' }}>Lead Flashing</span>
            </div>
            <h1>Lead Flashing & Valley Repairs in <span>GL7</span></h1>
            <p className="hero-sub">Chimney flashing failed? Valley leaking? Submit a request for lead work repairs and we'll match you with a local GL7 professional.</p>
            <div className="hero-trust">
              <span><span className="check">✓</span> Chimney flashing</span>
              <span><span className="check">✓</span> Valley gutters</span>
              <span><span className="check">✓</span> Lead expertise</span>
              <span><span className="check">✓</span> GL7 coverage</span>
            </div>
            <div className="hero-cta">
              <Link to="/request" className="btn btn-primary btn-lg">Request Lead Work Quote</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content">
            <h2>Signs Your Lead Flashing Needs Attention</h2>
            <p>You may need lead flashing repairs if you notice:</p>
            <ul>
              <li>Damp patches on walls near chimneys or roof junctions</li>
              <li>Water stains on ceilings close to external walls</li>
              <li>Visible gaps or cracks in lead work around chimneys</li>
              <li>Lead that appears loose, lifted, or torn</li>
              <li>White powdery deposits on lead (oxidation suggesting age)</li>
              <li>Previous repairs with mastic or sealant that has failed</li>
              <li>Valley gutters showing signs of splitting or cracking</li>
            </ul>

            <div style={{ background: 'var(--primary)', color: '#fff', borderRadius: 'var(--radius)', padding: '1.5rem', textAlign: 'center', margin: '2rem 0' }}>
              <h3 style={{ margin: '0 0 0.5rem', color: '#fff' }}>Need lead work repairs?</h3>
              <p style={{ margin: '0 0 1rem', opacity: 0.9 }}>Submit a request and a local GL7 professional will contact you.</p>
              <Link to="/request" className="btn" style={{ background: '#fff', color: 'var(--primary)', fontWeight: 700 }}>
                Request Lead Work Quote
              </Link>
            </div>

            <h2>Lead Flashing Services Across GL7</h2>
            <p>Lead work is a specialist skill. Many GL7 properties, particularly the period Cotswold stone homes common in Lechlade, Fairford, and surrounding villages, have extensive lead flashings that require proper maintenance and repair.</p>
            <p>Lead flashing creates a weatherproof seal where the roof meets walls, chimneys, and other structures. When this fails, water can penetrate into the property causing significant damage. Proper lead work is essential for the longevity of any roof.</p>

            <h2>Types of Lead Flashing Repairs</h2>
            <p><strong>Chimney flashings</strong> — The most common lead repair. Step flashing and apron flashing around chimney stacks deteriorates over time. GL7 properties often have original chimneys where this is a frequent issue.</p>
            <p><strong>Valley gutters</strong> — Lead-lined valleys between roof pitches are common on period properties. These can split, crack, or suffer from thermal movement over decades.</p>
            <p><strong>Abutment flashings</strong> — Where roofs meet walls, lead flashings (soakers and cover flashings) create the waterproof junction.</p>
            <p><strong>Ridge and hip flashings</strong> — Some roofs use lead at ridge and hip junctions, particularly on more complex roof shapes.</p>

            <h2>Why Lead Work Matters</h2>
            <p>Lead has been used for roofing for centuries because it's durable, malleable, and resistant to corrosion. However, it must be installed correctly:</p>
            <ul>
              <li>Lead needs to be coded correctly (Code 3, 4, 5, etc.) for each application</li>
              <li>Proper expansion joints are essential — lead expands and contracts significantly</li>
              <li>Fixings must be correct — over-fixing causes splitting</li>
              <li>Underlay should allow movement while supporting the lead</li>
            </ul>
            <div style={{ background: '#fef3c7', border: '1px solid #f59e0b', borderRadius: 'var(--radius)', padding: '1rem', margin: '1.5rem 0' }}>
              <p style={{ margin: 0, color: '#92400e' }}><strong>Important:</strong> Sealants and mastic are temporary fixes at best for lead flashing problems. They may stop a leak temporarily but the underlying issue remains. Proper lead work is the permanent solution.</p>
            </div>

            <h2>Typical Lead Work Costs in GL7</h2>
            <ul>
              <li><strong>Chimney flashing replacement</strong> — £400–£800 depending on chimney size and access</li>
              <li><strong>Valley lead replacement</strong> — £60–£100 per linear metre</li>
              <li><strong>Apron flashing repair</strong> — £200–£500 depending on length</li>
              <li><strong>Step flashing replacement</strong> — £30–£50 per step</li>
              <li><strong>Patch repair</strong> — £150–£300 for small areas (temporary solution)</li>
            </ul>
            <p><em>Note: These are guide prices. A professional will quote based on inspection.</em></p>

            <h2>Areas Covered</h2>
            <p>We connect homeowners across the GL7 postcode area with professionals experienced in lead work. The period properties common in Lechlade, Fairford, Kempsford, Southrop, Eastleach, Down Ampney, Quenington, Hatherop, Coln St Aldwyns, and Meysey Hampton often require specialist lead flashing expertise.</p>

            <h2>Related Services</h2>
            <ul>
              <li><Link to="/services/chimney-repairs-gl7">Chimney Repairs</Link> — Often needed alongside flashing work</li>
              <li><Link to="/services/roof-repairs-gl7">General Roof Repairs</Link> — For other roofing issues</li>
              <li><Link to="/services/roof-replacement-gl7">Roof Replacement</Link> — Consider if lead work is part of larger issues</li>
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
            <h2>Request Lead Work Repairs</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Submit your details and a local GL7 professional will contact you.
            </p>
            <Link to="/request" className="btn btn-primary btn-lg">Request Lead Work Quote</Link>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container cta-section">
          <h2>Get Your Lead Flashing Repaired</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)' }}>Professional lead work, properly done.</p>
          <div className="cta-buttons">
            <Link to="/request" className="btn btn-primary btn-lg">Get Help Now</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
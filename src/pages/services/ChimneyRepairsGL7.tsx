import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';

const BASE_URL = 'https://gl7roofquotes.co.uk';

const faqs = [
  { q: "How do I know if my chimney needs repointing?", a: "Look for crumbling or missing mortar between bricks, loose bricks, white deposits on the stack, or water ingress near the chimney breast inside your property." },
  { q: "Can a chimney be repaired or does it need removal?", a: "Most chimney problems can be repaired. Complete removal is only necessary for severely compromised stacks. A professional can assess the best approach." },
  { q: "What is flaunching?", a: "Flaunching is the mortar bed around chimney pots that sheds water. It deteriorates over time and is a common source of chimney leaks." },
  { q: "Do unused chimneys still need maintenance?", a: "Yes. Even unused chimneys are exposed to weather and can leak or become unstable. Proper capping and regular inspection are important." },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE_URL}/services` },
    { '@type': 'ListItem', position: 3, name: 'Chimney Repairs', item: `${BASE_URL}/services/chimney-repairs-gl7` },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Chimney Repairs in GL7',
  description: 'Chimney repairs, repointing, and flashing services across GL7. Chimney stack repairs for Lechlade, Fairford and surrounding villages.',
  areaServed: [{ '@type': 'City', name: 'Lechlade' }, { '@type': 'City', name: 'Fairford' }],
  serviceType: 'Chimney Repair',
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

export default function ChimneyRepairsGL7() {
  return (
    <Layout title="Chimney Repairs GL7 | Chimney Repointing Lechlade" description="Chimney repairs and repointing across GL7. Chimney flashing, flaunching, and stack repairs for Lechlade, Fairford and surrounding villages. Local professionals.">
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
              <span style={{ color: 'rgba(255,255,255,0.7)' }}>Chimney Repairs</span>
            </div>
            <h1>Chimney Repairs & Repointing in <span>GL7</span></h1>
            <p className="hero-sub">Chimney leaking? Stack needs attention? Submit a request for chimney repairs and we'll match you with a local GL7 professional.</p>
            <div className="hero-trust">
              <span><span className="check">✓</span> Repointing</span>
              <span><span className="check">✓</span> Flashing</span>
              <span><span className="check">✓</span> Flaunching</span>
              <span><span className="check">✓</span> GL7 coverage</span>
            </div>
            <div className="hero-cta">
              <Link to="/request" className="btn btn-primary btn-lg">Request Chimney Repair</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content">
            <h2>Signs Your Chimney Needs Repair</h2>
            <p>You may need chimney repairs if you notice:</p>
            <ul>
              <li>Damp patches on walls or ceilings near the chimney breast</li>
              <li>Crumbling or missing mortar between bricks on the stack</li>
              <li>Loose or unstable chimney pots</li>
              <li>Visible cracks in the chimney stack</li>
              <li>White staining (efflorescence) on the chimney exterior</li>
              <li>Debris from the chimney appearing in the fireplace or on the roof</li>
              <li>Water marks around the chimney area in the loft</li>
              <li>Failed or lifted flashing visible from ground level</li>
            </ul>

            <div style={{ background: 'var(--primary)', color: '#fff', borderRadius: 'var(--radius)', padding: '1.5rem', textAlign: 'center', margin: '2rem 0' }}>
              <h3 style={{ margin: '0 0 0.5rem', color: '#fff' }}>Need chimney repairs?</h3>
              <p style={{ margin: '0 0 1rem', opacity: 0.9 }}>Submit a request and a local GL7 professional will contact you.</p>
              <Link to="/request" className="btn" style={{ background: '#fff', color: 'var(--primary)', fontWeight: 700 }}>
                Request Chimney Repair
              </Link>
            </div>

            <h2>Chimney Repair Services Across GL7</h2>
            <p>Many properties in the GL7 area feature original chimney stacks, some dating back centuries. These traditional structures require specialist understanding and regular maintenance to prevent water ingress and structural issues.</p>
            <p>The period properties common in Lechlade, Fairford, and surrounding villages often have multiple flue chimneys built from Cotswold limestone or local brick. These materials weather differently than modern construction and require appropriate repair techniques and materials.</p>

            <h2>Common Chimney Problems in GL7</h2>
            <p><strong>Mortar deterioration</strong> — The exposed position of chimney stacks means they weather faster than other masonry. Repointing is often needed to prevent water ingress and structural issues.</p>
            <p><strong>Flashing failure</strong> — Lead flashing where the chimney meets the roof is a common leak source. This junction is critical for keeping water out.</p>
            <p><strong>Flaunching damage</strong> — The mortar bed around chimney pots cracks and crumbles with freeze-thaw cycles, allowing water into the stack.</p>
            <p><strong>Chimney pot damage</strong> — Cracked or loose pots can let in rain and become dangerous in high winds.</p>
            <p><strong>Spalling brickwork</strong> — Bricks can crack and spall due to moisture penetration and frost damage.</p>

            <h2>Typical Chimney Repair Costs</h2>
            <ul>
              <li><strong>Chimney repointing</strong> — £400–£800 depending on stack size and access</li>
              <li><strong>Flashing replacement</strong> — £400–£800 for full chimney flashing</li>
              <li><strong>Flaunching renewal</strong> — £200–£400 depending on pot count</li>
              <li><strong>Chimney pot replacement</strong> — £80–£150 per pot including fitting</li>
              <li><strong>Chimney capping</strong> — £150–£300 for unused chimneys</li>
              <li><strong>Partial stack rebuild</strong> — £800–£1,500 depending on extent</li>
            </ul>
            <p><em>Note: These are guide prices. Scaffolding may be additional.</em></p>

            <h2>Areas Covered</h2>
            <p>We connect homeowners with chimney repair professionals across the GL7 postcode area, including Lechlade, Fairford, Kempsford, Southrop, Eastleach, Down Ampney, Quenington, Hatherop, Coln St Aldwyns, and Meysey Hampton.</p>

            <h2>Related Services</h2>
            <ul>
              <li><Link to="/services/lead-flashing-repair-gl7">Lead Flashing Repairs</Link> — Often needed alongside chimney work</li>
              <li><Link to="/services/roof-repairs-gl7">General Roof Repairs</Link> — For other roofing issues</li>
              <li><Link to="/services/roof-replacement-gl7">Roof Replacement</Link> — Consider chimney work during re-roofing</li>
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
            <h2>Request Chimney Repairs</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Submit your details and a local GL7 professional will contact you.
            </p>
            <Link to="/request" className="btn btn-primary btn-lg">Request Chimney Repair</Link>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container cta-section">
          <h2>Get Your Chimney Repaired</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)' }}>Professional chimney repairs, properly done.</p>
          <div className="cta-buttons">
            <Link to="/request" className="btn btn-primary btn-lg">Get Help Now</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';

const BASE_URL = 'https://gl7roofquotes.co.uk';

const faqs = [
  { q: "How long do valley repairs last?", a: "Properly done valley repairs with quality materials should last 15-25 years. Lead-lined valleys can last 50+ years, while modern valley membranes typically last 15-20 years with proper installation." },
  { q: "Can I repair a valley myself?", a: "Valley repairs are complex and require specialist knowledge of waterproofing and lead work. DIY attempts often fail and can cause more damage. Professional installation is strongly recommended for this critical roof component." },
  { q: "What causes valley leaks?", a: "Common causes include cracked or split lead lining, deteriorated valley membranes, blocked debris accumulation, failed flashing at valley junctions, and thermal movement causing splits or gaps in the waterproofing." },
  { q: "Do valleys need regular maintenance?", a: "Yes, valleys should be inspected annually, especially after storms. Debris buildup, moss growth, and minor damage should be addressed promptly to prevent major leaks and structural damage." },
  { q: "Are valley repairs covered by insurance?", a: "Storm damage to valleys may be covered by home insurance, but gradual deterioration from age or lack of maintenance typically isn't. Check your policy and document any storm damage for potential claims." },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE_URL}/services` },
    { '@type': 'ListItem', position: 3, name: 'Valley Repairs GL7', item: `${BASE_URL}/services/valley-repairs-gl7` },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Valley Repairs in GL7',
  description: 'Valley gutter and lead-lined valley repairs across GL7. Serious roof leaks, water ingress, and valley damage. Lechlade, Fairford and surrounding villages.',
  areaServed: [{ '@type': 'City', name: 'Lechlade' }, { '@type': 'City', name: 'Fairford' }],
  serviceType: 'Valley Repair',
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

export default function ValleyRepairsGL7() {
  return (
    <Layout title="Valley Repairs GL7 | Lead Valley Gutter Leaks Lechlade" description="Valley gutter and lead-lined valley repairs across GL7. Serious roof leaks, water ingress, and valley damage. Professional valley work for Lechlade, Fairford and surrounding villages.">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', marginBottom: '0.75rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <Link to="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Home</Link>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
              <Link to="/areas" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Services</Link>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
              <span style={{ color: 'rgba(255,255,255,0.7)' }}>Valley Repairs</span>
            </div>
            <h1>Valley Repairs & Lead Valley Gutter Work in <span>GL7</span></h1>
            <p className="hero-sub">Serious roof leaks? Water ingress through valleys? Submit a request for valley repairs and we'll match you with a local GL7 professional.</p>
            <div className="hero-trust">
              <span><span className="check">✓</span> Serious leak specialists</span>
              <span><span className="check">✓</span> Lead work expertise</span>
              <span><span className="check">✓</span> GL7 local knowledge</span>
              <span><span className="check">✓</span> Structural protection</span>
            </div>
            <div className="hero-cta">
              <Link to="/request" className="btn btn-primary btn-lg">Request Valley Repair</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content">
            <h2>Signs Your Valleys Need Attention</h2>
            <p>You may need valley repairs if you notice:</p>
            <ul>
              <li>Water stains on ceilings in areas where roof slopes meet</li>
              <li>Damp patches appearing after heavy rain, particularly near internal corners</li>
              <li>Visible cracks or splits in lead lining along valley gutters</li>
              <li>Water running down walls near roof junctions</li>
              <li>Debris accumulation in valley gutters causing overflow</li>
              <li>Moss or algae growth in valleys indicating moisture retention</li>
              <li>Previous valley repairs that have failed or deteriorated</li>
              <li>Structural damage to rafters or roof timbers near valleys</li>
            </ul>

            <div style={{ background: 'var(--primary)', color: '#fff', borderRadius: 'var(--radius)', padding: '1.5rem', textAlign: 'center', margin: '2rem 0' }}>
              <h3 style={{ margin: '0 0 0.5rem', color: '#fff' }}>Serious water ingress through valleys?</h3>
              <p style={{ margin: '0 0 1rem', opacity: 0.9 }}>Submit a request and a local GL7 professional will assess the damage.</p>
              <Link to="/request" className="btn" style={{ background: '#fff', color: 'var(--primary)', fontWeight: 700 }}>
                Request Valley Repair
              </Link>
            </div>

            <h2>Why Valley Repairs Are Critical</h2>
            <p>Valleys are the most vulnerable parts of any roof. They form where two roof slopes meet, creating channels that collect and direct water runoff. When valleys fail, water can penetrate deep into the roof structure, causing serious damage to timbers, insulation, and interior finishes.</p>
            <p>In the GL7 area, valley problems are particularly common due to:</p>
            <ul>
              <li><strong>Heavy rainfall</strong> — Valleys must handle concentrated water flow from multiple roof sections</li>
              <li><strong>Debris accumulation</strong> — Leaves, twigs, and other debris can block valley gutters</li>
              <li><strong>Age</strong> — Many GL7 properties have original valley work that has deteriorated over decades</li>
              <li><strong>Thermal movement</strong> — Temperature changes cause expansion and contraction, stressing valley materials</li>
            </ul>

            <h2>Types of Valley Construction</h2>
            <p><strong>Lead-lined valleys</strong> — Traditional method using lead sheets to create a waterproof channel. Common on period properties in GL7. Can last 50+ years but requires specialist repair skills.</p>
            <p><strong>Valley membranes</strong> — Modern synthetic materials designed to channel water. Typically last 15-20 years but can fail prematurely if improperly installed.</p>
            <p><strong>Open valleys</strong> — Metal-lined channels that allow water to flow openly. Less common but used in some modern constructions.</p>
            <p><strong>Box valleys</strong> — Enclosed valleys that can be prone to blockage and require regular maintenance.</p>

            <h2>Common Valley Problems</h2>
            <p><strong>Lead valley failure</strong> — Lead can crack, split, or become dislodged over time. Thermal movement and physical damage are common causes.</p>
            <p><strong>Membrane deterioration</strong> — Modern valley membranes can become brittle, crack, or separate at seams, allowing water penetration.</p>
            <p><strong>Blockage and overflow</strong> — Debris accumulation prevents proper water flow, causing overflow and water ingress.</p>
            <p><strong>Flashing failure</strong> — Where valleys meet walls or other structures, flashing can fail, allowing water behind the valley system.</p>
            <p><strong>Structural damage</strong> — Prolonged water ingress can damage rafters, purlins, and other roof timbers.</p>

            <h2>Valley Repair Methods</h2>
            <p><strong>Lead valley repair</strong> — Involves removing damaged lead sections, cleaning the valley, and installing new lead with proper coding and expansion joints.</p>
            <p><strong>Valley membrane replacement</strong> — Complete removal of failed membrane and installation of new valley system with proper overlaps and sealing.</p>
            <p><strong>Valley cleaning and maintenance</strong> — Removal of debris, moss, and blockages to restore proper water flow.</p>
            <p><strong>Flashing repair</strong> — Repair or replacement of failed flashing at valley junctions with walls or other structures.</p>
            <p><strong>Structural repair</strong> — When water damage has affected roof timbers, structural repairs may be necessary before valley work can proceed.</p>

            <h2>The Importance of Proper Valley Work</h2>
            <p>Valley repairs require specialist knowledge and skills:</p>
            <ul>
              <li><strong>Water flow dynamics</strong> — Valleys must be designed to handle concentrated water flow without overflow</li>
              <li><strong>Material compatibility</strong> — Repair materials must be compatible with existing roof materials</li>
              <li><strong>Expansion and contraction</strong> — Materials must accommodate thermal movement without cracking</li>
              <li><strong>Sealing and overlaps</strong> — All joints and seams must be properly sealed to prevent water ingress</li>
              <li><strong>Access and safety</strong> — Valley work often requires working in awkward positions with proper safety measures</li>
            </ul>
            <div style={{ background: '#fef3c7', border: '1px solid #f59e0b', borderRadius: 'var(--radius)', padding: '1rem', margin: '1.5rem 0' }}>
              <p style={{ margin: 0, color: '#92400e' }}><strong>Important:</strong> Valley repairs are complex and require specialist skills. Poor workmanship can lead to recurring leaks and structural damage. Professional installation is essential for long-term performance.</p>
            </div>

            <h2>Valley Repairs and Storm Damage</h2>
            <p>Storm damage to valleys is particularly serious and requires prompt attention:</p>
            <ul>
              <li>High winds can dislodge or tear valley materials</li>
              <li>Heavy rain can cause immediate water ingress through damaged valleys</li>
              <li>Impact from debris can puncture or tear valley linings</li>
              <li>Thermal shock from rapid temperature changes can cause cracking</li>
            </ul>
            <p>After storm damage, immediate assessment and repair are crucial to prevent extensive water damage to the roof structure.</p>

            <h2>Typical Valley Repair Costs in GL7</h2>
            <ul>
              <li><strong>Lead valley repair</strong> — £60–£100 per linear metre including materials and labour</li>
              <li><strong>Valley membrane replacement</strong> — £40–£70 per linear metre</li>
              <li><strong>Valley cleaning and maintenance</strong> — £150–£300 depending on length and blockage severity</li>
              <li><strong>Flashing repair at valley junctions</strong> — £200–£500 depending on complexity</li>
              <li><strong>Storm damage valley repair</strong> — £500–£1500+ depending on extent of damage and access requirements</li>
              <li><strong>Structural repair before valley work</strong> — £1000–£3000+ depending on extent of timber damage</li>
            </ul>
            <p><em>Note: These are guide prices for serious work. A professional will provide an accurate quote after inspection.</em></p>

            <h2>Areas Covered</h2>
            <p>We connect homeowners across the GL7 postcode area with professionals experienced in valley work. The period properties common in Lechlade, Fairford, and surrounding villages often have complex roof shapes with multiple valleys that require specialist attention.</p>

            <h2>Related Services</h2>
            <ul>
              <li><Link to="/services/lead-flashing-repair-gl7">Lead Flashing Repairs</Link> — For lead work around chimneys and other junctions</li>
              <li><Link to="/services/storm-damage-gl7">Storm Damage Repairs</Link> — For comprehensive storm-related roof damage</li>
              <li><Link to="/services/roof-repairs-gl7">General Roof Repairs</Link> — For other roofing issues</li>
              <li><Link to="/services/roof-replacement-gl7">Roof Replacement</Link> — Consider if valley issues are part of larger problems</li>
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
            <h2>Request Valley Repair</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Submit your details and a local GL7 professional will contact you.
            </p>
            <Link to="/request" className="btn btn-primary btn-lg">Request Valley Repair</Link>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container cta-section">
          <h2>Get Your Valleys Repaired</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)' }}>Professional valley work, properly done.</p>
          <div className="cta-buttons">
            <Link to="/request" className="btn btn-primary btn-lg">Get Help Now</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
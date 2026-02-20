import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';

const BASE_URL = 'https://gl7roofquotes.co.uk';

const faqs = [
  { q: "How long does ridge tile re-bedding last?", a: "Properly done ridge tile re-bedding with the correct mortar mix should last 15-25 years. The lifespan depends on mortar quality, weather exposure, and proper installation technique." },
  { q: "Can I re-bed ridge tiles myself?", a: "While possible for DIY, ridge tile work is dangerous and requires proper safety equipment. Incorrect mortar mix or installation can lead to premature failure. Professional installation is recommended for safety and longevity." },
  { q: "What mortar should be used for ridge tiles?", a: "A lime-based mortar or a flexible mortar mix is recommended for ridge tiles. These allow for thermal movement without cracking. Pure cement mortar is too rigid and will crack over time." },
  { q: "Do ridge tiles need pointing?", a: "Yes, ridge tiles should be pointed with a weather-resistant mortar. The pointing should be slightly sloped to shed water away from the ridge line and prevent water ingress." },
  { q: "Are ridge tiles structural?", a: "Ridge tiles are primarily weatherproofing but also provide some structural stability to the roof ridge. They help prevent wind uplift and keep the roof structure sealed against the elements." },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE_URL}/services` },
    { '@type': 'ListItem', position: 3, name: 'Ridge Tile Repair GL7', item: `${BASE_URL}/services/ridge-tile-repair-gl7` },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Ridge Tile Repair in GL7',
  description: 'Ridge tile re-bedding, replacement, and repair across GL7. Storm damage, loose tiles, and mortar failure. Lechlade, Fairford and surrounding villages.',
  areaServed: [{ '@type': 'City', name: 'Lechlade' }, { '@type': 'City', name: 'Fairford' }],
  serviceType: 'Ridge Tile Repair',
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

export default function RidgeTileRepairGL7() {
  return (
    <Layout title="Ridge Tile Repair GL7 | Re-bedding & Replacement Lechlade" description="Ridge tile repair and re-bedding across GL7. Storm damage, loose tiles, and mortar failure. Professional ridge tile work for Lechlade, Fairford and surrounding villages.">
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
              <span style={{ color: 'rgba(255,255,255,0.7)' }}>Ridge Tile Repair</span>
            </div>
            <h1>Ridge Tile Repair & Re-bedding in <span>GL7</span></h1>
            <p className="hero-sub">Storm damage? Loose ridge tiles? Mortar failure? Submit a request for ridge tile repairs and we'll match you with a local GL7 professional.</p>
            <div className="hero-trust">
              <span><span className="check">✓</span> Storm damage specialists</span>
              <span><span className="check">✓</span> Proper mortar techniques</span>
              <span><span className="check">✓</span> GL7 local expertise</span>
              <span><span className="check">✓</span> Safety first</span>
            </div>
            <div className="hero-cta">
              <Link to="/request" className="btn btn-primary btn-lg">Request Ridge Tile Repair</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content">
            <h2>Signs Your Ridge Tiles Need Attention</h2>
            <p>You may need ridge tile repair if you notice:</p>
            <ul>
              <li>Ridge tiles that appear loose, lifted, or displaced</li>
              <li>Visible gaps or cracks in the mortar along the ridge line</li>
              <li>Water stains on ceilings near the roof ridge</li>
              <li>Damp patches appearing after heavy rain</li>
              <li>Debris or broken tiles found in gutters after storms</li>
              <li>Visible daylight through the ridge line from inside the loft</li>
              <li>Mortar that has completely washed away or crumbled</li>
              <li>Previous repairs with deteriorating pointing</li>
            </ul>

            <div style={{ background: 'var(--primary)', color: '#fff', borderRadius: 'var(--radius)', padding: '1.5rem', textAlign: 'center', margin: '2rem 0' }}>
              <h3 style={{ margin: '0 0 0.5rem', color: '#fff' }}>Storm damage to ridge tiles?</h3>
              <p style={{ margin: '0 0 1rem', opacity: 0.9 }}>Submit a request and a local GL7 professional will assess the damage.</p>
              <Link to="/request" className="btn" style={{ background: '#fff', color: 'var(--primary)', fontWeight: 700 }}>
                Request Ridge Tile Repair
              </Link>
            </div>

            <h2>Why Ridge Tile Repair Matters</h2>
            <p>Ridge tiles form the highest point of your roof and are crucial for weatherproofing. They sit on top of the roof ridge where two roof slopes meet, creating a watertight seal that prevents water ingress into the roof structure.</p>
            <p>In the GL7 area, ridge tiles are particularly vulnerable due to:</p>
            <ul>
              <li><strong>Exposure</strong> — The ridge line is the most exposed part of any roof, taking the full force of wind and weather</li>
              <li><strong>Thermal movement</strong> — Temperature changes cause expansion and contraction, stressing mortar joints</li>
              <li><strong>Storm damage</strong> — GL7's rural location means properties are often exposed to strong winds that can dislodge ridge tiles</li>
              <li><strong>Age</strong> — Many GL7 properties have original ridge work that has deteriorated over decades</li>
            </ul>

            <h2>Types of Ridge Tile Problems</h2>
            <p><strong>Mortar failure</strong> — The most common issue. Mortar washes out over time, especially on exposed ridges. This leaves tiles unsupported and prone to displacement.</p>
            <p><strong>Storm damage</strong> — High winds can completely dislodge ridge tiles or cause them to become loose. This is particularly common after severe weather events.</p>
            <p><strong>Improper installation</strong> — Some ridge tiles were installed with incorrect mortar mix or insufficient bedding, leading to premature failure.</p>
            <p><strong>Thermal cracking</strong> — Repeated expansion and contraction can cause mortar to crack, allowing water penetration and tile movement.</p>

            <h2>Ridge Tile Repair Methods</h2>
            <p><strong>Re-bedding</strong> — The most common repair. Involves removing loose tiles, cleaning the ridge line, applying fresh mortar, and repositioning tiles with proper bedding and pointing.</p>
            <p><strong>Replacement</strong> — When tiles are broken or severely damaged, they need complete replacement. Matching existing tiles is important for appearance.</p>
            <p><strong>Re-pointing</strong> — For minor issues where tiles are secure but pointing has deteriorated. Involves removing old pointing and applying fresh mortar.</p>
            <p><strong>Reinforcement</strong> — In some cases, additional fixings or reinforcement may be needed, especially on exposed ridges or after storm damage.</p>

            <h2>The Importance of Proper Mortar</h2>
            <p>Using the correct mortar mix is crucial for ridge tile longevity:</p>
            <ul>
              <li><strong>Lime-based mortar</strong> — Traditional and flexible, allowing for thermal movement without cracking</li>
              <li><strong>Flexible mortar mixes</strong> — Modern alternatives that provide flexibility and weather resistance</li>
              <li><strong>Proper ratios</strong> — Correct sand-to-cement ratios prevent cracking and ensure proper adhesion</li>
              <li><strong>Weather considerations</strong> — Mortar should be applied in suitable weather conditions for proper curing</li>
            </ul>
            <div style={{ background: '#fef3c7', border: '1px solid #f59e0b', borderRadius: 'var(--radius)', padding: '1rem', margin: '1.5rem 0' }}>
              <p style={{ margin: 0, color: '#92400e' }}><strong>Important:</strong> Pure cement mortar is too rigid for ridge tiles and will crack due to thermal movement. Flexible or lime-based mortars are essential for long-term performance.</p>
            </div>

            <h2>Storm Damage and Ridge Tiles</h2>
            <p>Storm damage to ridge tiles is common in the GL7 area, particularly after:</p>
            <ul>
              <li>High wind events that can completely dislodge ridge tiles</li>
              <li>Heavy rain that washes out existing mortar</li>
              <li>Temperature fluctuations that cause expansion and contraction stress</li>
              <li>Impact from debris blown by strong winds</li>
            </ul>
            <p>After storm damage, prompt repair is essential to prevent water ingress and further damage to the roof structure.</p>

            <h2>Typical Ridge Tile Repair Costs in GL7</h2>
            <ul>
              <li><strong>Re-bedding ridge tiles</strong> — £25–£40 per ridge tile including mortar and labour</li>
              <li><strong>Replacing broken ridge tiles</strong> — £35–£50 per tile including removal, replacement, and re-bedding</li>
              <li><strong>Re-pointing ridge line</strong> — £15–£25 per linear metre</li>
              <li><strong>Storm damage repair</strong> — £200–£600 depending on extent of damage and access requirements</li>
              <li><strong>Complete ridge re-bedding</strong> — £60–£100 per linear metre for full ridge line work</li>
            </ul>
            <p><em>Note: These are guide prices. A professional will provide an accurate quote after inspection.</em></p>

            <h2>Areas Covered</h2>
            <p>We connect homeowners across the GL7 postcode area with professionals experienced in ridge tile work. The exposed nature of many GL7 villages means ridge tiles are particularly vulnerable to weather damage, making regular maintenance and prompt repair essential.</p>

            <h2>Related Services</h2>
            <ul>
              <li><Link to="/services/storm-damage-gl7">Storm Damage Repairs</Link> — For comprehensive storm-related roof damage</li>
              <li><Link to="/services/roof-repairs-gl7">General Roof Repairs</Link> — For other roofing issues</li>
              <li><Link to="/services/roof-replacement-gl7">Roof Replacement</Link> — Consider if ridge issues are part of larger problems</li>
              <li><Link to="/services/valley-repairs-gl7">Valley Repairs</Link> — For valley gutter and lead work</li>
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
            <h2>Request Ridge Tile Repair</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Submit your details and a local GL7 professional will contact you.
            </p>
            <Link to="/request" className="btn btn-primary btn-lg">Request Ridge Tile Repair</Link>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container cta-section">
          <h2>Get Your Ridge Tiles Repaired</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)' }}>Professional ridge tile work, properly done.</p>
          <div className="cta-buttons">
            <Link to="/request" className="btn btn-primary btn-lg">Get Help Now</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
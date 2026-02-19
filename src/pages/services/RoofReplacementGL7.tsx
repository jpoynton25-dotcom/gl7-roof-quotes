import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';

const BASE_URL = 'https://gl7roofquotes.co.uk';

const faqs = [
  { q: "How do I know if I need a full roof replacement?", a: "Signs include multiple leaks in different areas, tiles slipping repeatedly, sagging roofline, felt visible or deteriorating, and frequent repair costs that are becoming uneconomic." },
  { q: "How long does a roof replacement take?", a: "A typical semi-detached house takes 3–5 days. Larger or more complex roofs may take longer. The professional will give you a clear timeline." },
  { q: "Will I need scaffolding?", a: "Yes, proper scaffolding is essential for safety and is typically included in the quote. This is not an area to cut corners." },
  { q: "Is roof replacement covered by insurance?", a: "Only if the replacement is needed due to insurable damage (like storm damage). Age-related replacement is typically not covered." },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE_URL}/services` },
    { '@type': 'ListItem', position: 3, name: 'Roof Replacement', item: `${BASE_URL}/services/roof-replacement-gl7` },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Roof Replacement in GL7',
  description: 'Full roof replacement and re-roofing services across GL7. New roofs for Lechlade, Fairford and surrounding villages. Local professionals.',
  areaServed: [{ '@type': 'City', name: 'Lechlade' }, { '@type': 'City', name: 'Fairford' }],
  serviceType: 'Roof Replacement',
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

export default function RoofReplacementGL7() {
  return (
    <Layout title="Roof Replacement in GL7 | New Roofs Lechlade & Fairford" description="Need a new roof in GL7? Full roof replacement and re-roofing services across Lechlade, Fairford and surrounding villages. Cost guide included. Local professionals.">
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
              <span style={{ color: 'rgba(255,255,255,0.7)' }}>Roof Replacement</span>
            </div>
            <h1>Roof Replacement in <span>GL7</span> (Lechlade & Surrounding Villages)</h1>
            <p className="hero-sub">Submit a request for roof replacement and we'll match you with a local professional who can provide a quote for your property.</p>
            <div className="hero-trust">
              <span><span className="check">✓</span> Full re-roofing</span>
              <span><span className="check">✓</span> Tile & slate</span>
              <span><span className="check">✓</span> No obligation quote</span>
              <span><span className="check">✓</span> GL7 coverage</span>
            </div>
            <div className="hero-cta">
              <Link to="/request" className="btn btn-primary btn-lg">Request a Replacement Quote</Link>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', marginTop: '1rem' }}>
              We aim to contact you within 2 working hours.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content">
            <h2>Is It Time for a Roof Replacement?</h2>
            <p>You may need to consider a full roof replacement if you're experiencing:</p>
            <ul>
              <li>Multiple leaks appearing in different areas of the roof</li>
              <li>Tiles that slip repeatedly despite being refixed</li>
              <li>Visible sagging or undulation in the roofline</li>
              <li>Felt underlay visible or deteriorating through gaps</li>
              <li>Light visible through the roof boards from inside the loft</li>
              <li>Increasing frequency of repairs that are becoming uneconomic</li>
              <li>Roof covering approaching end of expected lifespan (25–50 years depending on material)</li>
              <li>Nails corroding causing widespread tile slippage</li>
            </ul>

            <div style={{ background: 'var(--primary)', color: '#fff', borderRadius: 'var(--radius)', padding: '1.5rem', textAlign: 'center', margin: '2rem 0' }}>
              <h3 style={{ margin: '0 0 0.5rem', color: '#fff' }}>Considering a new roof?</h3>
              <p style={{ margin: '0 0 1rem', opacity: 0.9 }}>Submit a request and a local GL7 professional will contact you to discuss options.</p>
              <Link to="/request" className="btn" style={{ background: '#fff', color: 'var(--primary)', fontWeight: 700 }}>
                Request a Replacement Quote
              </Link>
            </div>

            <h2>Roof Replacement Services Across GL7</h2>
            <p>GL7 Roof Quotes connects homeowners across Lechlade, Fairford, Kempsford, Southrop, Eastleach, Down Ampney, Quenington, Hatherop, Coln St Aldwyns, and Meysey Hampton with roofing professionals who can carry out full roof replacements.</p>
            <p>A roof replacement is a significant investment, but sometimes it's the most cost-effective long-term solution. When repairs are becoming frequent and costs are mounting, a full re-roof can provide peace of mind and improve your property's value and energy efficiency.</p>

            <h2>Typical Roof Replacement Costs in GL7</h2>
            <p>Roof replacement costs vary significantly based on size, complexity, and materials. Here are typical ranges for the GL7 area:</p>
            <ul>
              <li><strong>Small terrace</strong> — £4,000–£6,500</li>
              <li><strong>Standard semi-detached</strong> — £6,000–£9,000</li>
              <li><strong>Detached family home</strong> — £8,000–£14,000</li>
              <li><strong>Large detached property</strong> — £12,000–£20,000+</li>
            </ul>
            <p><strong>Material choices affect cost:</strong></p>
            <ul>
              <li><strong>Concrete interlocking tiles</strong> — Most affordable option, good lifespan</li>
              <li><strong>Clay plain tiles</strong> — Mid-range, traditional appearance</li>
              <li><strong>Artificial slate</strong> — Good slate appearance at lower cost than natural</li>
              <li><strong>Natural slate</strong> — Premium option, longest lifespan, typically £15–£25 per slate</li>
              <li><strong>Stone slate (Cotswold)</strong> — For period properties, specialist sourcing required</li>
            </ul>
            <p><em>Note: These are guide prices. A professional will provide an accurate quote after inspection.</em></p>

            <h2>The Roof Replacement Process</h2>
            <ol>
              <li><strong>Initial inspection</strong> — The professional will assess the current roof structure and condition</li>
              <li><strong>Quote and specification</strong> — You'll receive a detailed quote including materials, labour, and scaffolding</li>
              <li><strong>Scaffolding erection</strong> — Proper access is essential for safety</li>
              <li><strong>Strip and inspect</strong> — Old covering removed, structure inspected for any issues</li>
              <li><strong>Repairs to structure</strong> — Any timber repairs or felting replacement as needed</li>
              <li><strong>New covering installed</strong> — Tiles or slate fitted according to specification</li>
              <li><strong>Flashing and detailing</strong> — Lead work around chimneys, valleys, and edges</li>
              <li><strong>Final inspection and clean-up</strong> — Ensuring everything is properly finished</li>
            </ol>

            <h2>Areas Covered</h2>
            <p>We connect homeowners with roof replacement services across the entire GL7 postcode area. Whether you're in a period Cotswold stone cottage in Lechlade or a modern home in Fairford, we can match you with a professional experienced in your type of property.</p>
            <p>The GL7 area presents unique considerations for roof replacement. Many properties are in conservation areas or have planning restrictions. Local professionals understand these requirements and can advise on appropriate materials and approaches.</p>

            <div style={{ background: 'var(--bg-alt)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.5rem', margin: '2rem 0' }}>
              <h3 style={{ marginTop: 0 }}>Repair vs Replacement</h3>
              <p style={{ marginBottom: '1rem' }}>Not sure if you need full replacement? A professional can assess whether repairs would be cost-effective or if replacement is the better long-term investment. There's no obligation to proceed with any quote.</p>
              <Link to="/services/roof-repairs-gl7" className="btn btn-primary">Roof Repairs Service</Link>
            </div>

            <h2>Related Services</h2>
            <ul>
              <li><Link to="/services/lead-flashing-repair-gl7">Lead Flashing Repairs</Link> — Often needed alongside replacement</li>
              <li><Link to="/services/chimney-repairs-gl7">Chimney Repairs</Link> — Consider while scaffolding is in place</li>
              <li><Link to="/services/flat-roof-repair-gl7">Flat Roof Repairs</Link> — For garage and extension roofs</li>
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
            <h2>Request a Roof Replacement Quote</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Submit your details and a local GL7 professional will contact you.
            </p>
            <Link to="/request" className="btn btn-primary btn-lg">Request a Replacement Quote</Link>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container cta-section">
          <h2>Get a Quote for Your New Roof</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)' }}>No obligation, professional advice.</p>
          <div className="cta-buttons">
            <Link to="/request" className="btn btn-primary btn-lg">Request Quote</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
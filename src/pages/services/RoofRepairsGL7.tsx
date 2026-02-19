import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';

const BASE_URL = 'https://gl7roofquotes.co.uk';

const faqs = [
  { q: "How quickly can a roofer contact me?", a: "We aim to review requests quickly during working hours (Mon–Sat, 8am–6pm). For emergencies, we recommend also calling directly." },
  { q: "Do I need to be home for an inspection?", a: "For an initial inspection, yes — but we can often assess the roof externally. The professional will discuss access when they contact you." },
  { q: "Is there any obligation to proceed?", a: "None at all. You're free to decline any quote. There's no pressure to proceed." },
  { q: "Do you cover all of GL7?", a: "Yes, we connect homeowners across Lechlade, Fairford, Kempsford, Southrop, Eastleach, Down Ampney, Quenington, Hatherop, Coln St Aldwyns, Meysey Hampton and surrounding areas." },
  { q: "What if my roof needs full replacement?", a: "The professional will assess and advise whether repair or replacement is more appropriate. You'll receive a clear explanation of options." },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE_URL}/services` },
    { '@type': 'ListItem', position: 3, name: 'Roof Repairs GL7', item: `${BASE_URL}/services/roof-repairs-gl7` },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Roof Repairs in GL7',
  description: 'Roof repairs across GL7 including Lechlade, Fairford and surrounding villages. Local roofing professionals. No shared leads, fast response.',
  areaServed: [
    { '@type': 'City', name: 'Lechlade' },
    { '@type': 'City', name: 'Fairford' },
    { '@type': 'City', name: 'Kempsford' },
  ],
  serviceType: 'Roof Repair',
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

export default function RoofRepairsGL7() {
  return (
    <Layout title="Roof Repairs in GL7 | Lechlade & Surrounding Villages" description="Need a roofer in GL7? Roof repairs across Lechlade, Fairford, Kempsford and surrounding villages. Local professionals, no shared leads. Fast response.">
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
              <span style={{ color: 'rgba(255,255,255,0.7)' }}>Roof Repairs</span>
            </div>
            <h1>Roof Repairs in <span>GL7</span> (Lechlade & Surrounding Villages)</h1>
            <p className="hero-sub">Submit a request for roof repairs and we'll match you with a suitable local roofing professional covering the GL7 area.</p>
            <div className="hero-trust">
              <span><span className="check">✓</span> No shared leads</span>
              <span><span className="check">✓</span> No obligation</span>
              <span><span className="check">✓</span> GL7 local focus</span>
              <span><span className="check">✓</span> Fast response</span>
            </div>
            <div className="hero-cta">
              <Link to="/request" className="btn btn-primary btn-lg">Request a Roofer</Link>
              <a href="tel:" className="btn btn-outline btn-lg">Call for urgent leaks</a>
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
            <h2>Is This the Right Service for You?</h2>
            <p>You may need a roof repair request if you've noticed any of these issues:</p>
            <ul>
              <li>Water stains appearing on ceilings or walls</li>
              <li>Missing, cracked or slipped roof tiles</li>
              <li>Damp patches near chimney breasts</li>
              <li>Water dripping into the loft during rain</li>
              <li>Moss or algae growth indicating moisture retention</li>
              <li>Gutters overflowing due to debris from roof deterioration</li>
              <li>Visible daylight through roof boards in the loft</li>
              <li>Increased heating bills (suggesting poor insulation from roof issues)</li>
            </ul>

            <div style={{ background: 'var(--primary)', color: '#fff', borderRadius: 'var(--radius)', padding: '1.5rem', textAlign: 'center', margin: '2rem 0' }}>
              <h3 style={{ margin: '0 0 0.5rem', color: '#fff' }}>Ready to submit a roof repair request?</h3>
              <p style={{ margin: '0 0 1rem', opacity: 0.9 }}>A local GL7 professional will contact you to discuss the issue.</p>
              <Link to="/request" className="btn" style={{ background: '#fff', color: 'var(--primary)', fontWeight: 700 }}>
                Submit a Roof Repair Request
              </Link>
            </div>

            <h2>Professional Roof Repairs Across GL7</h2>
            <p>GL7 Roof Quotes connects homeowners across the Gloucestershire GL7 postcode area with experienced, fully insured roofing professionals. Whether you're in Lechlade, Fairford, or any of the surrounding villages, we can match your roof repair request with a suitable local professional who understands the specific challenges of properties in this area.</p>
            <p>The GL7 postcode covers a predominantly rural area of the Cotswolds, characterised by limestone-built period properties alongside more modern developments. This mix of housing types means roof repair requirements vary significantly — from stone slate repairs on listed cottages to tile replacement on 1970s estates. Local knowledge matters when it comes to matching the right professional to your specific roof type.</p>

            <h2>Common Roofing Issues in GL7</h2>
            <p>The GL7 area includes many period properties built with Cotswold limestone, as well as modern developments. Common issues we see include:</p>
            <ul>
              <li><strong>Roof leaks</strong> — Water ingress through cracked tiles, failed flashing, or deteriorated valleys is the most common issue. Lechlade's position on the River Thames means properties here can experience damp conditions that accelerate roof deterioration.</li>
              <li><strong>Chimney problems</strong> — Many GL7 properties have original chimney stacks where mortar has weathered significantly. Leaking flashings at the chimney-roof junction are particularly common.</li>
              <li><strong>Missing or slipped tiles</strong> — Often caused by storms or age-related fixing failure. The exposed nature of many GL7 villages means roofs take the full force of weather.</li>
              <li><strong>Ridge tile failure</strong> — Mortar bedding washes out over time, particularly on older properties. Ridge tiles can become loose and eventually dislodge.</li>
              <li><strong>Flat roof issues</strong> — Blistering felt, standing water, and membrane failure are common on garage and extension roofs.</li>
              <li><strong>Guttering problems</strong> — Blockages, leaks, and fascia damage. Many period properties have gutters that are undersized for modern rainfall intensity.</li>
              <li><strong>Lead flashing failure</strong> — Particularly around chimneys and valleys. Lead work requires specialist skills and older lead can crack or creep over time.</li>
            </ul>

            <h2>Areas We Cover in GL7</h2>
            <p>We connect homeowners with roofing professionals covering the entire GL7 postcode area. Our network includes professionals familiar with properties across Lechlade, Fairford, Kempsford, Southrop, Eastleach, Down Ampney, Quenington, Hatherop, Coln St Aldwyns, and Meysey Hampton.</p>
            <p>Each of these villages has its own character and property types. Lechlade, for example, has a high proportion of Cotswold stone cottages near the town centre, while Fairford includes more modern developments. Understanding these local differences helps ensure your repair request is matched with someone who knows your type of property.</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', margin: '1.5rem 0' }}>
              <div style={{ background: 'var(--bg-alt)', padding: '1rem', borderRadius: 'var(--radius)' }}>
                <h4 style={{ marginBottom: '0.5rem', marginTop: 0 }}>Eastern GL7</h4>
                <ul style={{ margin: 0, paddingLeft: '1rem', fontSize: '0.9rem' }}>
                  <li><Link to="/lechlade-roof-repairs">Lechlade</Link></li>
                  <li><Link to="/kempsford-roof-repairs">Kempsford</Link></li>
                  <li><Link to="/down-ampney-roof-repairs">Down Ampney</Link></li>
                  <li><Link to="/southrop-roof-repairs">Southrop</Link></li>
                </ul>
              </div>
              <div style={{ background: 'var(--bg-alt)', padding: '1rem', borderRadius: 'var(--radius)' }}>
                <h4 style={{ marginBottom: '0.5rem', marginTop: 0 }}>Central GL7</h4>
                <ul style={{ margin: 0, paddingLeft: '1rem', fontSize: '0.9rem' }}>
                  <li><Link to="/fairford-roof-repairs">Fairford</Link></li>
                  <li><Link to="/eastleach-roof-repairs">Eastleach</Link></li>
                  <li><Link to="/quenington-roof-repairs">Quenington</Link></li>
                </ul>
              </div>
              <div style={{ background: 'var(--bg-alt)', padding: '1rem', borderRadius: 'var(--radius)' }}>
                <h4 style={{ marginBottom: '0.5rem', marginTop: 0 }}>Northern GL7</h4>
                <ul style={{ margin: 0, paddingLeft: '1rem', fontSize: '0.9rem' }}>
                  <li><Link to="/hatherop-roof-repairs">Hatherop</Link></li>
                  <li><Link to="/coln-st-aldwyns-roof-repairs">Coln St Aldwyns</Link></li>
                  <li><Link to="/meysey-hampton-roof-repairs">Meysey Hampton</Link></li>
                </ul>
              </div>
            </div>

            <h2>How the Request Process Works</h2>
            <p>We match you with a suitable local roofing professional — we don't send your details to multiple contractors competing for your business.</p>
            <ol>
              <li><strong>Submit your request</strong> — Describe the issue you've noticed. Adding photos helps significantly in matching your request with the right professional.</li>
              <li><strong>We match locally</strong> — Your request goes to one suitable professional who covers your specific area and has experience with your type of roof.</li>
              <li><strong>They contact you</strong> — The professional will call to discuss the issue and potentially arrange an inspection if needed.</li>
              <li><strong>You decide</strong> — There's no obligation to proceed with any quote. You're in control throughout.</li>
            </ol>

            <h2>Typical Roof Repair Costs in GL7</h2>
            <p>While every job is different and accurate quotes require inspection, here are typical cost ranges for common repairs in the GL7 area:</p>
            <ul>
              <li><strong>Tile replacement</strong> — From £80–£150 per tile including labour and materials</li>
              <li><strong>Chimney flashing repair</strong> — £200–£500 depending on extent and access</li>
              <li><strong>Ridge tile re-bedding</strong> — £25–£40 per ridge tile including mortar</li>
              <li><strong>Small leak repair</strong> — £150–£400 depending on access and cause</li>
              <li><strong>Gutter repair/replacement</strong> — £20–£40 per metre for replacement</li>
              <li><strong>Flat roof patch repair</strong> — £200–£500 depending on size</li>
              <li><strong>Lead flashing replacement</strong> — £50–£100 per linear metre</li>
            </ul>
            <p><em>Note: These are guide prices only to help you understand typical ranges. A professional will provide an accurate quote after inspection.</em></p>

            <div style={{ background: 'var(--bg-alt)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.5rem', margin: '2rem 0' }}>
              <h3 style={{ marginTop: 0 }}>Why Choose GL7 Roof Quotes?</h3>
              <ul style={{ marginBottom: 0 }}>
                <li>Your details aren't sent to multiple contractors who then compete for your business</li>
                <li>Local GL7 focus — professionals who genuinely know the area and property types</li>
                <li>No obligation to proceed with any quote — you're always in control</li>
                <li>Your details are never posted publicly or sold to third parties</li>
                <li>Working hours response — we review requests promptly during Mon–Sat, 8am–6pm</li>
              </ul>
            </div>

            <h2>Related Services</h2>
            <p>Depending on your issue, you may also want to consider:</p>
            <ul>
              <li><Link to="/services/emergency-roof-leak-gl7">Emergency Roof Leak Repairs</Link> — For active water ingress requiring urgent attention</li>
              <li><Link to="/services/roof-replacement-gl7">Roof Replacement</Link> — When repairs are no longer cost-effective</li>
              <li><Link to="/services/chimney-repairs-gl7">Chimney Repairs</Link> — For issues specifically around chimney stacks</li>
              <li><Link to="/services/lead-flashing-repair-gl7">Lead Flashing Repairs</Link> — For lead work around chimneys and valleys</li>
              <li><Link to="/services/flat-roof-repair-gl7">Flat Roof Repairs</Link> — For garage, extension and porch roofs</li>
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
            <h2>Submit a Roof Repair Request</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Describe your roof issue and a local GL7 professional will contact you.
            </p>
            <Link to="/request" className="btn btn-primary btn-lg">Request a Roofer in GL7</Link>
            <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Serving: Lechlade, Fairford, Kempsford, Southrop, Eastleach, Down Ampney, Quenington, Hatherop, Coln St Aldwyns, Meysey Hampton
            </p>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container cta-section">
          <h2>Get Your Roof Repaired</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)' }}>Your details are never posted publicly.</p>
          <div className="cta-buttons">
            <Link to="/request" className="btn btn-primary btn-lg">Get Help Now</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
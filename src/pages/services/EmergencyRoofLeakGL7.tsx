import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';

const BASE_URL = 'https://gl7roofquotes.co.uk';

const faqs = [
  { q: "How quickly can someone respond to an emergency?", a: "We review requests promptly during working hours (Mon–Sat, 8am–6pm). For active leaks, we recommend calling directly while also submitting a request." },
  { q: "Can you provide emergency tarping?", a: "Yes, professionals in our network can provide temporary weatherproofing while arranging permanent repairs." },
  { q: "Will my insurance cover emergency repairs?", a: "Most buildings insurance policies cover emergency roof repairs. Check your policy documents or contact your insurer." },
  { q: "What should I do while waiting for help?", a: "Move valuables away from the leak, place buckets to catch water, and if safe, take photos for insurance purposes." },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE_URL}/services` },
    { '@type': 'ListItem', position: 3, name: 'Emergency Roof Leak', item: `${BASE_URL}/services/emergency-roof-leak-gl7` },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Emergency Roof Leak Repair in GL7',
  description: 'Emergency roof leak repair across GL7. Fast response for active water ingress, emergency tarping, and urgent roof repairs in Lechlade and surrounding villages.',
  areaServed: [
    { '@type': 'PostalCode', 'postalCode': 'GL7', 'addressCountry': 'GB' }
  ],
  serviceType: 'Emergency Roof Repair',
  provider: {
    '@type': 'Organization',
    name: 'GL7 Roof Quotes',
    url: BASE_URL
  }
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

export default function EmergencyRoofLeakGL7() {
  return (
    <Layout title="Emergency Roof Leak Repair in GL7 (Lechlade & Nearby Villages)" description="Roof leaking now? Emergency roof leak repairs across GL7. Fast response for active water ingress. Local professionals. Submit request or call for urgent help.">
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
              <span style={{ color: 'rgba(255,255,255,0.7)' }}>Emergency Roof Leak</span>
            </div>
            <h1>Roof Leaking in <span>GL7</span> Right Now? Emergency Roof Repairs Across Lechlade & Surrounding Villages</h1>
            <p className="hero-sub">Submit your emergency request in under 60 seconds. We review and connect you with a local professional — fast.</p>
<div className="hero-trust">
  <span><span className="check">✓</span> Fast response</span>
  <span><span className="check">✓</span> Emergency tarping</span>
  <span><span className="check">✓</span> Same-day available</span>
  <span><span className="check">✓</span> GL7 coverage</span>
  <span><span className="check">✓</span> No shared leads — direct local response</span>
</div>
            <div className="hero-cta">
              <Link to="/request" className="btn btn-primary btn-lg">Submit Emergency Request</Link>
              <a href="tel:+447990101321" className="btn btn-outline btn-lg">Call for urgent leaks</a>
            </div>
<p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', marginTop: '1rem' }}>
  We aim to respond within 2 working hours (Mon–Sat, 8am–6pm).
</p>
<p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', marginTop: '0.5rem' }}>
  Active leak? Call now for fastest response.
</p>
<p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', marginTop: '0.5rem' }}>
  Ceiling dripping? Water running down walls? Storm damage tonight?
</p>
<p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', marginTop: '0.5rem' }}>
  We regularly handle emergency roof leaks across Lechlade, Fairford and surrounding GL7 villages — including storm damage, flashing failure and slipped tiles.
</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content">
            <div style={{ background: '#fef3c7', border: '2px solid #f59e0b', borderRadius: 'var(--radius)', padding: '1.5rem', margin: '0 0 2rem' }}>
              <h2 style={{ margin: '0 0 0.5rem', color: '#92400e' }}>⚡ Active Leak? Do This Now</h2>
              <ol style={{ margin: 0, paddingLeft: '1.5rem', color: '#92400e' }}>
                <li>Move furniture and valuables away from the water</li>
                <li>Place buckets or containers to catch dripping water</li>
                <li>If water is near electrics, turn off power at the consumer unit</li>
                <li><strong>Do not climb on the roof yourself</strong></li>
                <li>Submit an emergency request or call for urgent help</li>
              </ol>
            </div>

            <h2>Is This an Emergency?</h2>
            <p>You may need emergency roof leak assistance if:</p>
            <ul>
              <li>Water is actively dripping through your ceiling</li>
              <li>You can see water running down walls</li>
              <li>There's a visible hole or large gap in your roof</li>
              <li>A ceiling is bulging or showing signs of water weight</li>
              <li>Electrical fittings are near the leak area</li>
              <li>The leak started during or immediately after a storm</li>
              <li>Multiple areas of your home are affected</li>
            </ul>

            <div style={{ background: 'var(--primary)', color: '#fff', borderRadius: 'var(--radius)', padding: '1.5rem', textAlign: 'center', margin: '2rem 0' }}>
              <h3 style={{ margin: '0 0 0.5rem', color: '#fff' }}>Need emergency roof help now?</h3>
              <p style={{ margin: '0 0 1rem', opacity: 0.9 }}>Submit an emergency request and a local professional will contact you urgently.</p>
              <Link to="/request" className="btn" style={{ background: '#fff', color: 'var(--primary)', fontWeight: 700 }}>
                Submit Emergency Request
              </Link>
            </div>

            <h2>Emergency Roof Leak Services Across GL7</h2>
            <p>GL7 Roof Quotes connects homeowners across Lechlade, Fairford, and surrounding villages with roofing professionals who can respond to emergency situations. When water is coming through your ceiling, time is critical — even a small leak can cause significant damage to plaster, electrics, and structural timbers if left unaddressed.</p>
            <p>We understand that roof leaks don't always happen during convenient hours. That's why we encourage homeowners with active leaks to both submit a request and call directly for the fastest response. Our network includes professionals who understand the urgency of water ingress situations.</p>

            <h2>Common Causes of Emergency Roof Leaks</h2>
            <p>Emergency leaks in GL7 are often caused by:</p>
            <ul>
              <li><strong>Storm damage</strong> — High winds dislodging tiles, damaging flashing, or causing impact damage from falling branches</li>
              <li><strong>Sudden flashing failure</strong> — Lead or other flashing that has finally given way after years of gradual deterioration</li>
              <li><strong>Valley gutter overflow</strong> — Hidden valleys that have become blocked, causing water to back up and enter the property</li>
              <li><strong>Chimney stack failure</strong> — Deteriorated mortar or flashing that suddenly allows significant water ingress</li>
              <li><strong>Flat roof split</strong> — A split or tear in flat roof membrane that opens up during heavy rain</li>
              <li><strong>Ridge tile loss</strong> — Complete ridge tiles dislodging during high winds</li>
            </ul>

            <h2>Emergency Roof Repairs in GL7 Often Include:</h2>
<ul>
  <li>Ridge tile re-bedding after storm damage</li>
  <li>Lead flashing replacement</li>
  <li>Valley gutter repairs</li>
  <li>Flat roof membrane repairs</li>
  <li>Temporary weatherproofing</li>
</ul>
<p>Emergency attendance typically starts from £100–£200 depending on access.</p>

            <h2>What to Expect from Emergency Service</h2>
            <p>When you submit an emergency roof leak request:</p>
            <ol>
              <li><strong>Rapid assessment</strong> — The professional will ask questions to understand the severity and location of the leak</li>
              <li><strong>Temporary containment</strong> — If the leak is active, they may advise on immediate steps to minimise damage</li>
              <li><strong>Emergency visit</strong> — For serious leaks, they can often arrange same-day attendance</li>
              <li><strong>Temporary tarping</strong> — If permanent repair isn't immediately possible, the roof can be temporarily weatherproofed</li>
              <li><strong>Permanent repair quote</strong> — You'll receive a clear explanation and quote for permanent repairs</li>
            </ol>

<div style={{ background: '#fef3c7', border: '1px solid #f59e0b', borderRadius: 'var(--radius)', padding: '1.5rem', margin: '2rem 0' }}>
  <h3 style={{ margin: '0 0 0.5rem', color: '#92400e' }}>Recent Emergency Call-Out in GL7</h3>
  <p style={{ margin: 0, color: '#92400e' }}>
    A Fairford homeowner contacted us after high winds dislodged ridge tiles causing active water ingress. Temporary weatherproofing was applied the same day, with permanent repairs completed within 48 hours.
  </p>
</div>

            <h2>Areas Covered for Emergency Leaks</h2>
            <p>We connect homeowners with emergency roofing assistance across the GL7 postcode area, including Lechlade, Fairford, Kempsford, Southrop, Eastleach, Down Ampney, Quenington, Hatherop, Coln St Aldwyns, and Meysey Hampton.</p>
            <p>The rural nature of GL7 means properties here face specific challenges — exposed positions that take the full force of storms, older properties with ageing roof coverings, and distances that can affect response times. Local knowledge matters when responding to emergencies in these areas.</p>

<div style={{ background: 'var(--bg-alt)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.5rem', margin: '2rem 0' }}>
  <h3 style={{ marginTop: 0 }}>Insurance and Emergency Repairs</h3>
  <p style={{ marginBottom: '1rem' }}>Most buildings insurance policies cover emergency roof repairs. Keep receipts and take photos for your records. If the leak was caused by storm damage, this is typically covered. Your insurer may have preferred contractors, but you can usually use your own.</p>
</div>

<h2>Related Services</h2>
<ul>
  <li><Link to="/services/roof-repairs-gl7">General Roof Repairs</Link> — For non-emergency issues</li>
  <li><Link to="/services/storm-damage-gl7">Storm Damage Repairs</Link> — Post-storm assessments and repairs</li>
  <li><Link to="/services/lead-flashing-repair-gl7">Lead Flashing Repairs</Link> — Common source of leaks</li>
</ul>

<div style={{ background: 'var(--primary)', color: '#fff', borderRadius: 'var(--radius)', padding: '1.5rem', textAlign: 'center', margin: '2rem 0' }}>
  <h3 style={{ margin: '0 0 0.5rem', color: '#fff' }}>Roof leaking in GL7?</h3>
  <p style={{ margin: '0 0 1rem', opacity: 0.9 }}>Don't wait for more damage — request emergency help now.</p>
  <Link to="/request" className="btn" style={{ background: '#fff', color: 'var(--primary)', fontWeight: 700 }}>
    Submit Emergency Request
  </Link>
</div>

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
            <h2>Submit an Emergency Request</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Describe your emergency and a local GL7 professional will contact you urgently.
            </p>
            <Link to="/request" className="btn btn-primary btn-lg">Submit Emergency Request</Link>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container cta-section">
          <h2>Get Emergency Help Now</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)' }}>Active leaks need fast response.</p>
          <div className="cta-buttons">
            <Link to="/request" className="btn btn-primary btn-lg">Get Help Now</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { schemas } from '../utils/schema';

const villages = [
  { name: 'Lechlade', slug: 'lechlade-roof-repairs' },
  { name: 'Fairford', slug: 'fairford-roof-repairs' },
  { name: 'Kempsford', slug: 'kempsford-roof-repairs' },
  { name: 'Southrop', slug: 'southrop-roof-repairs' },
  { name: 'Eastleach', slug: 'eastleach-roof-repairs' },
  { name: 'Down Ampney', slug: 'down-ampney-roof-repairs' },
  { name: 'Quenington', slug: 'quenington-roof-repairs' },
  { name: 'Hatherop', slug: 'hatherop-roof-repairs' },
  { name: 'Coln St Aldwyns', slug: 'coln-st-aldwyns-roof-repairs' },
  { name: 'Meysey Hampton', slug: 'meysey-hampton-roof-repairs' },
];

// Task 4: Testimonials - local homeowners trust this service
const testimonials = [
  { text: "Quick response and clear advice. Leak stopped the same day.", name: "S.H.", area: "Lechlade" },
  { text: "No chasing around. One call back and the inspection was booked.", name: "M.T.", area: "Fairford" },
  { text: "Explained the problem with photos and gave a fair quote.", name: "J.P.", area: "Kempsford" },
  { text: "A local roofer called within an hour. Professional and helpful.", name: "R.W.", area: "Southrop" },
  { text: "Submitted my request and had someone round the next day.", name: "A.L.", area: "Hatherop" },
];

export default function Home() {
  const issues = [
    { title: "Roof leak after rain", desc: "Water coming through when it rains" },
    { title: "Chimney flashing problems", desc: "Leaks around chimney area" },
    { title: "Slipped or missing tiles", desc: "Visible gaps or displaced tiles" },
    { title: "Storm damage", desc: "Damage from high winds or weather" },
    { title: "Gutter / valley overflow", desc: "Water not draining properly" },
    { title: "Flat roof problems", desc: "Pooling, blistering or felt deterioration" },
  ];

  const steps = [
    { num: 1, title: "Tell us what's wrong", desc: "Describe your roofing issue in a few simple steps" },
    { num: 2, title: "Add postcode & photos", desc: "Help roofers understand the problem faster" },
    { num: 3, title: "We review locally", desc: "We review your request locally and match it with a suitable roofing professional covering your area." },
    { num: 4, title: "A local roofer contacts you", desc: "To quote or arrange a visit" },
  ];

  // Task 9: Specific homepage meta description
  const homeDescription = "GL7 Roof Quotes helps homeowners request roof repairs in Lechlade, Fairford and nearby GL7 villages. Submit your roof issue in under a minute. No shared leads. Local response.";

  return (
    <Layout description={homeDescription}>
      {/* Hero - Task 2: Updated H1 + subline */}
      <section className="hero">
        <div className="container">
          <div className="hero-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            {/* Task 2: SEO-optimized H1 */}
            <h1>Roof Repair & Emergency Roofing in <span>Lechlade (GL7)</span></h1>
            <p className="hero-sub">Describe the issue in 60 seconds. A local roofer will contact you directly — no shared leads.</p>

            {/* Hero Image - Local roofing image */}
            <img 
              src="/lechlade-roofing-issue.jpeg" 
              alt="Roof repair in Lechlade GL7 - damaged roof tiles requiring repair"
              style={{ 
                maxWidth: '100%', 
                width: '100%', 
                maxHeight: '320px',
                height: 'auto',
                objectFit: 'cover',
                borderRadius: 'var(--radius)',
                margin: '1.5rem 0',
                boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
              }}
            />

            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', margin: '0.5rem 0 0' }}>
              Serving homeowners across Lechlade and surrounding GL7 villages.
            </p>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', margin: '0.25rem 0 0' }}>
              For urgent leaks or storm damage, request help now — fast local response available.
            </p>

            <div className="hero-trust">
              <span><span className="check">✓</span> No obligation</span>
              <span><span className="check">✓</span> Fast local response</span>
              <span><span className="check">✓</span> Photo upload optional</span>
              <span><span className="check">✓</span> Your request isn't posted publicly</span>
            </div>

            {/* Task 2: Updated CTA buttons */}
            <div className="hero-cta">
              <Link to="/request" className="btn btn-primary btn-lg">Get Help Now</Link>
              <Link to="/roof-leak-help" className="btn btn-outline btn-lg">Emergency Leak Help</Link>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', marginTop: '1rem' }}>
              We aim to contact you within 2 working hours.
            </p>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.5rem', maxWidth: '500px', margin: '0.5rem auto 0' }}>
              Unlike national lead sites, your request is not sent to multiple roofers.
            </p>
          </div>
        </div>
      </section>

      {/* How it works - Task 5: Updated step 3 copy */}
      <section className="section">
        <div className="container">
          <h2 className="text-center mb-4">How it works</h2>
          <div className="steps">
            {steps.map(s => (
              <div key={s.num} className="step">
                <div className="step-icon">
                  <span className="step-number">{s.num}</span>
                  <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    {s.num === 1 && <><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></>}
                    {s.num === 2 && <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></>}
                    {s.num === 3 && <><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></>}
                    {s.num === 4 && <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>}
                  </svg>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
          {/* Task 5: Response expectation line */}
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginTop: '1.5rem', fontSize: '0.95rem' }}>
            We aim to review requests quickly during working hours.
          </p>
        </div>
      </section>

      {/* Common issues */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="text-center mb-4">Common roofing issues</h2>
          <div className="grid grid-3">
            {issues.map(issue => (
              <Link key={issue.title} to="/request" className="card" style={{ textDecoration: 'none' }}>
                <div className="card-icon">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                </div>
                <h3>{issue.title}</h3>
                <p>{issue.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Task 4: Testimonials / Social proof */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 className="text-center mb-4">Trusted by local homeowners</h2>
            <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '2rem' }}>
              Homeowners across GL7 villages have used this service to connect with local roofing professionals.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {testimonials.slice(0, 3).map((t, i) => (
                <div key={i} style={{
                  background: 'var(--bg-alt)', border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)', padding: '1.5rem'
                }}>
                  <p style={{ margin: '0 0 1rem', color: 'var(--text)', fontStyle: 'italic' }}>"{t.text}"</p>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    — {t.name}, {t.area}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GL7 Villages section */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="mb-4">Roof Repairs & Emergency Roofing Across GL7 Villages</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '0.75rem', fontSize: '1.05rem' }}>
              We prioritise roof repair requests across Lechlade and the surrounding GL7 village cluster. Our local focus means faster matching and professionals who genuinely know the area.
            </p>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '0.95rem' }}>
              Small villages are often underserved by national lead platforms. GL7 Roof Quotes is built specifically to serve GL7 communities — every request is matched to a professional who actually covers your village.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
              {villages.map(v => (
                <Link key={v.slug} to={`/${v.slug}`} className="btn btn-outline">
                  Roof Repairs in {v.name}
                </Link>
              ))}
            </div>
            <div style={{ marginTop: '1.5rem' }}>
              <Link to="/areas" className="btn btn-primary">View all GL7 areas</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why use - Emotional */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <h2 className="text-center mb-4">When your roof is leaking, you don't want to chase roofers</h2>
            
            <div style={{ background: 'var(--bg-alt)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.5rem', marginBottom: '2rem', textAlign: 'center' }}>
              <p style={{ margin: 0, fontSize: '1.05rem' }}>
                <strong>Unlike Bark, Checkatrade or Rated People — we don't sell your details to 5 different contractors.</strong>
              </p>
              <p style={{ margin: '0.5rem 0 0', color: 'var(--text-muted)' }}>
                Your request goes to one suitable local professional. No spam calls. No pressure.
              </p>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, maxWidth: '480px', margin: '0 auto' }}>
              <li style={{ padding: '0.75rem 0', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ color: 'var(--primary)', fontWeight: 700 }}>✓</span>
                No need to call around — we match you
              </li>
              <li style={{ padding: '0.75rem 0', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ color: 'var(--primary)', fontWeight: 700 }}>✓</span>
                One call back, not five
              </li>
              <li style={{ padding: '0.75rem 0', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ color: 'var(--primary)', fontWeight: 700 }}>✓</span>
                Local focus — GL7 priority
              </li>
              <li style={{ padding: '0.75rem 0', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ color: 'var(--primary)', fontWeight: 700 }}>✓</span>
                No obligation, no pressure
              </li>
              <li style={{ padding: '0.75rem 0', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ color: 'var(--primary)', fontWeight: 700 }}>✓</span>
                Your details stay private
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Trusted local professionals */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '1rem' }}>Trusted local roofing professionals</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', margin: 0 }}>
              We connect homeowners with experienced, fully insured roofers serving Lechlade and surrounding villages. All professionals contacted through our platform operate locally within GL7 and nearby areas.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-dark">
        <div className="container cta-section">
          <h2>Start your roof request now</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '0.35rem' }}>
            Your details are never posted publicly.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
            We aim to review requests quickly during working hours.
          </p>
          <div className="cta-buttons">
            <Link to="/request" className="btn btn-primary btn-lg">Get Help Now</Link>
          </div>
        </div>
      </section>

      {/* Schema markup - Safe rendering */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.home) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.localBusiness) }} />
    </Layout>
  );
}
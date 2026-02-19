import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const BASE_URL = 'https://gl7roofquotes.co.uk';

const steps = [
  { num: 1, title: "Tell us what's wrong", desc: "Use our simple form to describe your roofing issue. Select the type of problem, how urgent it is, and your property type. Takes about 60 seconds." },
  { num: 2, title: "Add your postcode & photos", desc: "Enter your postcode so we can match you with a local professional. Photos are optional but help roofers understand the issue faster." },
  { num: 3, title: "We review and match your request", desc: "Our team reviews your request during working hours. We match you with a suitable local roofing professional based on your location and issue." },
  { num: 4, title: "A local roofer contacts you", desc: "A roofing professional will contact you to discuss the issue, provide a quote, or arrange a visit. You choose whether to proceed." },
];

const principles = [
  { title: "Save time", desc: "No need to contact multiple roofers individually" },
  { title: "No obligation", desc: "Free to submit, free to decline any quote" },
  { title: "Local focus", desc: "Priority given to GL7 and nearby postcodes" },
  { title: "No public posting", desc: "Your details are not posted publicly" },
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Submit a Roof Repair Request in GL7',
  description: 'How GL7 Roof Quotes connects GL7 homeowners with suitable local roofing professionals. Simple, fast, no obligation.',
  totalTime: 'PT1M',
  step: steps.map(s => ({
    '@type': 'HowToStep',
    position: s.num,
    name: s.title,
    text: s.desc,
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'How It Works', item: `${BASE_URL}/how-it-works` },
  ],
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'How Roof Repair Requests Work | GL7 Roof Quotes',
  description: 'Learn how GL7 Roof Quotes connects homeowners in Lechlade and surrounding GL7 villages with suitable local roofing professionals. Simple, fast, no obligation.',
  url: `${BASE_URL}/how-it-works`,
  isPartOf: { '@type': 'WebSite', url: BASE_URL, name: 'GL7 Roof Quotes' },
};

export default function HowItWorks() {
  return (
    <Layout title="How Roof Repair Requests Work" description="Learn how GL7 Roof Quotes connects homeowners in Lechlade and surrounding GL7 villages with suitable local roofing professionals. Simple, fast, no obligation.">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      <section className="page-header">
        <div className="container">
          <h1>How it <span>works</span></h1>
          <p>A simple, structured process to get roofing help</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content">
            {steps.map(s => (
              <div key={s.num} style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem', alignItems: 'flex-start' }}>
                <div style={{
                  width: '48px', height: '48px', background: 'var(--primary)', color: '#fff',
                  borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.25rem', fontWeight: 700, flexShrink: 0
                }}>
                  {s.num}
                </div>
                <div>
                  <h3 style={{ marginTop: 0 }}>{s.title}</h3>
                  <p className="text-muted mb-0">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="text-center mb-4">Our principles</h2>
          <div className="grid grid-4">
            {principles.map(p => (
              <div key={p.title} className="card">
                <h3 style={{ marginTop: 0 }}>{p.title}</h3>
                <p className="mb-0">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cta-section">
          <h2>Ready to start?</h2>
          <p>Submit your request in under a minute</p>
          <Link to="/request" className="btn btn-primary btn-lg">Start request</Link>
        </div>
      </section>
    </Layout>
  );
}

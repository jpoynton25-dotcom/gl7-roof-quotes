import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const BASE_URL = 'https://gl7roofquotes.co.uk';

const steps = [
  { title: "Move valuables away", desc: "If water is dripping, move furniture, electronics and valuables away from the affected area." },
  { title: "Catch the water", desc: "Place buckets, bowls or towels under drips to catch water and prevent damage to floors." },
  { title: "Avoid electrics", desc: "Keep away from any electrical fittings, switches or sockets near the leak. If water is near electrics, turn off the power at the consumer unit." },
  { title: "Don't poke a bulging ceiling", desc: "If your ceiling is bulging from trapped water, don't poke it. Call for urgent advice — it could collapse." },
  { title: "Don't climb on the roof", desc: "Never attempt to climb onto your roof, especially in wet or windy conditions. Leave it to professionals." },
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'What to Do If Your Roof Is Leaking — Emergency Steps',
  description: 'Follow these steps immediately if your roof is leaking to minimise water damage and stay safe until a professional can help.',
  step: steps.map((s, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: s.title,
    text: s.desc,
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Emergency Roof Leak Help', item: `${BASE_URL}/roof-leak-help` },
  ],
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Emergency Roof Leak Help in GL7 | GL7 Roof Quotes',
  description: 'Roof leaking right now? Follow these steps to minimise damage, then submit a request to be matched with a local GL7 roofing professional — fast response during working hours.',
  url: `${BASE_URL}/roof-leak-help`,
  isPartOf: { '@type': 'WebSite', url: BASE_URL, name: 'GL7 Roof Quotes' },
  about: {
    '@type': 'Service',
    name: 'Emergency Roof Repair',
    areaServed: { '@type': 'PostalCode', postalCode: 'GL7', addressCountry: 'GB' },
  },
};

export default function RoofLeakHelp() {
  return (
    <Layout title="Emergency Roof Leak Help in GL7" description="Roof leaking right now? Follow these steps to minimise damage, then submit a request to be matched with a local GL7 roofing professional — fast response during working hours.">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      <section className="page-header">
        <div className="container">
          <h1>Roof leak <span>emergency help</span></h1>
          <p>What to do right now if your roof is leaking</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content">
            <h2>What to do if your roof is leaking</h2>
            <p>If you've discovered a roof leak, follow these steps to minimise damage and stay safe:</p>

            {steps.map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{
                  width: '32px', height: '32px', background: 'var(--primary)', color: '#fff',
                  borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.875rem', fontWeight: 700, flexShrink: 0
                }}>
                  {i + 1}
                </div>
                <div>
                  <h3 style={{ marginTop: 0, marginBottom: '0.25rem' }}>{s.title}</h3>
                  <p className="text-muted mb-0">{s.desc}</p>
                </div>
              </div>
            ))}

            <h2>Get professional help</h2>
            <p>The sooner a professional can inspect your roof, the better. Submit a request now and a local roofer may contact you to arrange a visit.</p>

            <div className="cta-buttons" style={{ marginTop: '2rem' }}>
              <Link to="/request" className="btn btn-primary btn-lg">Start roof request</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container cta-section">
          <h2>Need urgent help?</h2>
          <p>We prioritise emergency requests</p>
          <Link to="/request" className="btn btn-primary btn-lg">Submit emergency request</Link>
        </div>
      </section>
    </Layout>
  );
}

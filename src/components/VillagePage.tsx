import { Link } from 'react-router-dom';
import Layout from './Layout';
import CONFIG from '../config';

// Task 4: Compact testimonials for village pages
const villageTestimonials = [
  { text: "Quick response and clear advice.", name: "S.H.", area: "Lechlade" },
  { text: "One call back and the inspection was booked.", name: "M.T.", area: "Fairford" },
];

export interface NearbyVillage {
  name: string;
  slug: string;
}

export interface VillageData {
  village: string;
  slug: string;
  postcode: string;
  titleTag: string;      // Just the keyword part — Layout adds "| GL7 Roof Quotes" automatically
  metaDesc: string;
  ogDesc: string;
  h1: string;
  intro: string;
  localContext: string;
  urgencyText: string;
  searchTerms: string[]; // 4 unique search phrases per village
  commonIssues: { issue: string; detail: string }[];
  midContent: string;
  closingContent: string;
  nearby: NearbyVillage[];
}

export default function VillagePage({ data }: { data: VillageData }) {
  const baseUrl = 'https://gl7roofquotes.co.uk';
  const pageUrl = `${baseUrl}/${data.slug}`;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Areas', item: `${baseUrl}/areas` },
      { '@type': 'ListItem', position: 3, name: `Roof Repairs in ${data.village}`, item: pageUrl },
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'GL7 Roof Quotes',
    description: `Roof repair request platform serving ${data.village} and the wider GL7 area.`,
    url: pageUrl,
    areaServed: [
      { '@type': 'City', name: data.village },
      { '@type': 'PostalCode', postalCode: data.postcode },
    ],
    email: CONFIG.email || undefined,
  };

  // FAQ Schema for village pages - helps Google understand page content
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `How do I request a roofer in ${data.village}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Submit a roof repair request through our online form. Describe the issue, provide your ${data.postcode} postcode, and we'll match you with a suitable local roofing professional covering ${data.village}. No shared leads, no obligation.`,
        },
      },
      {
        '@type': 'Question',
        name: `What roofing issues are common in ${data.village}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Common issues in ${data.village} (${data.postcode}) include: ${data.commonIssues.slice(0, 3).map(i => i.issue).join(', ')}. Traditional Cotswold stone properties require specialist repair approaches.`,
        },
      },
      {
        '@type': 'Question',
        name: `Is there a cost for using GL7 Roof Quotes?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, our platform is free to use for homeowners. Submit a request, get matched with a local professional, and receive a quote with no obligation.',
        },
      },
    ],
  };

  // Service schema for the page
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Roof Repairs in ${data.village}`,
    description: data.metaDesc,
    provider: {
      '@type': 'LocalBusiness',
      name: 'GL7 Roof Quotes',
    },
    areaServed: {
      '@type': 'Place',
      name: data.village,
    },
    serviceType: 'Roof Repair',
  };

  return (
    // titleTag is the keyword portion only — Layout appends "| GL7 Roof Quotes"
    <Layout title={data.titleTag} description={data.metaDesc}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* ── HERO ── */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            {/* Breadcrumb trail */}
            <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', marginBottom: '0.75rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <Link to="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Home</Link>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
              <Link to="/areas" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Areas</Link>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
              <span style={{ color: 'rgba(255,255,255,0.7)' }}>{data.village}</span>
            </div>

            <h1>{data.h1}</h1>
            <p className="hero-sub">{data.urgencyText}</p>

            {/* Improvement 4: Geo reinforcement */}
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)', margin: '0.5rem 0 0' }}>
              {data.village} falls within the {data.postcode} postcode district — our platform prioritises roofing requests within this area.
            </p>

            <div className="hero-trust">
              <span><span className="check">✓</span> No shared leads</span>
              <span><span className="check">✓</span> No obligation</span>
              <span><span className="check">✓</span> GL7 local focus</span>
              <span><span className="check">✓</span> Fast response during working hours</span>
            </div>

            <div className="hero-cta">
              <Link to="/request" className="btn btn-primary btn-lg">
                Request a Roofer in {data.village}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRO CONTENT ── */}
      <section className="section">
        <div className="container">
          <div className="content-prose" style={{ maxWidth: '780px', margin: '0 auto' }}>
            <h2>Roof Repairs in {data.village} ({data.postcode})</h2>
            <div dangerouslySetInnerHTML={{ __html: data.intro }} />

            {/* Improvement 2: Keyword reinforcement block */}
            <div style={{ background: 'var(--bg-alt, #f8f8f6)', border: '1px solid var(--border)', borderRadius: '8px', padding: '1.25rem 1.5rem', margin: '1.5rem 0' }}>
              <p style={{ fontWeight: 600, marginBottom: '0.75rem', fontSize: '0.95rem' }}>If you are searching for:</p>
              <ul style={{ margin: 0, paddingLeft: '1.25rem', lineHeight: '2' }}>
                {data.searchTerms.map((term, i) => (
                  <li key={i} style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>{term}</li>
                ))}
              </ul>
              <p style={{ marginTop: '0.75rem', marginBottom: 0, fontSize: '0.95rem' }}>
                Submitting a structured request through GL7 Roof Quotes connects you with a suitable local professional covering {data.village} and nearby GL7 villages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMON ISSUES ── */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="text-center mb-4">Common Roofing Issues in {data.village}</h2>
          <div className="grid grid-3">
            {data.commonIssues.map((item) => (
              <Link key={item.issue} to="/request" className="card" style={{ textDecoration: 'none' }}>
                <div className="card-icon">
                  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <h3>{item.issue}</h3>
                <p>{item.detail}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCAL CONTEXT — includes mid-article nearby links (Improvement 5) ── */}
      <section className="section">
        <div className="container">
          <div className="content-prose" style={{ maxWidth: '780px', margin: '0 auto' }}>
            <h2>Local Roofing Considerations in {data.village}</h2>
            <div dangerouslySetInnerHTML={{ __html: data.localContext }} />

            {/* Improvement 5: mid-article internal links to nearby villages */}
            <p style={{ marginTop: '1rem' }}>
              Similar roofing challenges are found across nearby GL7 villages. Homeowners in{' '}
              {data.nearby.map((v, i) => (
                <span key={v.slug}>
                  <Link to={`/${v.slug}`} style={{ color: 'var(--primary)' }}>{v.name}</Link>
                  {i < data.nearby.length - 1 ? ' and ' : ''}
                </span>
              ))}{' '}
              face comparable issues with traditional Cotswold stone construction and GL7 weather exposure.
            </p>
          </div>
        </div>
      </section>

      {/* ── MID-PAGE CTA ── */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ maxWidth: '620px', margin: '0 auto', textAlign: 'center' }}>
            <h2>Roof leak in {data.village}? Request help today.</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Submit your roof repair request and we will match you with a suitable local roofing professional serving {data.village} and the GL7 area.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/request" className="btn btn-primary btn-lg">Request a Roofer in {data.village}</Link>
              <Link to="/how-it-works" className="btn btn-outline btn-lg">How it works</Link>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '1rem' }}>
              Your details are never posted publicly.
            </p>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section">
        <div className="container">
          <div className="content-prose" style={{ maxWidth: '780px', margin: '0 auto' }}>
            <h2>How the Request Process Works in {data.village}</h2>
            <div dangerouslySetInnerHTML={{ __html: data.midContent }} />
          </div>
        </div>
      </section>

      {/* ── NEARBY VILLAGES ── */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="text-center mb-4">Nearby GL7 Villages We Also Cover</h2>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {data.nearby.map((v) => (
              <Link key={v.slug} to={`/${v.slug}`} className="btn btn-outline">
                Roof Repairs in {v.name}
              </Link>
            ))}
            <Link to="/areas" className="btn btn-outline">View all GL7 areas</Link>
          </div>
        </div>
      </section>

      {/* Task 4: Compact testimonials */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <h3 style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Local homeowners trust this service</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
              {villageTestimonials.map((t, i) => (
                <div key={i} style={{
                  background: 'var(--bg-alt)', border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)', padding: '1rem 1.25rem', maxWidth: '300px'
                }}>
                  <p style={{ margin: '0 0 0.5rem', fontSize: '0.95rem', fontStyle: 'italic' }}>"{t.text}"</p>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>— {t.name}, {t.area}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CLOSING CONTENT ── */}
      <section className="section section-alt">
        <div className="container">
          <div className="content-prose" style={{ maxWidth: '780px', margin: '0 auto' }}>
            <h2>Why Submit Your Roof Request Through GL7 Roof Quotes?</h2>
            <div dangerouslySetInnerHTML={{ __html: data.closingContent }} />
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="section section-dark">
        <div className="container cta-section">
          <h2>Start Your Roof Repair Request in {data.village}</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '0.5rem' }}>
            Your details are never posted publicly.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
            We aim to review requests quickly during working hours.
          </p>
          <div className="cta-buttons">
            <Link to="/request" className="btn btn-primary btn-lg">Request a Roofer</Link>
            <Link to="/areas" className="btn btn-outline btn-lg" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.8)' }}>
              View all GL7 areas
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

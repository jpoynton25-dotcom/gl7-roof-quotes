import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import CONFIG from '../config';

const faqs = [
  { 
    q: "How does matching work?", 
    a: "When you submit a request, we review your details and match you with a suitable local roofing professional. The professional then contacts you to discuss the issue and potentially arrange a visit or quote." 
  },
  { 
    q: "Will I get multiple quotes?", 
    a: "We match your request to a suitable local roofer. Depending on availability, more than one professional may contact you, but we do not guarantee multiple quotes. You choose whether to proceed with any quote you receive." 
  },
  { 
    q: "Is it free?", 
    a: "Yes, submitting a request is completely free with no obligation. You only pay if you choose to accept a quote from a roofing professional." 
  },
  { 
    q: "Who will contact me?", 
    a: "A suitable local roofing professional will contact you. They will be someone from our network who covers your area and can help with your type of issue." 
  },
  { 
    q: "Is my request public?", 
    a: "No. Your details are not posted publicly anywhere. They are only shared with the roofing professional(s) we match you with." 
  },
  { 
    q: "How quickly will someone respond?", 
    a: "We aim to review requests quickly during working hours (Mon–Sat, 8am–6pm). Timing of actual contact depends on availability and urgency. For emergencies, we recommend also calling directly." 
  },
  { 
    q: "Do I have to accept a quote?", 
    a: "No obligation at all. You are free to decline any quote. There is no pressure to proceed." 
  },
];

const BASE_URL = 'https://gl7roofquotes.co.uk';

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  url: `${BASE_URL}/faq`,
  name: 'Frequently Asked Questions — GL7 Roof Quotes',
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.a,
    },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'FAQ', item: `${BASE_URL}/faq` },
  ],
};

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <Layout title="Frequently Asked Questions" description="Common questions about roof repair requests in GL7. How matching works, what to expect, and how we connect Lechlade homeowners with local roofing professionals.">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="page-header">
        <div className="container">
          <h1>Frequently asked <span>questions</span></h1>
          <p>Everything you need to know about how we work</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item">
                <button className={`faq-q ${open === i ? 'open' : ''}`} onClick={() => setOpen(open === i ? null : i)}>
                  {faq.q}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </button>
                <div className={`faq-a ${open === i ? 'open' : ''}`}>
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONVERSION CTA SECTION */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <h2>Still have questions?</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              Describe your roof issue and we'll contact you directly.
            </p>
            
            <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.5rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 700 }}>✓</span> No shared leads
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 700 }}>✓</span> No obligation
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 700 }}>✓</span> Local GL7 roofers
                </span>
              </div>
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                We aim to contact you within 2 working hours.
              </p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
              <Link to="/request" className="btn btn-primary btn-lg">Request a Roofer in GL7</Link>
              <a href="tel:" className="btn btn-outline btn-lg">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ marginRight: '0.5rem' }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Call for urgent leaks
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
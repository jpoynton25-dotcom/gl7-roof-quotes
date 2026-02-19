import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import CONFIG from '../config';

const BASE_URL = 'https://gl7roofquotes.co.uk';

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact GL7 Roof Quotes',
  description: 'Get in touch with GL7 Roof Quotes. We cover roof repair requests across Lechlade and the surrounding GL7 villages.',
  url: `${BASE_URL}/contact`,
  isPartOf: { '@type': 'WebSite', url: BASE_URL, name: 'GL7 Roof Quotes' },
  contactOption: 'TollFree',
  contactType: 'customer support',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: `${BASE_URL}/contact` },
  ],
};

// Testimonial
const testimonial = { text: "Quick response and clear advice. Leak stopped the same day.", name: "S.H.", area: "Lechlade" };

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fields, setFields] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch(CONFIG.formEndpoint, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify({
          source: 'Contact Form',
          name: fields.name,
          email: fields.email,
          description: fields.message,
          // fill remaining sheet columns with blanks
          mobile: '', postcode: '', issueType: '', urgency: '',
          propertyType: '', contactTime: '', photos: [], consent: true,
        }),
      });
    } catch { /* no-cors opaque — always treat as success */ }
    setLoading(false);
    setSent(true);
  };

  return (
    <Layout title="Contact Us" description="Get in touch with GL7 Roof Quotes. We cover roof repair requests across Lechlade and the surrounding GL7 villages.">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="page-header">
        <div className="container">
          <h1>Contact <span>us</span></h1>
          <p>Get in touch with our team</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            
            {/* PHONE + RESPONSE TIME - PROMINENT */}
            <div style={{ 
              background: 'var(--primary)', color: '#fff', 
              borderRadius: 'var(--radius)', padding: '2rem', 
              textAlign: 'center', marginBottom: '2rem' 
            }}>
              <h2 style={{ margin: '0 0 0.5rem', fontSize: '1.5rem' }}>Need urgent help?</h2>
              <p style={{ margin: '0 0 1rem', opacity: 0.9 }}>Call now or submit a request</p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                <a href="tel:" className="btn" style={{ background: '#fff', color: 'var(--primary)', fontWeight: 700 }}>
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ marginRight: '0.5rem' }}>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  Call for urgent leaks
                </a>
                <Link to="/request" className="btn" style={{ background: 'rgba(255,255,255,0.2)', color: '#fff', border: '2px solid #fff' }}>
                  Submit a request
                </Link>
              </div>
              
              <p style={{ margin: '1rem 0 0', fontSize: '0.9rem', opacity: 0.8 }}>
                We aim to contact you within 2 working hours.
              </p>
            </div>

            {/* TRUST BULLETS */}
            <div style={{ 
              display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem',
              marginBottom: '2rem', padding: '1rem', background: 'var(--bg-alt)', 
              borderRadius: 'var(--radius)', border: '1px solid var(--border)'
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--primary)', fontWeight: 700 }}>✓</span> No shared leads
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--primary)', fontWeight: 700 }}>✓</span> No obligation
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--primary)', fontWeight: 700 }}>✓</span> Local GL7 roofers
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--primary)', fontWeight: 700 }}>✓</span> Your details stay private
              </span>
            </div>

            {/* MINI TESTIMONIAL */}
            <div style={{ 
              background: 'var(--bg-alt)', border: '1px solid var(--border)', 
              borderRadius: 'var(--radius)', padding: '1rem 1.5rem', marginBottom: '2rem',
              display: 'flex', alignItems: 'center', gap: '1rem'
            }}>
              <div style={{ 
                minWidth: '48px', height: '48px', background: 'var(--primary)', 
                borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', fontWeight: 700, fontSize: '1.25rem'
              }}>
                "
              </div>
              <div>
                <p style={{ margin: 0, fontStyle: 'italic', fontSize: '0.95rem' }}>"{testimonial.text}"</p>
                <p style={{ margin: '0.25rem 0 0', fontSize: '0.85rem', color: 'var(--text-muted)' }}>— {testimonial.name}, {testimonial.area}</p>
              </div>
            </div>

            {/* GENERAL ENQUIRIES FORM */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ marginBottom: '0.5rem' }}>General Enquiries</h3>
              <p className="text-muted" style={{ fontSize: '0.9rem' }}>
                For non-urgent questions or if you prefer email. For roof repair requests, use the <Link to="/request">request form</Link> for faster response.
              </p>
            </div>

            {sent ? (
              <div style={{ textAlign: 'center', padding: '2rem', background: 'var(--bg-alt)', borderRadius: 'var(--radius)' }}>
                <p style={{ marginBottom: 0 }}>Thank you for your message. We'll be in touch within 2 working hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input className="form-input" required
                    value={fields.name}
                    onChange={e => setFields({ ...fields, name: e.target.value })} />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input className="form-input" type="email" required
                    value={fields.email}
                    onChange={e => setFields({ ...fields, email: e.target.value })} />
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea className="form-input form-textarea" required
                    value={fields.message}
                    onChange={e => setFields({ ...fields, message: e.target.value })} />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={loading}>
                  {loading ? 'Sending...' : 'Send message'}
                </button>
              </form>
            )}

            {/* OPERATOR INFO */}
            <p style={{ marginTop: '2rem', fontSize: '0.85rem', color: 'var(--text-muted)', textAlign: 'center' }}>
              Operated by {CONFIG.operator.name}, {CONFIG.operator.address}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
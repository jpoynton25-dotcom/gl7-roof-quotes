import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const BASE_URL = 'https://gl7roofquotes.co.uk';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Lechlade', item: `${BASE_URL}/lechlade-roof-repairs` },
    { '@type': 'ListItem', position: 3, name: 'Roof Inspections', item: `${BASE_URL}/lechlade-roof-inspections` },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Roof Inspections in Lechlade',
  description: 'Professional roof inspections and surveys for Lechlade homeowners. Pre-purchase surveys, condition reports, maintenance assessments. Local GL7 professionals.',
  areaServed: { '@type': 'City', name: 'Lechlade' },
  serviceType: 'Roof Inspection',
};

export default function LechladeRoofInspections() {
  return (
    <Layout title="Roof Inspections in Lechlade | Roof Surveys GL7" description="Need a roof inspection in Lechlade? Professional roof surveys, condition reports and pre-purchase inspections. Local GL7 professionals. No shared leads.">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', marginBottom: '0.75rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <Link to="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Home</Link>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
              <Link to="/lechlade-roof-repairs" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Lechlade</Link>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
              <span style={{ color: 'rgba(255,255,255,0.7)' }}>Roof Inspections</span>
            </div>
            <h1>Roof Inspections in <span>Lechlade (GL7)</span></h1>
            <p className="hero-sub">Need a roof survey? Buying a property in Lechlade? Submit your request and get matched with a local GL7 professional for a comprehensive roof inspection.</p>
            <div className="hero-trust">
              <span><span className="check">✓</span> Condition reports</span>
              <span><span className="check">✓</span> Pre-purchase surveys</span>
              <span><span className="check">✓</span> No shared leads</span>
              <span><span className="check">✓</span> GL7 local focus</span>
            </div>
            <div className="hero-cta">
              <Link to="/request" className="btn btn-primary btn-lg">Request Inspection</Link>
              <Link to="/lechlade-roof-repairs" className="btn btn-outline btn-lg">All Lechlade Services</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content">
            <h2>Roof Inspection Services in Lechlade</h2>
            <p>A professional roof inspection gives you peace of mind whether you're buying a property, concerned about an issue, or simply want to understand the condition of your roof. Lechlade's mix of period properties and modern homes means each roof presents different considerations.</p>
            
            <h3>When you might need a roof inspection</h3>
            <ul>
              <li><strong>Buying a property</strong> — A roof survey before purchase can reveal hidden issues and potential costs</li>
              <li><strong>After a storm</strong> — Even without visible damage, an inspection can identify problems early</li>
              <li><strong>Ageing roof</strong> — Older roofs benefit from periodic condition assessments</li>
              <li><strong>Selling your home</strong> — A pre-sale inspection can help with disclosure and pricing</li>
              <li><strong>Insurance purposes</strong> — Some insurers require roof condition reports</li>
              <li><strong>Visible concerns</strong> — If you've noticed damp patches, stains, or missing tiles</li>
            </ul>

            <h2>What a Roof Inspection Covers</h2>
            <p>A thorough roof inspection typically includes:</p>
            <ul>
              <li>Overall roof condition and remaining lifespan estimate</li>
              <li>Tile or slate condition — cracked, slipped, or missing units</li>
              <li>Ridge and hip tile condition</li>
              <li>Chimney stack and flashing assessment</li>
              <li>Valley and gutter condition</li>
              <li>Fascia and soffit inspection</li>
              <li>Flat roof areas if applicable</li>
              <li>Signs of previous repairs and their quality</li>
              <li>Internal inspection of loft space (if accessible)</li>
              <li>Written report with findings and recommendations</li>
            </ul>

            <h2>Lechlade Property Considerations</h2>
            <p>Lechlade has many period properties with Cotswold stone construction and traditional roofing materials. These require specialist understanding:</p>
            <ul>
              <li>Stone slate roofs need careful assessment of individual slates</li>
              <li>Original chimneys may have historical value as well as practical considerations</li>
              <li>Timber structures in older properties can hide decay</li>
              <li>Previous repairs may not match original specifications</li>
            </ul>

            <div style={{ background: 'var(--bg-alt)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.5rem', margin: '2rem 0' }}>
              <h3 style={{ marginTop: 0 }}>Pre-Purchase Roof Surveys</h3>
              <p style={{ marginBottom: '1rem' }}>Buying a home in Lechlade? A roof survey can identify costly issues before you commit. Request an inspection as part of your due diligence.</p>
              <Link to="/request" className="btn btn-primary">Request Pre-Purchase Survey</Link>
            </div>

            <h2>Why Choose GL7 Roof Quotes for Inspections</h2>
            <p>We connect Lechlade homeowners with professionals experienced in assessing GL7 properties. You'll receive an honest, independent assessment from someone who knows local building types.</p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <h2>Book Your Roof Inspection</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Submit your inspection request and a local Lechlade-area professional will contact you.
            </p>
            <Link to="/request" className="btn btn-primary btn-lg">Request Roof Inspection in Lechlade</Link>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container cta-section">
          <h2>Start Your Inspection Request</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)' }}>Your details are never posted publicly.</p>
          <div className="cta-buttons">
            <Link to="/request" className="btn btn-primary btn-lg">Get Help Now</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
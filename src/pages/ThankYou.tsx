import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import CONFIG from '../config';

export default function ThankYou() {
  const nextSteps = [
    { num: 1, title: "We review your details", desc: "Our local team reviews your request during working hours." },
    { num: 2, title: "A local roofer contacts you", desc: "A suitable roofing professional will call you to discuss next steps." },
    { num: 3, title: "Inspection arranged if needed", desc: "If required, a visit is scheduled at a time that suits you." },
  ];

  return (
    <Layout title="Request received">
      <section className="section" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="container">
          <div style={{ maxWidth: '650px', margin: '0 auto', textAlign: 'center' }}>
            {/* Success icon */}
            <div style={{ 
              width: '80px', height: '80px', background: 'var(--primary)', 
              borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 1.5rem'
            }}>
              <svg width="40" height="40" fill="none" stroke="#fff" strokeWidth="3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
            </div>

            {/* Task 6: New H1 */}
            <h1 style={{ marginBottom: '1rem' }}>Request received — here's what happens next</h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
              We aim to respond during working hours as soon as possible.
            </p>

            {/* Task 6: 3-step panel */}
            <div style={{ 
              background: 'var(--bg-alt)', border: '1px solid var(--border)', 
              borderRadius: 'var(--radius)', padding: '2rem', textAlign: 'left', marginBottom: '2rem'
            }}>
              <h3 style={{ marginTop: 0, marginBottom: '1.5rem', textAlign: 'center', fontSize: '1.1rem' }}>What happens next</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {nextSteps.map(step => (
                  <div key={step.num} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{
                      minWidth: '32px', height: '32px', background: 'var(--primary)', color: '#fff',
                      borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontWeight: 700, fontSize: '0.9rem', flexShrink: 0
                    }}>
                      {step.num}
                    </div>
                    <div>
                      <p style={{ margin: 0, fontWeight: 600 }}>{step.title}</p>
                      <p style={{ margin: '0.25rem 0 0', color: 'var(--text-muted)', fontSize: '0.95rem' }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency tips */}
            <div style={{ 
              background: '#fef3c7', border: '1px solid #f59e0b', 
              borderRadius: 'var(--radius)', padding: '1.5rem', textAlign: 'left', marginBottom: '2rem'
            }}>
              <h3 style={{ marginTop: 0, fontSize: '1rem', color: '#92400e' }}>If water is entering your property right now:</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem', color: '#78350f', fontSize: '0.95rem' }}>
                <li>Move valuables away from the leak</li>
                <li>Catch dripping water with a container</li>
                <li>Avoid electrical fittings near the leak</li>
                <li>If the ceiling is bulging, don't poke it — call for urgent advice</li>
              </ul>
            </div>

            {/* Task 6: Action buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <a href={`tel:${CONFIG.phoneE164}`} className="btn btn-primary">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ marginRight: '0.5rem' }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Call now
              </a>
              <Link to="/roof-leak-help" className="btn btn-outline">Read emergency leak steps</Link>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <Link to="/request" className="btn btn-secondary">Submit another request</Link>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
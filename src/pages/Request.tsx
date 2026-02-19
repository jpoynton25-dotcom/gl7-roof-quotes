import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import CONFIG from '../config';

const BASE_URL = 'https://gl7roofquotes.co.uk';

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Start Your Roof Repair Request in GL7 | GL7 Roof Quotes',
  description: 'Submit your roof repair request in GL7. Describe the issue, add your postcode and we\'ll match you with a suitable local roofing professional. No shared leads, no obligation.',
  url: `${BASE_URL}/request`,
  isPartOf: { '@type': 'WebSite', url: BASE_URL, name: 'GL7 Roof Quotes' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Start Request', item: `${BASE_URL}/request` },
  ],
};

interface FormData {
  issueType: string;
  urgency: string;
  propertyType: string;
  postcode: string;
  photos: File[];
  name: string;
  mobile: string;
  email: string;
  contactTime: string;
  description: string;
  consent: boolean;
}

export default function Request() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    issueType: '', urgency: '', propertyType: '', postcode: '',
    photos: [], name: '', mobile: '', email: '', contactTime: '', description: '', consent: false
  });

  const totalSteps = 7;
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = useState(false);

  const issueTypes = [
    { value: 'roof-leak', label: 'Roof leak' },
    { value: 'flashing-chimney', label: 'Lead flashing / chimney leak' },
    { value: 'missing-tiles', label: 'Missing / slipped tiles' },
    { value: 'storm-damage', label: 'Storm damage' },
    { value: 'gutter-valley', label: 'Guttering / valley leak' },
    { value: 'not-sure', label: 'Not sure (needs diagnosis)' },
  ];

  const urgencyLevels = [
    { value: 'emergency', label: 'Emergency', sub: 'Today' },
    { value: 'this-week', label: 'This week', sub: 'Within 7 days' },
    { value: 'ongoing', label: 'Ongoing', sub: 'Been happening a while' },
    { value: 'after-storm', label: 'After a storm', sub: 'Recent weather event' },
  ];

  const propertyTypes = [
    { value: 'detached', label: 'Detached' },
    { value: 'semi', label: 'Semi-detached' },
    { value: 'terrace', label: 'Terrace' },
    { value: 'bungalow', label: 'Bungalow' },
    { value: 'flat', label: 'Flat / Apartment' },
    { value: 'commercial', label: 'Commercial' },
  ];

  const contactTimes = [
    { value: 'morning', label: 'Morning', sub: '8am – 12pm' },
    { value: 'afternoon', label: 'Afternoon', sub: '12pm – 5pm' },
    { value: 'evening', label: 'Evening', sub: '5pm – 8pm' },
  ];

  const canProceed = () => {
    switch(step) {
      case 1: return !!formData.issueType;
      case 2: return !!formData.urgency;
      case 3: return !!formData.propertyType;
      case 4: return !!formData.postcode;
      case 5: return true;
      case 6: return !!formData.name && !!formData.mobile && formData.consent;
      case 7: return true;
      default: return false;
    }
  };

  const fileToBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve((reader.result as string).split(',')[1]);
      reader.onerror = reject;
    });

  const handleSubmit = async () => {
    setLoading(true);
    try {
      // Convert photos to base64 so Apps Script can upload them to Google Drive
      const photoData = await Promise.all(
        formData.photos.map(async (f) => ({
          name: f.name,
          type: f.type || 'image/jpeg',
          data: await fileToBase64(f),
        }))
      );

      const response = await fetch(CONFIG.formEndpoint, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify({
          source: 'Request Form',
          ...formData,
          photos: photoData,
        }),
      });
      if (response.ok || response.type === 'opaque') {
        navigate('/thank-you');
      } else {
        alert('Submission failed. Please call us directly.');
      }
    } catch {
      alert('Submission failed. Please call us directly.');
    } finally {
      setLoading(false);
    }
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="form-step active">
            <h2>What do you need help with?</h2>
            <div className="form-options">
              {issueTypes.map(t => (
                <button key={t.value} className={`form-option ${formData.issueType === t.value ? 'selected' : ''}`}
                  onClick={() => setFormData({...formData, issueType: t.value})}>
                  <span className="form-option-title">{t.label}</span>
                </button>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="form-step active">
            <h2>How urgent is it?</h2>
            <div className="form-options">
              {urgencyLevels.map(t => (
                <button key={t.value} className={`form-option ${formData.urgency === t.value ? 'selected' : ''}`}
                  onClick={() => setFormData({...formData, urgency: t.value})}>
                  <span className="form-option-title">{t.label}</span>
                  <span className="form-option-sub">{t.sub}</span>
                </button>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="form-step active">
            <h2>Property type</h2>
            <div className="form-options">
              {propertyTypes.map(t => (
                <button key={t.value} className={`form-option ${formData.propertyType === t.value ? 'selected' : ''}`}
                  onClick={() => setFormData({...formData, propertyType: t.value})}>
                  <span className="form-option-title">{t.label}</span>
                </button>
              ))}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="form-step active">
            <h2>Your postcode</h2>
            <p>We prioritise GL7 and nearby postcodes</p>
            <div style={{ maxWidth: '300px', margin: '0 auto' }}>
              <input className="form-input" style={{ textAlign: 'center', fontSize: '1.25rem' }}
                placeholder="e.g. GL7 3AX"
                value={formData.postcode}
                onChange={e => setFormData({...formData, postcode: e.target.value.toUpperCase()})} />
            </div>
          </div>
        );
      case 5:
        return (
          <div className="form-step active">
            <h2>Upload photos <span style={{ fontWeight: 400, color: 'var(--text-muted)' }}>(optional)</span></h2>
            <p>Photos help roofers quote faster</p>
            <div
              className="file-upload"
              style={{
                cursor: 'pointer',
                border: dragOver ? '2px dashed var(--primary)' : undefined,
                background: dragOver ? 'rgba(var(--primary-rgb, 37,99,235), 0.06)' : undefined,
                transition: 'border-color 0.15s, background 0.15s',
              }}
              onClick={() => fileInputRef.current?.click()}
              onDragOver={e => { e.preventDefault(); setDragOver(true); }}
              onDragEnter={e => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={e => {
                e.preventDefault();
                setDragOver(false);
                const dropped = Array.from(e.dataTransfer.files).filter(f =>
                  f.type.startsWith('image/')
                );
                if (dropped.length > 0) {
                  setFormData({ ...formData, photos: [...formData.photos, ...dropped] });
                }
              }}
            >
              <svg width="48" height="48" fill="none" stroke={dragOver ? 'var(--primary)' : 'var(--text-muted)'} strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="17 8 12 3 7 8"/>
                <line x1="12" y1="3" x2="12" y2="15"/>
              </svg>
              <p>{dragOver ? 'Drop photos here' : 'Drag & drop or click to upload'}</p>
              <small>PNG, JPG up to 10MB each</small>
              <input ref={fileInputRef} type="file" accept="image/*" multiple style={{ display: 'none' }}
                onChange={e => setFormData({...formData, photos: [...formData.photos, ...Array.from(e.target.files || [])]})} />
            </div>
            {formData.photos.length > 0 && (
              <div style={{ marginTop: '1rem' }}>
                <p style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>
                  {formData.photos.length} photo(s) selected:
                </p>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  {formData.photos.map((f, i) => (
                    <li key={i}>📎 {f.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      case 6:
        return (
          <div className="form-step active">
            <h2>Your details</h2>
            <div style={{ maxWidth: '400px', margin: '0 auto' }}>
              <div className="form-group">
                <label className="form-label">Name *</label>
                <input className="form-input" value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})} />
              </div>
              <div className="form-group">
                <label className="form-label">Mobile number *</label>
                <input className="form-input" type="tel" value={formData.mobile}
                  onChange={e => setFormData({...formData, mobile: e.target.value})} />
              </div>
              <div className="form-group">
                <label className="form-label">Email <span>(optional)</span></label>
                <input className="form-input" type="email" value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})} />
              </div>
              <div className="form-group">
                <label className="form-label">Preferred contact time</label>
                <div className="form-options" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                  {contactTimes.map(t => (
                    <button key={t.value} className={`form-option ${formData.contactTime === t.value ? 'selected' : ''}`}
                      onClick={() => setFormData({...formData, contactTime: t.value})}
                      style={{ padding: '0.75rem' }}>
                      <span className="form-option-title" style={{ fontSize: '0.9rem' }}>{t.label}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div className="form-checkbox" style={{ marginTop: '1rem' }}>
                <input type="checkbox" id="consent" checked={formData.consent}
                  onChange={e => setFormData({...formData, consent: e.target.checked})} />
                <label htmlFor="consent">I agree to be contacted about my request and accept the <a href="/privacy">Privacy Policy</a>. *</label>
              </div>
            </div>
          </div>
        );
      case 7:
        return (
          <div className="form-step active">
            <h2>Brief description <span style={{ fontWeight: 400, color: 'var(--text-muted)' }}>(optional)</span></h2>
            <p>When did it start? Where is the leak? Any access issues?</p>
            <div style={{ maxWidth: '500px', margin: '0 auto' }}>
              <textarea className="form-input form-textarea" value={formData.description}
                onChange={e => setFormData({...formData, description: e.target.value})} />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Layout title="Start Your Roof Repair Request in GL7" description="Submit your roof repair request in GL7. Describe the issue, add your postcode and we'll match you with a suitable local roofing professional. No shared leads, no obligation.">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="section">
        <div className="container">
          <div className="form-container">
            {/* Progress */}
            <div className="form-progress">
              {Array.from({ length: totalSteps }).map((_, i) => (
                <div key={i} className={`form-progress-step ${step > i + 1 ? 'completed' : ''} ${step === i + 1 ? 'active' : ''}`}>
                  {step > i + 1 ? '✓' : i + 1}
                </div>
              ))}
            </div>

            {/* Step content */}
            {renderStep()}

            {/* Navigation */}
            <div className="form-nav">
              {step > 1 ? (
                <button className="btn btn-secondary" onClick={() => setStep(step - 1)}>Back</button>
              ) : <div />}
              {step < totalSteps ? (
                <button className="btn btn-primary" disabled={!canProceed()} onClick={() => setStep(step + 1)}>Next</button>
              ) : (
                <button className="btn btn-primary" disabled={!canProceed() || loading} onClick={handleSubmit}>
                  {loading ? 'Submitting...' : 'Submit request'}
                </button>
              )}
            </div>

            {/* Reassurance */}
            <div className="form-reassurance">
              <p><strong>What happens next:</strong></p>
              <ul>
                <li>We aim to review requests quickly during working hours</li>
                <li>We don't post your details publicly</li>
                <li>No obligation — you choose whether to proceed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

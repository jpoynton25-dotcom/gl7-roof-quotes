import Layout from '../components/Layout';
import CONFIG from '../config';

export default function Privacy() {
  return (
    <Layout title="Privacy Policy">
      <section className="page-header">
        <div className="container">
          <h1>Privacy <span>Policy</span></h1>
          <p>Last updated: {new Date().getFullYear()}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content">
            <h2>1. Who we are</h2>
            <p>{CONFIG.platformName} is a local roof request service. You can reach us via our <a href="/contact">contact page</a>.</p>
            
            <h2>2. What data we collect</h2>
            <p>When you submit a roof request, we collect:</p>
            <ul>
              <li>Your name and mobile number (required)</li>
              <li>Your email address (optional)</li>
              <li>Your postcode</li>
              <li>Details about your roofing issue (type, urgency, property type)</li>
              <li>Photos you choose to upload</li>
              <li>Your preferred contact time</li>
            </ul>

            <h2>3. Why we collect it</h2>
            <p>We collect this information to:</p>
            <ul>
              <li>Respond to your roofing request</li>
              <li>Match you with a suitable local roofing professional</li>
              <li>Arrange inspection or quotes</li>
            </ul>

            <h2>4. Who we share it with</h2>
            <p>Your data is shared only with selected local roofing professionals for the purpose of responding to your request. We do not sell, rent or distribute your data to any third-party lead platforms or unrelated businesses.</p>

            <h2>5. Retention</h2>
            <p>We retain your request data for a reasonable period necessary to fulfil the purpose — typically no longer than 12 months.</p>

            <h2>6. Your rights</h2>
            <p>Under UK GDPR, you have the right to access, correct or delete your data. Use our <a href="/contact">contact page</a> to make a request.</p>

            <h2>7. Data controller</h2>
            <p>The data controller for this platform is {CONFIG.operator.name}, {CONFIG.operator.address}. For data protection enquiries, use our <a href="/contact">contact page</a>.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

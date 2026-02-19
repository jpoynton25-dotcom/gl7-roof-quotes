import Layout from '../components/Layout';
import CONFIG from '../config';

export default function Terms() {
  return (
    <Layout title="Terms of Service">
      <section className="page-header">
        <div className="container">
          <h1>Terms of <span>Service</span></h1>
          <p>Last updated: {new Date().getFullYear()}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content">
            <h2>1. The service</h2>
            <p>{CONFIG.platformName} provides a matching service that connects homeowners with local roofing professionals. We do not carry out roofing work ourselves.</p>

            <h2>2. No guarantee of quotes</h2>
            <p>We match your request with suitable roofing professionals, but we do not guarantee that you will receive a quote, or that any quote will be suitable or affordable.</p>

            <h2>3. No guarantee of availability</h2>
            <p>Availability of roofing professionals depends on location, workload and the nature of your issue. We do not guarantee a specific response time.</p>

            <h2>4. No obligation</h2>
            <p>Submitting a request creates no obligation. You are free to decline any quote or not proceed with any work.</p>

            <h2>5. Contracts</h2>
            <p>Any contract for roofing work is between you and the roofing professional. {CONFIG.platformName} is not a party to any such contract.</p>

            <h2>6. Accuracy</h2>
            <p>You agree to provide accurate information in your request. We are not responsible for issues arising from inaccurate or incomplete information.</p>

            <h2>7. Limitation of liability</h2>
            <p>To the fullest extent permitted by law, {CONFIG.platformName} is not liable for any loss, damage or injury arising from your use of the service or from any work carried out by roofing professionals.</p>

            <h2>8. Contact</h2>
            <p>For questions about these terms, use our <a href="/contact">contact page</a>.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

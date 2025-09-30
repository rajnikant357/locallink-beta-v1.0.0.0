import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
            <p className="text-muted-foreground mb-8">Last updated: January 1, 2025</p>

            <div className="prose prose-gray max-w-none space-y-6">
              <section>
                <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using LocalLink's services, you accept and agree to be bound by the terms and 
                  provision of this agreement. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
                <p className="text-muted-foreground leading-relaxed">
                  LocalLink provides an online platform that connects customers with local service providers. We act 
                  as an intermediary and do not directly provide the services listed on our platform. The actual 
                  services are provided by independent third-party service providers.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. User Accounts</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  To access certain features of our platform, you may be required to create an account. You agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Notify us immediately of any unauthorized access</li>
                  <li>Be responsible for all activities under your account</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. User Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  As a user of LocalLink, you agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Provide accurate information when booking services</li>
                  <li>Treat service providers with respect and professionalism</li>
                  <li>Pay agreed-upon fees for services rendered</li>
                  <li>Not misuse the platform or engage in fraudulent activities</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Service Provider Terms</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Service providers on LocalLink agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Provide services professionally and as described</li>
                  <li>Maintain necessary licenses and insurance</li>
                  <li>Respond to booking requests in a timely manner</li>
                  <li>Honor agreed-upon pricing and schedules</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Payments and Fees</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Payment arrangements are made directly between customers and service providers. LocalLink may charge 
                  service providers a subscription or commission fee for using the platform. All fees are non-refundable 
                  unless otherwise stated.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">7. Cancellations and Refunds</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Cancellation and refund policies are determined by individual service providers. LocalLink recommends 
                  discussing these terms before booking. We are not responsible for disputes between customers and 
                  service providers regarding cancellations or refunds.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  LocalLink acts only as a platform connecting customers with service providers. We are not liable for 
                  the quality, safety, or legality of services provided. Users engage service providers at their own 
                  risk. LocalLink is not responsible for any damages, injuries, or losses resulting from services 
                  rendered through our platform.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">9. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content on LocalLink, including text, graphics, logos, and software, is the property of LocalLink 
                  and protected by copyright laws. Users may not reproduce, distribute, or create derivative works 
                  without our express written permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">10. Modifications to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  LocalLink reserves the right to modify these terms at any time. We will notify users of significant 
                  changes via email or platform notifications. Continued use of the platform after changes constitutes 
                  acceptance of the modified terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">11. Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  LocalLink reserves the right to suspend or terminate accounts that violate these terms or engage in 
                  fraudulent or harmful activities. Users may close their accounts at any time by contacting our 
                  support team.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">12. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms of Service, please contact us at:
                  <br />
                  Email: support@locallink.com
                  <br />
                  Phone: +91 9876543210
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;

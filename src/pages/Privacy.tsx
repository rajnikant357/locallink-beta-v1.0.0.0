import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated: January 1, 2025</p>

            <div className="prose prose-gray max-w-none space-y-6">
              <section>
                <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  LocalLink ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains 
                  how we collect, use, disclose, and safeguard your information when you use our platform and services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
                <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  We may collect personal information that you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Name, email address, and phone number</li>
                  <li>Location and address information</li>
                  <li>Payment information (processed through secure third-party providers)</li>
                  <li>Profile information and preferences</li>
                  <li>Communication history with service providers</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-4">Automatically Collected Information</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  When you use our platform, we may automatically collect:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Device information and IP address</li>
                  <li>Browser type and version</li>
                  <li>Usage data and analytics</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  We use the collected information for various purposes, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Providing and maintaining our services</li>
                  <li>Connecting you with service providers</li>
                  <li>Processing transactions and payments</li>
                  <li>Sending notifications and updates</li>
                  <li>Improving our platform and user experience</li>
                  <li>Preventing fraud and ensuring security</li>
                  <li>Complying with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Information Sharing</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  We may share your information with:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Service providers when you book or inquire about services</li>
                  <li>Third-party service providers who assist in operating our platform</li>
                  <li>Law enforcement when required by law</li>
                  <li>Business partners with your consent</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  We do not sell your personal information to third parties.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal 
                  information. However, no method of transmission over the internet is 100% secure. While we strive 
                  to protect your data, we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate or incomplete data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to processing of your information</li>
                  <li>Withdraw consent at any time</li>
                  <li>Data portability</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">7. Cookies and Tracking Technologies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your experience, analyze usage patterns, 
                  and personalize content. You can control cookie settings through your browser preferences.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">8. Third-Party Links</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our platform may contain links to third-party websites. We are not responsible for the privacy 
                  practices of these external sites. We encourage you to review their privacy policies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">9. Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are not intended for individuals under 18 years of age. We do not knowingly collect 
                  personal information from children. If you believe we have collected such information, please 
                  contact us immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">10. Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined 
                  in this Privacy Policy, unless a longer retention period is required by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">11. Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of significant changes via 
                  email or platform notifications. Your continued use of the platform after changes constitutes 
                  acceptance of the updated policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">12. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about this Privacy Policy or our data practices, please contact us at:
                  <br />
                  Email: privacy@locallink.com
                  <br />
                  Phone: +91 9876543210
                  <br />
                  Address: LocalLink Office, Main Road, Sikandarpur, Ballia, Uttar Pradesh
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

export default Privacy;

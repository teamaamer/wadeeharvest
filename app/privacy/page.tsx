export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background pt-24 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

        <div className="prose prose-lg max-w-none space-y-6 text-muted">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Introduction
            </h2>
            <p>
              At Wadee Harvest, we are committed to protecting your privacy and
              ensuring the security of your personal information. This Privacy
              Policy explains how we collect, use, and safeguard your data when
              you interact with our website and services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Information We Collect
            </h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Contact Information:</strong> Name, email address, phone
                number when you sign up for our newsletter or contact us.
              </li>
              <li>
                <strong>Order Information:</strong> Shipping address, billing
                information, and purchase history when you place an order.
              </li>
              <li>
                <strong>Technical Information:</strong> IP address, browser type,
                and device information for website analytics and security.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              How We Use Your Information
            </h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Process and fulfill your orders</li>
              <li>Send you updates about our products and services (with your consent)</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Email Communications
            </h2>
            <p>
              When you sign up for our email list, we will use your email address
              to send you updates about new products, special offers, and company
              news. We will <strong>never share or sell your email address</strong> to
              third parties. You can unsubscribe at any time by clicking the
              unsubscribe link in any email we send you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access, loss,
              or misuse. However, no method of transmission over the internet is
              100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Your Rights
            </h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications at any time</li>
              <li>Withdraw consent for data processing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Cookies
            </h2>
            <p>
              Our website uses cookies to enhance your browsing experience and
              analyze website traffic. You can control cookie settings through
              your browser preferences.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Third-Party Services
            </h2>
            <p>
              We may use third-party services for payment processing, shipping,
              and analytics. These services have their own privacy policies, and
              we encourage you to review them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy or how we handle
              your personal information, please contact us at:
            </p>
            <p className="mt-4">
              <strong>Wadee Harvest</strong>
              <br />
              Email: info@wadeeharvest.ca
              <br />
              Peterborough, Ontario, Canada
            </p>
          </section>

          <p className="text-sm mt-8 pt-8 border-t border-border">
            Last updated: February 3, 2026
          </p>
        </div>
      </div>
    </div>
  );
}

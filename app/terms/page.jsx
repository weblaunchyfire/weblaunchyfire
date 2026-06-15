import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { makeSeoMetadata } from "@/lib/seo";

export const metadata = makeSeoMetadata({
  title: "Terms of Service",
  description: "Basic terms for Web Launchy Fire website template and launch services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="policy-page">
        <section className="policy-wrap">
          <p className="section-tag">Terms</p>
          <h1>Terms of Service</h1>
          <p>
            By submitting a website launch request, you agree to provide accurate business details, content, images, and payment information needed to complete the project.
          </p>
          <h2>Service scope</h2>
          <p>
            Web Launchy Fire provides website template customization, content setup, and launch support based on the selected package and information provided by the customer.
          </p>
          <h2>Payments</h2>
          <p>
            Payment instructions are shown during the launch flow. Orders may be confirmed through WhatsApp after payment details are shared and verified.
          </p>
          <h2>Content responsibility</h2>
          <p>
            Customers are responsible for ensuring that submitted text, images, logos, and business information are accurate and that they have permission to use them.
          </p>
          <h2>Revisions</h2>
          <p>
            Revisions depend on the selected package. Additional changes outside the agreed scope may require extra time or cost.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}

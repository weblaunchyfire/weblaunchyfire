import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { makeSeoMetadata } from "@/lib/seo";

export const metadata = makeSeoMetadata({
  title: "Privacy Policy",
  description: "How Web Launchy Fire handles customer details submitted for website launch requests.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="policy-page">
        <section className="policy-wrap">
          <p className="section-tag">Privacy</p>
          <h1>Privacy Policy</h1>
          <p>
            Web Launchy Fire collects the business and contact details you submit so we can prepare your website, contact you about your order, and provide support.
          </p>
          <h2>Information we collect</h2>
          <p>
            We may collect your name, phone number, email, business name, address, service details, uploaded logo or images, selected template, and design preferences.
          </p>
          <h2>How we use it</h2>
          <p>
            Your information is used only to respond to your enquiry, process your website launch request, coordinate payment confirmation, and deliver support.
          </p>
          <h2>Third-party services</h2>
          <p>
            The site may use services such as WhatsApp, Web3Forms, and image hosting providers to receive your details and files. Only submit information you are comfortable sharing for your website project.
          </p>
          <h2>Contact</h2>
          <p>
            For privacy questions, contact Web Launchy Fire through the WhatsApp or contact options on this website.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}

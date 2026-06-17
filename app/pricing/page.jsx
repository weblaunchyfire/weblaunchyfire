import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PricingSection from "@/components/PricingSection";
import { locationKeywords, makeSeoMetadata, pricingKeywords } from "@/lib/seo";

export const metadata = makeSeoMetadata({
  title: "Pricing - Web Launchy Fire",
  description: "Compare Web Launchy Fire one-time website pricing plans: Starter, Business, and Pro. No monthly subscriptions and no hidden fees.",
  path: "/pricing",
  keywords: [
    "Web Launchy Fire pricing",
    "website pricing India",
    "one-time website price",
    "small business website cost",
    ...pricingKeywords,
    ...locationKeywords,
  ],
});

export default function PricingPage() {
  return (
    <>
      <Header />
      <main>
        <PricingSection standalone />
        <FaqSection compact />
      </main>
      <Footer />
    </>
  );
}

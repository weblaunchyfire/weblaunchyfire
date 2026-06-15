import { Suspense } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TemplatesView from "@/components/TemplatesView";
import {
  builderKeywords,
  commerceKeywords,
  locationKeywords,
  makeSeoMetadata,
  platformAlternativeKeywords,
  pricingKeywords,
} from "@/lib/seo";

export const metadata = makeSeoMetadata({
  title: "Website Builder Designs and Customizable Templates",
  description:
    "Browse Web Launchy Fire builder-ready designs by business category, customize the style, preview live demos, and start a fast website launch.",
  path: "/templates",
  keywords: [
    ...builderKeywords,
    ...locationKeywords,
    ...pricingKeywords,
    ...commerceKeywords,
    ...platformAlternativeKeywords,
    "customizable website templates",
    "website builder designs",
    "business website builder templates",
    "live website preview",
    "custom website design India",
  ],
});

export default function TemplatesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Suspense>
          <TemplatesView />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

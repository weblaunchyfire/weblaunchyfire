import { notFound } from "next/navigation";
import { Suspense } from "react";
import TemplatePreview from "@/components/TemplatePreview";
import { getTemplate, templates } from "@/data/site";
import { makeSeoMetadata, makeTemplateSeoKeywords } from "@/lib/seo";


export async function generateMetadata({ params }) {
  const { templateId } = await params;
  const template = getTemplate(templateId);
  const title = template ? `${template.name} Customizable Website Builder Design` : "Customizable Website Design";
  const description = template
    ? `${template.tagline} Customize this ${template.style} design, preview it live, and launch a mobile-ready business website with Web Launchy Fire.`
    : "Preview a Web Launchy Fire builder design, customize it, and launch a mobile-ready business website.";

  return makeSeoMetadata({
    title,
    description,
    path: `/template-preview/${templateId}`,
    image: template?.image || "/template-iframe-screenshot.png",
    keywords: makeTemplateSeoKeywords(template),
  });
}

export async function generateStaticParams() {
  return templates.map((t) => ({ templateId: t.id }));
}

export default async function TemplatePreviewPage({ params, searchParams }) {
  const { templateId } = await params;
  const query = await searchParams;
  const template = getTemplate(templateId);
  const cleanView = query?.view === "canvas" || query?.view === "full";

  if (!template) {
    notFound();
  }

  return (
    <main>
      <Suspense fallback={<div style={{ padding: "40px", textAlign: "center", background: "#eef0f3", color: "#4b5563" }}>Loading template preview...</div>}>
        <TemplatePreview template={template} />
      </Suspense>
    </main>
  );
}

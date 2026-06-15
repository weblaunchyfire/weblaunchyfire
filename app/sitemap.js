import { templates } from "@/data/site";
import { absoluteUrl } from "@/lib/seo";

const now = new Date();

const staticRoutes = [
  { path: "/", priority: 1 },
  { path: "/templates", priority: 0.95 },
  { path: "/contact", priority: 0.8 },
  { path: "/privacy", priority: 0.2 },
  { path: "/terms", priority: 0.2 },
];

export default function sitemap() {
  const staticUrls = staticRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: now,
    changeFrequency: route.path === "/" ? "weekly" : "monthly",
    priority: route.priority,
  }));

  const templateUrls = templates.map((template) => ({
    url: absoluteUrl(`/template-preview/${template.id}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticUrls, ...templateUrls];
}

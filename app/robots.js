import { absoluteUrl } from "@/lib/seo";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/launch", "/stander-language-data"],
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}

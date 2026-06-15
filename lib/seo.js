export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://weblaunchyfire.com";

export const siteName = "Web Launchy Fire";
export const defaultTitle = "Web Launchy Fire - Website Builder and Custom Website Launch Platform";
export const defaultDescription =
  "Build, customize, preview, and launch a mobile-ready business website with Web Launchy Fire. Choose a design, edit your style, and go live fast.";

export const defaultKeywords = [
  "Web Launchy Fire",
  "website builder",
  "AI website builder",
  "custom website builder",
  "website customization",
  "business website builder",
  "small business website builder",
  "Indian website builder",
  "website builder India",
  "website builder near me",
  "website design near me",
  "website templates",
  "business website templates",
  "local business website",
  "custom website design",
  "premium website design",
  "website launch service",
  "affordable website builder",
  "low cost website design",
  "cheap website design",
  "website in less price",
  "ecommerce website builder",
  "online store builder",
  "Wix alternative India",
  "Framer alternative India",
  "Next.js website templates",
  "India website design",
];

export const locationKeywords = [
  "website builder India",
  "Indian website builder",
  "website builder near me",
  "website design near me",
  "website maker near me",
  "website builder Kolkata",
  "website design Kolkata",
  "website customization Kolkata",
  "website builder Malda",
  "website design Malda",
  "website customization Malda",
  "website bananor service Kolkata",
  "website bananor service Malda",
];

export const pricingKeywords = [
  "affordable website builder",
  "low cost website design",
  "cheap website design",
  "website in less price",
  "low price website design",
  "budget website design India",
  "affordable business website",
  "cheap business website builder",
];

export const builderKeywords = [
  "website builder",
  "AI website builder",
  "custom website builder",
  "business website builder",
  "small business website builder",
  "website customization",
  "custom website design",
  "live website preview",
  "drag and drop website builder",
  "no code website builder",
];

export const commerceKeywords = [
  "ecommerce website builder",
  "ecommerce website design",
  "online store builder",
  "online shop website design",
  "retail website builder",
  "product catalog website",
  "small business ecommerce website",
];

export const platformAlternativeKeywords = [
  "Wix alternative India",
  "Framer alternative India",
  "affordable Wix alternative",
  "custom website builder like Wix",
  "website builder like Framer",
  "Wix style website builder",
  "Framer style website design",
];

const categoryKeywordMap = {
  "clinic-doctor": ["clinic website builder", "doctor website design", "medical website builder", "healthcare website design"],
  "coaching-centre": ["coaching website builder", "tuition website design", "institute website builder", "education website design"],
  restaurant: ["restaurant website builder", "food business website design", "cloud kitchen website", "menu website design"],
  "gym-fitness": ["gym website builder", "fitness website design", "yoga website builder", "trainer website design"],
  "beauty-parlor": ["salon website builder", "beauty parlour website design", "spa website builder", "makeup artist website"],
  cafe: ["cafe website builder", "bakery website design", "dessert shop website", "tea shop website design"],
  "interior-construction": ["interior design website", "construction website builder", "architect website design", "contractor website"],
  "real-estate": ["real estate website builder", "property dealer website", "broker website design", "rental property website"],
  "school-college": ["school website builder", "college website design", "preschool website", "institute website builder"],
  "ngo-foundation": ["NGO website builder", "foundation website design", "charity website builder", "community website"],
  "retail-shop": ["retail shop website", "store website builder", "fashion store website", "grocery website design"],
};

function unique(values) {
  return [...new Set(values.filter(Boolean).map((value) => value.trim()))];
}

function humanizeSlug(value = "") {
  return value.replace(/-/g, " ").replace(/\s+/g, " ").trim();
}

export function makeTemplateSeoKeywords(template) {
  if (!template) return [];

  const category = humanizeSlug(template.category);
  const subcategory = humanizeSlug(template.subcategory);
  const niche = subcategory || category;
  const baseTerms = unique([niche, category, template.style, template.name]);

  const nicheKeywords = baseTerms.flatMap((term) => [
    `${term} website builder`,
    `${term} website design`,
    `${term} custom website`,
    `${term} website template`,
    `${term} website near me`,
    `${term} website builder India`,
    `${term} website design Kolkata`,
    `${term} website design Malda`,
    `low cost ${term} website`,
    `affordable ${term} website`,
  ]);

  return unique([
    ...nicheKeywords,
    ...(categoryKeywordMap[template.category] || []),
    ...builderKeywords,
    ...locationKeywords,
    ...pricingKeywords,
    ...commerceKeywords,
    ...platformAlternativeKeywords,
  ]);
}

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function makeSeoMetadata({
  title = defaultTitle,
  description = defaultDescription,
  path = "/",
  image,
  keywords = [],
  type = "website",
  robots,
} = {}) {
  const url = absoluteUrl(path);
  const imageUrl = image ? absoluteUrl(image) : undefined;

  return {
    title,
    description,
    keywords: unique([...defaultKeywords, ...keywords]),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type,
      ...(imageUrl
        ? {
            images: [
              {
                url: imageUrl,
                width: 1200,
                height: 630,
                alt: `${siteName} website template preview`,
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(imageUrl ? { images: [imageUrl] } : {}),
    },
    robots,
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: siteUrl,
  logo: absoluteUrl("/icon"),
  sameAs: [],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      areaServed: "IN",
      availableLanguage: ["English", "Bengali", "Hindi"],
    },
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteUrl}/templates?search={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export function makeFaqJsonLd(items = []) {
  if (!items.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteName,
  url: siteUrl,
  logo: absoluteUrl("/icon"),
  description: defaultDescription,
  priceRange: "₹₹",
  areaServed: [
    {
      "@type": "Country",
      name: "India",
    },
    {
      "@type": "City",
      name: "Kolkata",
    },
    {
      "@type": "City",
      name: "Malda",
    },
  ],
  serviceType: [
    "Website Design",
    "Website Development",
    "Custom Website Builder",
    "Business Website Launch",
  ],
  knowsLanguage: ["English", "Bengali", "Hindi"],
};

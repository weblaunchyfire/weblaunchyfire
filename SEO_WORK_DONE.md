# Web Launchy Fire SEO Work Done

## What SEO Was Added

This project now has a stronger technical SEO foundation for Google indexing, social sharing, and search result clarity. The positioning is now Web Launchy Fire as a website builder, customization platform, template preview system, and fast website launch service.

## Files Added

### `lib/seo.js`

Created a central SEO helper file.

It includes:

- `siteUrl`
- `siteName`
- default title
- default description
- default SEO keywords for website builder, customization, templates, and launch service
- canonical URL helper
- reusable metadata helper
- Organization JSON-LD schema
- Website JSON-LD schema

This makes all SEO metadata consistent across the website.

### `app/sitemap.js`

Added dynamic sitemap generation.

The sitemap includes:

- Home page
- Templates page
- Contact page
- Privacy page
- Terms page
- All template preview pages

Google can use this sitemap to discover important pages faster.

Final sitemap URL after deployment:

```txt
https://your-domain.com/sitemap.xml
```

### `app/robots.js`

Added robots.txt generation.

Allowed:

- Public website pages
- Template pages

Blocked:

- `/api/`
- `/launch`
- `/stander-language-data`

This keeps internal or utility pages out of search results.

Final robots URL after deployment:

```txt
https://your-domain.com/robots.txt
```

## Files Updated

### `app/layout.jsx`

Added global SEO setup:

- Metadata base URL
- Default title and title template
- Default description
- Open Graph metadata
- Twitter card metadata
- Canonical URLs
- Organization schema
- Website schema

This improves how Web Launchy Fire appears on Google, Facebook, WhatsApp, LinkedIn, and other platforms.

### `app/page.jsx`

Improved homepage SEO.

Target intent:

- website builder
- custom website builder
- website customization
- business website builder
- website launch service
- business website design

### `app/templates/page.jsx`

Improved templates/designs page SEO.

Target intent:

- website builder designs
- customizable website templates
- business website builder templates
- live website preview

### `app/contact/page.jsx`

Improved contact page SEO.

Target intent:

- contact Web Launchy Fire
- custom website launch
- website builder support
- business website quote

### `app/template-preview/[templateId]/page.jsx`

Added dynamic SEO for each customizable builder design preview page.

Each builder design now gets:

- unique title
- unique description
- canonical URL
- Open Graph image
- design-specific builder/customization keywords

This helps individual builder designs appear for niche searches like:

- clinic website builder
- restaurant website builder
- salon website builder
- fitness website builder
- clinic custom website
- restaurant custom website

### `app/privacy/page.jsx`

Added proper SEO metadata and canonical URL.

### `app/terms/page.jsx`

Added proper SEO metadata and canonical URL.

### `app/stander-language-data/page.jsx`

Added noindex robots metadata because this page is internal data, not a customer-facing SEO page.

## Verification Done

The following commands were run successfully:

```bash
npm run lint
npm run build
```

Result:

- No lint errors
- Production build passed
- Sitemap and robots routes generated successfully

There are some existing Next.js image optimization warnings for `<img>` tags. These are not blocking errors, but replacing important images with `next/image` can improve performance SEO later.

## Important Deployment Setting

Before final deployment, set the real website domain:

```env
NEXT_PUBLIC_SITE_URL=https://your-real-domain.com
```

Example:

```env
NEXT_PUBLIC_SITE_URL=https://weblaunchyfire.com
```

Without the real domain, sitemap and canonical URLs may point to the fallback domain.

## Will Web Launchy Fire Rank Across India, Kolkata, and Malda?

Technical SEO is now much better, but Google ranking is not guaranteed immediately.

If someone searches:

- website template bananor jonno
- website builder
- custom website builder
- website customization
- website bananor jonno
- website template India
- website template Kolkata
- website template Malda
- business website design Kolkata
- business website design Malda
- local business website template

Web Launchy Fire can appear only after Google crawls, indexes, and trusts the site.

The technical setup is ready, but ranking needs more location-focused content that explains Web Launchy Fire as a builder and customization service, not only a template gallery.

## What Is Still Needed For India, Kolkata, and Malda Ranking

To rank for local searches, Web Launchy Fire should add dedicated landing pages.

Recommended pages:

```txt
/website-template-india
/website-template-kolkata
/website-template-malda
/website-builder-india
/website-builder-kolkata
/website-builder-malda
/custom-website-builder-india
/website-customization-service
/business-website-design-kolkata
/business-website-design-malda
/website-design-for-local-business
```

Each page should have:

- unique title
- local keyword in H1
- useful Bengali/English content
- services offered
- builder/design examples
- pricing mention
- WhatsApp/contact CTA
- FAQ section
- LocalBusiness or Service schema

## Example Kolkata SEO Page Target

Title:

```txt
Website Builder in Kolkata | Web Launchy Fire
```

H1:

```txt
Custom Website Builder for Kolkata Businesses
```

Target keywords:

- website template Kolkata
- website builder Kolkata
- custom website builder Kolkata
- website customization Kolkata
- business website design Kolkata
- website bananor service Kolkata
- restaurant website Kolkata
- clinic website Kolkata
- salon website Kolkata

## Example Malda SEO Page Target

Title:

```txt
Website Builder in Malda | Web Launchy Fire
```

H1:

```txt
Custom Website Builder for Malda Businesses
```

Target keywords:

- website template Malda
- website builder Malda
- custom website builder Malda
- website customization Malda
- business website design Malda
- website bananor service Malda
- local business website Malda
- shop website Malda
- clinic website Malda

## Google Search Console Steps

After deployment:

1. Add the domain in Google Search Console.
2. Verify ownership.
3. Submit sitemap:

```txt
https://your-domain.com/sitemap.xml
```

4. Use URL Inspection for:

```txt
https://your-domain.com/
https://your-domain.com/templates
https://your-domain.com/contact
```

5. Request indexing.

## Realistic Timeline

Expected timeline:

- Technical indexing: a few days to a few weeks
- Early impressions: 2-6 weeks
- Better ranking: 2-4 months
- Strong local ranking: needs dedicated city/location pages, backlinks, and regular content

## Next SEO Work Recommended

To improve ranking chances:

- Add Kolkata landing page
- Add Malda landing page
- Add India landing page
- Add website builder India landing page
- Add website builder near me landing page
- Add low cost website design landing page
- Add ecommerce website builder landing page
- Add Wix alternative India landing page
- Add Framer alternative India landing page
- Add FAQ schema
- Add Service schema
- Improve image optimization with `next/image`
- Add more keyword-rich builder/design pages
- Add Bengali content for local search intent
- Add Google Business Profile if Web Launchy Fire has a physical/service area presence
- Get backlinks from local directories, social profiles, and business listings

## Summary

The project now has strong basic technical SEO:

- metadata
- canonical URLs
- Open Graph
- Twitter cards
- schema
- sitemap
- robots.txt
- dynamic builder design SEO
- noindex for internal pages

But ranking across India, Kolkata, and Malda needs extra local landing pages and ongoing content. Technical SEO is ready; builder-focused content SEO and local SEO are the next steps.

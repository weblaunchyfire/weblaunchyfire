import { Inter, Paytone_One } from "next/font/google";
import "./globals.css";
import {
  defaultDescription,
  defaultTitle,
  localBusinessJsonLd,
  makeSeoMetadata,
  organizationJsonLd,
  siteName,
  siteUrl,
  websiteJsonLd,
} from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const paytoneOne = Paytone_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-brand",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ff6a16",
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  ...makeSeoMetadata({
    title: defaultTitle,
    description: defaultDescription,
    path: "/",
  }),
  applicationName: siteName,
  category: "website builder",
  creator: siteName,
  publisher: siteName,
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${inter.variable} ${paytoneOne.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

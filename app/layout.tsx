import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { seoData, companyData } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: seoData.title,
  description: seoData.description,
  keywords: seoData.keywords,
  authors: [{ name: companyData.name }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://centraldosbarbeiros.com.br",
    siteName: companyData.name,
    title: seoData.title,
    description: seoData.description,
    images: [
      {
        url: seoData.ogImage,
        width: 1200,
        height: 630,
        alt: companyData.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoData.title,
    description: seoData.description,
    images: [seoData.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: companyData.name,
    image: seoData.ogImage,
    "@id": "https://centraldosbarbeiros.com.br",
    url: "https://centraldosbarbeiros.com.br",
    telephone: companyData.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cabo Frio",
      addressRegion: "RJ",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -22.8788,
      longitude: -42.0186,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "13:00",
      },
    ],
    sameAs: [],
    priceRange: "$$",
  };

  return (
    <html lang="pt-BR">
      <head>
        {/* LocalBusiness JSON-LD */}
        <Script
          id="ld-json-localbusiness"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5RMHKJ7BRV"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5RMHKJ7BRV');
          `}
        </Script>
      </head>

      <body className={`${inter.className} grain`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}

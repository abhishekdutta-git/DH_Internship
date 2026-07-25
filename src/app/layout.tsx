import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#07090e",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "NorthPeak Digital | Next-Gen Digital Engineering & Brand Transformation Agency",
  description:
    "NorthPeak Digital is a premier digital agency building high-impact web applications, bespoke UI/UX designs, luxury branding, and high-conversion organic growth strategies.",
  keywords: [
    "Digital Agency",
    "Web Development",
    "UI/UX Design",
    "Brand Identity",
    "SEO Optimization",
    "Performance Engineering",
    "Next.js Agency",
    "Digital Strategy",
  ],
  authors: [{ name: "NorthPeak Digital Team" }],
  creator: "NorthPeak Digital",
  publisher: "NorthPeak Digital",
  metadataBase: new URL("https://northpeak-digital.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NorthPeak Digital | Next-Gen Digital Engineering & Brand Transformation",
    description:
      "We engineer high-impact digital experiences for visionary brands. Bespoke Web Development, UI/UX, and Digital Strategy.",
    url: "https://northpeak-digital.vercel.app",
    siteName: "NorthPeak Digital",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NorthPeak Digital - Ultra Modern Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NorthPeak Digital | Next-Gen Digital Engineering Agency",
    description:
      "We engineer high-impact digital experiences for visionary brands.",
    creator: "@NorthPeakDigital",
    images: ["/og-image.png"],
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "NorthPeak Digital",
    url: "https://northpeak-digital.vercel.app",
    logo: "https://northpeak-digital.vercel.app/logo.png",
    image: "https://northpeak-digital.vercel.app/og-image.png",
    description:
      "NorthPeak Digital is a premier digital agency building high-impact web applications, bespoke UI/UX designs, luxury branding, and organic growth strategies.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Francisco",
      addressRegion: "CA",
      addressCountry: "US",
    },
    priceRange: "$$$$",
    telephone: "+1-800-555-PEAK",
    openingHours: "Mo-Fr 09:00-18:00",
    sameAs: [
      "https://github.com",
      "https://twitter.com",
      "https://linkedin.com",
    ],
  };

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} scroll-smooth dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#07090e] text-slate-100 font-sans antialiased selection:bg-blue-500 selection:text-white flex flex-col justify-between">
        {children}
      </body>
    </html>
  );
}

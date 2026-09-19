import type { Metadata } from "next";
import { Inter, Playfair_Display, Great_Vibes } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  weight: "400",
  variable: "--font-script",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gulnis.vercel.app"),
  title: "Gul Nis Homey Cakes | Homemade Cakes & Desserts",
  description: "Freshly baked cakes, brownies, cookies and more, made to make your moments sweeter.",
  keywords: ["cakes", "brownies", "cookies", "custom cakes", "homemade desserts", "Gul Nis", "bakery", "Manjeri", "Kerala"],
  authors: [{ name: "Gul Nis" }],
  openGraph: {
    title: "Gul Nis Homey Cakes",
    description: "Freshly baked cakes, brownies, cookies and more, made to make your moments sweeter.",
    url: "https://gulnis.vercel.app",
    siteName: "Gul Nis Homey Cakes",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gul Nis Homey Cakes",
    description: "Freshly baked cakes, brownies, cookies and more.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org JSON-LD for LocalBusiness/Bakery
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    "name": "Gul Nis Homey Cakes",
    "image": "https://gulnis.vercel.app/images/hero%20image%20gulnis.webp",
    "description": "Freshly baked cakes, brownies, cookies and more, made to make your moments sweeter.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Manjeri",
      "addressRegion": "Kerala",
      "addressCountry": "IN"
    },
    "telephone": process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "0000000000",
    "url": "https://gulnis.vercel.app",
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${greatVibes.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        {/* JSON-LD Schema Script */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

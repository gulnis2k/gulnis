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
  metadataBase: new URL("https://gulnis.in"),
  title: "Gul NiS Homey Bakes by SK | Homemade Cakes & Desserts in Coimbatore",
  description: "Freshly baked brownies, blondies, cookie pies, cookies, waffles, hot chocolate, cakes, and chocolates. Homemade desserts from Gul NiS Homey Bakes by SK in Coimbatore.",
  keywords: ["brownies", "blondie", "cookie pie", "cookies", "waffles", "hot chocolate", "cakes", "chocolates", "custom cakes", "homemade desserts", "Gul NiS Homey Bakes by SK", "bakery", "Coimbatore", "Tamil Nadu"],
  authors: [{ name: "Gul Nis" }],
  openGraph: {
    title: "Gul NiS Homey Bakes by SK",
    description: "Freshly baked brownies, blondies, cookie pies, cookies, waffles, hot chocolate, cakes, and chocolates. Homemade desserts from Gul NiS Homey Bakes by SK in Coimbatore.",
    url: "https://gulnis.in",
    siteName: "Gul NiS Homey Bakes by SK",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gul NiS Homey Bakes by SK",
    description: "Freshly baked brownies, blondies, cookie pies, cookies, waffles, hot chocolate, cakes, and chocolates. Homemade desserts from Gul NiS Homey Bakes by SK in Coimbatore.",
  },
  icons: {
    icon: "/gulnis.svg",
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
    "name": "Gul NiS Homey Bakes by SK",
    "image": "https://gulnis.in/images/hero-image.webp",
    "description": "Freshly baked brownies, blondies, cookie pies, cookies, waffles, hot chocolate, cakes, and chocolates. Homemade desserts from Gul NiS Homey Bakes by SK in Coimbatore.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "KG Smart City Apartment, Balaji Nagar, Phase II, Kalapatti",
      "addressLocality": "Coimbatore",
      "addressRegion": "Tamil Nadu",
      "postalCode": "641048",
      "addressCountry": "IN"
    },
    "telephone": process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919047220070",
    "url": "https://gulnis.in",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.instagram.com/gulnis2025/",
      "https://www.facebook.com/share/1KJX1kwPHg/",
      "https://www.youtube.com/@gulnishomeycakesbysk"
    ]
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${greatVibes.variable} h-full antialiased scroll-smooth`}
      data-scroll-behavior="smooth"
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

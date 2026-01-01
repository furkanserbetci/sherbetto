import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond, Alex_Brush } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CartDrawer from "@/components/CartDrawer";
import Analytics from "@/components/Analytics";
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration";
import PageTracker from "@/components/PageTracker";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const alexBrush = Alex_Brush({
  variable: "--font-signature",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const siteUrl = "https://sherbetto.com.tr";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#b8860b",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sherbetto | Doğallığın ve Kalitenin Lezzet Dokunuşu",
    template: "%s | Sherbetto",
  },
  description: "Mersin'in en kaliteli geleneksel Türk tatlıları. El yapımı baklava, künefe, kadayıf ve daha fazlası. %100 doğal malzemeler, günlük taze üretim. WhatsApp ile hızlı sipariş.",
  keywords: [
    "baklava",
    "künefe",
    "kadayıf",
    "türk tatlısı",
    "tatlı siparişi",
    "geleneksel tatlılar",
    "mersin tatlıcı",
    "fıstıklı baklava",
    "şöbiyet",
    "katmer",
    "maraş dondurması",
    "online tatlı sipariş",
  ],
  authors: [{ name: "Sherbetto" }],
  creator: "Sherbetto",
  publisher: "Sherbetto",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Sherbetto | Doğallığın ve Kalitenin Lezzet Dokunuşu",
    description: "Mersin'in en kaliteli geleneksel Türk tatlıları. El yapımı baklava, künefe, kadayıf. %100 doğal malzemeler.",
    url: siteUrl,
    siteName: "Sherbetto",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sherbetto - Geleneksel Türk Tatlıları",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sherbetto | Doğallığın ve Kalitenin Lezzet Dokunuşu",
    description: "Mersin'in en kaliteli geleneksel Türk tatlıları. El yapımı baklava, künefe, kadayıf.",
    images: ["/images/og-image.jpg"],
    creator: "@sherbettokunefe",
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
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: "GOOGLE_VERIFICATION_CODE",
  },
  category: "food",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Sherbetto",
  description: "Mersin'in en kaliteli geleneksel Türk tatlıları",
  url: siteUrl,
  logo: `${siteUrl}/images/logo.png`,
  image: `${siteUrl}/images/og-image.jpg`,
  telephone: "+905384507730",
  email: "sherbettokunefe@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mersin",
    addressCountry: "TR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 36.8121,
    longitude: 34.6415,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "08:00",
    closes: "02:00",
  },
  servesCuisine: "Turkish Desserts",
  priceRange: "₺₺",
  sameAs: ["https://instagram.com/sherbettokunefe"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "1000",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/icon.png?v=2" type="image/png" sizes="512x512" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Sherbetto" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Analytics />
      </head>
      <body className={`${inter.variable} ${cormorant.variable} ${alexBrush.variable} antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
        <CartDrawer />
        <ServiceWorkerRegistration />
        <PageTracker />
      </body>
    </html>
  );
}

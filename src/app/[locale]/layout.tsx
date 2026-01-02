import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond, Alex_Brush } from "next/font/google";
import { notFound } from "next/navigation";
import { Locale, locales, isRTL, getDictionary } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CartDrawer from "@/components/CartDrawer";
import Analytics from "@/components/Analytics";
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration";
import PageTracker from "@/components/PageTracker";
import { LocaleProvider } from "@/components/LocaleProvider";

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

const siteUrl = "https://sherbettokunefe.com";

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#b8860b",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<Locale, string> = {
    tr: "Sherbetto | Doğallığın ve Kalitenin Lezzet Dokunuşu",
    en: "Sherbetto | The Taste of Nature and Quality",
    ar: "Sherbetto | لمسة الطبيعة والجودة",
  };

  const descriptions: Record<Locale, string> = {
    tr: "Mersin'in en kaliteli geleneksel Türk tatlıları. El yapımı baklava, künefe, kadayıf ve daha fazlası. %100 doğal malzemeler, günlük taze üretim.",
    en: "The finest traditional Turkish desserts in Mersin. Handmade baklava, künefe, kadayıf and more. 100% natural ingredients, fresh daily production.",
    ar: "أفضل الحلويات التركية التقليدية في مرسين. بقلاوة وكنافة وقطايف مصنوعة يدوياً. مكونات طبيعية 100%، إنتاج طازج يومياً.",
  };

  const ogLocales: Record<Locale, string> = {
    tr: "tr_TR",
    en: "en_US",
    ar: "ar_SA",
  };

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: titles[locale as Locale] || titles.tr,
      template: "%s | Sherbetto",
    },
    description: descriptions[locale as Locale] || descriptions.tr,
    keywords: [
      "baklava",
      "künefe",
      "kadayıf",
      "türk tatlısı",
      "turkish desserts",
      "traditional sweets",
      "mersin",
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
      title: titles[locale as Locale] || titles.tr,
      description: descriptions[locale as Locale] || descriptions.tr,
      url: `${siteUrl}/${locale}`,
      siteName: "Sherbetto",
      images: [
        {
          url: "/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Sherbetto - Traditional Turkish Desserts",
        },
      ],
      locale: ogLocales[locale as Locale] || ogLocales.tr,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: titles[locale as Locale] || titles.tr,
      description: descriptions[locale as Locale] || descriptions.tr,
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
      canonical: `${siteUrl}/${locale}`,
      languages: {
        tr: `${siteUrl}/tr`,
        en: `${siteUrl}/en`,
        ar: `${siteUrl}/ar`,
        "x-default": `${siteUrl}/tr`,
      },
    },
    verification: {
      google: "GOOGLE_VERIFICATION_CODE",
    },
    category: "food",
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const dir = isRTL(locale as Locale) ? "rtl" : "ltr";
  const dictionary = getDictionary(locale as Locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Sherbetto",
    description:
      locale === "ar"
        ? "أفضل الحلويات التركية التقليدية في مرسين"
        : locale === "en"
        ? "The finest traditional Turkish desserts in Mersin"
        : "Mersin'in en kaliteli geleneksel Türk tatlıları",
    url: `${siteUrl}/${locale}`,
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
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "02:00",
    },
    servesCuisine: "Turkish Desserts",
    priceRange: "$$",
    sameAs: ["https://instagram.com/sherbettokunefe"],
  };

  return (
    <div dir={dir} className={`${inter.variable} ${cormorant.variable} ${alexBrush.variable} antialiased`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LocaleProvider locale={locale as Locale} dictionary={dictionary}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
        <CartDrawer />
      </LocaleProvider>
      <ServiceWorkerRegistration />
      <PageTracker />
    </div>
  );
}

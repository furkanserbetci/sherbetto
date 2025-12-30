import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Alex_Brush } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

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

export const metadata: Metadata = {
  title: "Sherbetto | Doğallığın ve Kalitenin Lezzet Dokunuşu",
  description: "Geleneksel Türk tatlıları - Baklava, Künefe, Kadayıf ve daha fazlası. En kaliteli malzemelerle hazırlanmış, evinize teslim.",
  keywords: "baklava, künefe, kadayıf, türk tatlısı, tatlı siparişi, geleneksel tatlılar",
  openGraph: {
    title: "Sherbetto | Doğallığın ve Kalitenin Lezzet Dokunuşu",
    description: "Geleneksel Türk tatlıları - Baklava, Künefe, Kadayıf ve daha fazlası.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} ${cormorant.variable} ${alexBrush.variable} antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

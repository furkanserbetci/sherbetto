"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale } from "./LocaleProvider";

export default function Hero() {
  const { locale, t, isRTL } = useLocale();

  const texts = {
    tr: {
      badge: "Geleneksel Lezzetler",
      titlePart1: "Doğallığın ve Kalitenin",
      titlePart2: "Lezzet Dokunuşu",
      subtitle: "En kaliteli malzemelerle, geleneksel tariflerle hazırlanan Türk tatlıları. Baklava, künefe, kadayıf ve daha fazlası.",
      explore: "Ürünleri İncele",
      order: "Hemen Sipariş Ver",
      stat1: "Yıllık Deneyim",
      stat2: "Ürün Çeşidi",
      stat3: "Mutlu Müşteri",
    },
    en: {
      badge: "Traditional Flavors",
      titlePart1: "The Taste of Nature",
      titlePart2: "and Quality",
      subtitle: "Turkish desserts prepared with the finest ingredients and traditional recipes. Baklava, künefe, kadayıf and more.",
      explore: "Explore Products",
      order: "Order Now",
      stat1: "Years Experience",
      stat2: "Product Varieties",
      stat3: "Happy Customers",
    },
    ar: {
      badge: "النكهات التقليدية",
      titlePart1: "لمسة الطبيعة",
      titlePart2: "والجودة",
      subtitle: "حلويات تركية محضرة بأجود المكونات والوصفات التقليدية. بقلاوة، كنافة، قطايف والمزيد.",
      explore: "استكشف المنتجات",
      order: "اطلب الآن",
      stat1: "سنوات الخبرة",
      stat2: "تشكيلة منتجات",
      stat3: "عميل سعيد",
    },
  };

  const content = texts[locale] || texts.tr;

  return (
    <section className="relative bg-[var(--primary)] text-white overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Image with Slow Zoom */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/images/products/kunefe.jpg"
            alt="Künefe"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      </div>

      {/* Floating decorative elements */}
      <motion.div
        className={`absolute top-20 ${isRTL ? "right-10" : "left-10"} w-20 h-20 bg-[var(--accent)] rounded-full opacity-20 blur-xl`}
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className={`absolute bottom-40 ${isRTL ? "left-20" : "right-20"} w-32 h-32 bg-[var(--accent)] rounded-full opacity-10 blur-2xl`}
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative w-full">
        <div className={`text-center max-w-3xl mx-auto ${isRTL ? "rtl" : ""}`}>
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block border border-[var(--accent)]/40 text-[var(--accent-light)] text-xs font-medium px-5 py-2 rounded-full mb-8 uppercase tracking-[0.2em]"
          >
            {content.badge}
          </motion.span>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl lg:text-7xl font-medium mb-8 leading-[1.1] tracking-tight"
          >
            {content.titlePart1}{" "}
            <motion.span
              className="text-[var(--accent)] inline-block"
              animate={{
                textShadow: [
                  "0 0 20px rgba(212, 175, 55, 0)",
                  "0 0 20px rgba(212, 175, 55, 0.5)",
                  "0 0 20px rgba(212, 175, 55, 0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {content.titlePart2}
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
          >
            {content.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? "sm:flex-row-reverse" : ""}`}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={`/${locale}/products`}
                className="inline-block bg-[var(--accent)] hover:bg-[var(--accent-light)] text-white px-10 py-4 rounded-full font-medium text-sm uppercase tracking-wider transition-all duration-300"
              >
                {content.explore}
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="https://wa.me/905384507730"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-transparent border border-white/30 hover:bg-white hover:text-[var(--primary)] text-white px-10 py-4 rounded-full font-medium text-sm uppercase tracking-wider transition-all duration-300"
              >
                {content.order}
              </a>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-xl mx-auto"
          >
            {[
              { number: "10+", label: content.stat1 },
              { number: "50+", label: content.stat2 },
              { number: "10K+", label: content.stat3 },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-[var(--accent)]">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-300 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="var(--background)"
          />
        </svg>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <svg className="w-6 h-6 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}

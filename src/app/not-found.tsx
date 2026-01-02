"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();

  // Detect locale from URL path
  const getLocaleFromPath = () => {
    if (pathname?.startsWith("/en")) return "en";
    if (pathname?.startsWith("/ar")) return "ar";
    return "tr";
  };

  const locale = getLocaleFromPath();
  const isRTL = locale === "ar";

  const texts = {
    tr: {
      title: "Sayfa Bulunamadı",
      description: "Aradığınız sayfa mevcut değil veya taşındı.",
      button: "Anasayfaya Dön",
    },
    en: {
      title: "Page Not Found",
      description: "The page you are looking for does not exist or has been moved.",
      button: "Back to Home",
    },
    ar: {
      title: "الصفحة غير موجودة",
      description: "الصفحة التي تبحث عنها غير موجودة أو تم نقلها.",
      button: "العودة للرئيسية",
    },
  };

  const content = texts[locale] || texts.tr;

  return (
    <div className={`min-h-[60vh] flex items-center justify-center bg-[var(--background)] ${isRTL ? "rtl" : ""}`}>
      <div className="text-center px-4">
        <h1 className="font-[family-name:var(--font-cormorant)] text-6xl font-bold text-[var(--accent)] mb-4">
          404
        </h1>
        <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[var(--primary)] mb-4">
          {content.title}
        </h2>
        <p className="text-gray-600 mb-8">
          {content.description}
        </p>
        <Link
          href={`/${locale}`}
          className="inline-block bg-[var(--accent)] hover:bg-[var(--accent-light)] text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200"
        >
          {content.button}
        </Link>
      </div>
    </div>
  );
}

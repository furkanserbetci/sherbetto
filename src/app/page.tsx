"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // Detect browser language
    const browserLang = navigator.language.slice(0, 2);
    const supportedLocales = ["tr", "en", "ar"];
    const locale = supportedLocales.includes(browserLang) ? browserLang : "tr";

    router.replace(`/${locale}`);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse text-accent">Yönlendiriliyor...</div>
    </div>
  );
}

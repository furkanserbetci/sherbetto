"use client";

import { useEffect } from "react";
import { Locale } from "@/lib/i18n";

interface LanguageUpdaterProps {
  locale: Locale;
}

export default function LanguageUpdater({ locale }: LanguageUpdaterProps) {
  useEffect(() => {
    // Update the html lang attribute based on current locale
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}

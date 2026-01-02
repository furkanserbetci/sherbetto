"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Locale, locales, localeNames } from "@/lib/i18n";
import { useLocale } from "@/components/LocaleProvider";

export default function LanguageSwitcher() {
  const { locale } = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const switchLocale = (newLocale: Locale) => {
    // Remove current locale from path and add new one
    const pathWithoutLocale = pathname.replace(`/${locale}`, "") || "/";
    const newPath = `/${newLocale}${pathWithoutLocale}`;

    // Set cookie for middleware
    document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000`;

    router.push(newPath);
    setIsOpen(false);
  };

  const flags: Record<Locale, string> = {
    tr: "TR",
    en: "EN",
    ar: "AR",
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium border border-gray-200"
        aria-label="Select language"
      >
        <span className="text-xs font-semibold">{flags[locale]}</span>
        <svg
          className={`w-3.5 h-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 rtl:right-auto rtl:left-0 bg-white border border-gray-200 rounded-lg shadow-lg py-1.5 min-w-[130px] z-50">
          {locales.map((loc) => (
            <button
              key={loc}
              onClick={() => switchLocale(loc)}
              className={`w-full flex items-center gap-3 px-3 py-2 text-sm hover:bg-gray-50 transition-colors ${
                locale === loc ? "bg-gray-50 text-[var(--accent)]" : "text-gray-700"
              }`}
            >
              <span className="text-xs font-semibold w-6">{flags[loc]}</span>
              <span>{localeNames[loc]}</span>
              {locale === loc && (
                <svg
                  className="w-4 h-4 ms-auto"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

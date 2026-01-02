"use client";

import { useState, useEffect, useRef } from "react";
import { products, Product, getLocalizedText } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/components/LocaleProvider";

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { locale, t } = useLocale();

  // Search logic
  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      return;
    }

    const searchQuery = query.toLowerCase().trim();
    const filtered = products.filter(
      (product) =>
        getLocalizedText(product.name, locale).toLowerCase().includes(searchQuery) ||
        getLocalizedText(product.description, locale).toLowerCase().includes(searchQuery) ||
        product.category.toLowerCase().includes(searchQuery)
    );
    setResults(filtered);
  }, [query, locale]);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setQuery("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Keyboard shortcut (Ctrl/Cmd + K)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        setIsOpen(true);
        setTimeout(() => inputRef.current?.focus(), 100);
      }
      if (event.key === "Escape") {
        setIsOpen(false);
        setQuery("");
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const handleResultClick = () => {
    setIsOpen(false);
    setQuery("");
  };

  return (
    <div ref={containerRef} className="relative">
      {/* Search Button */}
      <button
        onClick={handleOpen}
        className="flex items-center gap-2 px-3 py-2 text-gray-500 hover:text-[var(--accent)] transition-colors"
        aria-label={t("common.search")}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span className="hidden lg:inline text-sm">{t("common.search")}</span>
        <kbd className="hidden lg:inline-flex items-center gap-1 px-2 py-0.5 text-xs text-gray-400 bg-gray-100 rounded border border-gray-200">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      {/* Search Modal */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/50 z-50" onClick={() => setIsOpen(false)} />

          {/* Search Panel */}
          <div className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-2xl z-50 px-4">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Search Input */}
              <div className="flex items-center gap-3 px-4 py-3 border-b">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={t("search.placeholder")}
                  className="flex-1 outline-none text-lg"
                />
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setQuery("");
                  }}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <kbd className="px-2 py-1 text-xs bg-gray-100 rounded border border-gray-200">ESC</kbd>
                </button>
              </div>

              {/* Results */}
              <div className="max-h-96 overflow-y-auto">
                {query.trim().length < 2 ? (
                  <div className="p-6 text-center text-gray-500">
                    <p className="mb-2">{t("search.popular")}</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {[t("products.baklava"), t("products.kunefe"), t("products.kadayif")].map((term) => (
                        <button
                          key={term}
                          onClick={() => setQuery(term)}
                          className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm transition-colors"
                        >
                          {term}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : results.length === 0 ? (
                  <div className="p-6 text-center text-gray-500">
                    <svg className="w-12 h-12 mx-auto mb-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p>&quot;{query}&quot; {t("search.noResults")}</p>
                  </div>
                ) : (
                  <div className="divide-y">
                    {results.map((product) => (
                      <Link
                        key={product.id}
                        href={`/${locale}/products/${product.id}`}
                        onClick={handleResultClick}
                        className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors"
                      >
                        <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={product.image}
                            alt={getLocalizedText(product.name, locale)}
                            fill
                            className="object-cover"
                            sizes="64px"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-[var(--primary)] truncate">
                            {getLocalizedText(product.name, locale)}
                          </h4>
                          <p className="text-sm text-gray-500 truncate">
                            {getLocalizedText(product.description, locale)}
                          </p>
                        </div>
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {results.length > 0 && (
                <div className="p-3 bg-gray-50 border-t text-center">
                  <Link
                    href={`/${locale}/products`}
                    onClick={handleResultClick}
                    className="text-sm text-[var(--accent)] hover:underline"
                  >
                    {t("search.viewAll")} ({products.length} {t("search.products")})
                  </Link>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

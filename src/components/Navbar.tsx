"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Anasayfa" },
    { href: "/urunler", label: "Ürünler" },
    { href: "/hakkimizda", label: "Hakkımızda" },
    { href: "/iletisim", label: "İletişim" },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-[var(--border-light)] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Sherbetto"
              width={250}
              height={80}
              className="h-16 md:h-20 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[var(--foreground)] hover:text-[var(--accent)] transition-all duration-300 font-medium tracking-wide text-sm uppercase"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/905384507730"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--accent)] hover:bg-[var(--accent-light)] text-white px-6 py-2.5 rounded-full font-medium transition-colors duration-200"
            >
              Sipariş Ver
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-[var(--foreground)]"
            aria-label="Menü"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-[var(--foreground)] hover:text-[var(--accent)] transition-colors duration-200 font-medium py-2"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://wa.me/905384507730"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--accent)] hover:bg-[var(--accent-light)] text-white px-6 py-3 rounded-full font-medium transition-colors duration-200 text-center"
              >
                Sipariş Ver
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

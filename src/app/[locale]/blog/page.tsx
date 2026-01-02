"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { blogPosts, blogCategories, getLocalizedBlogText } from "@/data/blog";
import { useLocale } from "@/components/LocaleProvider";

export default function BlogPage() {
  const { locale, t, isRTL } = useLocale();
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const texts = {
    tr: {
      pageTitle: "Blog",
      pageSubtitle: "Geleneksel Türk tatlıları hakkında tarifler, hikayeler ve ipuçları",
      readTime: "dk okuma",
      readMore: "Devamını Oku",
      newsletterTitle: "Yeni İçeriklerden Haberdar Olun",
      newsletterDesc: "En son tarifler, hikayeler ve özel teklifler için bültenimize abone olun",
      emailPlaceholder: "E-posta adresiniz",
      subscribe: "Abone Ol",
      subscribeSuccess: "Teşekkürler! Bültenimize başarıyla abone oldunuz.",
    },
    en: {
      pageTitle: "Blog",
      pageSubtitle: "Recipes, stories and tips about traditional Turkish desserts",
      readTime: "min read",
      readMore: "Read More",
      newsletterTitle: "Stay Updated",
      newsletterDesc: "Subscribe to our newsletter for the latest recipes, stories and special offers",
      emailPlaceholder: "Your email address",
      subscribe: "Subscribe",
      subscribeSuccess: "Thank you! You have successfully subscribed to our newsletter.",
    },
    ar: {
      pageTitle: "المدونة",
      pageSubtitle: "وصفات وقصص ونصائح حول الحلويات التركية التقليدية",
      readTime: "دقيقة قراءة",
      readMore: "اقرأ المزيد",
      newsletterTitle: "ابق على اطلاع",
      newsletterDesc: "اشترك في نشرتنا للحصول على أحدث الوصفات والقصص والعروض الخاصة",
      emailPlaceholder: "بريدك الإلكتروني",
      subscribe: "اشترك",
      subscribeSuccess: "شكراً لك! لقد اشتركت بنجاح في نشرتنا الإخبارية.",
    },
  };

  const content = texts[locale] || texts.tr;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Open email client with subscription request
      const subject = encodeURIComponent("Newsletter Subscription - Sherbetto");
      const body = encodeURIComponent(`I would like to subscribe to the Sherbetto newsletter.\n\nEmail: ${email}`);
      window.location.href = `mailto:sherbettokunefe@gmail.com?subject=${subject}&body=${body}`;

      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  return (
    <>
      {/* Header */}
      <section className="bg-[var(--primary)] text-white py-16">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center ${isRTL ? "rtl" : ""}`}>
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-bold mb-4">
            {content.pageTitle}
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {content.pageSubtitle}
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex flex-wrap justify-center gap-3 ${isRTL ? "rtl" : ""}`}>
            {blogCategories.map((category) => (
              <button
                key={category.id}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  category.id === "all"
                    ? "bg-[var(--accent)] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {getLocalizedBlogText(category.name, locale)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${isRTL ? "rtl" : ""}`}>
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
              >
                <Link href={`/${locale}/blog/${post.slug}`} className="block">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={getLocalizedBlogText(post.title, locale)}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className={`absolute top-4 ${isRTL ? "right-4" : "left-4"}`}>
                      <span className="bg-[var(--accent)] text-white text-xs font-medium px-3 py-1 rounded-full">
                        {getLocalizedBlogText(post.category, locale)}
                      </span>
                    </div>
                  </div>
                </Link>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                    <span>
                      {new Date(post.date).toLocaleDateString(
                        locale === "ar" ? "ar-SA" : locale === "en" ? "en-US" : "tr-TR"
                      )}
                    </span>
                    <span>•</span>
                    <span>{post.readTime} {content.readTime}</span>
                  </div>
                  <Link href={`/${locale}/blog/${post.slug}`}>
                    <h2 className="font-[family-name:var(--font-cormorant)] text-xl font-bold text-[var(--primary)] mb-2 hover:text-[var(--accent)] transition-colors">
                      {getLocalizedBlogText(post.title, locale)}
                    </h2>
                  </Link>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                    {getLocalizedBlogText(post.excerpt, locale)}
                  </p>
                  <Link
                    href={`/${locale}/blog/${post.slug}`}
                    className="text-[var(--accent)] font-medium text-sm inline-flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    {content.readMore}
                    <svg className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-white">
        <div className={`max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center ${isRTL ? "rtl" : ""}`}>
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[var(--primary)] mb-4">
            {content.newsletterTitle}
          </h2>
          <p className="text-gray-600 mb-8">
            {content.newsletterDesc}
          </p>

          {isSubscribed ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center justify-center gap-3">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-green-700 font-medium">
                {content.subscribeSuccess}
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className={`flex flex-col sm:flex-row gap-3 max-w-md mx-auto ${isRTL ? "sm:flex-row-reverse" : ""}`}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={content.emailPlaceholder}
                required
                className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none"
                dir={isRTL ? "rtl" : "ltr"}
              />
              <button
                type="submit"
                className="bg-[var(--accent)] hover:bg-[var(--accent-light)] text-white px-8 py-3 rounded-full font-medium transition-colors"
              >
                {content.subscribe}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

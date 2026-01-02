import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { blogPosts, getLocalizedBlogText } from "@/data/blog";
import { locales, Locale } from "@/lib/i18n";

// Import translations
import trLocale from "@/locales/tr.json";
import enLocale from "@/locales/en.json";
import arLocale from "@/locales/ar.json";

const translations = {
  tr: trLocale,
  en: enLocale,
  ar: arLocale,
};

// Generate all possible paths for static export
export function generateStaticParams() {
  const paths: { locale: string; slug: string }[] = [];

  for (const locale of locales) {
    for (const post of blogPosts) {
      paths.push({
        locale,
        slug: post.slug,
      });
    }
  }

  return paths;
}

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { locale: localeParam, slug } = await params;
  const locale = (localeParam as Locale) || "tr";
  const isRTL = locale === "ar";
  const t = translations[locale] || translations.tr;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const postTitle = getLocalizedBlogText(post.title, locale);
  const postContent = getLocalizedBlogText(post.content, locale);
  const postCategory = getLocalizedBlogText(post.category, locale);
  const postExcerpt = getLocalizedBlogText(post.excerpt, locale);

  // Get related posts (exclude current)
  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id)
    .slice(0, 2);

  const texts = {
    tr: {
      backToBlog: "Blog'a Dön",
      readTime: "dakika okuma",
      relatedPosts: "Diğer Yazılar",
      share: "Paylaş",
      author: "Yazar",
    },
    en: {
      backToBlog: "Back to Blog",
      readTime: "min read",
      relatedPosts: "Related Posts",
      share: "Share",
      author: "Author",
    },
    ar: {
      backToBlog: "العودة للمدونة",
      readTime: "دقيقة قراءة",
      relatedPosts: "مقالات أخرى",
      share: "شارك",
      author: "الكاتب",
    },
  };

  const content = texts[locale] || texts.tr;

  // Format date
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(locale === "ar" ? "ar-SA" : locale === "en" ? "en-US" : "tr-TR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Simple markdown to HTML conversion for headers and lists
  const renderContent = (text: string) => {
    return text
      .split("\n")
      .map((line, i) => {
        const trimmed = line.trim();
        if (trimmed.startsWith("## ")) {
          return (
            <h2 key={i} className="text-2xl font-bold text-[var(--primary)] mt-8 mb-4">
              {trimmed.replace("## ", "")}
            </h2>
          );
        }
        if (trimmed.startsWith("- **")) {
          const match = trimmed.match(/- \*\*(.+?)\*\*: (.+)/);
          if (match) {
            return (
              <li key={i} className="ml-4 mb-2">
                <strong>{match[1]}</strong>: {match[2]}
              </li>
            );
          }
        }
        if (trimmed.startsWith("- ")) {
          return (
            <li key={i} className="ml-4 mb-2">
              {trimmed.replace("- ", "")}
            </li>
          );
        }
        if (/^\d+\. /.test(trimmed)) {
          return (
            <li key={i} className="ml-4 mb-2 list-decimal">
              {trimmed.replace(/^\d+\. /, "")}
            </li>
          );
        }
        if (trimmed === "") {
          return <br key={i} />;
        }
        return (
          <p key={i} className="mb-4 leading-relaxed">
            {trimmed}
          </p>
        );
      });
  };

  return (
    <>
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4 border-b">
        <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ${isRTL ? "rtl" : ""}`}>
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href={`/${locale}`} className="hover:text-[var(--accent)]">
              {t.common.home}
            </Link>
            <span>/</span>
            <Link href={`/${locale}/blog`} className="hover:text-[var(--accent)]">
              {t.common.blog}
            </Link>
            <span>/</span>
            <span className="text-[var(--primary)] font-medium truncate max-w-[200px]">{postTitle}</span>
          </nav>
        </div>
      </section>

      {/* Blog Header */}
      <section className="bg-[var(--primary)] text-white py-12">
        <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ${isRTL ? "rtl text-right" : ""}`}>
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-6 transition-colors"
          >
            <svg className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {content.backToBlog}
          </Link>

          <span className="inline-block bg-[var(--accent)] text-white text-xs font-medium px-3 py-1 rounded-full mb-4">
            {postCategory}
          </span>

          <h1 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {postTitle}
          </h1>

          <p className="text-gray-300 text-lg mb-6">
            {postExcerpt}
          </p>

          <div className={`flex items-center gap-6 text-sm text-gray-300 ${isRTL ? "flex-row-reverse" : ""}`}>
            <div className={`flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
              <div className="w-10 h-10 bg-[var(--accent)] rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">S</span>
              </div>
              <div>
                <p className="text-white font-medium">{post.author}</p>
                <p className="text-xs">{content.author}</p>
              </div>
            </div>
            <span>•</span>
            <span>{formatDate(post.date)}</span>
            <span>•</span>
            <span>{post.readTime} {content.readTime}</span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={post.image}
            alt={postTitle}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 900px"
            priority
          />
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12">
        <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ${isRTL ? "rtl text-right" : ""}`}>
          <article className="prose prose-lg max-w-none text-gray-700">
            {renderContent(postContent)}
          </article>
        </div>
      </section>

      {/* Share Section */}
      <section className="py-8 border-t border-b">
        <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ${isRTL ? "rtl" : ""}`}>
          <div className={`flex items-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
            <span className="text-gray-600 font-medium">{content.share}:</span>
            <div className={`flex gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(postTitle)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#25D366] text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(postTitle)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl font-bold text-[var(--primary)] mb-8 ${isRTL ? "rtl text-right" : ""}`}>
              {content.relatedPosts}
            </h2>
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${isRTL ? "rtl" : ""}`}>
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/${locale}/blog/${relatedPost.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={relatedPost.image}
                      alt={getLocalizedBlogText(relatedPost.title, locale)}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <span className="absolute top-4 left-4 bg-[var(--accent)] text-white text-xs font-medium px-3 py-1 rounded-full">
                      {getLocalizedBlogText(relatedPost.category, locale)}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-semibold text-[var(--primary)] group-hover:text-[var(--accent)] transition-colors mb-2">
                      {getLocalizedBlogText(relatedPost.title, locale)}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {getLocalizedBlogText(relatedPost.excerpt, locale)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

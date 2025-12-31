import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts, blogCategories } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Geleneksel Türk tatlıları hakkında tarifler, hikayeler ve ipuçları.",
};

export default function BlogPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[var(--primary)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-bold mb-4">
            Blog
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Geleneksel Türk tatlıları hakkında tarifler, hikayeler ve ipuçları
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {blogCategories.map((category) => (
              <button
                key={category.id}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  category.id === "all"
                    ? "bg-[var(--accent)] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[var(--accent)] text-white text-xs font-medium px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                </Link>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                    <span>{new Date(post.date).toLocaleDateString("tr-TR")}</span>
                    <span>•</span>
                    <span>{post.readTime} dk okuma</span>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="font-[family-name:var(--font-cormorant)] text-xl font-bold text-[var(--primary)] mb-2 hover:text-[var(--accent)] transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-[var(--accent)] font-medium text-sm inline-flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Devamını Oku
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[var(--primary)] mb-4">
            Yeni İçeriklerden Haberdar Olun
          </h2>
          <p className="text-gray-600 mb-8">
            En son tarifler, hikayeler ve özel teklifler için bültenimize abone olun
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none"
            />
            <button
              type="submit"
              className="bg-[var(--accent)] hover:bg-[var(--accent-light)] text-white px-8 py-3 rounded-full font-medium transition-colors"
            >
              Abone Ol
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

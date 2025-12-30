import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { featuredProducts } from "@/data/products";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Featured Products Section */}
      <section className="py-24 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--accent)] text-xs font-medium uppercase tracking-[0.2em] mb-4 block">
              Koleksiyon
            </span>
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-5xl font-medium text-[var(--primary)] mb-5 tracking-tight">
              Öne Çıkan Ürünlerimiz
            </h2>
            <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto leading-relaxed">
              En çok tercih edilen, müşterilerimizin favorisi olan özel lezzetlerimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/urunler"
              className="inline-block bg-[var(--primary)] hover:bg-[var(--foreground)] text-white px-10 py-4 rounded-full font-medium text-sm uppercase tracking-wider transition-all duration-300"
            >
              Tüm Ürünleri Gör
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--accent)] text-xs font-medium uppercase tracking-[0.2em] mb-4 block">
              Farkımız
            </span>
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-5xl font-medium text-[var(--primary)] tracking-tight">
              Neden Sherbetto?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-10 rounded-2xl border border-[var(--border-light)] hover:border-[var(--accent-light)] transition-all duration-500">
              <div className="w-14 h-14 bg-[var(--accent-soft)] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-medium mb-4 text-[var(--primary)]">
                %100 Doğal Malzeme
              </h3>
              <p className="text-[var(--foreground-muted)] leading-relaxed">
                Tüm ürünlerimizde en kaliteli ve doğal malzemeler kullanılır. Katkı maddesi yoktur.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-10 rounded-2xl border border-[var(--border-light)] hover:border-[var(--accent-light)] transition-all duration-500">
              <div className="w-14 h-14 bg-[var(--accent-soft)] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-medium mb-4 text-[var(--primary)]">
                Günlük Taze Üretim
              </h3>
              <p className="text-[var(--foreground-muted)] leading-relaxed">
                Her gün taze taze üretim yapılır. Siparişleriniz en taze haliyle elinize ulaşır.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-10 rounded-2xl border border-[var(--border-light)] hover:border-[var(--accent-light)] transition-all duration-500">
              <div className="w-14 h-14 bg-[var(--accent-soft)] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-medium mb-4 text-[var(--primary)]">
                Hızlı Teslimat
              </h3>
              <p className="text-[var(--foreground-muted)] leading-relaxed">
                Mersin ve çevre illere aynı gün teslimat. Özenli paketleme ile güvenli ulaşım.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-[var(--primary)] to-[#0a0a0a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[var(--accent-light)] text-xs font-medium uppercase tracking-[0.2em] mb-6 block">
            Sipariş
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-5xl font-medium mb-6 tracking-tight">
            Siparişleriniz İçin Bizi Arayın
          </h2>
          <p className="text-gray-400 text-lg mb-10 font-light">
            WhatsApp üzerinden kolayca sipariş verebilir, sorularınızı sorabilirsiniz.
          </p>
          <a
            href="https://wa.me/905384507730"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5C] text-white px-10 py-4 rounded-full font-semibold text-lg transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp ile Sipariş Ver
          </a>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-24 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[var(--accent)] text-xs font-medium uppercase tracking-[0.2em] mb-4 block">
            Sosyal Medya
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-5xl font-medium text-[var(--primary)] mb-5 tracking-tight">
            Bizi Instagram&apos;da Takip Edin
          </h2>
          <p className="text-[var(--foreground-muted)] mb-10">
            En son ürünlerimiz ve kampanyalarımız için @sherbettokunefe
          </p>
          <a
            href="https://instagram.com/sherbettokunefe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold transition-transform hover:scale-105"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @sherbettokunefe
          </a>
        </div>
      </section>
    </>
  );
}

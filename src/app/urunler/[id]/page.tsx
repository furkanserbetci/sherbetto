import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, Product } from "@/data/products";
import ProductActions from "@/components/ProductActions";

interface Props {
  params: Promise<{ id: string }>;
}

// Generate static params for all products
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

// Generate metadata for each product
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return {
      title: "Ürün Bulunamadı",
    };
  }

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: `${product.name} | Sherbetto`,
      description: product.description,
      images: [product.image],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Sherbetto`,
      description: product.description,
      images: [product.image],
    },
  };
}

// Get related products (same category, excluding current)
function getRelatedProducts(product: Product): Product[] {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);
}

// Category name mapping
const categoryNames: Record<string, string> = {
  baklava: "Baklava",
  kunefe: "Künefe",
  kadayif: "Kadayıf",
  diger: "Diğer Tatlılar",
};

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product);

  // JSON-LD for product
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `https://sherbetto.com.tr${product.image}`,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Sherbetto",
      },
    },
    category: categoryNames[product.category],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-[var(--accent)] transition-colors">
              Anasayfa
            </Link>
            <span>/</span>
            <Link href="/urunler" className="hover:text-[var(--accent)] transition-colors">
              Ürünler
            </Link>
            <span>/</span>
            <Link
              href={`/urunler?kategori=${product.category}`}
              className="hover:text-[var(--accent)] transition-colors"
            >
              {categoryNames[product.category]}
            </Link>
            <span>/</span>
            <span className="text-[var(--primary)] font-medium">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {product.featured && (
                <span className="absolute top-6 left-6 bg-[var(--accent)] text-white text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-wider">
                  Öne Çıkan
                </span>
              )}
            </div>

            {/* Details */}
            <div className="flex flex-col justify-center">
              <div className="mb-4">
                <span className="inline-block bg-[var(--accent-soft)] text-[var(--accent)] text-sm font-medium px-3 py-1 rounded-full">
                  {categoryNames[product.category]}
                </span>
              </div>

              <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-bold text-[var(--primary)] mb-4">
                {product.name}
              </h1>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 mx-auto mb-2 bg-[var(--accent-soft)] rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-xs text-gray-600 font-medium">%100 Doğal</span>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 mx-auto mb-2 bg-[var(--accent-soft)] rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-xs text-gray-600 font-medium">Günlük Taze</span>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 mx-auto mb-2 bg-[var(--accent-soft)] rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-xs text-gray-600 font-medium">Hızlı Teslimat</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <ProductActions product={product} />
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[var(--primary)] mb-8 text-center">
              Benzer Ürünler
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/urunler/${relatedProduct.id}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[var(--accent-light)] hover:shadow-xl transition-all duration-500"
                >
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-[family-name:var(--font-cormorant)] text-lg font-semibold text-[var(--primary)] mb-2">
                      {relatedProduct.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to Products */}
      <section className="py-8 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/urunler"
            className="inline-flex items-center gap-2 text-[var(--primary)] hover:text-[var(--accent)] font-medium transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Tüm Ürünleri Görüntüle
          </Link>
        </div>
      </section>
    </>
  );
}

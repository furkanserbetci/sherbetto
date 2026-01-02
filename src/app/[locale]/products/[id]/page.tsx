import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products, getLocalizedText } from "@/data/products";
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
  const paths: { locale: string; id: string }[] = [];

  for (const locale of locales) {
    for (const product of products) {
      paths.push({
        locale,
        id: product.id.toString(),
      });
    }
  }

  return paths;
}

interface PageProps {
  params: Promise<{ locale: string; id: string }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { locale: localeParam, id } = await params;
  const locale = (localeParam as Locale) || "tr";
  const isRTL = locale === "ar";
  const t = translations[locale] || translations.tr;

  const productId = parseInt(id, 10);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    notFound();
  }

  const productName = getLocalizedText(product.name, locale);
  const productDescription = getLocalizedText(product.description, locale);

  const whatsappMessage = `${t.whatsapp.greeting} ${productName} ${t.whatsapp.infoMessage}`;
  const whatsappLink = `https://wa.me/905384507730?text=${encodeURIComponent(whatsappMessage)}`;

  // Get related products (same category, exclude current)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const texts = {
    tr: {
      backToProducts: "Tüm Ürünler",
      orderNow: "Hemen Sipariş Ver",
      callUs: "Bizi Arayın",
      relatedProducts: "Benzer Ürünler",
      ingredients: "Malzemeler",
      ingredientsDesc: "%100 doğal malzemeler ile üretilmektedir. Katkı maddesi içermez.",
      freshDaily: "Günlük Taze",
      freshDailyDesc: "Her gün taze olarak üretilir ve paketlenir.",
      delivery: "Hızlı Teslimat",
      deliveryDesc: "Mersin ve çevresine aynı gün teslimat.",
    },
    en: {
      backToProducts: "All Products",
      orderNow: "Order Now",
      callUs: "Call Us",
      relatedProducts: "Related Products",
      ingredients: "Ingredients",
      ingredientsDesc: "Made with 100% natural ingredients. No additives.",
      freshDaily: "Fresh Daily",
      freshDailyDesc: "Produced and packaged fresh every day.",
      delivery: "Fast Delivery",
      deliveryDesc: "Same-day delivery to Mersin and surrounding areas.",
    },
    ar: {
      backToProducts: "جميع المنتجات",
      orderNow: "اطلب الآن",
      callUs: "اتصل بنا",
      relatedProducts: "منتجات مشابهة",
      ingredients: "المكونات",
      ingredientsDesc: "مصنوع من مكونات طبيعية 100%. لا يحتوي على إضافات.",
      freshDaily: "طازج يومياً",
      freshDailyDesc: "يتم إنتاجه وتعبئته طازجاً كل يوم.",
      delivery: "توصيل سريع",
      deliveryDesc: "توصيل في نفس اليوم لمرسين والمناطق المحيطة.",
    },
  };

  const content = texts[locale] || texts.tr;

  return (
    <>
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4 border-b">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isRTL ? "rtl" : ""}`}>
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href={`/${locale}`} className="hover:text-[var(--accent)]">
              {t.common.home}
            </Link>
            <span>/</span>
            <Link href={`/${locale}/products`} className="hover:text-[var(--accent)]">
              {t.common.products}
            </Link>
            <span>/</span>
            <span className="text-[var(--primary)] font-medium">{productName}</span>
          </nav>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 ${isRTL ? "rtl" : ""}`}>
            {/* Product Image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src={product.image}
                alt={productName}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {product.featured && (
                <span className="absolute top-4 left-4 bg-[var(--accent)] text-white text-xs font-medium px-3 py-1.5 rounded-full uppercase tracking-wider">
                  {t.products.featured}
                </span>
              )}
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-center">
              <Link
                href={`/${locale}/products`}
                className="inline-flex items-center gap-2 text-[var(--accent)] hover:text-[var(--accent-light)] mb-4 transition-colors w-fit"
              >
                <svg className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                {content.backToProducts}
              </Link>

              <h1 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--primary)] mb-4">
                {productName}
              </h1>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {productDescription}
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 bg-[var(--accent-soft)] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-[var(--primary)]">{content.ingredients}</h4>
                    <p className="text-sm text-gray-500">{content.ingredientsDesc}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 bg-[var(--accent-soft)] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-[var(--primary)]">{content.freshDaily}</h4>
                    <p className="text-sm text-gray-500">{content.freshDailyDesc}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 bg-[var(--accent-soft)] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-[var(--primary)]">{content.delivery}</h4>
                    <p className="text-sm text-gray-500">{content.deliveryDesc}</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className={`flex flex-col sm:flex-row gap-4 ${isRTL ? "sm:flex-row-reverse" : ""}`}>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#25D366] hover:bg-[#20BA5C] text-white px-8 py-4 rounded-full font-semibold text-center transition-colors duration-200 flex items-center justify-center gap-3"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  {content.orderNow}
                </a>
                <a
                  href="tel:+903243573000"
                  className="flex-1 bg-[var(--primary)] hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold text-center transition-colors duration-200 flex items-center justify-center gap-3"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {content.callUs}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl font-bold text-[var(--primary)] mb-8 ${isRTL ? "rtl text-right" : ""}`}>
              {content.relatedProducts}
            </h2>
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${isRTL ? "rtl" : ""}`}>
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/${locale}/products/${relatedProduct.id}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={relatedProduct.image}
                      alt={getLocalizedText(relatedProduct.name, locale)}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-[family-name:var(--font-cormorant)] text-lg font-semibold text-[var(--primary)] group-hover:text-[var(--accent)] transition-colors">
                      {getLocalizedText(relatedProduct.name, locale)}
                    </h3>
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

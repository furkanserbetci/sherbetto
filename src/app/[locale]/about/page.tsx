"use client";

import { useLocale } from "@/components/LocaleProvider";

export default function AboutPage() {
  const { locale, t, isRTL } = useLocale();

  const texts = {
    tr: {
      pageTitle: "Hakkımızda",
      pageSubtitle: "Doğallığın ve Kalitenin Lezzet Dokunuşu",
      storyTitle: "Hikayemiz",
      storyP1: "Sherbetto, geleneksel Türk tatlı kültürünü modern dünyaya taşımak amacıyla kurulmuş bir ailedir. Yıllardır sürdürdüğümüz ustalığı, nesiller boyu aktarılan tarifleri ve en kaliteli malzemeleri bir araya getirerek sizlere eşsiz lezzetler sunuyoruz.",
      storyP2: "Her bir ürünümüz, özenle seçilmiş hammaddelerle, geleneksel yöntemlerle ve büyük bir tutku ile hazırlanır. Antep fıstığımız Gaziantep'in en kaliteli bahçelerinden, balımız Anadolu'nun bereketli topraklarından, yufkalarımız usta ellerden geliyor.",
      storyP3: "Amacımız sadece tatlı satmak değil; her lokmada bir hikaye anlatmak, her tatla bir geleneği yaşatmaktır.",
      valuesTitle: "Değerlerimiz",
      value1Title: "Tutku",
      value1Desc: "Her ürünümüzün arkasında yılların deneyimi ve büyük bir tutku var. İşimizi severek yapıyoruz.",
      value2Title: "Kalite",
      value2Desc: "Sadece en kaliteli malzemeleri kullanırız. Kaliteden asla ödün vermeyiz.",
      value3Title: "Tazelik",
      value3Desc: "Tüm ürünlerimiz günlük olarak üretilir. Her zaman taze ve lezzetli.",
      commitmentTitle: "Kalite Taahhüdümüz",
      commitmentDesc: "Her bir ürünümüzde kullanılan malzemeler titizlikle seçilir. Antep fıstığı, taze tereyağı, doğal bal ve özel yufkalar... Hiçbir ürünümüzde yapay katkı maddesi, koruyucu veya renklendirici kullanılmaz.",
      stat1: "Doğal Malzeme",
      stat2: "Ürün Çeşidi",
      stat3: "Mutlu Müşteri",
      stat4: "Müşteri Memnuniyeti",
      ctaTitle: "Lezzetlerimizi Denediniz Mi?",
      ctaDesc: "Sizin için en taze tatlıları hazırlamaktan mutluluk duyarız.",
      ctaButton: "Şimdi Sipariş Verin",
    },
    en: {
      pageTitle: "About Us",
      pageSubtitle: "The Taste of Nature and Quality",
      storyTitle: "Our Story",
      storyP1: "Sherbetto is a family established to bring traditional Turkish dessert culture to the modern world. We combine years of craftsmanship, recipes passed down through generations, and the finest ingredients to offer you unique flavors.",
      storyP2: "Each of our products is prepared with carefully selected raw materials, traditional methods, and great passion. Our pistachios come from the finest orchards of Gaziantep, our honey from the fertile lands of Anatolia, and our phyllo from master hands.",
      storyP3: "Our goal is not just to sell desserts; it is to tell a story in every bite and keep a tradition alive with every taste.",
      valuesTitle: "Our Values",
      value1Title: "Passion",
      value1Desc: "Behind every product is years of experience and great passion. We love what we do.",
      value2Title: "Quality",
      value2Desc: "We only use the highest quality ingredients. We never compromise on quality.",
      value3Title: "Freshness",
      value3Desc: "All our products are made daily. Always fresh and delicious.",
      commitmentTitle: "Our Quality Commitment",
      commitmentDesc: "The ingredients used in each of our products are carefully selected. Pistachios, fresh butter, natural honey, and special phyllo... None of our products contain artificial additives, preservatives, or colorings.",
      stat1: "Natural Ingredients",
      stat2: "Product Varieties",
      stat3: "Happy Customers",
      stat4: "Customer Satisfaction",
      ctaTitle: "Have You Tried Our Flavors?",
      ctaDesc: "We are happy to prepare the freshest desserts for you.",
      ctaButton: "Order Now",
    },
    ar: {
      pageTitle: "من نحن",
      pageSubtitle: "لمسة الطبيعة والجودة",
      storyTitle: "قصتنا",
      storyP1: "شربتو هي عائلة تأسست لنقل ثقافة الحلويات التركية التقليدية إلى العالم الحديث. نجمع بين سنوات من الحرفية والوصفات المتوارثة عبر الأجيال وأفضل المكونات لنقدم لكم نكهات فريدة.",
      storyP2: "يتم تحضير كل منتج من منتجاتنا بمواد خام مختارة بعناية وطرق تقليدية وشغف كبير. الفستق من أفضل بساتين غازي عنتاب والعسل من أراضي الأناضول الخصبة والعجين من أيدي ماهرة.",
      storyP3: "هدفنا ليس فقط بيع الحلويات؛ بل سرد قصة في كل قضمة وإحياء تقليد مع كل طعم.",
      valuesTitle: "قيمنا",
      value1Title: "الشغف",
      value1Desc: "وراء كل منتج سنوات من الخبرة وشغف كبير. نحب ما نفعله.",
      value2Title: "الجودة",
      value2Desc: "نستخدم فقط أجود المكونات. لا نتنازل أبداً عن الجودة.",
      value3Title: "الطازجة",
      value3Desc: "جميع منتجاتنا تصنع يومياً. دائماً طازجة ولذيذة.",
      commitmentTitle: "التزامنا بالجودة",
      commitmentDesc: "المكونات المستخدمة في كل منتجاتنا مختارة بعناية. الفستق والزبدة الطازجة والعسل الطبيعي والعجين الخاص... لا تحتوي أي من منتجاتنا على إضافات صناعية أو مواد حافظة أو ملونات.",
      stat1: "مكونات طبيعية",
      stat2: "تشكيلة منتجات",
      stat3: "عميل سعيد",
      stat4: "رضا العملاء",
      ctaTitle: "هل جربتم نكهاتنا؟",
      ctaDesc: "يسعدنا تحضير أطيب الحلويات الطازجة لكم.",
      ctaButton: "اطلب الآن",
    },
  };

  const content = texts[locale] || texts.tr;

  return (
    <>
      {/* Page Header */}
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

      {/* Story Section */}
      <section className="py-20 bg-[var(--background)]">
        <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ${isRTL ? "rtl" : ""}`}>
          <div className="prose prose-lg max-w-none">
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[var(--primary)] mb-6">
              {content.storyTitle}
            </h2>
            <p className="text-gray-600 mb-6">{content.storyP1}</p>
            <p className="text-gray-600 mb-6">{content.storyP2}</p>
            <p className="text-gray-600">{content.storyP3}</p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[var(--primary)] text-center mb-12 ${isRTL ? "rtl" : ""}`}>
            {content.valuesTitle}
          </h2>

          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${isRTL ? "rtl" : ""}`}>
            <div className="bg-[var(--background)] p-8 rounded-2xl">
              <div className="w-14 h-14 bg-[var(--accent)] rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-semibold mb-3 text-[var(--primary)]">
                {content.value1Title}
              </h3>
              <p className="text-gray-600">{content.value1Desc}</p>
            </div>

            <div className="bg-[var(--background)] p-8 rounded-2xl">
              <div className="w-14 h-14 bg-[var(--accent)] rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-semibold mb-3 text-[var(--primary)]">
                {content.value2Title}
              </h3>
              <p className="text-gray-600">{content.value2Desc}</p>
            </div>

            <div className="bg-[var(--background)] p-8 rounded-2xl">
              <div className="w-14 h-14 bg-[var(--accent)] rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-semibold mb-3 text-[var(--primary)]">
                {content.value3Title}
              </h3>
              <p className="text-gray-600">{content.value3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 bg-[var(--background)]">
        <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center ${isRTL ? "rtl" : ""}`}>
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[var(--primary)] mb-6">
            {content.commitmentTitle}
          </h2>
          <p className="text-gray-600 text-lg mb-8">{content.commitmentDesc}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-[var(--accent)] mb-2">%100</div>
              <div className="text-sm text-gray-600">{content.stat1}</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-[var(--accent)] mb-2">18+</div>
              <div className="text-sm text-gray-600">{content.stat2}</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-[var(--accent)] mb-2">1000+</div>
              <div className="text-sm text-gray-600">{content.stat3}</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-[var(--accent)] mb-2">5★</div>
              <div className="text-sm text-gray-600">{content.stat4}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--primary)] text-white">
        <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center ${isRTL ? "rtl" : ""}`}>
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold mb-6">
            {content.ctaTitle}
          </h2>
          <p className="text-gray-300 mb-8">{content.ctaDesc}</p>
          <a
            href="https://wa.me/905384507730"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5C] text-white px-10 py-4 rounded-full font-semibold text-lg transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            {content.ctaButton}
          </a>
        </div>
      </section>
    </>
  );
}

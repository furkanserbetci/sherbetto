export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "baklava-nasil-yapilir",
    title: "Ev Yapımı Baklava: Adım Adım Tarif",
    excerpt: "Geleneksel Türk baklavasının sırlarını öğrenin. İnce yufka açma tekniklerinden şerbet hazırlamaya kadar tüm detaylar.",
    content: `
      Baklava, Türk mutfağının en önemli tatlılarından biridir. Bu yazıda size evde nasıl mükemmel baklava yapabileceğinizi anlatacağız.

      ## Malzemeler
      - 500g baklava yufkası
      - 300g Antep fıstığı
      - 250g tereyağı
      - 2 su bardağı şeker
      - 1.5 su bardağı su
      - 1 yemek kaşığı limon suyu

      ## Yapılışı
      1. Fıstıkları ince ince çekin
      2. Tereyağını eritin
      3. Yufkaları tepsiye sererek aralarına yağ sürün
      4. Her 3 yufkada bir fıstık serpin
      5. 180 derece fırında 45 dakika pişirin
      6. Şerbeti hazırlayıp sıcak baklavanın üzerine dökün

      ## İpuçları
      - Yufkalar çok ince olmalı
      - Şerbet soğuk, baklava sıcak olmalı
      - Bir gece dinlendirin
    `,
    image: "/images/products/baklava.jpg",
    category: "Tarifler",
    author: "Sherbetto",
    date: "2024-12-15",
    readTime: 8,
  },
  {
    id: 2,
    slug: "kunefe-tarihi",
    title: "Künefenin Tarihi ve Kültürel Önemi",
    excerpt: "Ortadoğu'dan Anadolu'ya uzanan künefenin büyüleyici hikayesini keşfedin.",
    content: `
      Künefe, yüzyıllardır Ortadoğu ve Anadolu mutfaklarının vazgeçilmez tatlısı olmuştur.

      ## Tarihçe
      Künefenin kökeni Filistin'e dayanmaktadır. Osmanlı döneminde Anadolu'ya yayılmış ve özellikle Hatay bölgesinde kendine özgü bir kimlik kazanmıştır.

      ## Bölgesel Farklılıklar
      - **Hatay Künefesi**: İnce tel kadayıf ve uzayan peynir ile
      - **Gaziantep Künefesi**: Daha kalın kadayıf ve farklı peynir çeşidi
      - **Mersin Künefesi**: Tepsi künefe olarak ünlü

      ## Neden Özeliz?
      Sherbetto olarak, geleneksel tariflere sadık kalarak en taze malzemelerle künefe üretiyoruz.
    `,
    image: "/images/products/kunefe.jpg",
    category: "Kültür",
    author: "Sherbetto",
    date: "2024-12-10",
    readTime: 5,
  },
  {
    id: 3,
    slug: "dogal-tatli-secimi",
    title: "Sağlıklı Tatlı Seçimi: Dikkat Edilmesi Gerekenler",
    excerpt: "Kaliteli ve doğal tatlı seçerken nelere dikkat etmelisiniz? Uzman önerileri.",
    content: `
      Tatlı seçerken sadece lezzete değil, kaliteye de dikkat etmek önemlidir.

      ## Doğal Malzeme Önemi
      - Yapay tatlandırıcılardan kaçının
      - Doğal şeker kaynakları tercih edin
      - Taze malzemeler kullanılmış olmalı

      ## Kaliteli Fıstık Nasıl Anlaşılır?
      - Canlı yeşil renk
      - Taze koku
      - Kırıldığında çıtır yapı

      ## Sherbetto Farkı
      Tüm ürünlerimizde %100 doğal malzemeler kullanıyoruz. Hiçbir katkı maddesi veya koruyucu kullanmıyoruz.
    `,
    image: "/images/products/katmer.jpg",
    category: "Sağlık",
    author: "Sherbetto",
    date: "2024-12-05",
    readTime: 4,
  },
];

export const blogCategories = [
  { id: "all", name: "Tümü" },
  { id: "tarifler", name: "Tarifler" },
  { id: "kultur", name: "Kültür" },
  { id: "saglik", name: "Sağlık" },
];

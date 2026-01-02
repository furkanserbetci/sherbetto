import { Locale } from "@/lib/i18n";

export interface LocalizedString {
  tr: string;
  en: string;
  ar: string;
}

export interface BlogPost {
  id: number;
  slug: string;
  title: LocalizedString;
  excerpt: LocalizedString;
  content: LocalizedString;
  image: string;
  category: LocalizedString;
  author: string;
  date: string;
  readTime: number;
}

export interface BlogCategory {
  id: string;
  name: LocalizedString;
}

// Helper function to get localized text
export function getLocalizedBlogText(field: LocalizedString, locale: Locale): string {
  return field[locale] || field.tr;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "baklava-nasil-yapilir",
    title: {
      tr: "Ev Yapımı Baklava: Adım Adım Tarif",
      en: "Homemade Baklava: Step by Step Recipe",
      ar: "بقلاوة منزلية: وصفة خطوة بخطوة"
    },
    excerpt: {
      tr: "Geleneksel Türk baklavasının sırlarını öğrenin. İnce yufka açma tekniklerinden şerbet hazırlamaya kadar tüm detaylar.",
      en: "Learn the secrets of traditional Turkish baklava. All details from thin phyllo rolling techniques to syrup preparation.",
      ar: "تعلم أسرار البقلاوة التركية التقليدية. جميع التفاصيل من تقنيات فرد العجين الرقيق إلى تحضير الشربات."
    },
    content: {
      tr: `
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
      en: `
        Baklava is one of the most important desserts in Turkish cuisine. In this article, we will tell you how to make perfect baklava at home.

        ## Ingredients
        - 500g baklava phyllo dough
        - 300g Antep pistachios
        - 250g butter
        - 2 cups sugar
        - 1.5 cups water
        - 1 tablespoon lemon juice

        ## Instructions
        1. Finely grind the pistachios
        2. Melt the butter
        3. Layer the phyllo sheets in the pan, brushing butter between them
        4. Sprinkle pistachios every 3 layers
        5. Bake at 180°C for 45 minutes
        6. Prepare the syrup and pour over hot baklava

        ## Tips
        - Phyllo should be very thin
        - Syrup should be cold, baklava should be hot
        - Let it rest overnight
      `,
      ar: `
        البقلاوة هي واحدة من أهم الحلويات في المطبخ التركي. في هذا المقال، سنخبرك كيف تصنع بقلاوة مثالية في المنزل.

        ## المكونات
        - 500 غ عجينة بقلاوة
        - 300 غ فستق عنتاب
        - 250 غ زبدة
        - 2 كوب سكر
        - 1.5 كوب ماء
        - 1 ملعقة كبيرة عصير ليمون

        ## طريقة التحضير
        1. اطحن الفستق ناعماً
        2. أذب الزبدة
        3. رتب طبقات العجين في الصينية مع دهن الزبدة بينها
        4. رش الفستق كل 3 طبقات
        5. اخبز على 180 درجة لمدة 45 دقيقة
        6. حضر الشربات واسكبه على البقلاوة الساخنة

        ## نصائح
        - يجب أن تكون العجينة رقيقة جداً
        - الشربات بارد والبقلاوة ساخنة
        - اتركها ترتاح ليلة كاملة
      `
    },
    image: "/images/products/baklava.jpg",
    category: {
      tr: "Tarifler",
      en: "Recipes",
      ar: "وصفات"
    },
    author: "Sherbetto",
    date: "2024-12-15",
    readTime: 8,
  },
  {
    id: 2,
    slug: "kunefe-tarihi",
    title: {
      tr: "Künefenin Tarihi ve Kültürel Önemi",
      en: "The History and Cultural Significance of Künefe",
      ar: "تاريخ الكنافة وأهميتها الثقافية"
    },
    excerpt: {
      tr: "Ortadoğu'dan Anadolu'ya uzanan künefenin büyüleyici hikayesini keşfedin.",
      en: "Discover the fascinating story of künefe spanning from the Middle East to Anatolia.",
      ar: "اكتشف القصة الرائعة للكنافة الممتدة من الشرق الأوسط إلى الأناضول."
    },
    content: {
      tr: `
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
      en: `
        Künefe has been an indispensable dessert of Middle Eastern and Anatolian cuisines for centuries.

        ## History
        The origin of künefe dates back to Palestine. It spread to Anatolia during the Ottoman period and gained its unique identity especially in the Hatay region.

        ## Regional Differences
        - **Hatay Künefe**: With thin shredded kadayıf and stretchy cheese
        - **Gaziantep Künefe**: Thicker kadayıf and different cheese variety
        - **Mersin Künefe**: Famous as tray künefe

        ## Why We're Special
        At Sherbetto, we produce künefe with the freshest ingredients while staying true to traditional recipes.
      `,
      ar: `
        الكنافة كانت حلوى لا غنى عنها في المطابخ الشرق أوسطية والأناضولية لقرون.

        ## التاريخ
        يعود أصل الكنافة إلى فلسطين. انتشرت في الأناضول خلال الفترة العثمانية واكتسبت هويتها الفريدة خاصة في منطقة هاتاي.

        ## الاختلافات الإقليمية
        - **كنافة هاتاي**: بالقطايف الرفيعة والجبنة المطاطية
        - **كنافة غازي عنتاب**: قطايف أسمك ونوع جبنة مختلف
        - **كنافة مرسين**: مشهورة ككنافة الصينية

        ## لماذا نحن مميزون
        في شربتو، ننتج الكنافة بأطزج المكونات مع الحفاظ على الوصفات التقليدية.
      `
    },
    image: "/images/products/kunefe.jpg",
    category: {
      tr: "Kültür",
      en: "Culture",
      ar: "ثقافة"
    },
    author: "Sherbetto",
    date: "2024-12-10",
    readTime: 5,
  },
  {
    id: 3,
    slug: "dogal-tatli-secimi",
    title: {
      tr: "Sağlıklı Tatlı Seçimi: Dikkat Edilmesi Gerekenler",
      en: "Healthy Dessert Selection: What to Look For",
      ar: "اختيار الحلوى الصحية: ما يجب مراعاته"
    },
    excerpt: {
      tr: "Kaliteli ve doğal tatlı seçerken nelere dikkat etmelisiniz? Uzman önerileri.",
      en: "What should you look for when choosing quality and natural desserts? Expert recommendations.",
      ar: "ما الذي يجب أن تبحث عنه عند اختيار حلويات طبيعية وعالية الجودة؟ توصيات الخبراء."
    },
    content: {
      tr: `
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
      en: `
        When choosing desserts, it's important to pay attention to quality, not just taste.

        ## Importance of Natural Ingredients
        - Avoid artificial sweeteners
        - Prefer natural sugar sources
        - Fresh ingredients should be used

        ## How to Identify Quality Pistachios?
        - Vibrant green color
        - Fresh aroma
        - Crispy texture when broken

        ## The Sherbetto Difference
        We use 100% natural ingredients in all our products. We don't use any additives or preservatives.
      `,
      ar: `
        عند اختيار الحلويات، من المهم الانتباه للجودة وليس فقط المذاق.

        ## أهمية المكونات الطبيعية
        - تجنب المحليات الصناعية
        - فضل مصادر السكر الطبيعية
        - يجب استخدام مكونات طازجة

        ## كيف تميز الفستق عالي الجودة؟
        - لون أخضر زاهي
        - رائحة طازجة
        - قوام مقرمش عند الكسر

        ## فرق شربتو
        نستخدم مكونات طبيعية 100% في جميع منتجاتنا. لا نستخدم أي إضافات أو مواد حافظة.
      `
    },
    image: "/images/products/katmer.jpg",
    category: {
      tr: "Sağlık",
      en: "Health",
      ar: "صحة"
    },
    author: "Sherbetto",
    date: "2024-12-05",
    readTime: 4,
  },
];

export const blogCategories: BlogCategory[] = [
  {
    id: "all",
    name: {
      tr: "Tümü",
      en: "All",
      ar: "الكل"
    }
  },
  {
    id: "tarifler",
    name: {
      tr: "Tarifler",
      en: "Recipes",
      ar: "وصفات"
    }
  },
  {
    id: "kultur",
    name: {
      tr: "Kültür",
      en: "Culture",
      ar: "ثقافة"
    }
  },
  {
    id: "saglik",
    name: {
      tr: "Sağlık",
      en: "Health",
      ar: "صحة"
    }
  },
];

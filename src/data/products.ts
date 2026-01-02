import { Locale } from "@/lib/i18n";

export interface LocalizedString {
  tr: string;
  en: string;
  ar: string;
}

export interface Product {
  id: number;
  name: LocalizedString;
  category: "baklava" | "kunefe" | "kadayif" | "diger";
  description: LocalizedString;
  price: string;
  unit: LocalizedString;
  image: string;
  featured?: boolean;
}

// Helper function to get localized text
export function getLocalizedText(field: LocalizedString, locale: Locale): string {
  return field[locale] || field.tr;
}

export const categories = [
  { id: "all", name: "Tümü" },
  { id: "baklava", name: "Baklava" },
  { id: "kunefe", name: "Künefe" },
  { id: "kadayif", name: "Kadayıf" },
  { id: "diger", name: "Diğer" },
];

export const products: Product[] = [
  {
    id: 1,
    name: {
      tr: "Fıstıklı Baklava",
      en: "Pistachio Baklava",
      ar: "بقلاوة بالفستق"
    },
    category: "baklava",
    description: {
      tr: "Antep fıstığı ile hazırlanan geleneksel baklava. İnce ince açılmış yufkalar arasında bol fıstık.",
      en: "Traditional baklava made with Antep pistachios. Generous pistachios between thin layers of phyllo dough.",
      ar: "بقلاوة تقليدية محضرة بفستق عنتاب. فستق وفير بين طبقات رقيقة من العجين."
    },
    price: "850",
    unit: {
      tr: "kg",
      en: "kg",
      ar: "كغ"
    },
    image: "/images/products/baklava.jpg",
    featured: true,
  },
  {
    id: 2,
    name: {
      tr: "Küçük Dilim Baklava",
      en: "Mini Slice Baklava",
      ar: "بقلاوة شرائح صغيرة"
    },
    category: "baklava",
    description: {
      tr: "Özel kesim, tek lokmada yenebilen pratik baklava porsiyonları.",
      en: "Special cut, bite-sized practical baklava portions.",
      ar: "قطع خاصة، حصص بقلاوة عملية بحجم اللقمة."
    },
    price: "850",
    unit: {
      tr: "kg",
      en: "kg",
      ar: "كغ"
    },
    image: "/images/products/baklava-kucuk.jpg",
  },
  {
    id: 3,
    name: {
      tr: "Soğuk Baklava",
      en: "Cold Baklava",
      ar: "بقلاوة باردة"
    },
    category: "baklava",
    description: {
      tr: "Soğuk servis edilen, hafif ve ferah baklava çeşidi. Yaz ayı favorisi.",
      en: "Served cold, a light and refreshing baklava variety. Summer favorite.",
      ar: "تقدم باردة، نوع بقلاوة خفيف ومنعش. المفضلة في الصيف."
    },
    price: "750",
    unit: {
      tr: "kg",
      en: "kg",
      ar: "كغ"
    },
    image: "/images/products/soguk-baklava.jpg",
    featured: true,
  },
  {
    id: 4,
    name: {
      tr: "Şöbiyet",
      en: "Şöbiyet (Cream Baklava)",
      ar: "شوبييت"
    },
    category: "baklava",
    description: {
      tr: "Kaymaklı, fıstıklı özel baklava çeşidi. Kreması ile meşhur.",
      en: "Special baklava variety with cream and pistachios. Famous for its cream.",
      ar: "نوع بقلاوة خاص بالقشطة والفستق. مشهورة بقشطتها."
    },
    price: "900",
    unit: {
      tr: "kg",
      en: "kg",
      ar: "كغ"
    },
    image: "/images/products/sobiyet.jpg",
    featured: true,
  },
  {
    id: 5,
    name: {
      tr: "Midye Baklava",
      en: "Mussel Baklava",
      ar: "بقلاوة الصدف"
    },
    category: "baklava",
    description: {
      tr: "Midye şeklinde özenle sarılan, fıstık dolgulu özel baklava.",
      en: "Carefully rolled mussel-shaped baklava with pistachio filling.",
      ar: "بقلاوة ملفوفة بعناية على شكل صدفة محشوة بالفستق."
    },
    price: "900",
    unit: {
      tr: "kg",
      en: "kg",
      ar: "كغ"
    },
    image: "/images/products/midye.jpg",
  },
  {
    id: 6,
    name: {
      tr: "Fıstıkzade",
      en: "Fıstıkzade (Premium Pistachio)",
      ar: "فستقزاده"
    },
    category: "baklava",
    description: {
      tr: "Bol fıstıklı, özel üretim premium baklava çeşidi.",
      en: "Premium baklava variety with abundant pistachios, specially crafted.",
      ar: "نوع بقلاوة فاخر بالفستق الوفير، مصنوع بعناية خاصة."
    },
    price: "950",
    unit: {
      tr: "kg",
      en: "kg",
      ar: "كغ"
    },
    image: "/images/products/fistikzade.jpg",
  },
  {
    id: 7,
    name: {
      tr: "Klasik Künefe",
      en: "Classic Künefe",
      ar: "كنافة كلاسيكية"
    },
    category: "kunefe",
    description: {
      tr: "Hatay usulü, uzayan peynirli künefe. Antep fıstığı ile servis edilir.",
      en: "Hatay-style künefe with stretchy cheese. Served with Antep pistachios.",
      ar: "كنافة بطريقة هاتاي بالجبنة المطاطية. تقدم مع فستق عنتاب."
    },
    price: "450",
    unit: {
      tr: "porsiyon",
      en: "portion",
      ar: "حصة"
    },
    image: "/images/products/kunefe.jpg",
    featured: true,
  },
  {
    id: 8,
    name: {
      tr: "Hasır Künefe",
      en: "Woven Künefe",
      ar: "كنافة الحصير"
    },
    category: "kunefe",
    description: {
      tr: "İnce hasır kadayıf ile hazırlanan, çıtır künefe çeşidi.",
      en: "Crispy künefe variety made with thin woven kadayıf.",
      ar: "نوع كنافة مقرمشة محضرة بالقطايف المنسوجة الرقيقة."
    },
    price: "500",
    unit: {
      tr: "porsiyon",
      en: "portion",
      ar: "حصة"
    },
    image: "/images/products/hasir-kunefe.jpg",
  },
  {
    id: 9,
    name: {
      tr: "Mersin Usulü Tepsi Künefe",
      en: "Mersin-Style Tray Künefe",
      ar: "كنافة صينية بطريقة مرسين"
    },
    category: "kunefe",
    description: {
      tr: "Mersin'in meşhur tepsi künefesi. Büyük porsiyonlar için ideal.",
      en: "Mersin's famous tray künefe. Ideal for large portions.",
      ar: "كنافة الصينية الشهيرة من مرسين. مثالية للحصص الكبيرة."
    },
    price: "550",
    unit: {
      tr: "porsiyon",
      en: "portion",
      ar: "حصة"
    },
    image: "/images/products/tepsi-kunefe.jpg",
    featured: true,
  },
  {
    id: 10,
    name: {
      tr: "Tel Kadayıf",
      en: "Shredded Kadayıf",
      ar: "قطايف الشعر"
    },
    category: "kadayif",
    description: {
      tr: "İnce tel kadayıf, ceviz dolu, hafif şerbet ile.",
      en: "Thin shredded kadayıf, filled with walnuts, with light syrup.",
      ar: "قطايف شعر رقيقة، محشوة بالجوز، مع شربات خفيف."
    },
    price: "550",
    unit: {
      tr: "kg",
      en: "kg",
      ar: "كغ"
    },
    image: "/images/products/tel-kadayif.jpg",
    featured: true,
  },
  {
    id: 11,
    name: {
      tr: "Hasır Kadayıf",
      en: "Woven Kadayıf",
      ar: "قطايف الحصير"
    },
    category: "kadayif",
    description: {
      tr: "Hasır örgüsü şeklinde hazırlanan özel kadayıf. Çıtır ve lezzetli.",
      en: "Special kadayıf prepared in woven pattern. Crispy and delicious.",
      ar: "قطايف خاصة محضرة بنمط منسوج. مقرمشة ولذيذة."
    },
    price: "600",
    unit: {
      tr: "kg",
      en: "kg",
      ar: "كغ"
    },
    image: "/images/products/hasir-kadayif.jpg",
  },
  {
    id: 12,
    name: {
      tr: "Burma Kadayıf",
      en: "Rolled Kadayıf",
      ar: "قطايف ملفوفة"
    },
    category: "kadayif",
    description: {
      tr: "Fıstık dolgulu, kıvrılmış kadayıf. Çıtır dış, yumuşak iç.",
      en: "Pistachio-filled, rolled kadayıf. Crispy outside, soft inside.",
      ar: "قطايف ملفوفة محشوة بالفستق. مقرمشة من الخارج، طرية من الداخل."
    },
    price: "700",
    unit: {
      tr: "kg",
      en: "kg",
      ar: "كغ"
    },
    image: "/images/products/burma-kadayif.jpg",
  },
  {
    id: 13,
    name: {
      tr: "Serpme Kadayıf",
      en: "Scattered Kadayıf",
      ar: "قطايف مبعثرة"
    },
    category: "kadayif",
    description: {
      tr: "Geleneksel serpme usulü ile hazırlanan kadayıf tatlısı.",
      en: "Kadayıf dessert prepared in traditional scattered style.",
      ar: "حلوى قطايف محضرة بالطريقة التقليدية المبعثرة."
    },
    price: "550",
    unit: {
      tr: "kg",
      en: "kg",
      ar: "كغ"
    },
    image: "/images/products/serpme-kadayif.jpg",
  },
  {
    id: 14,
    name: {
      tr: "Katmer",
      en: "Katmer",
      ar: "قطمر"
    },
    category: "diger",
    description: {
      tr: "Gaziantep'in meşhur katmeri. Kaymak ve fıstık ile.",
      en: "Gaziantep's famous katmer. With cream and pistachios.",
      ar: "قطمر غازي عنتاب الشهير. مع القشطة والفستق."
    },
    price: "350",
    unit: {
      tr: "adet",
      en: "piece",
      ar: "قطعة"
    },
    image: "/images/products/katmer.jpg",
    featured: true,
  },
  {
    id: 15,
    name: {
      tr: "Fıstık Sarma",
      en: "Pistachio Roll",
      ar: "لفائف الفستق"
    },
    category: "diger",
    description: {
      tr: "İnce yufka ile sarılmış fıstıklı tatlı. Hafif ve lezzetli.",
      en: "Pistachio dessert wrapped in thin phyllo. Light and delicious.",
      ar: "حلوى فستق ملفوفة بالعجين الرقيق. خفيفة ولذيذة."
    },
    price: "800",
    unit: {
      tr: "kg",
      en: "kg",
      ar: "كغ"
    },
    image: "/images/products/fistik-sarma.jpg",
  },
  {
    id: 16,
    name: {
      tr: "Billuriye",
      en: "Billuriye",
      ar: "بلورية"
    },
    category: "diger",
    description: {
      tr: "Kremalı, fıstıklı özel tatlı. Soğuk servis edilir.",
      en: "Special dessert with cream and pistachios. Served cold.",
      ar: "حلوى خاصة بالقشطة والفستق. تقدم باردة."
    },
    price: "500",
    unit: {
      tr: "porsiyon",
      en: "portion",
      ar: "حصة"
    },
    image: "/images/products/billuriye.jpg",
  },
  {
    id: 17,
    name: {
      tr: "Börek Tatlısı",
      en: "Sweet Börek",
      ar: "بورك حلو"
    },
    category: "diger",
    description: {
      tr: "Geleneksel börek tatlısı, cevizli ve şerbetli.",
      en: "Traditional sweet börek, with walnuts and syrup.",
      ar: "بورك حلو تقليدي، بالجوز والشربات."
    },
    price: "450",
    unit: {
      tr: "kg",
      en: "kg",
      ar: "كغ"
    },
    image: "/images/products/borek.jpg",
  },
  {
    id: 18,
    name: {
      tr: "Maraş Dondurması",
      en: "Maraş Ice Cream",
      ar: "بوظة مرعش"
    },
    category: "diger",
    description: {
      tr: "Otantik Maraş dondurması. Sakızlı ve salep ile.",
      en: "Authentic Maraş ice cream. With mastic and salep.",
      ar: "بوظة مرعش الأصلية. بالمستكة والسحلب."
    },
    price: "200",
    unit: {
      tr: "top",
      en: "scoop",
      ar: "كرة"
    },
    image: "/images/products/dondurma.jpg",
    featured: true,
  },
];

export const featuredProducts = products.filter((p) => p.featured);

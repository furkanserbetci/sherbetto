"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Ayşe Yılmaz",
    location: "İstanbul, Kadıköy",
    rating: 5,
    comment:
      "Baklavaları inanılmaz lezzetli! Yıllardır farklı yerlerden sipariş verdim ama Sherbetto'nun kalitesine hiçbiri ulaşamadı. Artık tüm özel günlerimizde tek tercihimiz.",
    date: "2 hafta önce",
  },
  {
    id: 2,
    name: "Mehmet Kaya",
    location: "İstanbul, Beşiktaş",
    rating: 5,
    comment:
      "Künefe tutkunuyum ve Sherbetto'nun künefeleri tam istediğim gibi: çıtır dışı, uzayan peyniri. Sıcak servis konusunda da çok titizler.",
    date: "1 ay önce",
  },
  {
    id: 3,
    name: "Fatma Demir",
    location: "İstanbul, Üsküdar",
    rating: 5,
    comment:
      "Bayram siparişimizi verdik, hem paketleme hem teslimat mükemmeldi. Misafirlerimiz bayıldı! Fıstıklı baklava ve şöbiyet favorimiz oldu.",
    date: "3 hafta önce",
  },
  {
    id: 4,
    name: "Ali Öztürk",
    location: "İstanbul, Bakırköy",
    rating: 5,
    comment:
      "İş toplantılarımız için düzenli sipariş veriyoruz. Her seferinde aynı kalite, aynı lezzet. Profesyonel hizmet anlayışları takdire şayan.",
    date: "1 hafta önce",
  },
  {
    id: 5,
    name: "Zeynep Arslan",
    location: "İstanbul, Şişli",
    rating: 5,
    comment:
      "Kızımın nişanı için 5 kg baklava sipariş ettik. Görüntüsü, tadı, sunumu... Her şey harikaydı. Tüm davetliler nereden aldığımızı sordu!",
    date: "2 ay önce",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[var(--accent)] font-medium text-sm uppercase tracking-wider">
            Müşteri Yorumları
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-bold text-[var(--primary)] mt-2 mb-4">
            Mutlu Müşterilerimiz
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Binlerce müşterimizin güvenini kazandık. İşte onların deneyimleri.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[var(--background)] rounded-2xl p-6 relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-[var(--accent)] opacity-20">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Comment */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  &ldquo;{testimonial.comment}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[var(--accent)] rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--primary)]">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>

                {/* Date */}
                <p className="text-xs text-gray-400 mt-4">{testimonial.date}</p>
              </motion.div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-[var(--background)] rounded-2xl p-6"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                &ldquo;{testimonials[activeIndex].comment}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[var(--accent)] rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonials[activeIndex].name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--primary)]">{testimonials[activeIndex].name}</h4>
                  <p className="text-sm text-gray-500">{testimonials[activeIndex].location}</p>
                </div>
              </div>
            </motion.div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex ? "bg-[var(--accent)] w-6" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Instagram&apos;da 16.000+ takipçi ile güvenilir marka</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

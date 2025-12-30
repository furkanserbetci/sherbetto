"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Formspree veya başka bir form servisi kullanılabilir
    // Şimdilik sadece WhatsApp'a yönlendirme yapalım
    const whatsappMessage = `Yeni Mesaj:\n\nAd: ${formData.name}\nE-posta: ${formData.email}\nTelefon: ${formData.phone}\n\nMesaj: ${formData.message}`;

    window.open(
      `https://wa.me/905384507730?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: "", email: "", phone: "", message: "" });

    setTimeout(() => setIsSuccess(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Adınız Soyadınız *
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all"
            placeholder="Örnek: Ahmet Yılmaz"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Telefon *
          </label>
          <input
            type="tel"
            id="phone"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all"
            placeholder="0532 XXX XX XX"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          E-posta
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all"
          placeholder="ornek@email.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Mesajınız *
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all resize-none"
          placeholder="Sipariş vermek veya bilgi almak istediğiniz konuyu yazın..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[var(--accent)] hover:bg-[var(--accent-light)] disabled:opacity-50 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-200"
      >
        {isSubmitting ? "Gönderiliyor..." : "Mesaj Gönder"}
      </button>

      {isSuccess && (
        <p className="text-green-600 text-center font-medium">
          Mesajınız WhatsApp üzerinden iletildi!
        </p>
      )}
    </form>
  );
}

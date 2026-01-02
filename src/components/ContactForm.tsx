"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLocale } from "@/components/LocaleProvider";

type ContactFormData = {
  name: string;
  phone: string;
  email?: string;
  message: string;
};

export default function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const { t } = useLocale();

  // Validation schema with translations
  const contactSchema = z.object({
    name: z
      .string()
      .min(2, t("validation.nameMin"))
      .max(50, t("validation.nameMax")),
    phone: z
      .string()
      .min(10, t("validation.phoneInvalid"))
      .regex(/^[0-9+\s()-]+$/, t("validation.phoneInvalid")),
    email: z
      .string()
      .email(t("validation.emailInvalid"))
      .optional()
      .or(z.literal("")),
    message: z
      .string()
      .min(10, t("validation.messageMin"))
      .max(500, t("validation.messageMax")),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    const subject = `Sherbetto İletişim Formu - ${data.name}`;
    const body = `Ad: ${data.name}\nTelefon: ${data.phone}${data.email ? `\nE-posta: ${data.email}` : ""}\n\nMesaj:\n${data.message}`;

    window.location.href = `mailto:sherbettokunefe@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            {t("contact.name")} *
          </label>
          <input
            type="text"
            id="name"
            {...register("name")}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            placeholder={t("contact.name")}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            {t("contact.phone")} *
          </label>
          <input
            type="tel"
            id="phone"
            {...register("phone")}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
            placeholder={t("contact.phone")}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          {t("contact.email")} ({t("contact.optional")})
        </label>
        <input
          type="email"
          id="email"
          {...register("email")}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
          placeholder={t("contact.email")}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          {t("contact.message")} *
        </label>
        <textarea
          id="message"
          rows={5}
          {...register("message")}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all resize-none ${
            errors.message ? "border-red-500" : "border-gray-300"
          }`}
          placeholder={t("contact.message")}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[var(--accent)] hover:bg-[var(--accent-light)] disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-200 flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            {t("contact.sending")}
          </>
        ) : (
          <>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            {t("contact.send")}
          </>
        )}
      </button>

      {/* Success Message */}
      {isSuccess && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
          <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <p className="text-green-700 font-medium">
            {t("contact.success")}
          </p>
        </div>
      )}
    </form>
  );
}

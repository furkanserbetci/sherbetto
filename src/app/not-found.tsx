import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-[var(--background)]">
      <div className="text-center px-4">
        <h1 className="font-[family-name:var(--font-cormorant)] text-6xl font-bold text-[var(--accent)] mb-4">
          404
        </h1>
        <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[var(--primary)] mb-4">
          Sayfa Bulunamadı
        </h2>
        <p className="text-gray-600 mb-8">
          Aradığınız sayfa mevcut değil veya taşındı.
        </p>
        <Link
          href="/"
          className="inline-block bg-[var(--accent)] hover:bg-[var(--accent-light)] text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200"
        >
          Anasayfaya Dön
        </Link>
      </div>
    </div>
  );
}

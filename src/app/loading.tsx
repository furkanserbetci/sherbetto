export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--background)]">
      <div className="text-center">
        <div className="relative w-16 h-16 mx-auto mb-4">
          <div className="absolute inset-0 border-4 border-[var(--accent-soft)] rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-[var(--accent)] rounded-full animate-spin"></div>
        </div>
        <p className="text-[var(--primary)] font-[family-name:var(--font-cormorant)] text-xl">
          Yükleniyor...
        </p>
      </div>
    </div>
  );
}

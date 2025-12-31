"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminSidebar from "@/components/admin/AdminSidebar";

export default function AdminOrdersPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("adminLoggedIn");
    if (!isLoggedIn) {
      router.push("/admin");
    } else {
      setIsLoading(false);
    }
  }, [router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-[var(--accent)] border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminSidebar />

      <main className="ml-64 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Siparişler</h1>
          <p className="text-gray-500">Tüm siparişlerinizi yönetin</p>
        </div>

        {/* Empty State */}
        <div className="bg-white rounded-xl shadow-sm p-12 text-center">
          <svg
            className="w-20 h-20 text-gray-300 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Henüz Sipariş Yok</h2>
          <p className="text-gray-500 mb-6 max-w-md mx-auto">
            Müşterileriniz WhatsApp üzerinden sipariş verdikçe burada listelenecektir.
            Veritabanı entegrasyonu ile siparişler otomatik olarak kaydedilecektir.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-lg mx-auto">
            <p className="text-sm text-blue-700">
              <strong>Not:</strong> Şu an siparişler WhatsApp üzerinden alınmaktadır.
              Veritabanı entegrasyonu aktif olduktan sonra tüm siparişler
              otomatik olarak bu panelde görüntülenecektir.
            </p>
          </div>
        </div>

        {/* Stats Preview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-sm text-gray-500 mb-1">Bugün</p>
            <p className="text-3xl font-bold text-gray-800">0</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-sm text-gray-500 mb-1">Bu Hafta</p>
            <p className="text-3xl font-bold text-gray-800">0</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-sm text-gray-500 mb-1">Bu Ay</p>
            <p className="text-3xl font-bold text-gray-800">0</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-sm text-gray-500 mb-1">Toplam Gelir</p>
            <p className="text-3xl font-bold text-gray-800">0₺</p>
          </div>
        </div>
      </main>
    </div>
  );
}

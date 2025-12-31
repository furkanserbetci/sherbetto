"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminSidebar from "@/components/admin/AdminSidebar";
import { products } from "@/data/products";

interface AnalyticsData {
  today: number;
  week: number;
  month: number;
  total: number;
  topPages: { path: string; views: number }[];
  recentViews: { id: string; path: string; createdAt: string }[];
}

export default function AdminDashboard() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("adminLoggedIn");
    if (!isLoggedIn) {
      router.push("/admin");
    } else {
      setIsLoading(false);
      fetchAnalytics();
    }
  }, [router]);

  const fetchAnalytics = async () => {
    try {
      const res = await fetch("/api/analytics/stats");
      if (res.ok) {
        const data = await res.json();
        setAnalytics(data);
      }
    } catch (error) {
      console.error("Failed to fetch analytics:", error);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-[var(--accent)] border-t-transparent rounded-full"></div>
      </div>
    );
  }

  const stats = [
    {
      label: "Bugün",
      value: analytics?.today || 0,
      subLabel: "ziyaret",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      color: "bg-blue-500",
    },
    {
      label: "Bu Hafta",
      value: analytics?.week || 0,
      subLabel: "ziyaret",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: "bg-green-500",
    },
    {
      label: "Bu Ay",
      value: analytics?.month || 0,
      subLabel: "ziyaret",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      color: "bg-purple-500",
    },
    {
      label: "Toplam",
      value: analytics?.total || 0,
      subLabel: "ziyaret",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      color: "bg-orange-500",
    },
  ];

  const formatPath = (path: string) => {
    const pathNames: Record<string, string> = {
      "/": "Anasayfa",
      "/urunler": "Ürünler",
      "/hakkimizda": "Hakkımızda",
      "/iletisim": "İletişim",
      "/blog": "Blog",
      "/siparis": "Sipariş",
    };
    return pathNames[path] || path;
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);

    if (diffMins < 1) return "Az önce";
    if (diffMins < 60) return `${diffMins} dk önce`;
    if (diffHours < 24) return `${diffHours} saat önce`;
    return date.toLocaleDateString("tr-TR");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminSidebar />

      <main className="ml-64 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-500">Site trafiği ve genel bakış</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-xl p-6 shadow-sm flex items-center gap-4"
            >
              <div className={`${stat.color} text-white p-3 rounded-lg`}>
                {stat.icon}
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label} {stat.subLabel}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Top Pages */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-800 mb-4">En Çok Ziyaret Edilen Sayfalar</h2>
            {analytics?.topPages && analytics.topPages.length > 0 ? (
              <div className="space-y-3">
                {analytics.topPages.map((page, index) => (
                  <div key={page.path} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        index === 0 ? "bg-yellow-100 text-yellow-700" :
                        index === 1 ? "bg-gray-200 text-gray-700" :
                        index === 2 ? "bg-orange-100 text-orange-700" :
                        "bg-gray-100 text-gray-600"
                      }`}>
                        {index + 1}
                      </span>
                      <span className="font-medium text-gray-800">{formatPath(page.path)}</span>
                    </div>
                    <span className="text-gray-500">{page.views} görüntüleme</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-8">Henüz veri yok</p>
            )}
          </div>

          {/* Recent Views */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Son Ziyaretler</h2>
            {analytics?.recentViews && analytics.recentViews.length > 0 ? (
              <div className="space-y-3">
                {analytics.recentViews.slice(0, 8).map((view) => (
                  <div key={view.id} className="flex items-center justify-between text-sm">
                    <span className="font-medium text-gray-800">{formatPath(view.path)}</span>
                    <span className="text-gray-500">{formatTime(view.createdAt)}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-8">Henüz ziyaret yok</p>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Hızlı İşlemler</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="/admin/urunler"
              className="flex items-center gap-3 p-4 border rounded-lg hover:border-[var(--accent)] transition-colors"
            >
              <svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <div>
                <p className="font-medium text-gray-800">Ürünler ({products.length})</p>
                <p className="text-sm text-gray-500">Ürün kataloğunu yönet</p>
              </div>
            </a>
            <a
              href="/admin/siparisler"
              className="flex items-center gap-3 p-4 border rounded-lg hover:border-[var(--accent)] transition-colors"
            >
              <svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <div>
                <p className="font-medium text-gray-800">Siparişler</p>
                <p className="text-sm text-gray-500">Siparişleri görüntüle</p>
              </div>
            </a>
            <a
              href="/"
              target="_blank"
              className="flex items-center gap-3 p-4 border rounded-lg hover:border-[var(--accent)] transition-colors"
            >
              <svg className="w-8 h-8 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <div>
                <p className="font-medium text-gray-800">Siteyi Önizle</p>
                <p className="text-sm text-gray-500">Canlı siteyi görüntüle</p>
              </div>
            </a>
          </div>
        </div>

        {/* Product Stats */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Ürün İstatistikleri</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg text-center">
              <p className="text-2xl font-bold text-gray-800">{products.length}</p>
              <p className="text-sm text-gray-500">Toplam Ürün</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg text-center">
              <p className="text-2xl font-bold text-yellow-700">{products.filter(p => p.featured).length}</p>
              <p className="text-sm text-gray-500">Öne Çıkan</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg text-center">
              <p className="text-2xl font-bold text-blue-700">{new Set(products.map(p => p.category)).size}</p>
              <p className="text-sm text-gray-500">Kategori</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg text-center">
              <p className="text-2xl font-bold text-green-700">{products.filter(p => p.category === "baklava").length}</p>
              <p className="text-sm text-gray-500">Baklava Çeşidi</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

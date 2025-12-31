export default function ProductsLoading() {
  return (
    <>
      {/* Page Header Skeleton */}
      <section className="bg-[var(--primary)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="h-12 w-48 bg-white/20 rounded-lg mx-auto mb-4 animate-pulse"></div>
          <div className="h-6 w-96 max-w-full bg-white/10 rounded-lg mx-auto animate-pulse"></div>
        </div>
      </section>

      {/* Products Section Skeleton */}
      <section className="py-16 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Skeleton */}
          <div className="flex justify-center gap-3 mb-12">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="h-10 w-24 bg-gray-200 rounded-full animate-pulse"
              ></div>
            ))}
          </div>

          {/* Products Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100"
              >
                {/* Image Skeleton */}
                <div className="h-56 bg-gray-200 animate-pulse"></div>

                {/* Content Skeleton */}
                <div className="p-6">
                  <div className="h-6 w-3/4 bg-gray-200 rounded mb-3 animate-pulse"></div>
                  <div className="h-4 w-full bg-gray-100 rounded mb-2 animate-pulse"></div>
                  <div className="h-4 w-2/3 bg-gray-100 rounded mb-4 animate-pulse"></div>
                  <div className="h-5 w-24 bg-gray-200 rounded mb-4 animate-pulse"></div>
                  <div className="flex justify-between">
                    <div className="h-8 w-20 bg-gray-100 rounded animate-pulse"></div>
                    <div className="h-10 w-24 bg-gray-200 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

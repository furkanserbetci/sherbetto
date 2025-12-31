export default function ProductDetailLoading() {
  return (
    <>
      {/* Breadcrumb Skeleton */}
      <section className="bg-gray-50 py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
                {i < 4 && <span className="text-gray-300">/</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail Skeleton */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Skeleton */}
            <div className="aspect-square rounded-2xl bg-gray-200 animate-pulse"></div>

            {/* Details Skeleton */}
            <div className="flex flex-col justify-center">
              {/* Category Badge */}
              <div className="h-7 w-24 bg-gray-200 rounded-full mb-4 animate-pulse"></div>

              {/* Title */}
              <div className="h-12 w-3/4 bg-gray-200 rounded-lg mb-4 animate-pulse"></div>

              {/* Description */}
              <div className="space-y-2 mb-8">
                <div className="h-5 w-full bg-gray-100 rounded animate-pulse"></div>
                <div className="h-5 w-5/6 bg-gray-100 rounded animate-pulse"></div>
                <div className="h-5 w-4/6 bg-gray-100 rounded animate-pulse"></div>
              </div>

              {/* Price Box */}
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <div className="h-10 w-32 bg-gray-200 rounded mb-2 animate-pulse"></div>
                <div className="h-4 w-48 bg-gray-100 rounded animate-pulse"></div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="w-10 h-10 mx-auto mb-2 bg-gray-200 rounded-full animate-pulse"></div>
                    <div className="h-3 w-16 mx-auto bg-gray-200 rounded animate-pulse"></div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 h-14 bg-gray-200 rounded-full animate-pulse"></div>
                <div className="flex-1 h-14 bg-gray-300 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Skeleton */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-9 w-48 bg-gray-200 rounded-lg mx-auto mb-8 animate-pulse"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100"
              >
                <div className="h-48 bg-gray-200 animate-pulse"></div>
                <div className="p-5">
                  <div className="h-5 w-3/4 bg-gray-200 rounded mb-2 animate-pulse"></div>
                  <div className="h-5 w-24 bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

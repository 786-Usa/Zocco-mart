import React from "react";

const brands = [
  { name: "Apple", logo: "https://cdn-icons-png.flaticon.com/512/0/747.png" },
  { name: "Nike", logo: "https://cdn-icons-png.flaticon.com/512/732/732084.png" },
  { name: "Amazon", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968870.png" },
  { name: "Adidas", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968852.png" },
  { name: "Samsung", logo: "https://cdn-icons-png.flaticon.com/512/882/882704.png" },
  { name: "Sony", logo: "https://cdn-icons-png.flaticon.com/512/5969/5969346.png" },
  { name: "Puma", logo: "https://cdn-icons-png.flaticon.com/512/732/732084.png" },
];

const TrustedBrands = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-10">
          <span className="text-sm text-orange-500 font-medium">
            🤝 Trusted Partners
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mt-2">
            Sponsored Brands
          </h2>
          <p className="text-gray-500 text-sm mt-2 max-w-xl mx-auto">
            We collaborate with world-class brands to bring you the best quality products
          </p>
        </div>

        {/* SCROLL AREA */}
        <div className="relative">

          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div className="flex gap-6 overflow-x-auto py-4 px-2 scrollbar-hide">

            {brands.map((brand, i) => (
              <div
                key={i}
                className="min-w-[140px] h-[100px] flex items-center justify-center bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-12 h-12 object-contain grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300"
                />
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default TrustedBrands;
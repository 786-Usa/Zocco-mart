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

// Duplicate for seamless loop
const loopBrands = [...brands, ...brands];

const TrustedBrands = () => {
  return (
    <section className="py-16 bg-white overflow-hidden mb-5">
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
            We collaborate with world-class brands to deliver excellence
          </p>
        </div>

        {/* MARQUEE WRAPPER */}
        <div className="relative">

          {/* LEFT FADE */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>

          {/* RIGHT FADE */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* SCROLL TRACK */}
          <div className="group overflow-hidden">
            <div className="flex gap-10 w-max animate-marquee group-hover:[animation-play-state:paused]">

              {loopBrands.map((brand, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center w-[140px] h-[90px] rounded-2xl bg-white/70 backdrop-blur border border-gray-200 shadow-sm hover:shadow-lg transition group/card cursor-pointer"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="w-12 h-12 object-contain grayscale opacity-70 group-hover/card:grayscale-0 group-hover/card:opacity-100 group-hover/card:scale-110 transition duration-300"
                  />
                </div>
              ))}

            </div>
          </div>
        </div>

      </div>

      {/* ANIMATION STYLE */}
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-marquee {
            animation: marquee 25s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default TrustedBrands;
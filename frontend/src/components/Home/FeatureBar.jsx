import React from "react";
import { Truck, Gift, BadgePercent, ShieldCheck } from "lucide-react";

const FeatureBar = () => {
  const features = [
    {
      icon: Truck,
      title: "Free Shipping",
      desc: "Orders above $100",
    },
    {
      icon: Gift,
      title: "Daily Offers",
      desc: "Up to 25% discount",
    },
    {
      icon: BadgePercent,
      title: "Best Prices",
      desc: "Factory direct rates",
    },
    {
      icon: ShieldCheck,
      title: "Secure Payment",
      desc: "100% protected",
    },
  ];

  const categories = [
    { id: 1, title: "Computers", img: "https://cdn-icons-png.flaticon.com/512/3067/3067260.png" },
    { id: 2, title: "Cosmetics", img: "https://cdn-icons-png.flaticon.com/512/3059/3059122.png" },
    { id: 3, title: "Accessories", img: "https://cdn-icons-png.flaticon.com/512/3082/3082031.png" },
    { id: 4, title: "Clothing", img: "https://cdn-icons-png.flaticon.com/512/3531/3531844.png" },
    { id: 5, title: "Shoes", img: "https://cdn-icons-png.flaticon.com/512/2742/2742674.png" },
    { id: 6, title: "Gifts", img: "https://cdn-icons-png.flaticon.com/512/1162/1162269.png" },
    { id: 7, title: "Pet Care", img: "https://cdn-icons-png.flaticon.com/512/3047/3047928.png" },
    { id: 8, title: "Mobiles", img: "https://cdn-icons-png.flaticon.com/512/2586/2586488.png" },
    { id: 9, title: "Gaming", img: "https://cdn-icons-png.flaticon.com/512/3293/3293810.png" },
    { id: 10, title: "More", img: "https://cdn-icons-png.flaticon.com/512/2345/2345338.png" },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-12">

      <div className="max-w-7xl mx-auto px-4 space-y-12">

        {/* ---------------- FEATURES ---------------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group relative p-6 rounded-2xl bg-white/70 backdrop-blur-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-orange-100 to-transparent transition"></div>

                <div className="relative flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-400 text-white shadow-md">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ---------------- CATEGORIES ---------------- */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Shop by Category
            </h2>
            <button className="text-sm text-orange-500 hover:underline">
              View All
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">

            {categories.map((cat) => (
              <div
                key={cat.id}
                className="group relative p-5 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

                <div className="relative flex flex-col items-center text-center gap-4">

                  {/* Image */}
                  <div className="w-16 h-16 flex items-center justify-center">
                    <img
                      src={cat.img}
                      alt={cat.title}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-medium text-gray-700 group-hover:text-black">
                    {cat.title}
                  </h3>

                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default FeatureBar;
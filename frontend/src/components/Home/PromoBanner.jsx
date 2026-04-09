import React from "react";

const PromoBanner = () => {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-6">

        {/* LEFT BIG BANNER */}
        <div className="relative rounded-3xl overflow-hidden group cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
            className="w-full h-[320px] object-cover group-hover:scale-105 transition duration-500"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>

          <div className="absolute left-6 top-1/2 -translate-y-1/2 text-white">
            <h3 className="text-2xl font-semibold">
              Smart Watches
            </h3>
            <p className="text-sm mt-2 text-gray-200">
              Up to 40% off premium brands
            </p>

            <button className="mt-4 px-5 py-2 bg-white text-black rounded-full text-sm hover:bg-gray-200 transition">
              Shop Now
            </button>
          </div>
        </div>

        {/* RIGHT STACK */}
        <div className="flex flex-col gap-6">

          <div className="relative rounded-3xl overflow-hidden group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1658927420987-488ade098001?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-[150px] object-cover group-hover:scale-105 transition"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute left-4 bottom-4 text-white text-sm font-medium">
              Headphones Collection
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad"
              className="w-full h-[150px] object-cover group-hover:scale-105 transition"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute left-4 bottom-4 text-white text-sm font-medium">
              Minimal Fashion
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PromoBanner;
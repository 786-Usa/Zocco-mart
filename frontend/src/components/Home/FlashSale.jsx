import React from "react";
import ProductCard from "../ProductCard";
import { productData } from "../../assets/Products";

const FlashSale = () => {
  // simulate flash sale (high discount)
  const flashProducts = productData
    .filter((p) => p.price > p.discount_price)
    .slice(0, 5);

  return (
    <section className="py-12 bg-gradient-to-r from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-6 flex-wrap gap-3">

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
              ⚡ Flash Sale
            </h2>

            {/* Fake timer UI (looks premium) */}
            <div className="flex gap-2 mt-2 text-sm">
              {["12", "34", "56"].map((t, i) => (
                <span
                  key={i}
                  className="bg-black text-white px-2 py-1 rounded-md font-mono"
                >
                  {t}
                </span>
              ))}
              <span className="text-gray-500 ml-2">Left</span>
            </div>
          </div>

          <button className="text-sm text-orange-500 hover:underline">
            View All →
          </button>
        </div>

        {/* SCROLLABLE PRODUCTS */}
        <div className="flex gap-5 overflow-x-auto pb-2 scrollbar-hide">

          {flashProducts.map((item) => (
            <div
              key={item.id}
              className="min-w-[220px] max-w-[220px] flex-shrink-0 hover:-translate-y-1 transition"
            >
              <ProductCard data={item} />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default FlashSale;
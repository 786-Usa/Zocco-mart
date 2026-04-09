import React from "react";
import { productData } from "../../assets/Products";
import ProductCard from "../ProductCard";

const BestSelling = () => {

  // Sort by total sold (best selling logic)
  const bestProducts = [...productData]
    .sort((a, b) => b.total_sell - a.total_sell)
    .slice(0, 10);

  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-8 gap-4">

          <div>
            <span className="text-sm text-orange-500 font-medium">
              🔥 Trending Now
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mt-1">
              Best Selling Products
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Discover the most popular products our customers love
            </p>
          </div>

          <button className="text-sm font-medium text-orange-500 hover:underline">
            View All →
          </button>
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

          {bestProducts.map((item) => (
            <div
              key={item.id}
              className="transition-transform duration-300 hover:-translate-y-1"
            >
              <ProductCard data={item} />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default BestSelling;
import React from "react";
import ProductCard from "../ProductCard";
import { productData } from "../../assets/Products";

const FeaturedProducts = () => {
  // simulate featured (high rating)
  const featured = productData
    .filter((p) => p.rating >= 4.5)
    .slice(0, 8);

  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Featured Collection
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            Handpicked products just for you
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

          {featured.map((item) => (
            <div
              key={item.id}
              className="group transition-all duration-300 hover:-translate-y-1"
            >
              <ProductCard data={item} />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default FeaturedProducts;
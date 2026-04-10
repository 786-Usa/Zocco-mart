import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import { productData } from "../assets/Products";

const ProductsPage = () => {
  const categories = [
    "All",
    ...new Set(productData.map((item) => item.category)),
  ];

  const [filters, setFilters] = useState({
    category: "All",
    minPrice: 0,
    maxPrice: 3000,
    rating: 0,
    inStock: false,
    sort: "default",
  });

  // FILTER LOGIC
  let filteredProducts = productData.filter((p) => {
    return (
      (filters.category === "All" || p.category === filters.category) &&
      p.discount_price >= filters.minPrice &&
      p.discount_price <= filters.maxPrice &&
      p.rating >= filters.rating &&
      (!filters.inStock || p.stock > 0)
    );
  });

  // SORTING
  if (filters.sort === "low-high") {
    filteredProducts.sort((a, b) => a.discount_price - b.discount_price);
  } else if (filters.sort === "high-low") {
    filteredProducts.sort((a, b) => b.discount_price - a.discount_price);
  } else if (filters.sort === "popular") {
    filteredProducts.sort((a, b) => b.total_sell - a.total_sell);
  }

  return (
    <>


      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* TOP BAR */}
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">
              Explore Products
            </h1>
            <p className="text-sm text-gray-500">
              {filteredProducts.length} products found
            </p>
          </div>

          {/* SORT */}
          <select
            value={filters.sort}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, sort: e.target.value }))
            }
            className="border px-4 py-2 rounded-lg text-sm bg-white shadow-sm"
          >
            <option value="default">Sort By</option>
            <option value="low-high">Price: Low → High</option>
            <option value="high-low">Price: High → Low</option>
            <option value="popular">Most Popular</option>
          </select>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* SIDEBAR */}
          <aside className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm sticky top-24 space-y-6">
              <h2 className="text-lg font-semibold text-gray-900">Filters</h2>

              {/* CATEGORY */}
              <div>
                <h3 className="text-sm font-medium mb-3">Category</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat, i) => (
                    <button
                      key={i}
                      onClick={() =>
                        setFilters((prev) => ({ ...prev, category: cat }))
                      }
                      className={`px-3 py-1.5 rounded-full text-xs transition ${
                        filters.category === cat
                          ? "bg-orange-500 text-white"
                          : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* PRICE */}
              <div>
                <h3 className="text-sm font-medium mb-3">Price Range</h3>
                <input
                  type="range"
                  min="0"
                  max="3000"
                  value={filters.maxPrice}
                  onChange={(e) =>
                    setFilters((prev) => ({
                      ...prev,
                      maxPrice: Number(e.target.value),
                    }))
                  }
                  className="w-full accent-orange-500"
                />
                <div className="text-sm text-gray-500 mt-1">
                  $0 - ${filters.maxPrice}
                </div>
              </div>

              {/* RATING */}
              <div>
                <h3 className="text-sm font-medium mb-3">Rating</h3>
                <div className="flex gap-2">
                  {[4, 3, 2].map((r) => (
                    <button
                      key={r}
                      onClick={() =>
                        setFilters((prev) => ({ ...prev, rating: r }))
                      }
                      className={`px-3 py-1 rounded-lg text-sm border ${
                        filters.rating === r
                          ? "bg-orange-500 text-white border-orange-500"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      {r}+ ⭐
                    </button>
                  ))}
                </div>
              </div>

              {/* STOCK */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">In Stock Only</span>
                <input
                  type="checkbox"
                  checked={filters.inStock}
                  onChange={(e) =>
                    setFilters((prev) => ({
                      ...prev,
                      inStock: e.target.checked,
                    }))
                  }
                  className="accent-orange-500"
                />
              </div>

              {/* RESET */}
              <button
                onClick={() =>
                  setFilters({
                    category: "All",
                    minPrice: 0,
                    maxPrice: 3000,
                    rating: 0,
                    inStock: false,
                    sort: "default",
                  })
                }
                className="w-full py-2 rounded-lg border text-sm hover:bg-gray-100 transition"
              >
                Reset Filters
              </button>
            </div>
          </aside>

          {/* PRODUCTS */}
          <main className="lg:col-span-3">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((item) => (
                  <div
                    key={item.id}
                    className="transition-transform duration-300 hover:-translate-y-1"
                  >
                    <ProductCard data={item} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-500 py-20">
                No products found
              </div>
            )}
          </main>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;

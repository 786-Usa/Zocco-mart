import React from "react";
import { productData } from "../../assets/Products";

const NewArrivals = () => {
  const newProducts = [...productData].slice(0, 5);

  const main = newProducts[0];
  const side = newProducts.slice(1);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="mb-10">
          <span className="text-sm text-orange-500 font-medium">
            ✨ Just Dropped
          </span>
          <h2 className="text-3xl font-semibold text-gray-900 mt-1">
            New Arrivals
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Discover the latest additions to our collection
          </p>
        </div>

        {/* DESKTOP LAYOUT */}
        <div className="hidden lg:grid grid-cols-3 gap-6">

          {/* BIG FEATURE CARD */}
          <div className="col-span-2 relative rounded-3xl overflow-hidden group cursor-pointer">
            <img
              src={main.image_Url[0].url}
              alt={main.name}
              className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

            {/* Content */}
            <div className="absolute bottom-6 left-6 text-white max-w-md">
              <h3 className="text-2xl font-semibold leading-tight">
                {main.name}
              </h3>
              <p className="text-sm mt-2 text-gray-200 line-clamp-2">
                {main.description}
              </p>

              <div className="mt-4 flex items-center gap-3">
                <span className="text-lg font-bold">
                  ${main.discount_price}
                </span>
                <span className="line-through text-sm text-gray-300">
                  ${main.price}
                </span>
              </div>

              <button className="mt-4 px-5 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition">
                Shop Now
              </button>
            </div>
          </div>

          {/* SIDE STACK */}
          <div className="flex flex-col gap-6">
            {side.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 bg-white rounded-2xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition cursor-pointer"
              >
                <img
                  src={item.image_Url[0].url}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />

                <div className="flex-1">
                  <h4 className="text-sm font-medium text-gray-900 line-clamp-2">
                    {item.name}
                  </h4>

                  <div className="mt-2 text-sm font-semibold">
                    ${item.discount_price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE VERSION */}
        <div className="lg:hidden flex gap-4 overflow-x-auto pb-2">

          {newProducts.map((item) => (
            <div
              key={item.id}
              className="min-w-[260px] relative rounded-2xl overflow-hidden group"
            >
              <img
                src={item.image_Url[0].url}
                alt={item.name}
                className="w-full h-[300px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="text-sm font-semibold line-clamp-2">
                  {item.name}
                </h4>
                <p className="text-xs mt-1">${item.discount_price}</p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default NewArrivals;
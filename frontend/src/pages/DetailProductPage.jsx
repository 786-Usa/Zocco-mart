import React from "react";
import { useParams } from "react-router-dom";
import { productData } from "../assets/Products";

const DetailProductPage = () => {
  const { id } = useParams();

  const product = productData.find((p) => p.id === Number(id));

  if (!product) return <p>Product not found</p>;

  return (
    <>

      <div className="max-w-7xl mx-auto px-4 py-10">

        <div className="grid md:grid-cols-2 gap-10">

          {/* IMAGE */}
          <div className="bg-gray-50 rounded-2xl p-10 flex items-center justify-center">
            <img
              src={product.image_Url[0].url}
              alt={product.name}
              className="max-h-[400px] object-contain"
            />
          </div>

          {/* DETAILS */}
          <div className="space-y-5">

            <h1 className="text-3xl font-semibold text-gray-900">
              {product.name}
            </h1>

            <p className="text-gray-500">
              {product.description}
            </p>

            {/* PRICE */}
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold">
                ${product.discount_price}
              </span>
              <span className="line-through text-gray-400">
                ${product.price}
              </span>
            </div>

            {/* INFO */}
            <div className="text-sm text-gray-500 space-y-1">
              <p>Brand: {product.shop.name}</p>
              <p>Rating: {product.rating} ⭐</p>
              <p>Stock: {product.stock}</p>
            </div>

            {/* ACTIONS */}
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-black text-white rounded-lg">
                Add to Cart
              </button>
              <button className="px-6 py-3 border rounded-lg">
                Buy Now
              </button>
            </div>

          </div>
        </div>

        {/* EXTRA SECTION */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-3">
            Product Description
          </h2>
          <p className="text-gray-600">
            {product.description}
          </p>
        </div>

      </div>
    </>
  );
};

export default DetailProductPage;
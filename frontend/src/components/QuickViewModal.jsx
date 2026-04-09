import React from "react";
import { X } from "lucide-react";

const QuickViewModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/50 flex items-center justify-center">
      
      <div className="bg-white w-[90%] max-w-4xl rounded-2xl shadow-xl p-6 relative">

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4"
        >
          <X />
        </button>

        <div className="grid md:grid-cols-2 gap-6">

          {/* IMAGE */}
          <div className="bg-gray-50 rounded-xl flex items-center justify-center p-6">
            <img
              src={product.image_Url[0].url}
              alt={product.name}
              className="max-h-[250px] object-contain"
            />
          </div>

          {/* INFO */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">
              {product.name}
            </h2>

            <p className="text-sm text-gray-500">
              {product.description}
            </p>

            <div className="flex gap-3 items-center">
              <span className="text-2xl font-bold">
                ${product.discount_price}
              </span>
              <span className="line-through text-gray-400">
                ${product.price}
              </span>
            </div>

            <button className="px-5 py-2 bg-black text-white rounded-lg">
              Add to Cart
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

const QuickViewModal = ({ product, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  if (!product) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      onClick={onClose}
    >
      {/* BACKDROP */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"></div>

      {/* MODAL */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white w-[92%] max-w-4xl rounded-3xl shadow-2xl p-6 md:p-8 animate-scaleIn"
      >
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
        >
          <X />
        </button>

        <div className="grid md:grid-cols-2 gap-8">

          {/* IMAGE */}
          <div className="bg-gray-50 rounded-2xl flex items-center justify-center p-6">
            <img
              src={product.image_Url[0].url}
              alt={product.name}
              className="max-h-[260px] object-contain"
            />
          </div>

          {/* DETAILS */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">
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
    </div>,
    document.body
  );
};

export default QuickViewModal;
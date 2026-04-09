import React, { useState } from "react";
import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineEye,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import QuickViewModal from "./QuickViewModal";

const ProductCard = ({ data }) => {
  const navigate = useNavigate();

  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  // Safe values
  const image = data?.image_Url?.[0]?.url;
  const name = data?.name || "Product";
  const shop = data?.shop?.name || "Brand";
  const rating = data?.rating || 0;

  // Discount calculation
  const discountPercent =
    data?.price > data?.discount_price
      ? Math.round(
          ((data.price - data.discount_price) / data.price) * 100
        )
      : 0;

  // Navigate handler
  const handleNavigate = () => {
    navigate(`/product/${data.id}`);
  };

  return (
    <>
      <div
        onClick={handleNavigate}
        className="group relative bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
      >
        {/* DISCOUNT BADGE */}
        {discountPercent > 0 && (
          <span className="absolute top-3 left-3 z-10 bg-orange-500 text-white text-[10px] px-2 py-1 rounded-full font-medium">
            {discountPercent}% OFF
          </span>
        )}

        {/* IMAGE */}
        <div className="relative bg-gray-50 flex items-center justify-center h-[200px] overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-[140px] h-[140px] object-contain transition-transform duration-500 group-hover:scale-110"
          />

          {/* ACTION BUTTONS */}
          <div className="absolute right-3 top-3 flex flex-col gap-3 opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">

            {/* Wishlist */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsWishlisted(!isWishlisted);
              }}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow hover:bg-gray-100 transition"
            >
              {isWishlisted ? (
                <AiFillHeart className="text-red-500" size={18} />
              ) : (
                <AiOutlineHeart size={18} />
              )}
            </button>

            {/* Quick View */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsPreviewOpen(true);
              }}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow hover:bg-gray-100 transition"
            >
              <AiOutlineEye size={18} />
            </button>

            {/* Add to Cart */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                // TODO: add cart logic
              }}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow hover:bg-gray-100 transition"
            >
              <AiOutlineShoppingCart size={18} />
            </button>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-4 space-y-2">

          {/* SHOP */}
          <p className="text-xs text-gray-400">{shop}</p>

          {/* TITLE */}
          <h3 className="text-sm font-medium text-gray-900 leading-snug line-clamp-2">
            {name}
          </h3>

          {/* RATING */}
          <div className="flex items-center gap-1 text-[#F6BA00] text-sm">
            {[...Array(5)].map((_, i) =>
              i < Math.floor(rating) ? (
                <AiFillStar key={i} />
              ) : (
                <AiOutlineStar key={i} />
              )
            )}
            <span className="text-gray-400 text-xs ml-1">
              ({rating})
            </span>
          </div>

          {/* PRICE */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-gray-900">
                ${data?.discount_price}
              </span>
              {data?.price && (
                <span className="text-xs line-through text-gray-400">
                  ${data.price}
                </span>
              )}
            </div>

            <span className="text-xs text-green-500">
              {data?.total_sell} sold
            </span>
          </div>
        </div>
      </div>

      {/* QUICK VIEW MODAL */}
      {isPreviewOpen && (
        <QuickViewModal
          product={data}
          onClose={() => setIsPreviewOpen(false)}
        />
      )}
    </>
  );
};

export default ProductCard;
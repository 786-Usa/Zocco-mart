import React, { useState } from "react";
import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineEye,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import QuickViewModal from "./QuickViewModal";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ data }) => {
  const [click, setClick] = useState(false);
  const [openPreview, setOpenPreview] = useState(false);

  const discountPercent =
    data?.price > data?.discount_price
      ? Math.round(((data.price - data.discount_price) / data.price) * 100)
      : 0;

  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/product/${data.id}`)}>
      <div className="group relative bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
        {/* DISCOUNT BADGE */}
        {discountPercent > 0 && (
          <span className="absolute top-3 left-3 z-10 bg-orange-500 text-white text-[10px] px-2 py-1 rounded-full font-medium">
            {discountPercent}% OFF
          </span>
        )}

        {/* IMAGE */}
        <div className="relative bg-gray-50 flex items-center justify-center h-[200px] overflow-hidden">
          <img
            src={data?.image_Url?.[0]?.url}
            alt={data?.name}
            className="w-[140px] h-[140px] object-contain transition-transform duration-500 group-hover:scale-110"
          />

          {/* HOVER ACTIONS */}
          <div className="absolute right-3 top-3 flex flex-col gap-3 opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            {/* Wishlist */}
            <button
              onClick={() => setClick(!click)}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow hover:bg-gray-100"
            >
              {click ? (
                <AiFillHeart className="text-red-500" size={18} />
              ) : (
                <AiOutlineHeart size={18} />
              )}
            </button>

            {/* Quick View */}
            <button
              onClick={() => setOpenPreview(true)}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow hover:bg-gray-100"
            >
              <AiOutlineEye size={18} />
            </button>

            {/* Add to Cart */}
            <button className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow hover:bg-gray-100">
              <AiOutlineShoppingCart size={18} />
            </button>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-4 space-y-2">
          {/* SHOP */}
          <p className="text-xs text-gray-400">{data?.shop?.name}</p>

          {/* TITLE */}
          <h3 className="text-sm font-medium text-gray-900 leading-snug line-clamp-2">
            {data?.name}
          </h3>

          {/* RATING */}
          <div className="flex items-center gap-1 text-[#F6BA00] text-sm">
            {[...Array(5)].map((_, i) =>
              i < Math.floor(data?.rating) ? (
                <AiFillStar key={i} />
              ) : (
                <AiOutlineStar key={i} />
              ),
            )}
            <span className="text-gray-400 text-xs ml-1">({data?.rating})</span>
          </div>

          {/* PRICE */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-gray-900">
                ${data?.discount_price}
              </span>
              {data?.price && (
                <span className="text-xs line-through text-gray-400">
                  ${data?.price}
                </span>
              )}
            </div>

            <span className="text-xs text-green-500">
              {data?.total_sell} sold
            </span>
          </div>
        </div>
        {openPreview && (
          <QuickViewModal
            product={data}
            onClose={() => setOpenPreview(false)}
          />
        )}
      </div>
    </div>
  );
};

export default ProductCard;

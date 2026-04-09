import React, { useState } from "react";
import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineEye,
  AiOutlineShoppingCart,
} from "react-icons/ai";

const ProductCard = ({ data }) => {
  const [click, setClick] = useState(false);

  return (
    <div className="w-full h-[370px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer group">
      {/* 1. Image Section */}
      <div className="flex justify-center">
        <img
          src={data?.image_Url?.[0]?.url}
          alt={data?.name}
          className="w-[150px] h-[150px] object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* 2. Shop Name */}
      <h5 className="text-[14px] text-blue-400 font-medium pt-3">
        {data?.shop?.name}
      </h5>

      {/* 3. Product Title */}
      <h4 className="pb-3 font-[500] text-[16px] leading-tight">
        {data?.name?.length > 40 ? data?.name.slice(0, 40) + "..." : data?.name}
      </h4>

      {/* 4. Ratings Section */}
      <div className="flex text-[#F6BA00] mb-2">
        <AiFillStar size={18} />
        <AiFillStar size={18} />
        <AiFillStar size={18} />
        <AiFillStar size={18} />
        <AiOutlineStar size={18} />
      </div>

      {/* 5. Price & Sales Section */}
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <h5 className="font-bold text-[18px] text-[#333]">
            {data?.price > data?.discount_price && (
              <span className="absolute top-3 left-3 bg-orange-500 text-white text-[10px] px-2 py-1 rounded-full">
                {Math.round(
                  ((data.price - data.discount_price) / data.price) * 100,
                )}
                % OFF
              </span>
            )}
            {data?.discount_price}$
          </h5>
          {data?.price && (
            <h4 className="text-[14px] text-[#d55b45] line-through">
              {data?.price}$
            </h4>
          )}
        </div>
        <span className="font-[400] text-[15px] text-[#68d284]">
          {data?.total_sell} sold
        </span>
      </div>

      {/* 6. Side Action Icons (Floating) */}
      <div className="absolute right-2 top-5 flex flex-col gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {click ? (
          <AiFillHeart
            size={22}
            className="text-red-500 cursor-pointer"
            onClick={() => setClick(!click)}
            title="Remove from wishlist"
          />
        ) : (
          <AiOutlineHeart
            size={22}
            className="text-[#333] cursor-pointer"
            onClick={() => setClick(!click)}
            title="Add to wishlist"
          />
        )}
        <AiOutlineEye
          size={22}
          className="text-[#333] cursor-pointer"
          title="Quick view"
        />
        <AiOutlineShoppingCart
          size={22}
          className="text-[#444] cursor-pointer"
          title="Add to cart"
        />
      </div>
    </div>
  );
};

export default ProductCard;

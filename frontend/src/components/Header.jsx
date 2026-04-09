import React, { useEffect, useState } from "react";
import {
  LayoutGrid,
  Search,
  ChevronDown,
  Heart,
  ShoppingCart,
  CircleUserRound,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";
import { productData } from "../assets/Products.js";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";

const Header = () => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    const filteredproductData = productData.filter((p) =>
      p.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchResults(filteredproductData);
  };

  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categories = [
    "Electronics",
    "Men Fashion",
    "Women Fashion",
    "Mobiles & Tablets",
    "Groceries",
  ];

    useEffect(() => {
  document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
}, [isMobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-200/60 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">

      {/* TOP */}
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-6">

        {/* LOGO */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-400 flex items-center justify-center shadow-md">
            <div className="w-3 h-3 bg-white rounded-full" />
          </div>
          <span className="text-xl font-semibold tracking-tight text-gray-900">
            Shop<span className="text-orange-500">O</span>
          </span>
        </div>

        {/* SEARCH */}
        <div className="hidden md:flex flex-1 max-w-xl relative">
          <div className="w-full relative">
            <input
              type="search"
              placeholder="Search products..."
              value={search}
              onChange={handleSearchChange}
              className="w-full h-11 pl-5 pr-12 rounded-xl border border-gray-200 bg-white/80 backdrop-blur focus:ring-2 focus:ring-orange-400 outline-none transition-all shadow-sm"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

            {search && (
              <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-50">
                {searchResults.length > 0 ? (
                  searchResults.slice(0, 6).map((item) => (
                    <div
                      key={item.id}
                      className="px-4 py-3 hover:bg-gray-50 cursor-pointer transition flex justify-between items-center"
                    >
                      <span className="text-sm text-gray-700">
                        {item.title}
                      </span>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-3 text-sm text-gray-400">
                    No results found
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">

          {/* Seller */}
          <button className="hidden sm:flex items-center gap-2 px-4 h-10 rounded-xl bg-gray-900 text-white text-sm font-medium hover:bg-black transition shadow-sm">
            Become Seller
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* NAVBAR */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center">

          {/* Categories */}
          <div className="relative">
            <button
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
              className="flex items-center gap-2 px-4 h-10 bg-white text-gray-900 rounded-lg text-sm font-medium shadow hover:shadow-md transition"
            >
              <LayoutGrid className="w-4 h-4" />
              Categories
              <ChevronDown
                className={`w-4 h-4 transition ${
                  isCategoriesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isCategoriesOpen && (
              <div className="absolute top-12 left-0 w-64 bg-white text-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-100">
                {categories.map((cat, i) => (
                  <a
                    key={i}
                    href="#"
                    className="block px-5 py-3 text-sm hover:bg-gray-50 transition"
                  >
                    {cat}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* LINKS */}
          <nav className="hidden lg:flex items-center gap-8 ml-8 text-sm font-medium">
            {["Home", "Best Selling", "productData", "Events", "FAQ"].map(
              (item, i) => (
                <a
                  key={i}
                  href={`/${item.toLowerCase()}`}
                  className="relative group text-gray-300 hover:text-white transition"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-400 group-hover:w-full transition-all"></span>
                </a>
              )
            )}
          </nav>

          {/* ICONS */}
          <div className="flex items-center gap-5 ml-auto">

            <Link to="/wishlist" className="relative group">
              <Heart className="w-5 h-5 text-gray-300 group-hover:text-red-400 transition" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                0
              </span>
            </Link>

            <Link to="/cart" className="relative group">
              <ShoppingCart className="w-5 h-5 text-gray-300 group-hover:text-green-400 transition" />
              <span className="absolute -top-2 -right-2 bg-green-500 text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                1
              </span>
            </Link>

            <Link to="/my-profile" className="group">
              <CircleUserRound className="w-6 h-6 text-gray-300 group-hover:text-white transition" />
            </Link>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER */}
    {isMobileMenuOpen &&
  createPortal(
    <div
      className="fixed inset-0 bg-black/60 z-[9999] backdrop-blur-sm "
      onClick={() => setIsMobileMenuOpen(false)}
    >
      <div
        className="bg-white w-72 h-full p-6 shadow-2xl animate-slideIn"
        onClick={(e) => e.stopPropagation()}
      >
        <X
          className="absolute top-5 right-5 w-5 h-5 cursor-pointer"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <h2 className="text-lg font-semibold mb-6">Menu</h2>

        <nav className="flex flex-col gap-4 text-sm">
          {["Home", "Best Selling", "productData", "Events", "FAQ"].map(
            (item, i) => (
              <a key={i} href={`/${item.toLowerCase()}`} className="hover:text-orange-500 transition">
                {item}
              </a>
            )
          )}
        </nav>
      </div>
    </div>,
    document.body
  )}
    </header>
  );
};

export default Header;
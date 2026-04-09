import React from "react";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaLinkedinIn 
} from "react-icons/fa";



const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-4">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10">

          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-semibold text-white">
              Shop<span className="text-orange-500">O</span>
            </h2>
            <p className="text-sm mt-4 text-gray-400">
              Discover premium products with the best prices and fastest delivery.
            </p>

            {/* Socials */}
            <div className="flex gap-4 mt-5">
              {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map((Icon, i) => (
                <div
                  key={i}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-orange-500 transition cursor-pointer"
                >
                  <Icon className="w-4 h-4 text-white" />
                </div>
              ))}
            </div>
          </div>

          {/* SHOP */}
          <div>
            <h3 className="text-white font-medium mb-4">Shop</h3>
            <ul className="space-y-3 text-sm">
              {["All Products", "Best Selling", "New Arrivals", "Featured"].map(
                (item, i) => (
                  <li
                    key={i}
                    className="hover:text-orange-500 cursor-pointer transition"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="text-white font-medium mb-4">Support</h3>
            <ul className="space-y-3 text-sm">
              {["FAQ", "Shipping", "Returns", "Order Tracking"].map(
                (item, i) => (
                  <li
                    key={i}
                    className="hover:text-orange-500 cursor-pointer transition"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-white font-medium mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Email: support@shopo.com</li>
              <li>Phone: +92 300 1234567</li>
              <li>Location: Pakistan</li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">

          <p className="text-gray-500">
            © {new Date().getFullYear()} ShopO. All rights reserved.
          </p>

          <div className="flex gap-6">
            {["Privacy Policy", "Terms", "Cookies"].map((item, i) => (
              <span
                key={i}
                className="hover:text-orange-500 cursor-pointer transition"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
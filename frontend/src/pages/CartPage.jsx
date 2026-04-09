import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { Trash2 } from "lucide-react";

const Cart = () => {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      product: "LCD Monitor",
      price: 650,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1656944227421-d0e8de487d9d",
    },
    {
      id: 2,
      product: "HI Gamepad",
      price: 550,
      quantity: 2,
      image:
        "https://images.unsplash.com/photo-1634624943458-3e29f132d4d2",
    },
  ]);

  const updateQuantity = (id, newQty) => {
    if (newQty < 1) return;
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Number(newQty) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">
            Shopping Cart
          </h1>
          <p className="text-sm text-gray-500">
            {cartItems.reduce((acc, i) => acc + i.quantity, 0)} items
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* LEFT - CART ITEMS */}
          <div className="lg:col-span-2 space-y-4">

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.product}
                  className="w-24 h-24 object-cover rounded-lg"
                />

                {/* Info */}
                <div className="flex-1 w-full">
                  <h3 className="font-medium text-gray-900">
                    {item.product}
                  </h3>
                  <p className="text-sm text-gray-500">
                    ${item.price}
                  </p>

                  {/* Controls */}
                  <div className="flex items-center justify-between mt-4">
                    {/* Quantity */}
                    <div className="flex items-center border rounded-lg overflow-hidden">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="px-3 py-1 hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span className="px-4 text-sm">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="px-3 py-1 hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>

                    {/* Total */}
                    <div className="text-sm font-semibold">
                      ${item.price * item.quantity}
                    </div>
                  </div>
                </div>

                {/* Remove */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-gray-400 hover:text-red-500 transition"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>

          {/* RIGHT - SUMMARY */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm h-fit sticky top-24">
            <h2 className="text-lg font-semibold mb-4 text-gray-900">
              Order Summary
            </h2>

            <div className="flex justify-between text-sm mb-2">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-sm mb-4">
              <span>Shipping</span>
              <span className="text-green-600">Free</span>
            </div>

            <div className="border-t pt-4 flex justify-between font-semibold text-gray-900">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <button
              onClick={() => navigate("/checkout")}
              className="w-full mt-6 bg-gray-900 hover:bg-black text-white py-3 rounded-lg text-sm font-medium transition"
            >
              Proceed to Checkout
            </button>

            <button
              onClick={() => navigate("/home")}
              className="w-full mt-3 border border-gray-300 py-3 rounded-lg text-sm hover:bg-gray-50 transition"
            >
              Continue Shopping
            </button>

            {/* Coupon */}
            <div className="mt-6">
              <p className="text-sm mb-2 text-gray-500">Promo Code</p>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter code"
                  className="flex-1 px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-orange-400 outline-none"
                />
                <button className="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm hover:bg-orange-600 transition">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
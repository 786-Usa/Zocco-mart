import React from "react";

const Newsletter = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white md:py-35">
      <div className="max-w-3xl mx-auto text-center px-4">

        <h2 className="text-3xl font-semibold">
          Get Updates & Exclusive Offers
        </h2>

        <p className="text-gray-300 mt-3 text-sm">
          Subscribe to our newsletter and never miss new arrivals or deals
        </p>
        <p className="text-gray-300  text-sm">
            We promise to send only the good stuff - no spam, just great offers and updates.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 text-black outline-none backdrop-blur-2xl bg-white/30 rounded-lg p-1"
          />
          <button className="px-6 py-3 bg-orange-500 rounded-lg hover:bg-orange-600 transition">
            Subscribe
          </button>
        </div>

      </div>
    </section>
  );
};

export default Newsletter;
import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden z-0">
      
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1774966961772-c73ad3a60b10?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Light Overlay (for readability like your design) */}
      <div className="absolute inset-0 bg-white/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-4">
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
          Best Collection For <br />
          Home Decoration
        </h1>

        <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg max-w-xl mx-auto">
          Discover elegant and modern designs to transform your living space
          into something truly special.
        </p>

        <button className="mt-8 px-8 py-3 bg-black text-white rounded-md text-sm sm:text-base font-medium hover:bg-black/80 transition-all duration-300 shadow-md hover:shadow-lg active:scale-95">
          Shop Now
        </button>

      </div>
    </section>
  );
};

export default Hero;
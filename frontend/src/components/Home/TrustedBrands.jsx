import React from "react";
import apple from "../../assets/Logos/apple.svg";
import nike from "../../assets/Logos/nike.svg";
import amazon from "../../assets/Logos/amazon.svg";
import adidas from "../../assets/Logos/adidas.svg";
import samsung from "../../assets/Logos/samsung.svg";
import sony from "../../assets/Logos/sony.svg";
import puma from "../../assets/Logos/puma.svg";
import dell from "../../assets/Logos/dell.svg";
import hp from "../../assets/Logos/hp.svg";
import lenovo from "../../assets/Logos/lenovo.svg";
import microsoft from "../../assets/Logos/microsoft.svg";
import asus from "../../assets/Logos/asus.svg";
import google from "../../assets/Logos/google.svg";
import intel from "../../assets/Logos/intel.svg";
import zara from "../../assets/Logos/zara.svg";
import hm from "../../assets/Logos/handm.svg";
import uniqlo from "../../assets/Logos/uniqlo.svg";
import gucci from "../../assets/Logos/gucci.svg";
import louisvuitton from "../../assets/Logos/louis-vuitton.svg";

const brands = [
  { name: "Apple", logo: apple },
  { name: "Nike", logo: nike },
  { name: "Amazon", logo: amazon },
  { name: "Adidas", logo: adidas },
  { name: "Samsung", logo: samsung },
  { name: "Sony", logo: sony },
  { name: "Puma", logo: puma },
  { name: "Dell", logo: dell },
  { name: "HP", logo: hp },
  { name: "Lenovo", logo: lenovo },
  { name: "Microsoft", logo: microsoft },
  { name: "Asus", logo: asus },
  { name: "Google", logo: google },
  { name: "Intel", logo: intel },
  { name: "Zara", logo: zara },
  { name: "H&M", logo: hm },
  { name: "Uniqlo", logo: uniqlo },
  { name: "Gucci", logo: gucci },
  { name: "Louis Vuitton", logo: louisvuitton },
];

// Duplicate for seamless loop
const loopBrands = [...brands, ...brands];

const TrustedBrands = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-10">
          <span className="text-sm text-orange-500 font-medium">
            🤝 Trusted Partners
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mt-2">
            Sponsored Brands
          </h2>
          <p className="text-gray-500 text-sm mt-2 max-w-xl mx-auto">
            We collaborate with world-class brands to deliver excellence
          </p>
        </div>

        {/* MARQUEE WRAPPER */}
        <div className="relative">

          {/* LEFT FADE */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>

          {/* RIGHT FADE */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* SCROLL TRACK */}
          <div className="group overflow-hidden">
            <div className="flex gap-10 w-max animate-marquee group-hover:[animation-play-state:paused]">

              {loopBrands.map((brand, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center w-[140px] h-[90px] rounded-2xl bg-white/70 backdrop-blur border border-gray-200 shadow-sm hover:shadow-lg transition group/card cursor-pointer"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="w-12 h-12 object-contain grayscale opacity-70 group-hover/card:grayscale-0 group-hover/card:opacity-100 group-hover/card:scale-110 transition duration-300"
                  />
                </div>
              ))}

            </div>
          </div>
        </div>

      </div>

      {/* ANIMATION STYLE */}
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-marquee {
            animation: marquee 25s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default TrustedBrands;
import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-10 bg-linear-to-r from-[#FBE9FF] to-[#E8F9FF] overflow-hidden px-4 md:py-14 lg:py-[70px]">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[radial-gradient(circle,#E4C8FF_0%,transparent_70%)] blur-2xl opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[radial-gradient(circle,#C8EFFF_0%,transparent_70%)] blur-2xl opacity-50"></div>

      <div className="relative z-10 max-w-3xl w-full flex flex-col items-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary leading-snug">
          Deal Your <span className="text-accent">Products</span>
          <br />
          In A <span className="text-accent">Smart</span> Way !
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-secondary max-w-xl mx-auto text-sm md:text-base">
          SmartDeals helps you sell, resell, and shop from trusted local sellers
          — all in one place!
        </p>

        {/* Search Bar */}
        <div className="flex items-center mt-8 w-full max-w-md bg-white rounded-full shadow-md overflow-hidden border border-gray-200 focus-within:ring-2 focus-within:ring-accent">
          <input
            type="text"
            placeholder="search For Products, Categories..."
            className="flex-1 px-5 py-3 outline-none text-sm md:text-base"
          />
          <button type="button" className="p-5 text-white gradAccentClr rounded-r-full h-full flex items-center justify-center hover:cursor-pointer">
            <FaSearch />
          </button>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Link
            to="/all-products"
            className="btn gradAccentClr gradAccentClrHover border-none text-white"
          >
            Watch All Products
          </Link>

          <Link
            to="/create-product"
            className="btn gradAccentClrHover text-accent border-2 border-accent transition-colors duration-300 ease-linear hover:text-white"
          >
            Post an Product
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

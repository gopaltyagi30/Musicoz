
import React from "react";
import { Search } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-[#101010] text-white px-6 py-20 rounded-2xl my-6">

      <div className="max-w-3xl mx-auto text-center">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-5">
          Discover Your{" "}
          <span className="text-purple-400">
            Next Favorite Song
          </span>
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-base md:text-lg mb-9">
          Stream millions of tracks and discover music
          that matches your mood and soul.
        </p>

        {/* Search Bar */}
        <div className="flex items-center bg-[#1D1D1D] border border-gray-700 rounded-full p-2 max-w-2xl mx-auto">

          <Search className="text-gray-400 ml-4" size={21} />

          <input
            type="text"
            placeholder="Search songs, artists, or albums..."
            className="flex-1 bg-transparent outline-none px-4 py-3 text-white placeholder-gray-500 text-sm"
          />

          <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full text-sm font-semibold transition">
            Search
          </button>

        </div>

        {/* Bottom Text */}
        <p className="text-gray-500 text-sm mt-6">
          Discover new music. Explore new artists. Feel every beat.
        </p>

      </div>

    </section>
  );
};

export default HeroSection;


import React from "react";

const TrendingSongsSkeleton = () => {
  return (
    <section className="px-6 py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-white text-2xl font-bold">
            Trending Songs
          </h2>
          <p className="text-gray-400 text-sm mt-1">
            Discover what's popular right now
          </p>
        </div>

        <div className="bg-[#292530] h-4 w-14 rounded animate-pulse" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="bg-[#17151D] border border-[#292530] rounded-xl p-3 animate-pulse"
          >
            <div className="w-full aspect-square bg-[#292530] rounded-lg" />

            <div className="mt-4 space-y-2">
              <div className="h-4 bg-[#292530] rounded w-4/5" />
              <div className="h-3 bg-[#292530] rounded w-2/4" />
            </div>

            <div className="flex justify-between mt-5">
              <div className="h-3 bg-[#292530] rounded w-1/4" />
              <div className="h-3 bg-[#292530] rounded w-1/6" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingSongsSkeleton;


import React from "react";

const SearchSongsSkeleton = () => {
  return (
    <section className="px-6 py-8">

      {/* Heading Skeleton */}
      <div className="mb-6 animate-pulse">
        <div className="h-7 w-40 bg-[#292530] rounded mb-2"></div>
        <div className="h-3 w-52 bg-[#292530] rounded"></div>
      </div>

      {/* Song Cards Skeleton */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">

        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="bg-[#17151D] border border-[#292530] rounded-xl p-3 animate-pulse"
          >

            {/* Album Image */}
            <div className="w-full aspect-square bg-[#292530] rounded-lg"></div>

            {/* Song Details */}
            <div className="mt-4 space-y-3">
              <div className="h-4 bg-[#292530] rounded w-4/5"></div>
              <div className="h-3 bg-[#292530] rounded w-2/4"></div>
            </div>

            {/* Genre and Duration */}
            <div className="flex justify-between mt-5">
              <div className="h-3 bg-[#292530] rounded w-1/4"></div>
              <div className="h-3 bg-[#292530] rounded w-1/6"></div>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default SearchSongsSkeleton;

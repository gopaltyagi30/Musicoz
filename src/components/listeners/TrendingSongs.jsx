import React from "react";
import SongCard from "./SongCard";
import { useTrendingSong } from "./hook/listenerHooks";
import TrendingSongsSkeleton from "./TrendingSongsSkeleton";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TrendingSongs = () => {
  const { data, isPending, page,setPage,limit } = useTrendingSong();
  const totalSongs = 100;
 const totalPages = Math.ceil(totalSongs / limit);

 
  if (isPending)
    return (
      <div>
        <TrendingSongsSkeleton />
      </div>
    );
  return (
    <section className="px-6 py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-white text-2xl font-bold">Trending Songs</h2>

          <p className="text-gray-400 text-sm mt-1">
            Discover what's popular right now
          </p>
        </div>
        <div className="flex gap-5 items-center">

  <button
    disabled={page === 0}
    onClick={() => setPage((prev) => prev - 1)}
    className="disabled:opacity-30 disabled:cursor-not-allowed"
  >
    <ChevronLeft />
  </button>

  <h1>Page {page + 1} of {totalPages}</h1>

  <button
    disabled={page === totalPages - 1}
    onClick={() => setPage((prev) => prev + 1)}
    className="disabled:opacity-30 disabled:cursor-not-allowed"
  >
    <ChevronRight />
  </button>

</div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {data.data?.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>
    </section>
  );
};

export default TrendingSongs;

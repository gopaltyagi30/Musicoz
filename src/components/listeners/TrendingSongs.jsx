import React from "react";
import SongCard from "./SongCard";
import { useTrendingSong } from "./hook/listenerHooks";

const TrendingSongs = () => {
    const {data,isPending,error} = useTrendingSong();
    if(isPending) return <h1>Songs loading...</h1>
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

        <button className="text-purple-400 hover:text-purple-300 text-sm">
          View All
        </button>
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
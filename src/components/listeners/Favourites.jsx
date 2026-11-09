import { useContext } from "react";

import { FavouriteContext } from "../../context/FavouriteContext";
import SongCard from "./SongCard";

const Favourites = () => {

  const { favourites } = useContext(FavouriteContext);
 
  

  return (
    <div className="p-6">

      <h1 className="text-2xl text-white font-bold mb-6">
        Your Favourite Songs ❤️
      </h1>

      {favourites.length === 0 ? (
        <p className="text-gray-400">
          No favourite songs yet. Start adding some!
        </p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {favourites?.map((song) => (
            <SongCard key={song.id} song={song} />
          ))}
        </div>
      )}

    </div>
  );
};

export default Favourites;
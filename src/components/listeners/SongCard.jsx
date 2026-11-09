
import React, { useContext, useRef, useState } from "react";
import { Play, Pause, Heart } from "lucide-react";
import { FavouriteContext } from "../../context/FavouriteContext";

const SongCard = ({ song }) => {
  const {favourites, toggleFavourite} = useContext(FavouriteContext);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
   const isFavorite = favourites.some(
    (item) => item.id === song.id
  );

  const handlePlay = async () => {
    
    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch (error) {
      console.log("Audio playback error:", error);
    }
  };

  const handlePause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const remainingTime = Math.max(0, song.duration - currentTime);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <div className="bg-[#17151D] border border-[#292530] rounded-xl p-3 hover:bg-[#211E29] transition cursor-pointer group">
      <div className="relative">
        <img
          src={
            song.artwork?.["480x480"] ||
            song.artwork?.["150x150"] ||
            "/default-cover.png"
          }
          alt={song.title}
          className="w-full aspect-square object-cover rounded-lg"
        />

        <button
          onClick={isPlaying ? handlePause : handlePlay}
          className="absolute bottom-2 right-2 bg-purple-600 p-3 rounded-full opacity-0 group-hover:opacity-100 transition"
        >
          {isPlaying ? (
            <Pause size={20} fill="white" />
          ) : (
            <Play size={20} fill="white" />
          )}
        </button>
      </div>

      <div className="mt-3">
        <div className="flex justify-between items-start gap-2">
          <div className="min-w-0">
            <h3 className="text-white font-semibold truncate">
              {song.title}
            </h3>

            <p className="text-gray-400 text-sm truncate">
              {song.user?.name}
            </p>

            <audio
              ref={audioRef}
              src={`https://api.audius.co/v1/tracks/${song.id}/stream`}
              onEnded={() => {
                setIsPlaying(false);
                setCurrentTime(0);
              }}
              onPause={() => setIsPlaying(false)}
              onPlay={() => setIsPlaying(true)}
              onTimeUpdate={(e) =>
                setCurrentTime(e.target.currentTime)
              }
            />
          </div>

         <button onClick={() => toggleFavourite(song)}>
      <Heart
        size={20}
        fill={isFavorite ? "#A855F7" : "none"}
        color={isFavorite ? "#A855F7" : "white"}
      />
    </button>
        </div>

        <div className="flex justify-between items-center mt-3">
          <span className="text-xs text-gray-500">
            {song.genre || "Music"}
          </span>

          <span className="text-xs text-gray-500">
            {formatTime(remainingTime)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SongCard;

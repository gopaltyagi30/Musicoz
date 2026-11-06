import React from "react";
import { Play, Heart, MoreHorizontal } from "lucide-react";

const SongCard = ({ song }) => {
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

        <button className="absolute bottom-2 right-2 bg-purple-600 p-3 rounded-full opacity-0 group-hover:opacity-100 transition">
          <Play size={20} fill="white" />
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
          </div>

          <button className="text-gray-400 hover:text-white">
            <Heart size={18} />
          </button>
        </div>

        <div className="flex justify-between items-center mt-3">
          <span className="text-xs text-gray-500">
            {song.genre || "Music"}
          </span>

          <span className="text-xs text-gray-500">
            {Math.floor(song.duration / 60)}:
            {String(song.duration % 60).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SongCard;

import React, { useRef, useState } from "react";
import {
  Music2,
  Headphones,
  Play,
  Pause,
  Heart,
  ArrowDown,
  Sparkles,
} from "lucide-react";

const About = () => {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Format seconds into minutes:seconds
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${String(seconds).padStart(2, "0")}`;
  };

  // Play and pause music
  const handlePlayPause = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      try {
        await audioRef.current.play();
      } catch (error) {
        console.log("Audio playback error:", error);
      }
    }
  };

  // Seek to a particular position
  const handleSeek = (e) => {
    const newTime = Number(e.target.value);

    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const progress =
    duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="min-h-screen bg-[#0D0C10] text-white px-5 md:px-10 py-12">

      <div className="max-w-5xl mx-auto">

        {/* Welcome Section */}
        <section className="relative overflow-hidden bg-[#17151D] border border-[#292530] rounded-3xl p-8 md:p-14 mb-10">

          <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full" />

          <div className="relative z-10">
            <div className="flex items-center gap-2 text-purple-400 mb-6">
              <Sparkles size={18} />
              <span className="text-sm tracking-widest uppercase">
                A little introduction
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Thank you for
              <br />
              visiting <span className="text-purple-500">here.</span>
            </h1>

            <p className="text-gray-400 mt-6 max-w-xl leading-relaxed">
              Every project has a story, and this one has a little
              piece of me in it. So, before you explore Musicoz,
              let me introduce myself.
            </p>

            <a
              href="#who-am-i"
              className="inline-flex items-center gap-2 mt-8 bg-purple-600 hover:bg-purple-700 px-5 py-3 rounded-full text-sm font-medium transition"
            >
              Get to know me
              <ArrowDown size={16} />
            </a>
          </div>
        </section>

        {/* Who Am I */}
        <section id="who-am-i" className="mb-14 scroll-mt-10">

          <div className="flex items-center gap-3 mb-6">
            <div className="bg-purple-600/15 p-3 rounded-xl">
              <Headphones className="text-purple-400" />
            </div>

            <div>
              <p className="text-purple-400 text-xs uppercase tracking-widest">
                Behind the music
              </p>
              <h2 className="text-2xl md:text-3xl font-bold">
                Who am I?
              </h2>
            </div>
          </div>

          <div className="bg-[#17151D] border border-[#292530] rounded-3xl p-7 md:p-10">

            <h3 className="text-2xl md:text-3xl font-semibold">
              Hey, I'm <span className="text-purple-400">Gopal Tyagi.</span>
            </h3>

            <p className="text-gray-400 leading-8 mt-5">
              I'm a 21-year-old B.Tech Computer Science student
              who loves exploring the intersection of technology
              and creativity.
            </p>

            <p className="text-gray-400 leading-8 mt-4">
              I enjoy experimenting with new ideas, building
              things, learning new technologies, and turning
              creative thoughts into something real. For me,
              technology is not just about writing code. It's
              also about imagination, problem-solving, and
              creating experiences people enjoy.
            </p>

            <p className="text-gray-400 leading-8 mt-4">
              Musicoz is a demo project I built to test and
              improve my React skills. It's a small experiment
              where I get to learn, make mistakes, explore ideas,
              and bring my love for music into a web application.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-9">

              <div className="bg-[#211E29] rounded-2xl p-4">
                <p className="text-gray-500 text-xs">Name</p>
                <p className="font-semibold mt-2">Gopal Tyagi</p>
              </div>

              <div className="bg-[#211E29] rounded-2xl p-4">
                <p className="text-gray-500 text-xs">Age</p>
                <p className="font-semibold mt-2">21 Years</p>
              </div>

              <div className="bg-[#211E29] rounded-2xl p-4 col-span-2 md:col-span-1">
                <p className="text-gray-500 text-xs">Reach me at</p>
                <p className="font-semibold mt-2">gopaltyagi111@gmail.com</p>
              </div>

            </div>

          </div>
        </section>

        {/* Favourite Song */}
        <section className="mb-14">

          <div className="mb-6">
            <p className="text-purple-400 text-xs uppercase tracking-widest">
              On repeat lately
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mt-2">
              My personal favourite.
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Some songs are more than just music.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#211B2D] to-[#17151D] border border-[#393044] rounded-3xl p-6 md:p-9">

            <div className="flex flex-col md:flex-row gap-7 items-center">

              {/* Song Artwork */}
              <div className="w-full max-w-[260px] shrink-0">
                <img
                  src="/favourite-song.jpg"
                  alt="My favourite song artwork"
                  className="w-full aspect-square object-cover rounded-2xl shadow-2xl"
                />
              </div>

              {/* Song Details and Player */}
              <div className="flex-1 w-full">

                <div className="flex items-center gap-2 text-purple-400 text-xs uppercase tracking-widest mb-3">
                  <Heart size={14} fill="currentColor" />
                  Personal favourite
                </div>

                <h3 className="text-2xl md:text-3xl font-bold">
                  My Favourite Song
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  A song that deserves its own little space here.
                </p>

                {/* Audio Element */}
                <audio
                  ref={audioRef}
                  src="/favourite-song.mp3"
                  onLoadedMetadata={(e) =>
                    setDuration(e.currentTarget.duration)
                  }
                  onTimeUpdate={(e) =>
                    setCurrentTime(e.currentTarget.currentTime)
                  }
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => {
                    setIsPlaying(false);
                    setCurrentTime(0);
                  }}
                />

                {/* Music Timeline */}
                <div className="mt-9">

                  <input
                    type="range"
                    min="0"
                    max={duration || 0}
                    step="0.1"
                    value={Math.min(currentTime, duration || 0)}
                    onChange={handleSeek}
                    className="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-purple-500 bg-[#393044]"
                    style={{
                      background: `linear-gradient(to right, #A855F7 ${progress}%, #393044 ${progress}%)`,
                    }}
                  />

                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>

                </div>

                {/* Play Pause */}
                <div className="flex items-center gap-4 mt-6">

                  <button
                    onClick={handlePlayPause}
                    className="w-14 h-14 bg-purple-600 hover:bg-purple-500 rounded-full flex items-center justify-center transition shadow-lg shadow-purple-900/30"
                    aria-label={isPlaying ? "Pause song" : "Play song"}
                  >
                    {isPlaying ? (
                      <Pause size={23} fill="white" />
                    ) : (
                      <Play size={23} fill="white" className="ml-1" />
                    )}
                  </button>

                  <div>
                    <p className="font-semibold">
                      {isPlaying ? "Now Playing" : "Take a listen"}
                    </p>
                    <p className="text-gray-500 text-xs mt-1">
                      A little piece of my playlist.
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Closing Message */}
        <section className="text-center py-12 border-t border-[#292530]">

          <Music2 size={30} className="text-purple-500 mx-auto mb-5" />

          <h2 className="text-2xl md:text-3xl font-bold">
            That's a little about me.
          </h2>

          <p className="text-gray-400 mt-4 max-w-lg mx-auto leading-relaxed">
            Thank you for spending some time here.
            Keep discovering, keep creating, and most importantly,
            keep enjoying the music.
          </p>

          <p className="text-purple-400 mt-7 text-sm">
            Made with ♥ by Gopal Tyagi
          </p>

        </section>

      </div>
    </div>
  );
};

export default About;

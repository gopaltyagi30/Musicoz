import React from "react";
import {
  AudioLines,
  Music2,
  Headphones,
  //   Github,
  //   Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0D0C10] border-t border-[#292530] px-6 py-8 mt-10">
      <div className="max-w-7xl mx-auto">
        {/* App Logo */}
        <div className="flex items-center gap-2 mb-4">
          <div className="bg-purple-600 p-2 rounded-lg">
            <AudioLines size={22} className="text-white" />
          </div>
          <h2 className="text-white text-xl font-bold tracking-wide">
            MUSICOZ
          </h2>
        </div>

        <p className="text-gray-400 text-sm max-w-md leading-relaxed">
          Your music, your mood. Discover and enjoy your favourite tracks, all
          in one place.
        </p>

        {/* Bottom Section */}
        <div className="border-t border-[#292530] mt-7 pt-5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            Built with React & Tailwind CSS
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/gopaltyagi30"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <img
                src="/github.png"
                alt="GitHub"
                className="w-9 h-9 object-contain"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/gopal-tyagi-/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors"
              aria-label="LinkedIn"
            >
              <img 
                src="/linkedin.png"
                alt="LinkedIn"
                className="w-9 h-9 object-contain"
              />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#292530] mt-5 pt-5 text-center">
          <p className="text-gray-400 text-sm">
            Made with <span className="text-red-500">♥</span> by
            <span className="text-white font-semibold ml-1">Gopal Tyagi</span>
          </p>

          <p className="text-gray-600 text-xs mt-2">
            © 2026 Musicoz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

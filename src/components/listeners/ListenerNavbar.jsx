import React from "react";
import { NavLink } from "react-router";
import { Bell, UserCircle } from "lucide-react";

const ListenerNavbar = () => {
  return (
    <nav className="w-full bg-[#17151D] border border-[#292530] rounded-xl px-5 py-3 flex items-center justify-between m-2">
      {/* Logo */}
      <div>
        <h1 className="text-white text-lg font-bold tracking-tight">Musicoz</h1>
      </div>

      {/* Navigation Links */}
      <div className="hidden sm:flex items-center gap-6">
        <NavLink
          to={"/main"}
          className={({ isActive }) => 
            `text-sm transition-all duration-200 ${
              isActive
                ? "text-purple-400 font-semibold"
                : "text-gray-400 hover:text-white"
            }`
          }
          end={"/main"}
        >
          Home
        </NavLink>
        <NavLink
          to={"/main/favourites"}
          className={({ isActive }) => 
            `text-sm transition-all duration-200 ${
              isActive
                ? "text-purple-400 font-semibold"
                : "text-gray-400 hover:text-white"
            }`
          }
        >
          Favourites
        </NavLink>
        <NavLink
          to={"/main/about"}
          className={({ isActive }) => 
            `text-sm transition-all duration-200 ${
              isActive
                ? "text-purple-400 font-semibold"
                : "text-gray-400 hover:text-white"
            }`
          }
        >
          About Us
        </NavLink>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5">
        <button className="text-gray-300 hover:text-purple-400 transition">
          <Bell size={19} />
        </button>

        <button className="text-purple-400 hover:text-purple-300 transition">
          <UserCircle size={20} />
        </button>
      </div>
    </nav>
  );
};

export default ListenerNavbar;

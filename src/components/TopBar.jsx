import React from "react";
import { assets } from "../assets/frontend-assets/assets";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";

const TopBar = () => {
  return (
    <div className="h-12 flex items-center justify-between px-6  bg-black">
      {/* Spotify Logo */}
      <div className="flex items-center w-[35%]">
        <svg
          role="img"
          viewBox="0 0 24 24"
          height="32"
          className="text-white "
          style={{ fill: "currentColor" }}
        >
          <title>Spotify</title>
          <path d="M13.427.01C6.805-.253 1.224 4.902.961 11.524.698 18.147 5.853 23.728 12.476 23.99c6.622.263 12.203-4.892 12.466-11.514S20.049.272 13.427.01m5.066 17.579a.717.717 0 0 1-.977.268 14.4 14.4 0 0 0-5.138-1.747 14.4 14.4 0 0 0-5.42.263.717.717 0 0 1-.338-1.392c1.95-.474 3.955-.571 5.958-.29 2.003.282 3.903.928 5.647 1.92a.717.717 0 0 1 .268.978m1.577-3.15a.93.93 0 0 1-1.262.376 17.7 17.7 0 0 0-5.972-1.96 17.7 17.7 0 0 0-6.281.238.93.93 0 0 1-1.11-.71.93.93 0 0 1 .71-1.11 19.5 19.5 0 0 1 6.94-.262 19.5 19.5 0 0 1 6.599 2.165c.452.245.62.81.376 1.263m1.748-3.551a1.147 1.147 0 0 1-1.546.488 21.4 21.4 0 0 0-6.918-2.208 21.4 21.4 0 0 0-7.259.215 1.146 1.146 0 0 1-.456-2.246 23.7 23.7 0 0 1 8.034-.24 23.7 23.7 0 0 1 7.657 2.445c.561.292.78.984.488 1.546" />
        </svg>
      </div>

      <div className="flex items-center gap-2 w-[30%] justify-center">
        {/* Home Button */}
        <div className="p-2 bg-[#191919] rounded-full cursor-pointer hover:scale-105 transition-transform">
          <img
            className="w-5 h-5"
            src={assets.home_icon}
            alt="Home"
            onClick={() => (window.location.href = "/")}
          />
        </div>

        {/* Search Bar */}
        <div className="flex items-center bg-[#191919] rounded-full px-4 py-2 w-full max-w-[400px]">
          <img className="w-4 h-4" src={assets.search_icon} alt="Search" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent text-white placeholder-gray-400 outline-none ml-2"
          />
        </div>
      </div>
      {/* Right Side Controls */}
      <div className="flex items-center gap-4 w-[35%] justify-end">
        <button className="hidden md:flex items-center gap-2 bg-white rounded-full px-4 py-2 hover:scale-105 transition-transform">
          <p className="text-black text-sm font-bold cursor-pointer hidden md:block">
            Explore Premium
          </p>
        </button>

        <button className="hidden md:flex items-center gap-2 px-4 py-2 hover:scale-105 transition-transform">
          <MdOutlineDownloadForOffline className="text-[#B3B3B3] text-xl" />
          <p className="text-[#B3B3B3] text-sm font-bold cursor-pointer hidden md:block">
            Install App
          </p>
        </button>

        <div className="flex items-center gap-2">
          <IoMdNotificationsOutline className="text-[#B3B3B3] text-xl cursor-pointer" />
        </div>

        <div className="flex items-center gap-2"></div>
      </div>
    </div>
  );
};

export default TopBar;

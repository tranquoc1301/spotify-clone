import React, { useState } from "react";
import { assets, songsData } from "../assets/frontend-assets/assets";

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="h-16 bg-black flex justify-between items-center text-white px-6">
      {/* Left: Song info */}
      <div className="flex items-center gap-4">
        <img className="w-10 h-10 rounded" src={songsData[0].image} alt="" />
        <div className="flex flex-col">
          <p className="text-sm font-medium">
            {songsData[0].name || "Song One"}
          </p>
          <p className="text-xs text-gray-400">
            {songsData[0].artist || "Artist One"}
          </p>
        </div>
        <img
          className="w-3.5 cursor-pointer opacity-70 hover:opacity-100 ml-4"
          src={assets.like_icon}
          alt="Like"
        />
      </div>

      {/* Center: Controls and progress */}
      <div className="flex-1 max-w-2xl mx-auto">
        <div className="flex justify-center items-center gap-6 mb-2">
          <img
            className="w-3.5 cursor-pointer opacity-70 hover:opacity-100"
            src={assets.shuffle_icon}
            alt=""
          />
          <img
            className="w-3.5 cursor-pointer opacity-70 hover:opacity-100"
            src={assets.prev_icon}
            alt=""
          />
          <div
            className="relative flex items-center justify-center w-8 h-8 bg-white rounded-full cursor-pointer hover:scale-105 transition-transform"
            onClick={togglePlayPause}
          >
            <img
              className="w-3.5"
              src={isPlaying ? assets.pause_icon : assets.play_icon}
              alt={isPlaying ? "Pause" : "Play"}
              style={{ filter: "brightness(0)" }}
            />
          </div>
          <img
            className="w-3.5 cursor-pointer opacity-70 hover:opacity-100"
            src={assets.next_icon}
            alt=""
          />
          <img
            className="w-3.5 cursor-pointer opacity-70 hover:opacity-100"
            src={assets.loop_icon}
            alt=""
          />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-400">1:00</span>
          <div className="flex-1 h-1 bg-gray-700 rounded-full cursor-pointer group">
            <div className="h-1 w-1/4 bg-white group-hover:bg-green-500 rounded-full relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100"></div>
            </div>
          </div>
          <span className="text-xs text-gray-400">3:45</span>
        </div>
      </div>

      {/* Right: Volume (hidden on small screens) */}
      <div className="hidden lg:flex items-center gap-3 opacity-75">
        <img
          className="w-3.5 cursor-pointer hover:opacity-100"
          src={assets.mic_icon}
          alt=""
        />
        <img
          className="w-3.5 cursor-pointer hover:opacity-100"
          src={assets.queue_icon}
          alt=""
        />
        <img
          className="w-3.5 cursor-pointer hover:opacity-100"
          src={assets.speaker_icon}
          alt=""
        />
        <div className="flex items-center gap-1">
          <img
            className="w-3.5 cursor-pointer hover:opacity-100"
            src={assets.volume_icon}
            alt=""
          />
          <div className="w-20 bg-gray-700 h-1 rounded-full group cursor-pointer">
            <div className="w-2/3 bg-white h-1 rounded-full group-hover:bg-green-500 relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100"></div>
            </div>
          </div>
        </div>
        <img
          className="w-3.5 cursor-pointer hover:opacity-100"
          src={assets.mini_player_icon}
          alt=""
        />
        <img
          className="w-3.5 cursor-pointer hover:opacity-100"
          src={assets.zoom_icon}
          alt=""
        />
      </div>
    </div>
  );
};

export default Player;

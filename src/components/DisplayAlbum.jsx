import React, { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import {
  albumsData,
  assets,
  songsData,
} from "../assets/frontend-assets/assets";

const DisplayAlbum = () => {
  const { id } = useParams();
  const [isPlaying, setIsPlaying] = useState(false);
  const [hoveredSong, setHoveredSong] = useState(null);
  const [currentPlayingSong, setCurrentPlayingSong] = useState(null);

  // Get album data with fallback for missing albums
  const albumData = useMemo(() => {
    return (
      albumsData[id] || {
        name: "Unknown Album",
        desc: "No description available",
        image: "",
        bgColor: "#121212",
      }
    );
  }, [id]);

  // Toggle play/pause for the whole album
  const togglePlayPause = () => {
    if (currentPlayingSong === null && !isPlaying) {
      // If nothing is playing, start playing the first song
      setCurrentPlayingSong(0);
      setIsPlaying(true);
    } else {
      // Toggle the current playing state
      setIsPlaying(!isPlaying);
    }
  };

  // Handle playing a specific song
  const playSong = (index) => {
    if (currentPlayingSong === index && isPlaying) {
      // If this song is already playing, pause it
      setIsPlaying(false);
    } else if (currentPlayingSong === index && !isPlaying) {
      // If this song is paused, resume it
      setIsPlaying(true);
    } else {
      // Start playing this song
      setCurrentPlayingSong(index);
      setIsPlaying(true);
    }
  };

  const formatDuration = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours} hr ${mins} min` : `${mins} min`;
  };

  // Precomputed values
  const totalSongs = songsData.length;
  const estimatedDuration = formatDuration(165);
  const savesCount = (6202).toLocaleString();

  // Dynamic background style
  const bgStyle = {
    background: `linear-gradient(180deg, ${albumData.bgColor} 0%, rgba(18,18,18,1) 60%)`,
  };

  return (
    <div className="p-6 text-white min-h-screen" style={bgStyle}>
      <div className="mx-auto max-w-7xl">
        {/* Album Header */}
        <div className="flex flex-col md:flex-row md:items-end gap-8 mb-8">
          <div className="flex-shrink-0">
            <img
              src={albumData.image}
              alt={albumData.name}
              className="w-48 md:w-64 shadow-2xl rounded"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col">
            <p className="text-gray-300 text-sm font-medium uppercase tracking-wider mb-1">
              Playlist
            </p>
            <h2 className="text-4xl md:text-6xl font-bold mb-3">
              {albumData.name}
            </h2>
            <h4 className="text-gray-300 mb-2 text-lg">{albumData.desc}</h4>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <img
                className="w-5 h-5"
                src={assets.spotify_logo}
                alt="Spotify"
                width="20"
                height="20"
              />
              <span className="font-bold text-white">Spotify</span>
              <span>•</span>
              <span>{savesCount} saves</span>
              <span>•</span>
              <span>
                {totalSongs} songs, about {estimatedDuration}
              </span>
            </div>
          </div>
        </div>

        {/* Playback Controls */}
        <div className="flex gap-3 items-center mb-8">
          <button
            className="relative flex items-center justify-center w-14 h-14 bg-green-500 rounded-full cursor-pointer hover:scale-105 transition-transform"
            onClick={togglePlayPause}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            <img
              className="w-6 h-6"
              src={isPlaying ? assets.pause_icon : assets.play_icon}
              alt=""
              style={{ filter: "brightness(0)" }}
              width="24"
              height="24"
              aria-hidden="true"
            />
          </button>
          <button
            className="bg-black border border-gray-700 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:bg-gray-800 transition duration-200"
            aria-label="Follow playlist"
          >
            Follow
          </button>
        </div>

        {/* Song List Header */}
        <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-2 pl-2 text-[#a7a7a7] text-sm">
          <div className="flex items-center">
            <span className="mr-4 font-bold">#</span>
            <span className="font-bold">Title</span>
          </div>
          <div>
            <span className="font-bold">Album</span>
          </div>
          <div className="hidden sm:block">
            <span className="font-bold">Date Added</span>
          </div>
          <div className="flex justify-center">
            <img className="w-4 h-4" src={assets.clock_icon} alt="Duration" />
          </div>
        </div>

        <hr className="border-gray-700 mb-2" />

        {/* Song List Items */}
        {songsData.map((song, index) => (
          <div
            key={index}
            className={`grid grid-cols-3 sm:grid-cols-4 py-2 px-2 items-center text-[#a7a7a7] text-sm hover:bg-[#444] rounded cursor-pointer transition-colors ${
              currentPlayingSong === index ? "bg-[#333]" : ""
            }`}
            onMouseEnter={() => setHoveredSong(index)}
            onMouseLeave={() => setHoveredSong(null)}
            onClick={() => playSong(index)}
          >
            <div className="flex items-center">
              <div className="mr-4 w-4 flex justify-center items-center">
                {hoveredSong === index || currentPlayingSong === index ? (
                  <img
                    src={
                      currentPlayingSong === index && isPlaying
                        ? assets.pause_icon
                        : assets.play_icon
                    }
                    alt={
                      currentPlayingSong === index && isPlaying
                        ? "Pause"
                        : "Play"
                    }
                    className="w-4 h-4"
                    style={{ filter: "brightness(0) invert(1)" }}
                    onClick={(e) => {
                      e.stopPropagation();
                      playSong(index);
                    }}
                  />
                ) : (
                  <span className="text-[16px]">{index + 1}</span>
                )}
              </div>
              <img
                className="w-10 h-10 mr-3 rounded"
                src={song.image}
                alt=""
                loading="lazy"
              />
              <div className="flex flex-col">
                <span
                  className={`text-sm font-semibold ${
                    currentPlayingSong === index
                      ? "text-[#1db954]"
                      : "text-white"
                  }`}
                >
                  {song.name}
                </span>
                <span className="text-sm">{song.artist}</span>
              </div>
            </div>
            <div className="truncate">{albumData.name}</div>
            <div className="hidden sm:block">5 days ago</div>
            <div className="text-center">{song.duration}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayAlbum;

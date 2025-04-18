import React, { memo } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import {
  albumsData,
  assets,
  songsData,
} from "../assets/frontend-assets/assets";

const PlayButton = memo(({ large = false }) => (
  <button
    className={`flex items-center justify-center ${
      large ? "w-14 h-14" : "p-3"
    } bg-green-500 rounded-full shadow-xl hover:scale-105 transition-transform`}
    onClick={(e) => e.stopPropagation()}
  >
    <img
      className={large ? "w-6 h-6" : "w-5 h-5"}
      src={assets.play_icon}
      alt="Play"
      style={{ filter: "brightness(0)" }}
      width={large ? "22" : "20"}
      height={large ? "22" : "20"}
      aria-hidden="true"
    />
  </button>
));

const MediaCard = memo(({ item, type }) => {
  const CardWrapper = ({ children }) => {
    return type === "discover" ? (
      <Link to={`/album/${item.id}`} className="block">
        {children}
      </Link>
    ) : (
      <div>{children}</div>
    );
  };

  return (
    <CardWrapper>
      <div className="p-4 rounded-lg hover:bg-[#282828] transition-all duration-300 cursor-pointer">
        <div className="relative">
          <img
            src={item.image}
            alt={item.name}
            className="w-full aspect-square object-cover rounded-md shadow-lg mb-4"
          />
          <div className="absolute bottom-2 right-2 opacity-0 hover:opacity-100 transition-opacity">
            <PlayButton large={type === "discover"} />
          </div>
        </div>
        <h3 className="font-bold text-base mb-1 truncate">{item.name}</h3>
        <p className="text-gray-400 text-sm truncate">
          {type === "recently" ? item.artist : item.desc}
        </p>
      </div>
    </CardWrapper>
  );
});

const MediaSection = memo(
  ({ title, items, type, columns = "xl:grid-cols-6" }) => (
    <div className="flex flex-col gap-2 mt-12">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div
        className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ${columns}`}
      >
        {items.map((item) => (
          <MediaCard key={item.id} item={item} type={type} />
        ))}
      </div>
    </div>
  )
);

const DisplayHome = () => {
  const recentlyPlayedSongs = songsData.slice(0, 6);
  const recommendedSongs = songsData.slice(2, 8);

  return (
    <div className="px-6 pt-4 ml-4 pb-24">
      <NavBar />

      {/* Albums Section - uses a different column count */}
      <div className="flex flex-col gap-4 mt-8">
        <h1 className="text-2xl font-bold">Discover picks for you</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {albumsData.map((album) => (
            <MediaCard key={album.id} item={album} type="discover" />
          ))}
        </div>
      </div>

      {/* Recently Played Section */}
      <MediaSection
        title="Recently played"
        items={recentlyPlayedSongs}
        type="recently"
      />

      {/* Made For You Section */}
      <MediaSection
        title="Made for you"
        items={recommendedSongs}
        type="recommended"
      />
    </div>
  );
};

export default DisplayHome;

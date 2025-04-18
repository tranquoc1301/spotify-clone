import React, { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import { albumsData } from "../assets/frontend-assets/assets";

const Display = () => {
  const displayRef = useRef();
  const location = useLocation();
  const isAlbumPage = location.pathname.includes("album");
  const albumId = isAlbumPage ? location.pathname.slice(-1) : "";
  const bgColor = albumsData[Number(albumId)]?.bgColor || "#121212";

  useEffect(() => {
    if (isAlbumPage) {
      displayRef.current.style.background = `linear-gradient(to bottom, ${bgColor}, #121212)`;
    } else {
      displayRef.current.style.background = "#121212";
    }
  }, [isAlbumPage, bgColor]);

  return (
    <div
      ref={displayRef}
      className="flex-1 mx-3 mt-0 rounded text-white overflow-auto"
    >
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
      </Routes>
    </div>
  );
};

export default Display;

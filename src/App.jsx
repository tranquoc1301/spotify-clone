import React from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";
import TopBar from "./components/TopBar";

function App() {
  return (
    <div className="h-screen flex flex-col bg-black">
      {/* Top Bar */}
      <div className="h-14 py-1">
        <TopBar />
      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <Display />
      </div>

      {/* Player */}
      <div className="h-18 py-2">
        <Player />
      </div>
    </div>
  );
}

export default App;

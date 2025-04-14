import React, { useState } from "react";

const NavBar = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Music", "Podcast"];

  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex gap-1.5">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`h-8 px-4 text-xs rounded-2xl cursor-pointer transition-colors ${
                activeTab === tab
                  ? "bg-white text-black" // Black text on white background for active
                  : "bg-[#ffffff1a] text-white hover:bg-[#ffffff0d]" // White text for inactive
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavBar;
import React, { useState } from "react";
import { assets } from "../assets/frontend-assets/assets";

const Sidebar = () => {
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  const promoCards = [
    {
      title: "Create your first playlist",
      description: "It's easy, we'll help you",
      buttonText: "Create playlist",
    },
    {
      title: "Let's find some podcasts to follow",
      description: "We'll keep you updated on new episodes",
      buttonText: "Browse podcasts",
    },
  ];

  const languages = [
    "English",
    "Vietnamese",
    "Spanish",
    "French",
    "German",
    "Italian",
    "Portuguese",
    "Japanese",
    "Korean",
    "Chinese",
  ];

  const legalLinks = [
    "Legal",
    "Privacy Center",
    "Privacy Policy",
    "Cookies",
    "About Ads",
    "Accessibility",
    "Notice at Collection",
  ];

  const toggleLanguageMenu = () => {
    setShowLanguageMenu(!showLanguageMenu);
  };

  return (
    <div className="w-[20%] min-w-64 ml-3  mr-0 mt-0 flex flex-col gap-3 text-white ">
      {/* Library Section */}
      <div className="bg-[#121212] rounded-lg flex-1 shadow-md flex flex-col">
        {/* Library Header */}
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={assets.stack_icon} alt="" className="w-5 h-5" />
            <p className="font-medium text-sm">Your Library</p>
          </div>
          <div className="flex items-center gap-4">
            <img
              className="w-4 h-4 opacity-70 hover:opacity-100 cursor-pointer"
              src={assets.plus_icon}
              alt="Add"
            />
            <img
              className="w-4 h-4 opacity-70 hover:opacity-100 cursor-pointer"
              src={assets.arrow_icon}
              alt="Arrow"
            />
          </div>
        </div>

        {/* Promo Cards */}
        <div className="p-3 overflow-auto flex-1 space-y-3">
          {promoCards.map((card, index) => (
            <div key={index} className="bg-[#191919] rounded-lg p-4">
              <h2 className="font-semibold text-sm">{card.title}</h2>
              <p className="font-light text-xs text-gray-300 mt-1">
                {card.description}
              </p>
              <button className="mt-3 px-4 py-1.5 bg-white text-black text-xs rounded-full font-medium cursor-pointer hover:scale-105 transition-transform">
                {card.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Footer with Language and Legal Links */}
        <div className="mt-auto p-4 pt-2 text-xs text-gray-400">
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={toggleLanguageMenu}
              className="flex items-center gap-1 py-2 px-3 border border-gray-700 rounded-full text-white font-bold hover:border-white transition-colors cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              <span>English</span>
            </button>

            {/* Language Dropdown Menu */}
            {showLanguageMenu && (
              <div className="absolute bottom-full mb-2 left-0 bg-[#282828] rounded-md shadow-lg w-48 max-h-60 overflow-y-auto z-50">
                {languages.map((language, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 hover:bg-[#3E3E3E] cursor-pointer"
                  >
                    {language}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Legal Links */}
          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-gray-400">
            {legalLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="hover:underline hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

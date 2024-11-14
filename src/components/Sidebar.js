import React from "react";
import tomatoIcon from '../assets/t.png';

// List of menu items
const menuItems = [
  "Tomato Disease Analysis",
  "Tomato Price Prediction",
  "Tomato Schedule Stage wise",
  "Our Products (Syngenta)",
  "Weather Forecast",
  "Learning Resources",
  "FAQs",
  "Contact with Experts",
  "Profile",
];

const Sidebar = () => {
  return (
    <div className="w-64 bg-green-800 text-white min-h-screen p-4">
      {/* Logo and Title */}
      <div className="flex items-center mb-6">
        <img src={tomatoIcon} alt="Tomato Icon" className="h-8 w-8 mr-2" />
        <h2 className="text-2xl font-bold">AgriSmart</h2>
      </div>

      {/* Menu Items */}
      <ul>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="mb-2 p-2 hover:bg-green-600 hover:scale-105 transition-all duration-300 cursor-pointer rounded flex items-center"
          >
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

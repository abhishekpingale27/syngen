import React from "react";
import tomatoIcon from "../assets/t.png";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { name: "Tomato Disease Analysis", path: "/prediction" },
  { name: "Tomato Price Prediction", path: "http://127.0.0.1:8000/prediction/predict/" },
  { name: "Tomato Schedule Stage wise", path: "/TomatoSchedulePage" },
  { name: "Our Products (Syngenta)", path: "/products" },
  { name: "Weather Forecast", path: "/WeatherForecastPage" },
  { name: "Learning Resources", path: "#" },
  { name: "FAQs", path: "#" },
  { name: "Contact with Experts", path: "#" },
  { name: "Profile", path: "#" },
];

const Sidebar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    // Check if the path is an external link
    if (path.startsWith("http")) {
      window.location.href = path; // Redirect to external URL
    } else {
      navigate(path); // Navigate internally within React app
    }
  };

  return (
    <div className="w-64 bg-green-800 text-white min-h-screen p-4">
      <div className="flex items-center mb-6">
        <img src={tomatoIcon} alt="Tomato Icon" className="h-8 w-8 mr-2" />
        <h2 className="text-2xl font-bold">AgriSmart</h2>
      </div>
      <ul>
        {menuItems.map((item, index) => (
          <li
            key={index}
            onClick={() => handleNavigation(item.path)}
            className="mb-2 p-2 hover:bg-green-600 hover:scale-105 transition-all duration-300 cursor-pointer rounded flex items-center"
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

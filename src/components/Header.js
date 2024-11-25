import React from 'react';
import { FaFilter, FaUserCircle } from 'react-icons/fa';


const Header = () => {
  return (
    <header className="flex items-center justify-between bg-green-500 text-white p-4">
      <div className="flex items-center space-x-2">
        <h1 className="text-xl font-bold">Farmer DashBoard </h1>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-300"
        />
        <button className="bg-white text-green-500 rounded-lg p-2 hover:bg-green-600 hover:text-white">
          <FaFilter />
        </button>
        <FaUserCircle size={24} className="cursor-pointer hover:text-gray-300" />
      </div>
    </header>
  );
};

export default Header;

import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow bg-white">
      <div className="text-lg font-bold">FFmpeg Portfolio</div>
      <div className="space-x-6 text-sm font-medium text-gray-600">
        <a href="#overview" className="hover:text-indigo-600">Overview</a>
        <a href="#panoramic" className="hover:text-indigo-600">Panoramic</a>
        <a href="#video" className="hover:text-indigo-600">Video Creation</a>
        <a href="#complex" className="hover:text-indigo-600">Complex Work</a>
      </div>
      <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600">
        Contact
      </button>
    </nav>
  );
};

export default Navbar;

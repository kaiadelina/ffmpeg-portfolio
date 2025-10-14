import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">About</h4>
          <p className="text-sm leading-relaxed">
            A platform for transforming panoramic and regular images into smooth,
            high-quality video presentations with advanced processing features.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">Features</a></li>
            <li><a href="#" className="hover:text-white transition">Pricing</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-white transition">🌐</a>
            <a href="#" className="hover:text-white transition">🐦</a>
            <a href="#" className="hover:text-white transition">📺</a>
            <a href="#" className="hover:text-white transition">💼</a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Video Processing Platform. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

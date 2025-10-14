import React from "react";

const links = [
  { label: "Overview", href: "#overview" },
  { label: "Panoramic", href: "#panoramic" },
  { label: "Video Creation", href: "#video" },
  { label: "Complex Work", href: "#complex" },
];

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow bg-white sticky top-0 z-50">
      {/* Logo */}
      <div className="text-lg font-bold">FFmpeg Portfolio</div>

      {/* Links */}
      <div className="space-x-6 text-sm font-medium text-gray-600">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hover:text-indigo-600 transition"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* CTA */}
      <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition">
        Contact
      </button>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-center items-center">
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-gray-700 font-medium">
          <li><a href="/" className="hover:text-pink-500 transition-colors">Home</a></li>
          <li><a href="/aboutme" className="hover:text-pink-500 transition-colors">About Me</a></li>
          <li><a href="/projects" className="hover:text-pink-500 transition-colors">Projects</a></li>
          <li><a href="/achievement" className="hover:text-pink-500 transition-colors">Achievements</a></li>
          <li><a href="/blogs" className="hover:text-pink-500 transition-colors">Blogs</a></li>
          <li><a href="/contact" className="hover:text-pink-500 transition-colors">Contact</a></li>
        </ul> 

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden absolute right-5 text-gray-700 hover:text-pink-500 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col items-center py-4 space-y-4 text-gray-700 font-medium">
            <li><a href="/" className="hover:text-pink-500" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="/aboutme" className="hover:text-pink-500" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="/projects" className="hover:text-pink-500" onClick={() => setIsOpen(false)}>Projects</a></li>
            <li><a href="/blogs" className="hover:text-pink-500" onClick={() => setIsOpen(false)}>Blogs</a></li>
            <li><a href="/contact" className="hover:text-pink-500" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

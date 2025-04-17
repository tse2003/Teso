"use client";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="/logo.png" alt="Logo" className="h-16 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition font-medium">ЭХЛЭЛ</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition font-medium">ШИЙДЭЛ</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition font-medium">БҮТЭЭГДЭХҮҮН</a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden mt-2 space-y-2">
            <a href="#" className="block text-gray-700 hover:text-blue-600 transition font-medium">ЭХЛЭЛ</a>
            <a href="#" className="block text-gray-700 hover:text-blue-600 transition font-medium">ШИЙДЭЛ</a>
            <a href="#" className="block text-gray-700 hover:text-blue-600 transition font-medium">БҮТЭЭГДЭХҮҮН</a>
          </div>
        )}
      </div>
    </header>
  );
}

"use client";

import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="md:text-2xl font-bold text-xl">
              Media Numbers Productions
            </a>
          </div>

          {/* Menú para pantallas grandes */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="hover:text-fuchsia-500 transition-colors"
            >
              Home
            </a>
            <a
              href="#services"
              className="hover:text-fuchsia-500 transition-colors"
            >
              Services
            </a>
            <a
              href="#projects"
              className="hover:text-fuchsia-500 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-fuchsia-500 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Botón del menú móvil */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-fuchsia-500 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menú desplegable móvil */}
      {isOpen && (
        <div className="md:hidden bg-black">
          <div className="space-y-4 px-4 py-4">
            <a
              href="#home"
              className="block hover:text-fuchsia-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#services"
              className="block hover:text-fuchsia-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a
              href="#projects"
              className="block hover:text-fuchsia-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block hover:text-fuchsia-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

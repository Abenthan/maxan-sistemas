import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Servicios", path: "/servicios" },
    { name: "Tienda", path: "/tienda" },
    { name: "Blog", path: "/blog" },
    { name: "Contacto", path: "/contacto" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* LOGO */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="/images/logo-navbar.svg"
            alt="Maxan Sistemas"
            className="h-10 w-auto"
          />
        </Link>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `font-medium transition-colors ${
                  isActive
                    ? "text-[#004AAD]"
                    : "text-gray-700 hover:text-[#004AAD]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* BOTÓN LOGIN */}
        <div className="hidden md:block">
          <Link
            to="/login"
            className="px-4 py-2 bg-[#004AAD] hover:bg-[#003680] text-white rounded-full font-semibold transition"
          >
            Ingresar
          </Link>
        </div>

        {/* MENU MÓVIL */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MENÚ MOBILE */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-md py-4 px-6 space-y-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 font-medium hover:text-[#004AAD] transition"
            >
              {link.name}
            </NavLink>
          ))}
          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="block w-full text-center px-4 py-2 bg-[#004AAD] hover:bg-[#003680] text-white rounded-full font-semibold transition"
          >
            Ingresar
          </Link>
        </div>
      )}
    </nav>
  );
}

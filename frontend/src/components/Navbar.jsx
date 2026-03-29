import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Servicios", href: "#servicios" },
  { name: "¿Por qué Maxan?", href: "#por-que-maxan" },
  { name: "Portafolio", href: "#portafolio" },
  { name: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAnchor = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo → vuelve al top */}
        <a href="#" onClick={(e) => handleAnchor(e, "body")} className="flex items-center">
          <img src="/images/logo-navbar.svg" alt="Maxan Sistemas" className="h-9 w-auto" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleAnchor(e, link.href)}
              className={`text-sm font-medium transition-colors ${
                isScrolled ? "text-gray-600 hover:text-[#0c2c59]" : "text-white/90 hover:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/573128919875"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-[#0c2c59] hover:bg-[#2563EB] text-white text-sm font-semibold rounded-full transition-colors"
          >
            Conversemos
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden ${isScrolled ? "text-gray-800" : "text-white"}`}
          aria-label="Menú"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md py-4 px-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleAnchor(e, link.href)}
              className="block text-gray-700 font-medium hover:text-[#0c2c59] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/573128919875"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="block w-full text-center px-4 py-2 bg-[#0c2c59] text-white rounded-full font-semibold text-sm"
          >
            Conversemos
          </a>
        </div>
      )}
    </nav>
  );
}

import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { WA_LINK } from "../lib/wa";

const navLinks = [
  { name: "Servicios", to: "/servicios" },
  { name: "¿Por qué Maxan?", to: "/#por-que-maxan" },
  { name: "Portafolio", to: "/#portafolio" },
  { name: "Tienda", href: "https://tienda.maxansistemas.com" },
  { name: "Contacto", to: "/contacto" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const toggleRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // El menú móvil se cierra al cambiar de ruta.
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  // Escape cierra el menú y devuelve el foco al botón que lo abrió.
  useEffect(() => {
    if (!menuOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  // Al abrir el menú, el foco entra al primer enlace.
  useEffect(() => {
    if (menuOpen) {
      menuRef.current?.querySelector("a")?.focus();
    }
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const isCurrent = (to) => to === location.pathname;

  return (
    <header className="sticky top-0 z-50 w-full">
      <nav
        aria-label="Principal"
        className={`bg-white/95 backdrop-blur border-b transition-shadow ${
          isScrolled ? "border-maxan-border shadow-maxan-sm" : "border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-6 px-6 h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img
              src="/images/logo-maxan.png"
              alt="Maxan Sistemas"
              width="500"
              height="132"
              className="h-9 w-auto"
            />
          </Link>

          {/* Escritorio */}
          <div className="hidden md:flex items-center gap-7">
            <ul className="flex items-center gap-7">
              {navLinks.map((link) =>
                link.href ? (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-maxan-text-secondary hover:text-maxan-primary transition-colors"
                    >
                      {link.name}
                      <span className="sr-only"> (se abre en una pestaña nueva)</span>
                    </a>
                  </li>
                ) : (
                  <li key={link.name}>
                    <Link
                      to={link.to}
                      aria-current={isCurrent(link.to) ? "page" : undefined}
                      className="text-sm font-medium text-maxan-text-secondary hover:text-maxan-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                )
              )}
            </ul>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary px-5 py-2 text-sm"
            >
              Conversemos
            </a>
          </div>

          {/* Móvil */}
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="menu-movil"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-maxan-md text-maxan-navy hover:bg-maxan-surface-secondary transition-colors"
          >
            {menuOpen ? (
              <X size={26} aria-hidden="true" />
            ) : (
              <Menu size={26} aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Menú móvil */}
        {menuOpen && (
          <div
            id="menu-movil"
            ref={menuRef}
            className="md:hidden bg-white border-t border-maxan-border"
          >
            <ul className="px-6 py-4 space-y-1">
              {navLinks.map((link) =>
                link.href ? (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMenu}
                      className="block py-3 text-base font-medium text-maxan-text-secondary min-h-11"
                    >
                      {link.name}
                      <span className="sr-only"> (se abre en una pestaña nueva)</span>
                    </a>
                  </li>
                ) : (
                  <li key={link.name}>
                    <Link
                      to={link.to}
                      onClick={closeMenu}
                      className="block py-3 text-base font-medium text-maxan-text-secondary min-h-11"
                    >
                      {link.name}
                    </Link>
                  </li>
                )
              )}
            </ul>
            <div className="px-6 pb-5">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="btn btn-primary w-full"
              >
                Conversemos por WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

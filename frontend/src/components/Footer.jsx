import { Link } from "react-router-dom";

const WA_LINK = "https://wa.me/573128919875";

const Footer = () => {
  return (
    <footer className="bg-[#0c2c59] text-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Logo + tagline */}
          <div className="md:col-span-1">
            <img
              src="/images/logo-navbar.svg"
              alt="Maxan Sistemas"
              className="h-8 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-white/50 text-sm leading-relaxed">
              Tecnología que trabaja para tu negocio, no al revés.
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-white/60">
              {[
                "Desarrollo de Software",
                "Automatización y Chatbots",
                "Arquitectura en la Nube",
                "Soporte IT Mensual",
                "Redes y Conectividad",
                "Sistemas CCTV",
              ].map((s) => (
                <li key={s}>
                  <Link to="/servicios" className="hover:text-white transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: +57 312 891 9875
                </a>
              </li>
              <li>
                <a href="mailto:hola@maxansistemas.com" className="hover:text-white transition-colors">
                  hola@maxansistemas.com
                </a>
              </li>
              <li className="pt-2 flex gap-3">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="text-white/40 hover:text-white transition-colors text-xs"
                >
                  Instagram
                </a>
                <span className="text-white/20">·</span>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="text-white/40 hover:text-white transition-colors text-xs"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/30 text-xs">
            © 2026 Maxan Sistemas. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

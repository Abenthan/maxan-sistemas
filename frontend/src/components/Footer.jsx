import { Link } from "react-router-dom";
import { WA_DISPLAY, WA_LINK, MAIL, MAIL_LINK } from "../lib/wa";

const servicios = [
  { name: "Desarrollo de software a la medida", to: "/software-a-la-medida" },
  { name: "Servicios de tecnología", to: "/servicios" },
  { name: "Automatización y chatbots", to: "/servicios#automatizacion" },
  { name: "Arquitectura en la nube", to: "/servicios#nube" },
  { name: "Soporte IT mensual", to: "/servicios#soporte" },
];

const ecosistema = [
  { name: "Tienda Maxan", href: "https://tienda.maxansistemas.com" },
  { name: "ERP Maxan", href: "https://erp.maxansistemas.com" },
  { name: "Agendar una reunión", to: "/agenda" },
  { name: "Contacto", to: "/contacto" },
];

const linkBase =
  "inline-flex items-center min-h-11 py-2 text-sm text-white/70 hover:text-white transition-colors";

function ExternalItem({ href, children }) {
  return (
    <li>
      <a href={href} target="_blank" rel="noopener noreferrer" className={linkBase}>
        {children}
        <span className="sr-only"> (se abre en una pestaña nueva)</span>
      </a>
    </li>
  );
}

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-maxan-navy text-white">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Marca */}
          <div>
            <img
              src="/images/logo-maxan-blanco.svg"
              alt="Maxan Sistemas"
              width="500"
              height="132"
              className="h-8 w-auto mb-4"
            />
            <p className="text-white/70 text-sm leading-relaxed">
              Tecnología que trabaja para tu negocio, no al revés.
            </p>
          </div>

          {/* Servicios */}
          <nav aria-label="Servicios">
            <h2 className="text-sm font-semibold text-white mb-4">Servicios</h2>
            <ul className="space-y-1">
              {servicios.map((s) => (
                <li key={s.name}>
                  <Link to={s.to} className={linkBase}>
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Ecosistema */}
          <nav aria-label="Ecosistema Maxan">
            <h2 className="text-sm font-semibold text-white mb-4">Ecosistema</h2>
            <ul className="space-y-1">
              {ecosistema.map((item) =>
                item.href ? (
                  <ExternalItem key={item.name} href={item.href}>
                    {item.name}
                  </ExternalItem>
                ) : (
                  <li key={item.name}>
                    <Link to={item.to} className={linkBase}>
                      {item.name}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>

          {/* Contacto */}
          <div>
            <h2 className="text-sm font-semibold text-white mb-4">Contacto</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkBase}
                >
                  WhatsApp: {WA_DISPLAY}
                </a>
              </li>
              <li>
                <a href={MAIL_LINK} className={linkBase}>
                  {MAIL}
                </a>
              </li>
              <li className="pt-2 text-white/70 text-sm leading-relaxed">
                Respondemos en menos de 24 horas en días hábiles.
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/15 pt-8 text-center">
          <p className="text-white/70 text-xs">
            © {year} Maxan Sistemas. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

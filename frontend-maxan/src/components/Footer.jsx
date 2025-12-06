import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Maxan Sistemas</h3>
            <p className="text-gray-300 mb-4">
              Equipos al mejor precio, servicios con la más alta calidad.
            </p>
            <p className="text-gray-300">
              Medellín, Colombia
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-secondary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-gray-300 hover:text-secondary transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/tienda" className="text-gray-300 hover:text-secondary transition-colors">
                  Tienda
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-secondary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-300 hover:text-secondary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-2 text-gray-300">
              <p>📧 info@maxansistemas.com</p>
              <p>📱 +57 300 123 4567</p>
              <p>🏢 Calle 123 #45-67</p>
              <p>Medellín, Colombia</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Maxan Sistemas. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
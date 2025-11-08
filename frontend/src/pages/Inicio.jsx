import { Link } from 'react-router-dom';

const Inicio = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Maxan Sistemas
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Equipos al mejor precio, servicios con la más alta calidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/servicios"
                className="bg-secondary hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Nuestros Servicios
              </Link>
              <Link
                to="/tienda"
                className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Ver Productos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ofrecemos soluciones integrales en tecnología para empresas de todos los tamaños.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🖥️</div>
              <h3 className="text-xl font-semibold mb-2">Servidores</h3>
              <p className="text-gray-600">
                Infraestructura robusta y escalable para tu negocio.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">📹</div>
              <h3 className="text-xl font-semibold mb-2">Cámaras de Seguridad</h3>
              <p className="text-gray-600">
                Sistemas de videovigilancia avanzados y confiables.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold mb-2">Mantenimiento</h3>
              <p className="text-gray-600">
                Soporte técnico especializado y mantenimiento preventivo.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              to="/servicios"
              className="bg-primary hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-lg transition-colors"
            >
              Ver Todos los Servicios
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Necesitas una solución tecnológica?
          </h2>
          <p className="text-white text-lg mb-8">
            Contáctanos hoy mismo y descubre cómo podemos ayudarte.
          </p>
          <Link
            to="/contacto"
            className="bg-white text-secondary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Contactar Ahora
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Inicio;
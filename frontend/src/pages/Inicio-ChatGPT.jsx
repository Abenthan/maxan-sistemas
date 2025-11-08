import { Link } from "react-router-dom";
import { Server, Camera, Wrench, Headphones, Shield, DollarSign } from "lucide-react";

const Inicio = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-blue-900 to-blue-800 text-white py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-lg">
            Maxan Sistemas
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-10">
            Equipos al mejor precio, servicios con la más alta calidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/servicios"
              className="bg-secondary hover:bg-green-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-all"
            >
              Nuestros Servicios
            </Link>
            <Link
              to="/tienda"
              className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-xl shadow-lg transition-all"
            >
              Ver Productos
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Soluciones tecnológicas completas para empresas modernas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: <Server className="w-10 h-10 text-primary" />,
                title: "Servidores",
                desc: "Infraestructura robusta y escalable para tu negocio.",
              },
              {
                icon: <Camera className="w-10 h-10 text-primary" />,
                title: "Cámaras de Seguridad",
                desc: "Videovigilancia avanzada y monitoreo confiable 24/7.",
              },
              {
                icon: <Wrench className="w-10 h-10 text-primary" />,
                title: "Mantenimiento",
                desc: "Soporte técnico especializado y mantenimiento preventivo.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow text-center"
              >
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/servicios"
              className="bg-primary hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Ver Todos los Servicios
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="bg-white py-20 border-t">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">¿Por qué elegir Maxan Sistemas?</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <Headphones className="w-10 h-10 text-secondary mx-auto mb-4" />,
                title: "Soporte Cercano",
                desc: "Atención personalizada y rápida para cada cliente.",
              },
              {
                icon: <Shield className="w-10 h-10 text-secondary mx-auto mb-4" />,
                title: "Seguridad y Confiabilidad",
                desc: "Protegemos tus sistemas y garantizamos continuidad.",
              },
              {
                icon: <DollarSign className="w-10 h-10 text-secondary mx-auto mb-4" />,
                title: "Precios Justos",
                desc: "Calidad empresarial sin costos exagerados.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl p-8 shadow hover:shadow-lg transition"
              >
                {item.icon}
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-20">
        <div className="max-w-7xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Necesitas una solución tecnológica?
          </h2>
          <p className="text-lg mb-8">
            Contáctanos hoy mismo y descubre cómo podemos ayudarte.
          </p>
          <Link
            to="/contacto"
            className="bg-white text-secondary hover:bg-gray-100 font-bold py-3 px-8 rounded-xl shadow transition"
          >
            Contactar Ahora
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Inicio;

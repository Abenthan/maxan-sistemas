const Servicios = () => {
  const servicios = [
    {
      icono: '🖥️',
      titulo: 'Servidores y Almacenamiento',
      descripcion: 'Implementamos soluciones de servidores robustas y escalables. Desde servidores dedicados hasta soluciones en la nube, garantizamos alta disponibilidad y rendimiento óptimo para tu negocio.',
      caracteristicas: ['Configuración personalizada', 'Monitoreo 24/7', 'Backup automático', 'Soporte técnico especializado']
    },
    {
      icono: '📹',
      titulo: 'Sistemas de Videovigilancia',
      descripcion: 'Instalamos y configuramos sistemas de cámaras IP de alta resolución con grabación en la nube. Tecnología avanzada para la seguridad de tu empresa.',
      caracteristicas: ['Cámaras 4K', 'Visión nocturna', 'Acceso remoto', 'Almacenamiento en la nube']
    },
    {
      icono: '🔧',
      titulo: 'Mantenimiento y Soporte Técnico',
      descripcion: 'Servicio de mantenimiento preventivo y correctivo para toda tu infraestructura tecnológica. Respuesta rápida y soluciones efectivas.',
      caracteristicas: ['Mantenimiento preventivo', 'Reparaciones urgentes', 'Actualizaciones de software', 'Soporte remoto y presencial']
    },
    {
      icono: '🌐',
      titulo: 'Redes y Conectividad',
      descripcion: 'Diseñamos, implementamos y optimizamos redes empresariales seguras y de alto rendimiento. Conectividad confiable para tu operación diaria.',
      caracteristicas: ['Diseño de redes', 'Configuración de switches', 'Seguridad de red', 'Optimización de WiFi']
    },
    {
      icono: '💻',
      titulo: 'Desarrollo de Software',
      descripcion: 'Creamos soluciones de software a medida para automatizar procesos y mejorar la eficiencia de tu negocio.',
      caracteristicas: ['Aplicaciones web', 'Sistemas de gestión', 'Automatización de procesos', 'Integración de sistemas']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Nuestros Servicios</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Soluciones tecnológicas integrales para empresas que buscan excelencia y confiabilidad.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {servicios.map((servicio, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{servicio.icono}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {servicio.titulo}
                </h3>
                <p className="text-gray-600 mb-6">
                  {servicio.descripcion}
                </p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Características:</h4>
                  <ul className="space-y-2">
                    {servicio.caracteristicas.map((caracteristica, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <span className="text-secondary mr-2">✓</span>
                        {caracteristica}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Interesado en nuestros servicios?
          </h2>
          <p className="text-white text-lg mb-8">
            Contáctanos para una consulta gratuita y descubre cómo podemos ayudarte.
          </p>
          <a
            href="/contacto"
            className="bg-white text-secondary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors inline-block"
          >
            Solicitar Cotización
          </a>
        </div>
      </section>
    </div>
  );
};

export default Servicios;
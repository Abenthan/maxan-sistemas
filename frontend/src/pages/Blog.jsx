import { useState, useEffect } from 'react';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data for now - will be replaced with API call
    const mockPosts = [
      {
        id: 1,
        titulo: 'La Importancia de la Ciberseguridad en las Empresas',
        contenido: 'En la era digital actual, la ciberseguridad se ha convertido en una prioridad fundamental para todas las organizaciones. Las amenazas cibernéticas evolucionan constantemente, y las empresas deben implementar estrategias robustas de protección de datos y sistemas. En Maxan Sistemas, ofrecemos soluciones integrales de ciberseguridad que incluyen firewalls avanzados, sistemas de detección de intrusiones y capacitación especializada para su equipo.',
        fecha_publicacion: '2024-11-05'
      },
      {
        id: 2,
        titulo: 'Tendencias en Infraestructura de TI para 2024',
        contenido: 'El año 2024 trae consigo nuevas tendencias en infraestructura de TI que están transformando la forma en que las empresas operan. La adopción de la nube híbrida, la implementación de IA en la gestión de sistemas y el enfoque en la sostenibilidad energética son solo algunas de las tendencias que están marcando el rumbo. Descubra cómo Maxan Sistemas puede ayudarle a mantenerse a la vanguardia tecnológica.',
        fecha_publicacion: '2024-11-04'
      },
      {
        id: 3,
        titulo: 'Optimización de Redes Empresariales',
        contenido: 'Una red empresarial eficiente es el backbone de cualquier organización moderna. Desde el diseño inicial hasta el mantenimiento continuo, cada aspecto de la infraestructura de red requiere atención especializada. Nuestros expertos en redes ofrecen servicios de consultoría, implementación y soporte para garantizar que su red sea rápida, segura y escalable.',
        fecha_publicacion: '2024-11-03'
      }
    ];

    setPosts(mockPosts);
    setLoading(false);
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Cargando artículos...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Tecnológico</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Mantente al día con las últimas tendencias y consejos en tecnología empresarial.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md p-8">
                <div className="mb-4">
                  <span className="text-sm text-gray-500">
                    {formatDate(post.fecha_publicacion)}
                  </span>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {post.titulo}
                </h2>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed">
                    {post.contenido}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-500">Por Maxan Sistemas</span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="text-secondary hover:text-green-600 font-medium">
                        Leer más
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Quieres recibir más contenido?
          </h2>
          <p className="text-white text-lg mb-8">
            Suscríbete a nuestro newsletter y mantente informado sobre las últimas tendencias tecnológicas.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Tu email"
              className="flex-1 px-4 py-3 rounded-l-lg border-0 focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-secondary hover:bg-gray-100 font-bold px-6 py-3 rounded-r-lg transition-colors">
              Suscribirse
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
import { useState, useEffect } from 'react';

const Tienda = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data for now - will be replaced with API call
    const mockProducts = [
      {
        id: 1,
        nombre: 'Servidor Dell PowerEdge R750',
        categoria: 'Servidores',
        descripcion: 'Servidor empresarial de alto rendimiento con procesadores Intel Xeon',
        precio: 15000.00,
        imagenURL: '/images/servidor-dell.jpg'
      },
      {
        id: 2,
        nombre: 'Sistema de Cámaras IP 8MP',
        categoria: 'Cámaras',
        descripcion: 'Kit de 4 cámaras IP de 8MP con grabación 4K y visión nocturna',
        precio: 2500.00,
        imagenURL: '/images/camaras-ip.jpg'
      },
      {
        id: 3,
        nombre: 'Switch Cisco Catalyst 2960',
        categoria: 'Redes',
        descripcion: 'Switch de 24 puertos Gigabit Ethernet para redes empresariales',
        precio: 1200.00,
        imagenURL: '/images/switch-cisco.jpg'
      },
      {
        id: 4,
        nombre: 'Licencia Windows Server 2022',
        categoria: 'Software',
        descripcion: 'Licencia de servidor para hasta 16 núcleos con CALs incluidas',
        precio: 800.00,
        imagenURL: '/images/windows-server.jpg'
      },
      {
        id: 5,
        nombre: 'UPS APC 1500VA',
        categoria: 'Energía',
        descripcion: 'Sistema de alimentación ininterrumpida con batería de respaldo',
        precio: 450.00,
        imagenURL: '/images/ups-apc.jpg'
      },
      {
        id: 6,
        nombre: 'Mantenimiento Anual de Servidores',
        categoria: 'Servicio',
        descripcion: 'Servicio de mantenimiento preventivo y correctivo para servidores',
        precio: 2500.00,
        imagenURL: '/images/mantenimiento.jpg'
      }
    ];

    setProducts(mockProducts);
    setLoading(false);
  }, []);

  const handleCotizar = (product) => {
    const message = `Hola, me gustaría cotizar el producto: ${product.nombre}`;
    const phoneNumber = '573001234567';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Cargando productos...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Nuestra Tienda</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Equipos tecnológicos al mejor precio con garantía y soporte incluido.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-6xl">
                    {product.categoria === 'Servidores' && '🖥️'}
                    {product.categoria === 'Cámaras' && '📹'}
                    {product.categoria === 'Redes' && '🌐'}
                    {product.categoria === 'Software' && '💿'}
                    {product.categoria === 'Energía' && '🔋'}
                    {product.categoria === 'Servicio' && '🔧'}
                  </span>
                </div>

                <div className="p-6">
                  <div className="text-sm text-secondary font-medium mb-2">
                    {product.categoria}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {product.nombre}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {product.descripcion}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">
                      ${product.precio.toLocaleString()}
                    </span>
                    <button
                      onClick={() => handleCotizar(product)}
                      className="bg-secondary hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition-colors"
                    >
                      Cotizar
                    </button>
                  </div>
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
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-white text-lg mb-8">
            Contáctanos directamente para productos personalizados o cotizaciones especiales.
          </p>
          <a
            href="/contacto"
            className="bg-white text-secondary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors inline-block"
          >
            Contactar Ventas
          </a>
        </div>
      </section>
    </div>
  );
};

export default Tienda;
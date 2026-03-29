import { Code2, Bot, Server, Headset, Wifi, Shield, Camera, Package } from "lucide-react";

const WA_LINK = "https://wa.me/573128919875";

const principales = [
  {
    icon: <Code2 size={26} className="text-[#2563EB]" />,
    titulo: "Desarrollo de Software a la Medida",
    mensaje: "Software hecho para tu negocio, no al revés.",
    desc: "Aplicaciones web, sistemas de facturación, paneles administrativos, integraciones con tus herramientas actuales. Construimos lo que tu empresa necesita — desde cero, sin plantillas genéricas.",
    puntos: [
      "Aplicaciones web y paneles administrativos",
      "Sistemas de facturación y gestión",
      "Integraciones entre plataformas",
      "APIs y automatización de flujos",
    ],
  },
  {
    icon: <Bot size={26} className="text-[#2563EB]" />,
    titulo: "Automatización y Chatbots",
    mensaje: "Procesos que se hacen solos. Tiempo que recuperas.",
    desc: "Chatbots para WhatsApp y web, automatización de tareas repetitivas, integración entre sistemas. Si se repite en tu empresa, lo automatizamos.",
    puntos: [
      "Chatbots para WhatsApp y sitios web",
      "Automatización de procesos internos",
      "Integración con CRM, ERP y otras plataformas",
      "Notificaciones y flujos automáticos",
    ],
  },
  {
    icon: <Server size={26} className="text-[#2563EB]" />,
    titulo: "Arquitectura en la Nube",
    mensaje: "Tu empresa lista para escalar, con infraestructura moderna y segura.",
    desc: "Diseño e implementación de servidores, APIs, dominios y seguridad. Tu empresa corre sobre una base sólida y moderna, lista para crecer.",
    puntos: [
      "Servidores VPS y nube (AWS, DigitalOcean, etc.)",
      "Despliegue de aplicaciones con Docker",
      "Dominios, SSL y configuración de DNS",
      "Monitoreo y mantenimiento de infraestructura",
    ],
  },
];

const complementarios = [
  {
    icon: <Headset size={20} className="text-[#2563EB]" />,
    titulo: "Soporte IT Mensual",
    desc: "Tu infraestructura siempre funcionando. Sin sorpresas, sin apagones. Plan mensual para PYMES con 10–50 empleados.",
  },
  {
    icon: <Wifi size={20} className="text-[#2563EB]" />,
    titulo: "Redes y Conectividad",
    desc: "Diseño, implementación y optimización de redes empresariales seguras y de alto rendimiento.",
  },
  {
    icon: <Shield size={20} className="text-[#2563EB]" />,
    titulo: "Seguridad Informática",
    desc: "Configuración de firewalls, políticas de acceso, backups y protección de datos empresariales.",
  },
  {
    icon: <Camera size={20} className="text-[#2563EB]" />,
    titulo: "Sistemas CCTV",
    desc: "Instalación y configuración de cámaras IP con acceso remoto y almacenamiento en la nube.",
  },
  {
    icon: <Package size={20} className="text-[#2563EB]" />,
    titulo: "Venta de Equipos",
    desc: "Computadores, switches, UPS y periféricos — seleccionados para el uso real de tu empresa.",
  },
];

const Servicios = () => {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* Header */}
      <section className="bg-[#0c2c59] pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#2563EB] text-sm font-semibold tracking-widest uppercase mb-4">Servicios</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Lo que construimos<br className="hidden md:block" /> para tu empresa
          </h1>
          <p className="text-white/60 text-lg max-w-xl">
            Infraestructura, software y automatización — todo en una sola empresa.
          </p>
        </div>
      </section>

      {/* Servicios principales */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-8">
          {principales.map((s, i) => (
            <div
              key={i}
              className="border border-gray-100 rounded-2xl p-8 md:p-10 hover:border-[#2563EB]/30 hover:shadow-sm transition-all"
            >
              <div className="flex flex-col md:flex-row md:gap-12">
                <div className="md:w-1/2 mb-6 md:mb-0">
                  <div className="w-12 h-12 bg-[#2563EB]/10 rounded-xl flex items-center justify-center mb-5">
                    {s.icon}
                  </div>
                  <h2 className="text-2xl font-extrabold text-[#0c2c59] mb-2">{s.titulo}</h2>
                  <p className="text-[#2563EB] text-sm font-semibold mb-4">{s.mensaje}</p>
                  <p className="text-gray-500 leading-relaxed text-sm mb-6">{s.desc}</p>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#0c2c59] hover:bg-[#2563EB] text-white text-sm font-bold rounded-full transition-colors"
                  >
                    Conversemos
                  </a>
                </div>
                <div className="md:w-1/2">
                  <ul className="space-y-3">
                    {s.puntos.map((p, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-[#2563EB]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="w-2 h-2 rounded-full bg-[#2563EB] block" />
                        </span>
                        <span className="text-gray-600 text-sm">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Servicios complementarios */}
      <section className="py-16 bg-[#F9FAFB]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-extrabold text-[#0c2c59] mb-10">Servicios complementarios</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {complementarios.map((s, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
                <div className="w-10 h-10 bg-[#2563EB]/10 rounded-lg flex items-center justify-center mb-4">
                  {s.icon}
                </div>
                <h3 className="font-bold text-[#0c2c59] mb-2">{s.titulo}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0c2c59]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            ¿Cuál es el reto de tu empresa?
          </h2>
          <p className="text-white/60 mb-8">
            Cuéntanos en qué estás trabajando. Sin compromiso.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#20c05c] text-white font-bold rounded-full transition-colors"
          >
            Escribinos por WhatsApp
          </a>
        </div>
      </section>

    </div>
  );
};

export default Servicios;

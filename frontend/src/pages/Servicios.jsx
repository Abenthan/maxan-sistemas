import { useMemo } from "react";
import { Link } from "react-router-dom";
import { Code2, Bot, Server, Headset, Wifi, Shield, Camera, Package, ArrowRight } from "lucide-react";
import { waLink } from "../lib/wa";
import { useSeo, ogImage } from "../lib/seo";

const principales = [
  {
    id: "software",
    icon: Code2,
    titulo: "Desarrollo de software a la medida",
    mensaje: "Software hecho para tu negocio, no al revés.",
    desc: "Aplicaciones web, sistemas de facturación, paneles administrativos e integraciones con tus herramientas actuales. Construimos lo que tu empresa necesita, desde cero y sin plantillas genéricas.",
    puntos: [
      "Aplicaciones web y paneles administrativos",
      "Sistemas de facturación y gestión",
      "Integraciones entre plataformas",
      "APIs y automatización de flujos",
    ],
    to: "/software-a-la-medida",
  },
  {
    id: "automatizacion",
    icon: Bot,
    titulo: "Automatización y chatbots",
    mensaje: "Procesos que se hacen solos. Tiempo que recuperas.",
    desc: "Chatbots para WhatsApp y web, automatización de tareas repetitivas e integración entre sistemas. Si se repite en tu empresa, lo automatizamos.",
    puntos: [
      "Chatbots para WhatsApp y sitios web",
      "Automatización de procesos internos",
      "Integración con CRM, ERP y otras plataformas",
      "Notificaciones y flujos automáticos",
    ],
  },
  {
    id: "nube",
    icon: Server,
    titulo: "Arquitectura en la nube",
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
    id: "soporte",
    icon: Headset,
    titulo: "Soporte IT mensual",
    desc: "Tu infraestructura siempre funcionando. Sin sorpresas, sin apagones. Plan mensual para PYMES con 10 a 50 empleados.",
  },
  {
    icon: Wifi,
    titulo: "Redes y conectividad",
    desc: "Diseño, implementación y optimización de redes empresariales seguras y de alto rendimiento.",
  },
  {
    icon: Shield,
    titulo: "Seguridad informática",
    desc: "Configuración de firewalls, políticas de acceso, backups y protección de datos empresariales.",
  },
  {
    icon: Camera,
    titulo: "Sistemas CCTV",
    desc: "Instalación y configuración de cámaras IP con acceso remoto y almacenamiento en la nube.",
  },
  {
    icon: Package,
    titulo: "Venta de equipos",
    desc: "Computadores, switches, UPS y periféricos seleccionados para el uso real de tu empresa.",
  },
];

export default function Servicios() {
  const jsonLd = useMemo(
    () => [
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Servicios de Maxan Sistemas",
        itemListElement: principales.map((s, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: s.titulo,
          description: s.desc,
        })),
      },
    ],
    []
  );

  useSeo({
    title: "Servicios de tecnología para empresas | Maxan Sistemas",
    description:
      "Desarrollo de software a la medida, automatización y chatbots, arquitectura en la nube, soporte IT mensual, redes, seguridad y CCTV para PYMES colombianas.",
    path: "/servicios",
    image: ogImage("og-maxan-servicios.jpg"),
    jsonLd,
  });

  return (
    <div className="w-full">
      {/* Header */}
      <section className="relative overflow-hidden bg-maxan-navy">
        <img
          src="/images/hero-servicios.jpg"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-[70%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-maxan-navy-900 via-maxan-navy-900/85 to-maxan-navy-900/45" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">
          <p className="eyebrow eyebrow-light mb-4">Servicios</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Lo que construimos para tu empresa
          </h1>
          <p className="text-white/80 text-lg max-w-xl">
            Infraestructura, software y automatización — todo en una sola empresa.
          </p>
        </div>
      </section>

      {/* Servicios principales */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 space-y-8">
          {principales.map((s) => {
            const Icon = s.icon;
            return (
              <article
                key={s.titulo}
                id={s.id}
                className="card p-8 md:p-10 scroll-mt-28"
              >
                <div className="flex flex-col md:flex-row md:gap-12">
                  <div className="md:w-1/2 mb-6 md:mb-0">
                    <div className="w-12 h-12 bg-maxan-primary-soft rounded-maxan-md flex items-center justify-center mb-5">
                      <Icon size={26} className="text-maxan-primary" aria-hidden="true" />
                    </div>
                    <h2 className="text-2xl font-extrabold text-maxan-navy mb-2">
                      {s.titulo}
                    </h2>
                    <p className="text-maxan-primary text-sm font-semibold mb-4">{s.mensaje}</p>
                    <p className="prose-body mb-6">{s.desc}</p>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href={waLink(`Hola, quiero info sobre: ${s.titulo}.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        Conversemos sobre {s.titulo.toLowerCase()}
                      </a>
                      {s.to && (
                        <Link to={s.to} className="btn btn-ghost">
                          Ver el detalle
                          <ArrowRight size={18} aria-hidden="true" />
                        </Link>
                      )}
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <ul className="space-y-3">
                      {s.puntos.map((p) => (
                        <li key={p} className="flex items-start gap-3">
                          <span
                            className="w-5 h-5 rounded-full bg-maxan-primary-soft flex items-center justify-center flex-shrink-0 mt-0.5"
                            aria-hidden="true"
                          >
                            <span className="w-2 h-2 rounded-full bg-maxan-primary block" />
                          </span>
                          <span className="text-maxan-text-secondary text-sm">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Servicios complementarios */}
      <section className="py-16 bg-maxan-bg">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-extrabold text-maxan-navy mb-10">
            Servicios complementarios
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {complementarios.map((s) => {
              const Icon = s.icon;
              return (
                <article
                  key={s.titulo}
                  id={s.id}
                  className="card p-6 scroll-mt-28"
                >
                  <div className="w-10 h-10 bg-maxan-primary-soft rounded-maxan-sm flex items-center justify-center mb-4">
                    <Icon size={20} className="text-maxan-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-maxan-navy mb-2">{s.titulo}</h3>
                  <p className="prose-body">{s.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-maxan-navy">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            ¿Cuál es el reto de tu empresa?
          </h2>
          <p className="text-white/80 mb-8">
            Cuéntanos en qué estás trabajando. Sin compromiso.
          </p>
          <a
            href={waLink("Hola, quiero información sobre los servicios de Maxan Sistemas.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            Escríbenos por WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}

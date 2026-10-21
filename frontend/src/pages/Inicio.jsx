import { useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Code2,
  Bot,
  Server,
  CheckCircle2,
  Layers,
  Package,
  SlidersHorizontal,
  ArrowRight,
} from "lucide-react";
import ContactForm from "../components/ContactForm";
import { WA_DISPLAY, WA_LINK, MAIL, MAIL_LINK } from "../lib/wa";
import { SITE_URL, useSeo, ogImage } from "../lib/seo";

const WaIcon = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.374 0 0 5.373 0 12c0 2.124.554 4.122 1.526 5.859L0 24l6.336-1.49A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.88 9.88 0 01-5.017-1.363l-.36-.214-3.732.878.939-3.627-.235-.374A9.861 9.861 0 012.106 12C2.106 6.53 6.53 2.106 12 2.106c5.47 0 9.894 4.424 9.894 9.894 0 5.47-4.424 9.894-9.894 9.894z" />
  </svg>
);

const servicios = [
  {
    icon: Code2,
    titulo: "Software hecho para tu negocio",
    desc: "Aplicaciones web, sistemas de facturación, paneles administrativos e integraciones. Construimos lo que tu empresa necesita, no plantillas genéricas.",
    cta: { label: "Ver el desarrollo de software a la medida", to: "/software-a-la-medida" },
  },
  {
    icon: Bot,
    titulo: "Procesos que se hacen solos",
    desc: "Chatbots para WhatsApp y web, automatización de tareas repetitivas e integración entre sistemas. Si se repite, lo automatizamos.",
    cta: { label: "Conversemos sobre automatización", href: WA_LINK },
  },
  {
    icon: Server,
    titulo: "Infraestructura lista para escalar",
    desc: "Diseño e implementación de servidores, APIs, dominios y seguridad. Tu empresa corre sobre una base sólida y moderna.",
    cta: { label: "Ver servicios de infraestructura", to: "/servicios" },
  },
];

const razones = [
  {
    icon: CheckCircle2,
    titulo: "Hacemos y mantenemos",
    desc: "No solo consultamos: construimos, implementamos y damos soporte después.",
  },
  {
    icon: Layers,
    titulo: "Visión integral",
    desc: "Infraestructura, software y automatización en una sola empresa.",
  },
  {
    icon: Package,
    titulo: "Productos propios",
    desc: "Desarrollamos nuestro propio software. Sabemos lo que es construir un producto real.",
  },
  {
    icon: SlidersHorizontal,
    titulo: "A la medida de tu empresa",
    desc: "Sin plantillas genéricas. Cada solución parte de entender tu operación.",
  },
];

export default function Inicio() {
  const jsonLd = useMemo(
    () => [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Maxan Sistemas — Tecnología para PYMES colombianas",
        description:
          "Soporte IT mensual, desarrollo de software y automatización para PYMES colombianas.",
        url: `${SITE_URL}/`,
        inLanguage: "es-CO",
      },
    ],
    []
  );

  useSeo({
    title: "Maxan Sistemas — Tecnología para PYMES colombianas",
    description:
      "Construimos la tecnología que hace crecer tu empresa: soporte IT mensual, desarrollo de software a la medida y automatización para PYMES colombianas.",
    path: "/",
    image: ogImage("og-maxan.jpg"),
    jsonLd,
  });

  return (
    <div className="w-full">
      {/* ── 1. HERO ── */}
      <section className="relative flex items-center min-h-[calc(100vh-4rem)] bg-maxan-navy-900">
        <img
          src="/images/Hero1.webp"
          srcSet="/images/Hero1-960.webp 960w, /images/Hero1.webp 1600w"
          sizes="100vw"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-[75%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-maxan-navy-900 via-maxan-navy-900/75 to-maxan-navy-900/25" />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24">
          <p className="eyebrow eyebrow-light mb-5">Tecnología para PYMES colombianas</p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1] max-w-3xl">
            Construimos la tecnología que hace crecer tu empresa.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-xl leading-relaxed">
            Desde mantener tu infraestructura hasta automatizar tus procesos — todo
            en una sola empresa.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <WaIcon />
              Conversemos por WhatsApp
            </a>
            <Link to="/servicios" className="btn btn-light">
              Ver servicios
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. SERVICIOS ── */}
      <section id="servicios" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="eyebrow mb-3">Servicios</p>
            <h2 className="section-title text-3xl md:text-4xl">
              Lo que construimos para tu empresa
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {servicios.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.titulo}
                  className="card p-8 hover:border-maxan-border-strong transition-colors"
                >
                  <div className="w-12 h-12 bg-maxan-primary-soft rounded-maxan-md flex items-center justify-center mb-6">
                    <Icon size={26} className="text-maxan-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-maxan-navy mb-3">{s.titulo}</h3>
                  <p className="prose-body mb-6">{s.desc}</p>
                  {s.cta.to ? (
                    <Link
                      to={s.cta.to}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-maxan-primary hover:underline"
                    >
                      {s.cta.label}
                    </Link>
                  ) : (
                    <a
                      href={s.cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-maxan-primary hover:underline"
                    >
                      {s.cta.label}
                    </a>
                  )}
                </div>
              );
            })}
          </div>

          <div className="bg-maxan-bg rounded-maxan-lg px-8 py-6 flex flex-wrap gap-3 items-center">
            <span className="text-sm text-maxan-text-secondary font-semibold mr-2">
              También:
            </span>
            {[
              "Soporte IT mensual",
              "Redes y conectividad",
              "Seguridad informática",
              "Sistemas CCTV",
              "Venta de equipos",
            ].map((s) => (
              <span
                key={s}
                className="px-4 py-1.5 bg-white border border-maxan-border rounded-full text-sm text-maxan-text-secondary font-medium"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. POR QUÉ MAXAN ── */}
      <section id="por-que-maxan" className="py-24 bg-maxan-bg">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="eyebrow mb-3">Por qué elegirnos</p>
            <h2 className="section-title text-3xl md:text-4xl">
              No somos una consultora. Hacemos el trabajo.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {razones.map((d) => {
              const Icon = d.icon;
              return (
                <div key={d.titulo} className="flex gap-4">
                  <div className="w-10 h-10 bg-maxan-primary-soft rounded-maxan-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={20} className="text-maxan-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-maxan-navy mb-1">{d.titulo}</h3>
                    <p className="prose-body">{d.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. PORTAFOLIO ── */}
      <section id="portafolio" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="eyebrow mb-3">Portafolio</p>
            <h2 className="section-title text-3xl md:text-4xl">
              Prueba de lo que construimos
            </h2>
          </div>
          <article className="card p-8 md:p-12 max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Chatbot", "WhatsApp", "Automatización", "SaaS"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-maxan-primary-soft text-maxan-primary text-xs font-semibold rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-xl font-bold text-maxan-navy mb-4">
              Automatización de atención al cliente para el sector hotelero
            </h3>
            <p className="prose-body">
              Desarrollamos un chatbot de atención al cliente por WhatsApp para
              hoteles y alojamientos en Colombia. El sistema responde reservas,
              preguntas frecuentes y escala a un agente humano cuando es necesario.
              Construido desde cero, en producción, con clientes reales.
            </p>
          </article>
        </div>
      </section>

      {/* ── 5. CONTACTO ── */}
      <section id="contacto" className="py-24 bg-maxan-navy">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="eyebrow eyebrow-light mb-3">Contacto</p>
            <h2 className="section-title section-title-light text-3xl md:text-4xl">
              ¿Listo para que la tecnología trabaje para tu empresa?
            </h2>
            <p className="text-white/80 mt-3 text-lg">
              Cuéntanos qué necesitas. Sin compromiso.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulario: el envío abre WhatsApp con el mensaje escrito */}
            <ContactForm tone="dark" />

            {/* Contacto directo */}
            <div className="flex flex-col justify-center space-y-5">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-white/10 border border-white/45 rounded-maxan-lg hover:bg-white/15 transition-colors"
              >
                <div className="w-11 h-11 bg-whatsapp/20 rounded-maxan-md flex items-center justify-center flex-shrink-0">
                  <WaIcon className="w-6 h-6 text-whatsapp" />
                </div>
                <div>
                  <p className="text-xs text-white/70 font-semibold uppercase tracking-wide mb-0.5">
                    WhatsApp
                  </p>
                  <p className="text-white font-bold">{WA_DISPLAY}</p>
                </div>
              </a>
              <a
                href={MAIL_LINK}
                className="flex items-center gap-4 p-5 bg-white/10 border border-white/45 rounded-maxan-lg hover:bg-white/15 transition-colors"
              >
                <div className="w-11 h-11 bg-maxan-primary/25 rounded-maxan-md flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-maxan-primary-ink"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/70 font-semibold uppercase tracking-wide mb-0.5">
                    Correo
                  </p>
                  <p className="text-white font-bold">{MAIL}</p>
                </div>
              </a>
              <p className="text-white/70 text-sm leading-relaxed pt-2">
                Respondemos en menos de 24 horas en días hábiles. Para urgencias, el
                canal más rápido es WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

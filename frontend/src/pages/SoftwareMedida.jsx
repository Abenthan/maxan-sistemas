import { useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Code2,
  Monitor,
  Receipt,
  LayoutDashboard,
  Workflow,
  Smartphone,
  ArrowRight,
  CheckCircle2,
  FlaskConical,
  Rocket,
  Users,
  MousePointerClick,
  Cog,
  Cloud,
} from "lucide-react";
import { waLink } from "../lib/wa";
import { useSeo, ogImage } from "../lib/seo";

const tiposProyecto = [
  {
    icon: Monitor,
    titulo: "Aplicaciones web",
    desc: "Sistemas completos accesibles desde cualquier navegador: portales, dashboards y plataformas SaaS.",
  },
  {
    icon: Receipt,
    titulo: "Facturación y gestión",
    desc: "Sistemas de facturación electrónica, inventarios, control de clientes y reportes gerenciales.",
  },
  {
    icon: LayoutDashboard,
    titulo: "Paneles administrativos",
    desc: "Interfaces para que tu equipo administre usuarios, ventas, métricas y operaciones en tiempo real.",
  },
  {
    icon: Workflow,
    titulo: "Integraciones y APIs",
    desc: "Conexión entre tus herramientas actuales: CRM, pasarelas de pago, plataformas de envío y contabilidad.",
  },
  {
    icon: Smartphone,
    titulo: "Apps móviles",
    desc: "Aplicaciones nativas o híbridas para Android y iOS conectadas a tu sistema principal.",
  },
  {
    icon: Cloud,
    titulo: "Migración y modernización",
    desc: "Llevamos sistemas legacy a tecnologías modernas, más rápidas, seguras y fáciles de mantener.",
  },
];

const tecnologias = [
  { categoria: "Frontend", items: ["React", "Vue.js", "Tailwind CSS", "TypeScript"] },
  { categoria: "Backend", items: ["Node.js", "Python", "Go", "PHP"] },
  { categoria: "Bases de datos", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"] },
  { categoria: "Infraestructura", items: ["Docker", "AWS", "DigitalOcean", "Linux"] },
];

const metodologia = [
  {
    icon: Users,
    paso: "01",
    titulo: "Descubrimiento",
    desc: "Entendemos tu negocio, tus procesos y el problema a resolver. Definimos alcance y objetivos.",
  },
  {
    icon: MousePointerClick,
    paso: "02",
    titulo: "Diseño",
    desc: "Prototipamos la solución: flujos, pantallas y experiencia de usuario. Aprobación antes de escribir código.",
  },
  {
    icon: Code2,
    paso: "03",
    titulo: "Desarrollo",
    desc: "Construimos el software en iteraciones cortas. Cada entrega es funcional y revisable.",
  },
  {
    icon: FlaskConical,
    paso: "04",
    titulo: "Pruebas",
    desc: "Probamos cada funcionalidad: rendimiento, seguridad y usabilidad. Sin errores a producción.",
  },
  {
    icon: Rocket,
    paso: "05",
    titulo: "Despliegue",
    desc: "Ponemos el sistema en producción con monitoreo, backups y documentación.",
  },
  {
    icon: Cog,
    paso: "06",
    titulo: "Soporte",
    desc: "No desaparecemos. Damos mantenimiento, actualizaciones y soporte continuo.",
  },
];

export default function SoftwareMedida() {
  const jsonLd = useMemo(
    () => [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Desarrollo de software a la medida",
        provider: { "@type": "Organization", name: "Maxan Sistemas" },
        areaServed: { "@type": "Country", name: "Colombia" },
        description:
          "Desarrollo de aplicaciones web, sistemas de facturación, paneles administrativos, apps móviles e integraciones para PYMES colombianas.",
      },
    ],
    []
  );

  useSeo({
    title: "Desarrollo de software a la medida | Maxan Sistemas",
    description:
      "Construimos desde cero el software que tu empresa necesita: aplicaciones web, facturación, paneles administrativos, apps móviles e integraciones.",
    path: "/software-a-la-medida",
    image: ogImage("og-maxan-software.jpg"),
    jsonLd,
  });

  return (
    <div className="w-full">
      {/* ── HERO ── */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-maxan-navy">
        <img
          src="/images/hero-software.jpg"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-[75%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-maxan-navy-900 via-maxan-navy-900/85 to-maxan-navy-900/40" />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24">
          <p className="eyebrow eyebrow-light mb-4">Servicio</p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight max-w-3xl">
            Software hecho para tu negocio.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-xl leading-relaxed">
            No vendemos plantillas. Construimos desde cero el software que tu empresa
            necesita: sistemas web, facturación, paneles administrativos, apps móviles
            e integraciones.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={waLink("Hola, quiero desarrollar software a la medida para mi empresa.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              Conversemos por WhatsApp
            </a>
            <Link to="/agenda" className="btn btn-light">
              Agendar reunión
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TIPOS DE PROYECTOS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="eyebrow mb-3">Lo que construimos</p>
            <h2 className="section-title text-3xl md:text-4xl">Tipos de proyectos</h2>
            <p className="prose-body mt-3 max-w-xl">
              Cada proyecto es único. Estos son los tipos de software que desarrollamos
              con más frecuencia.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tiposProyecto.map((tp) => {
              const Icon = tp.icon;
              return (
                <article
                  key={tp.titulo}
                  className="card p-8 hover:border-maxan-border-strong transition-colors"
                >
                  <div className="w-12 h-12 bg-maxan-primary-soft rounded-maxan-md flex items-center justify-center mb-5">
                    <Icon size={24} className="text-maxan-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-maxan-navy mb-2">{tp.titulo}</h3>
                  <p className="prose-body">{tp.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TECNOLOGÍAS ── */}
      <section className="py-24 bg-maxan-bg">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="eyebrow mb-3">Tecnologías</p>
            <h2 className="section-title text-3xl md:text-4xl">El stack que usamos</h2>
            <p className="prose-body mt-3 max-w-xl">
              Elegimos las herramientas adecuadas para cada proyecto: modernas, probadas
              y escalables.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tecnologias.map((cat) => (
              <div key={cat.categoria} className="card p-6">
                <h3 className="text-xs font-semibold text-maxan-primary mb-4 uppercase tracking-wide">
                  {cat.categoria}
                </h3>
                <ul className="space-y-3">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-maxan-text-secondary"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-maxan-primary flex-shrink-0"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── METODOLOGÍA ── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="eyebrow mb-3">Metodología</p>
            <h2 className="section-title text-3xl md:text-4xl">Cómo trabajamos</h2>
            <p className="prose-body mt-3 max-w-xl">
              De la idea a producción con total transparencia. Este es nuestro proceso
              paso a paso.
            </p>
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {metodologia.map((m) => {
              const Icon = m.icon;
              return (
                <li key={m.paso} className="relative pl-12">
                  <div className="absolute left-0 top-0 w-8 h-8 bg-maxan-primary rounded-maxan-sm flex items-center justify-center">
                    <Icon size={16} className="text-white" aria-hidden="true" />
                  </div>
                  <p className="text-xs font-bold text-maxan-primary tracking-wide mb-1">
                    {m.paso}
                  </p>
                  <h3 className="text-lg font-bold text-maxan-navy mb-1">{m.titulo}</h3>
                  <p className="prose-body">{m.desc}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-maxan-navy">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-maxan-primary/20 mb-6">
            <CheckCircle2 size={32} className="text-maxan-primary-ink" aria-hidden="true" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            ¿Listo para empezar tu proyecto?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-lg mx-auto">
            Cuéntanos qué necesitas y te daremos una propuesta clara, sin vueltas ni
            compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={waLink("Hola, quiero empezar un proyecto de software a la medida.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              Escríbenos por WhatsApp
            </a>
            <Link to="/agenda" className="btn btn-light">
              Agendar una reunión
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

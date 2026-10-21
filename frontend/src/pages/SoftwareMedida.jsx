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

const WA_LINK = "https://wa.me/573128919875";

const tiposProyecto = [
  {
    icon: <Monitor className="w-6 h-6 text-[#2563EB]" />,
    titulo: "Aplicaciones Web",
    desc: "Sistemas completos accesibles desde cualquier navegador — portales, dashboards, plataformas SaaS.",
  },
  {
    icon: <Receipt className="w-6 h-6 text-[#2563EB]" />,
    titulo: "Facturación y Gestión",
    desc: "Sistemas de facturación electrónica, inventarios, control de clientes y reportes gerenciales.",
  },
  {
    icon: <LayoutDashboard className="w-6 h-6 text-[#2563EB]" />,
    titulo: "Paneles Administrativos",
    desc: "Interfaces para que tu equipo administre usuarios, ventas, métricas y operaciones en tiempo real.",
  },
  {
    icon: <Workflow className="w-6 h-6 text-[#2563EB]" />,
    titulo: "Integraciones y APIs",
    desc: "Conexión entre tus herramientas actuales: CRM, pasarelas de pago, plataformas de envío, contabilidad.",
  },
  {
    icon: <Smartphone className="w-6 h-6 text-[#2563EB]" />,
    titulo: "Apps Móviles",
    desc: "Aplicaciones nativas o híbridas para Android y iOS conectadas a tu sistema principal.",
  },
  {
    icon: <Cloud className="w-6 h-6 text-[#2563EB]" />,
    titulo: "Migración y Modernización",
    desc: "Llevamos sistemas legacy a tecnologías modernas, más rápidas, seguras y fáciles de mantener.",
  },
];

const tecnologias = [
  {
    categoria: "Frontend",
    items: ["React", "Vue.js", "Tailwind CSS", "TypeScript"],
  },
  {
    categoria: "Backend",
    items: ["Node.js", "Python", "Go", "PHP"],
  },
  {
    categoria: "Bases de Datos",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    categoria: "Infraestructura",
    items: ["Docker", "AWS", "DigitalOcean", "Linux"],
  },
];

const metodologia = [
  {
    icon: <Users className="w-5 h-5 text-white" />,
    paso: "01",
    titulo: "Descubrimiento",
    desc: "Entendemos tu negocio, tus procesos y el problema a resolver. Definimos alcance y objetivos.",
  },
  {
    icon: <MousePointerClick className="w-5 h-5 text-white" />,
    paso: "02",
    titulo: "Diseño",
    desc: "Prototipamos la solución: flujos, pantallas y experiencia de usuario. Aprobación antes de escribir código.",
  },
  {
    icon: <Code2 className="w-5 h-5 text-white" />,
    paso: "03",
    titulo: "Desarrollo",
    desc: "Construimos el software en iteraciones cortas. Cada entrega es funcional y revisable.",
  },
  {
    icon: <FlaskConical className="w-5 h-5 text-white" />,
    paso: "04",
    titulo: "Pruebas",
    desc: "Probamos cada funcionalidad: rendimiento, seguridad y usabilidad. Sin errores a producción.",
  },
  {
    icon: <Rocket className="w-5 h-5 text-white" />,
    paso: "05",
    titulo: "Despliegue",
    desc: "Ponemos el sistema en producción con monitoreo, backups y documentación.",
  },
  {
    icon: <Cog className="w-5 h-5 text-white" />,
    paso: "06",
    titulo: "Soporte",
    desc: "No desaparecemos. Damos mantenimiento, actualizaciones y soporte continuo.",
  },
];

export default function SoftwareMedida() {
  return (
    <div className="w-full text-gray-900">
      {/* ── HERO ── */}
      <section className="relative min-h-[70vh] flex items-center bg-[#0c2c59]">
        <div className="w-full max-w-6xl mx-auto px-6 py-24">
          <p className="text-[#2563EB] text-sm font-semibold tracking-widest uppercase mb-4">
            Servicio
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight max-w-3xl">
            Software hecho <br />para tu negocio.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/60 max-w-xl leading-relaxed">
            No vendemos plantillas. Construimos desde cero el software que tu empresa necesita — 
            sistemas web, facturación, paneles administrativos, apps móviles e integraciones.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#20c05c] text-white font-bold rounded-full transition-colors text-base"
            >
              Conversemos por WhatsApp
            </a>
            <Link
              to="/agenda"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white/80 hover:bg-white/10 font-semibold rounded-full transition-colors text-base"
            >
              Agendar reunión <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TIPOS DE PROYECTOS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-[#2563EB] text-sm font-semibold tracking-widest uppercase mb-3">
              Lo que construimos
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0c2c59]">
              Tipos de proyectos
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl">
              Cada proyecto es único. Estos son algunos de los tipos de software que desarrollamos con más frecuencia.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tiposProyecto.map((tp, i) => (
              <div
                key={i}
                className="border border-gray-100 rounded-2xl p-8 hover:border-[#2563EB]/30 hover:shadow-sm transition-all"
              >
                <div className="w-12 h-12 bg-[#2563EB]/10 rounded-xl flex items-center justify-center mb-5">
                  {tp.icon}
                </div>
                <h3 className="text-lg font-bold text-[#0c2c59] mb-2">{tp.titulo}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{tp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECNOLOGÍAS ── */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-[#2563EB] text-sm font-semibold tracking-widest uppercase mb-3">
              Tecnologías
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0c2c59]">
              El stack que usamos
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl">
              Elegimos las herramientas adecuadas para cada proyecto — modernas, probadas y escalables.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tecnologias.map((cat, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="text-xs font-semibold tracking-widest uppercase text-[#2563EB] mb-4">
                  {cat.categoria}
                </h3>
                <ul className="space-y-3">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] flex-shrink-0" />
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
            <p className="text-[#2563EB] text-sm font-semibold tracking-widest uppercase mb-3">
              Metodología
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0c2c59]">
              Cómo trabajamos
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl">
              De la idea a producción con total transparencia. Así es nuestro proceso paso a paso.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {metodologia.map((m, i) => (
              <div key={i} className="relative pl-12">
                <div className="absolute left-0 top-0 w-8 h-8 bg-[#2563EB] rounded-lg flex items-center justify-center">
                  {m.icon}
                </div>
                <p className="text-xs font-bold text-[#2563EB] tracking-widest mb-1">{m.paso}</p>
                <h3 className="text-lg font-bold text-[#0c2c59] mb-1">{m.titulo}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-[#0c2c59]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#2563EB]/15 mb-6">
            <CheckCircle2 className="w-8 h-8 text-[#2563EB]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            ¿Listo para empezar tu proyecto?
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-lg mx-auto">
            Cuéntanos qué necesitas y te daremos una propuesta clara, sin vueltas ni compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#20c05c] text-white font-bold rounded-full transition-colors"
            >
              Escribinos por WhatsApp
            </a>
            <Link
              to="/agenda"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white/80 hover:bg-white/10 font-semibold rounded-full transition-colors"
            >
              Agendar una reunión <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

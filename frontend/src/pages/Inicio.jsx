import { useState } from "react";
import { Code2, Bot, Server, CheckCircle2, Layers, Package, SlidersHorizontal } from "lucide-react";

const WA_LINK = "https://wa.me/573128919875";

const WaIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.374 0 0 5.373 0 12c0 2.124.554 4.122 1.526 5.859L0 24l6.336-1.49A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.88 9.88 0 01-5.017-1.363l-.36-.214-3.732.878.939-3.627-.235-.374A9.861 9.861 0 012.106 12C2.106 6.53 6.53 2.106 12 2.106c5.47 0 9.894 4.424 9.894 9.894 0 5.47-4.424 9.894-9.894 9.894z"/>
  </svg>
);

export default function Inicio() {
  const [formData, setFormData] = useState({ nombre: "", empresa: "", mensaje: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre: formData.nombre, email: formData.empresa, mensaje: formData.mensaje }),
      });
      if (!res.ok) throw new Error();
      setStatus("ok");
      setFormData({ nombre: "", empresa: "", mensaje: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="w-full text-gray-900">

      {/* ── 1. HERO ── */}
      <section
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage: "url('/images/Hero1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center right",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-32">
          <p className="text-[#2563EB] text-sm font-semibold tracking-widest uppercase mb-4">
            Tecnología para PYMES colombianas
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight max-w-3xl">
            Construimos la tecnología que hace crecer tu empresa.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/70 max-w-xl leading-relaxed">
            Desde mantener tu infraestructura hasta automatizar tus procesos — todo en una sola empresa.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#20c05c] text-white font-bold rounded-full transition-colors text-base"
            >
              <WaIcon />
              Conversemos por WhatsApp
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white/80 hover:bg-white/10 font-semibold rounded-full transition-colors text-base"
            >
              Ver servicios
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. SERVICIOS ── */}
      <section id="servicios" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-[#2563EB] text-sm font-semibold tracking-widest uppercase mb-3">Servicios</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0c2c59]">
              Lo que construimos para tu empresa
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                icon: <Code2 size={28} className="text-[#2563EB]" />,
                titulo: "Software hecho para tu negocio",
                desc: "Aplicaciones web, sistemas de facturación, paneles administrativos, integraciones. Construimos lo que tu empresa necesita, no plantillas genéricas.",
              },
              {
                icon: <Bot size={28} className="text-[#2563EB]" />,
                titulo: "Procesos que se hacen solos",
                desc: "Chatbots para WhatsApp y web, automatización de tareas repetitivas, integración entre sistemas. Si se repite, lo automatizamos.",
              },
              {
                icon: <Server size={28} className="text-[#2563EB]" />,
                titulo: "Infraestructura lista para escalar",
                desc: "Diseño e implementación de servidores, APIs, dominios y seguridad. Tu empresa corre sobre una base sólida y moderna.",
              },
            ].map((s, i) => (
              <div key={i} className="border border-gray-100 rounded-2xl p-8 hover:border-[#2563EB]/30 hover:shadow-sm transition-all">
                <div className="w-12 h-12 bg-[#2563EB]/10 rounded-xl flex items-center justify-center mb-6">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0c2c59] mb-3">{s.titulo}</h3>
                <p className="text-gray-500 leading-relaxed text-sm mb-6">{s.desc}</p>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-[#2563EB] text-sm font-semibold hover:underline">
                  Conversemos →
                </a>
              </div>
            ))}
          </div>

          <div className="bg-[#F9FAFB] rounded-2xl px-8 py-6 flex flex-wrap gap-3 items-center">
            <span className="text-xs text-gray-400 font-semibold uppercase tracking-widest mr-2">También:</span>
            {["Soporte IT Mensual", "Redes y Conectividad", "Seguridad Informática", "Sistemas CCTV", "Venta de Equipos"].map((s) => (
              <span key={s} className="px-4 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-600 font-medium">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. POR QUÉ MAXAN ── */}
      <section id="por-que-maxan" className="py-24 bg-[#F9FAFB]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-[#2563EB] text-sm font-semibold tracking-widest uppercase mb-3">Por qué elegirnos</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0c2c59]">
              No somos una consultora. Hacemos el trabajo.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { icon: <CheckCircle2 size={22} className="text-[#2563EB]" />, titulo: "Hacemos y mantenemos", desc: "No solo consultamos: construimos, implementamos y damos soporte después." },
              { icon: <Layers size={22} className="text-[#2563EB]" />, titulo: "Visión integral", desc: "Infraestructura, software y automatización en una sola empresa." },
              { icon: <Package size={22} className="text-[#2563EB]" />, titulo: "Productos propios", desc: "Desarrollamos nuestro propio software. Sabemos lo que es construir un producto real." },
              { icon: <SlidersHorizontal size={22} className="text-[#2563EB]" />, titulo: "A la medida de tu empresa", desc: "Sin plantillas genéricas. Cada solución parte de entender tu operación." },
            ].map((d, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 bg-[#2563EB]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  {d.icon}
                </div>
                <div>
                  <h3 className="font-bold text-[#0c2c59] mb-1">{d.titulo}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. PORTAFOLIO ── */}
      <section id="portafolio" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-[#2563EB] text-sm font-semibold tracking-widest uppercase mb-3">Portafolio</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0c2c59]">
              Prueba de lo que construimos
            </h2>
          </div>
          <div className="border border-gray-100 rounded-2xl p-8 md:p-12 max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-6">
              {["#Chatbot", "#WhatsApp", "#Automatización", "#SaaS"].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] text-xs font-semibold rounded-full">{tag}</span>
              ))}
            </div>
            <h3 className="text-xl font-bold text-[#0c2c59] mb-4">
              Automatización de atención al cliente para el sector hotelero
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Desarrollamos un chatbot de atención al cliente por WhatsApp para hoteles y alojamientos en Colombia. El sistema responde reservas, preguntas frecuentes y escala a un agente humano cuando es necesario. Construido desde cero, en producción, con clientes reales.
            </p>
          </div>
        </div>
      </section>

      {/* ── 5. CONTACTO ── */}
      <section id="contacto" className="py-24 bg-[#0c2c59]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-[#2563EB] text-sm font-semibold tracking-widest uppercase mb-3">Contacto</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              ¿Listo para que la tecnología trabaje para tu empresa?
            </h2>
            <p className="text-white/50 mt-3 text-lg">Cuéntanos qué necesitas. Sin compromiso.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulario */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="nombre" className="block text-sm font-semibold text-white/70 mb-2">Nombre</label>
                <input
                  type="text" id="nombre" name="nombre"
                  value={formData.nombre} onChange={handleChange} required
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB]/60 focus:border-[#2563EB] transition"
                />
              </div>
              <div>
                <label htmlFor="empresa" className="block text-sm font-semibold text-white/70 mb-2">Empresa</label>
                <input
                  type="text" id="empresa" name="empresa"
                  value={formData.empresa} onChange={handleChange}
                  placeholder="Nombre de tu empresa"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB]/60 focus:border-[#2563EB] transition"
                />
              </div>
              <div>
                <label htmlFor="mensaje" className="block text-sm font-semibold text-white/70 mb-2">¿En qué podemos ayudarte?</label>
                <textarea
                  id="mensaje" name="mensaje"
                  value={formData.mensaje} onChange={handleChange} required
                  rows={5} placeholder="Cuéntanos el reto o proyecto que tienes en mente…"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/30 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#2563EB]/60 focus:border-[#2563EB] transition"
                />
              </div>
              <button
                type="submit" disabled={status === "sending"}
                className="w-full py-3 px-6 bg-[#2563EB] hover:bg-[#1d4fd8] text-white font-bold rounded-full transition-colors disabled:opacity-60"
              >
                {status === "sending" ? "Enviando…" : "Enviar mensaje"}
              </button>
              {status === "ok" && <p className="text-green-400 text-sm text-center">¡Recibido! Te contactamos pronto.</p>}
              {status === "error" && <p className="text-red-400 text-sm text-center">Hubo un error. Escríbenos por WhatsApp.</p>}
            </form>

            {/* Contacto directo */}
            <div className="flex flex-col justify-center space-y-5">
              <a
                href={WA_LINK} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-white/10 border border-white/20 rounded-2xl hover:bg-white/15 transition-all"
              >
                <div className="w-11 h-11 bg-[#25D366]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <WaIcon className="w-6 h-6 text-[#25D366]" />
                </div>
                <div>
                  <p className="text-xs text-white/40 font-semibold uppercase tracking-wider mb-0.5">WhatsApp</p>
                  <p className="text-white font-bold">+57 312 891 9875</p>
                </div>
              </a>
              <a
                href="mailto:hola@maxansistemas.com"
                className="flex items-center gap-4 p-5 bg-white/10 border border-white/20 rounded-2xl hover:bg-white/15 transition-all"
              >
                <div className="w-11 h-11 bg-[#2563EB]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/40 font-semibold uppercase tracking-wider mb-0.5">Correo</p>
                  <p className="text-white font-bold">hola@maxansistemas.com</p>
                </div>
              </a>
              <p className="text-white/30 text-sm leading-relaxed pt-2">
                Respondemos en menos de 24 horas en días hábiles. Para urgencias, el canal más rápido es WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

import { useState } from "react";

const WA_LINK = "https://wa.me/573128919875";

const Contacto = () => {
  const [formData, setFormData] = useState({ nombre: "", empresa: "", mensaje: "" });
  const [status, setStatus] = useState(null); // null | 'sending' | 'ok' | 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: formData.nombre,
          email: formData.empresa, // reutilizamos campo email del backend con "empresa" como identificador
          mensaje: formData.mensaje,
        }),
      });
      if (!res.ok) throw new Error();
      setStatus("ok");
      setFormData({ nombre: "", empresa: "", mensaje: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* Header */}
      <section className="bg-[#0c2c59] pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#2563EB] text-sm font-semibold tracking-widest uppercase mb-4">Contacto</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Cuéntanos qué necesitas
          </h1>
          <p className="text-white/60 text-lg">
            Sin compromiso. Te respondemos rápido.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Formulario */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40 focus:border-[#2563EB] transition"
                  />
                </div>

                <div>
                  <label htmlFor="empresa" className="block text-sm font-semibold text-gray-700 mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    placeholder="Nombre de tu empresa"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40 focus:border-[#2563EB] transition"
                  />
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-semibold text-gray-700 mb-2">
                    ¿En qué podemos ayudarte?
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Cuéntanos el reto o proyecto que tienes en mente…"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40 focus:border-[#2563EB] transition"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-3 px-6 bg-[#0c2c59] hover:bg-[#2563EB] text-white font-bold rounded-full transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Enviando…" : "Enviar mensaje"}
                </button>

                {status === "ok" && (
                  <p className="text-green-600 text-sm text-center">
                    ¡Recibido! Te contactamos pronto.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-600 text-sm text-center">
                    Hubo un error. Escríbenos directamente por WhatsApp.
                  </p>
                )}
              </form>
            </div>

            {/* Info de contacto */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-extrabold text-[#0c2c59] mb-6">
                  O contáctanos directamente
                </h2>
                <div className="space-y-5">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 border border-gray-100 rounded-2xl hover:border-[#25D366]/40 hover:bg-[#25D366]/5 transition-all group"
                  >
                    <div className="w-11 h-11 bg-[#25D366]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 2.124.554 4.122 1.526 5.859L0 24l6.336-1.49A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.88 9.88 0 01-5.017-1.363l-.36-.214-3.732.878.939-3.627-.235-.374A9.861 9.861 0 012.106 12C2.106 6.53 6.53 2.106 12 2.106c5.47 0 9.894 4.424 9.894 9.894 0 5.47-4.424 9.894-9.894 9.894z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-0.5">WhatsApp</p>
                      <p className="text-[#0c2c59] font-bold">+57 312 891 9875</p>
                    </div>
                  </a>

                  <a
                    href="mailto:hola@maxansistemas.com"
                    className="flex items-center gap-4 p-5 border border-gray-100 rounded-2xl hover:border-[#2563EB]/40 hover:bg-[#2563EB]/5 transition-all"
                  >
                    <div className="w-11 h-11 bg-[#2563EB]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-0.5">Correo</p>
                      <p className="text-[#0c2c59] font-bold">hola@maxansistemas.com</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-[#F9FAFB] rounded-2xl p-6">
                <p className="text-sm text-gray-500 leading-relaxed">
                  Respondemos en menos de 24 horas en días hábiles. Para urgencias, el canal más rápido es WhatsApp.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Contacto;

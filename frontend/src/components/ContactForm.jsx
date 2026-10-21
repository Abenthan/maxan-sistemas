import { useRef, useState } from "react";
import { MAIL, waLink } from "../lib/wa";

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

/**
 * Formulario de contacto sin backend: valida en el cliente y abre WhatsApp
 * con el mensaje ya redactado. `tone="dark"` lo usa sobre fondo navy.
 */
export default function ContactForm({ tone = "light" }) {
  const [formData, setFormData] = useState({ nombre: "", empresa: "", mensaje: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const primerErrorRef = useRef(null);

  const dark = tone === "dark";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nextErrors = {};
    if (!formData.nombre.trim()) {
      nextErrors.nombre = "Escribe tu nombre para saber cómo dirigirnos a ti.";
    }
    if (!formData.mensaje.trim()) {
      nextErrors.mensaje = "Cuéntanos brevemente qué necesitas.";
    }
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus(null);
      window.requestAnimationFrame(() => primerErrorRef.current?.focus());
      return;
    }

    const mensaje = [
      `Hola, mi nombre es ${formData.nombre.trim()}.`,
      formData.empresa.trim() ? `Empresa: ${formData.empresa.trim()}.` : "",
      formData.mensaje.trim(),
    ]
      .filter(Boolean)
      .join(" ");

    window.open(waLink(mensaje), "_blank", "noopener");
    setStatus("ok");
  };

  const labelClass = dark ? "field-label text-white/80" : "field-label text-maxan-text-secondary";
  const inputClass = dark
    ? "field-input bg-white/10 border-white/45 text-white placeholder:text-white/60"
    : "field-input";
  const errorClass = dark ? "field-error text-maxan-danger-ink" : "field-error text-maxan-danger";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="contacto-nombre" className={labelClass}>
          Nombre
        </label>
        <input
          type="text"
          id="contacto-nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
          autoComplete="name"
          placeholder="Tu nombre"
          aria-invalid={errors.nombre ? "true" : undefined}
          aria-describedby={errors.nombre ? "contacto-error-nombre" : undefined}
          ref={errors.nombre ? primerErrorRef : undefined}
          className={inputClass}
        />
        {errors.nombre && (
          <p id="contacto-error-nombre" role="alert" className={errorClass}>
            {errors.nombre}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contacto-empresa" className={labelClass}>
          Empresa{" "}
          <span className={dark ? "text-white/60 font-normal" : "text-maxan-text-muted font-normal"}>
            (opcional)
          </span>
        </label>
        <input
          type="text"
          id="contacto-empresa"
          name="empresa"
          value={formData.empresa}
          onChange={handleChange}
          autoComplete="organization"
          placeholder="Nombre de tu empresa"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="contacto-mensaje" className={labelClass}>
          ¿En qué podemos ayudarte?
        </label>
        <textarea
          id="contacto-mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Cuéntanos el reto o proyecto que tienes en mente…"
          aria-invalid={errors.mensaje ? "true" : undefined}
          aria-describedby={errors.mensaje ? "contacto-error-mensaje" : undefined}
          ref={errors.mensaje ? primerErrorRef : undefined}
          className={`${inputClass} resize-none`}
        />
        {errors.mensaje && (
          <p id="contacto-error-mensaje" role="alert" className={errorClass}>
            {errors.mensaje}
          </p>
        )}
      </div>

      <button type="submit" className="btn btn-whatsapp w-full">
        <WaIcon />
        Enviar por WhatsApp
      </button>

      <p role="status" aria-live="polite" className={`text-sm min-h-5 ${dark ? "text-white/80" : "text-maxan-text-secondary"}`}>
        {status === "ok" &&
          `Abrimos WhatsApp con tu mensaje. Si no se abrió, escríbenos a ${MAIL}.`}
      </p>
    </form>
  );
}

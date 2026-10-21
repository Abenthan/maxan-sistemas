import { useState, useEffect, useCallback, useRef } from "react";
import { Video, Clock, ChevronRight, CheckCircle, ChevronDown } from "lucide-react";
import { waLink } from "../lib/wa";
import { useSeo, ogImage } from "../lib/seo";

const TIPOS_PROYECTO = [
  "Me interesa el chatbot",
  "Quiero automatizar un proceso",
  "Necesito desarrollar un software a la medida",
  "Busco soporte IT mensual para mi empresa",
  "Tengo otro proyecto tecnológico",
];

const COUNTRIES = [
  { name: "Colombia", dial: "+57" },
  { name: "Argentina", dial: "+54" },
  { name: "Bolivia", dial: "+591" },
  { name: "Brasil", dial: "+55" },
  { name: "Chile", dial: "+56" },
  { name: "Costa Rica", dial: "+506" },
  { name: "Cuba", dial: "+53" },
  { name: "Ecuador", dial: "+593" },
  { name: "El Salvador", dial: "+503" },
  { name: "España", dial: "+34" },
  { name: "Estados Unidos", dial: "+1" },
  { name: "Guatemala", dial: "+502" },
  { name: "Honduras", dial: "+504" },
  { name: "México", dial: "+52" },
  { name: "Nicaragua", dial: "+505" },
  { name: "Panamá", dial: "+507" },
  { name: "Paraguay", dial: "+595" },
  { name: "Perú", dial: "+51" },
  { name: "Rep. Dominicana", dial: "+1809" },
  { name: "Uruguay", dial: "+598" },
  { name: "Venezuela", dial: "+58" },
];

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

const PASOS = [
  { num: 1, titulo: "Tu información" },
  { num: 2, titulo: "Elige tu horario" },
];

function MeetingHeader() {
  return (
    <div className="flex flex-wrap items-center gap-3 mb-8 p-4 rounded-maxan-lg bg-maxan-navy border border-white/20">
      <div className="flex items-center gap-2">
        <Video size={20} className="text-maxan-primary-ink" aria-hidden="true" />
        <span className="font-semibold text-white">
          Reunión Comercial · Maxan Sistemas
        </span>
      </div>
      <div className="flex items-center gap-4 text-sm text-white/80 ml-auto">
        <span className="flex items-center gap-1">
          <Clock size={16} aria-hidden="true" /> 30 min
        </span>
        <span>Google Meet</span>
      </div>
    </div>
  );
}

function ProgressBar({ step }) {
  return (
    <ol className="flex items-center gap-3 mb-8" aria-label="Pasos de la reserva">
      {PASOS.map((p, i) => (
        <li key={p.num} className="flex items-center gap-3">
          {i > 0 && (
            <span
              className={`flex-1 h-px w-8 sm:w-20 ${
                step >= p.num ? "bg-maxan-primary" : "bg-white/25"
              }`}
              aria-hidden="true"
            />
          )}
          <span
            className={`flex items-center gap-2 text-sm font-medium ${
              step >= p.num ? "text-maxan-primary-ink" : "text-white/60"
            }`}
            aria-current={step === p.num ? "step" : undefined}
          >
            <span
              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border-2 ${
                step >= p.num
                  ? "bg-maxan-primary border-maxan-primary text-white"
                  : "border-white/40 text-white/70"
              }`}
              aria-hidden="true"
            >
              {p.num}
            </span>
            <span className="hidden sm:inline">{p.titulo}</span>
          </span>
        </li>
      ))}
    </ol>
  );
}

function FormularioCalificacion({ onSubmit }) {
  const [data, setData] = useState({
    nombre: "",
    countryDial: "+57",
    phoneNumber: "",
    email: "",
    tipo: "",
    descripcion: "",
  });
  const [errors, setErrors] = useState({});
  const primerErrorRef = useRef(null);
  const formRef = useRef(null);

  const validate = () => {
    const e = {};
    if (!data.nombre.trim()) e.nombre = "El nombre es requerido.";
    if (!data.phoneNumber.trim()) {
      e.phoneNumber = "El número de WhatsApp es requerido.";
    } else if (!/^[0-9]{7,15}$/.test(data.phoneNumber.trim())) {
      e.phoneNumber = "Ingresa solo los dígitos del número, sin espacios ni guiones.";
    } else if (data.countryDial === "+57" && data.phoneNumber.trim().length !== 10) {
      e.phoneNumber = "Para Colombia ingresa 10 dígitos. Ejemplo: 3001234567";
    }
    if (!data.tipo) e.tipo = "Selecciona el tipo de proyecto.";
    if (!data.descripcion.trim()) e.descripcion = "La descripción es requerida.";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((d) => ({ ...d, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      window.requestAnimationFrame(() => primerErrorRef.current?.focus());
      return;
    }
    onSubmit({
      ...data,
      whatsapp: data.countryDial + data.phoneNumber.trim(),
    });
  };

  const inputClass = (field) =>
    `field-input bg-white/10 border-white/45 text-white placeholder:text-white/60 ${
      errors[field] ? "border-maxan-danger-ink" : ""
    }`;

  const labelClass = "field-label text-white/80";

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="agenda-nombre" className={labelClass}>
          Nombre completo <span aria-hidden="true">*</span>
        </label>
        <input
          type="text"
          id="agenda-nombre"
          name="nombre"
          value={data.nombre}
          onChange={handleChange}
          placeholder="¿Cómo te llamamos?"
          autoComplete="name"
          required
          aria-invalid={errors.nombre ? "true" : undefined}
          aria-describedby={errors.nombre ? "agenda-error-nombre" : undefined}
          ref={errors.nombre ? primerErrorRef : undefined}
          className={inputClass("nombre")}
        />
        {errors.nombre && (
          <p id="agenda-error-nombre" role="alert" className="field-error text-maxan-danger-ink">
            {errors.nombre}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="agenda-telefono" className={labelClass}>
          WhatsApp <span aria-hidden="true">*</span>
        </label>
        <div className="flex gap-2">
          <div className="relative flex-shrink-0">
            <label htmlFor="agenda-pais" className="sr-only">
              País o prefijo del número de WhatsApp
            </label>
            <select
              id="agenda-pais"
              name="countryDial"
              value={data.countryDial}
              onChange={handleChange}
              className={`appearance-none bg-white/10 border border-white/45 rounded-maxan-md pl-3 pr-8 py-3 text-white min-h-11 ${
                errors.phoneNumber ? "border-maxan-danger-ink" : ""
              }`}
            >
              {COUNTRIES.map((c) => (
                <option key={c.dial + c.name} value={c.dial}>
                  {c.name} ({c.dial})
                </option>
              ))}
            </select>
            <ChevronDown
              size={16}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-white/80 pointer-events-none"
              aria-hidden="true"
            />
          </div>
          <input
            type="tel"
            id="agenda-telefono"
            name="phoneNumber"
            value={data.phoneNumber}
            onChange={handleChange}
            placeholder="3001234567"
            autoComplete="tel-national"
            required
            aria-invalid={errors.phoneNumber ? "true" : undefined}
            aria-describedby={
              errors.phoneNumber ? "agenda-error-telefono" : "agenda-hint-telefono"
            }
            ref={errors.phoneNumber ? primerErrorRef : undefined}
            className={`flex-1 ${inputClass("phoneNumber")}`}
          />
        </div>
        {errors.phoneNumber ? (
          <p id="agenda-error-telefono" role="alert" className="field-error text-maxan-danger-ink">
            {errors.phoneNumber}
          </p>
        ) : (
          <p id="agenda-hint-telefono" className="field-hint text-white/70">
            Solo los dígitos, sin espacios ni guiones
          </p>
        )}
      </div>

      <div>
        <label htmlFor="agenda-email" className={labelClass}>
          Email{" "}
          <span className="text-white/60 font-normal">(opcional)</span>
        </label>
        <input
          type="email"
          id="agenda-email"
          name="email"
          value={data.email}
          onChange={handleChange}
          placeholder="tu@empresa.com"
          autoComplete="email"
          className={inputClass("email")}
        />
      </div>

      <div>
        <label htmlFor="agenda-tipo" className={labelClass}>
          ¿Qué necesitas? <span aria-hidden="true">*</span>
        </label>
        <select
          id="agenda-tipo"
          name="tipo"
          value={data.tipo}
          onChange={handleChange}
          required
          aria-invalid={errors.tipo ? "true" : undefined}
          aria-describedby={errors.tipo ? "agenda-error-tipo" : undefined}
          ref={errors.tipo ? primerErrorRef : undefined}
          className={`${inputClass("tipo")} appearance-none`}
        >
          <option value="" disabled>
            Selecciona una opción...
          </option>
          {TIPOS_PROYECTO.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        {errors.tipo && (
          <p id="agenda-error-tipo" role="alert" className="field-error text-maxan-danger-ink">
            {errors.tipo}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="agenda-descripcion" className={labelClass}>
          Cuéntanos más <span aria-hidden="true">*</span>
          <span
            className={`ml-2 font-normal text-xs ${
              data.descripcion.length > 280 ? "text-amber-300" : "text-white/70"
            }`}
          >
            {data.descripcion.length}/300
          </span>
        </label>
        <textarea
          id="agenda-descripcion"
          name="descripcion"
          value={data.descripcion}
          onChange={handleChange}
          maxLength={300}
          rows={4}
          placeholder="¿Qué proceso quieres mejorar o qué problema estás tratando de resolver?"
          required
          aria-invalid={errors.descripcion ? "true" : undefined}
          aria-describedby={errors.descripcion ? "agenda-error-descripcion" : undefined}
          ref={errors.descripcion ? primerErrorRef : undefined}
          className={`${inputClass("descripcion")} resize-none`}
        />
        {errors.descripcion && (
          <p
            id="agenda-error-descripcion"
            role="alert"
            className="field-error text-maxan-danger-ink"
          >
            {errors.descripcion}
          </p>
        )}
      </div>

      <button type="submit" className="btn btn-primary w-full">
        Ver horarios disponibles
        <ChevronRight size={18} aria-hidden="true" />
      </button>
    </form>
  );
}

function CalEmbed({ onBooked, formData }) {
  useEffect(() => {
    const initCal = () => {
      window.Cal("inline", {
        elementOrSelector: "#cal-booking-placeholder",
        calLink: "maxansistemas/reunion-comercial",
        layout: "month_view",
        config: {
          name: formData?.nombre || "",
          email: formData?.email || "",
          notes: [
            formData?.tipo ? `Tipo de proyecto: ${formData.tipo}` : "",
            formData?.descripcion || "",
          ]
            .filter(Boolean)
            .join("\n"),
        },
      });
      window.Cal("on", {
        action: "bookingSuccessful",
        callback: () => onBooked(),
      });
    };

    if (window.Cal) {
      initCal();
    } else {
      const interval = setInterval(() => {
        if (window.Cal) {
          clearInterval(interval);
          initCal();
        }
      }, 200);
      return () => clearInterval(interval);
    }
  }, [onBooked, formData]);

  return (
    <div
      id="cal-booking-placeholder"
      style={{ width: "100%", minHeight: "600px" }}
      className="rounded-maxan-lg overflow-hidden bg-white"
    />
  );
}

function Confirmacion({ nombre }) {
  const enlace = waLink(
    `Hola, acabo de agendar una reunión con Maxan Sistemas. Mi nombre es ${nombre}.`
  );

  return (
    <div className="text-center py-10">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-maxan-primary/20 mb-6">
        <CheckCircle size={36} className="text-maxan-primary-ink" aria-hidden="true" />
      </div>
      <h2 className="text-2xl font-bold text-white mb-2">¡Listo, {nombre}!</h2>
      <p className="text-lg font-semibold text-maxan-primary-ink mb-4">
        Tu reunión está agendada.
      </p>
      <p className="text-white/80 text-sm max-w-xs mx-auto mb-8 leading-relaxed">
        Recibirás el link de Google Meet por WhatsApp o email antes de la reunión.
      </p>
      <a
        href={enlace}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-whatsapp"
      >
        <WaIcon />
        Confirmar por WhatsApp
      </a>
    </div>
  );
}

export default function Agenda() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(null);
  const headingRef = useRef(null);

  useSeo({
    title: "Agenda una reunión comercial | Maxan Sistemas",
    description:
      "Reserva una reunión comercial de 30 minutos con Maxan Sistemas por Google Meet. Cuéntanos tu proyecto y elige el horario disponible.",
    path: "/agenda",
    image: ogImage("og-maxan-agenda.jpg"),
  });

  useEffect(() => {
    headingRef.current?.focus();
  }, [step]);

  const handleFormSubmit = (data) => {
    setFormData(data);
    setStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBooked = useCallback(() => {
    setStep(3);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const pasoActual = step === 1 ? PASOS[0].titulo : step === 2 ? PASOS[1].titulo : "Confirmación";

  return (
    <div className="relative min-h-screen bg-maxan-navy-900 pt-24 pb-16 px-4 overflow-hidden">
      <img
        src="/images/hero-agenda.jpg"
        alt=""
        aria-hidden="true"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-[75%_center]"
      />
      <div className="absolute inset-0 bg-maxan-navy-900/85" />
      <div className="relative z-10 max-w-xl mx-auto">
        <MeetingHeader />

        {step < 3 && <ProgressBar step={step} />}

        <p aria-live="polite" className="sr-only">
          {`Paso ${step} de 3: ${pasoActual}`}
        </p>

        {step === 1 && (
          <>
            <h1
              ref={headingRef}
              tabIndex={-1}
              className="text-2xl font-bold text-white mb-2 focus:outline-none"
            >
              Reserva tu reunión
            </h1>
            <p className="text-white/80 text-sm mb-8">
              Cuéntanos qué necesitas — elige el horario en el siguiente paso.
            </p>
            <FormularioCalificacion onSubmit={handleFormSubmit} />
          </>
        )}

        {step === 2 && (
          <>
            <h2
              ref={headingRef}
              tabIndex={-1}
              className="text-xl font-bold text-white mb-2 focus:outline-none"
            >
              Elige tu horario
            </h2>
            <p className="text-white/80 text-sm mb-6">
              Horarios en zona horaria Colombia (GMT-5).
            </p>
            <CalEmbed onBooked={handleBooked} formData={formData} />
          </>
        )}

        {step === 3 && (
          <div ref={headingRef} tabIndex={-1} className="focus:outline-none">
            <Confirmacion nombre={formData?.nombre || "tú"} />
          </div>
        )}
      </div>
    </div>
  );
}

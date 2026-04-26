import { useState, useEffect, useCallback } from "react";
import { Video, Clock, ChevronRight, CheckCircle, ChevronDown } from "lucide-react";

const WA_NUMBER = "573128919875";

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
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.374 0 0 5.373 0 12c0 2.124.554 4.122 1.526 5.859L0 24l6.336-1.49A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.88 9.88 0 01-5.017-1.363l-.36-.214-3.732.878.939-3.627-.235-.374A9.861 9.861 0 012.106 12C2.106 6.53 6.53 2.106 12 2.106c5.47 0 9.894 4.424 9.894 9.894 0 5.47-4.424 9.894-9.894 9.894z" />
  </svg>
);

function MeetingHeader() {
  return (
    <div className="flex flex-wrap items-center gap-3 mb-8 p-4 rounded-xl bg-[#161920] border border-[#c8a96e]/20">
      <div className="flex items-center gap-2">
        <Video className="w-5 h-5 text-[#c8a96e]" />
        <span className="font-semibold text-[#f0ede8]">Reunión Comercial · Maxan Sistemas</span>
      </div>
      <div className="flex items-center gap-4 text-sm text-[#f0ede8]/50 ml-auto">
        <span className="flex items-center gap-1">
          <Clock className="w-4 h-4" /> 30 min
        </span>
        <span>Google Meet</span>
      </div>
    </div>
  );
}

function ProgressBar({ step }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className={`flex items-center gap-2 text-sm font-medium ${step >= 1 ? "text-[#c8a96e]" : "text-[#f0ede8]/40"}`}>
        <span
          className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border-2 ${
            step >= 1 ? "bg-[#c8a96e] border-[#c8a96e] text-[#0d0f14]" : "border-[#f0ede8]/30 text-[#f0ede8]/40"
          }`}
        >
          1
        </span>
        <span className="hidden sm:inline">Tu información</span>
      </div>
      <div className={`flex-1 h-px ${step >= 2 ? "bg-[#c8a96e]" : "bg-[#f0ede8]/15"}`} />
      <div className={`flex items-center gap-2 text-sm font-medium ${step >= 2 ? "text-[#c8a96e]" : "text-[#f0ede8]/40"}`}>
        <span
          className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border-2 ${
            step >= 2 ? "bg-[#c8a96e] border-[#c8a96e] text-[#0d0f14]" : "border-[#f0ede8]/30 text-[#f0ede8]/40"
          }`}
        >
          2
        </span>
        <span className="hidden sm:inline">Elige tu horario</span>
      </div>
    </div>
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
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    onSubmit({
      ...data,
      whatsapp: data.countryDial + data.phoneNumber.trim(),
    });
  };

  const inputBase =
    "w-full bg-[#0d0f14] border rounded-lg px-4 py-3 text-[#f0ede8] placeholder-[#f0ede8]/25 focus:outline-none transition-colors";
  const inputClass = (field) =>
    `${inputBase} ${errors[field] ? "border-red-500 focus:border-red-400" : "border-[#f0ede8]/15 focus:border-[#c8a96e]"}`;

  const hasPhoneError = errors.phoneNumber;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-[#f0ede8]/60 mb-1.5">
          Nombre completo <span className="text-[#c8a96e]">*</span>
        </label>
        <input
          type="text"
          name="nombre"
          value={data.nombre}
          onChange={handleChange}
          placeholder="¿Cómo te llamamos?"
          className={inputClass("nombre")}
        />
        {errors.nombre && <p className="mt-1.5 text-xs text-red-400">{errors.nombre}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-[#f0ede8]/60 mb-1.5">
          WhatsApp <span className="text-[#c8a96e]">*</span>
        </label>
        <div className="flex gap-2">
          <div className="relative flex-shrink-0">
            <select
              name="countryDial"
              value={data.countryDial}
              onChange={handleChange}
              className={`appearance-none bg-[#0d0f14] border rounded-lg pl-3 pr-8 py-3 text-[#f0ede8] focus:outline-none transition-colors ${
                hasPhoneError ? "border-red-500 focus:border-red-400" : "border-[#f0ede8]/15 focus:border-[#c8a96e]"
              }`}
            >
              {COUNTRIES.map((c) => (
                <option key={c.dial + c.name} value={c.dial}>
                  {c.name} ({c.dial})
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-[#f0ede8]/40 pointer-events-none" />
          </div>
          <input
            type="tel"
            name="phoneNumber"
            value={data.phoneNumber}
            onChange={handleChange}
            placeholder="3001234567"
            className={`flex-1 bg-[#0d0f14] border rounded-lg px-4 py-3 text-[#f0ede8] placeholder-[#f0ede8]/25 focus:outline-none transition-colors ${
              hasPhoneError ? "border-red-500 focus:border-red-400" : "border-[#f0ede8]/15 focus:border-[#c8a96e]"
            }`}
          />
        </div>
        {hasPhoneError ? (
          <p className="mt-1.5 text-xs text-red-400">{errors.phoneNumber}</p>
        ) : (
          <p className="mt-1.5 text-xs text-[#f0ede8]/25">Solo los dígitos, sin espacios ni guiones</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-[#f0ede8]/60 mb-1.5">
          Email <span className="text-[#f0ede8]/30 font-normal">(opcional)</span>
        </label>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          placeholder="tu@empresa.com"
          className={inputClass("email")}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#f0ede8]/60 mb-1.5">
          ¿Qué necesitas? <span className="text-[#c8a96e]">*</span>
        </label>
        <select
          name="tipo"
          value={data.tipo}
          onChange={handleChange}
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
        {errors.tipo && <p className="mt-1.5 text-xs text-red-400">{errors.tipo}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-[#f0ede8]/60 mb-1.5">
          Cuéntanos más <span className="text-[#c8a96e]">*</span>
          <span
            className={`ml-2 font-normal text-xs ${
              data.descripcion.length > 280 ? "text-amber-400" : "text-[#f0ede8]/25"
            }`}
          >
            {data.descripcion.length}/300
          </span>
        </label>
        <textarea
          name="descripcion"
          value={data.descripcion}
          onChange={handleChange}
          maxLength={300}
          rows={4}
          placeholder="¿Qué proceso quieres mejorar o qué problema estás tratando de resolver?"
          className={`${inputClass("descripcion")} resize-none`}
        />
        {errors.descripcion && <p className="mt-1.5 text-xs text-red-400">{errors.descripcion}</p>}
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-[#c8a96e] hover:bg-[#b8955a] text-[#0d0f14] font-bold py-3.5 px-6 rounded-lg transition-colors mt-2"
      >
        Ver horarios disponibles <ChevronRight className="w-5 h-5" />
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
      className="rounded-xl overflow-hidden"
    />
  );
}

function Confirmacion({ nombre }) {
  const waMessage = encodeURIComponent(
    `Hola, acabo de agendar una reunión con Maxan Sistemas. Mi nombre es ${nombre}.`
  );
  const waLink = `https://wa.me/${WA_NUMBER}?text=${waMessage}`;

  return (
    <div className="text-center py-10">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#c8a96e]/15 mb-6">
        <CheckCircle className="w-9 h-9 text-[#c8a96e]" />
      </div>
      <h2 className="text-2xl font-bold text-[#f0ede8] mb-2">
        ¡Listo, {nombre}!
      </h2>
      <p className="text-lg font-semibold text-[#c8a96e] mb-4">Tu reunión está agendada.</p>
      <p className="text-[#f0ede8]/50 text-sm max-w-xs mx-auto mb-8 leading-relaxed">
        Recibirás el link de Google Meet por WhatsApp o email antes de la reunión.
      </p>
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20c05c] text-white font-bold py-3.5 px-6 rounded-lg transition-colors"
      >
        <WaIcon className="w-5 h-5" />
        Confirmar por WhatsApp
      </a>
    </div>
  );
}

export default function Agenda() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
    setStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBooked = useCallback(() => {
    setStep(3);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-[#0d0f14] pt-24 pb-16 px-4">
      <div className="max-w-xl mx-auto">
        <MeetingHeader />

        {step < 3 && <ProgressBar step={step} />}

        {step === 1 && (
          <>
            <h1 className="text-2xl font-bold text-[#f0ede8] mb-2">Reserva tu reunión</h1>
            <p className="text-[#f0ede8]/40 text-sm mb-8">
              Cuéntanos qué necesitas — elige el horario en el siguiente paso.
            </p>
            <FormularioCalificacion onSubmit={handleFormSubmit} />
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-xl font-bold text-[#f0ede8] mb-2">Elige tu horario</h2>
            <p className="text-[#f0ede8]/40 text-sm mb-6">
              Horarios en zona horaria Colombia (GMT-5).
            </p>
            <CalEmbed onBooked={handleBooked} formData={formData} />
          </>
        )}

        {step === 3 && <Confirmacion nombre={formData?.nombre || "Tú"} />}
      </div>
    </div>
  );
}

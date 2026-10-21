import { useMemo } from "react";
import ContactForm from "../components/ContactForm";
import { WA_DISPLAY, WA_LINK, MAIL, MAIL_LINK } from "../lib/wa";
import { useSeo } from "../lib/seo";

const WaIcon = ({ className = "w-6 h-6" }) => (
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

export default function Contacto() {
  const jsonLd = useMemo(
    () => [
      {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contacto",
        description:
          "Contacto directo con Maxan Sistemas: WhatsApp, correo electrónico y formulario de contacto.",
        url: "https://maxansistemas.com/contacto",
        inLanguage: "es-CO",
      },
    ],
    []
  );

  useSeo({
    title: "Contacto | Maxan Sistemas",
    description:
      "Escríbenos por WhatsApp al +57 313 485 0115 o por correo a hola@maxansistemas.com. Respondemos en menos de 24 horas en días hábiles.",
    path: "/contacto",
    jsonLd,
  });

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-maxan-navy pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="eyebrow eyebrow-light mb-4">Contacto</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Cuéntanos qué necesitas
          </h1>
          <p className="text-white/80 text-lg">
            Sin compromiso. Te respondemos rápido.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Formulario */}
            <div>
              <h2 className="text-xl font-extrabold text-maxan-navy mb-2">
                Envíanos tu mensaje
              </h2>
              <p className="prose-body mb-8">
                Al enviar se abre WhatsApp con tu mensaje ya redactado. También
                puedes escribirnos directo por correo.
              </p>
              <ContactForm />
            </div>

            {/* Info de contacto */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-extrabold text-maxan-navy mb-6">
                  O contáctanos directamente
                </h2>
                <div className="space-y-5">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 border border-maxan-border rounded-maxan-lg hover:border-whatsapp-dark transition-colors"
                  >
                    <div className="w-11 h-11 bg-whatsapp-soft rounded-maxan-md flex items-center justify-center flex-shrink-0">
                      <WaIcon className="w-6 h-6 text-whatsapp-ink" />
                    </div>
                    <div>
                      <p className="text-xs text-maxan-text-muted font-semibold uppercase tracking-wide mb-0.5">
                        WhatsApp
                      </p>
                      <p className="text-maxan-navy font-bold">{WA_DISPLAY}</p>
                    </div>
                  </a>

                  <a
                    href={MAIL_LINK}
                    className="flex items-center gap-4 p-5 border border-maxan-border rounded-maxan-lg hover:border-maxan-primary transition-colors"
                  >
                    <div className="w-11 h-11 bg-maxan-primary-soft rounded-maxan-md flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-maxan-primary"
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
                      <p className="text-xs text-maxan-text-muted font-semibold uppercase tracking-wide mb-0.5">
                        Correo
                      </p>
                      <p className="text-maxan-navy font-bold">{MAIL}</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-maxan-bg rounded-maxan-lg p-6">
                <p className="text-sm text-maxan-text-secondary leading-relaxed">
                  Respondemos en menos de 24 horas en días hábiles. Para urgencias, el
                  canal más rápido es WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

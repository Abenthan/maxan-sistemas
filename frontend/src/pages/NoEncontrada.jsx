import { Link } from "react-router-dom";
import { useSeo } from "../lib/seo";
import { WA_LINK } from "../lib/wa";

export default function NoEncontrada() {
  useSeo({
    title: "Página no encontrada | Maxan Sistemas",
    description:
      "La página que buscas no existe o cambió de dirección. Vuelve al inicio de Maxan Sistemas o contáctanos por WhatsApp.",
    path: "/404",
  });

  return (
    <section className="bg-maxan-navy text-white">
      <div className="max-w-6xl mx-auto px-6 py-28">
        <p className="eyebrow eyebrow-light mb-4">Error 404</p>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-2xl">
          Esta página no existe o cambió de dirección.
        </h1>
        <p className="mt-5 text-lg text-white/70 max-w-xl leading-relaxed">
          Puede que el enlace esté equivocado. Desde aquí puedes volver al inicio
          o hablar directamente con un asesor.
        </p>
        <div className="mt-9 flex flex-col sm:flex-row gap-4">
          <Link to="/" className="btn btn-primary">
            Volver al inicio
          </Link>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-light"
          >
            Escribir por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

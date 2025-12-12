import React from "react";
import { Link } from "react-router-dom";

export default function Inicio() {
  return (
    <div className="w-full min-h-screen flex flex-col text-gray-900">
      {/* HERO */}
      <section
        className="relative h-[90vh] flex items-center text-left"
        style={{
          backgroundImage: "url('/images/Hero1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50">
        </div>
        <div className="relative z-10 max-w-3xl px-4 ">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Equipos al mejor precio,{" "}
            <span className="text-[#00B4D8]">servicios con la más alta calidad</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200">
            Innovación, confianza y tecnología a tu alcance.  
            Maxan Sistemas, tu aliado estratégico en soluciones informáticas.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/servicios"
              className="px-8 py-3 rounded-full bg-[#004AAD] hover:bg-[#003680] text-white font-semibold transition"
            >
              Conoce nuestros servicios
            </Link>
            <Link
              to="/tienda"
              className="px-8 py-3 rounded-full border border-white text-white font-semibold hover:bg-white hover:text-[#004AAD] transition"
            >
              Tienda virtual
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

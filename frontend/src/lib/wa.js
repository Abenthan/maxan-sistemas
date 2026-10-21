/**
 * Canal de contacto de Maxan Sistemas.
 * Fuente única de verdad del número: cambiarlo aquí y en ningún otro lado.
 * El mismo número aparece en el membrute de los reportes del ERP
 * (maxan-erp/frontend/src/lib/reportes.ts).
 */
export const WA_NUMBER = "573134850115";
export const WA_DISPLAY = "+57 313 485 0115";
export const WA_LINK = `https://wa.me/${WA_NUMBER}`;

export const MAIL = "hola@maxansistemas.com";
export const MAIL_LINK = `mailto:${MAIL}`;

/** Enlace de WhatsApp con mensaje precargado. */
export const waLink = (message = "") =>
  message ? `${WA_LINK}?text=${encodeURIComponent(message)}` : WA_LINK;

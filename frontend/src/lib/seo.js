import { useEffect } from "react";

export const SITE_URL = "https://maxansistemas.com";
export const SITE_NAME = "Maxan Sistemas";

/** Imagen social por defecto (tarjeta 1200 × 630 JPG: los bots no leen WebP). */
export const OG_IMAGE = `${SITE_URL}/images/og-maxan.jpg`;

/** Helper para apuntar la imagen social de cada ruta a su propia tarjeta. */
export const ogImage = (file) => `${SITE_URL}/images/${file}`;

const DEFAULT_TITLE = "Maxan Sistemas — Tecnología para PYMES colombianas";
const DEFAULT_DESCRIPTION =
  "Construimos la tecnología que hace crecer tu empresa: soporte IT mensual, desarrollo de software y automatización para PYMES colombianas.";

function setMeta(selector, attrs) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));
}

function setCanonical(url) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    document.head.appendChild(el);
  }
  el.setAttribute("rel", "canonical");
  el.setAttribute("href", url);
}

/**
 * Metadatos por ruta (SPA): title, description, canonical, Open Graph,
 * Twitter Card y JSON-LD específico de la página.
 *
 * @param {object} options
 * @param {string} [options.title]
 * @param {string} [options.description]
 * @param {string} [options.path]      ruta con prefijo "/", p. ej. "/servicios"
 * @param {string} [options.image]     URL absoluta de la imagen social
 * @param {Array}  [options.jsonLd]    objetos schema.org de la página
 */
export function useSeo({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  image = OG_IMAGE,
  jsonLd = [],
} = {}) {
  useEffect(() => {
    const url = `${SITE_URL}${path === "/" ? "" : path}`;

    document.title = title;

    setMeta('meta[name="description"]', {
      name: "description",
      content: description,
    });
    setMeta('meta[name="robots"]', {
      name: "robots",
      content: "index, follow",
    });
    setMeta('meta[property="og:title"]', {
      property: "og:title",
      content: title,
    });
    setMeta('meta[property="og:description"]', {
      property: "og:description",
      content: description,
    });
    setMeta('meta[property="og:url"]', { property: "og:url", content: url });
    setMeta('meta[property="og:image"]', {
      property: "og:image",
      content: image,
    });
    setMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });
    setMeta('meta[name="twitter:title"]', { name: "twitter:title", content: title });
    setMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: description,
    });
    setMeta('meta[name="twitter:image"]', {
      name: "twitter:image",
      content: image,
    });

    setCanonical(url);

    document
      .querySelectorAll("script[data-seo-jsonld]")
      .forEach((node) => node.remove());

    jsonLd.forEach((data) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.seoJsonld = "true";
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
    });
  }, [title, description, path, image, jsonLd]);
}

/** Grafo de navegación entre las páginas internas del sitio. */
export function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

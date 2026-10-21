# Contexto del proyecto: maxanSistemas.com

Web corporativa de **Maxan Sistemas** (empresa colombiana de servicios TI).
SPA **frontend-only**: el backend Node/Express/MySQL se eliminó y no hay API
activa. GitHub `Abenthan/maxan-sistemas`, rama `main`.

---

## Propósito

Presentar los servicios de Maxan (soporte IT, software a la medida,
automatización, nube) y convertir visitas en contactos por WhatsApp o email.

Público: PYMES colombianas. Idioma: español de Colombia (`lang="es-CO"`).

---

## Regla de documentación

Antes de tocar este proyecto:

1. leer `../diseño.md` — **fuente de verdad del diseño de todo el ecosistema
   Maxan** (paleta, tokens, tipografía, componentes, accesibilidad);
2. leer `../README.md` — mapa del ecosistema y relación con ERP/Auth/Tienda;
3. leer este `AGENTS.md`;
4. revisar `frontend/src/` antes de crear componentes nuevos.

Si una tarea introduce o cambia un patrón visual compartido, **actualizar
`../diseño.md` en la misma tarea** (regla de `diseño.md` §13 y §14).

Skills disponibles en `.agents/skills/` (instaladas en este repo, usar antes de
implementar UI, a11y o SEO):

| Skill | Ruta | Cuándo usarla |
|---|---|---|
| `frontend-design` | `.agents/skills/frontend-design/SKILL.md` | jerarquía visual, layout, componentes |
| `accessibility` | `.agents/skills/accessibility/SKILL.md` (+ `references/WCAG.md`, `A11Y-PATTERNS.md`) | teclado, foco, contraste, ARIA |
| `seo` | `.agents/skills/seo/SKILL.md` (+ `references/STRUCTURED-DATA.md`) | meta, canonical, JSON-LD, sitemap |

---

## Estado actual

Última revisión (2026-10-21): normalización de diseño, accesibilidad, SEO e
infraestructura. Ver "Trabajo reciente" al final.

- SPA con **6 rutas reales** (antes era todo un `catch-all` a `Inicio`).
- Sistema de tokens `--maxan-*` en `frontend/src/index.css` (Tailwind v4 `@theme`).
- Formulario de contacto **sin backend**: valida en cliente y abre WhatsApp con
  el mensaje redactado (antes hacía `POST /api/contact` inexistente).
- `/agenda` repintada de la identidad negro/dorado a navy + azul de marca.
- SEO por ruta: canonical, OG, Twitter, JSON-LD, `robots.txt`, `sitemap.xml`.
- Lighthouse **100 / 100** en accesibilidad y SEO en las 5 rutas públicas.

---

## Stack

| Capa | Tecnología |
|---|---|
| UI | React 18.3, react-router-dom 7, lucide-react |
| Build | Vite 5 + `@vitejs/plugin-react-swc` |
| Estilos | Tailwind CSS 4 (`@tailwindcss/vite`, sin `tailwind.config.js`) |
| Servidor | Nginx (docker) detrás de Caddy |
| Extra | Cal.com embebido (`/agenda`), `@n8n/chat` **instalado pero no montado** |

Sin tests. La verificación es `npm run lint` + `npm run build` + Lighthouse.

---

## Comandos

Todos desde `frontend/`:

```bash
npm install
npm run dev        # http://localhost:5176  (puerto fijo: strictPort)
npm run build      # → dist/
npm run preview    # sirve dist/
npm run lint       # ESLint, 0 warnings permitidos (--max-warnings 0)
```

Desde la raíz del repo:

```bash
docker compose up -d --build maxan-web-frontend   # → http://127.0.0.1:4000
```

Lighthouse (requiere el preview en marcha):

```bash
npx lighthouse http://localhost:4173/ --only-categories=accessibility,seo \
  --chrome-flags="--headless=new --no-sandbox"
```

---

## Estructura

```
maxanSistemas.com/
├── AGENTS.md                  este archivo
├── CLAUDE.md                  guía equivalente para Claude Code
├── README.md                  (raíz del ecosistema) — ver ../README.md
├── docker-compose.yml         servicio maxan-web-frontend → 127.0.0.1:4000
└── frontend/
    ├── index.html             lang es-CO, canonical, OG/Twitter, JSON-LD estático
    ├── nginx.conf             gzip, cabeceras de seguridad, caché, SPA fallback
    ├── Dockerfile             node:20-alpine → npm ci → nginx:alpine
    ├── public/
    │   ├── robots.txt
    │   ├── sitemap.xml
    │   ├── site.webmanifest     PWA: nombre, colores e iconos 192/512
    │   ├── favicon.ico / favicon-16.png / favicon-32.png
    │   ├── apple-touch-icon.png / icon-192.png / icon-512.png
    │   ├── Logo-FAVICON.svg     marca oficial (favicon vectorial)
    │   └── images/              Hero1*.webp, hero-{servicios,software,agenda}.jpg,
    │                            og-maxan*.jpg, logos, e imagenes.md (inventario)
    └── src/
        ├── App.jsx            rutas + skip link + ScrollManager + FAB WhatsApp
        ├── index.css          tokens @theme + componentes base
        ├── lib/wa.js          número de WhatsApp (fuente única de verdad)
        ├── lib/seo.js         useSeo() + helpers de JSON-LD
        ├── components/        Navbar, Footer, ContactForm
        └── pages/             Inicio, Servicios, SoftwareMedida, Contacto,
                               Agenda, NoEncontrada
```

---

## Rutas

| Ruta | Página | Notas |
|---|---|---|
| `/` | `Inicio.jsx` | hero + servicios + por qué Maxan + portafolio + contacto |
| `/servicios` | `Servicios.jsx` | anclas `#software`, `#automatizacion`, `#nube`, `#soporte` |
| `/software-a-la-medida` | `SoftwareMedida.jsx` | servicio principal |
| `/contacto` | `Contacto.jsx` | formulario + contacto directo |
| `/agenda` | `Agenda.jsx` | flujo de 3 pasos con Cal.com |
| `*` | `NoEncontrada.jsx` | 404 real |

`App.jsx` monta un `ScrollManager`: al cambiar de ruta vuelve arriba y, si
hay `#hash`, desplaza al ancla correspondiente (`scroll-margin-top` global de
88 px porque el navbar es sticky).

---

## Sistema de diseño

Fuente: `../diseño.md`. Tokens en `frontend/src/index.css` (bloque `@theme`).

```css
--color-maxan-navy:        #0c2c59;   /* superficie oscura de marca */
--color-maxan-navy-900:    #0a2144;
--color-maxan-primary:     #2563eb;   /* acciones (5.17:1 sobre blanco) */
--color-maxan-primary-ink: #93c5fd;   /* azul legible sobre navy (7.66:1) */
--color-maxan-primary-soft:#eff6ff;
--color-maxan-text-secondary:#475569; /* 7.58:1 */
--color-maxan-text-muted:  #64748b;   /* 4.76:1 */
--color-maxan-border:      #e2e8f0;
--color-whatsapp:          #25d366;   /* canal, no marca */
--color-whatsapp-ink:      #052e16;   /* texto sobre verde (6.38:1) */
```

Reglas que no se negocian:

- **Nada de colores literales** en componentes: todo sale de un token.
- Sobre navy, el azul de marca se sustituye por `--maxan-primary-ink`.
- El botón de WhatsApp **nunca** lleva texto blanco (1.98:1): usa
  `--whatsapp-ink`.
- Tipografía: **DM Sans** (Inter quedó obsoleto; Playfair Display se eliminó).
- Logo: `logo-maxan.png` / `logo.svg` sobre fondo claro y
  `logo-maxan-blanco.svg` sobre fondo oscuro. **Nunca** inverter con filtros CSS.
- Componentes base disponibles: `.btn` `.btn-primary` `.btn-secondary`
  `.btn-ghost` `.btn-light` `.btn-whatsapp`, `.field-label` `.field-input`
  `.field-hint` `.field-error`, `.card`, `.eyebrow` `.eyebrow-light`,
  `.section-title` `.section-title-light`, `.prose-body`, `.skip-link`.

---

## WhatsApp

`frontend/src/lib/wa.js` es la **única** fuente del número:

```js
WA_NUMBER  = "573134850115"
WA_DISPLAY = "+57 313 485 0115"
WA_LINK    = "https://wa.me/573134850115"
MAIL       = "hola@maxansistemas.com"
waLink(msg) // deep link con el mensaje ya redactado
```

Para cambiar el número: editar ese archivo y nada más.

---

## SEO

- `src/lib/seo.js` → `useSeo({ title, description, path, image, jsonLd })` por
  página: actualiza `<title>`, `meta[name=description]`, `link[rel=canonical]`,
  OG y Twitter, e inyecta JSON-LD. `ogImage("archivo.jpg")` devuelve la URL
  absoluta.
- `index.html` lleva JSON-LD estático de `Organization` + `WebSite`.
- `public/robots.txt` y `public/sitemap.xml` (5 URLs) son estáticos.
- Al añadir o quitar una ruta: actualizar `sitemap.xml`, el `Navbar` y el
  `Footer` en la misma tarea.
- **`og:image` por ruta** (todas 1200 × 630, JPG — los bots no leen WebP):
  `/` → `og-maxan.jpg`, `/servicios` → `og-maxan-servicios.jpg`,
  `/software-a-la-medida` → `og-maxan-software.jpg`,
  `/agenda` → `og-maxan-agenda.jpg`, `/contacto` → `og-maxan.jpg` (default).
  Las tarjetas llevan logo, titular, bajada y dominio horneados con DM Sans real
  (no IA); el cómo está en `frontend/public/images/imagenes.md` §3.1.
- Ojo: WhatsApp/Facebook **no** ejecutan JS, así que para ellos manda siempre la
  tarjeta estática del `index.html` (home). Las variantes por ruta las ven los
  rastreadores que renderizan (Google).

---

## Accesibilidad (estado)

Implementado y verificado con Lighthouse 100:

- skip link → `#contenido`; `<main id="contenido">`;
- foco visible global (`:focus-visible` con anillo + halo claro);
- `scroll-margin-top` para el navbar sticky;
- `prefers-reduced-motion` respetado;
- formularios: `label` + `htmlFor`, `aria-invalid`, `aria-describedby`,
  `role="alert"`, foco al primer error, `role="status"` para el feedback;
- menú móvil: `aria-expanded`, `aria-controls`, Escape cierra y devuelve el foco;
- iconos decorativos con `aria-hidden`; enlaces que abren pestaña nueva con
  aviso `sr-only`;
- objetivos táctiles ≥ 44 px;
- `/agenda`: pasos como `<ol>` con `aria-current="step"`, región `aria-live` y
  foco movido al encabezado de cada paso.

---

## Docker y despliegue

```yaml
services:
  maxan-web-frontend:      # nombre único: `maxan-frontend` es del ERP (8084)
    container_name: maxan-web-frontend
    ports: ["127.0.0.1:4000:80"]   # el público entra por Caddy
```

Producción (VPS ARM64, Caddy con TLS → `maxansistemas.com:4000`):

```bash
git push origin main
# en el servidor (~/maxansistemas)
git pull origin main && docker compose up -d --build maxan-web-frontend
```

- `frontend/Dockerfile`: build `node:20-alpine` con `npm ci` → `nginx:alpine`.
- `frontend/nginx.conf`: gzip, `X-Content-Type-Options`, `X-Frame-Options`,
  `Referrer-Policy`, `Permissions-Policy`, caché 1 año para `/assets/`,
  `no-cache` para `index.html`, `robots.txt` y `sitemap.xml`, SPA fallback.
- Contexto del servidor: `../Servidor/Servidor_Maxan.md`.

---

## Verificación antes de dar por terminada una tarea

```bash
cd frontend
npm run lint     # 0 errores, 0 warnings
npm run build    # debe compilar
npm run preview  # y revisar en http://localhost:4173
```

Añadir Lighthouse (accesibilidad + SEO) cuando se toque markup, estilos,
rutas o metadatos.

---

## Pendientes

1. **Imagen del portafolio** (chatbot hotelero): prompt en
   `frontend/public/images/imagenes.md` §3.2; la card del home todavía es solo
   texto.
2. Decidir si se monta el chat de `@n8n/chat` (dependencia instalada, sin uso).
3. Navbar con login opcional (Fase 5 de `maxan-auth`).

---

## Problemas resueltos

- **Rutas rotas**: todo el sitio era un `catch-all` a `Inicio`; `Servicios` y
  `Contacto` existían pero no eran accesibles. Ahora hay 6 rutas reales.
- **`POST /api/contact` sin backend**: el formulario fallaba siempre. Ahora
  valida en cliente y abre WhatsApp con el mensaje.
- **Contraste**: `white/30` y `white/40` sobre navy (2.54:1 y 3.43:1), azul de
  marca sobre navy (2.67:1), `gray-400` sobre blanco (2.54:1) y blanco sobre
  verde WhatsApp (1.98:1). Corregidos con tokens y `primary-ink`.
- **Identidad duplicada en `/agenda`**: negro `#0d0f14` + dorado `#c8a96e`,
  ajenos al ecosistema. Repintada a navy + azul.
- **Links muertos**: el footer apuntaba a `/servicios` (inexistente) y las
  redes sociales eran `href="#"`. Ahora hay enlaces reales y **no** hay
  placeholders.
- **Logo invisible en el footer**: se invertía con filtro CSS (prohibido por
  `diseño.md` §2.1). Se creó `logo-maxan-blanco.svg` como variante aprobada.
- **Logo del navbar** con azul `#007BFF` (fuera de marca): ahora se usa el
  logo oficial `logo-maxan.png`.
- **Colisión de contenedores Docker** con el ERP: renombrado a
  `maxan-web-frontend` y bind a `127.0.0.1`.
- **`npm run lint` roto** (12 errores `react/prop-types`): la regla se desactivó
  (proyecto JS sin TypeScript).
- **Playfair Display** cargado sin uso: eliminada; DM Sans queda como única
  familia.
- **Hero de 514 KB (JPG)**: ahora es WebP con pérdida (62 KB, PSNR 42 dB frente
  al original) más una variante móvil de 28 KB servida con `srcset`.
- **Favicons no cuadrados** (180 × 154, 192 × 165, 512 × 439, 32 × 27, 16 × 14):
  se regeneraron todos desde el logo oficial `Logo-FAVICON.svg` con `sharp`, en
  lienzos cuadrados y con la marca centrada (`%TEMP%\opencode\build-favicons.cjs`);
  el ICO se armó como contenedor PNG-in-ICO (16/32/48) con `build-ico.cjs`.
- **Sin `favicon.ico` ni `site.webmanifest`**: creados, y `index.html` declara
  SVG + PNG + ICO + apple-touch-icon + manifest.

---

## Trabajo reciente (2026-10-21)

1. Tokens `--maxan-*` y componentes base en `frontend/src/index.css`.
2. `lib/wa.js` y `lib/seo.js` creados; `useSeo` aplicado en todas las páginas.
3. `Navbar` reescrito (accesibilidad, menú móvil, `isCurrent` exacto).
4. `Footer` reescrito: enlaces reales, sin redes placeholder, año dinámico.
5. `App.jsx`: 6 rutas, skip link, `ScrollManager`, FAB de WhatsApp,
   `NoEncontrada.jsx`.
6. `ContactForm.jsx` extraído y reutilizado en `Inicio` y `Contacto`.
7. `Inicio`, `Servicios`, `SoftwareMedida`, `Contacto`, `Agenda` repintadas con
   tokens, contraste corregido y a11y.
8. `Blog.jsx` y `Tienda.jsx` eliminados; también `react.svg`, `vite.svg` y
   `logo-navbar.svg`.
9. `index.html`: `es-CO`, canonical, OG/Twitter, theme-color, JSON-LD,
   preload del hero, sin Playfair.
10. `robots.txt` y `sitemap.xml` creados.
11. `nginx.conf` y `Dockerfile` actualizados; `docker-compose.yml` renombrado.
12. `../diseño.md` actualizado (§2.1, §3.1, §3.4, §4, §5, §7, §11).
13. `CLAUDE.md`, `frontend/README.md` y `../README.md` corregidos (puerto 5176,
    rama `main`, rutas, número de WhatsApp).
14. Lighthouse: 100/100 en accesibilidad y SEO en las 5 rutas.
15. Hero migrado a WebP (2 variantes, `srcset`) e `og:image` válido en JPG;
    `frontend/public/images/imagenes.md` creado con inventario y prompts.
16. Piezas de imagen reales: 4 tarjetas OG 1200 × 630 con titular horneado
    (GDI+, DM Sans), heroes con overlay HTML en `/servicios`,
    `/software-a-la-medida` y `/agenda`, favicons cuadrados + ICO +
    `site.webmanifest`, y `og:image` por ruta vía `useSeo({ image })`.
    Verificado: lint 0/0, build OK, Lighthouse 100/100 en las 3 rutas tocadas.
17. **Desplegado en producción** (commit `e868bbf`): `git pull` en
    `~/maxansistemas` (se descartó el parche local de `container_name`, ya
    superado por el rename del repo), se eliminó el contenedor viejo
    `maxanSistemas-frontend` y se levantó `maxan-web-frontend`
    (`127.0.0.1:4000`). Verificado por HTTPS: 5 rutas 200, favicon/manifest,
    las 4 tarjetas OG y los 3 heroes 200. Tabla de
    `../Servidor/Servidor_Maxan.md` actualizada.

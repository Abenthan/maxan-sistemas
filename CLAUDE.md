# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Corporate website for Maxan Sistemas (Colombian IT services company). **Frontend-only React SPA** — the Node.js/Express/MySQL backend was removed and there is no active backend. The contact form validates in the browser and opens WhatsApp with the message pre-filled.

## Documentation to read first

1. `../diseño.md` — **source of truth for the shared design system** of the whole Maxan ecosystem (palette, tokens, typography, components, accessibility).
2. `AGENTS.md` (this folder) — project context, conventions, pending work.
3. `../README.md` — map of the ecosystem and how this project relates to the others.

## Development Commands

All commands run from the `frontend/` directory:

```bash
npm install        # Install dependencies
npm run dev        # Vite dev server → http://localhost:5176
npm run build      # Production build → dist/
npm run preview    # Preview production build locally
npm run lint       # ESLint (0 warnings allowed, will error on warnings)
```

No test suite is configured. `npm run lint` and `npm run build` are the verification gate.

## Architecture

**Stack**: React 18.3 + Vite 5 + Tailwind 4 (`@tailwindcss/vite`, zero-config, no `tailwind.config.js`) + react-router-dom 7 + lucide-react. `@n8n/chat` is installed but **not mounted** in `src/`.

**Routing** (`src/App.jsx`):

| Route | Page |
|---|---|
| `/` | `pages/Inicio.jsx` |
| `/servicios` | `pages/Servicios.jsx` |
| `/software-a-la-medida` | `pages/SoftwareMedida.jsx` |
| `/contacto` | `pages/Contacto.jsx` |
| `/agenda` | `pages/Agenda.jsx` |
| `*` | `pages/NoEncontrada.jsx` |

`<Navbar />` and `<Footer />` wrap all routes; `App.jsx` also renders the skip link (`#contenido`), a `ScrollManager` (resets scroll, honours `#hash` anchors) and the floating WhatsApp button.

**Design tokens**: `src/index.css` — Tailwind v4 `@theme` block with the `--maxan-*` palette (navy `#0c2c59`, primary `#2563eb`, neutrals, semantic states, WhatsApp channel), radii, shadows and shared component classes (`.btn-*`, `.field-*`, `.card`, `.eyebrow`, `.section-title`, `.prose-body`, `.skip-link`). Never write literal colours in components.

**Single source of truth for the phone number**: `src/lib/wa.js` (`WA_NUMBER = "573134850115"`, `WA_DISPLAY = "+57 313 485 0115"`, `WA_LINK`, `MAIL`, `waLink()`). Never hardcode the number in a component.

**SEO**: `src/lib/seo.js` — `useSeo({ title, description, path, jsonLd })` updates the document head per route (canonical, Open Graph, Twitter) and injects JSON-LD. `public/robots.txt` and `public/sitemap.xml` are static.

**Página `/agenda`** (`src/pages/Agenda.jsx`): 3-step flow (form → Cal.com inline widget `maxansistemas/reunion-comercial` → WhatsApp confirmation). Phone country selector with Colombia (+57) by default; Colombian numbers must be 10 digits. Step changes move focus to the step heading and announce themselves through an `aria-live` region.

**Docker/Nginx** (`frontend/nginx.conf`): Nginx serves the Vite `dist/` directory, with SPA fallback (`try_files $uri $uri/ /index.html`), gzip, caching rules and security headers. The `/api/` proxy stays commented out while there is no backend.

## Docker

```bash
# From the repository root
docker compose up -d --build maxan-web-frontend
```

The container is named **`maxan-web-frontend`** (not `maxan-frontend`, which belongs to the ERP on port 8084) and binds `127.0.0.1:4000:80`; public traffic arrives through Caddy.

## Deployment

Production runs on an Ubuntu VPS (ARM64) with Caddy (SSL) → Docker containers. Domain: `maxansistemas.com` (frontend on 4000).

```bash
git push origin main
# On the server (~/maxansistemas)
git pull origin main && docker compose up -d --build maxan-web-frontend
```

The production branch is **`main`**.

Server context: see `../Servidor/Servidor_Maxan.md` (containers table, Caddy config, deploy commands).

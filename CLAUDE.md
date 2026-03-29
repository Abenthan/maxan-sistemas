# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Corporate website for Maxan Sistemas (Colombian IT services company). Currently a frontend-only React SPA — the backend (Node.js/Express/MySQL) was removed. The contact form at `/api/contact` has no active backend.

## Development Commands

All commands run from the `frontend/` directory:

```bash
npm install        # Install dependencies
npm run dev        # Vite dev server → http://localhost:5173
npm run build      # Production build → dist/
npm run preview    # Preview production build locally
npm run lint       # ESLint (0 warnings allowed, will error on warnings)
```

No test suite is configured.

## Docker

```bash
# Build and run frontend container (Nginx on port 80)
docker build -t maxan-frontend ./frontend
docker run -p 4000:80 maxan-frontend
```

## Architecture

**Single-page application**: React Router is configured with a single catch-all route (`/*`) that renders `<Inicio />`. All other pages (`Servicios`, `Blog`, `Contacto`, `Tienda`) exist as components but are not wired into routing — the landing page (`Inicio.jsx`) is the entire user-facing site via in-page sections.

**Routing structure** (`src/App.jsx`):
- One route: `/*` → `<Inicio />`
- `<Navbar />` and `<Footer />` wrap all content
- WhatsApp floating button hardcoded to `wa.me/573128919875`

**Styling**: Tailwind CSS 4 with the `@tailwindcss/vite` plugin — no `tailwind.config.js` needed, configuration is zero-config via the plugin.

**Key dependencies**:
- `@n8n/chat` — floating n8n chat widget embedded in the site
- `lucide-react` — all icons
- `react-router-dom` v7

**Docker/Nginx** (`frontend/nginx.conf`): Nginx serves the Vite `dist/` directory and proxies `/api/` to `http://maxan-backend:5000/api/`. SPA fallback enabled via `try_files $uri /index.html`.

## Deployment

Production runs on an Ubuntu VPS with Caddy (SSL) → Docker containers. Primary domain: `maxansistemas.com` (frontend port 4000, backend port 5000).

```bash
# Local → push to master (not main)
git push origin master

# On server
bash /var/www/PROYECTO/deploy.sh
```

The production branch is **`master`**, not `main`.

Server context: See `SERVER.md` for VPS details, Caddy configuration, subdomain table, and deploy script template.

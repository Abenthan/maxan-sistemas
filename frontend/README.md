# Frontend — Web corporativa Maxan Sistemas

SPA de la web corporativa (React 18 + Vite 5 + Tailwind 4). Sin backend: el
formulario de contacto valida en el cliente y abre WhatsApp con el mensaje.

## Comandos

```bash
npm install
npm run dev        # http://localhost:5176
npm run build      # → dist/
npm run preview    # sirve dist/ localmente
npm run lint       # ESLint, 0 warnings permitidos
```

No hay suite de tests. `npm run lint` y `npm run build` son la verificación.

## Estructura

```
src/
  App.jsx                  rutas + skip link + scroll + FAB de WhatsApp
  index.css                tokens @theme (Tailwind 4) + componentes base
  lib/wa.js                número y textos de WhatsApp (fuente única)
  lib/seo.js               useSeo() + JSON-LD por ruta
  components/Navbar.jsx    navegación principal + menú móvil
  components/Footer.jsx    pie de página
  components/ContactForm.jsx  formulario → deep link de WhatsApp
  pages/                   Inicio, Servicios, SoftwareMedida, Contacto, Agenda, NoEncontrada
public/
  images/                  logo oficial, variante blanca y hero
  robots.txt, sitemap.xml
```

## Rutas

| Ruta | Componente |
|---|---|
| `/` | `Inicio.jsx` |
| `/servicios` | `Servicios.jsx` |
| `/software-a-la-medida` | `SoftwareMedida.jsx` |
| `/contacto` | `Contacto.jsx` |
| `/agenda` | `Agenda.jsx` (Cal.com) |
| `*` | `NoEncontrada.jsx` |

## Reglas

- Los colores, radios y sombras salen de los tokens `--maxan-*` de
  `src/index.css`; nunca literales en componentes.
- El número de WhatsApp se cambia solo en `src/lib/wa.js`.
- El diseño sigue `../../diseño.md` (fuente de verdad del ecosistema).
- Ver `../AGENTS.md` para el contexto completo del proyecto.

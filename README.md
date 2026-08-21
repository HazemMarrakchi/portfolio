# Hazem Marrakchi — Portfolio 🚀

[![Live Demo](https://img.shields.io/badge/Live_Demo-vercel.app-22d3ee?style=for-the-badge&logo=vercel)](https://portfolio-swart-pi-efwv7wn6oo.vercel.app)
[![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react)](https://react.dev)
[![Three.js](https://img.shields.io/badge/Three.js-r185-white?style=flat-square&logo=threedotjs)](https://threejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-7-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-8-a855f7?style=flat-square&logo=vite)](https://vite.dev)

> Interactive 3D portfolio of **Hazem Marrakchi** — Software Engineer & Full Stack Developer based in Gabès, Tunisia.

## ✨ Highlights

- **Immersive WebGL hero** — 1,400-particle field + glowing icosahedron core rendered with React Three Fiber, reacting to mouse movement (parallax camera rig) and scroll position.
- **3D tilt portrait** — photo card with rotating conic-gradient halo, floating tech badges and pointer-driven perspective tilt.
- **Bilingual EN / FR** — typed i18n dictionaries, persisted language preference.
- **Dark futuristic design system** — glassmorphism panels, cyan→violet gradients, scroll-reveal animations via IntersectionObserver.
- **Production-ready engineering** — async queued logger, WebGL fallback, `prefers-reduced-motion` support, lazy-loaded 3D chunk (~69 KB initial gzip), fully responsive.

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Build | Vite 8 |
| UI | React 19 + TypeScript 7 |
| 3D | three.js r185 · @react-three/fiber · @react-three/drei |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |

## 📂 Structure

```
src/
├── core/        # logger + i18n (EN/FR)
├── data/        # profile.ts — single source of truth for all content
├── features/    # hero (Scene3D, Portrait) · navbar · about · skills
│                # projects · experience · contact
└── components/  # shared UI primitives (Reveal, SectionHeading)
```

## ⚡ Run Locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
```

## 📬 Contact

- **Email**: hazemmrk12@gmail.com
- **Phone**: +216 22 907 082
- **Location**: Gabès, Tunisia

---

⭐ Built with React 19, Three.js r185 and Tailwind CSS v4.

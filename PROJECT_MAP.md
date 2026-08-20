# PROJECT_MAP.md — Hazem Marrakchi 3D Portfolio

> Last synced: 2026-08-20 · Status: **COMPLETE (pending user data enrichments)**

## [TECH_STACK]

Pinned exact versions, verified from npm registry on 2026-08-20:

| Layer | Package | Version |
|---|---|---|
| Runtime | Node.js | v24.19.0 |
| Build | vite (+ @vitejs/plugin-react) | 8.2.2 (6.1.0) |
| UI | react / react-dom | 19.2.8 |
| Types | typescript (@types/react) | 7.0.2 (19.2.18) |
| 3D | three | 0.185.1 (r185) |
| 3D React | @react-three/fiber / @react-three/drei | 9.7.0 / 10.7.8 |
| Styling | tailwindcss + @tailwindcss/vite | 4.3.3 |

Commands: `npm run dev` · `npm run build` (tsc --noEmit + vite build) · `npm run preview`

## [SYSTEM_FLOW]

Single-page scroll journey (EN/FR switchable, persisted in localStorage, default EN):

```
Load → initial bundle (~69KB gzip) paints instantly
     → Scene3D chunk lazy-loads async (React.lazy + Suspense)
Hero (#hero)      fixed full-screen WebGL canvas behind all content:
                  particle field (1400 pts, additive cyan/violet) +
                  glowing icosahedron core (drei Float) +
                  mouse-parallax camera rig + scroll-driven scale/rise
   ↓ scroll
About (#about)        bio, fact chips, monogram card + spoken languages
Skills (#skills)      7 grouped glass cards with hover glow
Projects (#projects)  3 project cards (stack pills, grade highlight)
Experience (#experience) timeline (5 roles) + education/certifications
Contact (#contact)    email/phone/location channels + mailto CTA + footer

Fallbacks: no WebGL → static radial-gradient background.
prefers-reduced-motion → animations/particles motion disabled, smooth-scroll off.
```

## [ARCHITECTURE]

Feature-based, single source of truth for content, no premature abstraction:

```
src/
├── core/
│   ├── logger.ts            async queued logger (debug/info/warn/error);
│   │                        dev-only for debug/info, warn/error always;
│   │                        flushed via setTimeout(0), never blocks render
│   └── i18n.tsx             I18nProvider + useI18n(); typed EN/FR dicts;
│                            L(localized) helper; localStorage persistence
├── data/
│   └── profile.ts           ★ ALL CV content lives here (bilingual fields).
│                            Edit this file only to change site content.
├── components/
│   └── ui.tsx               Reveal (IntersectionObserver fade-up) +
│                            SectionHeading (numbered eyebrow style)
├── features/
│   ├── hero/Scene3D.tsx     R3F Canvas (fixed, -z-10, pointer-events:none),
│   │                        ParticleField + CoreObject + CameraRig,
│   │                        WebGL capability check + reduced-motion support
│   ├── hero/Hero.tsx        two-column grid: name H1, role, pitch, CTAs
│   │                        + Portrait (photo showcase)
│   ├── hero/Portrait.tsx    profile photo (public/hazemphoto.jpeg) with
│   │                        mouse-tilt 3D, rotating conic-gradient halo,
│   │                        floating stack badges, cinematic overlays;
│   │                        reduced-motion disables tilt
│   ├── navbar/Navbar.tsx    glass navbar, scroll state, EN|FR toggle,
│   │                        mobile hamburger menu
│   ├── about/About.tsx      bio + facts + monogram card + spoken languages
│   ├── skills/Skills.tsx    skill group cards
│   ├── projects/Projects.tsx project cards grid
│   ├── experience/Experience.tsx timeline + education + certifications
│   └── contact/Contact.tsx  contact channels + footer
├── App.tsx                  I18nProvider > lazy Scene3D > Navbar > sections
├── index.css                Tailwind v4 @theme tokens (void/accent/violet/
│                            mist/frost), glass/glow-ring/text-gradient
│                            utilities, scrollbar, reduced-motion guard
└── main.tsx                 entry
```

Design language: Dark Futuristic — deep navy void bg, cyan→violet gradient
accents, glassmorphism panels, Space Grotesk display font + Inter body.

## [ORPHANS & PENDING]

- [ ] **GitHub / LinkedIn URLs**: absent from the provided CV — social buttons
      not rendered anywhere. Add to `profile.socials` + Contact section when
      the user supplies them.
- [ ] **Project links** (live demos / repos): none in CV — project cards are
      informational only. Wire `link` field in `profile.projects` when available.

Photo note: portrait lives in hero only (single strong placement). Source file:
`public/hazemphoto.jpeg`.

Nothing else is orphaned: every component is mounted and reachable from the
user journey above.

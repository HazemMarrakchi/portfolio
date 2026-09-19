import { useI18n } from '../../core/i18n'
import { profile } from '../../data/profile'
import Portrait from './Portrait'

export default function Hero() {
  const { t, lang, L } = useI18n()

  return (
    <section id="hero" className="relative flex min-h-screen items-center">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 px-6 pt-28 pb-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:px-10">
        <div>
          <div className="glass glow-ring inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-xs font-medium tracking-wide text-accent sm:text-sm">
            <span className="bg-accent relative flex h-2 w-2 rounded-full">
              <span className="bg-accent absolute inline-flex h-full w-full animate-ping rounded-full opacity-60" />
            </span>
            {t.hero.available}
          </div>

          <h1 className="font-display mt-8 text-5xl leading-[1.05] font-bold tracking-tight sm:text-7xl lg:text-[5.25rem]">
            <span className="text-frost">{profile.name.split(' ')[0]}</span>{' '}
            <span className="text-gradient">{profile.name.split(' ')[1]}</span>
          </h1>

          <p className="font-display mt-5 text-xl font-medium text-mist sm:text-2xl">
            {L(profile.role)} <span className="text-violet">·</span> {L(profile.tagline)}
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
            {L(profile.heroPitch)}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="from-accent to-violet shadow-accent/25 font-display rounded-full bg-gradient-to-r px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-lg transition-transform duration-300 hover:scale-105"
            >
              {t.hero.viewProjects}
            </a>
            <a
              href={`./CV_Hazem_Marrakchi_${lang === 'fr' ? 'FR' : 'EN'}.pdf`}
              download
              className="glass font-display hover:border-accent/60 rounded-full px-7 py-3.5 text-sm font-semibold text-frost transition-colors duration-300"
            >
              ↓ {t.hero.downloadCV}
            </a>
            <a
              href="https://hazemmarrakchi.github.io/Gaia/"
              target="_blank"
              rel="noopener noreferrer"
              className="from-accent to-violet shadow-accent/25 font-display rounded-full bg-gradient-to-r px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-lg transition-transform duration-300 hover:scale-105 hover:opacity-90"
            >
              🚀 {t.hero.viewLiveDemo}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="glass hover:border-accent/60 hover:text-accent flex h-12 w-12 items-center justify-center rounded-full text-frost transition-all duration-300 hover:-translate-y-0.5"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="glass hover:border-accent/60 hover:text-accent flex h-12 w-12 items-center justify-center rounded-full text-frost transition-all duration-300 hover:-translate-y-0.5"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>

          <ul className="border-line mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t pt-6">
            {[
              { value: '1M+', label: L({ en: 'entities simulated / tick', fr: 'entités simulées / tick' }) },
              { value: '8', label: L({ en: 'engineering projects', fr: 'projets d’ingénierie' }) },
              { value: 'EN·FR·AR', label: L({ en: 'trilingual products', fr: 'produits trilingues' }) },
            ].map((stat) => (
              <li key={stat.label} className="flex items-baseline gap-2">
                <span className="font-display text-gradient text-2xl font-bold">{stat.value}</span>
                <span className="text-mist text-xs leading-tight">{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <Portrait />
      </div>

      <a
        href="#about"
        className="text-mist hover:text-accent absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs tracking-[0.25em] uppercase transition-colors"
      >
        {t.hero.scroll}
        <span className="animate-float text-lg">↓</span>
      </a>
    </section>
  )
}

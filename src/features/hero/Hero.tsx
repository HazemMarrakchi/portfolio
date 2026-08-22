import { useI18n } from '../../core/i18n'
import { profile } from '../../data/profile'
import Portrait from './Portrait'

export default function Hero() {
  const { t, L } = useI18n()

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
              href={`${import.meta.env.BASE_URL}CV_Hazem_Marrakchi_FR.pdf`}
              download="CV_Hazem_Marrakchi_FR.pdf"
              className="glass font-display hover:border-accent/60 rounded-full px-7 py-3.5 text-sm font-semibold text-frost transition-colors duration-300"
            >
              ⬇ {t.hero.downloadCv}
            </a>
            <a
              href="#contact"
              className="glass font-display hover:border-accent/60 rounded-full px-7 py-3.5 text-sm font-semibold text-frost transition-colors duration-300"
            >
              {t.hero.contactMe}
            </a>
          </div>
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

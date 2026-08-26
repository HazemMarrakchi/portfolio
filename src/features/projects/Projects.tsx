import { useRef, useCallback } from 'react'
import { useI18n } from '../../core/i18n'
import { profile } from '../../data/profile'
import { Reveal, SectionHeading } from '../../components/ui'
import { logger } from '../../core/logger'

function RocketIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-3.5 w-3.5">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-3.5 w-3.5">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function ChevronRight({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className={`h-5 w-5 ${className}`}>
      <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
    </svg>
  )
}

function ProjectLinks({ project }: { project: typeof profile.projects[number] }) {
  const { L } = useI18n()
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          onClick={() => logger.info('project demo opened', { id: project.id })}
          className="bg-accent inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-bold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30"
        >
          <RocketIcon />
          {L({ en: 'Live demo', fr: 'Démo live' })}
        </a>
      )}
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          onClick={() => logger.info('project repo opened', { id: project.id })}
          className="text-accent inline-flex items-center gap-2 rounded-full border border-accent/30 px-3.5 py-1.5 text-xs font-semibold transition-all duration-300 hover:border-accent/70 hover:bg-accent/10"
        >
          <GitHubIcon />
          {L({ en: 'View source', fr: 'Voir le code' })}
        </a>
      )}
    </div>
  )
}

function FeaturedCard({ project, delay }: { project: typeof profile.projects[number]; delay: number }) {
  const { t, L } = useI18n()
  return (
    <Reveal delay={delay}>
      <article className="glass group hover:glow-ring flex h-full flex-col rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50">
        <div className="mb-4 flex items-center gap-3">
          <span className="text-accent flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-sm font-bold">
            {profile.projects.indexOf(project) + 1}
          </span>
          <span className="text-violet text-xs font-semibold tracking-wider uppercase">
            {L(project.kind)}
          </span>
        </div>
        <h3 className="font-display group-hover:text-accent text-xl leading-snug font-bold text-frost transition-colors duration-300">
          {project.name}
        </h3>
        <p className="text-mist mt-3 flex-1 text-sm leading-relaxed">
          {L(project.description)}
        </p>

        {project.highlight && (
          <p className="from-accent to-violet mt-4 inline-flex self-start rounded-full bg-gradient-to-r px-3.5 py-1.5 text-xs font-bold text-slate-950">
            ★ {L(project.highlight)}
          </p>
        )}

        <div className="border-line mt-5 border-t pt-4">
          <p className="text-mist mb-2 text-[11px] font-semibold tracking-wider uppercase">
            {t.projects.stack}
          </p>
          <ul className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-md bg-white/[0.04] px-2 py-1 font-mono text-[11px] text-accent"
              >
                {tech}
              </li>
            ))}
          </ul>
          <ProjectLinks project={project} />
        </div>
      </article>
    </Reveal>
  )
}

function CarouselCard({ project }: { project: typeof profile.projects[number] }) {
  const { L } = useI18n()
  return (
    <article className="glass group hover:glow-ring flex h-full w-[380px] min-w-[380px] flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50">
      <span className="text-violet mb-3 text-xs font-semibold tracking-wider uppercase">
        {L(project.kind)}
      </span>
      <h3 className="font-display group-hover:text-accent text-lg leading-snug font-bold text-frost transition-colors duration-300">
        {project.name}
      </h3>
      <p className="text-mist mt-2.5 flex-1 text-sm leading-relaxed line-clamp-3">
        {L(project.description)}
      </p>

      {project.highlight && (
        <p className="from-accent to-violet mt-3 inline-flex self-start rounded-full bg-gradient-to-r px-3 py-1 text-[11px] font-bold text-slate-950">
          ★ {L(project.highlight)}
        </p>
      )}

      <div className="border-line mt-4 border-t pt-3">
        <ul className="mb-3 flex flex-wrap gap-1">
          {project.stack.slice(0, 5).map((tech) => (
            <li
              key={tech}
              className="rounded bg-white/[0.04] px-1.5 py-0.5 font-mono text-[10px] text-accent"
            >
              {tech}
            </li>
          ))}
          {project.stack.length > 5 && (
            <li className="rounded bg-white/[0.04] px-1.5 py-0.5 font-mono text-[10px] text-mist">
              +{project.stack.length - 5}
            </li>
          )}
        </ul>
        <ProjectLinks project={project} />
      </div>
    </article>
  )
}

export default function Projects() {
  const { t, L } = useI18n()
  const scrollRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  const featured = profile.projects.slice(0, 6)
  const scrollable = profile.projects.slice(6)

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!scrollRef.current) return
    isDragging.current = true
    startX.current = e.pageX - scrollRef.current.offsetLeft
    scrollLeft.current = scrollRef.current.scrollLeft
    scrollRef.current.style.cursor = 'grabbing'
  }, [])

  const handleMouseUp = useCallback(() => {
    isDragging.current = false
    if (scrollRef.current) scrollRef.current.style.cursor = 'grab'
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX.current) * 1.5
    scrollRef.current.scrollLeft = scrollLeft.current - walk
  }, [])

  const scrollBy = useCallback((direction: 'left' | 'right') => {
    if (!scrollRef.current) return
    const amount = direction === 'left' ? -400 : 400
    scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' })
  }, [])

  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal>
          <SectionHeading index="03" title={t.projects.title} subtitle={t.projects.subtitle} />
        </Reveal>

        {/* ── Featured Grid ─────────────────────────────────── */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <FeaturedCard key={project.id} project={project} delay={(i % 3) * 120} />
          ))}
        </div>
      </div>

      {/* ── Horizontal Carousel (full-bleed) ─────────────── */}
      {scrollable.length > 0 && (
        <Reveal delay={200}>
          <div className="relative mt-16">
            {/* Gradient fade left */}
            <div className="from-void pointer-events-none absolute top-0 left-0 z-10 h-full w-20 bg-gradient-to-r to-transparent" />

            {/* Gradient fade right */}
            <div className="from-void pointer-events-none absolute top-0 right-0 z-10 h-full w-20 bg-gradient-to-l to-transparent" />

            {/* Scroll arrows */}
            <button
              type="button"
              onClick={() => scrollBy('left')}
              aria-label={L({ en: 'Scroll left', fr: 'Défiler à gauche' })}
              className="border-line bg-panel/80 hover:bg-accent/20 pointer-events-auto absolute top-1/2 left-4 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border backdrop-blur-sm transition-all duration-200 hover:border-accent/50"
            >
              <ChevronRight className="rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy('right')}
              aria-label={L({ en: 'Scroll right', fr: 'Défiler à droite' })}
              className="border-line bg-panel/80 hover:bg-accent/20 pointer-events-auto absolute top-1/2 right-4 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border backdrop-blur-sm transition-all duration-200 hover:border-accent/50"
            >
              <ChevronRight />
            </button>

            {/* Scrollable track */}
            <div
              ref={scrollRef}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onMouseMove={handleMouseMove}
              className="flex gap-6 overflow-x-auto px-20 py-2"
              style={{
                scrollSnapType: 'x mandatory',
                scrollBehavior: 'smooth',
                cursor: 'grab',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              {scrollable.map((project) => (
                <div key={project.id} style={{ scrollSnapAlign: 'start' }} className="shrink-0">
                  <CarouselCard project={project} />
                </div>
              ))}
            </div>

            {/* Subtle scroll hint dots */}
            <div className="mt-5 flex justify-center gap-2">
              {scrollable.map((_, i) => (
                <span
                  key={i}
                  className="h-1.5 w-1.5 rounded-full bg-white/20"
                />
              ))}
            </div>
          </div>
        </Reveal>
      )}
    </section>
  )
}

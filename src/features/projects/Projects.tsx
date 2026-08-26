import { useRef, useCallback, useState, useEffect } from 'react'
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

function ChevronLeft() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5">
      <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5">
      <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
    </svg>
  )
}

function SwipeArrow() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-4 w-4 text-accent">
      <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
    </svg>
  )
}

function ProjectCard({ project, index }: { project: typeof profile.projects[number]; index: number }) {
  const { L } = useI18n()
  return (
    <article className="glass group hover:glow-ring flex h-full flex-col rounded-3xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50">
      <div className="mb-3 flex items-center gap-3">
        <span className="text-accent flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-sm font-bold">
          {index + 1}
        </span>
        <span className="text-violet truncate text-xs font-semibold tracking-wider uppercase">
          {L(project.kind)}
        </span>
      </div>
      <h3 className="font-display group-hover:text-accent text-base sm:text-lg leading-snug font-bold text-frost transition-colors duration-300">
        {project.name}
      </h3>
      <p className="text-mist mt-2 flex-1 text-sm leading-relaxed">
        {L(project.description)}
      </p>

      {project.highlight && (
        <p className="from-accent to-violet mt-3 inline-flex self-start rounded-full bg-gradient-to-r px-3 py-1 text-[11px] font-bold text-slate-950">
          ★ {L(project.highlight)}
        </p>
      )}

      <div className="border-line mt-4 border-t pt-3">
        <ul className="mb-3 flex flex-wrap gap-1">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded bg-white/[0.04] px-1.5 py-0.5 font-mono text-[10px] text-accent"
            >
              {tech}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
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
      </div>
    </article>
  )
}

const PAGE_SIZE = 6

export default function Projects() {
  const { t, L } = useI18n()
  const trackRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollStart = useRef(0)
  const [page, setPage] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    setIsMobile(mq.matches)
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const projects = profile.projects
  const pages: (typeof profile.projects[number] | null)[][] = []
  for (let i = 0; i < projects.length; i += PAGE_SIZE) {
    const slice = projects.slice(i, i + PAGE_SIZE)
    while (slice.length < PAGE_SIZE) slice.push(null as never)
    pages.push(slice)
  }
  const totalPages = pages.length

  const goTo = useCallback((p: number) => {
    const clamped = Math.max(0, Math.min(p, totalPages - 1))
    setPage(clamped)
    trackRef.current?.scrollTo({ left: clamped * trackRef.current.clientWidth, behavior: 'smooth' })
  }, [totalPages])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const onScroll = () => {
      const p = Math.round(el.scrollLeft / el.clientWidth)
      setPage(Math.max(0, Math.min(p, totalPages - 1)))
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [totalPages])

  const onDown = useCallback((e: React.MouseEvent) => {
    if (!trackRef.current) return
    isDragging.current = true
    startX.current = e.pageX
    scrollStart.current = trackRef.current.scrollLeft
    trackRef.current.style.cursor = 'grabbing'
  }, [])

  const onUp = useCallback(() => {
    isDragging.current = false
    if (trackRef.current) trackRef.current.style.cursor = 'grab'
  }, [])

  const onMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return
    e.preventDefault()
    const dx = e.pageX - startX.current
    trackRef.current.scrollLeft = scrollStart.current - dx
  }, [])

  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <Reveal>
          <SectionHeading index="03" title={t.projects.title} subtitle={t.projects.subtitle} />
        </Reveal>
      </div>

      <Reveal delay={120}>
        <div className="relative">
          {/* Swipe hint — visible on first page only */}
          {totalPages > 1 && page === 0 && (
            <div className="pointer-events-none mb-4 sm:mb-6 flex items-center justify-center gap-2 px-4">
              <span className="text-mist text-xs sm:text-sm">
                {L({ en: 'Swipe to discover more projects', fr: 'Glissez pour découvrir plus de projets' })}
              </span>
              <span className="flex">
                <SwipeArrow />
                <SwipeArrow />
              </span>
            </div>
          )}

          {/* Gradient fades */}
          <div className="from-void pointer-events-none absolute top-0 left-0 z-10 h-full w-4 bg-gradient-to-r to-transparent sm:w-12 md:w-16" />
          <div className="from-void pointer-events-none absolute top-0 right-0 z-10 h-full w-4 bg-gradient-to-l to-transparent sm:w-12 md:w-16" />

          {/* Arrows — desktop only */}
          {!isMobile && page > 0 && (
            <button
              type="button"
              onClick={() => goTo(page - 1)}
              aria-label={L({ en: 'Previous', fr: 'Précédent' })}
              className="border-line bg-panel/80 hover:bg-accent/20 pointer-events-auto absolute top-1/2 left-2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border backdrop-blur-sm transition-all duration-200 hover:border-accent/50 md:left-4"
            >
              <ChevronLeft />
            </button>
          )}
          {!isMobile && page < totalPages - 1 && (
            <button
              type="button"
              onClick={() => goTo(page + 1)}
              aria-label={L({ en: 'Next', fr: 'Suivant' })}
              className="border-line bg-panel/80 hover:bg-accent/20 pointer-events-auto absolute top-1/2 right-2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border backdrop-blur-sm transition-all duration-200 hover:border-accent/50 md:right-4"
            >
              <ChevronRight />
            </button>
          )}

          {/* Pages track */}
          <div
            ref={trackRef}
            onMouseDown={onDown}
            onMouseUp={onUp}
            onMouseLeave={onUp}
            onMouseMove={onMove}
            className="flex overflow-x-auto"
            style={{
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth',
              cursor: isMobile ? 'auto' : 'grab',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {pages.map((pageProjects, pi) => (
              <div
                key={pi}
                className="w-full shrink-0 snap-start px-4 sm:px-6 md:px-12 lg:px-20"
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
                  {pageProjects.map((project, ci) =>
                    project ? (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        index={pi * PAGE_SIZE + ci}
                      />
                    ) : (
                      <div key={`empty-${ci}`} className="hidden sm:block" />
                    ),
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Page dots */}
          {totalPages > 1 && (
            <div className="mt-5 flex items-center justify-center gap-3">
              {pages.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`${L({ en: 'Page', fr: 'Page' })} ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === page
                      ? 'w-8 bg-accent'
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
          )}

          {/* Mobile swipe hint below dots */}
          {isMobile && totalPages > 1 && page < totalPages - 1 && (
            <p className="mt-3 text-center text-xs text-mist/60">
              {L({ en: '← Swipe left for more →', fr: '← Glissez à gauche pour plus →' })}
            </p>
          )}
        </div>
      </Reveal>
    </section>
  )
}

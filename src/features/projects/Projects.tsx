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

export default function Projects() {
  const { t, L } = useI18n()

  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal>
          <SectionHeading index="03" title={t.projects.title} subtitle={t.projects.subtitle} />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {profile.projects.map((project, i) => (
            <Reveal key={project.id} delay={(i % 3) * 120} className={i === 0 ? 'md:col-span-2 lg:col-span-1' : ''}>
              <article className="glass group hover:glow-ring flex h-full flex-col rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50">
                <span className="text-violet mb-4 text-xs font-semibold tracking-wider uppercase">
                  {L(project.kind)}
                </span>
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
                  {(project.demo || project.link) && (
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
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

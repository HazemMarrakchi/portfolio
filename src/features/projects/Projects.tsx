import { useI18n } from '../../core/i18n'
import { profile } from '../../data/profile'
import { Reveal, SectionHeading } from '../../components/ui'

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
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

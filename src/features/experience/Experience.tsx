import { useI18n } from '../../core/i18n'
import { profile } from '../../data/profile'
import { Reveal, SectionHeading } from '../../components/ui'

export default function Experience() {
  const { t, L } = useI18n()

  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal>
          <SectionHeading index="04" title={t.experience.title} subtitle={t.experience.subtitle} />
        </Reveal>

        <div className="relative mx-auto max-w-3xl">
          <div className="via-violet/40 absolute top-2 bottom-2 left-[7px] w-px bg-gradient-to-b from-accent/60 to-transparent sm:left-[9px]" />

          <ol className="space-y-10">
            {profile.experience.map((item, i) => (
              <li key={item.id}>
                <Reveal delay={i * 80}>
                  <div className="relative pl-8 sm:pl-12">
                    <span className="from-accent to-violet shadow-accent/40 absolute top-1.5 left-0 h-[15px] w-[15px] rounded-full bg-gradient-to-br shadow-md ring-4 ring-slate-950 sm:h-[19px] sm:w-[19px]" />
                    <div className="glass rounded-2xl p-6 transition-colors duration-300 hover:border-accent/40">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                        <h3 className="font-display text-lg font-bold text-frost">
                          {L(item.role)}
                          <span className="text-mist font-normal"> · {item.org}</span>
                        </h3>
                        <span className="text-accent font-mono text-xs">{L(item.period)}</span>
                      </div>
                      <ul className="mt-3 space-y-1.5">
                        {item.points.map((point, j) => (
                          <li key={j} className="text-mist flex gap-2.5 text-sm leading-relaxed">
                            <span className="text-violet mt-[7px] h-1 w-1 shrink-0 rounded-full bg-current" />
                            {L(point)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <Reveal>
            <h3 className="font-display mb-6 text-center text-xl font-bold text-frost sm:text-left">
              {t.experience.educationTitle}
            </h3>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {profile.education.map((edu, i) => (
              <Reveal key={edu.id} delay={i * 120}>
                <div className="glass h-full rounded-2xl p-6 transition-colors duration-300 hover:border-violet/40">
                  <span className="text-accent font-mono text-xs">{edu.period}</span>
                  <h4 className="font-display mt-2 leading-snug font-bold text-frost">
                    {L(edu.degree)}
                  </h4>
                  <p className="text-mist mt-1 text-sm">{L(edu.school)}</p>
                  {edu.note && <p className="text-violet mt-3 text-xs leading-relaxed italic">{L(edu.note)}</p>}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="glass mt-5 rounded-2xl p-6">
              <p className="text-mist mb-3 text-xs font-semibold tracking-wider uppercase">
                {t.experience.certifications}
              </p>
              <ul className="flex flex-wrap gap-2">
                {profile.certifications.map((cert) => (
                  <li
                    key={cert.en}
                    className="border-line text-frost rounded-full border px-3.5 py-1.5 text-xs font-medium"
                  >
                    {L(cert)}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

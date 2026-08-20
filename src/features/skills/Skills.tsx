import { useI18n } from '../../core/i18n'
import { profile } from '../../data/profile'
import { Reveal, SectionHeading } from '../../components/ui'

export default function Skills() {
  const { t, L } = useI18n()

  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal>
          <SectionHeading index="02" title={t.skills.title} subtitle={t.skills.subtitle} />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {profile.skillGroups.map((group, i) => (
            <Reveal key={group.label.en} delay={(i % 3) * 120}>
              <div className="glass group hover:border-accent/50 hover:glow-ring h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1">
                <h3 className="font-display mb-4 flex items-center gap-2.5 text-base font-semibold text-frost">
                  <span className="from-accent to-violet h-2 w-2 rounded-full bg-gradient-to-r transition-transform duration-300 group-hover:scale-150" />
                  {L(group.label)}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="border-line text-mist group-hover:text-frost rounded-full border bg-white/[0.03] px-3 py-1 text-xs font-medium transition-colors duration-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

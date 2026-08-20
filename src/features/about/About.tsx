import { useI18n } from '../../core/i18n'
import { profile } from '../../data/profile'
import { Reveal, SectionHeading } from '../../components/ui'

export default function About() {
  const { t, L } = useI18n()

  const facts = [
    { label: t.about.basedIn, value: L(profile.location) },
    { label: t.about.degree, value: t.about.degreeValue },
    { label: t.about.focus, value: t.about.focusValue },
  ]

  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal>
          <SectionHeading index="01" title={t.about.title} subtitle={t.about.subtitle} />
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <div>
            {profile.about.map((paragraph, i) => (
              <Reveal key={i} delay={i * 120}>
                <p className="mb-5 text-base leading-relaxed text-mist sm:text-lg">
                  {L(paragraph)}
                </p>
              </Reveal>
            ))}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {facts.map((fact, i) => (
                <Reveal key={fact.label} delay={200 + i * 100}>
                  <div className="glass h-full rounded-2xl p-4">
                    <p className="text-accent mb-1.5 text-xs font-semibold tracking-wider uppercase">
                      {fact.label}
                    </p>
                    <p className="text-frost text-sm leading-snug font-medium">{fact.value}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={250}>
            <div className="glass glow-ring flex h-full flex-col items-center justify-center rounded-3xl p-8 text-center">
              <div className="from-accent to-violet animate-pulse-slow font-display shadow-accent/20 flex h-28 w-28 items-center justify-center rounded-3xl bg-gradient-to-br text-4xl font-bold text-slate-950 shadow-xl">
                {profile.initials}
              </div>
              <p className="font-display mt-6 text-lg font-semibold text-frost">{profile.name}</p>
              <p className="text-accent mt-1 text-sm">{L(profile.role)}</p>
              <ul className="mt-6 w-full space-y-2 border-t border-line pt-5">
                {profile.languagesSpoken.map((spoken) => (
                  <li key={spoken.name} className="flex items-center justify-between text-sm">
                    <span className="text-frost font-medium">{spoken.name}</span>
                    <span className="text-mist">{L(spoken.level)}</span>
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

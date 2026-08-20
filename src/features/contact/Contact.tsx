import { useI18n } from '../../core/i18n'
import { profile } from '../../data/profile'
import { Reveal, SectionHeading } from '../../components/ui'
import { logger } from '../../core/logger'

export default function Contact() {
  const { t, L } = useI18n()
  const year = new Date().getFullYear()

  const channels = [
    {
      label: t.contact.email,
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      label: t.contact.phone,
      value: profile.phoneDisplay,
      href: profile.phoneHref,
    },
    {
      label: t.contact.location,
      value: L(profile.location),
      href: undefined,
    },
  ]

  return (
    <section id="contact" className="relative pt-28 pb-10">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal>
          <SectionHeading index="05" title={t.contact.title} subtitle={t.contact.subtitle} />
        </Reveal>

        <Reveal delay={150}>
          <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-3">
            {channels.map((channel) => {
              const content = (
                <>
                  <p className="text-accent mb-1.5 text-xs font-semibold tracking-wider uppercase">
                    {channel.label}
                  </p>
                  <p className="text-frost group-hover:text-accent text-sm font-medium break-all transition-colors duration-300">
                    {channel.value}
                  </p>
                </>
              )
              return channel.href ? (
                <a
                  key={channel.label}
                  href={channel.href}
                  onClick={() => logger.info('contact channel clicked', { channel: channel.label })}
                  className="glass group block rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50"
                >
                  {content}
                </a>
              ) : (
                <div key={channel.label} className="glass rounded-2xl p-5">
                  {content}
                </div>
              )
            })}
          </div>
        </Reveal>

        <Reveal delay={250}>
          <div className="mt-12 text-center">
            <a
              href={`mailto:${profile.email}`}
              className="from-accent to-violet shadow-accent/25 font-display inline-block rounded-full bg-gradient-to-r px-9 py-4 text-sm font-semibold text-slate-950 shadow-lg transition-transform duration-300 hover:scale-105"
            >
              {profile.email}
            </a>
          </div>
        </Reveal>

        <footer className="border-line mt-24 flex flex-col items-center justify-between gap-3 border-t pt-8 pb-4 text-xs text-mist sm:flex-row">
          <p>
            © {year} {profile.name}. {t.contact.rights}
          </p>
          <p className="font-mono">
            React 19 · Three.js r185 · Tailwind v4
          </p>
        </footer>
      </div>
    </section>
  )
}

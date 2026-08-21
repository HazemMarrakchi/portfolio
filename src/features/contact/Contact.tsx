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

        {(profile.github || profile.linkedin) && (
          <Reveal delay={350}>
            <div className="mt-8 flex items-center justify-center gap-4">
              {profile.github && (
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => logger.info('social clicked', { channel: 'GitHub' })}
                  aria-label="GitHub"
                  className="glass text-mist hover:text-accent hover:border-accent/50 flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-1"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
              )}
              {profile.linkedin && (
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => logger.info('social clicked', { channel: 'LinkedIn' })}
                  aria-label="LinkedIn"
                  className="glass text-mist hover:text-accent hover:border-accent/50 flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-1"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              )}
            </div>
          </Reveal>
        )}

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

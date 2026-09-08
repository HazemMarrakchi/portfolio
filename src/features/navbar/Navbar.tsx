import { useEffect, useState } from 'react'
import { useI18n, type Lang } from '../../core/i18n'
import { profile } from '../../data/profile'
import { logger } from '../../core/logger'

const LANGS: Lang[] = ['en', 'fr']

export default function Navbar() {
  const { t, lang, setLang } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#about', label: t.nav.about },
    { href: '#skills', label: t.nav.skills },
    { href: '#projects', label: t.nav.projects },
    { href: '#experience', label: t.nav.experience },
    { href: '#contact', label: t.nav.contact },
  ]

  const onNavClick = (label: string) => {
    setMenuOpen(false)
    logger.debug('nav click', { section: label })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass shadow-black/30 py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 lg:px-10">
        <a
          href="#hero"
          onClick={() => onNavClick('hero')}
          className="font-display text-gradient text-xl font-bold tracking-tight"
        >
          {profile.initials}
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => onNavClick(link.label)}
                className="text-mist hover:text-accent font-display text-sm font-medium tracking-wide transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <div className="glass flex overflow-hidden rounded-full p-0.5" role="group" aria-label="Language">
            {LANGS.map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => {
                  setLang(code)
                  logger.info('lang toggle clicked', { to: code })
                }}
                className={`font-display rounded-full px-3 py-1 text-xs font-semibold uppercase transition-colors duration-300 ${
                  lang === code ? 'from-accent to-violet text-slate-950 bg-gradient-to-r' : 'text-mist hover:text-frost'
                }`}
              >
                {code}
              </button>
            ))}
          </div>

          <a
            href={`./CV_Hazem_Marrakchi_${lang === 'fr' ? 'FR' : 'EN'}.pdf`}
            download
            className="glass font-display hover:border-accent/60 hidden rounded-full px-4 py-1.5 text-xs font-semibold text-frost transition-colors duration-300 md:inline-flex"
          >
            ↓ CV
          </a>

          <button
            type="button"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="glass text-frost flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full md:hidden"
          >
            <span className={`bg-current h-px w-4 transition-transform duration-300 ${menuOpen ? 'translate-y-[3.5px] rotate-45' : ''}`} />
            <span className={`bg-current h-px w-4 transition-transform duration-300 ${menuOpen ? '-translate-y-[3.5px] -rotate-45' : ''}`} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="glass mx-6 mt-3 rounded-2xl p-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => onNavClick(link.label)}
                  className="text-mist hover:text-accent block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

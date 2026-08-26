import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { logger } from './logger'
import type { Localized } from '../data/profile'

export type Lang = 'en' | 'fr'

const en = {
  nav: {
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    experience: 'Experience',
    contact: 'Contact',
  },
  hero: {
    available: 'Open to new opportunities',
    viewProjects: 'View my projects',
    contactMe: 'Get in touch',
    scroll: 'Scroll to explore',
  },
  about: {
    title: 'About me',
    subtitle: 'Engineer by training, builder by instinct.',
    basedIn: 'Based in',
    degree: 'Degree',
    degreeValue: 'Software Engineering — EUR-ACE® accredited',
    focus: 'Focus',
    focusValue: 'Full Stack Web · AI Integration',
  },
  skills: {
    title: 'Skills & Expertise',
    subtitle: 'The stack I reach for when shipping real products.',
  },
  projects: {
    title: 'Featured Projects',
    subtitle: 'Selected work from academic and professional engineering.',
    stack: 'Tech stack',
  },
  experience: {
    title: 'Experience',
    subtitle: 'Five years of hands-on engineering, from freelance to AI platforms.',
    educationTitle: 'Education & Certifications',
    certifications: 'Certifications',
    languagesTitle: 'Languages',
  },
  contact: {
    title: "Let's build something",
    subtitle: 'Looking for a full stack engineer who ships? My inbox is open.',
    email: 'Email',
    phone: 'Phone',
    location: 'Location',
    rights: 'All rights reserved.',
  },
}

const fr: typeof en = {
  nav: {
    about: 'À propos',
    skills: 'Compétences',
    projects: 'Projets',
    experience: 'Expérience',
    contact: 'Contact',
  },
  hero: {
    available: 'Ouvert aux opportunités',
    viewProjects: 'Voir mes projets',
    contactMe: 'Me contacter',
    scroll: 'Faites défiler pour explorer',
  },
  about: {
    title: 'À propos de moi',
    subtitle: 'Ingénieur de formation, bâtisseur par nature.',
    basedIn: 'Basé à',
    degree: 'Diplôme',
    degreeValue: 'Génie Logiciel — accrédité EUR-ACE®',
    focus: 'Focus',
    focusValue: 'Web Full Stack · Intégration IA',
  },
  skills: {
    title: 'Compétences & Expertise',
    subtitle: 'La stack que je choisis pour livrer de vrais produits.',
  },
  projects: {
    title: 'Projets Phares',
    subtitle: 'Un choix de réalisations académiques et professionnelles.',
    stack: 'Stack technique',
  },
  experience: {
    title: 'Expérience',
    subtitle: "Cinq ans d'ingénierie terrain, du freelance aux plateformes IA.",
    educationTitle: 'Formation & Certifications',
    certifications: 'Certifications',
    languagesTitle: 'Langues',
  },
  contact: {
    title: 'Construisons quelque chose',
    subtitle: "Vous cherchez un ingénieur full stack qui livre ? Ma boîte mail est ouverte.",
    email: 'E-mail',
    phone: 'Téléphone',
    location: 'Localisation',
    rights: 'Tous droits réservés.',
  },
}

const dicts: Record<Lang, typeof en> = { en, fr }
export type Dict = typeof en

interface I18nValue {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Dict
  L: (text: Localized) => string
}

const I18nContext = createContext<I18nValue | null>(null)
const STORAGE_KEY = 'portfolio-lang'

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'en' || saved === 'fr') return saved
  } catch (error) {
    logger.warn('localStorage unavailable for language preference', error)
  }
  return 'en'
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang)

  const setLang = (next: Lang) => {
    setLangState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch (error) {
      logger.warn('could not persist language preference', error)
    }
    logger.info('language switched', { lang: next })
  }

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo<I18nValue>(
    () => ({
      lang,
      setLang,
      t: dicts[lang],
      L: (text: Localized) => text[lang],
    }),
    [lang],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}

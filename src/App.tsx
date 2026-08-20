import { Suspense, lazy } from 'react'
import { I18nProvider } from './core/i18n'

const Scene3D = lazy(() => import('./features/hero/Scene3D'))
import Hero from './features/hero/Hero'
import Navbar from './features/navbar/Navbar'
import About from './features/about/About'
import Skills from './features/skills/Skills'
import Projects from './features/projects/Projects'
import Experience from './features/experience/Experience'
import Contact from './features/contact/Contact'

export default function App() {
  return (
    <I18nProvider>
      <Suspense fallback={null}>
        <Scene3D />
      </Suspense>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </I18nProvider>
  )
}

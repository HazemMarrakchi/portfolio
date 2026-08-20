import { useEffect, useRef, useState, type ReactNode } from 'react'
import { logger } from '../core/logger'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

export function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          logger.debug('section revealed')
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

interface SectionHeadingProps {
  index: string
  title: string
  subtitle?: string
}

export function SectionHeading({ index, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-14 text-center">
      <p className="font-display mb-3 text-sm font-medium tracking-[0.35em] text-accent">
        {index}
      </p>
      <h2 className="font-display text-3xl font-bold text-frost sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-xl text-base text-mist">{subtitle}</p>
      )}
      <div className="from-accent mx-auto mt-6 h-px w-24 bg-gradient-to-r to-violet" />
    </div>
  )
}

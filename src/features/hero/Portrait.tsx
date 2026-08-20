import { useEffect, useRef } from 'react'
import { logger } from '../../core/logger'
import { profile } from '../../data/profile'

const STACK_BADGES = [
  { label: 'Angular', dot: 'bg-accent', position: 'top-8 -left-3 sm:-left-7', delay: '0s' },
  { label: 'Node.js', dot: 'bg-violet', position: 'top-1/4 -right-3 sm:-right-7', delay: '1.4s' },
  { label: 'FastAPI', dot: 'bg-violet', position: '-bottom-5 left-8 sm:left-12', delay: '0.7s' },
  { label: 'MongoDB', dot: 'bg-accent', position: 'bottom-24 -right-4 sm:-right-9', delay: '2.1s' },
]

export default function Portrait() {
  const tiltRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    logger.info('portrait mounted')
  }, [])

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = tiltRef.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const rect = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `rotateY(${px * 13}deg) rotateX(${py * -13}deg)`
  }

  const handleLeave = () => {
    const el = tiltRef.current
    if (el) el.style.transform = 'rotateY(0deg) rotateX(0deg)'
  }

  return (
    <div
      className="relative mx-auto w-full max-w-xs pb-6 [perspective:1100px] sm:max-w-sm"
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      <div
        ref={tiltRef}
        className="transition-transform duration-300 ease-out will-change-transform"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="animate-[spin_9s_linear_infinite] absolute -inset-3 rounded-[2.4rem] bg-[conic-gradient(from_0deg,#22d3ee,#a78bfa,#22d3ee55,#a78bfa55,#22d3ee)] opacity-45 blur-md" />
        <div className="from-accent to-violet relative rounded-[2rem] bg-gradient-to-br p-[3px] shadow-2xl shadow-accent/15">
          <div className="relative overflow-hidden rounded-[calc(2rem-3px)]">
            <img
              src="/hazemphoto.jpeg"
              alt={profile.name}
              className="aspect-[4/5] w-full object-cover contrast-[1.04] saturate-[1.06]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-void/50 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-accent/8 mix-blend-overlay" />
          </div>
        </div>
      </div>

      {STACK_BADGES.map((badge) => (
        <span
          key={badge.label}
          style={{ animationDelay: badge.delay }}
          className={`glass animate-float font-display absolute z-10 flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap text-frost shadow-lg ${badge.position}`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${badge.dot}`} />
          {badge.label}
        </span>
      ))}
    </div>
  )
}

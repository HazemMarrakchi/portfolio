import { useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'
import { logger } from '../../core/logger'

const COLORS = {
  cyan: '#22d3ee',
  violet: '#a78bfa',
  deep: '#141d36',
}

function supportsWebGL(): boolean {
  try {
    const canvas = document.createElement('canvas')
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl2') ?? canvas.getContext('webgl'))
    )
  } catch {
    return false
  }
}

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/* ── distant star shell: slow drift + collective twinkle ─────────────── */
function StarShell({ animated }: { animated: boolean }) {
  const ref = useRef<THREE.Points>(null)
  const matRef = useRef<THREE.PointsMaterial>(null)

  const { arr, colors } = useMemo(() => {
    const count = 1100
    const arr = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const cyan = new THREE.Color(COLORS.cyan)
    const violet = new THREE.Color(COLORS.violet)
    const white = new THREE.Color('#e2e8f0')
    for (let i = 0; i < count; i++) {
      const v = new THREE.Vector3().randomDirection().multiplyScalar(15 + Math.random() * 13)
      arr.set([v.x, v.y, v.z], i * 3)
      const t = Math.random()
      const tint = t > 0.88 ? white : t > 0.5 ? cyan : violet
      colors.set([tint.r, tint.g, tint.b], i * 3)
    }
    return { arr, colors }
  }, [])

  useFrame((state, delta) => {
    if (!animated || !ref.current) return
    ref.current.rotation.y += delta * 0.006
    if (matRef.current) {
      matRef.current.opacity = 0.55 + Math.sin(state.clock.elapsedTime * 0.9) * 0.2
    }
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[arr, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        ref={matRef}
        size={0.06}
        sizeAttenuation
        vertexColors
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

/* ── near dust cloud: swirling motes with vertical drift ─────────────── */
function DustCloud({ animated }: { animated: boolean }) {
  const ref = useRef<THREE.Points>(null)

  const { positions, colors } = useMemo(() => {
    const count = 750
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const cyan = new THREE.Color(COLORS.cyan)
    const violet = new THREE.Color(COLORS.violet)
    for (let i = 0; i < count; i++) {
      const radius = 3.2 + Math.random() * 7.5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.75
      positions[i * 3 + 2] = radius * Math.cos(phi) * 0.6
      const tint = Math.random() > 0.5 ? cyan : violet
      colors[i * 3] = tint.r
      colors[i * 3 + 1] = tint.g
      colors[i * 3 + 2] = tint.b
    }
    return { positions, colors }
  }, [])

  useFrame((state, delta) => {
    if (!animated || !ref.current) return
    const t = state.clock.elapsedTime
    ref.current.rotation.y += delta * 0.045
    ref.current.position.y = Math.sin(t * 0.25) * 0.35
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        sizeAttenuation
        vertexColors
        transparent
        opacity={0.85}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

/* ── the core: breathing crystal, counter-rotating frames, orbit ring ─── */
function CoreObject({ animated }: { animated: boolean }) {
  const groupRef = useRef<THREE.Group>(null)
  const coreRef = useRef<THREE.Mesh>(null)
  const wireARef = useRef<THREE.Mesh>(null)
  const wireBRef = useRef<THREE.Mesh>(null)
  const satRef = useRef<THREE.Mesh>(null)
  const orbLightRef = useRef<THREE.PointLight>(null)

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime
    if (coreRef.current) {
      const breathe = 1 + Math.sin(t * 1.1) * 0.045
      coreRef.current.scale.setScalar(animated ? breathe : 1)
      coreRef.current.rotation.y += delta * 0.12
    }
    if (wireARef.current) {
      wireARef.current.rotation.y -= delta * 0.18
      wireARef.current.rotation.z += delta * 0.06
    }
    if (wireBRef.current) {
      wireBRef.current.rotation.y += delta * 0.11
      wireBRef.current.rotation.x -= delta * 0.045
    }
    if (satRef.current) {
      // satellite rides the orbital ring
      const a = t * 0.5
      const r = 3.1
      satRef.current.position.set(Math.cos(a) * r, 0, Math.sin(a) * r)
    }
    if (orbLightRef.current) {
      const a = t * 0.4 + Math.PI
      orbLightRef.current.position.set(Math.cos(a) * 4.2, Math.sin(t * 0.7) * 1.4, Math.sin(a) * 4.2)
      orbLightRef.current.color.setHSL(0.52 + Math.sin(t * 0.3) * 0.12, 0.9, 0.6)
    }
    if (groupRef.current) {
      const progress = Math.min(window.scrollY / window.innerHeight, 2.5)
      const scale = Math.max(1 - progress * 0.45, 0.4)
      groupRef.current.scale.setScalar(scale)
      groupRef.current.position.y = progress * 1.4
      groupRef.current.rotation.y = progress * 0.6
    }
  })

  return (
    <group ref={groupRef}>
      <Float
        speed={animated ? 1.4 : 0}
        rotationIntensity={animated ? 0.5 : 0}
        floatIntensity={animated ? 1.1 : 0}
      >
        {/* crystal core */}
        <mesh ref={coreRef}>
          <icosahedronGeometry args={[1.35, 0]} />
          <meshStandardMaterial
            color={COLORS.deep}
            emissive="#7c3aed"
            emissiveIntensity={0.55}
            metalness={0.65}
            roughness={0.25}
            flatShading
          />
        </mesh>
        {/* inner wireframe */}
        <mesh ref={wireARef}>
          <icosahedronGeometry args={[2.2, 1]} />
          <meshBasicMaterial color={COLORS.cyan} wireframe transparent opacity={0.26} />
        </mesh>
        {/* outer counter-rotating frame */}
        <mesh ref={wireBRef}>
          <icosahedronGeometry args={[3.0, 0]} />
          <meshBasicMaterial color={COLORS.violet} wireframe transparent opacity={0.1} />
        </mesh>
        {/* atmosphere glow shell */}
        <mesh scale={1.55}>
          <sphereGeometry args={[1.35, 32, 32]} />
          <meshBasicMaterial
            color={COLORS.violet}
            transparent
            opacity={0.16}
            side={THREE.BackSide}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
        {/* main orbital ring */}
        <mesh rotation={[Math.PI / 2.6, 0, 0.25]}>
          <torusGeometry args={[3.1, 0.012, 16, 160]} />
          <meshBasicMaterial
            color={COLORS.cyan}
            transparent
            opacity={0.55}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
        {/* faint secondary ring */}
        <mesh rotation={[Math.PI / 1.9, 0.35, -0.4]}>
          <torusGeometry args={[3.7, 0.008, 12, 140]} />
          <meshBasicMaterial
            color={COLORS.violet}
            transparent
            opacity={0.28}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
        {/* satellite riding the main ring */}
        <group rotation={[Math.PI / 2.6, 0, 0.25]}>
          <mesh ref={satRef}>
            <sphereGeometry args={[0.07, 16, 16]} />
            <meshBasicMaterial color="#e2e8f0" />
          </mesh>
        </group>
        {/* static fill + roaming key light */}
        <pointLight color={COLORS.cyan} intensity={42} distance={16} />
        <pointLight ref={orbLightRef} intensity={60} distance={18} color={COLORS.violet} />
      </Float>
    </group>
  )
}

function CameraRig({ animated }: { animated: boolean }) {
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (!animated) return
    const onMove = (e: PointerEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [animated])

  useFrame((state, delta) => {
    if (!animated) return
    state.camera.position.x = THREE.MathUtils.damp(state.camera.position.x, mouse.current.x * 0.9, 2.2, delta)
    state.camera.position.y = THREE.MathUtils.damp(state.camera.position.y, mouse.current.y * 0.55, 2.2, delta)
    state.camera.lookAt(0, 0, 0)
  })

  return null
}

export default function Scene3D() {
  const [webglOk] = useState(supportsWebGL)
  const [reduced] = useState(prefersReducedMotion)

  useEffect(() => {
    if (!webglOk) logger.warn('WebGL unavailable — rendering static fallback background')
    else logger.info('3D scene mounted', { webgl: true, reducedMotion: reduced })
  }, [webglOk, reduced])

  if (!webglOk) {
    return (
      <div aria-hidden className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(34,211,238,0.16),transparent_55%),radial-gradient(ellipse_at_70%_70%,rgba(167,139,250,0.14),transparent_55%)]" />
      </div>
    )
  }

  return (
    <div aria-hidden className="fixed inset-0 -z-10" style={{ pointerEvents: 'none' }}>
      <Canvas
        camera={{ position: [0, 0, 9], fov: 55 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true }}
      >
        <fog attach="fog" args={['#05070d', 12, 30]} />
        <ambientLight intensity={0.45} />
        <directionalLight position={[6, 8, 5]} intensity={1.1} color="#e2e8f0" />
        <StarShell animated={!reduced} />
        <DustCloud animated={!reduced} />
        <CoreObject animated={!reduced} />
        <CameraRig animated={!reduced} />
      </Canvas>
    </div>
  )
}

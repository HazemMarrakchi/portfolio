import { useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'
import { logger } from '../../core/logger'

const PARTICLE_COUNT = 1400

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

function ParticleField({ animated }: { animated: boolean }) {
  const pointsRef = useRef<THREE.Points>(null)

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3)
    const colors = new Float32Array(PARTICLE_COUNT * 3)
    const cyan = new THREE.Color('#22d3ee')
    const violet = new THREE.Color('#a78bfa')
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const radius = 6 + Math.random() * 9
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

  useFrame((_, delta) => {
    if (!animated || !pointsRef.current) return
    pointsRef.current.rotation.y += delta * 0.032
    pointsRef.current.rotation.x += delta * 0.008
  })

  return (
    <points ref={pointsRef}>
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

function CoreObject({ animated }: { animated: boolean }) {
  const wireRef = useRef<THREE.Mesh>(null)
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state, delta) => {
    if (!animated) return
    if (wireRef.current) {
      wireRef.current.rotation.y -= delta * 0.18
      wireRef.current.rotation.z += delta * 0.06
    }
    if (groupRef.current) {
      const progress = Math.min(window.scrollY / window.innerHeight, 2.5)
      const scale = Math.max(1 - progress * 0.45, 0.4)
      groupRef.current.scale.setScalar(scale)
      groupRef.current.position.y = progress * 1.4
      void state
    }
  })

  return (
    <group ref={groupRef}>
      <Float
        speed={animated ? 1.4 : 0}
        rotationIntensity={animated ? 0.5 : 0}
        floatIntensity={animated ? 1.1 : 0}
      >
        <mesh>
          <icosahedronGeometry args={[1.35, 0]} />
          <meshStandardMaterial
            color="#141d36"
            emissive="#7c3aed"
            emissiveIntensity={0.55}
            metalness={0.65}
            roughness={0.25}
            flatShading
          />
        </mesh>
        <mesh ref={wireRef}>
          <icosahedronGeometry args={[2.2, 1]} />
          <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.26} />
        </mesh>
        <pointLight color="#22d3ee" intensity={42} distance={16} />
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
        <fog attach="fog" args={['#05070d', 11, 24]} />
        <ambientLight intensity={0.45} />
        <directionalLight position={[6, 8, 5]} intensity={1.1} color="#e2e8f0" />
        <ParticleField animated={!reduced} />
        <CoreObject animated={!reduced} />
        <CameraRig animated={!reduced} />
      </Canvas>
    </div>
  )
}

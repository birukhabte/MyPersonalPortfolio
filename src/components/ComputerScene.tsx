import { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Simple desktop computer model
function DesktopComputer() {
  const computerRef = useRef<THREE.Group>(null!)
  
  useFrame((state) => {
    if (computerRef.current) {
      // Floating animation
      computerRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      // Subtle rotation
      computerRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.05
    }
  })

  return (
    <group ref={computerRef} position={[0, -0.5, 0]}>
      {/* Monitor Base */}
      <mesh position={[0, -0.8, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.8, 0.1, 0.3]} />
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>
      
      {/* Monitor Stand */}
      <mesh position={[0, -0.4, 0]} castShadow>
        <boxGeometry args={[0.05, 0.8, 0.05]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      
      {/* Monitor Screen Frame */}
      <mesh position={[0, 0.2, 0]} castShadow>
        <boxGeometry args={[1.2, 0.8, 0.05]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      
      {/* Monitor Screen */}
      <mesh position={[0, 0.2, 0.026]}>
        <planeGeometry args={[1.1, 0.7]} />
        <meshBasicMaterial color="#001122" />
      </mesh>
      
      {/* Screen Content - Simple animated rectangle */}
      <mesh position={[0, 0.2, 0.027]}>
        <planeGeometry args={[1.0, 0.6]} />
        <meshBasicMaterial color="#00ff41" transparent opacity={0.3} />
      </mesh>
      
      {/* Keyboard */}
      <mesh position={[0, -0.85, 0.4]} castShadow receiveShadow>
        <boxGeometry args={[0.6, 0.02, 0.2]} />
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>
      
      {/* Mouse */}
      <mesh position={[0.4, -0.84, 0.3]} castShadow>
        <boxGeometry args={[0.08, 0.02, 0.12]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      
      {/* Simple keyboard keys */}
      {[...Array(12)].map((_, i) => (
        <mesh
          key={i}
          position={[
            -0.2 + (i % 6) * 0.08,
            -0.83,
            0.35 + Math.floor(i / 6) * 0.08
          ]}
          castShadow
        >
          <boxGeometry args={[0.04, 0.01, 0.04]} />
          <meshStandardMaterial color="#3a3a3a" />
        </mesh>
      ))}
    </group>
  )
}

// Simple floating particles
function FloatingParticles() {
  const particlesRef = useRef<THREE.Points>(null!)
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
    }
  })

  // Create particle positions
  const positions = new Float32Array(30 * 3)
  for (let i = 0; i < 30; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 6
    positions[i * 3 + 1] = (Math.random() - 0.5) * 4
    positions[i * 3 + 2] = (Math.random() - 0.5) * 3
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={30}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#D4A373"
        size={0.05}
        transparent
        opacity={0.8}
        sizeAttenuation={true}
      />
    </points>
  )
}

// Tech icons as simple spheres
function TechIcons() {
  const iconsRef = useRef<THREE.Group>(null!)
  
  useFrame((state) => {
    if (iconsRef.current) {
      iconsRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  const icons = [
    { pos: [2, 1, -1], color: "#61DAFB" },
    { pos: [-2, 0.5, -0.5], color: "#68A063" },
    { pos: [1.5, -1, 1], color: "#F7DF1E" },
    { pos: [-1.8, -0.8, 0.8], color: "#3178C6" },
  ]

  return (
    <group ref={iconsRef}>
      {icons.map((icon, index) => (
        <mesh key={index} position={icon.pos as [number, number, number]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial
            color={icon.color}
            emissive={icon.color}
            emissiveIntensity={0.3}
          />
        </mesh>
      ))}
    </group>
  )
}

// Loading fallback
function LoadingFallback() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="text-golden text-xl animate-pulse">Loading 3D Scene...</div>
    </div>
  )
}

// Error boundary fallback
function ErrorFallback() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="text-center text-golden">
        <div className="text-6xl mb-4">💻</div>
        <div className="text-lg">3D Computer Model</div>
        <div className="text-sm opacity-60 mt-2">WebGL not supported</div>
      </div>
    </div>
  )
}

// Main computer scene component
const ComputerScene = () => {
  return (
    <div className="w-full h-full">
      <Suspense fallback={<LoadingFallback />}>
        <Canvas
          camera={{ position: [0, 0, 4], fov: 60 }}
          style={{ background: 'transparent' }}
          shadows
          gl={{ antialias: true, alpha: true }}
          onCreated={({ gl }) => {
            gl.setClearColor(0x000000, 0)
          }}
          fallback={<ErrorFallback />}
        >
          {/* Lighting setup */}
          <ambientLight intensity={0.4} />
          <directionalLight
            position={[5, 5, 5]}
            intensity={1}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <pointLight position={[-3, 3, 3]} intensity={0.5} color="#D4A373" />
          <spotLight
            position={[0, 5, 2]}
            angle={0.3}
            penumbra={1}
            intensity={0.6}
            castShadow
          />
          
          {/* 3D Elements */}
          <DesktopComputer />
          <FloatingParticles />
          <TechIcons />
          
          {/* Ground plane for shadows */}
          <mesh position={[0, -1.5, 0]} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[10, 10]} />
            <meshStandardMaterial color="#0a0a0a" transparent opacity={0.1} />
          </mesh>
        </Canvas>
      </Suspense>
    </div>
  )
}

export default ComputerScene
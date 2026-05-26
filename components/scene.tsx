"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function GeodesicOrb() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    // Continuous slow auto-rotation
    groupRef.current.rotation.y += delta * 0.13;
    groupRef.current.rotation.x += delta * 0.04;
    // Gentle mouse parallax — clamped
    const px = state.pointer.x * 0.18;
    const py = state.pointer.y * 0.12;
    groupRef.current.position.x += (1.85 + px - groupRef.current.position.x) * 0.04;
    groupRef.current.position.y += (-0.1 + py * 0.6 - groupRef.current.position.y) * 0.04;
  });

  return (
    <group ref={groupRef} position={[1.85, -0.1, 0]}>
      {/* Inner geodesic — highest detail */}
      <mesh>
        <icosahedronGeometry args={[0.95, 1]} />
        <meshBasicMaterial
          wireframe
          color="#34f5a5"
          transparent
          opacity={0.55}
        />
      </mesh>

      {/* Mid shell — denser */}
      <mesh>
        <icosahedronGeometry args={[1.35, 2]} />
        <meshBasicMaterial
          wireframe
          color="#34f5a5"
          transparent
          opacity={0.18}
        />
      </mesh>

      {/* Outer ghost shell — low-poly */}
      <mesh rotation={[Math.PI / 5, 0, Math.PI / 7]}>
        <icosahedronGeometry args={[1.85, 0]} />
        <meshBasicMaterial
          wireframe
          color="#34f5a5"
          transparent
          opacity={0.1}
        />
      </mesh>

      {/* Orbital rings — angled */}
      <mesh rotation={[Math.PI / 2.4, 0, 0]}>
        <torusGeometry args={[2.25, 0.004, 8, 96]} />
        <meshBasicMaterial color="#34f5a5" transparent opacity={0.35} />
      </mesh>
      <mesh rotation={[Math.PI / 2, Math.PI / 4, Math.PI / 8]}>
        <torusGeometry args={[2.6, 0.004, 8, 96]} />
        <meshBasicMaterial color="#f6c177" transparent opacity={0.22} />
      </mesh>

      {/* A single satellite — small wireframe tetra orbiting on a virtual track */}
      <Satellite radius={2.6} angleOffset={0} speed={0.35} />
      <Satellite radius={2.25} angleOffset={Math.PI} speed={-0.22} color="#f6c177" />
    </group>
  );
}

function Satellite({
  radius,
  angleOffset,
  speed,
  color = "#34f5a5",
}: {
  radius: number;
  angleOffset: number;
  speed: number;
  color?: string;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * speed + angleOffset;
    ref.current.position.set(
      Math.cos(t) * radius,
      Math.sin(t * 0.4) * 0.4,
      Math.sin(t) * radius * 0.4
    );
    ref.current.rotation.x = t * 1.3;
    ref.current.rotation.y = t * 0.7;
  });

  return (
    <mesh ref={ref}>
      <tetrahedronGeometry args={[0.07, 0]} />
      <meshBasicMaterial wireframe color={color} transparent opacity={0.85} />
    </mesh>
  );
}

function ParticleField({ count = 320 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const { viewport } = useThree();

  const { positions, sizes } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * viewport.width * 1.8;
      positions[i * 3 + 1] = (Math.random() - 0.5) * viewport.height * 1.6;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
      sizes[i] = Math.random() * 0.02 + 0.005;
    }
    return { positions, sizes };
  }, [count, viewport.width, viewport.height]);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.015;
    // Subtle vertical drift
    ref.current.position.y =
      Math.sin(state.clock.elapsedTime * 0.1) * 0.12;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.018}
        color="#ece8e2"
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export function HeroScene() {
  return (
    <Canvas
      className="!absolute inset-0"
      camera={{ position: [0, 0, 5], fov: 50 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      <GeodesicOrb />
      <ParticleField />
    </Canvas>
  );
}

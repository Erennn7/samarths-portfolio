'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Float, Sphere, MeshDistortMaterial, Environment } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import { Mesh, Color } from 'three';
import * as THREE from 'three';

function AnimatedSphere({ position, color, speed = 1 }: { position: [number, number, number], color: string, speed?: number }) {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
    }
  });

  return (
    <Float
      speed={speed * 2}
      rotationIntensity={speed}
      floatIntensity={speed * 2}
    >
      <Sphere ref={meshRef} position={position} args={[1, 64, 64]}>
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.6}
          distort={0.4}
          speed={speed * 2}
          roughness={0.1}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

function FloatingGeometry() {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={1}
      floatIntensity={2}
    >
      <mesh ref={meshRef} position={[2, 0, -5]}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#8b5cf6"
          transparent
          opacity={0.7}
          wireframe
          emissive="#8b5cf6"
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
}

function FloatingTorus() {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={2}
      floatIntensity={1}
    >
      <mesh ref={meshRef} position={[-3, 2, -8]}>
        <torusGeometry args={[1, 0.3, 16, 100]} />
        <meshStandardMaterial
          color="#06b6d4"
          transparent
          opacity={0.5}
          wireframe
          emissive="#06b6d4"
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  );
}

function ParticleField() {
  const points = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(1000 * 3);
    for (let i = 0; i < 1000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.x = state.clock.elapsedTime * 0.05;
      points.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#8b5cf6"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function FloatingCube() {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.x = 4 + Math.sin(state.clock.elapsedTime * 0.5) * 2;
    }
  });

  return (
    <Float
      speed={1.8}
      rotationIntensity={1.5}
      floatIntensity={1.5}
    >
      <mesh ref={meshRef} position={[4, -2, -6]}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial
          color="#ec4899"
          transparent
          opacity={0.6}
          wireframe
          emissive="#ec4899"
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
}

export default function BackgroundScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 60 }}
      className="w-full h-full"
      gl={{ antialias: true, alpha: true }}
    >
      <fog attach="fog" args={['#000000', 10, 50]} />
      
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#8b5cf6" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />
      <pointLight position={[0, 10, -10]} intensity={0.4} color="#ec4899" />
      <spotLight
        position={[0, 20, 0]}
        angle={0.3}
        penumbra={1}
        intensity={0.5}
        color="#8b5cf6"
        castShadow
      />
      
      <Environment preset="night" />
      
      <Stars
        radius={300}
        depth={60}
        count={2000}
        factor={8}
        saturation={0}
        fade={true}
        speed={0.5}
      />
      
      <ParticleField />
      <FloatingGeometry />
      <FloatingTorus />
      <FloatingCube />
      
      <AnimatedSphere position={[-4, 3, -10]} color="#8b5cf6" speed={1.2} />
      <AnimatedSphere position={[5, -1, -12]} color="#06b6d4" speed={0.8} />
      <AnimatedSphere position={[0, 4, -15]} color="#ec4899" speed={1.5} />
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        autoRotate={true}
        autoRotateSpeed={0.3}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
}
'use client';
import * as THREE from 'three';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
import { Suspense, useCallback, useMemo, useRef } from 'react';

import circle from './assets/circle.png';
import { waveColors } from '@/styles/colors';

const Points: React.FC = () => {
  const texture = useLoader(THREE.TextureLoader, circle.src);
  const bufferRef = useRef<THREE.BufferAttribute>(null);
  const materialRef = useRef<THREE.PointsMaterial>(null);

  let t = 0;
  const f = 0.002;
  const a = 3;

  const graph = useCallback(
    (x: number, z: number) => {
      return Math.sin(f * (x ** 2 + z ** 2 + t)) * a;
    },
    [t, f, a]
  );

  setInterval(() => {
    if (materialRef.current) {
      materialRef.current.color = new THREE.Color(
        waveColors[Math.floor(Math.random() * waveColors.length)]
      );
    }
  }, 8000);

  const count = 100;
  const gap = 3;

  const positions = useMemo(() => {
    const positions = [];

    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        const x = gap * (xi - count / 2);
        const z = gap * (zi - count / 2);
        const y = graph(x, z);
        positions.push(x, y, z);
      }
    }

    return new Float32Array(positions);
  }, [count, gap, graph]);

  useFrame(() => {
    t += 15;

    const buffer = bufferRef?.current;

    if (!buffer) return;

    let i = 0;
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        const x = gap * (xi - count / 2);
        const z = gap * (zi - count / 2);

        positions[i + 1] = graph(x, z);
        i += 3;
      }
    }

    bufferRef.current.needsUpdate = true;
  });

  return (
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          ref={bufferRef}
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        ref={materialRef}
        attach="material"
        map={texture}
        color="#00FFFF"
        size={0.5}
        sizeAttenuation
        transparent={true}
        alphaTest={0.5}
        opacity={1.0}
      />
    </points>
  );
};

const FloatingPoints: React.FC = () => {
  return (
    <Canvas
      camera={{ position: [0, 100, 0], fov: 75 }}
      style={{ width: '100vw', height: '100vh' }}
    >
      {/* <OrbitControls /> */}
      <Points />
    </Canvas>
  );
};

export default FloatingPoints;

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function ParticleNetwork({ count = 60, distanceThreshold = 2.5 }) {
  const points = useRef();
  const lines = useRef();
  const group = useRef();

  // 1. Generate random starting positions and speed for each node
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10
        ),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02
        ),
      });
    }
    return temp;
  }, [count]);

  // 2. Allocate memory for the graphics card
  const maxLines = count * count * 3;
  const positions = useMemo(() => new Float32Array(count * 3), [count]);
  const linePositions = useMemo(() => new Float32Array(maxLines), [maxLines]);

  // 3. This loop runs 60 times a second to animate the network
  useFrame((state) => {
    // Slowly rotate the entire network for a cinematic feel
    group.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    group.current.rotation.x = state.clock.getElapsedTime() * 0.02;

    let lineIndex = 0;

    for (let i = 0; i < count; i++) {
      const p = particles[i];
      p.position.add(p.velocity);

      // Bounce nodes off invisible boundaries
      if (Math.abs(p.position.x) > 5) p.velocity.x *= -1;
      if (Math.abs(p.position.y) > 5) p.velocity.y *= -1;
      if (Math.abs(p.position.z) > 5) p.velocity.z *= -1;

      positions[i * 3] = p.position.x;
      positions[i * 3 + 1] = p.position.y;
      positions[i * 3 + 2] = p.position.z;

      // Check distance to other nodes to draw connecting lines
      for (let j = i + 1; j < count; j++) {
        const p2 = particles[j];
        const dist = p.position.distanceTo(p2.position);
        
        if (dist < distanceThreshold) {
          linePositions[lineIndex++] = p.position.x;
          linePositions[lineIndex++] = p.position.y;
          linePositions[lineIndex++] = p.position.z;
          linePositions[lineIndex++] = p2.position.x;
          linePositions[lineIndex++] = p2.position.y;
          linePositions[lineIndex++] = p2.position.z;
        }
      }
    }

    // Tell the graphics card to update the screen
    if (points.current) {
      points.current.geometry.attributes.position.needsUpdate = true;
    }
    if (lines.current) {
      lines.current.geometry.attributes.position.needsUpdate = true;
      lines.current.geometry.setDrawRange(0, lineIndex / 3);
    }
  });

  return (
    <group ref={group}>
      {/* The Nodes */}
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        {/* Tailwind Green-400 equivalent */}
        <pointsMaterial size={0.12} color="#4ade80" transparent opacity={0.8} />
      </points>

      {/* The Connecting Lines */}
      <lineSegments ref={lines}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={maxLines / 3}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#4ade80" transparent opacity={0.15} />
      </lineSegments>
    </group>
  );
}
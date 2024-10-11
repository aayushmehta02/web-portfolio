import { useGLTF, useTexture } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useRef } from 'react';

export function DemoComputer(props) {
  const { nodes, materials } = useGLTF('/assets/macbook_pro_2021.glb');
  const groupRef = useRef();

  // Get the mouse position from useThree inside the component
  const { mouse } = useThree();
  const screenTexture = useTexture('/assets/socioconnect.png');
  screenTexture.flipY = false;

  // Adjust the scaling of the texture so that it fits 3/4th of the screen
  screenTexture.repeat.set(1, 1);  // Set the full texture scale
  screenTexture.needsUpdate = true;

  // Rotation based on mouse movement
  useFrame(() => {
    if (groupRef.current) {
      const rotationAmount = 1.2;
      const maxRotation = Math.PI / 2;

      groupRef.current.rotation.x = Math.max(
        -maxRotation,
        Math.min(maxRotation, mouse.y * rotationAmount)
      );
      groupRef.current.rotation.y = Math.max(
        -maxRotation,
        Math.min(maxRotation, mouse.x * rotationAmount)
      );
    }
  });

  return (
    <group {...props} dispose={null} ref={groupRef}>
      {/* Applying default rotation to correct the initial 90-degree rotation */}
      <group rotation={[0, Math.PI / 2, 0]} position={[0.1212586, -0.1, -0.09]} scale={1.8}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.MacBookPro}
        >
          {/* Adjust UVs to fit 3/4th of the screen */}
          <meshStandardMaterial
            attach="material"
            transparent={true}
            map={screenTexture}
          >
            <primitive
              attach="geometry"
              object={nodes.Object_6.geometry}
              onUpdate={(self) => {
                self.attributes.uv.array = self.attributes.uv.array.map((uv, i) => {
                  if (i % 2 === 0) return uv * 0.88; // scale horizontally (x-axis)
                  return uv * 0.88; // scale vertically (y-axis)
                });
                self.attributes.uv.needsUpdate = true;
              }}
            />
          </meshStandardMaterial>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.MacBookPro}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/assets/macbook_pro_2021.glb');

import { useGLTF, useTexture } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useRef } from 'react';

export function DemoComputer(props) {
  const { nodes, materials } = useGLTF('/assets/macbook_pro_2021.glb');
  const groupRef = useRef();

  // Get the mouse position from useThree inside the component
  const { mouse } = useThree();
  const screenTexture = useTexture('/assets/socioconnect.png');
  screenTexture.flipY = true; // Flip the texture vertically

  // Set the texture scale to fit the screen appropriately
  screenTexture.repeat.set(1, 1); // You might need to adjust these values to fit correctly

  // Rotation based on mouse movement
  useFrame(() => {
    if (groupRef.current) {
      const rotationAmount = 0.5; // Reduced for smoother rotation
      const maxRotation = Math.PI / 8; // Less maximum rotation for stability

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
      <group rotation={[0, Math.PI / 2, 0]} position={[0.1212586, -0.1, -0.09]} scale={1.8}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.MacBookPro}
        >
          <meshStandardMaterial
            attach="material"
            transparent={true}
            map={screenTexture}
            alphaTest={0.5} // Ensure transparency works correctly
          />
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

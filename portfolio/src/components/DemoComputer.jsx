import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useRef } from 'react';

export function DemoComputer(props) {
  const { nodes, materials } = useGLTF('/assets/macbook_pro_2021.glb');
  const groupRef = useRef();
  
  // Get the mouse position from useThree inside the component
  const { mouse } = useThree();

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
        Math.min(maxRotation, mouse.x * rotationAmount)  // Use mouse.x for y rotation
      );
    }
  });

  return (
    <group {...props} dispose={null} ref={groupRef} >
      {/* Applying default rotation to correct the initial 90-degree rotation */}
      <group rotation={[0, Math.PI / 2, 0]} position={[0.1212586, 0.0073169, -0.09  ]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.MacBookPro}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.MacBookPro}
        />
      </group>
      <group rotation={[0, Math.PI / 2, 0]} position={[0.1212586, 0.0073169, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.MacBookPro}
      />
      </group>
      
    </group>
  );
}

useGLTF.preload('/assets/macbook_pro_2021.glb');

import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import React, { useRef } from 'react'

const HackerRoom = (props) => {
  const { nodes, materials } = useGLTF("assets/hacker.glb")
  const groupRef = useRef()
  const { mouse } = useThree() // Get the normalized mouse position (-1 to 1 range)

  // Rotate the model based on mouse movement
  useFrame(() => {
    if (groupRef.current) {
      const rotationAmount = 0.2 // Adjust for sensitivity
      const maxRotation = Math.PI / 6 // Limit rotation

      // Use mouse.x and mouse.y to rotate the model
      groupRef.current.rotation.x = Math.max(-maxRotation, Math.min(maxRotation, mouse.y * rotationAmount))
      groupRef.current.rotation.y = Math.max(-maxRotation, Math.min(maxRotation, mouse.x * rotationAmount))
    }
  })

  return (
    <group
      {...props}
      ref={groupRef}
      dispose={null}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.retro_computer_setup_retro_computer_setup_Mat_0.geometry}
        material={materials.retro_computer_setup_Mat}
        rotation={[-Math.PI / 2, 0, 0]} // Initial rotation
      />
    </group>
  )
}

useGLTF.preload("assets/hacker.glb")

export default HackerRoom

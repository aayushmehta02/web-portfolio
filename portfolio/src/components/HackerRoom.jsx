import { useGLTF } from '@react-three/drei'
import React from 'react'
 const   HackerRoom=(props)=> {
  const { nodes, materials } = useGLTF("assets/hacker.glb")
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.retro_computer_setup_retro_computer_setup_Mat_0.geometry}
        material={materials.retro_computer_setup_Mat}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  )
}
useGLTF.preload("assets/hacker.glb")



export default HackerRoom




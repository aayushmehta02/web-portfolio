import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import AnimatedBoxes from './components/Animation'


const RotatingCube=()=>{
  const meshRef = useRef()

  useFrame(()=>{
    if (meshRef.current){
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
    }
  })
  return(
    

    <mesh ref={meshRef} position={[-2.5,1.5,0]}>

    <cylinderGeometry args={[1,1,1]}/>
    <meshLambertMaterial color="#468585" emissive="#468585" />
    </mesh>
    )
}
const App = () =>{
  return(
    <main>
      <AnimatedBoxes/>
    </main>
  )
}

export default App
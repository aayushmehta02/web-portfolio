import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import About from './sections/About';
import Hero from './sections/Hero';
import Navbar from './sections/Navbar';

// RotatingCube Component
const RotatingCube = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={[-2.5, 1.5, 0]}>
      <cylinderGeometry args={[1, 1, 1]} />
      <meshLambertMaterial color="#468585" emissive="#468585" />
    </mesh>
  );
};

// App Component
const App = () => {
  return (
    <main className='overflow-x-hidden'>
      <div style={contentStyle}>
      <Navbar />
        <Navbar />
        <Hero />
        <About/>
        
      </div>
      

      
      
    </main>
  );
};


const backgroundStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: -1, 
};

// Styling for main content
const contentStyle = {
  position: 'relative',
  zIndex: 1,
};

export default App;

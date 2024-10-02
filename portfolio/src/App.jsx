import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import AnimatedBoxes from './components/Animation';
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
    <main style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      {/* Background component */}
      <AnimatedBoxes style={backgroundStyle} />

      {/* Foreground content */}
      <div style={contentStyle}>
        <Navbar />
        <Hero />
      </div>
    </main>
  );
};

// Styling for background container
const backgroundStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: -80, // Ensure it stays in the background
};

// Styling for main content
const contentStyle = {
  position: 'relative',
  zIndex: 5, // Ensure content is on top of the background
};

export default App;

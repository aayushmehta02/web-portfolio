

import { useGSAP } from '@gsap/react';
import { Float, useGLTF, useTexture } from '@react-three/drei';
import gsap from 'gsap';
import { useRef, useState } from 'react';

const Cube = ({ ...props }) => {
  const { nodes } = useGLTF('assets/cube.glb');

  const texture = useTexture('assets/cube.png');

  const cubeRef = useRef();
  const [hovered, setHovered] = useState(false);

  useGSAP(() => {
    gsap
      .timeline({
        repeat: -1,
        repeatDelay: 0.1,
      })
      .to(cubeRef.current.rotation, {
        y: hovered ? '+=2' : `+=${Math.PI * 2}`,
        x: hovered ? '+=2' : `-=${Math.PI * 2}`,
        duration: 2.5,
        stagger: {
          each: 0.15,
        },
      });
  });

  return (
    <Float floatIntensity={2}>
      <group position={[9, -4, 0]} rotation={[2.6, 0.8, -1.8]} scale={0.74} dispose={null} {...props}>
        <mesh
          ref={cubeRef}
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={nodes.Cube.material}
          onPointerEnter={() => {
            console.log('Pointer entered');
            setHovered(true)
          }}>
          
          <meshMatcapMaterial matcap={texture} toneMapped={false} />
        </mesh>
      </group>
    </Float>
  );
};

useGLTF.preload('assets/cube.glb');

export default Cube;
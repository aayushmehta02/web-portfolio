import { PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { useMediaQuery } from 'react-responsive';
import Buttons from '../components/Buttons';
import CanvasLoader from '../components/CanvasLoader';
import Cube from '../components/Cube';
import HackerRoom from '../components/HackerRoom';
import ReactLogo from '../components/ReactLogo';
import Rings from '../components/Rings';
import Target from '../components/Target';

const Hero = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 426px)'
  })
  return (
    <section className='min-h-screen w-full flex flex-col relative z-100 bg-black'>
        <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
            <p className='sm-text-3xl text-2xl font-medium text-white text-center font-generalsans'>
                Hi, I am Aayush <span className='waving-hand'>👋</span>
            </p>
            <p className='hero_tag text-gray_gradient'> Building Products & Brands</p>
        </div>
       
        <div className='w-full h-full absolute inset-0'>
            <Canvas className='w-1/2 h-[90%]'  >
            <Suspense fallback={<CanvasLoader/>}>
                
      <directionalLight position={[10, 10, 10]} intensity={0.5} />
                <HackerRoom 
        scale={isMobile ? 0.13 : 0.18} 
        position={isMobile? [-1, -4.5, 4]:[-2, -7.5, 4]} 
        rotation={[Math.PI /15, -Math.PI / 6, 0]} 
/>
<PerspectiveCamera makeDefault position = {[0,0,35]}/>
                <ambientLight intensity={1} />

            </Suspense>
            <group>
    
    <Target position={isMobile ? [5, -5, 0] : [15, -10, 0]} scale={isMobile ? 0.5 : 0.8} />
     <Rings position={isMobile ? [-15, -14, 0] : [-30, -15, 0]}/> 
    <Cube position={isMobile ? [5, 5, 0] : [15, 2, 0]} scale={isMobile ? 0.7 : 0.8}/>
<ReactLogo position={isMobile ? [-5, 5, 0] : [-15, 2, 0]} scale={isMobile ? 0.5 : 0.8}/>
  </group>

            </Canvas>
            <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space'>
          <a href='#contact' className='w-fit'>
            <Buttons name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
          </a>
        </div>
        </div>
        
    </section>
  )
}

export default Hero
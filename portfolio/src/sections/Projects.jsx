import { Center } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useState } from 'react';
import CanvasLoader from '../components/CanvasLoader';
import { DemoComputer } from '../components/DemoComputer';
import { myProjects } from '../constants';

const projectCount = myProjects.length;
const Projects = () => {

    
    
    const [selectedProjectedIndex, setselectedProjectedIndex] = useState(0);
    const handleNavigation = (direction) =>{
        setselectedProjectedIndex((prevIndex)=>{
            if(direction === 'previous'){
                return prevIndex === 0? projectCount-1: prevIndex-1;
            }else{
                return prevIndex === projectCount-1 ? 0 : prevIndex+1
            }
        })
    }
    const currentProject = myProjects[selectedProjectedIndex];
    
    
  return (
    <div>
        <section className='c-space my-20' id='about'>
            <p className='head-text'>My work</p>
            <div className='grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full'>
                <div className='flex flex-col gap-5 relative sm:p-10 oy-10 px-5 shadow-2xl shadow-black-200'>
                    <div className='absolute top-0 right-0'>
                        <img src={currentProject.spotlight} alt='spotligth'
                         className='w-full h-96 object-cover rounded-xl'/>
                    </div>
                    <div className=' backdrop-blur-3xl w-fit rounded-lg' style={currentProject.logoStyle}>
                        <img src={currentProject.logo } alt='logo' className='w-10 h-10 shadow-sm'/>
                    </div>
                    <div className='flex flex-col gap-5 text-white-600 my-5' >
                            <p className='text-white text-2xl font-semibold animatedText'>{currentProject.title}</p>
                            <p className='animatedText'>{currentProject.subdesc}</p>
                    </div>
                    <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>
            <a
              className="flex items-center gap-2 cursor-pointer text-white-600"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer">
              <p>Check Live Site</p>
              <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3 cursor-pointer" />
            </a>
                </div>
                <div className='flex justify-between items-center mt-7'>
                <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
              <img src="/assets/left-arrow.png" alt="left arrow" />
            </button>
            <button className="arrow-btn" onClick={() => handleNavigation('next')}>
              <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
            </button>
                </div>
            </div>
            <div className='border nprder-black-300 bg-black-200 rounded-lg h-96 md:h-full'>
              <Canvas>
                <ambientLight intensity={Math.PI}/>
                <directionalLight position={[10,10,5]}/>
                <Center>
                  <Suspense fallback={<CanvasLoader/>}>
                  <group scale={2} >

                    <DemoComputer scale={10} rotation={[-Math.PI , Math.PI, 0]} position={[-1,-1,0]} />
                  </group>

                  </Suspense>
                </Center>
              </Canvas>
            </div>
            </div>
        </section>
    </div>
  )
}

export default Projects
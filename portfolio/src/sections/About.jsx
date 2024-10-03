import * as d3 from 'd3';
import React, { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';
const About = () => {
    const World = () => {
        const globeEl = useRef();
        const [popData, setPopData] = useState([]);
    
        useEffect(() => {
          // load data
          fetch('/dataset/world_population.csv').then(res => res.text())
            .then(csv => d3.csvParse(csv, ({ lat, lng, pop }) => ({ lat: +lat, lng: +lng, pop: +pop })))
            .then(setPopData);
        }, []);
    
        useEffect(() => {
          // Auto-rotate
          globeEl.current.controls().autoRotate = true;
          globeEl.current.controls().autoRotateSpeed = 0.1;
        }, []);
    
        const weightColor = d3.scaleSequentialSqrt(d3.interpolateYlOrRd)
          .domain([0, 1e7]);
    
        return <Globe
          ref={globeEl}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
            onPointHover={true}
          hexBinPointsData={popData}
          hexBinPointWeight="pop"
          hexAltitude={d => d.sumWeight * 6e-8}
          hexBinResolution={4}
          hexTopColor={d => weightColor(d.sumWeight)}
          hexSideColor={d => weightColor(d.sumWeight)}
          hexBinMerge={true}
          enablePointerInteraction={true}
          width={400} // Set desired width
            height={300} // 
        />
      };
    

  return (
    <section className='c-space my-20'>
    <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-1 grid-cols-1 gap-5 h-full'>
        <div className='col-span-1 xl:row-span-3'>
            <div className='grid-container'>
                <img src='/assets/grid1.png' alt='grid-1' className='w-full sm:h-[276px] h-fit object-contain'/>
                <div>
                    <p className='grid-headtext'>Hi I am Aayush</p>
                    <p className='grid-subtext'>With over 4 years of experience, I have honed my skills in fronted
                    and backend development
                    </p>
                </div>
            </div>
        </div>
        <div className='col-span-1 xl:row-span-3'> 
        <div className='grid-container'>
            <img src='/assets/grid2.png' className='w-full sm:w[276px] h-fit object-contain'/>
            <div>
            <p className='grid-headtext'>Tech Stack</p>
            <p className='grid-subtext'>I specialise in the MERN ecosystem</p>
            </div>
            
        </div>

        </div>
        <div className='col-span-1 xl:row-span-3'>
        <div className='grid-container'>
        <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
        <World />
        </div>
            <img src='/assets/grid3.png' className='w-full sm:w[276px] h-fit object-contain'/>
            <div>
            <p className='grid-headtext'>Tech Stack</p>
            <p className='grid-subtext'>I specialise in the MERN ecosystem</p>
            </div>
            
            
        </div>
        </div>
    </div>

    </section>
  )
}

export default About
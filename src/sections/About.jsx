import JSFileDownloader from "js-file-downloader";
import React from 'react';
import Globe from 'react-globe.gl';
import { useMediaQuery } from 'react-responsive';
import Buttons from '../components/Buttons';
import { Keyboard } from "../components/Keyboard";
import Mail from "../components/Mail";
import Skills from '../components/Skills';


const About = () => {
  const { useState, useEffect } = React;


  const isMobile = useMediaQuery({
    query: '(max-width: 426px)'
  });
  const [hasCopied, setHasCopied] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 400, height: 400 });

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth < 640 ? window.innerWidth * 0.83 : 400; 
      const height = window.innerHeight < 640 ? window.innerHeight * 0.5 : 400; 
      setDimensions({ width, height });
    };

    window.addEventListener('resize', updateDimensions);

    // Call once to set initial size
    updateDimensions();

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText('aayushmehta022@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  // Globe component
  const World = () => {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
      // Load data
      fetch('/dataset/ne_110m_populated_places_simple.geojson')
        .then(res => res.json())
        .then(({ features }) => setPlaces(features));
    }, []);

    return (
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        labelsData={places}
        labelLat={d => d.properties.latitude}
        labelLng={d => d.properties.longitude}
        labelText={d => d.properties.name}
        labelSize={d => Math.sqrt(d.properties.pop_max) * 4e-4}
        labelDotRadius={d => Math.sqrt(d.properties.pop_max) * 4e-4}
        labelColor={() => 'rgba(255, 165, 0, 0.75)'}
        labelResolution={2}
        height={dimensions.height} 
        width={isMobile ? window.innerWidth * 0.75 : dimensions.width}
        autoRotate={true} 
        autoRotateSpeed={10} 
      />
    );
  };

  // Download resume function
  const handleDownload = () => {
    new JSFileDownloader({
      url: '/dataset/resume.pdf', // Replace with your server URL
      filename: 'AayushMehtaResume.pdf', // The name you want for the downloaded file
    })
      .then(function () {
        console.log("Download completed!");
      })
      .catch(function (error) {
        console.error("Download failed:", error);
      });
  };

  return (
    <section className='c-space my-20' id='about'>
      <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
        <div className='col-span-1 xl:row-span-3'>
          <div className='grid-container'>
            <img src='/assets/grid1.png' alt='grid-1' className='w-full sm:h-[276px] h-fit object-contain' />
            <div>
              <p className='grid-headtext'>Hi I am Aayush</p>
              <p className='grid-subtext'>With over 4 years of experience, I have honed my skills in website and app development.</p>
            </div>
          </div>
        </div>

        <div className='col-span-1 xl:row-span-3 flex flex-col items-center justify-center '>
  <div className='grid-container flex flex-col items-center justify-center flex-grow'>
    <Skills />
    <div className='mt-5 flex flex-col items-center'>
    {
      isMobile ? null : 
        <Keyboard />
      
    }
      
      <p className='grid-subtext text-center mt-2'>I specialize in the MERN ecosystem</p>
    </div>
    <div className='mt-5'>
      <button 
        onClick={handleDownload} 
        className="btn  transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg px-5 py-2 rounded-md bg-blue-600 text-white font-semibold">
        Download My Resume
      </button>
    </div>
  </div>
</div>

<div className='col-span-1 xl:row-span-4 flex flex-col items-center justify-center'>
  <div className='grid-container flex flex-col items-center justify-center'>
    <div className='rounded-3xl w-full sm:h-[326px] flex flex-col justify-center items-center'>
      <World />
    </div>
    <div className='mt-20 text-center'>
      <p className='grid-headtext'>Ready to collaborate from anywhere in the world.</p>
      <p className='grid-subtext'>Anytime, Anywhere</p>
      <Buttons name="Contact Me" isBeam containerClass="sm:w-fit w-full sm:min-w-96 mt-10" />
    </div>
  </div>
</div>

<div className="xl:col-span-2 xl:row-span-3 flex flex-col items-center justify-center">
  <div className="grid-container flex flex-col items-center justify-center text-center">
    <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
    <div className="mt-5">
      <p className="grid-headtext">My Passion for Coding</p>
      <p className="grid-subtext">
        As a dedicated and innovative software developer, my objective is to leverage my technical expertise, problem-solving skills,
        and passion for coding to contribute to cutting-edge projects. I aim to collaborate within a dynamic team, utilize my technical
        skills to create robust, and user-centric software solutions.
      </p>
    </div>
  </div>
</div>


        <div className="xl:col-span-1 xl:row-span-2 flex flex-col items-center justify-center">
  <div className="grid-container flex flex-col items-center justify-center"> {/* Centering the grid-container */}
    <div className="w-full md:h-[206px] sm:h-[276px] h-fit object-cover sm:object-top flex items-center justify-center"> {/* Centering Mail component */}
      <Mail />
    </div>
    
    <div className="space-y-2 text-center">
      <p className="grid-subtext">Contact me</p>
      <div className="copy-container" onClick={handleCopy}>
        <img src={hasCopied ? '/assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
        <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">aayushmehta022@gmail.com</p>
      </div>
    </div>
  </div>
</div>


      </div>
    </section>
  );
};

export default About;

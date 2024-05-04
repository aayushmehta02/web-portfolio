import React, { useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import image_Html from '../assets/image/Html 5.png';
import image_js from '../assets/image/JavaScript.png';
import image_python from '../assets/image/Python.png';
import image_react from '../assets/image/React.png';

const skillsData = [
  { name: 'REACT', image: image_react },
  { name: 'MONGODB', image: image_react },
  { name: 'NODEJS', image: image_react },
  { name: 'EXPRESSJS', image: image_react },
  { name: 'HTML', image: image_Html },
  { name: 'CSS', image: image_react },
  { name: 'PYTHON', image: image_python },
  { name: 'JAVASCRIPT', image: image_js },
  { name: 'JAVA', image: image_react}
];

const Skills = () => {
  useEffect(() => {
    const swiper = document.querySelector('.swiper_container').swiper;
    swiper.on('slideChange', () => {
      const slides = document.querySelectorAll('.swiper-slide');
      const activeIndex = swiper.activeIndex;

      slides.forEach((slide, index) => {
        slide.style.height = '100%';
      });
    });
  }, []);

  const renderSwiperSlide = (skill) => (
    <SwiperSlide key={skill.name}>
      <div className='card1'>
        <div className='cover1'>
          <div className='img'>
            <img src={skill.image} className='college-img'/>
          </div>
          <div>
            <p>{skill.name}</p>
          </div>
        </div>
      </div>
    </SwiperSlide>
  );

  return (
    <div style={{height:'50vh', backgroundColor:'black', display: 'flex', flexDirection:'column', alignContent:'center', justifyContent:'center', justifyItems:'center'}}>
      <div className="container" style={{backgroundColor:'black', height: '100%'}}>
        <div style={{color: 'white'}}>
          <h1>SKILLS</h1>
        </div>
        <Swiper
        
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 22,
            stretch: 0,
            depth: 21,
            modifier: 1.2,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {skillsData.map(renderSwiperSlide)}
        </Swiper>
      </div>
    </div>
  );
}

export default Skills;
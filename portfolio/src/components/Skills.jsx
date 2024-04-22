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
const Skills = () => {
    useEffect(() => {
        const swiper = document.querySelector('.swiper_container').swiper;
      swiper.on('slideChange', () => {
        const slides = document.querySelectorAll('.swiper-slide');
        const activeIndex = swiper.activeIndex;
        
        slides.forEach((slide, index) => {
          if (index !== activeIndex) {
            slide.style.height = '100%'; // Increase height for non-central images
          } else {
            slide.style.height = '100%'; // Decrease height for central image
          }
        });
      });
    }, []);
    
    return (
        <div className="container">
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
        <SwiperSlide>
          <div className='card1'>
          <div className='cover'>
            <div className='img'>
              <img src={image_react} className='college-img'/>

            </div>
           
            <div>
            <p>
              REACT
              </p>
            </div>
            </div>
              
              
             
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card1'>
          <div className='cover'>
            <div className='img'>
              <img src={image_react} className='college-img'/>

            </div>
           
            <div>
            <p>
              MONGODB
              </p>
            </div>
            </div>
              
              
             
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card1'>
          <div className='cover'>
            <div className='img'>
              <img src={image_react} className='college-img'/>

            </div>
           
            <div>
            <p>
              NODEJS
              </p>
            </div>
            </div>
              
              
             
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card1'>
          <div className='cover'>
            <div className='img'>
              <img src={image_react} className='college-img'/>

            </div>
           
            <div>
            <p>
              EXPRESSJS
              </p>
            </div>
            </div>
              
              
             
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card1'>
          <div className='cover'>
            <div className='img'>
              <img src={image_Html} className='college-img'/>

            </div>
           
            <div>
            <p>
              HTML
              </p>
            </div>
            </div>
              
              
             
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card1'>
          <div className='cover'>
            <div className='img'>
              <img src={image_react} className='college-img'/>

            </div>
           
            <div>
            <p>
              CSS
              </p>
            </div>
            </div>
              
              
             
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card1'>
          <div className='cover'>
            <div className='img'>
              <img src={image_python} className='college-img'/>

            </div>
           
            <div>
            <p>
              PYTHON
              </p>
            </div>
            </div>
              
              
             
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card1'>
          <div className='cover'>
            <div className='img'>
              <img src={image_js} className='college-img'/>

            </div>
           
            <div>
            <p>
              JAVASCRIPT
              </p>
            </div>
            </div>
              
              
             
            
          </div>
        </SwiperSlide>
        
      </Swiper>
      </div>
    );
}

export default Skills;

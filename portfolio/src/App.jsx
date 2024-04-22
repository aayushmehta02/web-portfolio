import { React, useEffect } from 'react';
import { CiLocationOn } from "react-icons/ci";
import { FaBook } from "react-icons/fa";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

// import slide_image_3 from './assets/images/Ellipse 14logo.png';
// import slide_image_2 from './assets/images/image 10iitm.jpg';
// import slide_image_5 from './assets/images/img_5.jpg';
// import slide_image_6 from './assets/images/img_6.jpg';
// import slide_image_7 from './assets/images/img_7.jpg';
import image from './assets/image/React.png';

function App() {
  useEffect(() => {
    const swiper = document.querySelector('.swiper_container').swiper;
    swiper.on('slideChange', () => {
      const slides = document.querySelectorAll('.swiper-slide');
      slides.forEach((slide) => {
        if (!slide.classList.contains('swiper-slide-active')) {
          slide.style.opacity = '0.7'; // Adjust the opacity as needed
        } else {
          slide.style.opacity = '1';
        }
      });
    });
  }, []);

  return (
    <div className="container" >
    
      <div className='bottom'>
        <p>
        Indian Institute Of Technology–Madras
        </p>
        <div className='loc_course'>
        <div className='location'>
        <CiLocationOn />
        Chennai, India
        </div>
        <div className='courses'>
        <FaBook />
        121 courses
        </div>
      </div>
      </div>
    
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        spaceBetween={-1}

        coverflowEffect={{
          rotate: 40,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: false,
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
        <SwiperSlide style={{display:"flex", flexDirection:"column", alignItems: "center", justifyContent: 'center', alignItems: 'center', height: '100vh', width: '40%' }}> 
  <div className='card1' style={{height: "100%", width: "50%", backgroundColor:'black', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
    <div className='text'>
      <h1>REACT</h1>
    </div>
    <div className='img'>
      <img src={image} className='iit-logo' style={{maxWidth: '100%', maxHeight: '100%'}}/>
    </div>
  </div>
</SwiperSlide>
        <SwiperSlide style={{display:"flex", flexDirection:"column", alignItems: "center", justifyContent: 'center', alignItems: 'center', height: '100vh', width: '40%'}}>
  <div className='card1' style={{height: "100%", width: "50%", backgroundColor:'black', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
    <div className='text'>
      <h1>REACT</h1>
    </div>
    <div className='img'>
      <img src={image} className='iit-logo' style={{maxWidth: '100%', maxHeight: '100%'}}/>
    </div>
  </div>
</SwiperSlide>
        <SwiperSlide style={{display:"flex", flexDirection:"column", alignItems: "center", justifyContent: 'center', alignItems: 'center', height: '100vh', width: '40%' }}>
  <div className='card1' style={{height: "100%", width: "70%", backgroundColor:'black', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
    <div className='text'>
      <h1>REACT</h1>
    </div>
    <div className='img'>
      <img src={image} className='iit-logo' style={{maxWidth: '100%', maxHeight: '100%'}}/>
    </div>
  </div>
</SwiperSlide>
        <SwiperSlide style={{display:"flex", flexDirection:"column", alignItems: "center", justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
  <div className='card1' style={{height: "100%", width: "70%", backgroundColor:'black', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
    <div className='text'>
      <h1>REACT</h1>
    </div>
    <div className='img'>
      <img src={image} className='iit-logo' style={{maxWidth: '100%', maxHeight: '100%'}}/>
    </div>
  </div>
</SwiperSlide>
        <SwiperSlide style={{display:"flex", flexDirection:"column", alignItems: "center", justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    
  <div className='card1' style={{height: "100%", width: "90%", backgroundColor:'black', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
    <div className='text'>
      <h1>REACT</h1>
    </div>
    <div className='img'>
      <img src={image} className='iit-logo' style={{maxWidth: '100%', maxHeight: '100%'}}/>
    </div>
  </div>
</SwiperSlide>
       
        

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default App;
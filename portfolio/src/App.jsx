import { React, useEffect } from 'react';
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
    <div className="container" style={{width: '100%'}}>
    
      <div style={{maxWidth: '70%', margin: '0 auto' }}>
    
    <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
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
        <SwiperSlide style={{display:"flex", flexDirection:"column", alignItems: "center", justifyContent: 'center', alignItems: 'center',  width:'70%'}}> 
  <div className='card1' style={{ backgroundColor:'black', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width:'80%'}}>
    <div className='text'>
      <h1>REACT</h1>
    </div>
    <div className='img'>
      <img src={image} className='iit-logo' />
    </div>
  </div>
</SwiperSlide>
        
        <SwiperSlide style={{display:"flex", flexDirection:"column", alignItems: "center", justifyContent: 'center', alignItems: 'center',  width:'70%'}}> 
  <div className='card1' style={{ backgroundColor:'black', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width:'80%'}}>
    <div className='text'>
      <h1>REACT</h1>
    </div>
    <div className='img'>
      <img src={image} className='iit-logo' />
    </div>
  </div>
</SwiperSlide>
        
        <SwiperSlide style={{display:"flex", flexDirection:"column", alignItems: "center", justifyContent: 'center', alignItems: 'center',  width:'70%'}}> 
  <div className='card1' style={{ backgroundColor:'black', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width:'80%'}}>
    <div className='text'>
      <h1>REACT</h1>
    </div>
    <div className='img'>
      <img src={image} className='iit-logo' />
    </div>
  </div>
</SwiperSlide>
        
        <SwiperSlide style={{display:"flex", flexDirection:"column", alignItems: "center", justifyContent: 'center', alignItems: 'center',  width:'70%'}}> 
  <div className='card1' style={{ backgroundColor:'black', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width:'80%'}}>
    <div className='text'>
      <h1>REACT</h1>
    </div>
    <div className='img'>
      <img src={image} className='iit-logo' />
    </div>
  </div>
</SwiperSlide>
        
        <SwiperSlide style={{display:"flex", flexDirection:"column", alignItems: "center", justifyContent: 'center', alignItems: 'center',  width:'70%'}}> 
  <div className='card1' style={{ backgroundColor:'black', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width:'80%'}}>
    <div className='text'>
      <h1>REACT</h1>
    </div>
    <div className='img'>
      <img src={image} className='iit-logo' />
    </div>
  </div>
</SwiperSlide>
        
        <SwiperSlide style={{display:"flex", flexDirection:"column", alignItems: "center", justifyContent: 'center', alignItems: 'center',  width:'70%'}}> 
  <div className='card1' style={{ backgroundColor:'black', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width:'80%'}}>
    <div className='text'>
      <h1>REACT</h1>
    </div>
    <div className='img'>
      <img src={image} className='iit-logo' />
    </div>
  </div>
</SwiperSlide>
  
  <SwiperSlide style={{display:"flex", flexDirection:"column", alignItems: "center", justifyContent: 'center', alignItems: 'center',  width:'70%'}}> 
  <div className='card1' style={{ backgroundColor:'black', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width:'80%'}}>
    <div className='text'>
      <h1>REACT</h1>
    </div>
    <div className='img'>
      <img src={image} className='iit-logo' />
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
    </div>
  );
}

export default App;
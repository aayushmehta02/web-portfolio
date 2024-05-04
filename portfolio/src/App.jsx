import { React } from 'react';
// import 'styles.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import AboutMe from './components/AboutMe';

import Experience from './components/Experience';
import Intro from './components/Intro';
import Skills from './components/Skills';
// import slide_image_5 from './assets/images/img_5.jpg';
// import slide_image_6 from './assets/images/img_6.jpg';
// import slide_image_7 from './assets/images/img_7.jpg';

function App() {


  return (
    <div style={{height: '100%'}}>
      <Intro/>
      <AboutMe/>
      <Skills/>
      {/* <Book/> */}
      <Experience/>
      
    
    
    </div>
  );
}

export default App;
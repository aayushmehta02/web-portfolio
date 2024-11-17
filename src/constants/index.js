export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
 
  export const myProjects = [
    {
      title: 'SocioConnect - A place for developers to connect',
      desc: 'Engineered a global networking platform facilitating seamless interaction and collaboration among developers worldwide',
      subdesc:
        'Empowering the exchange of ideas and fostering constructive feedback to drive innovation and excellence in the developer community',
      hrefs: [
        
        {
          label: "GitHub",
          url: 'https://github.com/aayushmehta02/SocioConnect'
        }
      ],
      texture: '/textures/project/project1.mp4',
      // logo: '/assets/project-logo1.png',
      // logoStyle: {
      //   backgroundColor: '#2A1816',
      //   border: '0.2px solid #36201D',
      //   boxShadow: '0px 0px 60px 0px #AA3C304D',
      // },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'Node Js',
          path: 'assets/node.png',
        },
        {
          id: 3,
          name: 'Express Js',
          path: '/assets/express.png',
        },
        {
          id: 4,
          name: 'MongoDb',
          path: '/assets/mongodb.svg',
        },
      ],
    },
    {
      title: 'Nutricraft - Your Calorie Tracker (Hackathon)',
      desc: 'With a team of four we developed NutriCraft: an advanced software solution for precise calorie tracking and comprehensive nutrition analysis.',
      subdesc: 'Leveraging Geminis Vision API, our innovative platform also generates recipes effortlessly from captured ingredient images. Committed to promoting holistic health through cutting-edge technology',
      hrefs: [
        {
          label: "Live Site",
          url: 'https://visual-gastronomy.web.app/login'
        },
        {
          label: "GitHub",
          url: 'https://github.com/Team-Perhaps/NutriCraft'
        }
      ],
      texture: '/textures/project/project2.mp4',
      
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'Firebase',
          path: '/assets/firebase-1.svg',
        },
        {
          id: 4,
          name: 'Gemini Vision API',
          path: '/assets/gemini.png',
        },
      ],
    },
    
    {
      title: 'Devopia (Hackathom)',
      desc: ' Designed and developed a comprehensive financial management solution, integrating PLAID API for seamless access to bank account balances',
      subdesc:
        'Additionally, implemented features enabling users to effortlessly monitor Relative Strength Index (RSI) of any stock. Demonstrated proficiency in enhancing user experience and delivering innovative solutions in the financial technology sector',
      hrefs: [
        {
          label: "GitHub",
          url: 'https://github.com/munsuyog/devopia'
        }
      ],
      texture: '/textures/project/project4.mp4',
      logo: '/assets/project-logo4.png',
      logoStyle: {
        backgroundColor: '#0E1F38',
        border: '0.2px solid #0E2D58',
        boxShadow: '0px 0px 60px 0px #2F67B64D',
      },
      spotlight: '/assets/spotlight4.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 3,
          name: 'Firebase',
          path: '/assets/firebase-1.svg',
        },
        {
          id: 3,
          name: 'Plaid API',
          path: '/assets/plaid.jpg',
        },
        
      ],
    },
    {
      title: 'SafeSpace - Because Mental Health Matters',
      desc: ' Led a dynamic team of 8 to craft a revolutionary website addressing student mental health.',
      subdesc:
        'Built a personalized chat system connecting students with psychiatrists, integrated with soothing meditation features and uplifting music. Elevating well-being, one click at a time',
      hrefs: [  
    { label: "Live Site", url: "https://error-3ea90.web.app/" },
    { label: "GitHub", url: "https://github.com/aayushmehta02/404error_sih" },
    
  ],
      texture: '/textures/project/project5.mp4',
      logo: '/assets/project-logo5.png',
      logoStyle: {
        backgroundColor: '#1C1A43',
        border: '0.2px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D',
      },
      spotlight: '/assets/spotlight5.png',
      tags: [
        {
          id: 1,
          name: 'HTML',
          path: '/assets/html.webp',
        },
        {
          id: 2,
          name: 'CSS',
          path: 'assets/css.png',
        },
        {
          id: 3,
          name: 'JavaScript',
          path: '/assets/js.png',
        },
        {
          id: 4,
          name: 'FIrebase',
          path: '/assets/firebase-1.svg',
        },
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Divine Solitaires',
      pos: 'Freelancer',
      duration: '2022 - Present',
      title: "Served as a Full Stack Developer, contributing expertise in crafting captivating digital experiences. Innovatively designed and executed a captivating landing page for the company’s ecommerce website, enhancing brand visibility and engagement.Skillfully contributed in the development of the brand's mobile application using React Native, delivering seamless user experiences across platforms. ",
      icon: '/assets/divine_logo.png',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Mergerr',
      pos: 'Full Stack Developer',
      duration: '2024',
      
      title: "Mergr is an online dating app developed entirely by me, aimed at professionals seeking long-term relationships. I built essential features like user registration, profile management, and real-time chat.",
      
      
      icon: '/assets/mergrr_Nb.png',
      animation: 'clapping',
    },
   
  ];
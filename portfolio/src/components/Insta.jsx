import React, { useEffect } from 'react';
import Stories from 'react-insta-stories';

const Insta = () => {
  const stories = [
    {
      url: 'https://fastly.picsum.photos/id/527/200/300.jpg?hmac=6Lf2qU7Zdc2yYQxeUig2n8w34lTZbsLR6qgw9x9zbfE',
      link: 'https://example.com/page1',
    },
    {
      content: ({ action, isPaused }) => {
        useEffect(() => {
          setTimeout(() => {
            action('pause');
            setTimeout(() => {
              action('play');
            }, 2000);
          }, 2000);
        }, []);
        return (
          <div style={{ background: 'pink', padding: 20 }}>
            <h1 style={{ marginTop: '100%', marginBottom: 0 }}>🌝</h1>
            <h1>{isPaused ? 'Paused' : 'Playing'}</h1>
            <a
              href="https://example.com/page2"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()} 
              style={{ color: 'white', fontSize: '20px', textDecoration: 'underline', cursor: 'pointer' }}>
              Click here for more
            </a>
          </div>
        );
      },
    },
    {
      url: 'https://fastly.picsum.photos/id/566/200/300.jpg?hmac=gDpaVMLNupk7AufUDLFHttohsJ9-C17P7L-QKsVgUQU',
      link: 'https://example.com/page3',
    },
  ];
  useEffect(() => {
    const handleTouchMove = (e) => {
      e.preventDefault();
    };

    document.addEventListener('touchmove', handleTouchMove, { passive: false }, );

    return () => {
      document.removeEventListener('touchmove', handleTouchMove, {passive: false});
    };
  }, []);

  return (
    <div  className='c-space my-20'>
    <Stories
      stories={stories}
      keyboardNavigation={true}
      loop={true}
      preventDefault={false}
      width="100%" // Fullscreen width
      
    />
  </div>
  );
};

export default Insta;



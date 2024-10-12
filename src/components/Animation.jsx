import { gsap } from 'gsap';
import React, { useState } from 'react';

const AnimatedBoxes = () => {
  const [lastIndex, setLastIndex] = useState(null); // State to track the last hovered index

  // Function to handle mouse enter on each box
  const handleMouseEnter = (index) => {
    setLastIndex(index); // Update last index on hover
    gsap.to(".box", {
      duration: 0.8,
      scale: 0.1,
      y: 40,
      ease: "power1.inOut",
      backgroundColor: 'darkblue',
      stagger: {
        grid: [7, 15],
        from: index, 
        amount: 1.5,
      },
    });
  };

  // Function to reset animation on mouse leave
  const handleMouseLeave = () => {
    if (lastIndex !== null) {
      gsap.to(".box", {
        duration: 0.8,
        scale: 1,
        y: 0,
        backgroundColor: 'lightblue',
        ease: "power1.inOut",
        stagger: {
          grid: [7, 15],
          from: lastIndex, // Reset from the last hovered box
          amount: 1.5,
        },
      });
    }
  };

  return (
    <div className="grid-container" style={gridStyle} >
      {/* Generate boxes with onMouseEnter handler that passes the index */}
      {[...Array(105)].map((_, index) => (
        <div style={{width: "100%", height: "100%"}} key={index} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}> 
        <div
          className="box"
          
          style={boxStyle}
          
        >
          </div>
        </div>
      ))}
    </div>
  );
};

// Style for the boxes
const boxStyle = {
  width: '0.4rem',
  height: '0.4rem',
    borderRadius: '50%',
  backgroundColor: 'lightblue',
  margin: '5px',
  display: 'inline-block',
};

// Style for the grid container
const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(15, 1fr)", // Use camelCase for property names
  gap: "2em",
  justifyContent: "center", // Use camelCase for property names
};

export default AnimatedBoxes;

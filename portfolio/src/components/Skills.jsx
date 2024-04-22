import React, { useState } from 'react';

const Skills = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalCardsLength = 8;

    
    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % (totalCardsLength - 2));
    }

    
    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + (totalCardsLength - 2)) % (totalCardsLength - 2));
    }
    return (
        <section className="skills-wrapper" id="section2">
            <div className="skills">
                <div className="skills-text" style={{ paddingTop: '5%', fontSize: '1.5em' }}>
                    <h1>SKILLS</h1>
                </div>
                <div className="carousel-container">
                    <div className="carousel-wrapper" id="carouselWrapper">
                        <div className="card card-responsive">
                            <h2>React</h2>
                            <img src="image/React.png" alt="React Logo" />
                        </div>
                        <div className="card card-responsive">
                            <h2>JavaScript</h2>
                            <img src="image/JavaScript.png" alt="JavaScript Logo" />
                        </div>
                        <div className="card card-responsive">
                            <h2>Python</h2>
                            <img src="image\Python.png" alt="Python Logo" />
                        </div>
                        <div className="card card-responsive">
                            <h2>React-Native</h2>
                            <img src="image/React.png" alt="React-Native Logo" />
                        </div>
                        <div className="card card-responsive">
                            <h2>HTML</h2>
                            <img src="image\Html 5.png" alt="HTML Logo" />
                        </div>
                        <div className="card card-responsive">
                            <h2>CSS</h2>
                            <img src="image/CSS3.png" alt="CSS3 Logo" />
                        </div>
                    </div>
                </div>
                <div className="buttons">
                    <button className="btn" onClick={prevSlide}> &lt; </button>
                    <button className="btn" onClick={nextSlide}> &gt; </button>
                </div>
            </div>
        </section>
    );
}

export default Skills;

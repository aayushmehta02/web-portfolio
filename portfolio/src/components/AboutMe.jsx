import React from 'react'
import github from '../assets/image/GitHub.png'
import instagram from '../assets/image/Instagram.png'
import linkedin from '../assets/image/LinkedIn.png'
import profile from '../assets/image/PROFILE.png'
export default function AboutMe() {
  return (
    <div>
      <section className="about-me-wrapper" id="section1">
            <div className="about-me">
                <div className="face-wrapper-two">
                    <div className="face-two">
                        <img className="face-intro-img" src={profile} alt="Profile" />
                    </div>
                </div>
                <div className="about-me-text-wrapper">
                    <div className="about-me-text">
                        <div className="about-me-heading">
                            <h3>ABOUT ME</h3>
                        </div>
                        <div className="para-text">
                            <h4>
                                As a dedicated and innovative software developer, my objective is to leverage my technical expertise, 
                                problem-solving skills and passion for coding to contribute to cutting edge projects. I aim to cultivate
                                a long-term and fulfilling career and to collaborate within a dynamic team utilizing my proficiency in various 
                                programming languages and development tools to create robust, efficient and user-centric software solutions. To innovate 
                                solutions that simplify complexities, enhance user experience and positively impact the world.
                            </h4>
                            <div className="images">
                                <a href="https://github.com/aayushmehta02">
                                    <img className="card-img" src={github} alt="GitHub" />
                                </a>
                                <a href="https://www.linkedin.com/in/aayush-mehta-6b7666242/">
                                    <img className="card-img" src={linkedin} alt="LinkedIn" />
                                </a>
                                <a href="https://www.instagram.com/aayush_020/?next=%2F">
                                    <img className="card-img" src={instagram} alt="Instagram" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

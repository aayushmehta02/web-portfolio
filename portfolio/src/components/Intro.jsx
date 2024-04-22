import React from 'react'
import profile_img from '../assets/image/PROFILE.png'

export default function Intro() {
  return (
    <div>
     <section className="intro-wrapper">
            <div className="intro">
                <div className="name">
                    <h2 className="hello-world">Hello World!</h2>
                    <h2 className="full-name">I'M AAYUSH MEHTA</h2>
                    <div className="web-wrapper">
                        <h1 className="web-developer">WEB DEVELOPER</h1>
                    </div>
                </div>
                <div className="face-wrapper">
                    <div className="face">
                        <img className="face-intro-img" src={profile_img} alt="Profile" />
                    </div>
                </div>
                <div className="black"></div>
            </div>
            <div className="headline-wrapper">
                <div className="headline">
                    <h1 className="text-headline">NAVIGATION</h1>
                </div>
                <div className="headline-text">
                    <a href="#section1"><h2>About</h2></a>
                    <a href="#section2"><h2>Skills</h2></a>
                    <a href="#section3"><h2>Experience</h2></a>
                    <a href="#section4"><h2>Contact</h2></a>
                </div>
            </div>
        </section>
    </div>
  )
}

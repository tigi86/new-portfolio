import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile from '../../assets/profile.png'
const About = () => {
    return (
        <div className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>

            <div className="about-sections">
                <div className="about-left">
                    <img src={profile} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Welcome to TigiCode – where coding meets creativity! I’m Tigi, a full-stack web developer and graphic designer with a passion for bringing ideas to life. Dive into a world of programming tutorials, from mastering React JS and JavaScript to exploring cutting-edge web development techniques. </p>
                        <p>Plus, I’ll share my expertise in graphic design and video editing with Adobe Photoshop and Premiere Pro. Whether you're looking to code stunning websites or create captivating visuals, TigiCode is your go-to hub for all things design and development. Let’s code, design, and edit our way to brilliance together!</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p> <hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>JavaScript</p> <hr style={{ width: "65%" }} /></div>
                        <div className="about-skill"><p>React Js</p> <hr style={{ width: "80%" }} /></div>
                        <div className="about-skill"><p>Node JS</p> <hr style={{ width: "70%" }} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievemnts">
                <div className="about-achievement">
                    <h1>3+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>5+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>4+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    )
}

export default About

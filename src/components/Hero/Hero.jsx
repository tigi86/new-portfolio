import React from 'react'
import './Hero.css'
import myphoto1 from '../../assets/myphoto1.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
    return (
        <div id='about' className='hero'>
            <img src={myphoto1} alt="" />
            <h1> <span>I'm Tigistu Yohannis,</span> Full-stack web devloper</h1>
            <p>I am a full stack web developer from Ethiopia, i developed many projects by myself from when i was 3rd year Computer Engineering student at dilla university.</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
                <div className="hero-resume">My resume</div>
            </div>
        </div>
    )
}

export default Hero

import React from 'react'
import './Hero.css'
import profile from '../../assets/profile.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll';


const hero = () => {
  return (
    <div id='home' className='hero'>
      {/* <img src={profile} alt="" /> */}
        <h1><span>I am Meli Christian</span> , Junior Software Developper Based in Cameroon</h1>
        <p>I am a Fullstack web Developper with moderate experience in the following langauges( React.js, Node.js, HTML5, CSS3, JavaScript, JQuery, PHP, JAVA, C#, SQL)</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default hero
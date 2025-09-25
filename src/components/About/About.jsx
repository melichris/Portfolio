import React from 'react'
import './About.css'
import profile from '../../assets/profile.jpg'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <h1><hr /></h1>
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={profile} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am a Fullstack web Developper with moderate experience in the following langauges( React.js, Node.js, HTML5, CSS3, JavaScript, JQuery, PHP, JAVA, C#, SQL)</p>
                        <p>My passion for web development is not only limited at building web pages but also possible dive into Artificial Intelligence</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "90%" }} /></div>
                        <div className="about-skill"><p>React JS</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{ width: "60%" }} /></div>
                        <div className="about-skill"><p>PHP</p><hr style={{ width: "75%" }} /></div>
                        <div className="about-skill"><p>JQuery</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>JAVA</p><hr style={{ width: "70%" }} /></div>
                    </div>
                </div>
            </div>
            <div className="about-archs">
                <div className="about-arch">
                    <h1>10+</h1>
                    <p>MONTHS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-arch">
                    <h1>20+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-arch">
                    <h1>5+</h1>
                    <p>FRAMEWORKS STUDIED</p>
                </div>
                <hr />
                <div className="about-arch">
                    <h1>20+</h1>
                    <p>SATISFIED CLIENTS+</p>
                </div>
            </div>
        </div>
    )
}

export default About
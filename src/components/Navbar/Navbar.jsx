import React, { useRef, useState } from 'react'
import './Navbar.css'
import logomfc from '../../assets/logomfc.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import backspace from '../../assets/backspace.svg'
import justify from '../../assets/justify.svg'

const Navbar = () => {

// const [menu,setMenu] = useState("home");
const menuRef= useRef();


const openMenu = () =>{
  menuRef.current.style.right="0";
}

const closeMenu = () =>{
  menuRef.current.style.right="-350px";
}

  return (
    <div className='navbar'> 
   <img className="nav-logo" src={logomfc} alt="" />
   {/* add menu open icon */}
   {/* <img src={} className='nav-mob-open' onClick={openMenu}/> */}
    <i className="bi bi-justify" id='nav-mob-open' onClick={openMenu}  style={{fontSize:"30px"}}></i>
    <ul ref={menuRef} className="nav-menu">
      {/* <img src={backspace} className="nav-mob-close" onClick={closeMenu}/> */}
    <i className="bi bi-backspace" id='nav-mob-close' onClick={closeMenu} style={{fontSize:"30px"}}></i>
      <li><AnchorLink className='anchor-link' offset={50} href='#home'>Home</AnchorLink></li>
      <li><AnchorLink className='anchor-link' offset={50} href='#about'>About Me</AnchorLink></li>
      <li><AnchorLink className='anchor-link' offset={50} href='#services'>Services</AnchorLink></li>
      <li><AnchorLink className='anchor-link' offset={50} href='#work'>Portfolio</AnchorLink></li>
      <li><AnchorLink className='anchor-link' offset={50} href='#contact'>Contact</AnchorLink></li>
      {/* <li><p onClick={()=>{setMenu("contact")}}>Contact</p>{menu==="contact"}</li> */}
    </ul>
    <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
    </div>
  )
}

export default Navbar
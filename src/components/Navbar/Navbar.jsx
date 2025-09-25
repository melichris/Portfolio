import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
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
   <img className="nav-logo" src={logo} alt="" />
   {/* add menu open icon */}
   <b className='nav-mob-open' onClick={openMenu}>Menu</b>
    <ul ref={menuRef} className="nav-menu">
      {/* add menu close */}
      <b className="nav-mob-close" onClick={closeMenu}>X</b>
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
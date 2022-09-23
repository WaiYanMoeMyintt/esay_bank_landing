import React,{useState} from 'react'
import logo from "../images/logo.svg";
import { navLinks } from '../bankData';
import open from "../images/open.png";
import close from "../images/close.png"
import "./Navbar.css";
const Navbar = () => {
 const [toggle,setToggle] = useState(true);
 const [navMenu,setNavMenu] = useState('nav-menu-bar');

 const menuActive = ()=>{
     return navMenu === "nav-menu-bar" ? 
     setNavMenu("nav-menu-bar navbar") : 
     setNavMenu("nav-menu-bar");
 };


  return (
     <nav className='nav-container'>
           <div className='nav-logo'>
               <img src = {logo} alt = "easybank" />
           </div>

           <div className='nav-links'>
                <ul className= {`${navMenu}`}>
                    {
                       navLinks.map((item,index)=>(
                          <li key={item.id}>
                               <a href = {`#${item.title}`}>{item.title}</a>
                          </li>
                       ))
                    }
                </ul>
           </div>
           
           <div className='nav-button'>
                <button>Request Invite</button>
           </div>

           <div onClick={menuActive} className='nav-menu'>
               <img onClick={()=>setToggle(prev => !prev)} width="20px" src = {toggle ? open : close}/>
           </div>
     </nav>
  )
}

export default Navbar
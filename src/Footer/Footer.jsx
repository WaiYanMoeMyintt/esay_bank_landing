import React from 'react';
import "./Footer.css";
import {socialIcon,socialLinks1,socialLinks2} from "../bankData.js";
import logo2 from "../images/logo2.svg";
const Footer = () => {
    console.log(socialLinks1,socialLinks2)
  return (
    <div className='footer-container'>
          <div className='footer-1'>
                  <div className='footer-logo'>
                       <img src = {logo2} alt = "logo"/>
                  </div>
                {
                   socialIcon.map((item,index)=>(
                       <div key={index} className='footer-icons'>
                                   <img src = {item.img} alt  = {item.alt} />     
                       </div>
                   ))
                }
          </div>

          <div className='footer-2'>
               {
                socialLinks1.map((item,index)=>(
                     <div key = {index} className='sub-footer-1'>
                           <a href={item.title}>{item.title}</a>
                     </div>
                ))
               }
          </div>

          <div className='footer-3'>
               {
                socialLinks2.map((item,index)=>(
                     <div key = {index} className='sub-footer-2'>
                           <a href={item.title}>{item.title}</a>
                     </div>
                ))
               }
          </div>

          <div className='footer-4'> 

           <div className='footer-button'>
                <button>Request Invite</button>
           </div>

           <div className='footer-text'>
               <p>@Easybank All right reserved.</p>
           </div>

          </div>
    </div>
  )
}

export default Footer
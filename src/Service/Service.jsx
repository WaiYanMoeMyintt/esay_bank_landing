import React from 'react'
import "./Service.css";
import { services } from '../bankData';
const Service = () => {
  return (
    <div className='service-container'>
         <div className='service-1'>
            
            <h1 className='service-header'>Why Choose EasyBank?</h1>
            
            <p className='service-title'>
                We leverage Open Banking to turn your bank account into your financial hub. <br/>
                Control your finances like never before.
          </p>

         </div>

         <div className='service-2'>
            {
                services.map((item,index)=>(
                     <div className='cool-service' key = {index}>
                            <img src = {item.img} alt = {item.alt} />
                            <h3>{item.title}</h3>
                            <p>{item.text}</p> 
                     </div>
                ))
            }
         </div>
    </div>
  )
}

export default Service
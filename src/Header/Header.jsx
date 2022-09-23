import React from 'react'
import "./Header.css";
import mockup from "../images/mockup.png"
const Header = () => {
  return (
     <header className='header-container'>
          <div className='header-left'>
              <h1 className='header-title'>Next Generation <br/> digital banking</h1>

              <p className='header-text'>
               Take your financial life online. Your Easybank account <br/>
               will be a one-stop-shop for spending, saving, <br/>
               budgeting, investing, and much more.
              </p>

              <button className='header-button'>Request Invite</button>

          </div>
          <div className='header-right'>
              <img src = {mockup} alt = "easybank"/>
          </div>
     </header>
  )
}

export default Header
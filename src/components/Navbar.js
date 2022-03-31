import React from 'react'
import {Link} from 'gatsby';
function Navmenu() {
  return (
    <nav className="navbar ">
      <div className="navbar-container container">
          <input type="checkbox" name="" id=""/>
          <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
          </div>
          <ul className="menu-items">
              <li><Link  className='navlink' to='/'>HOME</Link></li>
              <li><Link  className='navlink' to='/about'>ABOUT</Link></li>
              <li><Link  className='navlink' to='/project'>PROJECT</Link></li>
              <li><Link  className='navlink' to='/contact'>CONTACT</Link></li>
            
          </ul>
          <h1 className="logo"></h1>
      </div>
  </nav>
  )
}

export default Navmenu
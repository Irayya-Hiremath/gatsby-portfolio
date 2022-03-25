import React from 'react'
import {Link} from 'gatsby';
function Navmenu() {
  return (
    // <div className="nav w-100 py-4">
    //     <div className='menubar m-auto'>
    //       <div> <Link className='navlink' to='/'>Home</Link></div>
    //       <div><Link  className='navlink' to='/about'>About</Link></div>
    //       <div><Link  className='navlink' to='/project'>Project</Link></div>
    //       <div><Link  className='navlink' to='/contact'>Contact</Link></div>
    //     </div>
    // </div>
    <nav className="navbar ">
    <div className="navbar-container container">
        <input type="checkbox" name="" id=""/>
        <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
        </div>
        <ul className="menu-items">
            <li><Link className='navlink' to='/'>Home</Link></li>
            <li><Link  className='navlink' to='/about'>About</Link></li>
            <li><Link  className='navlink' to='/project'>Project</Link></li>
            <li><Link  className='navlink' to='/contact'>Contact</Link></li>
          
        </ul>
        <h1 className="logo"></h1>
    </div>
</nav>
  )
}

export default Navmenu
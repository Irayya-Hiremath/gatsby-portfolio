import React from 'react'
import { Link} from 'gatsby'
import {} from 'react-bootstrap'

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

    <nav class="navbar">
    <div class="navbar-container container">
        <input type="checkbox" name="" id=""/>
        <div class="hamburger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
        </div>
        <ul class="menu-items">
            <li><Link className='navlink' to='/'>Home</Link></li>
            <li><Link  className='navlink' to='/about'>About</Link></li>
            <li><Link  className='navlink' to='/project'>Project</Link></li>
            <li><Link  className='navlink' to='/contact'>Contact</Link></li>
          
        </ul>
        <h1 class="logo"></h1>
    </div>
</nav>
  )
}

export default Navmenu
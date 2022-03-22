import React from 'react'
import { Link} from 'gatsby'
import {} from 'react-bootstrap'

function Navmenu() {
  return (
    <div className="nav w-100 py-4">
        <div className='menubar m-auto'>
          <div> <Link className='navlink' to='/'>Home</Link></div>
          <div><Link  className='navlink' to='/about'>About</Link></div>
          <div><Link  className='navlink' to='/project'>Project</Link></div>
          <div><Link  className='navlink' to='/contact'>Contact</Link></div>
        </div>
    </div>
  )
}

export default Navmenu
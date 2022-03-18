import React from 'react'
import { Link} from 'gatsby'
import {} from 'react-bootstrap'

function Navmenu() {
  return (
    <div className='menubar'>
      <div> <Link className='navlink' to='/'>HOME</Link></div>
      <div><Link  className='navlink' to='/about'>About</Link></div>
      <div><Link  className='navlink' to='/project'>Project</Link></div>
      <div><Link  className='navlink' to='/contact'>Contact</Link></div>
    </div>
  )
}

export default Navmenu
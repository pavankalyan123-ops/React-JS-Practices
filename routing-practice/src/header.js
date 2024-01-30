import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='nav'>
       <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="about">About</Link></li>
        <li> <Link to="contact">Contact US</Link></li>
        <li> <Link to="users">Users</Link></li>
        <li><Link to="names">names</Link></li>
       </ul>
    </div>
  )
}

export default Header
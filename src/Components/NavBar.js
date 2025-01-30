import React from 'react'
import { Link } from 'react-router-dom'
import logo from './Logo.png'
import '../App.css'


const NavBar = () => {
  return (
    <nav className='navbar'>
      <img src={logo} alt='logo' className='nav-logo' />
      <div className='nav-links'>
        <Link to='./blogs'>View Blogs</Link>
      </div>
      <Link to='./newpost'>
        <button className='add-post-btn'>Add Post</button>
      </Link>
    </nav>
  )
}

export default NavBar

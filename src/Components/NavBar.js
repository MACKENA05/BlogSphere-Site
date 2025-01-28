import React from 'react'
import logo from './Logo.png'
import '../App.css'

const NavBar = () => {
  return (
    <>
    <div className='navbar'>
      <div className='logo'>
        <img src={logo}/>
      </div>
      <div> 
        <h2>blogs</h2>
        </div>
        <div>
            <button>Add Post</button>
        </div>

        
    </div>
    <div className='landing-page'>
    <h1>Latest Posts</h1>
    <p>Stay updated with the latest tech news. <br/>Discover a world of ideas and insights with our latest blog posts, crafted to inspire, inform, and spark meaningful conversations.</p>
</div>
</>
  )
}

export default NavBar

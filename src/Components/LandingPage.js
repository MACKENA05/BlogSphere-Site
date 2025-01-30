import React from 'react'
import BlogList from '../App'

const LandingPage = () => {
    return (
        <div className='landing-page'>
            <h1>Latest Posts</h1>
            <p>Stay updated with the latest tech news. <br />Discover a world of ideas and insights with our latest blog posts, crafted to inspire, inform, and spark meaningful conversations.</p>
             <BlogList />
        </div>
    )
}

export default LandingPage

import {useState,useEffect} from 'react'
import BlogPost from './BlogPosts'

function BlogList(){
    //initializing the state
    const [blogs, setBlogs] = useState([])
   
    //fetching the data from an API
    useEffect(()=> {fetch("http://localhost:3001/blogs")
    .then((res)=> res.json())
    .then((data)=> setBlogs(data))
    .catch((error) => console.error('Error fetching blogs:', error));

}, [])
  return(
    <div>
         {blogs.length === 0 ? (
        <p>Loading blogs...</p> 
      ) : (
        blogs.map((blog) => (
          <div key={blog.id}>
            <BlogPost blog={blog} /> 
          </div>
        ))
      )}
    </div>
  );
}


export default BlogList;
import {useState, useEffect} from 'react'
import './App.css';
import BlogList from './Components/BlogList.js';

function App() {
     const [blogs, setBlogs] = useState([])
      console.log(blogs)
       //fetching the data from an API
       useEffect(()=> {fetch("http://localhost:3001/blogs")
       .then((res)=> res.json())
       .then((data)=> setBlogs(data))
       .catch((error) => console.error('Error fetching blogs:', error));
   
   }, [])
  return (
     <div>
      <BlogList blogs={blogs} setBlogs={setBlogs}/>
     </div>
  );
}

export default App;

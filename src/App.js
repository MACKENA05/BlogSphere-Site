import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import NavBar from './Components/NavBar';
import BlogList from './Components/BlogList';
import BlogPost from './Components/BlogPost';
// import NewPostForm from './Components/NewPostForm';
import Error from './Error';
import { useEffect,useState } from'react';


function App() {
     const [blogs, setBlogs] = useState([]);
    
      useEffect(() => {
        fetch('http://localhost:3001/blogs')
          .then((res) => res.json())
          .then((data) => setBlogs(data));
      }, []);

     // Handle new post addition
   //   const handleNewBlogs = (newPosts) => {
   //      setBlogs(prevBlogs => [newPosts, ...prevBlogs]); // Functional update
   //    };


  return (
    <Router>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/blogs" element={<BlogList blogs={blogs} setBlogs={setBlogs} />} />
        <Route path="/blogs/:id" element={<BlogPost />} />
        {/* <Route path="/new-post" element={<NewPostForm addPost={handleNewBlogs} setBlogs={setBlogs}/>} /> */}
        <Route path="*" element={<Error/>} />
      </Routes>
    </Router>
  );
}

export default App;
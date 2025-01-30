import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import BlogList from './Components/BlogList';
import BlogPost from './Components/BlogPost';
import NewPostForm from './Components/NewPostForm';
import Footer from './Components/Footer';
import Error from './Error';
import { useEffect, useState } from 'react';

function App() {
     const [blogs, setBlogs] = useState([]);
    
      useEffect(() => {
        fetch('http://localhost:3001/blogs')
          .then((res) => res.json())
          .then((data) => setBlogs(data));
      }, []);

     // Handle new post addition
     const handleNewBlogs = (newPosts) => {
        setBlogs(prevBlogs => [newPosts, ...prevBlogs]); 
      };


  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<BlogList blogs={blogs} setBlogs={setBlogs} />} />
        <Route path="/blogs" element={<BlogList blogs={blogs} setBlogs={setBlogs} />} />
        <Route path="/blogs/:id" element={<BlogPost />} />
        <Route path="/newpost" element={<NewPostForm addPost={handleNewBlogs} setBlogs={setBlogs}/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
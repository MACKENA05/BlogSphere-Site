import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentSection from './CommentSection';
import '../App.css';

const BlogPost = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:30001/blogs/$id}`)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, [id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <>
      <img src={blog.image} alt={`Image of ${blog.title}`} /> 
      <div className="blog-post-full">
        <div className="blog-post-image">
          <img src="https://i.pinimg.com/736x/92/d2/6e/92d26e4d3b0f31d90072e8c626a8d629.jpg" alt="default" />
        </div>
        <div className="blog-post-details">
          <h2>{blog.title}</h2>
          <p>By: {blog.author}</p>
          <p>{blog.content}</p>
          <CommentSection blogId={blog.id} comments={blog.comments} />
        </div>
      </div>
    </>
  );
};

export default BlogPost;
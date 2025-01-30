import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentSection from './CommentSection';
import '../App.css';

const BlogPost = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/blogs/${id}`) 
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, [id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <> 
      <div className="blog-post-full">
        <div className="blog-post-image">
        <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80" alt={blog.title} />
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

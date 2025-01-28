import React, { useState, useEffect } from 'react';
import CommentSection from './CommentSection';


function BlogPost() {
  const { id } = ();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/blogs/${id}`)
       .then((res) => res.json())
       .then((data) => setBlog(data));
  }, [id]);

  const handleDelete = () => {
    fetch(`http://localhost:3001/blogs/${id}`, { method: 'DELETE'} )
    .then(() => {
       window.location.href = './blogs';
    });
  };

  if (!blog) return <div>Loading....</div>;

  // The image URL will now be relative to the public folder
  const imageUrl = `/Images/${blog.image}`;

  return (
     <div>
        <h1>{blog.title}</h1>
        <h2>{blog.auther}</h2>
        <p>By: {blog.content}</p>
        <CommentSection blogId={blog.id} comment= {blog.comment} />
        <button onClick={handleDelete}>Delete Post</button>
    </div>
  );

}




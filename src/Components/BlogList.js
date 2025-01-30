import { Link } from 'react-router-dom';
import '../App.css';
import { useState,useEffect } from 'react';

const BlogList = ({ blogs, setBlogs }) => {
  const [loading, setLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3001/blogs')
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((error) => console.error('Error:', error));
  }, [setBlogs]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      setIsDeleting(true);
      fetch(`http://localhost:3001/blogs/${id}`, {
        method: 'DELETE',
      })
        .then((response) => {
          if (response.ok) {
            setBlogs((prevBlogs) => prevBlogs.filter((b) => b.id !== id));
          } else {
            console.error('Failed to delete item');
          }
        })
        .catch((error) => console.error('Error:', error))
        .finally(() => setIsDeleting(false));
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (blogs.length === 0) {
    return <p>No blog posts available.</p>;
  }


  return (
    <>
      <h1 className="landing-page-header">Latest News</h1>
      <p className="landing-page-text">
        Stay updated with the latest tech news. <br />
        Discover a world of ideas and insights with our latest blog posts,
        crafted to inspire, inform, and spark meaningful conversations.
      </p>

      <div className="blog-list">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <Link to={`/blogs/${blog.id}`}>
              <h2>{blog.title}</h2>
              <img src={blog.image || 'https://via.placeholder.com/150'} alt={blog.title} />
              <p>{blog.content.substring(0, 100)}...</p>
            </Link>
            <button className='delete-button' onClick={() => handleDelete(blog.id)} disabled={isDeleting}>
              {isDeleting ? "Deleting..." : "Delete Post"}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogList;
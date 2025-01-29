import { Link } from 'react-router-dom';
import '../App.css';

const BlogList = ({ blogs, setBlogs }) => {
  console.log(blogs);

  const handleDelete = (id) => {
    fetch(`http://localhost:3001/blogs/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          // On successful deletion, update the local state to remove the item
          setBlogs((prevBlogs) => prevBlogs.filter((b) => b.id !== id));
        } else {
          console.error('Failed to delete item');
        }
      })
      .catch((error) => console.error('Error:', error));
  };

  if (blogs === undefined) {
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
            <div key={blog.id} className='blog-card'>
            <Link to={`/blog/${blog.id}`}>
              <h2>{blog.title}</h2>
              <img src={blog.image} alt={blog.title} />
              <p>{blog.content.substring(0, 100)}...</p>
            </Link>
            <button onClick={() => handleDelete(blog.id)}>Delete Post</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogList;
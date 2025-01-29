

function BlogPost({ blog, setBlogs }) {


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

  if (!blog) return <div>Loading...</div>;

  return (
    <div>
      <h1>{blog.title}</h1>
      <h3>By {blog.author}</h3>
      <img src={blog.image} alt={blog.title} />
      <p>{blog.content}</p>
      <button onClick={() => handleDelete(blog.id)}>Delete Post</button>
    </div>
  );
}

export default BlogPost;

import BlogPost from './BlogPost'

function BlogList({blogs,setBlogs}){
  return(
    <div>
         {blogs.length === 0 ? (
        <p>Loading blogs...</p> 
      ) : (
        blogs.map((blog) => (
          <div key={blog.id}>
            <BlogPost blog={blog} setBlogs={setBlogs} /> 
          </div>
        ))
      )}
    </div>
  );
}


export default BlogList;
import React, { useState } from "react";
import '../App.css'

const NewPostForm = ({addPost,setBlogs }) => {
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    author: "",
    image: "",
    comments: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();


    fetch('http://localhost:3001/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPost),
    }
    )
        .then((res) => res.json())
        .then((newPost) => {
            setNewPost({ title: '', content: '', author: '', image: '' });
            addPost(newPost)
            window.location.href = '/';

        });
};
  return (
    <div className="add-post">
      <h2>Add Post</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
            required
          />
        </label>

        <label>
          Content:
          <textarea
            value={newPost.content}
            onChange={(e) =>
              setNewPost({ ...newPost, content: e.target.value })
            }
            required
          />
        </label>

        <label>
          Author:
          <input
            type="text"
            value={newPost.author}
            onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
            required
          />
        </label>

        <label>
          Image URL (optional):
          <input
            type="text"
            placeholder="Image URL"
            value={newPost.image}
            onChange={(e) => setNewPost({ ...newPost, image: e.target.value })}
            pattern="https?://.*" 
            title="Please enter a valid URL starting with http:// or https://"
          />
        </label>

        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default NewPostForm;

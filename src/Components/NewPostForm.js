import React, { useState } from 'react';

function NewPostForm() {
  const [newPost, setNewPost] = useState({ title: '', content: '', author: '', image: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const configObj = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPost),
    };

    fetch('http://localhost:3001/blogs', configObj)
      .then((res) => res.json())
      .then(() => {
        setNewPost({ title: '', content: '', author: '', image: '' }); // Reset form
        window.location.href = '/blogs'; // Redirect to blog list after submission
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={newPost.title}
        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        required
      />
      <textarea
        placeholder="Content"
        value={newPost.content}
        onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Author"
        value={newPost.author}
        onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Image URL"
        value={newPost.image}
        onChange={(e) => setNewPost({ ...newPost, image: e.target.value })}
        required
      />
      <button type="submit">Add Post</button>
    </form>
  );
}

export default NewPostForm;

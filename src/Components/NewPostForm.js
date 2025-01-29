import React, { useState } from 'react';
import '../App.css'


function NewPostForm({ addPost, setPosts }) {
    const [newPost, setNewPost] = useState({ title: '', content: '', author: '', image: '' });

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
                window.location.href = '/blogs';

            });
    };
    

    return (
        <div className='add-post'>
            <h2>Add Post</h2>
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
                    pattern="https?://.*" // This regex ensures the input is a valid URL starting with http:// or https://
                    title="Please enter a valid URL starting with http:// or https://"
                />
                <button type="submit">Add Post</button>
            </form>
        </div>
    );
}

export default NewPostForm;
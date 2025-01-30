# Blog Platform

A full-stack blog platform built with React and JSON Server, featuring CRUD operations, comments, and dynamic routing.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Data Structure](#data-structure)
- [State Management](#state-management)
- [Routes](#routes)
- [Contributing](#contributing)
- [License](#license)

## Features

- **View Blog List**  
  Browse all posts with titles and excerpts
- **Blog Post Details**  
  Full content view with author info and comments
- **Create New Posts**  
  Rich text form for article creation
- **Comment System**  
  Add and view comments in real-time
- **Post Management**  
  Delete unwanted posts

## Technologies

- React 18
- React Router 6
- JSON Server (Mock REST API)
- CSS Modules
- HTML5 Semantic Markup

## Installation

1. Clone repository:

```bash
   git clone https://github.com/yourusername/blog-platform.git
   cd blog-platform
```

2. Install dependencies:

```bash
npm install
npm install react-router-dom
npm install -g json-server
```

## Usage

1. Start backend server (port 3001):

```bash
json-server --watch db.json --port 3001
```

2. Start React app (port 3000):

```bash
npm start
```

## Project Structure

````
blog-platform/
├── public/
│   └── db.json
├── src/
│   ├── components/
│   │   ├── NavBar.js
│   │   ├── BlogList.js
│   │   ├── BlogPost.js
│   │   ├── NewPostForm.js
│   │   └── CommentSection.js
│   ├── App.js
│   └── App.css
````

## API Endpoints

| Endpoint | Method | Description    |
|-----------|--------|-----------------|
| /blogs   | GET    | Fetch all posts |
| /blogs    | POST   | Create new post|
|/blogs/:id |PATCH   | Update post comments |
|/blogs/:id |DELETE  | Remove post     |

## Data Structure

```json
{
  "id": 1,
  "title": "Learning React",
  "author": "Jane Smith",
  "content": "React is a JavaScript library...",
  "comments": [
    {
      "id": 1,
      "author": "Mark",
      "text": "Very informative!"
    }
  ]
}
```

## State Management

```javascript
const [blogs, setBlogs] = useState([]);
const [newPost, setNewPost] = useState({
  title: '',
  content: '',
  author: '',
  image: ''
});

// Fetch Posts
useEffect(() => {
  fetch('http://localhost:3001/blogs')
    .then(res => res.json())
    .then(data => setBlogs(data));
}, []);

// Add New Post
const addPost = (post) => {
  fetch('http://localhost:3001/blogs', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(post)
  })
  .then(res => res.json())
  .then(data => setBlogs([data, ...blogs]));
};
```

## Routes

| Path      |Component     |Description     |
|-----------|---------------|----------------|
| /blogs    | BlogLIst      |Homepage with all posts  |
|/blogs/:id |BlogPost       |Individual post view     |
|/new-post |NewPostForm   |Create post form         |
| *         |Error         | 404 page                |

## Contributing

1. Fork the project

2. Create feature branch:

```bash
git checkout -b feature/amazing-feature
```

3. Commit changes:

```bash
git commit -m 'Add amazing feature'
```

4. Push to branch:

```bash
git push origin feature/amazing-feature
```

5. Open pull request

## License

This project is open source and available under the MIT License.

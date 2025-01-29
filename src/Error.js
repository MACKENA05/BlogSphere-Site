import { Link } from 'react-router-dom';

function Error(){
    return (
        <div className='error'>
            <h1>Error 404</h1>
            <p>Page not found.</p>
            <Link to="/">Go back to Viewing Blogs</Link>
        </div>
    )
}
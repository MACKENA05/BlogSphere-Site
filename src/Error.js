import { Link } from 'react-router-dom'

function Error(){
    return (
        <div>
            <h2>Sorry!! Page not found</h2>
            <Link to = "/blogs">View Blogs</Link>
        </div>
    )
}

export default Error
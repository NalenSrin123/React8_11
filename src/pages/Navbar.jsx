
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <nav>
    <ul>
    <li><Link className="link" to="/">Home</Link></li>
    <li><Link className="link" to="/blog">Blogs</Link></li>
    <li><Link className="link" to="/contact">Contact</Link></li>
    <li><Link className="link" to="/news">News</Link></li>
    </ul>
    </nav>
  )
}

export default Navbar
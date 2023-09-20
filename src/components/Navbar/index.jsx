import { Link } from 'react-router-dom'
import './index.css'

const Navbar = () => {
  return (
    <nav id="navbar">
      <Link to="/cart">
        <button>Go To Cart</button>
      </Link>
      <Link to="/">
        <button>Products</button>
      </Link>
    </nav>
  )
}

export default Navbar
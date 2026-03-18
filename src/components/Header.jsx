import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "./Header.css";

function Header(){
  const cartItems = useSelector(state => state.cart.items);
  const total = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return(
    <header className='header'>
      <div>
        <h2 className='logo'>Shoppy🌐Globe </h2>
      </div>

      <nav className='nav-item'>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
       <Link to="/cart" className="cart-link">
  🛒    <span className="cart-badge">{total}</span>
      </Link>
      </nav>
    </header>
  );
}

export default Header;
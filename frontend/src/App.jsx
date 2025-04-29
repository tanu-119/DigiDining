import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import Link
import Menu from './components/Menu';
import Cart from './components/Cart';
import OrderForm from './components/OrderForm';
import OrderHistory from './components/OrderHistory';
import { CartProvider } from './context/CartContext';
import './main.css'; // Import your normal CSS
import HomePage from './components/Homepage';
import Footer from './components/Footer';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="app-container">
          <nav className="app-nav">
            <Link to="/"> {/* Home */}
              <h1>The Digital Diner</h1>
            </Link>
            <div>
              <Link to="/menu">Menu</Link>
              <Link to="/cart">Cart</Link>
              <Link to="/order">Place Order</Link>
              <Link to="/history">Order History</Link>
            </div>
          </nav>

          {/* Content container */}
          <div className="app-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/order" element={<OrderForm />} />
              <Route path="/history" element={<OrderHistory />} />
            </Routes>
          </div>
        </div>

        <Footer /> {/* Footer is outside Routes but inside Router */}
      </Router>
    </CartProvider>
  );
}

export default App;
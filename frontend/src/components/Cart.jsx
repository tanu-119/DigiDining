import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import '../main.css'; // Link to your new CSS

function Cart() {
    const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
    const navigate = useNavigate();

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="menu-container">
            <h2 className="menu-title">Shopping Cart</h2>
            {cart.length === 0 ? (
                <div className="empty-cart-message">
                    <p>Your cart is empty.</p>
                </div>
            ) : (
                <>
                    <div className="menu-items">
                        {cart.map((item, index) => (
                            <div key={index} className="menu-item">
                                <div className="item-left">
                                    <img src={item.imageUrl} alt={item.name} className="item-image" />
                                </div>
                                <div className="item-details">
                                    <h3 className="item-name">{item.name}</h3>

                                    {/* Quantity Controls */}
                                    <div className="quantity-controls">
                                        <button onClick={() => decreaseQuantity(item.id)} className="quantity-btn">-</button>
                                        <span className="quantity-value">{item.quantity}</span>
                                        <button onClick={() => increaseQuantity(item.id)} className="quantity-btn">+</button>
                                    </div>

                                    <p className="item-price">${item.price.toFixed(2)}</p>
                                    <p className="item-description">{item.description}</p>
                                </div>

                                <div className="item-right">
                                    <button
                                        className="add-to-cart-btn mb-2"
                                        onClick={() => navigate('/order')}
                                    >
                                        Place Order
                                    </button>
                                    <button
                                        className="remove-from-cart-btn"
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Cart Summary */}
                    <div className="cart-summary" style={{ textAlign: 'center', marginTop: '2rem' }}>
                        <p className="text-lg font-bold mb-4">Total: ${total.toFixed(2)}</p>
                        <Link
                            to="/order"
                            className="proceed-to-order-btn"
                            style={{
                                backgroundColor: '#2563eb',
                                color: 'white',
                                padding: '0.75rem 1.5rem',
                                borderRadius: '0.5rem',
                                textDecoration: 'none',
                                fontWeight: 'bold',
                                display: 'inline-block',
                                marginTop: '1rem'
                            }}
                        >
                            Proceed to Order
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
}

export default Cart;

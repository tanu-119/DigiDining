import { useState, useContext } from 'react';
import axios from 'axios';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import '../main.css'; // Link to your new home page CSS
import Footer from './Footer';

function OrderForm() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const { cart, clearCart } = useContext(CartContext);
    const navigate = useNavigate();

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Make sure there is at least one item in the cart
        if (cart.length === 0) {
            setMessage('Your cart is empty. Please add items to your cart before proceeding.');
            return;
        }

        try {
            // Prepare the data for the request
            const orderData = {
                name,
                phone,
                items: cart.map(item => ({
                    id: item._id,  // Ensure _id is sent as id
                    name: item.name,
                    price: item.price,
                    quantity: item.quantity,
                })),
            };

            // Send the order data to the backend
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/orders`, orderData);

            // Successfully placed order
            setMessage('Order placed successfully!');
            clearCart(); // Clear cart after successful order

            // Navigate to order history page after a delay
            setTimeout(() => navigate('/history'), 2000);
        } catch (err) {
            // Handle errors
            setMessage('Error placing order. Please try again.');
        }
    };

    return (
        <div className="order-form-container">
            <h2 className="order-form-title">Place Your Order</h2>

            {message && (
                <p className={message.includes('Error') ? 'order-form-error' : 'order-form-message'}>
                    {message}
                </p>
            )}

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="order-form-label">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="order-form-input"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="order-form-label">Phone Number</label>
                    <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="order-form-input"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="order-form-button"
                    disabled={cart.length === 0}  // Disable if cart is empty
                >
                    Submit Order
                </button>
            </form>

        </div>
    );
}

export default OrderForm;

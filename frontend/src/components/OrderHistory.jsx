import { useState } from 'react';
import axios from 'axios';
import '../main.css'; // 

function OrderHistory() {
    const [phone, setPhone] = useState('');
    const [orders, setOrders] = useState([]);
    const [message, setMessage] = useState('');

    const handleSearch = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/orders?phone=${phone}`);
            setOrders(res.data);
            if (res.data.length === 0) {
                setMessage('No orders found for this phone number.');
            } else {
                setMessage('');
            }
        } catch (err) {
            setMessage('Error fetching orders. Please try again.');
        }
    };

    return (
        <div className="order-history-container">
            <h2 className="order-history-title">Order History</h2>

            <div className="order-search">
                <label>Phone Number</label>
                <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>

            {message && <p className="order-message">{message}</p>}

            {orders.map((order) => (
                <div key={order._id} className="order-card">
                    <p><strong>Order Date:</strong> {new Date(order.createdAt).toLocaleString()}</p>
                    <p><strong>Name:</strong> {order.name}</p>
                    <p><strong>Total:</strong> ${order.total.toFixed(2)}</p>
                    <p><strong>Items:</strong></p>
                    <ul>
                        {order.items.map((item, index) => (
                            <li key={index}>
                                {item.name} - ${item.price.toFixed(2)} × {item.quantity}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default OrderHistory;

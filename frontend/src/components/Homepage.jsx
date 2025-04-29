import { Link } from 'react-router-dom';
import '../main.css'; // Link to your new home page CSS
import food1 from '../images/food1.jpeg';
import food2 from '../images/food2.jpeg';
import food3 from '../images/food3.jpeg';
import food4 from '../images/food4.jpeg';
import food5 from '../images/food5.jpeg';
import food6 from '../images/food6.jpeg';
import food7 from '../images/food7.jpg';
import food8 from '../images/food8.jpeg';

function HomePage() {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">Welcome to The Digital Diner</h1>
                    <p className="hero-description">
                        Discover our delicious menu and enjoy easy online ordering.
                    </p>
                    <Link to="/menu" className="cta-button">
                        View Menu
                    </Link>
                </div>
            </section>
            {/* Popular Items Section */}
            <section className="popular-items">
                <h2>Popular Dishes</h2>
                <div className="popular-items-container">
                    {/* Example items */}
                    <div className="item-card">
                        <img src={food1} alt="Spaghetti Bolognese" className="item-image" />
                        <h3 className="item-title">Spaghetti Bolognese</h3>
                        <p className="item-price">$12.99</p>
                    </div>
                    <div className="item-card">
                        <img src={food2} alt="Chicken Caesar Salad" className="item-image" />
                        <h3 className="item-title">Chicken Caesar Salad</h3>
                        <p className="item-price">$9.99</p>
                    </div>
                    <div className="item-card">
                        <img src={food3} alt="Cheeseburger" className="item-image" />
                        <h3 className="item-title">Cheeseburger</h3>
                        <p className="item-price">$8.99</p>
                    </div>
                    {/* More Dishes */}
                    <div className="item-card">
                        <img src={food4} alt="Margherita Pizza" className="item-image" />
                        <h3 className="item-title">Margherita Pizza</h3>
                        <p className="item-price">$11.49</p>
                    </div>
                    <div className="item-card">
                        <img src={food5} alt="Grilled Salmon" className="item-image" />
                        <h3 className="item-title">Grilled Salmon</h3>
                        <p className="item-price">$15.99</p>
                    </div>
                    <div className="item-card">
                        <img src={food6} alt="Vegetarian Tacos" className="item-image" />
                        <h3 className="item-title">Vegetarian Tacos</h3>
                        <p className="item-price">$7.99</p>
                    </div>
                    <div className="item-card">
                        <img src={food7} alt="Steak Frites" className="item-image" />
                        <h3 className="item-title">Steak Frites</h3>
                        <p className="item-price">$18.49</p>
                    </div>
                    <div className="item-card">
                        <img src={food8} alt="Pasta Alfredo" className="item-image" />
                        <h3 className="item-title">Pasta Alfredo</h3>
                        <p className="item-price">$13.49</p>
                    </div>
                </div>
            </section>



        </div>
    );
}

export default HomePage;

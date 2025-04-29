import { useState, useEffect, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../main.css'; // Import the CSS for the Menu
import springRollsImg from '../images/spring_rolls.jpeg';
import bruschetta from '../images/bruschetta.jpeg';
import garlicBread from '../images/garlic_bread.jpeg';
import friedCalamari from '../images/fried_calamari.jpeg';
import grilledChicken from '../images/grilled_chicken.jpeg';
import steakFrites from '../images/steak_frites.jpeg';
import vegetableStrir from '../images/vegetable_stir_fry.jpeg';
import spaghettiBolognese from '../images/spaghetti_bolognese.jpeg';
import chocklateCake from '../images/chocolate_cake.jpeg';
import tirumisu from '../images/tiramisu.jpeg';
import lemonSorbet from '../images/lemon_sorbet.jpeg';
import cheeseCake from '../images/cheesecake.jpeg';
import cocaCola from '../images/coca_cola.jpeg';
import lemonade from '../images/lemonade.jpeg';
import iceTea from '../images/iced_tea.jpeg';
import orangeJuice from '../images/orange_juice.jpeg';
import Footer from './Footer';


function Menu() {
    const [menuItems, setMenuItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const { addToCart } = useContext(CartContext);

    // Mock Data for Menu Items
    const allMenuItems = {
        Appetizers: [
            { _id: 1, name: 'Spring Rolls', price: 5.99, description: 'Crispy rolls with dipping sauce.', imageUrl: springRollsImg },
            { _id: 2, name: 'Bruschetta', price: 6.99, description: 'Toasted bread with tomato and basil.', imageUrl: bruschetta },
            { _id: 3, name: 'Garlic Bread', price: 3.99, description: 'Toasty, buttery, and garlicky goodness.', imageUrl: garlicBread },
            { _id: 4, name: 'Fried Calamari', price: 8.99, description: 'Golden fried calamari rings.', imageUrl: friedCalamari },
        ],
        'Main Courses': [
            { _id: 5, name: 'Grilled Chicken', price: 12.99, description: 'Juicy grilled chicken with seasoning.', imageUrl: grilledChicken },
            { _id: 6, name: 'Steak Frites', price: 15.99, description: 'A tender steak served with fries.', imageUrl: steakFrites },
            { _id: 7, name: 'Vegetable Stir-fry', price: 9.99, description: 'Stir-fried vegetables in a savory sauce.', imageUrl: vegetableStrir },
            { _id: 8, name: 'Spaghetti Bolognese', price: 11.99, description: 'Pasta with a rich, hearty meat sauce.', imageUrl: spaghettiBolognese },
        ],
        Desserts: [
            { _id: 9, name: 'Chocolate Cake', price: 4.99, description: 'Rich and moist chocolate cake.', imageUrl: chocklateCake },
            { _id: 10, name: 'Tiramisu', price: 5.99, description: 'A classic Italian coffee-flavored dessert.', imageUrl: tirumisu },
            { _id: 11, name: 'Lemon Sorbet', price: 3.99, description: 'A refreshing citrusy dessert.', imageUrl: lemonSorbet },
            { _id: 12, name: 'Cheesecake', price: 6.99, description: 'Creamy cheesecake with a graham cracker crust.', imageUrl: cheeseCake },
        ],
        Drinks: [
            { _id: 13, name: 'Coca-Cola', price: 1.99, description: 'Classic cola beverage.', imageUrl: cocaCola },
            { _id: 14, name: 'Lemonade', price: 2.99, description: 'Freshly squeezed lemonade.', imageUrl: lemonade },
            { _id: 15, name: 'Iced Tea', price: 2.49, description: 'Cold, refreshing iced tea.', imageUrl: iceTea },
            { _id: 16, name: 'Orange Juice', price: 3.49, description: 'Fresh orange juice served chilled.', imageUrl: orangeJuice },
        ],
    };

    // Fetch menu items whenever the selectedCategory changes
    useEffect(() => {
        if (selectedCategory) {
            setMenuItems(allMenuItems[selectedCategory]);
        } else {
            setMenuItems([]);
        }
    }, [selectedCategory]);

    // Category cards
    const categories = ['Appetizers', 'Main Courses', 'Desserts', 'Drinks'];

    return (
        <div className="menu-container">
            <h2 className="menu-title">Menu</h2>

            {/* Category Cards */}
            <div className="category-cards">
                {categories.map((category) => (
                    <div
                        key={category}
                        className={`category-card ${selectedCategory === category ? 'active' : ''}`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        <h3 className="category-name">{category}</h3>
                    </div>
                ))}
            </div>

            {/* Display Menu Items for selected Category */}
            <div className="menu-items">
                {menuItems.length > 0 ? (
                    menuItems.map((item) => (
                        <div key={item._id} className="menu-item">
                            <div className="item-left">
                                <img src={item.imageUrl} alt={item.name} className="item-image" />
                            </div>
                            <div className="item-details">
                                <h3 className="item-name">{item.name}</h3>
                                <p className="item-price">${item.price.toFixed(2)}</p>
                                <p className="item-description">{item.description}</p>
                            </div>
                            <div className="item-right">
                                <button
                                    className="add-to-cart-btn"
                                    onClick={() => addToCart({ ...item, id: item._id, quantity: 1 })}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p></p>
                )}
            </div>

        </div>
    );
}

export default Menu;

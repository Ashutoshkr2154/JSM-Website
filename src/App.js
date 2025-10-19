import React, { useState, useEffect } from 'react';

// --- All your local images are correctly imported here from the 'src/images' folder ---
import heroBg from './images/banner-bg.png';
import productTemplate from './images/product_Template.png';
import aboutSpices from './images/spices indian.jpeg';
import idliImage from './images/IdliPic.jpeg';
import multipleSpicesImage from './images/multipleSpicesPic.jpeg';
import turmericImage from './images/TurmericPowderPic.jpeg';
import chilliImage from './images/ChilliPowder.jpg';
import dosaImage from './images/DosaBatterpic.jpeg';
import cuminImage from './images/CuminPowder.jpg';
import sattuImage from './images/SattuPowder.jpg';
import riceImage from './images/RicePowder.jpg';
import besanImage from './images/Besan.jpg';
import dhaniyaImage from './images/DhaniyaPowder.jpg';
import mixMasalaImage from './images/MixMasalaPowder.jpg';

// --- NEW: Map to connect product names from database to local images ---
const productImageMap = {
    'Turmeric Powder': turmericImage,
    'Red Chilli Powder': chilliImage,
    'Dosa Batter': dosaImage,
    'Cumin Powder': cuminImage,
    'Sattu Powder': sattuImage,
    'Rice Powder': riceImage,
    'Besan (Gram Flour)': besanImage,
    'Dhaniya Powder': dhaniyaImage,
    'Mix Masala Powder': mixMasalaImage,
    // Add other products from your database here if needed
};

// --- Reusable Components ---
const Header = ({ setCurrentPage, cartItems }) => {
    const itemsCount = cartItems.reduce((acc, item) => acc + item.qty, 0);
    return (
        <header>
            <div className="container header-container">
                <h1 className="brand-name" onClick={() => setCurrentPage('home')}>
                    JSM – Jai Shankar Masala
                </h1>
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#products">Products</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li>
                        <button
    style={{ cursor: 'pointer' }}
    onClick={() => setCurrentPage('shop')}
    className="btn btn-shop-now"
>
    Shop Now
</button>

                        </li>
                        <li>
                            <button style={{cursor:'pointer'}} onClick={() => setCurrentPage('cart')} className="btn">
                                Cart ({itemsCount})
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

const Footer = () => (
    <footer>
        <div className="container footer-container">
            <p>© 2025 Jai Shankar Masala. All Rights Reserved.</p>
            <div className="social-links">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a> |
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> |
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
        </div>
    </footer>
);

// MODIFIED: ShopProductCard now shows "Price: XX" as requested in TASK 2
const ShopProductCard = ({ product, onAddToCart, imageSrc }) => (
    <div className="product-card">
        <div>
            <img src={imageSrc} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description ? product.description.substring(0, 100) + '...' : 'No description available.'}</p>
        </div>
        <div>
            {/* =================================================== */}
            {/* TASK 2: Price display updated to "XX"               */}
            {/* =================================================== */}
            <div className="price">Price: XX</div>
            <button onClick={() => onAddToCart(product)} className="btn">Add to Cart</button>
        </div>
    </div>
);

// --- Pages ---
const HomePage = () => (
    <main>
        <section
            id="home"
            className="hero-section"
            style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroBg})`}}
        >
            <div className="container hero-content">
                <h1 className="tagline">Pure Taste of Tradition</h1>
                <p className="subtext">Bringing India’s rich flavors to your kitchen.</p>
                <a href="#products" className="btn">Explore Our Products</a>
            </div>
        </section>
        <section id="about" className="about-section">
            <div className="container about-container">
                <div className="about-text">
                    <h2>About JSM</h2>
                    <p>At JSM – Jai Shankar Masala, we are dedicated to preserving the authentic taste of Indian spices. Our journey began with a simple goal — to bring pure, natural, and traditional flavors to every household.</p>
                </div>
                <div className="about-image"><img src={aboutSpices} alt="A collection of vibrant Indian spices" /></div>
            </div>
        </section>
        <section id="products" className="products-section">
             <div className="container">
                <h2>Our Products</h2>
                <img src={productTemplate} alt="JSM Masala Products Showcase" className="product-section-banner" />
                <div className="products-grid">
                    <div className="product-card"><img src={turmericImage} alt="Turmeric Powder" /><h3>Turmeric Powder</h3><p>A vibrant, earthy spice essential for Indian cuisine and known for its health benefits.</p></div>
                    <div className="product-card"><img src={chilliImage} alt="Red Chilli Powder" /><h3>Red Chilli Powder</h3><p>Adds a fiery kick and rich color to your favorite dishes, made from the finest dried chillies.</p></div>
                    <div className="product-card"><img src={dosaImage} alt="Dosa Batter" /><h3>Dosa Batter</h3><p>Freshly ground, ready-to-use batter for perfect, crispy dosas every time.</p></div>
                    <div className="product-card"><img src={cuminImage} alt="Cumin Powder" /><h3>Cumin Powder</h3><p>A warm, nutty spice that brings a distinctive and aromatic flavor to your meals.</p></div>
                    <div className="product-card"><img src={sattuImage} alt="Sattu Powder" /><h3>Sattu Powder</h3><p>A nutritious flour of roasted gram, perfect for protein-rich drinks and dishes.</p></div>
                    <div className="product-card"><img src={riceImage} alt="Rice Powder" /><h3>Rice Powder</h3><p>Finely milled rice flour, a versatile ingredient for cooking and baking.</p></div>
                    <div className="product-card"><img src={besanImage} alt="Besan Powder" /><h3>Besan (Gram Flour)</h3><p>A staple in Indian kitchens, ideal for making batters, sweets, and savory snacks.</p></div>
                    <div className="product-card"><img src={dhaniyaImage} alt="Dhaniya Powder" /><h3>Dhaniya Powder</h3><p>Made from roasted coriander seeds, it adds a mild, sweet, and citrusy aroma.</p></div>
                    <div className="product-card"><img src={mixMasalaImage} alt="Mix Masala Powder" /><h3>Mix Masala Powder</h3><p>A perfect blend of multiple spices to give your dishes a balanced and rich flavor.</p></div>
                </div>

                {/* ============================================================ */}
                {/* TASK 1: NEW "OUR COMPLETE PRODUCT SECTION"                 */}
                {/* ============================================================ */}
                <div className="complete-product-section">
                    <h2 className="section-title">Our Complete Product Section</h2>
                    <div className="product-columns">
                        <div className="product-category">
                            <h3>Liquid Batter Section</h3>
                            <ul>
                                <li>Idli & Dosa Batter</li>
                                <li>Dhokla Batter</li>
                                <li>Dhuska Batter</li>
                                <li>Urad Dal Paste</li>
                                <li>Chana Dal Paste</li>
                                <li>Chana Dal Chutney</li>
                                <li>Chilla Dal Paste</li>
                                <li>Dahi Bada Paste</li>
                                <li>Sambar Bada Paste</li>
                            </ul>
                        </div>
                        <div className="product-category">
                            <h3>Mill Section</h3>
                            <ul>
                                <li>Rice Flour</li>
                                <li>Wheat Flour</li>
                                <li>Multigrain Wheat Flour</li>
                                <li>Corn Flour</li>
                                <li>Chana Sattu</li>
                                <li>Mandua Atta (Finger Millet Flour)</li>
                                <li>Ragi Atta (Red Millet Flour)</li>
                                <li>Gangie Atta</li>
                                <li>Bajra Atta (Pearl Millet Flour)</li>
                                <li>Jowar Atta (Sorghum Flour)</li>
                                <li>Besan (Gram Flour)</li>
                            </ul>
                        </div>
                         <div className="product-category">
                            <h3>Masala (Spices) Section</h3>
                            <ul>
                                <li>Coriander (Dhaniya) Powder</li>
                                <li>Cumin (Jeera) Powder</li>
                                <li>Fennel (Saunf/Golki) Powder</li>
                                <li>Red Chili (Mircha) Powder</li>
                                <li>Mixed Vegetable Masala</li>
                                <li>Garam Masala</li>
                            </ul>
                        </div>
                    </div>
                    <p className="section-note">
                        All types of liquid grinding and seed grinding services are available here.
                    </p>
                </div>
            </div>
        </section>
        <section id="gallery" className="gallery-section">
             <div className="container">
                <h2>Gallery</h2>
                <div className="gallery-grid">
                    <img src={idliImage} alt="Steamed idlis being prepared" />
                    <img src={multipleSpicesImage} alt="An assortment of colorful spices" />
                    <img src={aboutSpices} alt="A collection of vibrant Indian spices" />
                    <img src={turmericImage} alt="Turmeric Powder" />
                </div>
            </div>
        </section>
        <section id="contact" className="contact-section">
            <div className="container contact-container">
                <div className="contact-details">
                    <h2>Contact Us</h2>
                    <p><strong>Email:</strong> jsmasala@gmail.com</p>
                    <p><strong>Phone:</strong> +91-9204710581</p>
                    <p><strong>Address:</strong> Chota Nimdih , Chaibasa, Jharkhand , India</p>
                </div>
                <div className="contact-form">
                    <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for your message!'); }}>
                        <input type="text" name="name" placeholder="Your Name" required />
                        <input type="email" name="email" placeholder="Your Email" required />
                        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
                        <button type="submit" className="btn">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    </main>
);

// MODIFIED: ShopPage now includes the price note at the bottom as requested in TASK 2
const ShopPage = ({ onAddToCart }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/api/products');
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setProducts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);
    return (
        <main>
            <section id="shop" style={{backgroundColor: 'var(--light-cream)', minHeight: '80vh'}}>
                <div className="container">
                    <h2 style={{paddingTop: '2rem'}}>Our Online Store</h2>
                    {loading && <p style={{textAlign: 'center', fontSize: '1.5rem'}}>Loading products...</p>}
                    {error && <p style={{textAlign: 'center', fontSize: '1.5rem', color: 'red'}}>Error: {error}. Please ensure backend is running.</p>}
                    {!loading && !error && (
                        <>
                            <div className="products-grid" style={{paddingTop: '2rem'}}>
                                {products.length > 0 ? (
                                    products.map(product => {
                                        const imageSrc = productImageMap[product.name] || `https://placehold.co/400x300/FFF8DC/8B4513?text=Image+Not+Found`;
                                        return (
                                            <ShopProductCard
                                                key={product._id}
                                                product={product}
                                                onAddToCart={onAddToCart}
                                                imageSrc={imageSrc}
                                            />
                                        );
                                    })
                                ) : (
                                    <p style={{textAlign: 'center', gridColumn: '1 / -1'}}>No products found. Please run the seeder script.</p>
                                )}
                            </div>
                            {/* =================================================== */}
                            {/* TASK 2: Note about price details added below        */}
                            {/* =================================================== */}
                            <p className="price-note">*Contact the shop owner for price details.</p>
                        </>
                    )}
                </div>
            </section>
        </main>
    );
};

const CartPage = ({ cartItems, onAddToCart, onRemoveFromCart }) => {
    const totalPrice = cartItems.reduce((acc, item) => acc + item.qty * item.price, 0);
    return (
        <main>
            <section id="cart" style={{backgroundColor: 'var(--light-cream)', minHeight: '80vh', padding: '60px 20px'}}>
                <div className="container">
                    <h2 style={{marginBottom: '2rem'}}>Your Shopping Cart</h2>
                    {cartItems.length === 0 ? (
                        <p style={{textAlign: 'center', fontSize: '1.5rem'}}>Your cart is empty.</p>
                    ) : (
                        <div>
                            {cartItems.map(item => {
                                const imageSrc = productImageMap[item.name] || `https://placehold.co/100x100/FFF8DC/8B4513?text=Image+Not+Found`;
                                return (
                                    <div key={item._id} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', padding: '1rem', background: 'white', borderRadius: '8px'}}>
                                        <img src={imageSrc} alt={item.name} style={{width: '100px', height: '100px', objectFit: 'cover', borderRadius: '4px'}} />
                                        <h3 style={{flex: 1, marginLeft: '1rem'}}>{item.name}</h3>
                                        <div>
                                            <button onClick={() => onRemoveFromCart(item)} style={{margin: '0 5px'}} className="btn">-</button>
                                            <span>{item.qty}</span>
                                            <button onClick={() => onAddToCart(item)} style={{margin: '0 5px'}} className="btn">+</button>
                                        </div>
                                        <p style={{width: '100px', textAlign: 'right'}}>${(item.qty * item.price).toFixed(2)}</p>
                                    </div>
                                );
                            })}
                            <div style={{textAlign: 'right', marginTop: '2rem', fontSize: '1.8rem', fontWeight: 'bold'}}>
                                Total: ${totalPrice.toFixed(2)}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
};

function App() {
    const [currentPage, setCurrentPage] = useState('home');
    const [cartItems, setCartItems] = useState([]);
    const onAddToCart = (product) => {
        const exist = cartItems.find(x => x._id === product._id);
        if (exist) {
            setCartItems(cartItems.map(x =>
                x._id === product._id ? { ...exist, qty: exist.qty + 1 } : x
            ));
        } else {
            setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
    };
    const onRemoveFromCart = (product) => {
        const exist = cartItems.find(x => x._id === product._id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter(x => x._id !== product._id));
        } else {
            setCartItems(cartItems.map(x =>
                x._id === product._id ? { ...exist, qty: exist.qty - 1 } : x
            ));
        }
    };
    const renderPage = () => {
        switch(currentPage) {
            case 'shop':
                return <ShopPage onAddToCart={onAddToCart} />;
            case 'cart':
                return <CartPage cartItems={cartItems} onAddToCart={onAddToCart} onRemoveFromCart={onRemoveFromCart} />;
            case 'home':
            default:
                return <HomePage />;
        }
    };
    return (
        <div className="App">
            <Header setCurrentPage={setCurrentPage} cartItems={cartItems} />
            {renderPage()}
            <Footer />
        </div>
    );
}

export default App;
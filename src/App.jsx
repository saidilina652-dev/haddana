import logo from "./assets/logo.png";
import vexaLogo from "./assets/vexa.png";
import promovideo from "./assets/promovideo.mp4";
import { FaInstagram, FaFacebookF, FaTiktok, FaPhone, FaEnvelope, FaBuilding } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import "./index.css";
import "./App.css";


const texts = [
  "Spotless Beauty For Your Healthy Skin",
  "Discover premium skincare & makeup products"
];
function App() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [deliveryMethod, setDeliveryMethod] = useState("home");
  const [showCart, setShowCart] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [showProducts, setShowProducts] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  const handleShopNow = () => {
  setShowProducts(true);
  document
    .getElementById("products")
    ?.scrollIntoView({ behavior: "smooth" });
};

  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [cart, setCart] = useState([]);

const addToCart = (product) => {
  setCart(prevCart => {
    const existing = prevCart.find(item => item.id === product.id);

    if (existing) {
      return prevCart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    return [...prevCart, { ...product, quantity: 1 }];
  });
};

const removeFromCart = (productId) => {
  setCart(prevCart => {
    const existing = prevCart.find(item => item.id === productId);

    if (!existing) return prevCart;

    if (existing.quantity === 1) {
      return prevCart.filter(item => item.id !== productId);
    }

    return prevCart.map(item =>
      item.id === productId
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  });
};

const totalItems = cart.reduce((total, item) => total + item.quantity, 0);




 

  const isTouchDevice =
    "ontouchstart" in window || navigator.maxTouchPoints > 0;

  // Intro loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4200);

    return () => clearTimeout(timer);
  }, []);

  // Typing effect
  useEffect(() => {
    const currentText = texts[textIndex];
    let speed = isDeleting ? 25 : 50;

    const timeout = setTimeout(() => {

      if (!isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length + 1));

        if (displayText === currentText) {
          setTimeout(() => setIsDeleting(true), 1200);
        }

      } else {
        setDisplayText(currentText.substring(0, displayText.length - 1));

        if (displayText === "") {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }

    }, speed);

    return () => clearTimeout(timeout);

  }, [displayText, isDeleting, textIndex]);

  // 👇 شرط اللودينغ يكون بعد كل الـ hooks
  if (loading) {
    return (
      <div className="intro">
        <div className="intro-left">Haddana</div>
        <div className="intro-line"></div>
        <div className="intro-right">Pharmacy</div>

      </div>
    );
  }

  // باقي الموقع هنا


  // Product data
  const products = {
    1: {
      img: "https://i.pinimg.com/736x/32/9f/66/329f664a44d584c3634f3726ec055bf3.jpg",
      name: "Touche Skincare",
      desc: "niacinamide + zinc, acide salicylique ✅,",
      price: "$15.00",
    },
    2: {
      img: "https://i.pinimg.com/736x/a8/9f/88/a89f886679b9089cd8391824a159be2a.jpg",
      name: "Vitamin C Cream",
      desc: "Brightens skin tone",
      price: "$18.00",
    },
    3: {
      img: "https://i.pinimg.com/736x/8c/87/4a/8c874aa1c6acd689129b157257e2bf77.jpg",
      name: "Cleanser Gel",
      desc: "Gentle daily cleanser",
      price: "$12.00",
    },
    4: {
      img: "https://i.pinimg.com/1200x/dc/2d/fc/dc2dfc312d763480703ec2393c0eca13.jpg",
      name: "Sunscreen SPF50",
      desc: "UV protection",
      price: "$20.00",
    },
    5: {
      img: "https://i.pinimg.com/1200x/8e/1b/62/8e1b623c3a4407a36347658115d90fac.jpg",
      name: "Night Cream",
      desc: "Repairs overnight",
      price: "$22.00",
    },
    6: {
      img: "https://i.pinimg.com/736x/5b/6e/fe/5b6efe8324b8295b9ceabf6f25e8c472.jpg",
      name: "Lip Balm",
      desc: "Soft lips",
      price: "$6.00",
    },
    7: {
      img: "https://i.pinimg.com/736x/bb/c2/76/bbc2767b7d6c5f3766ca15daf327fefc.jpg",
      name: "Bionnex Cleansing Gel",
      desc: "Gentle removal",
      price: "$10.00",
    },
    8: {
      img: "https://i.pinimg.com/1200x/b3/a8/df/b3a8dfae78ea60f41b57674e4425b65a.jpg",
      name: "Bionnex Repairing Serum",
      desc: "Reduces fine lines, boosts collagen ✅",
      price: "$14.00",
    },
  };

  // Category data
  const categories = [
    {
      name: "JOSEON",
      img: "https://i.pinimg.com/1200x/0c/6a/cb/0c6acbbd5d7e3bf34285eef5d637622b.jpg",
      
    },
    {
      name: "EQQUAL BERRY",
      img: "https://i.pinimg.com/1200x/4f/cc/84/4fcc84e45d6a2c932b43c9c43937f18e.jpg",
    },
    {
      name: "BIONNEX",
      img: "https://i.pinimg.com/1200x/b3/1c/d3/b31cd3792a53922766012ee22341f8fb.jpg",
    },
    {
      name: "TOUCHE",
      img: "https://i.pinimg.com/736x/10/7f/11/107f11559d3e8734ad36a6ebcf25f966.jpg",
    },
  ];

  // Hover / click handlers for categories
  const handleEnter = (name) => !isTouchDevice && setActiveCategory(name);
  const handleLeave = () => !isTouchDevice && setActiveCategory(null);
  const handleClick = (name) =>
    isTouchDevice && setActiveCategory(activeCategory === name ? null : name);

  return (
    <div className="app">
      {/* Hero Section */}
      <section
        className="hero"
        style={{
          
          width: "100%",
          position: "relative"
        }}
      >
      <img src="https://i.pinimg.com/1200x/1d/a6/0b/1da60b72633bee0e0b4ece810c619481.jpg" style={{position: "absolute", inset: 0, width: "100%", objectFit: "cover"}}/>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(32, 32, 32, 0.27)",
            zIndex: 1,
          }}
        />
          
        {/* Navbar */}
       <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
          <div className="logo-box">
            <img src={logo} alt="Logo" className="logo-img" />

            <h2 className="logo-text">HADDANA PHARMACIE</h2>
          </div>
  <div 
  className="burger"
  onClick={() => setMobileMenu(!mobileMenu)}
>
  <span></span>
  <span></span>
  <span></span>
</div>
 <nav className={`nav-links ${mobileMenu ? "open" : ""}`}>
  {["contact", "hours", "about"].map((menu) => (
    <div key={menu} className="dropdown-wrapper">
      <button
        className={`link ${openMenu === menu ? "active" : ""}`}
        onClick={() => setOpenMenu(openMenu === menu ? null : menu)}
      >
        {menu === "contact"
          ? "Contact"
          : menu === "hours"
          ? "Working Hours"
          : "About us"}
      </button>

      {openMenu === menu && (
        <div className="dropdown">
          {menu === "contact" && (
            <>
              <a href="tel:0795262152">📞Phone:0795262152</a>
              <a href="https://www.instagram.com/haddana_pharmacy/?hl=en"  target="_blank" rel="noopener noreferrer"> 📸anstagram: @haddana_pharmacy</a>
<a 
  href="https://www.facebook.com/pharmaciehaddana" 
  target="_blank" 
  rel="noopener noreferrer"
>
  📘Facebook: Pharmacie Haddana
</a>
              <a href="mailto:dr.haddanamedlamine@yahoo.com">
               📧Email: dr.haddanamedlamine@yahoo.com
              </a>
              <a 
  href="https://www.tiktok.com/@haddana.pharmacy?is_from_webapp=1&sender_device=pc" 
  target="_blank" 
  rel="noopener noreferrer"
>
  🎵TikTok: @haddana.pharmacy
</a>

          <a 
  href="https://www.google.com/maps/search/?api=1&query=Biskra حي البوخاري مقابل دار الشباب" 
  target="_blank" 
  rel="noopener noreferrer"
>
  📍Location: Biskra - حي البوخاري مقابل دار الشباب
</a>

            </>
          )}

          {menu === "hours" && (
            <>
              <p>🕑24h/7jrs</p>
             
            </>
          )}

          {menu === "about" && (
            <>
              <p> ✅Premium skincare products selected for quality & safety.</p>
              <p> ✅Expert guidance from pharmacy professionals.</p>
              <p> ✅Healthy & glowing skin is our goal.</p>
              <p> ✅Delivery available to 58 states.</p>
            </>
          )}
        </div>
      )}
    </div>
  ))}

 <button 
  className="link active cart-link"
  onClick={() => setShowCart(true)}
>

  Shopping Cart
{totalItems > 0 && (
  <span className="cart-badge">{totalItems}</span>
)}

</button>

</nav>
 </header> 

        {/* Hero Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: " #bdf6b597",
            padding: "0 20px",
            fontFamily: "Georgia, serif",
          }}
        >
         <h1 className="typing-title">
  {displayText}
  <span className="cursor">|</span>
</h1>
          <div>
            <button className="primary-btn" onClick={handleShopNow}>
              Shop Now
            </button>
            <button
  className="secondary-btn"
  style={{ marginLeft: "15px" }}
  onClick={() => {
    document
      .getElementById("footer") // ID تاع الـ footer
      ?.scrollIntoView({ behavior: "smooth" });
  }}
>
  Read More
</button>

          </div>
        </div>
      
        
      </section>

      {/* Categories Section */}
      <section className="white-curve">
        <h2>Shop By Category</h2>
        <div className="categories">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className={`category ${
                activeCategory === cat.name ? "active" : activeCategory ? "inactive" : ""
              }`}
              onMouseEnter={() => handleEnter(cat.name)}
              onMouseLeave={handleLeave}
              onClick={() => handleClick(cat.name)}
            >
              <div
                className="circle"
                style={{ backgroundImage: `url(${cat.img})` }}
              />
              <p>{cat.name}</p>

              {activeCategory === cat.name && (
                <div className="ad-box">
                  <p>Discover {cat.name} products</p>
                  <button>Shop Now</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
     {/* Video Section */}
{/* Video Section */}
{/* Video Section */}
<section className="video-section fade-in">
  <h2 className="video-title">
    The visit is on you… and the gift is on us 🎁
  </h2>

  <p className="video-subtitle">
    Every time you visit us, you have a chance to get discounts of up to 30%.
    <br />
    Get your card and your prize is waiting for you.
  </p>

  <div className="video-frame">
    <video
      src={promovideo}
      autoPlay
      loop
      controls
    />
  </div>
</section>


      {/* Products Section */}
      <section
        id="products"
        className={`products-section ${showProducts ? "show" : ""}`}
      >
        <h2 className="center">Hand Picked Products</h2>
        <div className="products">
          {Object.keys(products).map((p, index) => (
            <div
              key={p}
              className="card"
              style={{
                transition: `all 0.5s ease ${index * 0.1}s`,
                transform: showProducts ? "translateY(0)" : "translateY(50px)",
                opacity: showProducts ? 1 : 0,
              }}
            >
              <div
                className="img"
                style={{ backgroundImage: `url(${products[p].img})` }}
              />
              <h4>{products[p].name}</h4>
              <p className="description">{products[p].desc}</p>
              <p className="price">{products[p].price}</p>
              <button
  className="btn cart-btn"
  onClick={() =>
    addToCart({
      id: p,
      name: products[p].name,
      price: products[p].price
    })
  }
>
  Add to Cart
</button>

<button
  className="btn remove-btn"
  onClick={() => removeFromCart(p)}
>
  Remove
</button>


            </div>
          ))}
        </div>
      </section>
      {showCart && (
  <section className="cart-page">
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <div>
                <h4>{item.name}</h4>
                <p>Price: {item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>

              <div className="cart-actions">
                <button onClick={() => addToCart(item)}>+</button>
                <button onClick={() => removeFromCart(item.id)}>-</button>
              </div>
            </div>
          ))}

          <h3>
            Total: $
            {cart.reduce((total, item) =>
              total + parseFloat(item.price.replace("$", "")) * item.quantity,
            0).toFixed(2)}
          </h3>
          <div className="order-form">
  <h3>Customer Information</h3>

  <input
    type="text"
    placeholder="Your Full Name"
    value={customerName}
    onChange={(e) => setCustomerName(e.target.value)}
  />

  <textarea
    placeholder="Your Address"
    value={customerAddress}
    onChange={(e) => setCustomerAddress(e.target.value)}
  />

  <div className="delivery-options">
    <label>
      <input
        type="radio"
        value="home"
        checked={deliveryMethod === "home"}
        onChange={(e) => setDeliveryMethod(e.target.value)}
      />
      Home Delivery
    </label>

    <label>
      <input
        type="radio"
        value="post"
        checked={deliveryMethod === "post"}
        onChange={(e) => setDeliveryMethod(e.target.value)}
      />
      Post Office
    </label>
  </div>

  <button
    className="confirm-btn"
    onClick={() => {
      if (!customerName || !customerAddress) {
        alert("Please fill all fields");
        return;
      }

      alert("Order Confirmed 🎉");
    }}
  >
    Confirm Order
  </button>
</div>

        </>
      )}

      <button className="close-cart" onClick={() => setShowCart(false)}>
        Close
      </button>
    </div>
  </section>
)}

      <footer id="footer" className="footer">

  <div className="footer-container">

    <div className="footer-col">
      <div className="footer-brand">
        <img src={logo} alt="Haddana Logo" className="footer-logo-img" />
        <h3 className="footer-title">HADDANA PHARMACIE</h3>
      </div>
      <p className="footer-text">Premium skincare & pharmacy products.</p>
      <p className="footer-text">Healthy & glowing skin is our goal.</p>
    </div>
    <div className="footer-image"> </div>
    <div className="footer-col">
      <h4>Contact</h4>
      <a href="tel:0795262152">📞 0795262152</a>
      <a href="mailto:dr.haddanamedlamine@yahoo.com">📧 Email Us</a>
      <a href="https://www.google.com/maps/search/?api=1&query=Biskra حي البوخاري مقابل دار الشباب" target="_blank" rel="noopener noreferrer">
        📍 Biskra - حي البوخاري
      </a>
    </div>

    <div className="footer-col">
      <h4>Follow Us</h4>
      <a href="https://www.instagram.com/haddana_pharmacy/" target="_blank" rel="noopener noreferrer" className="social-link">
        <FaInstagram className="social-icon" /> Instagram
      </a>
      <a href="https://www.facebook.com/pharmaciehaddana" target="_blank" rel="noopener noreferrer" className="social-link">
        <FaFacebookF className="social-icon" /> Facebook
      </a>
      <a href="https://www.tiktok.com/@haddana.pharmacy" target="_blank" rel="noopener noreferrer" className="social-link">
        <FaTiktok className="social-icon" /> TikTok
      </a>
    </div>

  </div> {/* end footer-container */}

<div className="footer-bottom">
  © 2026 Haddana Pharmacie. All rights reserved. &nbsp;
  <a
    href="https://linktr.ee/vexaagenc?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnA9Yosl6MHmnh1B8agh0Ubt3SUIaLa3_c03dB6Nt0BZz8IggbBGm0Hz1bXU4_aem_rU59owI3pUHawOKU2DV7qg"   // حط الرابط هنا
    target="_blank"
    rel="noopener noreferrer"
    className="vexa-credit"
  >
    <img src={vexaLogo} alt="Agence Vexa" className="vexa-logo" />
    <span className="vexa-text">Site by Agence Vexa</span>
  </a>
</div>
</footer>   
    </div>
  );
}
export default App;

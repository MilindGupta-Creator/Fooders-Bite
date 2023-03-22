import React from "react";
import { Link } from "react-router-dom"; // imported Link for client side routing

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="Food Fire Logo"
      src="https://content.jdmagicbox.com/comp/banaskantha/p8/9999p2748.2748.210921232217.w9p8/catalogue/food-bite-cafe-deesa-restaurants-ggzj564xj8.jpg"
    />
  </a>
);

function Header() {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;

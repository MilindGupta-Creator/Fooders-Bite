import React from "react";

const Title = () => (
  <a href="/">
    <img className="logo" alt="Food Fire Logo" src="https://content.jdmagicbox.com/comp/banaskantha/p8/9999p2748.2748.210921232217.w9p8/catalogue/food-bite-cafe-deesa-restaurants-ggzj564xj8.jpg" />
  </a>
);

function Header() {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;

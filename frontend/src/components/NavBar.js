import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <ul className="navbar-ul">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products List</Link>
        </li>
        <li>
          <Link to="/add-product">Add Product</Link>
        </li>
        <li>
          <Link to="/update-product">Update Product</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/register">Registration</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;

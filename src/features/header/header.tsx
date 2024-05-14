import { NavLink } from "react-router-dom";
import styles from "./header.module.css";
import React from "react";
import { CartLink } from "../cart/cart-link";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <NavLink className={styles.navLink} to="/">
          Home
        </NavLink>
        <NavLink className={styles.navLink} to="/products">
          Products
        </NavLink>
        <CartLink />
      </nav>
    </header>
  );
};

export default Header;

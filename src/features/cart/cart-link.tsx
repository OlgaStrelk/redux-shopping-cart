import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./cart-link.module.css";

export function CartLink() {
  return (
    <NavLink to="/cart" className={styles.link}>
      <span className={styles.text}>🛒&nbsp;&nbsp;Cart</span>
    </NavLink>
  );
}

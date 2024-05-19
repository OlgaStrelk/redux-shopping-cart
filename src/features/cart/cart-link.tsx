import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./cart-link.module.css";
import { useAppSelector } from "../../app/hooks";
import { getNumItems } from "./cartSlice";

export function CartLink() {
  const numItems = useAppSelector(getNumItems);
  return (
    <NavLink to="/cart" className={styles.link}>
      <span className={styles.text}>
        🛒&nbsp;&nbsp;{numItems ? numItems : "Cart"}
      </span>
    </NavLink>
  );
}

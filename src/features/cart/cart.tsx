import React from "react";
import styles from "./cart.module.css";
import Header from "../header/header";
import { useAppSelector } from "../../app/hooks";

export function Cart() {
  const products = useAppSelector((state) => state.products.products);
  const items = useAppSelector((state) => state.cart.items);
  return (
    <>
      <main className="page">
        <h1>Shopping Cart</h1>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(items).map(([id, quantity]) => (
              <tr>
                <td>{products[id].name}</td>
                <td>
                  <input
                    type="text"
                    className={styles.input}
                    defaultValue={quantity}
                  />
                </td>
                <td>$44.44</td>
                <td>
                  <button aria-label={`Remove ${products[id].name}`}>X</button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td></td>
              <td className={styles.total}>${0.0}</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
        <form>
          <button className={styles.button} type="submit">
            Checkout
          </button>
        </form>
      </main>
    </>
  );
}

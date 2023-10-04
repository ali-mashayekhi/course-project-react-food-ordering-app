import CartIcon from "../Cart/CartIcon";

import styles from "./HeaderCartButton.module.css";

function HeaderCartButton(props) {
  return (
    <button className={styles.button}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>3</span>
    </button>
  );
}

export default HeaderCartButton;

// Go to main branch and check scale function for transforming button

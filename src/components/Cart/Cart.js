import Modal from "../UI/Modal";
import styles from "./Cart.module.css";

function Cart(props) {
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map(
        (cartItem) => (
          <li key={cartItem.id}>{cartItem.name}</li>
        )
      )}
    </ul>
  );
  return (
    <Modal onHideCartHandler={props.onHideCartHandler}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={styles.actions}>
        <button
          className={styles["button--alt"]}
          onClick={props.onHideCartHandler}
        >
          Close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;

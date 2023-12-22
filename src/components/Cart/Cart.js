import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

function Cart(props) {
  const cartCtx = useContext(CartContext);
  const [showCheckout, setShowCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  function cartItemRemovehandler(id) {
    cartCtx.removeItem(id);
  }
  function cartItemAddHandler(item) {
    cartCtx.addItem({ ...item, amount: 1 });
  }

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            {...item}
            onRemove={cartItemRemovehandler}
            onAdd={cartItemAddHandler.bind(null, item)}
            key={item.id}
          />
        );
      })}
    </ul>
  );

  function orderHandler() {
    setShowCheckout(true);
  }

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  async function submitOrderHandler(userInfo) {
    setIsSubmitting(true);
    const options = {
      method: "POST",
      body: JSON.stringify({
        user: userInfo,
        orderedItems: cartCtx.items,
      }),
    };
    await fetch(
      "https://react-course-a68bc-default-rtdb.firebaseio.com/orders.json",
      options
    );

    cartCtx.clearCart();
    setIsSubmitting(false);
    setDidSubmit(true);
  }

  const modalActions = (
    <div className={styles.actions}>
      <button
        className={styles["button--alt"]}
        onClick={props.onHideCartHandler}
      >
        Close
      </button>
      {hasItems && (
        <button onClick={orderHandler} className={styles.button}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {showCheckout && (
        <Checkout
          onSubmitOrder={submitOrderHandler}
          onHideCartHandler={props.onHideCartHandler}
        />
      )}
      {!showCheckout && modalActions}
    </>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>;
  const didSubmitModalContent = (
    <>
      <p>Successfully send the order!</p>
      <div className={styles.actions}>
        <button className={styles.button} onClick={props.onHideCartHandler}>
          Close
        </button>
      </div>
    </>
  );

  return (
    <Modal onHideCartHandler={props.onHideCartHandler}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && !didSubmit && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
}

export default Cart;

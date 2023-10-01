import styles from "./ShopCartItem.module.css";
import { useContext } from "react";
import { OrdersDispatchContext } from "../../store/orders-context";

function ShopCartItem(props) {
  const orderDispatch = useContext(OrdersDispatchContext);

  function addOrderHandler() {
    orderDispatch({
      type: "add-one-order",
      orderData: props.order,
    });
  }
  function removeOrderHandler() {
    orderDispatch({
      type: "remove-one-order",
      orderData: props.order,
    });
  }

  return (
    <>
      <div className={styles["list-item"]}>
        <div className={styles["order-info"]}>
          <p className={styles.title}>{props.title}</p>
          <p className={styles.price}>{props.price}</p>
          <p className={styles.amount}>&#215; {props.amount}</p>
        </div>
        <div className={styles.btns}>
          <button
            className={`${styles["remove-btn"]} ${styles.btn}`}
            onClick={removeOrderHandler}
          >
            <p>-</p>
          </button>
          <button
            className={`${styles["add-btn"]} ${styles.btn}`}
            onClick={addOrderHandler}
          >
            <p>+</p>
          </button>
        </div>
      </div>
      <hr className={styles["divider-line"]} />
    </>
  );
}

export default ShopCartItem;

//FIX EMPTY SHOPCART ANIMATION

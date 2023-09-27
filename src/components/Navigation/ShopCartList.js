import Modal from "../UI/Modal/Modal";
import styles from "./ShopCartList.module.css";
import { useContext } from "react";
import { OrdersContext } from "../../store/orders-context";
import { getOrdersSum } from "../../helpers/helpers";
import ShopCartItem from "./ShopCartItem";

function ShopCartList(props) {
  const orders = useContext(OrdersContext);

  const emptyCartMessage = (
    <div className={styles["empty-cart"]}>
      <p>There is no item in your shop cart yet!</p> <hr />
    </div>
  );
  const ordersList = orders.map((order) => {
    return (
      <ShopCartItem
        title={order.title}
        price={order.price}
        amount={order.amount}
        key={order.id}
      ></ShopCartItem>
    );
  });

  function orderHandler() {
    console.log(orders);
  }

  return (
    <Modal
      isHidden={props.isHidden}
      onCloseModalHandler={props.onCloseModalHandler}
    >
      <div className={styles["orders-cart"]}>
        {orders.length > 0 ? ordersList : emptyCartMessage}
      </div>
      <div className={styles["total-price"]}>
        <p>Total Amount</p>
        <p>{getOrdersSum(orders).totalPrice.toFixed(2)}$</p>
      </div>
      <div className={styles.btns}>
        <button
          className={styles["close-btn"]}
          onClick={props.onCloseModalHandler}
        >
          Close
        </button>
        {orders.length > 0 ? (
          <button className={styles["order-btn"]} onClick={orderHandler}>
            Order
          </button>
        ) : (
          ""
        )}
      </div>
    </Modal>
  );
}

export default ShopCartList;

import { useContext, useEffect, useState } from "react";
import styles from "./ShopCart.module.css";
import ShopCartList from "./ShopCartList";
import { OrdersContext } from "../../store/orders-context";
import { getOrdersSum } from "../../helpers/helpers";

function ShopCart() {
  const [shopCartAmount, setShopCartAmount] = useState(0);
  const [resized, setResized] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const { orders, status } = useContext(OrdersContext);

  function shopCartHandler() {
    setShowModal(true);
  }

  function closeModalHandler() {
    setShowModal(false);
  }

  useEffect(() => {
    // Change effects of ShopCart by adding or removing new order new order
    // 1. grow in size
    if (orders.length <= 0 && status === "disabled") return;

    setResized(true);
    // 2. resize to it's previous size after 50mlsec
    setTimeout(() => setResized(false), 50);
    // 3. set numbre of orders
    const amount = getOrdersSum(orders).totalOrders;
    setShopCartAmount(amount);
  }, [orders, status]);

  return (
    <>
      <button
        className={`${styles.cart} ${
          resized ? styles["cart__add-effect"] : ""
        }`}
        onClick={shopCartHandler}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="#087f5b"
          viewBox="0 0 256 256"
          className={styles.icon}
        >
          <path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM180,192a12,12,0,1,1-12,12A12,12,0,0,1,180,192Zm-96,0a12,12,0,1,1-12,12A12,12,0,0,1,84,192Z"></path>
        </svg>
        <p className={styles["cart-title"]}>Your Cart</p>
        <p className={styles["cart-number"]}>{shopCartAmount}</p>
      </button>
      <ShopCartList
        isHidden={!showModal}
        onCloseModalHandler={closeModalHandler}
      />
    </>
  );
}

export default ShopCart;

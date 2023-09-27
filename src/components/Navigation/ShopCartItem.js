import styles from "./ShopCartItem.module.css";

function ShopCartItem(props) {
  return (
    <>
      <div className={styles["list-item"]}>
        <div className={styles["order-info"]}>
          <p className={styles.title}>{props.title}</p>
          <p className={styles.price}>{props.price}</p>
          <p className={styles.amount}>&#215; {props.amount}</p>
        </div>
        <div className={styles.btns}>
          <button className={`${styles["remove-btn"]} ${styles.btn}`}>-</button>
          <button className={`${styles["add-btn"]} ${styles.btn}`}>+</button>
        </div>
      </div>
      <hr className={styles["divider-line"]} />
    </>
  );
}

export default ShopCartItem;

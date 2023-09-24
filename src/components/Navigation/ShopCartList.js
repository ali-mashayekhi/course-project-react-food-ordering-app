import Modal from "../UI/Modal/Modal";
import styles from "./ShopCartList.module.css";

function ShopCartList(props) {
  let JSXContent;

  if (props.ultimateOrders.length <= 0) {
    JSXContent = (
      <div className={styles["empty-cart"]}>
        <p>There is no item in your shop cart yet!</p>
        <hr />
      </div>
    );
  } else {
  }
  return (
    <Modal
      isHidden={props.isHidden}
      onCloseModalHandler={props.onCloseModalHandler}
    >
      {JSXContent}
      <div className={styles["total-price"]}>
        <p>Total Amount</p>
        <p>88.99$</p>
      </div>
      <div className={styles.btns}>
        <button
          className={styles["close-btn"]}
          onClick={props.onCloseModalHandler}
        >
          Close
        </button>
      </div>
    </Modal>
  );
}

export default ShopCartList;

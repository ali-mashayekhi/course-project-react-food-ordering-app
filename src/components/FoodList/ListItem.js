import { useContext, useState } from "react";
import { OrdersDispatchContext } from "../../store/orders-context";
import styles from "./ListItem.module.css";

function ListItem(props) {
  const [enteredAmount, setEnteredAmount] = useState("1");
  const dispatchOrders = useContext(OrdersDispatchContext);

  function enteredAmountChangeHandler(event) {
    setEnteredAmount(event.target.value);
  }

  function orderSubmitHandler(event) {
    event.preventDefault();

    dispatchOrders({
      type: "add-new-order",
      orderData: {
        title: props.title,
        price: props.price,
        amount: +event.target[0].value,
        id: Math.random(),
      },
    });

    // props.onOrderHandler({
    //   title: props.title,
    //   price: props.price,
    //   amount: +event.target[0].value,
    // });
  }

  return (
    <div className={styles["list-item"]}>
      <div className={styles["list-item__info"]}>
        <div className={styles["details"]}>
          <p className={styles["title"]}>{props.title}</p>
          <p className={styles["description"]}>{props.desc}</p>
          <p className={styles["price"]}>{props.price}</p>
        </div>
        <form className={styles.order} onSubmit={orderSubmitHandler}>
          <div>
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              onChange={enteredAmountChangeHandler}
              value={enteredAmount}
            />
          </div>
          <button>+Add</button>
        </form>
      </div>
      <hr />
    </div>
  );
}

export default ListItem;

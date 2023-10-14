import { useRef, useState } from "react";

import Input from "../../UI/Input";
import styles from "./MealItemform.module.css";

function MealItemForm(props) {
  const enteredAmount = useRef(null);
  const [amountIsValid, setAmountIsValid] = useState(true);

  function submitHandler(e) {
    e.preventDefault();
    const enteredAmountNumber = +enteredAmount.current.value;

    if (
      enteredAmount.current.value.trim().length === 0 ||
      enteredAmountNumber > 5 ||
      enteredAmountNumber < 1
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={enteredAmount}
        input={{
          id: `Amount_${props.id}`,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
        label="Amount"
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
}

export default MealItemForm;

import { useRef } from "react";

import Input from "../../UI/Input";
import styles from "./MealItemform.module.css";

function MealItemForm(props) {
  const enteredAmount = useRef(null);
  console.log(enteredAmount);
  function submitHandler(e) {
    e.preventDefault();

    console.log(enteredAmount);
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
    </form>
  );
}

export default MealItemForm;

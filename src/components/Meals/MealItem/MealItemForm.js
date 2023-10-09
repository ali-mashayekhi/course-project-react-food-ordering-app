import Input from "../../UI/Input";
import styles from "./MealItemform.module.css";
import CartContext from "../../../store/cart-context";
import { useContext } from "react";

function MealItemForm(props) {
  const cartCtx = useContext(CartContext);

  return (
    <form className={styles.form}>
      <Input
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

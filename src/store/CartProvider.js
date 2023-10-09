import { createContext, useReducer } from "react";
import CartContext from "./cart-context";

function CartProvider(props) {
  function addItemToCartHandler(item) {
    const index = this.items.findIndex((curr) => {
      return curr.name === action.value.name;
    });
    if (index) this.items[index].amount += action.value.amount;
  }
  function removeItemToCartHandler(id) {}

  const [cartContextState, dispatchCartContext] = useReducer(
    reducerHandler,
    cartContext
  );

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };

  return (
    <CartContext.Provider value={cartContextState}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;

function reducerHandler(state, action) {
  if (action.type === "add-order") {
    state.addItemToCartHandler(action.value);
  }
}

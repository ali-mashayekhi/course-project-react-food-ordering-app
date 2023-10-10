import { useReducer } from "react";
import CartContext from "./cart-context";

function CartProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  function addItemToCartHandler(item) {
    dispatchCartAction({ type: "ADD", item });
  }
  function removeItemToCartHandler(id) {
    dispatchCartAction({ type: "REMOVE", id });
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

function cartReducer(state, action) {
  if (action.type === "ADD") {
    // const index = state.items.findIndex((curr) => {
    //   return curr.name === action.item.name;
    // });
    // if (index) {
    //   const updatedTotalAmount =
    //     state.totalAmount + action.item.price * action.item.price;
    //   return {
    //     ...state,
    //     totalAmount: updatedTotalAmount,
    //   };
    // } else {

    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.price;

    console.log({
      // ...state,
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    });

    return {
      // ...state,
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
    // }
  }
}

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
  function clearItemsHandler() {
    dispatchCartAction({ type: "CLEAR" });
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
    clearCart: clearItemsHandler,
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
    const existingItemIndex = state.items.findIndex((curr) => {
      return curr.id === action.item.id;
    });
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    if (existingItemIndex !== -1) {
      const updatedItems = [...state.items];
      const updatedItem = {
        ...state.items[existingItemIndex],
        amount: updatedItems[existingItemIndex].amount + action.item.amount,
      };
      updatedItems[existingItemIndex] = updatedItem;
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    } else {
      const updatedItems = state.items.concat(action.item);
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
  }

  if (action.type === "REMOVE") {
    const existingItemIndex = state.items.findIndex((curr) => {
      return curr.id === action.id;
    });
    const updatedTotalAmount =
      state.totalAmount - state.items[existingItemIndex].price;

    if (state.items[existingItemIndex].amount === 1) {
      // const newItems = [
      //   ...state.items.slice(0, existingItemIndex),
      //   ...state.items.slice(existingItemIndex + 1, state.items.length),
      // ];

      const newItems = state.items.filter((item) => item.id !== action.id);
      return { items: newItems, totalAmount: updatedTotalAmount };
    } else {
      const updatedItem = {
        ...state.items[existingItemIndex],
        amount: state.items[existingItemIndex].amount - 1,
      };
      const updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
  }

  if (action.type === "CLEAR") {
    return defaultCartState;
  }
}

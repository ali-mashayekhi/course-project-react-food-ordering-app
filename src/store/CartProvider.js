import CartContext from "./cart-context";

function CartProvider(props) {
  function addItemToCartHandler() {}
  function removeItemToCartHandler() {}

  const cartContext = {
    items: [],
    totalAmount: 0,
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

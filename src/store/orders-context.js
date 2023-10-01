import { createContext, useReducer } from "react";

export const OrdersContext = createContext([]);
export const OrdersDispatchContext = createContext(null);

function OrdersContextProvider(props) {
  const [orders, dispatchOrders] = useReducer(orderReducer, []);
  console.log(orders);

  return (
    <OrdersContext.Provider value={orders}>
      <OrdersDispatchContext.Provider value={dispatchOrders}>
        {props.children}
      </OrdersDispatchContext.Provider>
    </OrdersContext.Provider>
  );
}

export default OrdersContextProvider;

function orderReducer(previousState, actions) {
  if (actions.type === "add-new-order") {
    const repeatedOrder = previousState.find(
      (element) => actions.orderData.title === element.title
    );
    if (repeatedOrder) {
      repeatedOrder.amount = repeatedOrder.amount + actions.orderData.amount;
      return [...previousState];
    } else {
      return [...previousState, { ...actions.orderData }];
    }
  } else if (actions.type === "add-one-order") {
    const newState = [...previousState];
    const orderPosition = previousState.findIndex((element) => {
      return actions.orderData.title === element.title;
    });
    ++newState[orderPosition].amount;
    return [...newState];
  } else if (actions.type === "remove-one-order") {
    const newState = [...previousState];
    const orderPosition = previousState.findIndex((element) => {
      return actions.orderData.title === element.title;
    });
    if (newState[orderPosition].amount - 1 <= 0) {
      newState.splice(orderPosition, 1);
      return [...newState];
    }
    --newState[orderPosition].amount;
    return [...newState];
  }
}

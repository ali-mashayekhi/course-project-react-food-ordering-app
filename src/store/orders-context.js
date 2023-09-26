import { createContext, useReducer } from "react";

export const OrdersContext = createContext([]);
export const OrdersDispatchContext = createContext(null);

function OrdersContextProvider(props) {
  const [orders, dispatchOrders] = useReducer(orderReducer, []);

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
  }
}

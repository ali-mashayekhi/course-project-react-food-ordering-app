import { createContext, useReducer } from "react";

export const OrdersContext = createContext([]);
export const OrdersDispatchContext = createContext(null);

function OrdersContextProvider(props) {
  const [orders, dispatchOrders] = useReducer(orderReducer, {
    orders: [],
    status: "disabled",
  });

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
    const repeatedOrder = previousState.orders.find(
      (element) => actions.orderData.title === element.title
    );
    if (repeatedOrder) {
      repeatedOrder.amount = repeatedOrder.amount + actions.orderData.amount;
      return { orders: [...previousState.orders], status: "activated" };
    } else {
      return {
        orders: [...previousState.orders, { ...actions.orderData }],
        status: "activated",
      };
    }
  } else if (actions.type === "add-one-order") {
    const newState = [...previousState.orders];
    const orderPosition = previousState.orders.findIndex((element) => {
      return actions.orderData.title === element.title;
    });
    ++newState[orderPosition].amount;
    return { orders: [...newState], status: "activated" };
  } else if (actions.type === "remove-one-order") {
    const newState = [...previousState.orders];
    const orderPosition = previousState.orders.findIndex((element) => {
      return actions.orderData.title === element.title;
    });
    if (newState[orderPosition].amount - 1 <= 0) {
      newState.splice(orderPosition, 1);
      return { orders: [...newState], status: "activated" };
    }
    newState[orderPosition].amount = newState[orderPosition].amount - 1;
    return { orders: [...newState], status: "activated" };
  }
}

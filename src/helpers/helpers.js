export function getOrdersSum(orders) {
  if (orders.length === 0) {
    return { totalOrders: 0, totalPrice: 0 };
  }
  return orders.reduce(
    (acc, curr) => {
      return {
        totalOrders: acc.totalOrders + curr.amount,
        totalPrice: acc.totalPrice + +curr.price.slice(0, -1) * curr.amount,
      };
    },
    { totalOrders: 0, totalPrice: 0 }
  );
}

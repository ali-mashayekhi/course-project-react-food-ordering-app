import Navigation from "./components/Navigation/Navigation";
import BackgroundImage from "./components/UI/BackgroundImage/BackgroundImage";
import MainArticle from "./components/UI/MainArticle/MainArticle";
import FoodList from "./components/FoodList/FoodList";
import { useState } from "react";

const storedOrders = [];

function App() {
  const [orders, setorders] = useState(storedOrders);

  function OrderHandler(orderData) {
    setorders((previousState) => {
      const repeatedOrder = previousState.find(
        (element) => orderData.title === element.title
      );

      if (repeatedOrder) {
        repeatedOrder.amount = repeatedOrder.amount + orderData.amount;
        return previousState;
      } else {
        return [...previousState, orderData];
      }
    });
  }

  console.log(orders);
  return (
    <>
      <BackgroundImage />
      <Navigation orders={orders} />
      <MainArticle />
      <FoodList onOrderHandler={OrderHandler} />
    </>
  );
}

export default App;

import Navigation from "./components/Navigation/Navigation";
import BackgroundImage from "./components/UI/BackgroundImage/BackgroundImage";
import MainArticle from "./components/UI/MainArticle/MainArticle";
import FoodList from "./components/FoodList/FoodList";
import { useState } from "react";

const storedOrders = [];

function App() {
  const [orders, setorders] = useState(storedOrders);
  const [shopCartOrders, setShopCartOrders] = useState(storedOrders);
  const [showModal, setShowModal] = useState(false);

  function OrderHandler(orderData) {
    setorders((previous) => [...previous, orderData]);
    setShopCartOrders((previousState) => {
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

  function shopCartHandler() {
    setShowModal(true);
  }

  function closeModalHandler() {
    setShowModal(false);
  }

  return (
    <>
      <BackgroundImage />
      <Navigation
        orders={orders}
        shopCartOrders={shopCartOrders}
        onShopCartHandler={shopCartHandler}
        isHidden={!showModal}
        onCloseModalHandler={closeModalHandler}
      />
      <MainArticle />
      <FoodList onOrderHandler={OrderHandler} />
    </>
  );
}

export default App;

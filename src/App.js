import Navigation from "./components/Navigation/Navigation";
import BackgroundImage from "./components/UI/BackgroundImage/BackgroundImage";
import MainArticle from "./components/UI/MainArticle/MainArticle";
import FoodList from "./components/FoodList/FoodList";
import { useState } from "react";

const storedOrders = [];

function App() {
  const [showModal, setShowModal] = useState(false);
  const [ultimateOrders, setUltimateOrders] = useState(storedOrders);

  function OrderHandler(orderData) {
    setUltimateOrders((previousState) => {
      const repeatedOrder = previousState.find(
        (element) => orderData.title === element.title
      );
      if (repeatedOrder) {
        repeatedOrder.amount = repeatedOrder.amount + orderData.amount;
        return [...previousState];
      } else {
        return [...previousState, { ...orderData }];
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
        // orders={orders}
        // shopCartOrders={shopCartOrders}
        ultimateOrders={ultimateOrders}
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

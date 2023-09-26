import Navigation from "./components/Navigation/Navigation";
import BackgroundImage from "./components/UI/BackgroundImage/BackgroundImage";
import MainArticle from "./components/UI/MainArticle/MainArticle";
import FoodList from "./components/FoodList/FoodList";
import OrdersContextProvider from "./store/orders-context";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  function shopCartHandler() {
    setShowModal(true);
  }

  function closeModalHandler() {
    setShowModal(false);
  }

  return (
    <OrdersContextProvider>
      <BackgroundImage />
      <Navigation
        onShopCartHandler={shopCartHandler}
        isHidden={!showModal}
        onCloseModalHandler={closeModalHandler}
      />
      <MainArticle />
      <FoodList />
    </OrdersContextProvider>
  );
}

export default App;

import Navigation from "./components/Navigation/Navigation";
import BackgroundImage from "./components/UI/BackgroundImage/BackgroundImage";
import MainArticle from "./components/UI/MainArticle/MainArticle";
import FoodList from "./components/FoodList/FoodList";
import OrdersContextProvider from "./store/orders-context";

function App() {
  return (
    <OrdersContextProvider>
      <BackgroundImage />
      <Navigation />
      <MainArticle />
      <FoodList />
    </OrdersContextProvider>
  );
}

export default App;

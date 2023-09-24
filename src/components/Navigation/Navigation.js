import styles from "./Navigation.module.css";
import ShopCart from "./ShopCart";

function Navigation(props) {
  return (
    <div className={styles.navigation}>
      <p className={styles.title}>ReactMeals</p>
      <ShopCart
        ultimateOrders={props.ultimateOrders}
        onShopCartHandler={props.onShopCartHandler}
        isHidden={props.isHidden}
        onCloseModalHandler={props.onCloseModalHandler}
      />
    </div>
  );
}

export default Navigation;

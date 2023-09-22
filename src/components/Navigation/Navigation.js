import styles from "./Navigation.module.css";
import ShopCart from "./ShopCart";

function Navigation(props) {
  return (
    <div className={styles.navigation}>
      <p className={styles.title}>ReactMeals</p>
      <ShopCart
        orders={props.orders}
        shopCartOrders={props.shopCartOrders}
        onShopCartHandler={props.onShopCartHandler}
        isHidden={props.isHidden}
        onCloseModalHandler={props.onCloseModalHandler}
      />
    </div>
  );
}

export default Navigation;

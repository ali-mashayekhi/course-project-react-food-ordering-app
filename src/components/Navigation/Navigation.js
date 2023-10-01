import styles from "./Navigation.module.css";
import ShopCart from "./ShopCart";

function Navigation() {
  return (
    <div className={styles.navigation}>
      <p className={styles.title}>ReactMeals</p>
      <ShopCart />
    </div>
  );
}

export default Navigation;

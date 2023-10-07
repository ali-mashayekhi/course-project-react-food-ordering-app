import { Fragment } from "react";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";

function Header(props) {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onShowModalHandler={props.onShowModalHandler}>
          Cart
        </HeaderCartButton>
      </header>
      <div className={styles["main-image"]}>
        <img
          src={mealsImage}
          alt="A long resturaunt table with lots of diffrent foods on it"
        />
      </div>
    </Fragment>
  );
}

export default Header;

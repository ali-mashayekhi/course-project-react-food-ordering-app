import styles from "./MainArticle.module.css";

function MainArticle(props) {
  return (
    <div className={styles.main}>
      <h2>Delicios Food, Delivered to You</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </div>
  );
}

export default MainArticle;

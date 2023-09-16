import styles from "./FoodList.module.css";
import ListItem from "./ListItem";

const foods = [
  { title: "Sushi", desc: "Finest fish and veggies", price: "22.99$" },
  { title: "Schnitzel", desc: "A germany specialty", price: "16.50$" },
  { title: "Barbecur Burger", desc: "American, raw, meatys", price: "12.99$" },
  { title: "Green Bowl", desc: "Healthy...and green...", price: "16.50$" },
];

function FoodList(props) {
  function orderHandler(orderData) {
    props.onOrderHandler(orderData);
  }

  return (
    <div className={styles["food-list"]}>
      <ListItem
        title={foods[0].title}
        desc={foods[0].desc}
        price={foods[0].price}
        onOrderHandler={orderHandler}
      />
      <ListItem
        title={foods[1].title}
        desc={foods[1].desc}
        price={foods[1].price}
        onOrderHandler={orderHandler}
      />
      <ListItem
        title={foods[2].title}
        desc={foods[2].desc}
        price={foods[2].price}
        onOrderHandler={orderHandler}
      />
      <ListItem
        title={foods[3].title}
        desc={foods[3].desc}
        price={foods[3].price}
        onOrderHandler={orderHandler}
      />
    </div>
  );
}

export default FoodList;

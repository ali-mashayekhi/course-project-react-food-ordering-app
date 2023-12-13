import styles from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import { useEffect, useState } from "react";

function AvailableMeals() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    async function getMeals() {
      try {
        const response = await fetch(
          "https://react-course-a68bc-default-rtdb.firebaseio.com/meals.json"
        );
        if (!response.ok) throw new Error("Something went wrong");
        const meals = await response.json();
        const newArr = [];
        const mealIds = Object.keys(meals);
        mealIds.forEach((id) => {
          newArr.push({ ...meals[id], id });
        });
        setMeals(newArr);
        setIsLoading(false);
        setHttpError(false);
      } catch (error) {
        console.log(error);
        setHttpError(error.message);
        setIsLoading(false);
      }
    }

    getMeals();
  }, []);

  if (isLoading) {
    return (
      <section className={styles.mealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={styles.mealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      name={meal.name}
      description={meal.description}
      price={meal.price}
      key={meal.id}
      id={meal.id}
    />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

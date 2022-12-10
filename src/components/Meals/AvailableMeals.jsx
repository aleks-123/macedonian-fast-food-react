import React from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./stylesMeals/AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Tavche Gravche",
    description:
      "Boiled beans, seasoned with a roux that includes dry red pepper.",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Sarma",
    description: "Stuffed Cabbage Rolls!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Pastrmajlija",
    description: "Macedonian Pizza",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Ajvar",
    description: "Extraordinary taste and creamy texture.",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((item) => {
    return (
      <MealItem
        id={item.id}
        key={item.id}
        name={item.name}
        description={item.description}
        price={item.price}
      />
    );
  });

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;

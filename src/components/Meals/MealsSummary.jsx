import React from "react";

import classes from "./stylesMeals/MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Macedonia, a hidden gem of a country, located in the center of the
        Balkan peninsula, is a small and colorful nation; definitely not your
        typical travel destination. If you visit Macedonia, you’ll be captivated
        by the numerous archaic monastery landmarks, picturesque lakes, and the
        alluring cuisine.
      </p>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
    </section>
  );
};

export default MealsSummary;

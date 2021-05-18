import "./Ready.css";
import React, { useState, useEffect } from "react";
import { Card } from "@material-ui/core";
import MealItem from "./MealItem";
import AddMeal from "./AddMeal";

const Ready = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [addMealShown, setAddMealShown] = useState(false);

  useEffect(() => {
    const getFetch = async () => {
      setIsLoading(true);
      const res = await fetch(
        "https://react-hooks26-default-rtdb.firebaseio.com/addMeal.json"
      );
      if (!res.ok) {
        throw new Error("something went wrong");
      }
      setIsLoading(false);
      const dataJson = await res.json();
      for (const key in dataJson) {
        const mealData = [];
        const getData = {
          id: dataJson[key].id,
          name: dataJson[key].name,
          description: dataJson[key].description,
          price: dataJson[key].price,
        };
        mealData.push(getData);
        setMeals((meal) => [...meal, ...mealData]);
        // setMeals([...mealData]);
      }
      // setIsLoading(false);
    };
    getFetch().catch((error) => setIsError(true));
  }, []);

  if (isLoading) {
    // console.log(isLoading);
    return <div className="loader">Loading...</div>;
  }
  if (isError) {
    return <div className="error">Failed getting data</div>;
  }

  const closeAddMeals = () => {
    setAddMealShown(false);
  };

  const addMealHandler = (meal) => {
    setMeals((preValue) => [...preValue, meal]);
  };
  const mealsList = meals.map((meal) => {
    return <MealItem key={meal.id} meal={meal} />;
  });
  return (
    <section className="meals">
      <Card>
        <ul>{mealsList}</ul>
      </Card>
      {!addMealShown && (
        <div>
          <button
            onClick={() => setAddMealShown(true)}
            className="addMeal__btn"
            type="submit"
          >
            Add More Delicious Meal
          </button>
        </div>
      )}
      {addMealShown && (
        <div className="addMeal__main">
          <Card>
            <AddMeal onAdd={addMealHandler} onClose={closeAddMeals} />
          </Card>
        </div>
      )}
    </section>
  );
};

export default Ready;

import React, { useEffect, useState } from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem';
import './AvailableMeals.module.css'
import classes from './AvailableMeals.module.css';

const AvailableMeals = () => {
  const [meal, setMeal] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError]=useState('')
  
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const res = await fetch('https://react-meals-68482-default-rtdb.firebaseio.com/meal.json');
      if (!res.ok) {
        throw new Error("Something went wrong!!");
      } 
      const data = await res.json();
      const loadData = [];
      for (const key in data) {
        loadData.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price
        })
      }
      setMeal(loadData);
      setIsLoading(false)
    }
    fetchData().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
    
  }, []);
  console.log(meal)
  console.log(httpError)
    const mealLists = meal.map(meal =>
        <li>
            <MealItem
                key={meal.id}
                id={meal.id}
                name={meal.name}
                description={meal.description}
                price={meal.price}
            />
      </li>)
  
  if (isLoading) {
    return (
      <section className={classes.mealsLoading}>
        <p>Loading...</p>
      </section>
    )
  }
  if (httpError) {
    return (
      <section className={classes.mealsHttpError}>
        <p>{httpError}</p>
      </section>
    )
  }
    return (
        <section className={classes.meals}>
           <Card>
            <ul>
                {mealLists}
                </ul>
                </Card>
        </section> 
    )
}
export default AvailableMeals;
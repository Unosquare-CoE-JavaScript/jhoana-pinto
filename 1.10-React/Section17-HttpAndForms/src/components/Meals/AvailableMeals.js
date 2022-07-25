import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useEffect, useState } from 'react';

const AvailableMeals = () => {

  const [meals, setMeals] = useState([]);
  // in this case the state of loading begins with true because at the beginig it should always load info
  const [isLoading, setIsLoading] = useState(true); 
  // state for errors in query
  const [httpError, setHttpError] = useState();

  useEffect(()=>{ // The previous array of meals is now allocated in a db 
    const fetchMeals = async () => {
      const res = await fetch('https://react-http-e180b-default-rtdb.firebaseio.com/meals.json'); // we make a get req to access meals
      
      if(!res.ok){  // if the http response presented any errors...
        throw new Error('Something went wrong');
      }
      
      const resData = await res.json();

      const loadedMeals = []; // meals from db will be allocated here

      for (const key in resData) {  // The empty array is filled with the db meals
        loadedMeals.push({
          id: key,
          name: resData[key].name,
          description: resData[key].description,
          price: resData[key].price
        })
      }

      setMeals(loadedMeals);  // sets the new array of meals
      setIsLoading(false); // when the meals are rendered the state of loading turns to false
    }


    // The fetching of the meals is saved in this function because useEffect doesn't accept async functions and the query is :(
    fetchMeals().catch((error) => { // if fetchMeals wasn't successfull
      setIsLoading(false); // it's no longer loading
      setHttpError(error.message);  // we'll handle the error
    })

  }, []); // there are no dependencies passed because this way the query and changes will only be executed when the page is loaded.

  if(isLoading){  // Message shown when loading
    return <section className={classes.MealsLoading}>
      <p>Loading...</p>
    </section>
  }

  if(httpError){  // Message shown if error ocures
    return <section className={classes.MealsError}>
      <p>{httpError}</p>
    </section>
  }

  const mealsList = meals.map((meal) => ( // renders every meal from the db
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;

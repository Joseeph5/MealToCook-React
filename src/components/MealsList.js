import React from 'react';
import { useGlobalContext } from '../Context';
import Loading from './Loading';
import Meal from './Meal';

export default function MealsList() {
  const { mealsList, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if (!mealsList) {
    return <h2 className='section-title'>No search mutched</h2>;
  }

  return (
    <>
      <h2 className='section-title'>Meals List</h2>
      <div className='meals-center'>
        {mealsList.map((meal) => {
          return (
            <section key={meal.idMeal}>
              <Meal {...meal} />
            </section>
          );
        })}
      </div>
    </>
  );
}

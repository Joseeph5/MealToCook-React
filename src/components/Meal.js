import React from "react";
import { Link, useParams } from "react-router-dom";

export default function Meal({ idMeal, strMeal, strMealThumb, strCategory, strArea }) {
  return (
    <div className='meal'>
      <Link to={`/mealdetails/${idMeal}`}>
        <img src={strMealThumb} alt='' />
      </Link>
      <div className='meal-footer'>
        <h3>{strMeal}</h3>
        <h1>{strArea}</h1>
        <p>{strCategory}</p>
        <Link to={`/mealdetails/${idMeal}`} className='btn btn-primary'>
          Details
        </Link>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "../components/Loading";

const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

export default function MealDetails() {
  const [meal, setMeal] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const fetchMealDetails = async (url, id) => {
    const res = await fetch(url + id);
    const data = await res.json();
    const { meals } = data;
    setMeal(meals[0]);
    setLoading(false);
  };

  useEffect(() => {
    setTimeout(() => {
      fetchMealDetails(url, id);
    }, 500);
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <section className='section meal-section'>
      <Link to='/' className='btn btn-primary'>
        Back To Home
      </Link>
      <h2 className='meal-title'>{meal.strMeal}</h2>
      <div className='underline'></div>

      <div className='meal-details'>
        <img src={meal.strMealThumb} alt={meal.strMeal} className='photo' />
        <div className='meal-details-info'>
          <p>
            <span className='meal-details-data'>name :</span> {meal.strMeal}
          </p>
          <p>
            <span className='meal-details-data'>category :</span> {meal.strCategory}
          </p>
          <p>
            <span className='meal-details-data'>Area :</span> {meal.strArea}
          </p>
          <p>
            <span className='meal-details-data'>tags :</span> {meal.strTags}
          </p>
          <p>
            <span className='meal-details-data'>instructons :</span>{" "}
            {meal.strInstructions}
          </p>

          <a className='btn' href={meal.strYoutube} target='_blank' rel='noreferrer'>
            Watch the video
          </a>
        </div>
      </div>
    </section>
  );
}

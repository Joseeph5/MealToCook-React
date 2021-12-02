import React from "react";
import SearchForm from "../components/SearchForm";
import MealsList from "../components/MealsList";

export default function Home() {
  return (
    <main>
      <section className='section search'>
        <SearchForm />
      </section>
      <section className='section'>
        <div>
          <MealsList />
        </div>
      </section>
    </main>
  );
}

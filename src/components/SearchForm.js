import React, { useEffect } from "react";
import { useGlobalContext } from "../Context";
export default function SearchForm() {
  const { setSearchTerm } = useGlobalContext();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("ssssssss");
  };

  useEffect(() => {
    setSearchTerm("");
  }, []);

  return (
    <form className='search-form' onSubmit={onSubmitHandler}>
      <div className='form-control'>
        <label>Search Meal</label>
        <input
          type='text'
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </div>
    </form>
  );
}

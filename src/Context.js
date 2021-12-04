import React, { useContext, useState, useEffect } from 'react';

const AppContext = React.createContext();
const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

export default function AppProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [mealsList, setMealsList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchData = async (url, search) => {
    setLoading(true);
    const res = await fetch(url + search);
    const data = await res.json();
    const { meals } = data;
    setMealsList(meals);
    setLoading(false);
  };

  useEffect(() => {
    setTimeout(() => {
      fetchData(url, searchTerm);
    }, 500);
  }, [searchTerm]);
  return (
    <AppContext.Provider value={{ loading, mealsList, searchTerm, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
}

// Custom Hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

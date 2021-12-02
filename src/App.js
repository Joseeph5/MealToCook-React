import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import MealDetails from "./pages/MealDetails";
import Error from "./pages/Error";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <Fragment>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/mealdetails/:id' element={<MealDetails />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;

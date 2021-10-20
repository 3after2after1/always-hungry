import "./App.css";
import Axios from "axios";
import Recipe from "./Recipe.jsx";
import MealCard from "./MealCard";
import Categories from "./categories";
import RandomMeal from "./RandomMeal";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import React, { Component, useState } from "react";
import Favourites from "./Favourites.jsx";
import Navbar from "./Navbar";

function App() {
  const [meals, setMeals] = React.useState([]);
  const [mealName, setmealName] = useState("");
  const [recipes, setrecipes] = useState([]);
  const [categoryResult, setCategoryResult] = useState([]);
  const [queryResult, setQueryResult] = useState([]);
  const [favorites, setFavourites] = React.useState([]);

  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;

  // getRecipes function GETS data from provided url and save the data to "recipes" array
  async function getRecipes() {
    const result = await Axios.get(url);
    setrecipes(result.data.meals);
  }

  // Runs getRecipes function whenever user submits a search. PreventDefault to disable website refresh upon submit.
  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };

  const setFavouriteHandler = (e) => {
    console.log(e);
  };

  // obtain data from api
  React.useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((data) => {
        return data.json();
      })
      .then((dataJson) => {
        setMeals(Array.from(dataJson.meals));
      });
  }, []);

  // updates query result section based on result of search on name
  React.useEffect(() => {
    setQueryResult(recipes);
  }, [recipes]);

  // updates query result section based on result of search on category
  React.useEffect(() => {
    setQueryResult(categoryResult);
  }, [categoryResult]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/favorites" component={Favourites} />
        </Switch>
      </BrowserRouter>
      <h1>Home</h1>
      <RandomMeal />
      <Categories passResult={setCategoryResult} />
      <h1>Search for Meal</h1>

      {/* Search Input and passes value of the input to getRecipes function */}
      <form className="searchForm" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Type meal name"
          value={mealName}
          onChange={(e) => setmealName(e.target.value)}
        ></input>
        <input type="submit" value="Search" />
      </form>

      {/* Result section of query */}
      <div>
        <h1>main result section</h1>
        {queryResult &&
          queryResult.length > 0 &&
          queryResult.map((result, index) => {
            return (
              <MealCard
                key={index}
                meal={result}
                passChildData={setFavouriteHandler}
              />
            );
          })}
      </div>
      <Favourites props={favorites} />
    </div>
  );
}

export default App;

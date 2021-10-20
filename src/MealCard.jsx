import "./App.css";
import { Link } from "react-router-dom";
import React from "react";

const MealCard = ({ meal, passChildData }) => {
  // const [favorites, setFavourites] = React.useState([]);
  const [addedToFavorites, setAddedToFavourites] = React.useState(false);
  // console.log(JSON.stringify(meal, null, 2));

  console.log(passChildData);
  console.log("Mount");

  return (
    <div>
      <Link to={{ pathname: "/recipe", state: { meal: { meal } } }}>
        {meal && (
          <div className="full-card">
            <div className="card">
              <img src={meal.strMealThumb} />

              {meal.strMeal}
            </div>
          </div>
        )}
      </Link>

      <button
        value={meal.strMeal}
        data-url={meal.strMealThumb}
        disabled={addedToFavorites}
        className="btn-fav"
        onClick={passChildData}
      >
        Add to Favourites
      </button>
      <div>
        {/* {favorites &&
          favorites.map((item) => <div className="card">{item[0]}</div>)} */}
      </div>
    </div>
  );
};

export default MealCard;

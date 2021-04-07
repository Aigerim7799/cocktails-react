import React from "react";

import "./details.css";

export default function Details(props) {
  const [ingredients, setIngredient] = React.useState();

  React.useEffect(() => {
    let name = props?.match.params.ingredients;
    getIngredients(name);
  }, []);
  const getIngredients = async (id) => {
    const req = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?i=" + id
    );
    const res = await req.json();
    setIngredient(res.ingredients[0]);
  };
  return (
    <div className="details">
      <h1>about ingredient</h1>
      <p>Type: {ingredients?.strType}</p>
      <h1>{ingredients?.strIngredient}</h1>
      <h1>{ingredients?.strABV}</h1>
      <p>{ingredients?.strDescription}</p>
    </div>
  );
}

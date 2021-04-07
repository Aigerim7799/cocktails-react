import React from "react";
import { Link } from "react-router-dom";
import "./output.css";

export default function Output({ cocktails, ingredients }) {
  return (
    <div className="output">
      {cocktails &&
        cocktails.map((el) => {
          return (
            <div className="outputcard">
              <Link to={"/detail/" + el.idDrink} key={el.idDrink}>
                <img
                  className="outputshoot"
                  src={el.strDrinkThumb}
                  alt={el.strDrink}
                />
                <h1>{el.strDrink}</h1>
              </Link>
            </div>
          );
        })}
    </div>
  );
}

import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Recipe from "./Recipe";
import "./Recipes.css";
const Recipes = ({ recipesList }) => {
  return (
    <>
      {recipesList.map((recipe) => {
        return (
          <Col className="recipeCol"  key={recipe.id}>
            <Link to={`recipe/${recipe?.id}`}>
              <Recipe recipe={recipe} />
            </Link>
          </Col>
        );
      })}
    </>
  );
};

export default Recipes;

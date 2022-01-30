import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Recipe from "./Recipe";

const Recipes = ({ recipesList }) => {
  return (
    <>
      {recipesList.map((recipe) => {
        return (
          <Col className="recipeCol" lg={3} md={4} sm={8} key={recipe.id}>
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

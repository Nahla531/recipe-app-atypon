import React from "react";
import { Card } from "react-bootstrap";

const Recipe = ({ recipe }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={recipe?.image} />
      <Card.Body>
        <Card.Title>{recipe?.title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default Recipe;

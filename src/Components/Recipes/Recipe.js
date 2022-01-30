import React from "react";
import { Card } from "react-bootstrap";

const Recipe = ({ recipe }) => {
  function truncate(string, n) {
    return string?.length > n ? string?.substr(0, n - 1) + " ..." : string;
  }

  return (
    <Card className="recipe-card">
      <Card.Img variant="top" src={recipe?.image} />
      <Card.Body>
        <Card.Title>{truncate(recipe?.title, 15)}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default Recipe;

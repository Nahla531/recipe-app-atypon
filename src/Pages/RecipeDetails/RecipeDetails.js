import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { getRecipeById } from "../../Services/services";
const RecipeDetails = () => {
  const { id } = useParams();

  const [recipeDetail, setRecipeDetail] = useState({});
  const [readMore, setReadMore] = useState(true);
  function truncate(string, n) {
    let stringRgx = string?.replace(/(<([^>]+)>)/gi, "");
    return string?.length > n ? stringRgx?.substr(0, n - 1) + "..." : stringRgx;
  }
  const getRecipeDetails = async () => {
    const res = await getRecipeById(id);
    console.log(res);
    setRecipeDetail(res);
  };

  useEffect(() => {
    getRecipeDetails();
  }, []);
  return (
    <main role="main">
      <header className="recipe-header center">
        <h1>{recipeDetail?.title}</h1>
      </header>
      <Container>
        <Row>
          <Col >
            <img
              className="img-recipe"
              fluid
              src={recipeDetail?.image}
              alt=""
            />
          </Col>
          <Col>
            <h4 className="recipe-header_summary center">Recipe Summary</h4>
            <div className="summary-content">
              {readMore
                ? truncate(recipeDetail?.summary, 350)
                : recipeDetail?.summary?.replace(/(<([^>]+)>)/gi, "")}
              <button
                className="btn-detail"
                onClick={() => setReadMore(!readMore)}
              >
                {readMore ? "read more" : " show less"}
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default RecipeDetails;

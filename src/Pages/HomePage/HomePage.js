import React, { useEffect, useState } from "react";
import SearchBtn from "../../Components/SearchBtn/SearchBtn";
import { getRecipesData } from "../../Services/services";
import Recipes from "../../Components/Recipes/Recipes";
import { Spinner, Container, Row } from "react-bootstrap";
const HomePage = () => {
  const [loadingState, setLoadingState] = useState(false);
  const [query, setSearchQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const searchHandler = async () => {
    try {
      setLoadingState(true);
      const recipesList = await getRecipesData(query, 15);
      setRecipes(recipesList);
      if (!recipesList.length) {
        setErrorMsg("No Results Found");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingState(false);
    }
  };

  return (
    <main role="main">
      <div className="main-container__search">
        <h1 className="main-header">Search for your favorite food recipe</h1>
        <div className="search-container">
          <form className="search-form">
            <input
              type="text"
              placeholder="Search Recipe"
              value={query}
              onChange={(e) => setSearchQuery(e.target.value)}
              required
            />
            <SearchBtn onClick={searchHandler} label="Search" />
          </form>
        </div>
      </div>
      <div className="search-results">
        {recipes.length ? (
          <Container>
            <Row>
              <Recipes recipesList={recipes} />
            </Row>
          </Container>
        ) : (
          <></>
        )}
        {!recipes.length && !loadingState && <h4>{errorMsg}</h4>}
        {loadingState && <Spinner animation="border" />}
      </div>
    </main>
  );
};

export default HomePage;

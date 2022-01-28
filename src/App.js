import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HomePage, RecipeDetails } from "./Pages/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact component={HomePage} />
          <Route path="/recipe/:id" component={RecipeDetails} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

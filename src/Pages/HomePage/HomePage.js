import React, { useState } from 'react';

const HomePage = () => {
   const [loadingState, setLoadingState] = useState(false);
  const [query, setSearchQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [errorMsg, setErrorMsg] = useState("");
  return <div></div>;
};

export default HomePage;

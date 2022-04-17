import React from "react";
import "./App.css";
import AuthorImage from "./images/author.jpg";

function App() {
  return (
    <div className="App">
      <h1>Welcome to my React Application</h1>
      <img src={AuthorImage} height="300" alt="" />
      <h2>Author: Brajalal Pal</h2>
    </div>
  );
}

export default App;

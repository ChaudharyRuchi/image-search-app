import React from "react";
import SearchPhotos from "./searchPhotos";
import "./App.css";

function App() {
  return (
    <>
      <div className="app">
        <div className="container">
          <h1 className="title">React Photo Search</h1>
          <SearchPhotos />
        </div>
      </div>
    </>
  );
}

export default App;

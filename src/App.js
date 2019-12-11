import React from "react";
import ApodList from "./components/ApodList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="logo_container">
        <h1>NASA's Atronomy Picture of the Day!</h1>
        <ApodList />
      </div>
    </div>
  );
}

export default App;

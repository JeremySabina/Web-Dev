import React, { useState } from "react";
import "./App.css";
import { data } from "./data.js";
import ReturnImage from "./utils.js";
import Dropdown from "./Dropdown.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  const [filteredAnimals, setFilteredAnimals] = useState(data);

  const filterByAnimal = (type) => {
    if (type === "all") {
      setFilteredAnimals(data);
    } else {
      setFilteredAnimals(data.filter((animal) => animal.type === type));
    }
  };

  return (
    <div className="container mt-4">
      <Dropdown filterByAnimal={filterByAnimal} />
      <div className="row mt-4">
        {filteredAnimals.map((cartoonAnimal) => (
          <div key={cartoonAnimal.id} className="col-md-4 mb-3">
            <ReturnImage cartoonAnimal={cartoonAnimal} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

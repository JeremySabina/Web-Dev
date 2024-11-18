import React from "react";

export default function Dropdown({ filterByAnimal }) {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Filter by Animal
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li>
          <button className="dropdown-item" onClick={() => filterByAnimal("all")}>
            All
          </button>
        </li>
        <li>
          <button className="dropdown-item" onClick={() => filterByAnimal("Cat")}>
            Cats
          </button>
        </li>
        <li>
          <button className="dropdown-item" onClick={() => filterByAnimal("Dog")}>
            Dogs
          </button>
        </li>
        <li>
          <button className="dropdown-item" onClick={() => filterByAnimal("Rabbit")}>
            Rabbits
          </button>
        </li>
        <li>
          <button className="dropdown-item" onClick={() => filterByAnimal("Bear")}>
            Bears
          </button>
        </li>
      </ul>
    </div>
  );
}

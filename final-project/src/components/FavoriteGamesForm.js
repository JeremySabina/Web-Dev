import React, { useState } from 'react';

const FavoriteGamesForm = ({ onSubmit }) => {
  const [game, setGame] = useState(''); // Single game input
  const [gamesList, setGamesList] = useState([]); // List of games

  const handleAddGame = (e) => {
    e.preventDefault();
    if (game.trim() === '') return;

    setGamesList([...gamesList, game]); // Add the new game to the list
    setGame(''); // Clear the input field
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(gamesList); // Pass the list to the parent component
    setGamesList([]); // Clear the list after submission
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Add a Game</label>
          <input
            type="text"
            className="form-control"
            value={game}
            onChange={(e) => setGame(e.target.value)}
            placeholder="Enter game name"
          />
        </div>
        <button className="btn btn-primary mb-3" onClick={handleAddGame}>
          Add Game to List
        </button>

        <h5>Your Favorite Games List:</h5>
        <ul className="list-group mb-3">
          {gamesList.map((g, idx) => (
            <li key={idx} className="list-group-item">{g}</li>
          ))}
        </ul>

        <button type="submit" className="btn btn-success">
          Submit Favorite Games
        </button>
      </form>
    </div>
  );
};

export default FavoriteGamesForm;

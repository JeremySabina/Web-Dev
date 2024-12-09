import React, { useState } from 'react';
import FavoriteGamesForm from '../components/FavoriteGamesForm';
import { topGamesData } from '../data';

const TopGamesPage = () => {
  const [submittedGames, setSubmittedGames] = useState([]);

  const handleFormSubmit = (favoriteGames) => {
    console.log('Favorite Games Submitted:', favoriteGames);
    setSubmittedGames(favoriteGames);
    alert('Thank you for submitting your favorite games!');
  };

  return (
    <div className="my-4">
      <h1 className="mb-3">Top Games</h1>
      <p className="lead">List your Top Games, Compare to Others</p>

      <h5>Popular Top Games:</h5>
      <ul className="list-group my-3">
        {topGamesData.map((game, idx) => (
          <li key={idx} className="list-group-item">{game}</li>
        ))}
      </ul>

      <FavoriteGamesForm onSubmit={handleFormSubmit} />

      {submittedGames.length > 0 && (
        <>
          <h5 className='my-3'>Your Submitted Favorite Games:</h5>
          <ul className="list-group my-3">
            {submittedGames.map((game, idx) => (
              <li key={idx} className="list-group-item">{game}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default TopGamesPage;

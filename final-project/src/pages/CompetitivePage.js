import React from 'react';
import Image from '../components/Image';
import { topEsportsGames, interestingFacts } from '../data';

const CompetitivePage = () => {
  return (
    <div className="my-4">
      <h1 className="mb-3">Competitive Gaming</h1>
      <p>"There's always a bigger fish" - Qui-Gon Jinn</p>
      
      {/* Main Competitive Gaming Image */}
      <Image src="https://hir.harvard.edu/content/images/2020/04/-.jpg" alt="Competitive Gaming" />
      <p className="my-3">
        When it comes to games, there is one thing that always brings people back to playing again and again, and that is the competition.
        Competitive games are fast paced, high skill, and have become a lucrative endeavor.
      </p>

      {/* My Top Game */}
      <h2 className="my-2">My Top Game</h2>
      <Image src="https://i.redd.it/s6pti85u9cy41.jpg" alt="Apex Legends" />
      <p className="my-3">
        Apex Legends is a 3-person FPS Battle Royale. It has high levels of mobility, great gun mechanics, and high team coordination to create a success.
      </p>

      {/* Top Esports Games */}
      <h2 className="my-2">Top Esports Games</h2>
      <ul className="list-group my-3">
        {topEsportsGames.map((game, idx) => (
          <li key={idx} className="list-group-item">
            <strong>{game.name}</strong> ({game.releaseYear}) by {game.publisher}
            <p>{game.description}</p>
            <p>
              <strong>Popular Tournaments:</strong> {game.popularTournaments.join(', ')}
            </p>
          </li>
        ))}
      </ul>

      {/* Interesting Facts */}
      <h2 className="my-2">Interesting Facts</h2>
      <ul className="list-group my-3">
        {interestingFacts.map((fact, idx) => (
          <li key={idx} className="list-group-item">{fact.fact}</li>
        ))}
      </ul>
    </div>
  );
};

export default CompetitivePage;

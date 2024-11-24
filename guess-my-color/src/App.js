import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

function App() {
  const [color, setColor] = useState(null);
  const [result, setResult] = useState("");
  const [gameStarted, setGameStarted] = useState(false);
  const [level, setLevel] = useState(1);

  function randomColor(level) {
    const levelColors = [
      ["red", "yellow", "blue"],
      ["red", "yellow", "blue", "green", "purple"],
      ["red", "yellow", "blue", "green", "purple", "orange", "pink"],
    ];
    const colors = levelColors[level - 1];
    const chosenColor = colors[Math.floor(Math.random() * colors.length)];
    return chosenColor;
  }

  function startGame() {
    const randColor = randomColor(level);
    setColor(randColor);
    setResult("");
    setGameStarted(true);
  }

  function guessColor(guess) {
    if (guess === color) {
      setResult("That's Right!");
    } else {
      setResult(`Wrong! The correct color was ${color}`);
    }
    setGameStarted(false);
  }

  function playAgain() {
    setGameStarted(true);
    startGame();
  }

  function nextLevel() {
    if (level < 3) {
      setLevel(level + 1);
      setGameStarted(true);
      startGame();
    }
  }

  function restartGame() {
    setLevel(1);
    setGameStarted(false);
    setResult("");
    setColor(null);
  }

  const levelColors = [
    ["red", "yellow", "blue"],
    ["red", "yellow", "blue", "green", "purple"],
    ["red", "yellow", "blue", "green", "purple", "orange", "pink"],
  ];
  const colors = levelColors[level - 1];

  return (
    <div className="d-flex flex-column align-items-center vh-100 justify-content-center bg-dark text-white">
      <h1 className="text-center" style={{ color: color || "white" }}>
        Can you guess my color?
      </h1>
      {!gameStarted && result && (
        <div className="text-center">
          <h2>{result}</h2>
          <p>What would you like to do next?</p>
          <button onClick={playAgain} className="btn btn-primary mx-2">
            Play Again
          </button>
          {level < 3 && (
            <button onClick={nextLevel} className="btn btn-success mx-2">
              Next Level
            </button>
          )}
          <button onClick={restartGame} className="btn btn-danger mx-2">
            Restart
          </button>
        </div>
      )}
      {gameStarted && (
        <div>
          {colors.map((colorOption) => (
            <button
              key={colorOption}
              onClick={() => guessColor(colorOption)}
              className={`btn btn-${colorOption} m-2`}
              style={{
                backgroundColor: colorOption,
                color: "white",
                border: "1px solid black",
              }}
            >
              {colorOption.charAt(0).toUpperCase() + colorOption.slice(1)}
            </button>
          ))}
        </div>
      )}
      {!gameStarted && !result && (
        <button onClick={startGame} className="btn btn-primary mt-4">
          Start Game
        </button>
      )}
    </div>
  );
}

export default App;

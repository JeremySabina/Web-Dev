import { useState } from 'react';
import './App.css';

function App() {
  
  const [color, setColor] = useState()

  function randomColor() {
    let colors = ["Red", "Yellow", "Blue"]
    
    let chosenColor = Math.floor(Math.random() * 3)

    setColor(colors[chosenColor])
  }

  function guessColor() {
    let color = randomColor()
    if(color === "Red") {
      return <h1>That's Right!</h1>
    } else {
      <h1>Wrong!</h1>
    }
  }



  return (
    
    <>
    <h1 style={{color:"red"}} >Can you guess my color??</h1>
    <div>
    <button onClick={guessColor({})}>Red</button>
    <button onClick={guessColor({})}>Blue</button>
    <button onClick={guessColor({})}>Yellow</button>
    </div>
    </>
      );
}

export default App;

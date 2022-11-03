import "./App.css";
import GameBoard from "./components/GameBoard";

/*
Todos:
- Reset game board 
- Do not show the next active player after a win
- Move calculateWinner to a helper.js file
- Improve UI
- Dyanmically create squares instead of having them hardcoded
- Add timer for each move. User should have 10 seconds. 
- Look at the other examples of the game online to see how to accomplish the same ends with less variables and logic.  

*/

function App() {
  return (<div id="app">
    <GameBoard/>
  </div>)
}

export default App;


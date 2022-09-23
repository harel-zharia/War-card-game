import { useState } from "react";
import HomePage from './Component/HomePage';
import GamePage from "./Component/GamePage";
import ScorePage from './Component/ScorePage';
import './Component/Card.css'

let player, computer;
let playerList = [];

function App() {


  const [component, setComponent] = useState(0);

  const showComponent = () => {
    if (component == 0) {
      return <HomePage next={startGame} playerList={playerList} computer={computer} playerOne={player}></HomePage>
    }
    else if (component == 1) {
      return <GamePage player={player} computer={computer} nextPage={setComponent} playerList={playerList} wins={player.wins}></GamePage>
    }
    return <ScorePage player={player} computer={computer} pageReset={setComponent} shuffle={shuffle}></ScorePage>
  }

  const startGame = (name) => {
    let fullDeck = new Deck();
    let playerDeck = [], ComputerDeck = [];
    for (let i = 0; i < 26; i++) {
      playerDeck.push(fullDeck.dealCards());
      ComputerDeck.push(fullDeck.dealCards());
    }
    let isPlayerAlreadyPlayed = false;
    for (let i = 0; i < playerList.length; i++) {
      let currentPlayer = playerList[i];
      if (currentPlayer.name == name) {
        isPlayerAlreadyPlayed = true;
        player = currentPlayer;
        break;
      }
    }
    if (!isPlayerAlreadyPlayed) {
      player = new Player(name, playerDeck);
      playerList.push(player);
    }
    computer = new Player('computer', ComputerDeck);
    setComponent(1)
  }

  const shuffle = (player, computer) => {
    let fullDeck = new Deck();
    let playerDeck = [], ComputerDeck = [];
    for (let i = 0; i < 26; i++) {
      playerDeck.push(fullDeck.dealCards());
      ComputerDeck.push(fullDeck.dealCards());
    }
    player.cards = playerDeck;
    computer.cards = ComputerDeck;
  }

  const firstPlace = () => {
    playerList.wins.sort();
  }

  return (
    <div className="App">
      {showComponent()}
    </div>
  );
}

export default App;


class Player {
  name = '';
  wins = 0;
  loses = 0;
  games = 0;
  tie = 0;
  lastGame = false;
  cards = [];

  constructor(name, cards) {
    this.name = name;
    this.cards = cards;
  }
}

class Deck {
  cards = [];

  constructor() {
    this.startCards();
  }
  startCards() {
    for (let i = 1; i < 14; i++) {
      for (let j = 0; j < 4; j++) {
        this.cards.push(i);
      }
    }

  }
  dealCards() {
    let random = Math.floor(Math.random() * this.cards.length);
    let card = this.cards.splice(random, 1);
    return card[0];
  }
}
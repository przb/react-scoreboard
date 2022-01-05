import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// TODO Make these variables that can be set
const PLAYERS = 4;
const ROUNDS = 10;
const CURRENT_ROUND = 0;

class Player {
    constructor() {
        this.status = {
            totalScore: 0,
            pastScores: Array(ROUNDS).fill(0),
        }
    }

    handleRound() {
        const score = handleScore(); // TODO Make the score equal a text box
        this.status.pastScores[CURRENT_ROUND] = score;
    }

    handleScore() { }
}

class Game{
    constructor(numPlayers, numRounds){
        this.status = {
            players: numPlayers,
            rounds: numRounds,
        }
    }
    nextRound(){
        for (let i = 0; i < this.status.players.length; i++){
            this.status.players[i].handleRound(); 
        }
    }
}

class Board extends React.Component {

    render() { };
}

class Game extends React.Component {
    render() { }
}

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
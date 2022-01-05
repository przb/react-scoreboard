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
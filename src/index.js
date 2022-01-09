import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// TODO Make these variables that can be set
const PLAYERS = 4;
const ROUNDS = 10;
const CURRENT_ROUND = 0;

class Scorer extends React.Component {
    render() {
        return (
            <div>
                <input type="text" placeholder="Test" />
            </div>
        );
    }
}

class PastScores extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scores: [2, 3, 4, 5, 16, 0, 12, 66, 3],
        }
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}

class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerName: "Test",
            totalScore: 0,

        }
    }

    handleRound() {
        // const score = handleScore(); // TODO Make the score equal a text box
        // this.state.pastScores[CURRENT_ROUND] = score;
    }

    handleScore() { }

    render() {
        return (
            <div>
                <h1>{this.state.playerName}</h1>
                <h2>{this.state.totalScore}</h2>
            </div>
        );
    }
}

class Board extends React.Component {
    constructor(props, numPlayers, numRounds) {
        super(props);
        this.status = {
            players: Array(numPlayers).fill(null),
            scorers: Array(numPlayers).fill(null),
            rounds: numRounds,
        };
    }

    nextRound() {
        for (let i = 0; i < this.status.players.length; i++) {
            this.status.players[i].handleRound();
        }
    }

    renderScorers() { }
    renderPlayers() { }

    render() {
        return (
            < div >
                <Player />
                <Scorer />
            </div >
        );
    }
}

class GameUtils extends React.Component {
    render() {
        return (
            <div>
                <input type="text" placeholder="Test" />
                <button className="" onclick="">button</button>
            </div>
        );
    }
}

class Game extends React.Component {

    render() {
        return (
            <div>
                <Board />
                <GameUtils />
            </div>
        );
    }
}

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
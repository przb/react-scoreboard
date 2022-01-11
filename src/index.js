import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// TODO Make these variables that can be set
const PLAYERS = 4;
const ROUNDS = 10;
const CURRENT_ROUND = 0;

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
                <input type="text" placeholder="Test" />
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
            <div class="Board">
                <Player />
            </div>
        );
    }
}

class GameUtils extends React.Component {
    render() {
        return (
            <div class="GameUtils">
                <h1>Name</h1>
                <input type="text" placeholder="Test" />
                <button className="" onclick="">Add Player</button>
            </div>
        );
    }
}

class Game extends React.Component {

    render() {
        return (
            <center>
                <div class="Game">
                    <Board />
                    <GameUtils />
                </div>
            </center>
        );
    }
}

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
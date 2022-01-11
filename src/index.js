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
            totalScore: 0,

        }
    }

    setPlayerName(givenName) {
        this.state.playerName = givenName;

    }

    handleChange = event => {
        this.setState({totalScore:event.target.value});
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
                <input type="text" placeholder="Test" onChange={this.handleChange}/>
            </div>
        );
    }
}

class Board extends React.Component {
    constructor(props, numPlayers, numRounds) {
        super(props); //TODO figure out how to use multiple props from constructor
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

    renderPlayer(i) {
        return (
            <Player value={this.status.players[i]} />
        );
    }

    renderPlayers() {
        let playerHtml = this.renderPlayer(0);
        for (let i = 1; i < this.status.players.length; i++) {
            playerHtml += this.renderPlayer(i);
        }
        return playerHtml;
    }

    render() {
        return (
            <div class="Board">
                {this.renderPlayers()}
            </div>
        );
    }
}

class GameUtils extends React.Component {
    render() {
        return (
            <div className="GameUtils">
                <h1>Name</h1>
                <input type="text" placeholder="Test" />
                <button className="" onClick="">Add Player</button>
            </div>
        );
    }
}

class Game extends React.Component {

    render() {
        return (
            <center>
                <div className="Game">
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
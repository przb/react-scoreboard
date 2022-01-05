import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const PLAYERS = 4;
const ROUNDS = 10;

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cells: Array(ROUNDS * PLAYERS).fill(null),
        }
    }

    renderRow(i) {
        return <Row />;
    }

    renderCell(i) {
        return (
            <Cell value={this.state.cells[i]} />
        );
    }

    render() {
        return (
           this.state.cells[1]; 
        );
    }
}

function Row(props) {
    return (
        <div>
            {props.state.cells}
        </div>
    );
}

function Cell(props) {
    return (
        <div>
            <input type="text" className="cell" onClick={props.onClick} placeholder='Test' />
        </div>
    );
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const PLAYERS = 4;
const ROUNDS = 10;

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: Array(ROUNDS).fill(null),
        }
    }

    onScore(){

    }

    renderRow(i) {
        return (
            <div>
                <Row value={this.state.cells[i]}/>

            </div>
        );
    }

    renderCell(i) {
        return (
            <Cell value={this.state.cells[i]} />
        );
    }

    render() {
        return (
            <div>
                {this.renderRow(0)} 
                {this.renderRow(1)} 
                {this.renderRow(2)} 
                {this.renderRow(3)} 
                {this.renderRow(4)} 
                {this.renderRow(5)} 
                {this.renderRow(6)} 
                {this.renderRow(7)} 
                {this.renderRow(8)} 
                {this.renderRow(9)} 
            </div>
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
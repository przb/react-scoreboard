import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Board extends React.Component {
    constructor(props){
        super(props);
        this.state={
            cells: Array(10).fill(Array(3).fill(4)),
        }
        for (let i = 0; i < this.state.cells.length; i++){
            this.state.cells[i] = <Cell id={i}/>;
        }
    }

    renderRow(props){
        return ;
    }

    render() {
        return this.state.cells;
    }
}

function Row(props){
    return (
        <div>
            {props.state.cell}
        </div>
    );
}

function Cell(props) {
    return (
        <div>
            <input type="text" className="cell" onClick={props.onClick} placeholder='Test'>
                
            </input>
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
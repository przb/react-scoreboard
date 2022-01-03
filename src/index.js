import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Board extends React.component{

    renter(){

    }
}

function Cell(props){
    return <input type="text" className="cell" onClick={props.onClick}>
        {props.value}
    </input>
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
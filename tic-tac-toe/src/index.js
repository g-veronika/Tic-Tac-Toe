import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Square = (props) => {
  return (
    <div className="square">
     {props.value}
    </div>
  );
};


const Board = () => {

  const renderSquare = (i) => {
    return (
      <Square value={i}/>
    );
  };

  return (
    <div style={{
      backgroundColor: 'skyblue',
      margin: 10,
      padding: 20
    }}>
      Board
      <div className="board-row">
       {renderSquare(0)}{renderSquare(1)}{renderSquare(2)}
      </div>
      <div className="board-row">
      {renderSquare(3)}{renderSquare(4)}{renderSquare(5)}
      </div>
      <div className="board-row">
      {renderSquare(6)}{renderSquare(7)}{renderSquare(8)}

      </div>
    </div>
  );
};


const Game = () => {
  return (
    <div className="game">
      Game
      <Board />
    </div>
  ); 
};

ReactDOM.render(
  <Game />,
  document.getElementById('root')
)
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Square = (props) => {
  return (
    <button 
      className="square"
      onClick={props.onClickEvent}
    >
     {props.value}
    </button>
  );
};


const Board = () => {

  const initialSquares = Array(9).fill(null);
  const [squares, setSquares] = useState(initialSquares);
  const [xIsNext, setXIsNext] = useState(true);


  const handleClickEvent = (i) => {

    const newSquares = [...squares];
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };


  const renderSquare = (i) => {
    return (
      <Square 
        value={squares[i]} 
        onClickEvent = {() => handleClickEvent(i)}
      />
    );
  };

  const status = `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div>
      <div className="status">{status}</div>
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
      Tic-Tac-Toe
      <Board />
    </div>
  ); 
};

ReactDOM.render(
  <Game />,
  document.getElementById('root')
)
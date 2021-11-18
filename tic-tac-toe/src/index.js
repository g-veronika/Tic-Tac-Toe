import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Square = () => {
  return (
    <div style={{
      backgroundColor: 'gold',
      margin: 10,
      padding: 20
    }}>
      Square
    </div>
  );
};


const Board = () => {
  return (
    <div style={{
      backgroundColor: 'skyblue',
      margin: 10,
      padding: 20
    }}>
      Board
      <Square />
    </div>
  );
};


const Game = () => {
  return (
    <div style={{
      backgroundColor: 'salmon',
      margin: 10,
      padding: 20 
    }}>
      Game
      <Board />
    </div>
  ); 
};

ReactDOM.render(
  <Game />,
  document.getElementById('root')
)
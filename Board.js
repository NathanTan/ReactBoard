import React from 'react';
import Rook from './Rook';
import Row from './Row';

const style = {
    boarder: "2px solid #404040",
  }


class Board extends React.Component {
  

  render() {
    return (
      <div style={style}>
        <Row startSquare="white"/>
        <Row startSquare="black"/>
        <Row startSquare="white"/>
        <Row startSquare="black"/>
        <Row startSquare="white"/>
        <Row startSquare="black"/>
        <Row startSquare="white"/>
        <Row startSquare="black"/>       
      </div>
    );
  }
}

export default Board;

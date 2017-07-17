import React from 'react';
import Rook from './Rook';
import Piece from './Piece';

//@ts-check

let Square = props => {
  let style = {
    display: "inline-block",
    backgroundColor: props.squareColors,
    "z-indx": -5
  }
  let onPieceClick = () => {
    console.log("CLICKED");
  }

  return (
  <div style={style} draggable="true">
    <Piece /> 
  </div>
  )

}

export default Square
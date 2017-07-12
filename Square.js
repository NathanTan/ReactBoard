import React from 'react';
import Rook from './Rook';

let Square = props => {
  let style = {
    display: "inline-block",
    backgroundColor: props.squareColors
  }
  return <div style={style}><Rook/> </div>
}

export default Square

import React from 'react';
import Square from './Square';

let Row = props => {
  let squareColors = {
    black: 'black',
    white: '#00e600',
  };

  return (
    <div>
      {props.startSquare === 'white'
        ? <Square squareColors={squareColors.white} />
        : <Square squareColors={squareColors.black} />}
       {props.startSquare === 'black'
        ? <Square squareColors={squareColors.white} />
        : <Square squareColors={squareColors.black} />}
       {props.startSquare === 'white'
        ? <Square squareColors={squareColors.white} />
        : <Square squareColors={squareColors.black} />}
       {props.startSquare === 'black'
        ? <Square squareColors={squareColors.white} />
        : <Square squareColors={squareColors.black} />}
       {props.startSquare === 'white'
        ? <Square squareColors={squareColors.white} />
        : <Square squareColors={squareColors.black} />}
       {props.startSquare === 'black'
        ? <Square squareColors={squareColors.white} />
        : <Square squareColors={squareColors.black} />}
       {props.startSquare === 'white'
        ? <Square squareColors={squareColors.white} />
        : <Square squareColors={squareColors.black} />}
       {props.startSquare === 'black'
        ? <Square squareColors={squareColors.white} />
        : <Square squareColors={squareColors.black} />}
    </div>
  );
};

export default Row;

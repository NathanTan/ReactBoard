import React from 'react';

//No State, no class
let Piece = () => {
  const style = {
    witdh: 50,
    height: 50,
    display: 'inline-block',
    'z-index': 5
  };

  return (
    <div style={style} draggable='true'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg" alt="Rook" draggable="true"/>
    </div>
  );
};

export default Piece;

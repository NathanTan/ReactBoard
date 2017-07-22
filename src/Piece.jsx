import React from 'react';

//No State, no class
let Piece = (props) => {
  const style = {
    witdh: 50,
    height: 50,
    display: 'inline-block',
    'zIndex': 5
  };

  console.log("PIECE Props: " + JSON.stringify(props))

  return (
    <div style={style} draggable='true'>
      { props.pieceType === "Rook" ? <img src="https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg" alt="Rook" draggable="true"/>
                              : <img alt="Piece" draggable="true"/>    
     }
      
      </div>
  );
};

export default Piece;

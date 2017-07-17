import React from 'react';

//No State, no class
let Rook = () => {
  const style = {
    witdh: 50,
    height: 50,
    display: 'inline-block',
  };

  return (
    <div style={style}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg" alt="Rook"/>
    </div>
  );
};

export default Rook;

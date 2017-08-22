let chess = require('chess');

const Position = (state = {}, action) => {
  const startPosition = {
    gameState: new chess.create(),
    fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR',
  };

  switch (action.type) {
    case 'CREATE_BOARD':
       return state  

    case 'MOVE':
       console.log("MOVE THAT PIECE");
      //  console.log(JSON
      //  .stringify(action))

    default: {
    console.log("Returning default state")
      return startPosition
    }
  }
};

export default Position;

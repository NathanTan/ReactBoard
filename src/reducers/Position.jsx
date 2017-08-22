let chess = require('chess');

const Position = (state = {}, action) => {
  let startPosition = {
    gameState: new chess.create(),
    fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR'
  };
  startPosition["posObj"] = createPositionObject(startPosition.gameState.game.board.squares)

  switch (action.type) {
    case 'CREATE_BOARD':
       return state;

    case 'MOVE':
       console.log("MOVE THAT PIECE");
       console.log(action.event.target);
      //  console.log(JSON
      //  .stringify(action))
      return state;

    default: {
    console.log("Returning default state")
      return startPosition
    }
  }
};

//Creates the position object that is used to build the board
const createPositionObject = (boardPosition) => {
    let posObj = {}
    for (let i = 0; i < 64; i++){
        if (boardPosition[i].piece !== null){
            //Create the piece type
            let pieceType = (boardPosition[i].piece.side["name"] === "white") ? "w" : "b"
            pieceType += boardPosition[i].piece.notation

            //Get the square the piece in on
            let square = boardPosition[i].file + boardPosition[i].rank            
            
            posObj[square] = pieceType
        }
    }
    return posObj
}

export default Position;

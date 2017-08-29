let chess = require('chess');

const Position = (state = {}, action) => {
   let startPosition = {
      gameState: new chess.create({ PGN : true }),
      fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR',
      move: {
        capture: false,
        castle: null,
        pieceType: null,
        pieceColor: null,
        moveDestination: null,
        moveSource: null
      }
   };
   startPosition["posObj"] = createPositionObject(startPosition.gameState.game.board.squares)

      switch (action.type) {
	 case 'CREATE_BOARD':
	    return state;

	 case 'DRAG_START': {
	    console.log('Drag start')
         return {...state, move: 
            {
		          moveSource: action.moveSource,
		          pieceType: action.pieceType,
		          pieceColor: action.pieceColor
	          }
	       };
	 }

	 case 'DRAG_END':
			    console.log("Drag end");  

			    let source = null;
			    if(state.move.moveSource !== null || state.move.moveSource !== "")
			    {
			       source = state.move.moveSource
			    }
			    let pieceType = null;
			    pieceType = state.move.pieceType
			       let newState = {
				  ...state, 
				  move: 
				  {
				     moveDestination: action.dropSquare,
				     moveSource: source 
				  } 
			       };


			    let move = createMove(pieceType, newState.move.moveDestination)
			       console.log("Move: " + move)
			       newState.gameState.move(move)
			       newState.posObj = createPositionObject(newState.gameState.game.board.squares)


			       return newState ;

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

const createMove= (pieceType, moveDest) => {
   if(pieceType === "P"){
      return moveDest
   }

   else{
      return pieceType + moveDest
   }
}

export default Position;

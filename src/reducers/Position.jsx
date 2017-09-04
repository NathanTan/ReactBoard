let chess = require('chess');


//TODO: Fix to allow for en passant

const Position = (state = {}, action) => {
	let startPosition = {
		gameState: new chess.create({ PGN: true }),
		fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR',
		move: {
			capture: false,
			castle: null,
			pieceType: null,
			pieceColor: null,
			promotion: false,
			destination: null,
			source: null
		},
		WhiteToMove: true

	};
	startPosition["posObj"] = createPositionObject(startPosition.gameState.game.board.squares)

	console.log(startPosition.gameState.game)
	switch (action.type) {
		case 'CREATE_BOARD':
			return state;

		case 'DRAG_START':
			console.log('Drag start')
			return {
				...state, move:
				{
					source: action.moveSource,
					pieceType: action.pieceType,
					pieceColor: action.pieceColor
				}
			};

		case 'DRAG_END':
			console.log("Drag end");

			let executeMove = true;
			let source = null;
			let pieceType = null;
			pieceType = state.move.pieceType

			if (state.move.source !== null || state.move.source !== "") {
				source = state.move.source
			}
			let newState = {
				...state,
				move:
				{
					destination: action.dropSquare,
					source: source,
					capture: action.capture,
				}
			};

			if (pieceType === "P") {
				//Check to make sure a non-capturing pawn is moving in its own column.
				if (action.capture === false && source.charAt(0) !== action.dropSquare.charAt(0))
					executeMove = false

				if (action.dropSquare.charAt(1) === "1" || action.dropSquare.charAt(1) === "8") {
					//Show modal for promotion
				}
			}

			if (executeMove) {
				let move = createMove(pieceType, newState.move.destination, newState.move.capture, source)
				console.log("Move: " + move)
				newState.gameState.move(move)
				newState.posObj = createPositionObject(newState.gameState.game.board.squares)
				newState.WhiteToMove = !newState.WhiteToMove
			}

			else {
				console.log("No move executed")
			}


			return newState;

		default: {
			console.log("Returning default state")
			return startPosition
		}
	}
};

//Creates the position object that is used to build the board
const createPositionObject = (boardPosition) => {
	let posObj = {}
	for (let i = 0; i < 64; i++) {
		if (boardPosition[i].piece !== null) {
			//Create the piece type
			let pieceType = (boardPosition[i].piece.side["name"] === "white") ? "w" : "b"
			pieceType += boardPosition[i].piece.notation

			//Get the square the piece in on
			let square = boardPosition[i].file + boardPosition[i].rank

			posObj[square] = pieceType
		}
	}

	posObj["PromotionPieces"] = {
		"white": {
			"Queen": "wQ",
			"Bishop": "wB",
			"Knight": "wN",
			"Rook": "wR"
		},
		"black": {
			"Queen": "bQ",
			"Bishop": "bB",
			"Knight": "bN",
			"Rook": "bR"
		}
	}
	
	return posObj
}

const createMove = (pieceType, moveDest, capture, source) => {
	if (pieceType === "P") {
		console.log("Piece Type: " + pieceType)

		if (capture === false) {
			console.log("Move Dest: " + moveDest)
			return moveDest
		}

		else
			//            File     capture  location
			return source.charAt(0) + "x" + moveDest
	}

	else {
		console.log("capture: " + capture)
		if (capture === false)
			return pieceType + moveDest
		else
			return pieceType + "x" + moveDest
	}
}

export default Position;

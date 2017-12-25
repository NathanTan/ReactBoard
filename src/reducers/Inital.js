let chess = require('chess');

const Inital = (state = {}, action) => {
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
    
    return startPosition
};

export default Inital;
const Position = (state = {}, action) => {
  const startPosition = {
    fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR',
    objPos: {
      wP1: 'a2',
      wP2: 'b2',
      wP3: 'c2',
      wP4: 'd2',
      wP5: 'e2',
      wP6: 'f2',
      wP7: 'g2',
      wP8: 'h2',

      wR1: 'a1',
      wN1: 'b1',
      wB1: 'c1',
      wQ: 'd1',
      wK: 'e1',
      wB2: 'f1',
      wN2: 'g1',
      wR2: 'h1',

      bP1: 'a8',
      bP2: 'b8',
      bP3: 'c8',
      bP4: 'd8',
      bP5: 'e8',
      bP6: 'f8',
      bP7: 'g8',
      bP8: 'h8',

      bR1: 'a8',
      bN1: 'b8',
      bB1: 'c8',
      bQ: 'd8',
      bK: 'e8',
      bB2: 'f8',
      bN2: 'g8',
      bR2: 'h8',
    },
  };

  switch (action.type) {
    case 'START':
      startPosition;
    default: {
    }
  }
};

export default Position;

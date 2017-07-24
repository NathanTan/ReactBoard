const Position = (state = {}, action) => {
  const startPosition = {
    fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR',
    objPos: {
      a1: 'wR',
      a2: 'wP',
      b2: 'wP',      
      c2: 'wP',
      d2: 'wP',
      e2: 'wP',
      f2: 'wP',
      g2: 'wP',
      h2: 'wP',
      a1: 'wR',
      b1: 'wN',
      c1: 'wB',
      d1: 'wQ',
      e1: 'wK',
      f1: 'wB',
      g1: 'wN',
      h1: 'wR',

      a7: 'bP',
      b7: 'bP',
      c7: 'bP',
      d7: 'bP',
      e7: 'bP',
      f7: 'bP',
      g7: 'bP',
      h7: 'bP',
      a8: 'bR',
      b8: 'bN',
      c8: 'bB',
      d8: 'bQ',
      e8: 'bK',
      f8: 'bB',
      g8: 'bN',
      h8: 'bR'
    },
  };

  switch (action.type) {
    case 'START':
    console.log("MAPPING STATE")
    console.log(state.position)
    return state.map(Position => {
      return {
        ...state,
        position:
        {
          fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR",
          objPos:  {
      a1: 'wR',
      a2: 'wP',
      b2: 'wP',      
      c2: 'wP',
      d2: 'wP',
      e2: 'wP',
      f2: 'wP',
      g2: 'wP',
      h2: 'wP',
      a1: 'wR',
      b1: 'wN',
      c1: 'wB1',
      d1: 'wQ',
      e1: 'wK',
      f1: 'wB',
      g1: 'wN',
      h1: 'wR',

      a8: 'bP',
      b8: 'bP',
      c8: 'bP',
      d8: 'bP',
      e8: 'bP',
      f8: 'bP',
      g8: 'bP',
      h8: 'bP',
      a8: 'bR',
      b8: 'bN',
      c8: 'bB',
      d8: 'bQ',
      e8: 'bK',
      f8: 'bB',
      g8: 'bN',
      h8: 'bR'
    }
        }

      }
    })
      
    case 'CREATE_BOARD':
    return state  
    default: {
      return startPosition
    }
  }
};

export default Position;

import React from 'react';
import { connect } from 'react-redux';

//No State, no class
let Piece = (props) => {
   const style = {
      'width': 49,
      'height': 49,
      'zIndex': 5,
   };

   const moveStart = (event) => {
      let pieceType = null
	 let pieceColor = props.pieceType.includes('w') ? 'w' : 'b'
	 if (props.pieceType.length === 2) {
	    pieceType = props.pieceType.charAt(1)
	 }

	 else {
	    pieceType = "P"
	 }

      props.draggingPiece(pieceType, pieceColor, event);
   };

   let src = null;
   let alt = null;
   const piece = () => {          
      switch(props.pieceType) {
	 case 'w': 
	    src = "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg"
	       alt = "Pawn"
	       break;

	 case 'wN': 
	    src = "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg"
	       alt = "Knight"
	       break;

	 case 'wB':
	    src = "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg"
	       alt = "Bishop"
	       break;

	 case 'wR':
	    src = "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg"
	       alt = "Bishop"
	       break;

	 case 'wQ': 
	    src = "https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg"
	       alt = "Queen"
	       break;

	 case 'wK':
	    src = "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg"
	       alt = "King"
	       break;

	 case 'b':
	    src = "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg"
	       alt = "Pawn"
	       break;

	 case 'bN':
	    src = "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg"
	       alt = "Knight"
	       break;

	 case 'bB': 
	    src = "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg"
	       alt = "Bishop"
	       break;

	 case 'bR':
	    src = "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg"
	       alt = "Rook"
	       break;

	 case 'bQ': 
	    src = "https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg"
	       alt = "Queen"
	       break;

	 case 'bK': 
	    src = "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg"
	       alt = "King"
	       break;

	 default:
	    src = ""
      }
   }

   //Set the piece
   piece()

      if(src === "")
	 return <div className="emptySquare" data-current-square={props.currentSquare}></div>
      else
	 return <img  src={src} alt={alt} draggable="true" style={style} onDragStart={moveStart} 
   data-current-square={props.currentSquare} />
};

const mapDispatchToProps = dispatch => {
   return {
      draggingPiece: (pieceType, pieceColor, event) => {
	 dispatch({
	    type: 'DRAG_START',
	    pieceType,
	    pieceColor,                                                                                                                                                                                                                                                                                                   
	    event: event,
	    moveSource: event.target.getAttribute("data-current-square"),
	 });
      },
   }
};

export default connect(null, mapDispatchToProps)(Piece);

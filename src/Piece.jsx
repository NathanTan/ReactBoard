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
      // console.log("Moving start, Event: " + JSON.stringify(event.target.alt)); 
       props.draggingPiece('wP', event);
    };

    console.log(JSON.stringify(props))

// let contect = document.createElement("img");
 
    let content = null;         

    const piece = () => {          
        switch(props.pieceType) {
                case 'w': content = <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg" 
                alt="Pawn" draggable="true" style={style} onDragStart={moveStart} data-current-square={props.currentSquare} />
                break;
                case 'wN': content = <img src="https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg" 
                alt="Knight" draggable="true" style={style} onDragStart={moveStart} data-current-square={props.currentSquare} />
                break;
                case 'wB': content = <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg" 
                alt="Bishop" draggable="true" style={style} onDragStart={moveStart} data-current-square={props.currentSquare} />
                break;
                case 'wR': content = <img src="https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg" 
                alt="Rook" draggable="true" style={style} onDragStart={moveStart} data-current-square={props.currentSquare} />
                break;
                case 'wQ': content = <img src="https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg" 
                alt="Queen" draggable="true" style={style} onDragStart={moveStart} data-current-square={props.currentSquare} />
                break;
                case 'wK': content = <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg" 
                alt="King" draggable="true" style={style} onDragStart={moveStart} data-current-square={props.currentSquare} />
                break;
                case 'b': content = <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg" 
                alt="Pawn" draggable="true" style={style} onDragStart={moveStart} data-current-square={props.currentSquare} />
                break;
                case 'bN': content = <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg" 
                alt="Knight" draggable="true" style={style} onDragStart={moveStart} data-current-square={props.currentSquare} />
                break;
                case 'bB': content = <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg" 
                alt="Bishop" draggable="true" style={style} onDragStart={moveStart} data-current-square={props.currentSquare} />
                break;
                case 'bR': content = <img src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg" 
                alt="Rook" draggable="true" style={style} onDragStart={moveStart} data-current-square={props.currentSquare} />
                break;
                case 'bQ': content = <img src="https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg" 
                alt="Queen" draggable="true" style={style} onDragStart={moveStart} data-current-square={props.currentSquare} />
                break;
                case 'bK': content = <img src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg" 
                alt="King" draggable="true" style={style} onDragStart={moveStart} data-current-square={props.currentSquare} />
                break;

                default:
                    content = <div className="emptySquare"></div>;
            }
    }

    //Set the piece
    piece();
    
    return (content);
};



const mapDispatchToProps = dispatch => {

         // console.log("Dispatch: " + JSON.stringify(dispatch));
   return {
      draggingPiece: (piece, event) => {
        dispatch({
            type: 'MOVE',
            piece: piece,                                                                                                                                                                                                                                                                                                   
            event: event,
        });
      }
   }
};




export default connect(null, mapDispatchToProps)(Piece);
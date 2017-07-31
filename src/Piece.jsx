import React from 'react';
//import PieceImages from 'src/images/WhiteRook.svg';

//No State, no class
let Piece = (props) => {
    const style = {
        // witdh: 50,
        // height: 50,
        // display: 'inline-block',
        'zIndex': 5,
        'paddingLeft': '2px',
    };

    let content = null;

    const piece = () => {
         
        switch(props.pieceType) {
                case 'wP': content = <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg" alt="Pawn" draggable="true" />
                case 'wN': content = <img src="https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg" alt="Knight" draggable="true" />
                case 'wB': content = <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg" alt="Bishop" draggable="true" />
                case 'wR': content = <img src="https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg" alt="Rook" draggable="true" />
                case 'wQ': content = <img src="https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg" alt="Queen" draggable="true" />
                case 'wK': content = <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg" alt="King" draggable="true" />
                case 'bP': content = <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg" alt="Pawn" draggable="true" />
                case 'bN': content = <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg" alt="Knight" draggable="true" />
                case 'bB': content = <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg" alt="Bishop" draggable="true" />
                case 'bR': content = <img src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg" alt="Rook" draggable="true" />
                case 'bQ': content = <img src="https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg" alt="Queen" draggable="true" />
                case 'bK': content = <img src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg" alt="King" draggable="true" />

                default:
                    content = <div></div>;
            }
    }

    console.log(JSON.stringify(piece));

    //<div style={style} draggable='true'>
    // return (<div>
    //     {(() => {
    //         switch(props.pieceType) {
    //             case 'wP': return <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg" alt="Pawn" draggable="true" />
    //             case 'wN': return <img src="https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg" alt="Knight" draggable="true" />
    //             case 'wB': return <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg" alt="Bishop" draggable="true" />
    //             case 'wR': return <img src="https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg" alt="Rook" draggable="true" />
    //             case 'wQ': return <img src="https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg" alt="Queen" draggable="true" />
    //             case 'wK': return <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg" alt="King" draggable="true" />
    //             case 'bP': return <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg" alt="Pawn" draggable="true" />
    //             case 'bN': return <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg" alt="Knight" draggable="true" />
    //             case 'bB': return <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg" alt="Bishop" draggable="true" />
    //             case 'bR': return <img src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg" alt="Rook" draggable="true" />
    //             case 'bQ': return <img src="https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg" alt="Queen" draggable="true" />
    //             case 'bK': return <img src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg" alt="King" draggable="true" />
                
    //             default:
    //                 return <div></div>;
    //         }
    //     })()}
    //     </div>
    // );

    //TODO: Make this work

    return (content);
};

export default Piece;
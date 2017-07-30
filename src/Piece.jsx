import React from 'react';
//import PieceImages from '../public/images';

//No State, no class
let Piece = (props) => {
    const style = {
        witdh: 50,
        height: 50,
        display: 'inline-block',
        'zIndex': 5
    };

    console.log("PIECE Props: " + JSON.stringify(props))

    return (
        <div style={style} draggable='true'>
            {props.pieceType === "wR" ? <img src="" alt="Rook" draggable="true" />
                : <img alt="Piece" draggable="true" />
            }
        </div>
    );
};

export default Piece;
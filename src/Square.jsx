import React from 'react';
import Piece from './Piece';
import { connect } from 'react-redux';

//@ts-check
class Square extends React.Component {
    style = {
        display: "inline-block",
        backgroundColor: this.props.squareColors,
        "zIndex": -5,
        width: "49px",
        height: "49px",
        //display: 'flex'
        
    }

    position = this.props.squareColumn + this.props.squareRow

    onPieceClick = () => {
        console.log("CLICKED");
        console.log("Square Color: " + this.style.backgroundColor.toString())
    }

    render() {
        return (
            <div style={this.style} onClick={this.squareMove}>
                <Piece pieceType={this.props.boardPosition[this.position]} currentSquare={this.position}/>
            </div>
        )
    }
}

//NOTE: mapStateToProps maps to the props for this component, not the child component.
const mapStateToProps = (state) => {
    return {
        boardPosition: createPositionObject(state.gameState.game.board.squares)
    };
}

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
    console.log(posObj)
    return posObj
}


export default connect(mapStateToProps)(Square)
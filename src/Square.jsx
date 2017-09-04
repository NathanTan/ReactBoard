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
    }

    pieceType = null
    pieceHeight = null
    pieceWidth = null

    position = this.props.squareColumn + this.props.squareRow

    onPieceClick = () => {
        console.log("CLICKED");
        console.log("Square Color: " + this.style.backgroundColor.toString())
    }

    drop = ev => {
        ev.preventDefault();
        let capture = false
        console.log(ev.target.nodeName + " " + ev.target)
        // console.log(ev.target.children[0].hasAttribute("class"))
        //if (ev.target.children[0].hasAttribute("class"))
        if (ev.target.nodeName === "IMG")
            capture = true
        console.log("Capture: " + capture)
        if (capture)
            this.props.dragPieceFinish(ev.target.getAttribute("data-current-square"), capture)
        else
            this.props.dragPieceFinish(ev.target.children[0].getAttribute("data-current-square"), capture)

    }

    allowDrop = event => {
        event.preventDefault();
        return false;
    }

    //Create new piece if not fixed piece for promotion modal.
    createPieceType = () => {
        //Create a piece for the promotion modal
        if (this.props.fixedPiece === "true") {
            console.log("Creating Modal Piece")
            console.log(this.props)
            this.style["width"] = "30px"
            this.style["height"] = "30px"
            if (this.props.WhiteToMove)
                this.pieceType = "w" + this.props.squareRow
            else
                this.pieceType = "b" + this.props.squareRow
            this.pieceHeight = "30px"
            this.pieceWidth = "30px"
            
        }

        //Create a normal piece
        else {
            this.pieceType = this.props.boardPosition[this.position]
        }

    }

    render() {
        this.createPieceType()

        return (
            <div style={this.style} onClick={this.squareMove} onDragOver={this.allowDrop} onDrop={this.drop}>
                <Piece pieceType={this.pieceType} currentSquare={this.position} pieceWidth={this.pieceWidth} pieceHeight={this.pieceHeight} />
            </div>
        )
    }
}

//NOTE: mapStateToProps maps to the props for this component, not the child component.
const mapStateToProps = (state) => {
    return {
        boardPosition: state.posObj,
        WhiteToMove: state.WhiteToMove
    };
}

const mapDispatchToProps = dispatch => {
    return {
        dragPieceFinish: (dropSquare, capture) => {
            dispatch({
                type: 'DRAG_END',
                dropSquare,
                capture,
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Square)

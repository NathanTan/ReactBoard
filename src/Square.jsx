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
        boardPosition: state.posObj
    };
}

export default connect(mapStateToProps)(Square)
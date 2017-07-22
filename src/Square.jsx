import React from 'react';
import Piece from './Piece';
import { connect } from 'react-redux';

//@ts-check
class Square extends React.Component {
  style = {
    display: "inline-block",
    backgroundColor: this.props.squareColors,
    "zIndex": -5
  }

  onPieceClick = () => {
    console.log("CLICKED");
  console.log("Square Color: " + this.style.backgroundColor.toString())
  } 

  render() {
    console.log("Square Props: " + JSON.stringify(this.props))
    return (
      <div style={this.style}>
        <Piece pieceType="Rook"/>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    boardPosition: state,
    pieceType: "Rook",
  };
}


export default connect(mapStateToProps)(Square)
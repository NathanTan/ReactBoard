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

  position = this.props.squareColumn + this.props.squareRow

  onPieceClick = () => {
    console.log("CLICKED");
  console.log("Square Color: " + this.style.backgroundColor.toString())
  } 

  render() {
    console.log("Square Props: " + JSON.stringify(this.props.state))
    return (
      <div style={this.style}>
        <h2>{this.position}</h2>
        if (this.position in this.props.state) 
        {
          <Piece pieceType={this.props.state[this.position.toString()]}/>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    boardPosition: state,
    pieceType: "Rook",
  };
}


export default connect(mapStateToProps)(Square)
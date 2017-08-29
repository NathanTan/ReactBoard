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

   drop = ev => {
      ev.preventDefault();
      this.props.dragPieceFinish(ev.target.children[0].getAttribute("data-current-square"))
   }

   allowDrop = event => {
      event.preventDefault();
      return false;
   }

   render() {
      return (
	    <div style={this.style} onClick={this.squareMove} onDragOver={this.allowDrop} onDrop={this.drop}>
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

const mapDispatchToProps = dispatch => {
   return {
      dragPieceFinish: (dropSquare) => {
	 dispatch({
	    type: 'DRAG_END',
	 dropSquare,
	 })
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Square)

import React from 'react';
import Rook from './Rook';
import Row from './Row';
import { connect } from 'react-redux';

//@ts-check
class Board extends React.Component {
  state = {
    name: '',
    position: {
      fen: "",
      objPos: {}
    }
  };

  style = {
    boarder: '2px solid #404040',
  };

  //Row indicated here, column indicated in Row.js
  render() {
    return (
      <div style={this.style}>
        <Row startSquare="white" squareRow="8"/>
        <Row startSquare="black" squareRow="7" />
        <Row startSquare="white" squareRow="6" />
        <Row startSquare="black" squareRow="5" />
        <Row startSquare="white" squareRow="4" />
        <Row startSquare="black" squareRow="3" />
        <Row startSquare="white" squareRow="2"/>
        <Row startSquare="black" squareRow="1" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    dealers: this.state,
  };
}
// Props to map from the state to the component
mapStateToProps = state => {
  return {
    dealers: this.state,
  };
};

//export default Board;
export default connect(mapStateToProps)(Board);

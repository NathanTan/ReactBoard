import React from 'react';
import Rook from './Rook';
import Row from './Row';
import { connect } from 'react-redux';

class Board extends React.Component {
  state = {
    name: 'x',
  };

  style = {
    boarder: '2px solid #404040',
  };

  render() {
    return (
      <div style={style}>
        <Row startSquare="white" />
        <Row startSquare="black" />
        <Row startSquare="white" />
        <Row startSquare="black" />
        <Row startSquare="white" />
        <Row startSquare="black" />
        <Row startSquare="white" />
        <Row startSquare="black" />
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

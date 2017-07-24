import React from 'react';
import Square from './Square';
import squareColors from './SquareColors';
import { connect } from 'react-redux';

//@ts-check
let Row = props => {

  return (
    <div>
      {props.startSquare === 'white'
        ? <Square squareColors={squareColors.white} squareRow={props.squareRow}
    squareColumn="a"/>
        : <Square squareColors={squareColors.black} squareRow={props.squareRow}
    squareColumn="a"/>}

       {props.startSquare === 'black'
        ? <Square squareColors={squareColors.white} squareRow={props.squareRow}
    squareColumn="b"/>
        : <Square squareColors={squareColors.black} squareRow={props.squareRow}
    squareColumn="b"/>}

       {props.startSquare === 'white'
        ? <Square squareColors={squareColors.white} squareRow={props.squareRow}
    squareColumn="c"/>
        : <Square squareColors={squareColors.black} squareRow={props.squareRow}
    squareColumn="c"/>}

       {props.startSquare === 'black'
        ? <Square squareColors={squareColors.white} squareRow={props.squareRow}
    squareColumn="d"/>
        : <Square squareColors={squareColors.black} squareRow={props.squareRow}
    squareColumn="d"/>}

       {props.startSquare === 'white'
        ? <Square squareColors={squareColors.white} squareRow={props.squareRow}
    squareColumn="e"/>
        : <Square squareColors={squareColors.black} squareRow={props.squareRow}
    squareColumn="e"/>}
    
       {props.startSquare === 'black'
        ? <Square squareColors={squareColors.white} squareRow={props.squareRow}
    squareColumn="f"/>
        : <Square squareColors={squareColors.black} squareRow={props.squareRow}
    squareColumn="f"/>}

       {props.startSquare === 'white'
        ? <Square squareColors={squareColors.white} squareRow={props.squareRow}
    squareColumn="g"/>
        : <Square squareColors={squareColors.black} squareRow={props.squareRow}
    squareColumn="g"/>}

       {props.startSquare === 'black'
        ? <Square squareColors={squareColors.white} squareRow={props.squareRow}
    squareColumn="h"/>
        : <Square squareColors={squareColors.black} squareRow={props.squareRow}
    squareColumn="h"/>}
    </div>
  );
};

function mapStateToProps(state){
    return {
        temp: "LOUD",
        temp2: "quiet",
        state: state,
    };
}


export default connect (mapStateToProps) (Row);

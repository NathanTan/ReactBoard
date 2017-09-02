import React from 'react';
import Square from './Square';
import SquareColors from './SquareColors';



const PromotionModal = () => {

    return <div>
        <Square SquareColors={SquareColors.black} squareRow="" squareColumn="" />
        <Square SquareColors={SquareColors.white} squareRow="" squareColumn="" />
        <Square SquareColors={SquareColors.black} squareRow="" squareColumn="" />
        <Square SquareColors={SquareColors.white} squareRow="" squareColumn="" />
    </div>
}

export default PromotionModal; 
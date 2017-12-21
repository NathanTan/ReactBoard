import React from 'react';
import Square from './Square.jsx';
import SquareColors from './SquareColors.js';



const PromotionModal = () => {
    const style = {
        visibility: 'hidden'
    }


    return <div id="promotion-modal" style={style}>
        <Square squareColors={SquareColors.black} fixedPiece="true" squareRow="Q" squareColumn="" />
        <Square squareColors={SquareColors.white} fixedPiece="true" squareRow="B" squareColumn="" />
        <Square squareColors={SquareColors.black} fixedPiece="true" squareRow="K" squareColumn="" />
        <Square squareColors={SquareColors.white} fixedPiece="true" squareRow="R" squareColumn="" />
    </div>
}

export default PromotionModal; 
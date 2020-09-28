import React, {useState, useEffect} from 'react';
import Square from "./Square";

const Grid = (props) => {
    const renderSquare = (i) => {
        // console.log("render Square");
        return <Square value={props.result[i]} onClick={() => props.guess(i)} />;
    }

    return(
        <div className="grid">
            <div className="grid-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
                {renderSquare(3)}
            </div>
            <div className="grid-row">
                {renderSquare(4)}
                {renderSquare(5)}
                {renderSquare(6)}
                {renderSquare(7)}
            </div>
            <div className="grid-row">
                {renderSquare(8)}
                {renderSquare(9)}
                {renderSquare(10)}
                {renderSquare(11)}
            </div>
            <div className="grid-row">
                {renderSquare(12)}
                {renderSquare(13)}
                {renderSquare(14)}
                {renderSquare(15)}
            </div>
        </div>
    )
}

export default Grid;
import React, {useState, useEffect} from 'react';

const Square = (props) => {
    var color;
    if(props.value == 0){
        color = "grey";
    }else if(props.value == 1){
        color = "blue";
    }else if(props.value == 3){
        color = "green";
    }else if(props.value == 4){
        color = "yellow";
    }else if(props.value == 5){
        color = "red";
    }
    return(
        <div className="cell" style={{background: color, height:90, width:90, display:"inline-block", margin:6}} onClick={props.onClick}>
        </div>
    )
}

export default Square;


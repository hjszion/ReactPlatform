import React from 'react';
import { connect } from "react-redux";
import {buyCake, buyIceCream } from "../redux";

function ItemContainer(props){
    return (
        <div>
            <h2>Item - {props.item} - {props.numOfItem}</h2>
            <button onClick={props.buyItem}>Buy Items</button>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams;
    const item = ownProps.cake ? "CAKE" : "ICE_CREAM";
    return {
        numOfItem: itemState,
        item: item
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIceCream());
    return {
        buyItem: dispatchFunction
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);



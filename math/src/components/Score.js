import React, {Component} from 'react';
import {updateGoldRequest, getHistoryRequest, getTotalRequest} from "../redux/index";
import{connect} from 'react-redux';

class Score extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.goldData.total}</h1>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        goldData:state.gold
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        totalGold: (data) => dispatch(getTotalRequest(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Score);



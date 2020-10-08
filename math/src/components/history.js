import React, {Component} from 'react';
import {getTotalRequest} from "../redux/index";
import{connect} from 'react-redux';

class History extends Component {
    render() {
        const history = this.props.goldData.history.map((history) => {
            return <li>{history}</li>
        });
        return (
            <div>
                <ul>{history}</ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(History);
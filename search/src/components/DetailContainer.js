import React, {useState, useEffect} from 'react';
import { Link, withRouter } from "react-router-dom"
import {connect} from 'react-redux';

import {fetchUsers, setUser} from "../redux";

const DetailContainer = (props) => {
    const [user, setUser] = useState({});
    useEffect(() => {
        setUser(props.userData.user);
    }, []);

    const goback = () => {
        console.log("re-navigating-home!");
        props.history.push("");
    }

    const usersDisplay = () => {
        return props.userData.user ? (
            <div>
                <h1>{props.userData.user.name}</h1>
                <br />
                <p>address: {props.userData.user.address.street}</p>
                <p>email: {props.userData.user.email}</p>
                <p>company: {props.userData.user.company.name}</p>
                <p>phone: {props.userData.user.phone}</p>
                <br />
                <button onClick={() => goback()}>Back</button>
            </div>
        ) : (
            <div>
                <h1>user doesn't exist please go back to Home page!</h1>
                <button onClick={() => goback()}>Back</button>
            </div>
        )
    }
    return (
        <div>
            {usersDisplay()}
        </div>
    );
};

const mapStateToProps = (state) => {
    return{
        userData: state.user
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return{
//         fetchUsers:() => dispatch(fetchUsers())
//     }
// }

export default connect(mapStateToProps, null)(withRouter(DetailContainer));

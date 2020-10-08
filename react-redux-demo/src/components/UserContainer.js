import React, {useEffect} from "react";
import {connect} from "react-redux";
import { fetchUsers } from "../redux";

function UserContainer(props){
    useEffect(() => {
            props.fetchUsers();
        }, []);
    console.log("props:", props);
    return props.userData.loading ? (
        <h2>Loading</h2>
    ) : props.userData.error ? (
        <h2>props.userData.error</h2>
    ) : (
        <div>
            <h2>User List</h2>
            <div>
                {
                    props.userData && props.userData.users && props.userData.users.map(user => <p key={user.id}>{user.name}</p>)
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        userData: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchUsers:() => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
